
import { useState, useEffect } from "react";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import citiesData from "@/data/citiesData";
import localAreasData from "@/data/localAreasData";

// Helper function to get all unique cities and areas
const getAllCities = () => {
  const uniqueLocations = new Set<string>();
  
  // Add all parent cities
  localAreasData.forEach(area => {
    uniqueLocations.add(area.parentCity);
    uniqueLocations.add(area.name);
  });
  
  // Add any cities from citiesData that might not be parents
  citiesData.forEach(city => uniqueLocations.add(city.name));
  
  return Array.from(uniqueLocations);
};

export const useCitySlider = () => {
  const [displayLocations, setDisplayLocations] = useState<string[]>([]);
  const [nearestCity, setNearestCity] = useState<string>("");
  const [nearbyAreas, setNearbyAreas] = useState<string[]>([]);

  useEffect(() => {
    const updateLocations = async () => {
      // Always show all available locations first
      const allLocations = getAllCities();
      const allAreas = localAreasData.map(area => area.name);
      setDisplayLocations([...allLocations, ...allAreas]);

      try {
        const location = await getUserLocation();
        const nearest = findNearestCity(location.lat, location.lon);
        
        if (nearest?.city) {
          const detectedCity = nearest.city.name;
          setNearestCity(detectedCity);
          
          // Get ALL areas for the detected city
          const cityAreasList = localAreasData
            .filter(area => area.parentCity.toLowerCase() === detectedCity.toLowerCase())
            .map(area => area.name);
          
          setNearbyAreas(cityAreasList);
          
          // Prioritize nearest city and its areas in the display order
          const otherLocations = [...allLocations, ...allAreas].filter(
            loc => loc.toLowerCase() !== detectedCity.toLowerCase() && 
                  !cityAreasList.includes(loc)
          );
          
          setDisplayLocations([
            detectedCity,
            ...cityAreasList,
            ...otherLocations
          ]);
        }
      } catch (error) {
        console.error("Error detecting location:", error);
        // On error, keep showing all locations but use Mumbai as default nearest
        setNearestCity("Mumbai");
        const mumbaiAreas = localAreasData
          .filter(area => area.parentCity.toLowerCase() === "mumbai")
          .map(area => area.name);
        setNearbyAreas(mumbaiAreas);
      }
    };
    
    // Initial update
    updateLocations();
    
    // Set up periodic updates every 5 minutes
    const intervalId = setInterval(updateLocations, 5 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return {
    displayLocations,
    nearestCity,
    nearbyAreas
  };
};
