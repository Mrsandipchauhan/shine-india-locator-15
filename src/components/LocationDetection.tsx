
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getUserLocation, findNearestCity, shouldShowLocationPrompt, markLocationPromptShown, saveUserCityPreference } from "@/services/locationService";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const topCities = [
  { id: "delhi", name: "Delhi" },
  { id: "mumbai", name: "Mumbai" },
  { id: "bangalore", name: "Bangalore" },
  { id: "hyderabad", name: "Hyderabad" },
  { id: "chennai", name: "Chennai" }
];

const LocationDetection = () => {
  const [userCity, setUserCity] = useState("");
  const [hasPrompted, setHasPrompted] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);

  useEffect(() => {
    // Only attempt detection once per session
    if (!hasPrompted && !isDetecting) {
      detectUserLocation();
    }
  }, [hasPrompted, isDetecting]);

  const detectUserLocation = async () => {
    if (!shouldShowLocationPrompt()) {
      return;
    }
    
    setIsDetecting(true);
    
    try {
      const location = await getUserLocation();
      // getUserLocation now always returns a result with fallback
      const nearest = location.city ? 
        { city: { name: location.city, id: location.city.toLowerCase() } } : 
        findNearestCity(location.lat, location.lon);
      
      if (nearest?.city) {
        setUserCity(nearest.city.name);
        
        setTimeout(() => {
          toast.info(`Showing services near ${nearest.city.name}`, {
            description: `Would you like to view car detailing services in ${nearest.city.name}?`,
            action: {
              label: "View Services",
              onClick: () => {
                saveUserCityPreference(nearest.city.id);
                window.location.href = `/locations/${nearest.city.id}`;
              }
            },
            onDismiss: () => {
              markLocationPromptShown();
            },
            duration: 8000,
            cancel: {
              label: "Don't show again",
              onClick: () => {
                markLocationPromptShown();
              }
            }
          });
        }, 1000);
        
        setHasPrompted(true);
      }
    } catch (error) {
      console.error("Error detecting location:", error);
      // On error, default to Mumbai
      const defaultCity = topCities[1]; // Mumbai
      setUserCity(defaultCity.name);
      markLocationPromptShown();
      
      toast.info(`Welcome to ShineDetailers`, {
        description: "Browse our services across major cities in India",
        action: {
          label: "View Services",
          onClick: () => {
            window.location.href = `/locations/${defaultCity.id}`;
          }
        },
        duration: 8000
      });
    } finally {
      setIsDetecting(false);
    }
  };

  // This component doesn't render anything visible
  return null;
};

export default LocationDetection;
