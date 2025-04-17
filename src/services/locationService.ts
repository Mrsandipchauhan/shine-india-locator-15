
import citiesData from "@/data/citiesData";

interface LocationResponse {
  city?: string;
  regionName?: string;
  country?: string;
  lat?: number;
  lon?: number;
  query?: string;
}

// Function to get the user's location using ip-api.com (using HTTPS)
export const getUserLocation = async (): Promise<LocationResponse> => {
  try {
    // Using HTTPS version of the API
    const response = await fetch('https://pro.ip-api.com/json/?fields=city,regionName,country,lat,lon,query', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching user location:', error);
    // Return empty object on error instead of throwing
    return {};
  }
};

// Function to find the nearest city from our database
export const findNearestCity = (lat: number, lon: number) => {
  if (!citiesData.length) return null;
  
  // Calculate distance between two points using the Haversine formula
  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
  };
  
  // Find city with shortest distance
  return citiesData.reduce((nearest, city) => {
    if (!city.coordinates) return nearest;
    
    const distance = getDistance(lat, lon, city.coordinates.lat, city.coordinates.lng);
    
    if (!nearest || distance < nearest.distance) {
      return {
        city: city,
        distance: distance
      };
    }
    
    return nearest;
  }, null as { city: typeof citiesData[0], distance: number } | null);
};

// Function to find a city by name (for search functionality)
export const findCityByName = (cityName: string) => {
  if (!cityName) return null;
  
  const normalizedSearchTerm = cityName.toLowerCase();
  
  return citiesData.find(city => 
    city.name.toLowerCase().includes(normalizedSearchTerm)
  );
};
