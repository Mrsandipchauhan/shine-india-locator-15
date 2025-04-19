
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface LocationItemProps {
  location: string;
  isNearestCity: boolean;
  isNearbyArea: boolean;
}

export const LocationItem = ({ location, isNearestCity, isNearbyArea }: LocationItemProps) => {
  const getItemStyles = () => {
    let className = "flex items-center whitespace-nowrap border border-border rounded-full px-3 py-1.5 transition-colors shadow-sm";
    
    if (isNearestCity) {
      className += " bg-primary text-white font-medium hover:bg-primary/90";
    } else if (isNearbyArea) {
      className += " bg-primary/30 text-white hover:bg-primary/40";
    } else {
      className += " bg-card hover:bg-primary/10";
    }
    
    return className;
  };

  // Standardize the location route
  const locationPath = `/locations/${encodeURIComponent(location.toLowerCase())}`;

  return (
    <Link
      to={locationPath}
      className={getItemStyles()}
    >
      <MapPin 
        size={14} 
        className={isNearestCity ? "text-primary-foreground mr-1.5" : "text-primary mr-1.5"} 
      />
      <span className="text-sm">
        {location}
        {isNearestCity && <span className="ml-1 text-xs">(nearest)</span>}
      </span>
    </Link>
  );
};
