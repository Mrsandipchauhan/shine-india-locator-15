import { Link } from "react-router-dom";
import { 
  Landmark, 
  MapPin, 
  Building, 
  ChevronRight, 
  LayoutList,
  CarFront,
  Wrench,
  Star,
  CircleCheck,
  PhoneCall
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import citiesData from "@/data/citiesData";
import localAreasData from "@/data/localAreasData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Group cities by region for better organization
const regions = {
  north: ["Delhi", "Chandigarh", "Lucknow", "Jaipur"],
  south: ["Bangalore", "Hyderabad", "Chennai", "Coimbatore", "Kochi"],
  west: ["Mumbai", "Pune", "Ahmedabad", "Surat", "Vadodara"],
  east: ["Kolkata", "Patna", "Guwahati"],
  central: ["Indore", "Bhopal", "Nagpur"]
};

// Get popular areas based on the actual data
const getPopularAreas = () => {
  const popularCities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Chandigarh"];
  
  const areasByCity: Record<string, string[]> = {};
  
  // Group areas by their parent city
  localAreasData.forEach(area => {
    if (!areasByCity[area.parentCity]) {
      areasByCity[area.parentCity] = [];
    }
    areasByCity[area.parentCity].push(area.name);
  });
  
  // Create a map of city names to their areas
  const popularAreas: Record<string, string[]> = {};
  
  // Get the city name from citiesData based on ID
  citiesData.forEach(city => {
    if (popularCities.includes(city.name) && areasByCity[city.id]) {
      popularAreas[city.name] = areasByCity[city.id];
    }
  });
  
  return popularAreas;
};

const popularAreas = getPopularAreas();

// Function to find area ID by name
const getAreaIdByName = (areaName: string): string => {
  const area = localAreasData.find(area => 
    area.name.toLowerCase() === areaName.toLowerCase()
  );
  return area ? area.id : areaName.toLowerCase().replace(/\s+/g, '-');
};

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <LayoutList className="text-primary" />
            Site Map
          </h1>
          <p className="text-muted-foreground">
            Find premium car detailing services across all our locations in India
          </p>
        </div>

        {/* Services Overview */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CarFront className="text-primary" size={20} />
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 hover:bg-accent transition-colors">
              <Link to="/services/exterior-detailing" className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wrench className="text-primary" size={16} />
                  <span>Exterior Detailing</span>
                </div>
                <ChevronRight size={16} />
              </Link>
            </Card>
            <Card className="p-4 hover:bg-accent transition-colors">
              <Link to="/services/interior-detailing" className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wrench className="text-primary" size={16} />
                  <span>Interior Detailing</span>
                </div>
                <ChevronRight size={16} />
              </Link>
            </Card>
            <Card className="p-4 hover:bg-accent transition-colors">
              <Link to="/services/ceramic-coating" className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="text-primary" size={16} />
                  <span>Ceramic Coating</span>
                </div>
                <ChevronRight size={16} />
              </Link>
            </Card>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link to="/services" className="flex items-center p-4 bg-card rounded-lg hover:bg-accent">
              <Wrench className="mr-2 text-primary" />
              All Services
            </Link>
            <Link to="/locations" className="flex items-center p-4 bg-card rounded-lg hover:bg-accent">
              <MapPin className="mr-2 text-primary" />
              All Locations
            </Link>
            <Link to="/contact" className="flex items-center p-4 bg-card rounded-lg hover:bg-accent">
              <PhoneCall className="mr-2 text-primary" />
              Contact Us
            </Link>
            <Link to="/about" className="flex items-center p-4 bg-card rounded-lg hover:bg-accent">
              <Landmark className="mr-2 text-primary" />
              About Us
            </Link>
          </div>
        </div>

        {/* Top Cities with Areas */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Top Cities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(popularAreas).map(([city, areas]) => (
              <div key={city} className="bg-card p-6 rounded-lg">
                <Link 
                  to={`/locations/${city.toLowerCase()}`}
                  className="text-lg font-semibold flex items-center mb-3 hover:text-primary"
                >
                  <Building className="mr-2" size={20} />
                  {city}
                </Link>
                <ul className="space-y-2">
                  {areas.slice(0, 6).map((area) => (
                    <li key={area}>
                      <Link 
                        to={`/area/${getAreaIdByName(area)}`}
                        className="flex items-center text-sm text-muted-foreground hover:text-foreground"
                      >
                        <ChevronRight className="mr-1" size={16} />
                        Car Detailing in {area}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* All Cities by Region */}
        <div>
          <h2 className="text-xl font-semibold mb-4">All Locations by Region</h2>
          {Object.entries(regions).map(([region, cities]) => (
            <div key={region} className="mb-8">
              <h3 className="text-lg font-medium mb-4 capitalize flex items-center gap-2">
                <MapPin className="text-primary" size={18} />
                {region} India
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cities.map((city) => {
                  const cityData = citiesData.find(c => c.name.toLowerCase() === city.toLowerCase());
                  const cityId = cityData ? cityData.id : city.toLowerCase();
                  
                  return (
                    <Card key={city} className="p-4 hover:bg-accent transition-colors">
                      <Link
                        to={`/locations/${cityId}`}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Building className="text-primary" size={16} />
                          {city}
                        </div>
                        <ChevronRight size={16} />
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {/* All Areas A-Z */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <MapPin className="text-primary" size={20} />
            All Service Areas (A-Z)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {localAreasData
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((area) => (
                <Card key={area.id} className="p-4 hover:bg-accent transition-colors">
                  <Link
                    to={`/area/${area.id}`}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <CircleCheck className="text-primary" size={16} />
                      {area.name}
                    </div>
                    <ChevronRight size={16} />
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
