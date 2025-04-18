
import { Link } from "react-router-dom";
import { Landmark, MapPin, Building, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import citiesData from "@/data/citiesData";

// Group cities by region for better organization
const regions = {
  north: ["Delhi", "Chandigarh", "Lucknow", "Jaipur"],
  south: ["Bangalore", "Hyderabad", "Chennai", "Coimbatore", "Kochi"],
  west: ["Mumbai", "Pune", "Ahmedabad", "Surat", "Vadodara"],
  east: ["Kolkata", "Patna", "Guwahati"],
  central: ["Indore", "Bhopal", "Nagpur"]
};

const popularAreas = {
  "Delhi": ["Dwarka", "Rohini", "South Delhi", "Noida", "Gurgaon", "Greater Noida"],
  "Mumbai": ["Andheri", "Bandra", "Borivali", "Thane", "Navi Mumbai", "Powai"],
  "Bangalore": ["Whitefield", "Electronic City", "Koramangala", "HSR Layout", "Indiranagar", "JP Nagar"],
  "Hyderabad": ["HITEC City", "Gachibowli", "Jubilee Hills", "Banjara Hills", "Madhapur", "Kukatpally"],
  "Chennai": ["Anna Nagar", "T Nagar", "OMR", "Velachery", "Adyar", "Porur"],
  // Add more cities and their popular areas here
};

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Site Map</h1>
          <p className="text-muted-foreground">
            Find premium car detailing services across all our locations in India
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/services" className="flex items-center p-4 bg-card rounded-lg hover:bg-accent">
              <Building className="mr-2 text-primary" />
              Our Services
            </Link>
            <Link to="/locations" className="flex items-center p-4 bg-card rounded-lg hover:bg-accent">
              <MapPin className="mr-2 text-primary" />
              All Locations
            </Link>
            <Link to="/contact" className="flex items-center p-4 bg-card rounded-lg hover:bg-accent">
              <Landmark className="mr-2 text-primary" />
              Contact Us
            </Link>
          </div>
        </div>

        {/* Top Cities */}
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
                  {areas.map((area) => (
                    <li key={area}>
                      <Link 
                        to={`/area/${area.toLowerCase().replace(/\s+/g, '-')}`}
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
              <h3 className="text-lg font-medium mb-4 capitalize">{region} India</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cities.map((city) => (
                  <Link
                    key={city}
                    to={`/locations/${city.toLowerCase()}`}
                    className="flex items-center p-3 bg-card rounded-lg hover:bg-accent"
                  >
                    <MapPin className="mr-2 text-primary" size={16} />
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
