
import { useParams } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import LocationHeader from "@/components/LocationHeader";
import LocationContentSection from "@/components/LocationContentSection";
import SidebarContent from "@/components/SidebarContent";
import { worldwideLocations } from "@/data/globalLocationsData";
import { serviceProvidersByCity } from "@/data/serviceProviders";
import { getCityData } from "@/utils/locationUtils";
import { cityContents, getDefaultCityContent } from "@/data/cityContent";
import PricingPackages from "@/components/PricingPackages";
import { useEffect, useState } from "react";

const LocationsCity = () => {
  const { cityName } = useParams();
  const [isValidLocation, setIsValidLocation] = useState(false);
  
  // Normalize the city name to handle case-insensitive matching
  const normalizedCityName = cityName ? decodeURIComponent(cityName).toLowerCase() : '';
  
  // More robust city data lookup
  const cityData = getCityData(normalizedCityName || '');
  const providers = serviceProvidersByCity[normalizedCityName] || 
                    serviceProvidersByCity[cityName || ''] || [];
  
  // Get city-specific content or use default
  const cityContentKey = normalizedCityName || '';
  const content = cityContents[cityContentKey] || getDefaultCityContent(decodeURIComponent(cityName || ''));
  
  // Content for the LocationContentSection
  const contentForSection = {
    weatherImpact: content.weatherImpact,
    localChallenges: content.localChallenges,
    specialTips: content.specialTips,
    mapLocation: content.mapLocation
  };

  useEffect(() => {
    // Validate if the location exists in our worldwide locations data
    const locationExists = Object.values(worldwideLocations).some(country => 
      Object.values(country).flat().some(city => 
        city.toLowerCase() === normalizedCityName
      )
    );
    
    setIsValidLocation(locationExists || normalizedCityName.length > 0);
  }, [normalizedCityName]);

  if (!isValidLocation) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Location Not Found</h1>
          <p>Sorry, we couldn't find information for this location.</p>
        </div>
      </MainLayout>
    );
  }

  // Display the proper title case of the city name
  const displayCityName = cityName 
    ? decodeURIComponent(cityName).split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ') 
    : '';

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <LocationHeader 
          title={`Car Detailing Services in ${displayCityName}`}
          description={`Premium car detailing services in ${displayCityName}. Professional detailing, ceramic coating, and paint protection services.`}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <LocationContentSection
            cityName={displayCityName}
            content={contentForSection}
            providers={providers}
          />
          <SidebarContent cityName={displayCityName} />
        </div>
        
        {/* Adding Pricing Packages component */}
        <div className="mb-12">
          <PricingPackages />
        </div>
      </div>
    </MainLayout>
  );
};

export default LocationsCity;
