
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getUserLocation, findNearestCity, shouldShowLocationPrompt, markLocationPromptShown, saveUserCityPreference } from "@/services/locationService";
import { useCountryDetection } from "@/hooks/use-country-detection";
import localAreasData from "@/data/localAreasData";

export const topCities = [
  { id: "delhi", name: "Delhi" },
  { id: "mumbai", name: "Mumbai" },
  { id: "bangalore", name: "Bangalore" },
  { id: "hyderabad", name: "Hyderabad" },
  { id: "chennai", name: "Chennai" }
];

const LocationDetection = () => {
  const [userCity, setUserCity] = useState<string>("");
  const [nearestServiceArea, setNearestServiceArea] = useState<string>("");
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
      // Defensive fallback in case lat/lon not available
      if (!location.lat || !location.lon) {
        throw new Error("Location coordinates not found");
      }

      // Find nearest city from registered service areas based on user location
      const nearest = findNearestCity(location.lat, location.lon);

      // The best nearby service location is defined as the city or area with best coverage near user
      // For now, use the city found by findNearestCity as the detected city
      // We can pick a nearby area from localAreasData that matches or closest to nearest city

      if (nearest?.city) {
        setUserCity(nearest.city.name);

        // Find a service area that is nearest or a major location near the detected city
        // Let's pick the first local area with parentCity matching nearest.city or fallback to nearest city itself if local area not found
        const matchedArea = localAreasData.find(area => area.parentCity.toLowerCase() === nearest.city.name.toLowerCase());
        const serviceAreaName = matchedArea ? matchedArea.name : nearest.city.name;
        setNearestServiceArea(serviceAreaName);

        // Show toast with info and action to view services in the nearby area
        toast.info(
          `You're in ${nearest.city.name}, your nearest best detailing service is in ${serviceAreaName}.`,
          {
            description: `Would you like to view car detailing services in ${serviceAreaName}?`,
            action: {
              label: "View Services",
              onClick: () => {
                saveUserCityPreference(serviceAreaName.toLowerCase());
                // Navigate to nearby service area's page
                // For local area: /locations/:cityId or /area/:areaId
                // We'll navigate to /locations/:cityId as general city listing for simplicity
                const cityId = nearest.city.id || nearest.city.name.toLowerCase();
                window.location.href = `/locations/${cityId}`;
              }
            },
            onDismiss: () => {
              markLocationPromptShown();
            },
            cancel: {
              label: "Don't show again",
              onClick: () => {
                markLocationPromptShown();
              }
            },
            duration: 10000,
          }
        );
        setHasPrompted(true);
      } else {
        setHasPrompted(true);
        markLocationPromptShown();
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
