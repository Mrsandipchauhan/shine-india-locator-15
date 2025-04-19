
interface Location {
  lat: number;
  lon: number;
  city?: string;
}

interface City {
  id: string;
  name: string;
  lat: number;
  lon: number;
}

const majorCities: City[] = [
  { id: "delhi", name: "Delhi", lat: 28.6139, lon: 77.2090 },
  { id: "mumbai", name: "Mumbai", lat: 19.0760, lon: 72.8777 },
  { id: "bangalore", name: "Bangalore", lat: 12.9716, lon: 77.5946 },
  { id: "hyderabad", name: "Hyderabad", lat: 17.3850, lon: 78.4867 },
  { id: "chennai", name: "Chennai", lat: 13.0827, lon: 80.2707 },
  { id: "kolkata", name: "Kolkata", lat: 22.5726, lon: 88.3639 },
  { id: "pune", name: "Pune", lat: 18.5204, lon: 73.8567 },
  { id: "ahmedabad", name: "Ahmedabad", lat: 23.0225, lon: 72.5714 }
];

// Default cities to show if location access is denied
export const DEFAULT_CITIES = majorCities.slice(0, 5);

// Get user's location using browser geolocation with fallback
export const getUserLocation = (): Promise<Location> => {
  return new Promise((resolve) => {
    // First check if we have a stored preference
    const storedCity = getUserCityPreference();
    if (storedCity) {
      const city = majorCities.find(c => c.id === storedCity);
      if (city) {
        return resolve({
          lat: city.lat,
          lon: city.lon,
          city: city.name
        });
      }
    }

    // Set a timeout for the geolocation request
    const timeoutId = setTimeout(() => {
      // Fallback to default city (Mumbai)
      const defaultCity = majorCities[1]; // Mumbai
      resolve({
        lat: defaultCity.lat,
        lon: defaultCity.lon,
        city: defaultCity.name
      });
    }, 5000);

    // Try to get current location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          clearTimeout(timeoutId);
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        () => {
          clearTimeout(timeoutId);
          // Fallback to default city (Mumbai)
          const defaultCity = majorCities[1];
          resolve({
            lat: defaultCity.lat,
            lon: defaultCity.lon,
            city: defaultCity.name
          });
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      clearTimeout(timeoutId);
      // Fallback to default city if geolocation is not supported
      const defaultCity = majorCities[1];
      resolve({
        lat: defaultCity.lat,
        lon: defaultCity.lon,
        city: defaultCity.name
      });
    }
  });
};

// Calculate distance between two points using Haversine formula
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Find nearest city from the list
export const findNearestCity = (lat: number, lon: number): { city: City, distance: number } | null => {
  let nearest = null;
  let minDistance = Infinity;

  for (const city of majorCities) {
    const distance = calculateDistance(lat, lon, city.lat, city.lon);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = { city, distance };
    }
  }

  return nearest;
};

// Store user's city preference
export const saveUserCityPreference = (cityId: string) => {
  localStorage.setItem('preferred_city', cityId);
};

// Get user's stored city preference
export const getUserCityPreference = (): string | null => {
  return localStorage.getItem('preferred_city');
};

// Check if we should show the location prompt (once every 3 days)
export const shouldShowLocationPrompt = (): boolean => {
  const lastPrompt = localStorage.getItem('last_location_prompt');
  if (!lastPrompt) return true;
  
  const now = new Date().getTime();
  const lastPromptTime = parseInt(lastPrompt);
  const threeDays = 3 * 24 * 60 * 60 * 1000;
  
  return now - lastPromptTime > threeDays;
};

// Mark that we've shown the location prompt
export const markLocationPromptShown = () => {
  localStorage.setItem('last_location_prompt', new Date().getTime().toString());
};

