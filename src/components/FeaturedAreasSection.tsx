import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import localAreasData from "@/data/localAreasData";
import { LocationDetectionStatus } from "./areas/LocationDetectionStatus";
import { AreaCard } from "./areas/AreaCard";
const FeaturedAreasSection = () => {
  const [nearbyArea, setNearbyArea] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [nearbyAreas, setNearbyAreas] = useState<any[]>([]);
  const featuredAreas = useMemo(() => {
    const areas = [];
    const parentCities = new Set();
    for (const area of localAreasData) {
      if (!parentCities.has(area.parentCity)) {
        parentCities.add(area.parentCity);
        areas.push(area);
      }
      if (areas.length >= 6) break;
    }
    if (areas.length < 6) {
      for (const area of localAreasData) {
        if (!areas.includes(area)) {
          areas.push(area);
        }
        if (areas.length >= 6) break;
      }
    }
    return areas.slice(0, 6);
  }, []);
  const detectLocation = async () => {
    try {
      setIsLoading(true);
      setLocationError(null);
      const location = await getUserLocation();
      if (location.lat && location.lon) {
        const nearest = findNearestCity(location.lat, location.lon);
        if (nearest?.city) {
          const mainArea = localAreasData.find(area => area.parentCity.toLowerCase() === nearest.city.name.toLowerCase() || area.name.toLowerCase() === nearest.city.name.toLowerCase());
          if (mainArea) {
            setNearbyArea(mainArea);
            const additionalAreas = localAreasData.filter(area => area.id !== mainArea.id && (area.parentCity.toLowerCase() === nearest.city.name.toLowerCase() || area.name.toLowerCase().includes(nearest.city.name.toLowerCase()) || mainArea.content.nearbyLocations.includes(area.name))).slice(0, 3);
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
  useEffect(() => {
    const timer = setTimeout(() => {
      detectLocation();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return <section className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Best Car Detailing Services Near You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Search for your location to discover services near you.</p>
          
          <LocationDetectionStatus isLoading={isLoading} locationError={locationError} nearbyArea={nearbyArea} nearbyAreas={nearbyAreas} onRetryDetection={detectLocation} />
        </div>
        
        
        
        
      </div>
    </section>;
};
export default FeaturedAreasSection;