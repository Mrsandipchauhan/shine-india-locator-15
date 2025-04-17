
import React from "react";
import GoogleMapEmbed from "./GoogleMapEmbed";

interface ServiceLocationMapProps {
  cityName: string;
  mapLocation: string;
}

const ServiceLocationMap = ({ cityName, mapLocation }: ServiceLocationMapProps) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Car Detailing Locations in {cityName}</h2>
      <GoogleMapEmbed 
        address="" 
        city={mapLocation} 
        height="400px"
        zoom={12}
      />
    </div>
  );
};

export default ServiceLocationMap;
