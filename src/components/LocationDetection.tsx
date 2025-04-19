import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getUserLocation, findNearestCity, shouldShowLocationPrompt, markLocationPromptShown, saveUserCityPreference } from "@/services/locationService";
import { useCountryDetection } from "@/hooks/use-country-detection";

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
  const userCountry = useCountryDetection();

  useEffect(() => {
    if (!hasPrompted && !isDetecting && userCountry) {
      detectUserLocation();
    }
  }, [hasPrompted, isDetecting, userCountry]);

  const detectUserLocation = async () => {
    if (!shouldShowLocationPrompt()) {
      return;
    }
    
    setIsDetecting(true);
    
    try {
      const location = await getUserLocation();
      const nearest = location.city ? 
        { city: { name: location.city, id: location.city.toLowerCase() } } : 
        findNearestCity(location.lat, location.lon);
      
      if (nearest?.city) {
        setUserCity(nearest.city.name);
        
        setTimeout(() => {
          toast.info(
            `Showing services near ${nearest.city.name}, ${userCountry}`, 
            {
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
            }
          );
        }, 1000);
        
        setHasPrompted(true);
      }
    } catch (error) {
      console.error("Error detecting location:", error);
      setHasPrompted(true);
      markLocationPromptShown();
    } finally {
      setIsDetecting(false);
    }
  };

  return null;
};

export default LocationDetection;
