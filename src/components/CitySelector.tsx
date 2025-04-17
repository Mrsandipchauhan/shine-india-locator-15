
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Top cities in India by car ownership
const majorCities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", 
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
  "Chandigarh", "Coimbatore", "Nagpur", "Surat", "Indore",
  "Bhopal", "Patna", "Vadodara", "Guwahati", "Kochi"
];

// City images mapping
const cityImages: Record<string, string> = {
  "Delhi": "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop",
  "Mumbai": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2069&auto=format&fit=crop",
  "Bangalore": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2071&auto=format&fit=crop",
  "Hyderabad": "https://images.unsplash.com/photo-1588416499018-d8c621346a94?q=80&w=2067&auto=format&fit=crop",
  "Chennai": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop",
  "default": "https://images.unsplash.com/photo-1625050789689-29c436451dc9?q=80&w=2070&auto=format&fit=crop"
};

const CitySelector = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [focused, setFocused] = useState(false);
  
  const filteredCities = searchTerm
    ? majorCities.filter(city => 
        city.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : majorCities;

  // Get featured cities (first 5)
  const featuredCities = majorCities.slice(0, 5);
  
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Premium Car Detailing Services Across India</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            ShineDetailers provides comprehensive car detailing services in all major cities across India.
            Our certified professionals use premium products and techniques to restore and protect your vehicle.
            Find your nearest location below.
          </p>
        </div>
        
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="text"
              placeholder="Search your city..."
              className="pl-10 pr-4 py-6 text-foreground bg-background/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
            />
          </div>
          
          {focused && filteredCities.length > 0 && (
            <div className="absolute z-20 mt-1 w-full bg-background rounded-md border border-border shadow-lg max-h-60 overflow-auto">
              <ul className="py-1">
                {filteredCities.map((city) => (
                  <li key={city}>
                    <Link
                      to={`/locations/${city.toLowerCase()}`}
                      className="flex items-center px-4 py-2 hover:bg-primary/10 text-sm cursor-pointer"
                    >
                      <MapPin size={14} className="mr-2 text-primary" />
                      Car Detailing in {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Featured Cities with Images */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Top Detailing Destinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {featuredCities.map((city) => (
              <Link 
                key={city}
                to={`/locations/${city.toLowerCase()}`}
                className="group relative overflow-hidden rounded-lg h-48"
              >
                <img 
                  src={cityImages[city] || cityImages.default} 
                  alt={`Car detailing in ${city}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h4 className="text-white font-semibold mb-1">{city}</h4>
                  <p className="text-white/80 text-sm">Premium Detailing</p>
                  <div className="flex items-center mt-2 text-primary text-xs font-medium">
                    <span>View Services</span>
                    <ChevronRight size={14} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* All cities grid */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">All Service Locations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {majorCities.map((city) => (
                <Link 
                  key={city}
                  to={`/locations/${city.toLowerCase()}`}
                  className="bg-background hover:bg-primary/10 border border-border rounded-lg p-4 text-center transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <MapPin size={20} className="text-primary mb-2" />
                    <span className="font-medium">{city}</span>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CitySelector;
