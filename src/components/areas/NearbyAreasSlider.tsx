
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, AlertCircle } from "lucide-react";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import localAreasData from "@/data/localAreasData";

interface NearbyArea {
  id: string;
  name: string;
  distance: number;
}

const NearbyAreasSlider = () => {
  const [nearbyAreas, setNearbyAreas] = useState<NearbyArea[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const location = await getUserLocation();
        
        if (location.lat && location.lon) {
          const nearest = findNearestCity(location.lat, location.lon);
          
          if (nearest?.city) {
            const nearbyAreasList = localAreasData
              .filter(area => {
                const distance = calculateDistance(
                  location.lat,
                  location.lon,
                  area.coordinates.lat,
                  area.coordinates.lng
                );
                return distance <= 15;
              })
              .map(area => ({
                id: area.id,
                name: area.name,
                distance: calculateDistance(
                  location.lat,
                  location.lon,
                  area.coordinates.lat,
                  area.coordinates.lng
                )
              }))
              .sort((a, b) => a.distance - b.distance)
              .slice(0, 10);

            setNearbyAreas(nearbyAreasList);
          }
        }
      } catch (error) {
        console.error("Error detecting location:", error);
        setError("Could not detect your location");
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center gap-2 py-4 text-muted-foreground">
        <AlertCircle className="h-4 w-4" />
        <span className="text-sm">{error}</span>
      </div>
    );
  }

  if (nearbyAreas.length === 0) {
    return (
      <div className="flex items-center justify-center py-4 text-muted-foreground">
        <span className="text-sm">No service areas found nearby</span>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">Nearby Service Areas</span>
      </div>
      <div className="flex overflow-x-auto whitespace-nowrap py-2 scrollbar-hide no-scrollbar gap-2">
        {nearbyAreas.map((area) => (
          <Link
            key={area.id}
            to={`/area/${area.id}`}
            className="inline-flex items-center bg-card hover:bg-primary/10 border border-border rounded-full px-3 py-1.5 transition-colors shrink-0"
          >
            <MapPin size={14} className="text-primary mr-1.5" />
            <span className="text-sm font-medium">{area.name}</span>
            <span className="text-xs text-muted-foreground ml-1.5">
              ({Math.round(area.distance)}km)
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NearbyAreasSlider;
