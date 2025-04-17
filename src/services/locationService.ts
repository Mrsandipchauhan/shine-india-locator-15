
import { toast } from "sonner";

// Sample city coordinates for basic geolocation
const cityCoordinates = [
  { id: "delhi", name: "Delhi", lat: 28.6139, lng: 77.2090 },
  { id: "mumbai", name: "Mumbai", lat: 19.0760, lng: 72.8777 },
  { id: "bangalore", name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { id: "hyderabad", name: "Hyderabad", lat: 17.3850, lng: 78.4867 },
  { id: "chennai", name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { id: "kolkata", name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { id: "ahmedabad", name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
  { id: "pune", name: "Pune", lat: 18.5204, lng: 73.8567 },
  { id: "jaipur", name: "Jaipur", lat: 26.9124, lng: 75.7873 },
  { id: "lucknow", name: "Lucknow", lat: 26.8467, lng: 80.9462 }
];

// Local storage keys
const USER_LOCATION_KEY = "shine_detailers_user_location";
const LOCATION_PROMPT_TIMESTAMP = "shine_detailers_location_prompt_time";

export interface LocationData {
  lat: number;
  lon: number;
  city?: string;
}

// Get user location from browser geolocation API
export const getUserLocation = (): Promise<LocationData> => {
  return new Promise((resolve, reject) => {
    // First check if we have a stored location
    const storedLocation = localStorage.getItem(USER_LOCATION_KEY);
    if (storedLocation) {
      try {
        const locationData = JSON.parse(storedLocation);
        resolve(locationData);
        return;
      } catch (e) {
        // Invalid stored data, continue to geolocation
        localStorage.removeItem(USER_LOCATION_KEY);
      }
    }
    
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser"));
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationData = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        
        // Store the location data
        localStorage.setItem(USER_LOCATION_KEY, JSON.stringify(locationData));
        
        resolve(locationData);
      },
      (error) => {
        console.error("Error getting location:", error.message);
        reject(error);
      }
    );
  });
};

// Calculate distance between two coordinates using Haversine formula
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
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

// Find the nearest city based on coordinates
export const findNearestCity = (lat: number, lon: number) => {
  let nearestCity = null;
  let shortestDistance = Infinity;
  
  cityCoordinates.forEach(city => {
    const distance = calculateDistance(lat, lon, city.lat, city.lng);
    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearestCity = city;
    }
  });
  
  return { city: nearestCity, distance: shortestDistance };
};

// Check if we should show the location prompt
export const shouldShowLocationPrompt = (): boolean => {
  const lastPromptTime = localStorage.getItem(LOCATION_PROMPT_TIMESTAMP);
  
  if (!lastPromptTime) {
    return true;
  }
  
  const lastPromptDate = new Date(parseInt(lastPromptTime, 10));
  const currentDate = new Date();
  
  // Calculate the difference in days
  const timeDiff = currentDate.getTime() - lastPromptDate.getTime();
  const daysDiff = timeDiff / (1000 * 3600 * 24);
  
  // Show prompt if it's been more than 3 days
  return daysDiff >= 3;
};

// Mark that we've shown the location prompt
export const markLocationPromptShown = () => {
  localStorage.setItem(LOCATION_PROMPT_TIMESTAMP, Date.now().toString());
};

// Save the user's city preference
export const saveUserCityPreference = (cityId: string) => {
  const city = cityCoordinates.find(c => c.id === cityId);
  if (city) {
    const locationData = {
      lat: city.lat,
      lon: city.lng,
      city: city.name
    };
    localStorage.setItem(USER_LOCATION_KEY, JSON.stringify(locationData));
    markLocationPromptShown();
  }
};
