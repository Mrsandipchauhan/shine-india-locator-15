
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

// Top cities in India by car ownership
const majorCities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", 
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
  "Chandigarh", "Coimbatore", "Nagpur", "Surat", "Indore",
  "Bhopal", "Patna", "Vadodara", "Guwahati", "Kochi"
];

const CitySelector = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [focused, setFocused] = useState(false);
  
  const filteredCities = searchTerm
    ? majorCities.filter(city => 
        city.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : majorCities;

  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Car Detailing Near You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ShineDetailers provides premium car detailing services across major cities in India. 
            Find your city below or search to discover the nearest location.
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
      </div>
    </section>
  );
};

export default CitySelector;
