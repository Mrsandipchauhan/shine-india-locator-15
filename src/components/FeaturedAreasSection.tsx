
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Navigation, MapPinOff, Car } from "lucide-react";
import localAreasData from "@/data/localAreasData";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getUserLocation, findNearestCity, serviceProvidersByCity } from "@/services/locationService";
import { serviceProvidersByCity as providers } from "@/data/serviceProviders";

// Get a selection of featured areas from different parent cities
const getFeaturedAreas = (count = 6) => {
  const featuredAreas = [];
  const parentCities = new Set();
  
  // First pick one area from each parent city
  for (const area of localAreasData) {
    if (!parentCities.has(area.parentCity)) {
      parentCities.add(area.parentCity);
      featuredAreas.push(area);
    }
    
    if (featuredAreas.length >= count) break;
  }
  
  // If we need more areas, add additional ones
  if (featuredAreas.length < count) {
    for (const area of localAreasData) {
      if (!featuredAreas.includes(area)) {
        featuredAreas.push(area);
      }
      
      if (featuredAreas.length >= count) break;
    }
  }
  
  return featuredAreas.slice(0, count);
};

const FeaturedAreasSection = () => {
  const [nearbyArea, setNearbyArea] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [locationError, setLocationError] = useState<string | null>(null);
  const featuredAreas = getFeaturedAreas(6);
  const [nearbyAreas, setNearbyAreas] = useState<any[]>([]);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        setIsLoading(true);
        setLocationError(null);
        
        const location = await getUserLocation();
        if (location.lat && location.lon) {
          const nearest = findNearestCity(location.lat, location.lon);
          if (nearest?.city) {
            // Find the primary nearby area
            const mainArea = localAreasData.find(area => 
              area.parentCity.toLowerCase() === nearest.city.name.toLowerCase()
            );
            
            if (mainArea) {
              setNearbyArea(mainArea);
              
              // Find additional nearby areas (within the same city or neighboring cities)
              const additionalAreas = localAreasData.filter(area => 
                area.id !== mainArea.id && 
                (area.parentCity.toLowerCase() === nearest.city.name.toLowerCase() || 
                 area.name.toLowerCase().includes(nearest.city.name.toLowerCase()))
              ).slice(0, 3);
              
              setNearbyAreas(additionalAreas);
              
              toast.success(`Found services near ${nearest.city.name}!`, {
                description: "We've highlighted services available in your area."
              });
            } else {
              setLocationError("No service areas found in your location");
              toast.error("No service areas available in your exact location", {
                description: "Please check our other locations or contact us directly."
              });
            }
          }
        }
      } catch (error) {
        console.error("Error detecting location:", error);
        setLocationError("Unable to detect your location");
        toast.error("Location detection failed", {
          description: "Please allow location access or select your city manually."
        });
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);
  
  const handleRetryLocation = () => {
    detectLocation();
  };
  
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Detailing Locations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find premium car detailing services in these popular areas or search for your location to discover services near you.
          </p>
          
          {isLoading ? (
            <div className="mt-6 flex items-center justify-center">
              <div className="animate-spin mr-2">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <p>Detecting your location...</p>
            </div>
          ) : locationError ? (
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="flex items-center text-yellow-600 mb-2">
                <MapPinOff className="w-5 h-5 mr-2" />
                <p>{locationError}</p>
              </div>
              <Button variant="outline" size="sm" onClick={handleRetryLocation} className="mt-2">
                Retry Detection
              </Button>
            </div>
          ) : nearbyArea && (
            <div className="mt-6">
              <div className="flex items-center justify-center space-x-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Navigation className="w-5 h-5 text-primary" />
                </div>
                <p className="text-primary">
                  Services available near you in{" "}
                  <Link to={`/area/${nearbyArea.id}`} className="font-semibold hover:underline">
                    {nearbyArea.name}
                  </Link>
                </p>
              </div>
              
              {nearbyAreas.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">Other nearby service areas:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {nearbyAreas.map(area => (
                      <Link 
                        key={area.id} 
                        to={`/area/${area.id}`}
                        className="px-3 py-1 bg-background rounded-full text-sm hover:bg-primary/10 transition-colors flex items-center"
                      >
                        <MapPin className="w-3 h-3 mr-1 text-primary" />
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAreas.map((area) => (
            <Card 
              key={area.id} 
              className={`bg-background hover:shadow-md transition-shadow overflow-hidden ${
                nearbyArea && area.id === nearbyArea.id ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
            >
              <div className="h-40 bg-cover bg-center" style={{ 
                backgroundImage: `url('https://source.unsplash.com/featured/?${area.name},car')`,
                filter: "brightness(0.7) contrast(1.1)"
              }}>
                <div className="w-full h-full bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center text-white">
                    <MapPin size={16} className="text-primary mr-2" />
                    <h3 className="font-semibold">{area.name}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {area.content.introduction.substring(0, 100)}...
                </p>
                
                {/* Show available service count if we have providers for this area's parent city */}
                {providers[area.parentCity.toLowerCase()] && (
                  <p className="text-xs text-primary mb-3">
                    {providers[area.parentCity.toLowerCase()].length} service providers available
                  </p>
                )}
                
                <Link to={`/area/${area.id}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center">
                    View Services <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/locations">
            <Button variant="outline" size="lg">
              View All Locations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAreasSection;
