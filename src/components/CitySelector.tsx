import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
          <h2 className="text-3xl font-bold mb-4">India's Most Trusted Car Detailing Service Near You</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Looking for the best car detailing near you? ShineDetailers delivers premium car care with certified experts and top-grade products. 
            From exterior detailing to ceramic coating, we're your one-stop solution for professional car care services.
          </p>
        </div>
        
        <div className="max-w-md mx-auto mb-12 flex flex-col space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="text"
              placeholder="Find car detailing services in your city..."
              className="pl-10 pr-4 py-6 text-foreground bg-background/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
            />
          </div>
          
          {/* City Dropdown Selector */}
          <div className="w-full">
            <Select onValueChange={(value) => window.location.href = `/locations/${value.toLowerCase()}`}>
              <SelectTrigger className="w-full py-6 bg-background">
                <SelectValue placeholder="Or select a city from the list" />
              </SelectTrigger>
              <SelectContent className="max-h-96">
                {majorCities.map((city) => (
                  <SelectItem key={city} value={city}>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2 text-primary" />
                      <span>{city}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold mb-6">Top Detailing Destinations</h3>
            <Link 
              to="/sitemap"
              className="text-sm text-primary hover:underline flex items-center"
            >
              View All Locations
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
      </div>
    </section>
  );
};

export default CitySelector;
