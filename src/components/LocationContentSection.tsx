
import React from "react";
import LocationInfo from "./LocationInfo";
import LocalServiceProviders from "./LocalServiceProviders";
import ServiceLocationMap from "./ServiceLocationMap";
import { ServiceProvider } from "@/data/serviceProviders";

interface LocationContentSectionProps {
  cityName: string;
  content: {
    weatherImpact: string;
    localChallenges: string;
    specialTips: string;
    mapLocation: string;
  };
  providers: ServiceProvider[];
}

const LocationContentSection = ({ cityName, content, providers }: LocationContentSectionProps) => {
  return (
    <div className="lg:col-span-8">
      <div className="space-y-8">
        <LocationInfo cityName={cityName} content={content} />
        <LocalServiceProviders city={cityName} providers={providers} />
        <ServiceLocationMap cityName={cityName} mapLocation={content.mapLocation} />
      </div>
    </div>
  );
};

export default LocationContentSection;
