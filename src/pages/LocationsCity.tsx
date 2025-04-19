
import { useParams } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import LocationHeader from "@/components/LocationHeader";
import LocationContentSection from "@/components/LocationContentSection";
import { worldwideLocations } from "@/data/globalLocationsData";
import { serviceProvidersByCity } from "@/data/serviceProviders";
import { getCityData } from "@/utils/locationUtils";
import { cityContents, getDefaultCityContent } from "@/data/cityContent";

const LocationsCity = () => {
  const { cityName } = useParams();
  
  const cityData = getCityData(cityName || '');
  const providers = serviceProvidersByCity[cityName?.toLowerCase() || ''] || [];
  
  // Get city-specific content or use default
  const cityContentKey = cityName?.toLowerCase() || '';
  const content = cityContents[cityContentKey] || getDefaultCityContent(cityName || '');
  
  // Only use these fields for the LocationContentSection
  const contentForSection = {
    weatherImpact: content.weatherImpact,
    localChallenges: content.localChallenges,
    specialTips: content.specialTips,
    mapLocation: content.mapLocation
  };

  if (!cityName || !Object.values(worldwideLocations).some(country => 
    Object.values(country).flat().includes(cityName))) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Location Not Found</h1>
          <p>Sorry, we couldn't find information for this location.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <LocationHeader 
          title={`Car Detailing Services in ${cityName}`}
          description={`Premium car detailing services in ${cityName}. Professional detailing, ceramic coating, and paint protection services.`}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <LocationContentSection
            cityName={cityName}
            content={contentForSection}
            providers={providers}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default LocationsCity;
