
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

export const AreaCard = ({
  area,
  isNearby
}: AreaCardProps) => {
  // Create a consistent area route
  const areaRoute = `/area/${encodeURIComponent(area.id.toLowerCase())}`;
  
  return (
    <Card className={`bg-background hover:shadow-md transition-shadow overflow-hidden ${isNearby ? 'ring-2 ring-primary shadow-lg' : ''}`}>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-1.5 rounded-full">
              <MapPin size={16} className="text-primary" />
            </div>
            <h3 className="font-semibold text-lg">{area.name}</h3>
          </div>
          {isNearby && (
            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
              Nearby
            </span>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {area.content.introduction.substring(0, 120)}...
        </p>
        
        <Link to={areaRoute} className="w-full">
          <Button variant="outline" className="w-full flex items-center justify-between">
            <span>View Services</span>
            <ArrowRight size={16} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
