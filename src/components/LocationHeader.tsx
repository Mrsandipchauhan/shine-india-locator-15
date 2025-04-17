
import React from "react";

interface LocationHeaderProps {
  title: string;
  description: string;
}

const LocationHeader = ({ title, description }: LocationHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
};

export default LocationHeader;
