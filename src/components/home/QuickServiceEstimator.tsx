import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Car, Calculator, MapPin, Search, CarFront, IndianRupee, DollarSign, Euro, PoundSterling } from "lucide-react";
import { useCountryDetection } from "@/hooks/use-country-detection";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import { worldwideLocations } from "@/data/globalLocationsData";

// Car types with global availability
const carTypes = [
  { id: "hatchback", name: "Hatchback", priceMultiplier: 1 },
  { id: "sedan", name: "Sedan", priceMultiplier: 1.2 },
  { id: "suv", name: "SUV", priceMultiplier: 1.5 },
  { id: "premium", name: "Premium Sedan", priceMultiplier: 1.8 },
  { id: "luxury", name: "Luxury", priceMultiplier: 2 },
  { id: "exotic", name: "Exotic/Supercar", priceMultiplier: 3 }
];

// Service types with global availability
const serviceTypes = [
  { id: "basic-wash", name: "Basic Wash & Wax", description: "External wash with hand drying and basic wax application" },
  { id: "premium-detailing", name: "Premium Detailing", description: "Complete exterior detailing with clay bar treatment" },
  { id: "ceramic-coating", name: "Ceramic Coating", description: "Professional grade ceramic protection" },
  { id: "interior-detailing", name: "Interior Detailing", description: "Deep interior cleaning and conditioning" },
  { id: "paint-correction", name: "Paint Correction", description: "Multi-stage paint correction to remove swirls and scratches" },
  { id: "full-restoration", name: "Complete Restoration", description: "Full exterior and interior restoration" },
  { id: "headlight-restoration", name: "Headlight Restoration", description: "Restore yellowed or cloudy headlights to clarity" },
  { id: "engine-detailing", name: "Engine Bay Detailing", description: "Clean and protect engine compartment" }
];

// Country specific base prices in local currency
const countryPricing = {
  "India": {
    currency: "₹",
    currencyCode: "INR",
    symbol: <IndianRupee className="h-4 w-4" />,
    multiplier: 1,
    basePrice: {
      "basic-wash": 999,
      "premium-detailing": 2499,
      "ceramic-coating": 7999,
      "interior-detailing": 1999,
      "paint-correction": 3999,
      "full-restoration": 9999,
      "headlight-restoration": 1499,
      "engine-detailing": 1299
    }
  },
  "United States": {
    currency: "$",
    currencyCode: "USD",
    symbol: <DollarSign className="h-4 w-4" />,
    multiplier: 0.012,
    basePrice: {
      "basic-wash": 49,
      "premium-detailing": 149,
      "ceramic-coating": 449,
      "interior-detailing": 99,
      "paint-correction": 199,
      "full-restoration": 599,
      "headlight-restoration": 79,
      "engine-detailing": 69
    }
  },
  "United Kingdom": {
    currency: "£",
    currencyCode: "GBP",
    symbol: <PoundSterling className="h-4 w-4" />,
    multiplier: 0.0095,
    basePrice: {
      "basic-wash": 40,
      "premium-detailing": 120,
      "ceramic-coating": 380,
      "interior-detailing": 85,
      "paint-correction": 160,
      "full-restoration": 490,
      "headlight-restoration": 65,
      "engine-detailing": 55
    }
  },
  "European Union": {
    currency: "€",
    currencyCode: "EUR",
    symbol: <Euro className="h-4 w-4" />,
    multiplier: 0.011,
    basePrice: {
      "basic-wash": 45,
      "premium-detailing": 135,
      "ceramic-coating": 420,
      "interior-detailing": 90,
      "paint-correction": 170,
      "full-restoration": 520,
      "headlight-restoration": 70,
      "engine-detailing": 60
    }
  }
};

// Default to India pricing if country not found
const defaultCountry = "India";

// Popular cities by country
const popularLocationsByCountry = {
  "India": [
    "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", 
    "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow"
  ],
  "United States": [
    "New York", "Los Angeles", "Chicago", "Houston", "Miami", 
    "San Francisco", "Seattle", "Boston", "Dallas", "Atlanta"
  ],
  "United Kingdom": [
    "London", "Manchester", "Birmingham", "Liverpool", "Leeds",
    "Bristol", "Glasgow", "Edinburgh", "Cardiff", "Belfast"
  ],
  "European Union": [
    "Paris", "Berlin", "Madrid", "Rome", "Amsterdam",
    "Barcelona", "Munich", "Vienna", "Brussels", "Lisbon"
  ]
};

// Set fallback locations
const fallbackLocations = popularLocationsByCountry["India"];

// Define the type for service IDs to fix the TypeScript error
type ServiceId = "basic-wash" | "premium-detailing" | "ceramic-coating" | "interior-detailing" | 
                "paint-correction" | "full-restoration" | "headlight-restoration" | "engine-detailing";

const QuickServiceEstimator = () => {
  const [carType, setCarType] = useState("");
  const [serviceType, setServiceType] = useState<ServiceId | "">("");
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [additionalServices, setAdditionalServices] = useState<ServiceId[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [userCity, setUserCity] = useState("");
  
  // Detect user's country
  const userCountry = useCountryDetection();
  const [currentCountry, setCurrentCountry] = useState(defaultCountry);
  
  // Update country when detected
  useEffect(() => {
    if (userCountry) {
      // Check if the detected country is in our supported countries list
      const supportedCountry = Object.keys(countryPricing).includes(userCountry) 
        ? userCountry 
        : userCountry.includes("United Kingdom") ? "United Kingdom"
        : userCountry.includes("US") ? "United States"
        : (
            // Check if country is in EU
            ["Germany", "France", "Italy", "Spain", "Netherlands", 
             "Belgium", "Portugal", "Ireland", "Greece", "Austria",
             "Poland", "Sweden", "Denmark", "Finland"].includes(userCountry)
          ) ? "European Union" : defaultCountry;
      
      setCurrentCountry(supportedCountry);
    }
  }, [userCountry]);
  
  // Get country-specific pricing
  const getCountryPricing = () => {
    return countryPricing[currentCountry as keyof typeof countryPricing] || countryPricing[defaultCountry];
  };
  
  // Format price according to country
  const formatPrice = (price: number) => {
    const pricing = getCountryPricing();
    return `${pricing.currency}${price.toLocaleString()}`;
  };
  
  // Get popular locations for the current country
  const getPopularLocations = () => {
    return popularLocationsByCountry[currentCountry as keyof typeof popularLocationsByCountry] || fallbackLocations;
  };
  
  // Detect user's location on component mount
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const userLoc = await getUserLocation();
        if (userLoc.city) {
          setUserCity(userLoc.city);
          setLocation(userLoc.city);
        } else if (userLoc.lat && userLoc.lon) {
          const nearest = findNearestCity(userLoc.lat, userLoc.lon);
          if (nearest?.city) {
            setUserCity(nearest.city.name);
            setLocation(nearest.city.name);
          }
        }
      } catch (error) {
        console.error("Error detecting location:", error);
      }
    };
    
    detectLocation();
  }, []);
  
  // Update location search with country-specific suggestions
  useEffect(() => {
    if (searchTerm.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    const timer = setTimeout(() => {
      // Get locations for current country only
      const countryLocations = currentCountry && worldwideLocations[
        Object.keys(worldwideLocations).find(continent =>
          Object.keys(worldwideLocations[continent as keyof typeof worldwideLocations]).includes(currentCountry)
        ) as keyof typeof worldwideLocations
      ]?.[currentCountry as string] || [];

      const results = countryLocations.filter(city => 
        city.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Find closest matches for suggestions
      const suggestions = countryLocations
        .filter(city => !results.includes(city))
        .filter(city => {
          const similarity = calculateStringSimilarity(city.toLowerCase(), searchTerm.toLowerCase());
          return similarity > 0.3; // Show suggestions with 30% or more similarity
        })
        .slice(0, 3); // Limit to top 3 suggestions

      setSearchResults([...results, ...suggestions]);
      setShowLocationDropdown(results.length > 0 || suggestions.length > 0);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, currentCountry]);

  // Helper function to calculate string similarity
  const calculateStringSimilarity = (str1: string, str2: string) => {
    const len1 = str1.length;
    const len2 = str2.length;
    const matrix = Array(len2 + 1).fill(null).map(() => Array(len1 + 1).fill(0));

    for (let i = 0; i <= len1; i++) matrix[0][i] = i;
    for (let j = 0; j <= len2; j++) matrix[j][0] = j;

    for (let j = 1; j <= len2; j++) {
      for (let i = 1; i <= len1; i++) {
        if (str1[i - 1] === str2[j - 1]) {
          matrix[j][i] = matrix[j - 1][i - 1];
        } else {
          matrix[j][i] = Math.min(
            matrix[j - 1][i - 1] + 1,
            matrix[j][i - 1] + 1,
            matrix[j - 1][i] + 1
          );
        }
      }
    }

    const maxLen = Math.max(len1, len2);
    return (maxLen - matrix[len2][len1]) / maxLen;
  };
  
  const handleLocationSelect = (selectedLocation: string) => {
    setLocation(selectedLocation);
    setSearchTerm(selectedLocation);
    setShowLocationDropdown(false);
  };
  
  const toggleAdditionalService = (serviceId: ServiceId) => {
    setAdditionalServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };
  
  const calculateEstimate = () => {
    if (!carType || !serviceType) {
      toast.error("Please select both car type and service");
      return;
    }
    
    const selectedCar = carTypes.find(car => car.id === carType);
    const pricing = getCountryPricing();
    const basePriceObj = pricing.basePrice;
    
    if (selectedCar && basePriceObj && serviceType) {
      // Calculate base price - Fixed the TypeScript error here
      const basePrice = basePriceObj[serviceType] * selectedCar.priceMultiplier;
      
      // Add price for additional services - Fixed the TypeScript error here
      const additionalPrice = additionalServices.reduce((total, service) => {
        return total + (basePriceObj[service] * 0.4); // 40% of base price for add-ons
      }, 0);
      
      // Apply location-specific adjustment (optional)
      const locationMultiplier = location === "Mumbai" || location === "Delhi" || 
                               location === "London" || location === "New York" ? 1.1 : 1;
      
      const finalPrice = Math.round((basePrice + additionalPrice) * locationMultiplier);
      setEstimatedPrice(finalPrice);
      
      const serviceName = serviceTypes.find(s => s.id === serviceType)?.name || serviceType;
      const carName = selectedCar.name;
      
      toast.success("Estimate generated!", {
        description: `${serviceName} for your ${carName} in ${location || userCity || 'your area'} starts at ${formatPrice(finalPrice)}`
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-70"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Global Detailing Estimator</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Get an instant estimate for premium car detailing services in your location with our advanced pricing calculator
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-primary/10 overflow-hidden backdrop-blur-sm shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
            
            <CardHeader className="text-center relative z-10 pb-2 pt-6 border-b border-border/50">
              <CardTitle className="flex items-center justify-center gap-2 text-lg md:text-xl">
                <Calculator className="text-primary h-5 w-5 md:h-6 md:w-6" />
                International Detailing Cost Calculator
                {currentCountry && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full ml-2">
                    {currentCountry}
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="relative z-10 p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
                {/* Car Type Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center">
                    <CarFront size={16} className="mr-2 text-primary" />
                    Vehicle Type
                  </label>
                  <Select value={carType} onValueChange={setCarType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      {carTypes.map(car => (
                        <SelectItem key={car.id} value={car.id}>
                          {car.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Service Type Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center">
                    <Car size={16} className="mr-2 text-primary" />
                    Primary Service
                  </label>
                  <Select value={serviceType} onValueChange={value => setServiceType(value as ServiceId)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map(service => (
                        <SelectItem key={service.id} value={service.id}>
                          <div>
                            <div>{service.name}</div>
                            <div className="text-xs text-muted-foreground">{service.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Location Search */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2 flex items-center">
                    <MapPin size={16} className="mr-2 text-primary" />
                    Your Location
                  </label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <Input
                      type="text"
                      placeholder={userCity || "Search your city..."}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onFocus={() => setShowLocationDropdown(searchResults.length > 0)}
                      onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)}
                      className="pl-9"
                    />
                  </div>
                  
                  {showLocationDropdown && (
                    <div className="absolute w-full mt-1 max-h-60 overflow-auto rounded-md bg-popover z-50 shadow-md border border-border">
                      {isSearching ? (
                        <div className="text-center py-2 text-sm text-muted-foreground">Searching...</div>
                      ) : (
                        <ul className="py-1">
                          {searchResults.map((city, index) => {
                            const isMatch = city.toLowerCase().includes(searchTerm.toLowerCase());
                            return (
                              <li 
                                key={city} 
                                className={`px-3 py-2 text-sm hover:bg-accent cursor-pointer flex items-center ${
                                  !isMatch ? 'text-muted-foreground' : ''
                                }`}
                                onClick={() => handleLocationSelect(city)}
                              >
                                <MapPin size={14} className="mr-2 text-primary" />
                                {city}
                                {!isMatch && (
                                  <span className="ml-2 text-xs text-muted-foreground">
                                    (suggested)
                                  </span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Additional Services */}
              {serviceType && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Add-on Services (Optional)</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {serviceTypes
                      .filter(service => service.id !== serviceType)
                      .slice(0, 4) // Limit to prevent overcrowding
                      .map(service => (
                        <div
                          key={service.id}
                          onClick={() => toggleAdditionalService(service.id as ServiceId)}
                          className={`px-3 py-2 text-xs rounded-lg cursor-pointer transition-colors flex items-center border ${
                            additionalServices.includes(service.id as ServiceId)
                              ? 'bg-primary/10 border-primary/30 text-primary'
                              : 'border-border bg-card/80 hover:bg-accent/30'
                          }`}
                        >
                          <div className={`w-3 h-3 rounded mr-2 ${additionalServices.includes(service.id as ServiceId) ? 'bg-primary' : 'bg-muted'}`}></div>
                          {service.name}
                        </div>
                      ))}
                  </div>
                </div>
              )}
              
              <Button 
                onClick={calculateEstimate} 
                className="w-full bg-primary hover:bg-primary/90 mb-6"
                size="lg"
              >
                Calculate Worldwide Estimate
              </Button>
              
              {estimatedPrice !== null && (
                <div className="bg-primary/5 p-4 rounded-lg text-center animate-fade-in border border-primary/20">
                  <div className="flex items-center justify-center mb-2">
                    <p className="text-sm">Estimated price for {location || userCity || 'your location'} starting from:</p>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-3 flex items-center justify-center gap-1">
                    {getCountryPricing().symbol}
                    {estimatedPrice.toLocaleString()}
                    <span className="text-xs font-normal ml-1 text-muted-foreground">
                      {getCountryPricing().currencyCode}
                    </span>
                  </p>
                  
                  <p className="text-xs text-muted-foreground mb-4 max-w-lg mx-auto">
                    *Pricing varies based on vehicle condition, specific location, and additional services required.
                    This is an estimate and the final price may differ after professional inspection.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/services" className="w-full sm:w-auto">
                      <Button variant="outline" size="sm" className="w-full">View Detailed Services</Button>
                    </Link>
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90">Request Custom Quote</Button>
                    </Link>
                  </div>
                </div>
              )}
              
              
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickServiceEstimator;
