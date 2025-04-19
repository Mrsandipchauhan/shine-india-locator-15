
import { useState, useEffect } from "react";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import localAreasData from "@/data/localAreasData";

// Helper function moved outside for better performance
const getAllCities = () => {
  const uniqueCities = new Set<string>();
  localAreasData.forEach(area => uniqueCities.add(area.parentCity));
  return Array.from(uniqueCities);
};

export const useCitySlider = () => {
  const [displayLocations, setDisplayLocations] = useState<string[]>([]);
  const [nearestCity, setNearestCity] = useState<string>("");
  const [nearbyAreas, setNearbyAreas] = useState<string[]>([]);

  useEffect(() => {
    const detectLocationAndSetAreas = async () => {
      // Set initial cities immediately
      const initialCities = getAllCities();
      setDisplayLocations(initialCities);
      
      try {
        const location = await getUserLocation();
        if (location.lat && location.lon) {
          const nearest = findNearestCity(location.lat, location.lon);
          if (nearest?.city) {
            const detectedCity = nearest.city.name;
            setNearestCity(detectedCity);
            
            // Get areas for the nearest city - limit to top 3
            const cityAreasList = localAreasData
              .filter(area => area.parentCity.toLowerCase() === detectedCity.toLowerCase())
              .map(area => area.name)
              .slice(0, 3);
            
            if (cityAreasList.length > 0) {
              setNearbyAreas(cityAreasList);
              const otherCities = getAllCities()
                .filter(city => city.toLowerCase() !== detectedCity.toLowerCase())
                .slice(0, 6);
              
              setDisplayLocations([detectedCity, ...cityAreasList, ...otherCities]);
            }
          }
        }
      } catch (error) {
        console.error("Error detecting location:", error);
      }
    };
    
    detectLocationAndSetAreas();
  }, []);

  return {
    displayLocations,
    nearestCity,
    nearbyAreas
  };
};
