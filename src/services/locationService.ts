
import { toast } from "sonner";

// Top cities in India with coordinates
const majorCities = [
  { id: "delhi", name: "Delhi", lat: 28.6139, lon: 77.2090 },
  { id: "mumbai", name: "Mumbai", lat: 19.0760, lon: 72.8777 },
  { id: "bangalore", name: "Bangalore", lat: 12.9716, lon: 77.5946 },
  { id: "hyderabad", name: "Hyderabad", lat: 17.3850, lon: 78.4867 },
  { id: "chennai", name: "Chennai", lat: 13.0827, lon: 80.2707 },
  { id: "kolkata", name: "Kolkata", lat: 22.5726, lon: 88.3639 },
  { id: "pune", name: "Pune", lat: 18.5204, lon: 73.8567 },
  { id: "ahmedabad", name: "Ahmedabad", lat: 23.0225, lon: 72.5714 },
  { id: "jaipur", name: "Jaipur", lat: 26.9124, lon: 75.7873 },
  { id: "lucknow", name: "Lucknow", lat: 26.8467, lon: 80.9462 }
];

// Function to get user's location
export const getUserLocation = async (): Promise<{ lat: number | null; lon: number | null }> => {
  try {
    // If the browser doesn't support geolocation
    if (!navigator.geolocation) {
      throw new Error("Geolocation is not supported by your browser");
    }
    
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          reject(new Error("Failed to get location"));
        },
        { timeout: 10000 } // 10 seconds timeout
      );
    });
  } catch (error) {
    console.error("Error fetching user location:", error);
    // Use a fallback method (like IP based) or return null
    try {
      // Fallback to IP-based location
      const response = await fetch("https://ipapi.co/json/");
      if (!response.ok) throw new Error("Failed to fetch location data");
      
      const data = await response.json();
      return { lat: data.latitude, lon: data.longitude };
    } catch (fallbackError) {
      console.error("Fallback location detection failed:", fallbackError);
      return { lat: null, lon: null };
    }
  }
};

// Calculate distance between two points using the Haversine formula
const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the Earth in km
  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  
  return distance;
};

const degreesToRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};

// Find the nearest city to the user's location
export const findNearestCity = (lat: number, lon: number) => {
  if (!lat || !lon) return null;
  
  let nearestCity = null;
  let shortestDistance = Infinity;
  
  majorCities.forEach(city => {
    const distance = getDistance(lat, lon, city.lat, city.lon);
    
    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearestCity = city;
    }
  });
  
  // Only return if within 100km radius
  if (nearestCity && shortestDistance <= 100) {
    return {
      city: nearestCity,
      distance: shortestDistance
    };
  }
  
  return null;
};
