
import { Car, MapPinOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface LocationDetectionStatusProps {
  isLoading: boolean;
  locationError: string | null;
  nearbyArea: any;
  nearbyAreas: any[];
  onRetryDetection: () => void;
}

export const LocationDetectionStatus = ({
  isLoading,
  locationError,
  nearbyArea,
  nearbyAreas,
  onRetryDetection
}: LocationDetectionStatusProps) => {
  if (isLoading) {
    return (
      <div className="mt-6 flex items-center justify-center">
        <div className="animate-spin mr-2">
          <Car className="w-5 h-5 text-primary" />
        </div>
        <p>Detecting your location...</p>
      </div>
    );
  }

  if (locationError) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center">
        <div className="flex items-center text-yellow-600 mb-2">
          <MapPinOff className="w-5 h-5 mr-2" />
          <p>{locationError}</p>
        </div>
        <Button variant="outline" size="sm" onClick={onRetryDetection} className="mt-2">
          Retry Detection
        </Button>
      </div>
    );
  }

  if (nearbyArea) {
    return (
      <div className="mt-6">
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <Navigation className="w-5 h-5 text-primary" />
          </div>
          <p className="text-primary">
            Services available near you in{" "}
            <Link to={`/area/${nearbyArea.id}`} className="font-semibold hover:underline">
              {nearbyArea.name}
            </Link>
          </p>
        </div>
        
        {nearbyAreas.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Other nearby service areas:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {nearbyAreas.map(area => (
                <Link 
                  key={area.id} 
                  to={`/area/${area.id}`}
                  className="px-3 py-1 bg-background rounded-full text-sm hover:bg-primary/10 transition-colors flex items-center"
                >
                  <MapPin className="w-3 h-3 mr-1 text-primary" />
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};
