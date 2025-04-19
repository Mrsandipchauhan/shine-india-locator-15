
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { serviceProvidersByCity } from "@/data/serviceProviders";

interface AreaCardProps {
  area: {
    id: string;
    name: string;
    parentCity: string;
    content: {
      introduction: string;
    };
  };
  isNearby?: boolean;
}

export const AreaCard = ({ area, isNearby }: AreaCardProps) => {
  return (
    <Card 
      className={`bg-background hover:shadow-md transition-shadow overflow-hidden ${
        isNearby ? 'ring-2 ring-primary shadow-lg' : ''
      }`}
    >
      <div className="h-40 bg-cover bg-center relative" style={{ 
        backgroundImage: `url('https://source.unsplash.com/featured/?${area.name},car&auto=format&w=500')`,
      }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 left-0 p-4">
            <div className="flex items-center text-white">
              <MapPin size={16} className="text-primary mr-2" />
              <h3 className="font-semibold">{area.name}</h3>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {area.content.introduction.substring(0, 100)}...
        </p>
        
        {serviceProvidersByCity[area.parentCity.toLowerCase()] && (
          <p className="text-xs text-primary mb-3">
            {serviceProvidersByCity[area.parentCity.toLowerCase()].length} service providers available
          </p>
        )}
        
        <Link to={`/area/${area.id}`}>
          <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center">
            View Services <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
