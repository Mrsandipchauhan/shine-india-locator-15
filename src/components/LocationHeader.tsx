
import React from "react";
import { MapPin } from "lucide-react";

interface LocationHeaderProps {
  title: string;
  description: string;
}

const LocationHeader = ({ title, description }: LocationHeaderProps) => {
  return (
    <div className="mb-8 bg-card border-border border rounded-lg p-6">
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 p-2 rounded-full mt-1">
          <MapPin size={24} className="text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationHeader;
