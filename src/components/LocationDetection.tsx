
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

  useEffect(() => {
    // Only attempt detection once per session
    if (!hasPrompted) {
      detectUserLocation();
    }
  }, [hasPrompted]);

  const detectUserLocation = async () => {
    // Only show the prompt if we should (based on the 3-day rule)
    if (!shouldShowLocationPrompt()) {
      return;
    }
    
    try {
      const location = await getUserLocation();
      
      if (location.lat && location.lon) {
        // If the location already has a city property, use that
        if (location.city) {
          setUserCity(location.city);
          return;
        }
        
        const nearest = findNearestCity(location.lat, location.lon);
        
        if (nearest?.city) {
          setUserCity(nearest.city.name);
          
          toast.info(`We detected you're near ${nearest.city.name}`, {
            description: `Would you like to view car detailing services in ${nearest.city.name}?`,
            action: {
              label: "View Services",
              onClick: () => {
                saveUserCityPreference(nearest.city.id);
                window.location.href = `/locations/${nearest.city.id}`;
              }
            },
            onDismiss: () => {
              // Mark that we've shown the prompt even if they dismiss it
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
          
          // Mark that we've prompted in this session
          setHasPrompted(true);
        }
      }
    } catch (error) {
      console.error("Error detecting location:", error);
      // Mark that we've shown the prompt even if there was an error
      markLocationPromptShown();
      setHasPrompted(true);
    }
  };

  return null; // This component only handles location detection and toast
};

export default LocationDetection;
