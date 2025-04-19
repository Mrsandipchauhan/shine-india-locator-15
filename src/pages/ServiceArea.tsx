
import { useParams } from "react-router-dom";
import ServiceAreaComponent from "@/components/services/ServiceArea";
import ServiceAreaSEO from "@/components/services/ServiceAreaSEO";
import { serviceAreaContent } from "@/data/serviceAreaContent";
import { services } from "@/data/servicesData";
import { useEffect, useState } from "react";

const ServiceArea = () => {
  const { country, cityId, areaId, serviceId } = useParams();
  const [cityName, setCityName] = useState("");
  
  useEffect(() => {
    // Extract city name from area ID or city ID, handling both encoded and decoded formats
    const decodedAreaId = areaId ? decodeURIComponent(areaId) : "";
    const decodedCityId = cityId ? decodeURIComponent(cityId) : "";
    
    // Try to extract city name
    const city = decodedCityId || decodedAreaId?.split('-').pop();
    if (city) {
      // Format it nicely with first letter capitalized
      setCityName(city.charAt(0).toUpperCase() + city.slice(1));
    }
  }, [cityId, areaId]);
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return <div>Service not found</div>;
  }
  
  // Format the area name nicely from the areaId
  const areaName = areaId
    ? decodeURIComponent(areaId)
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : "";
  
  // Create a proper content key for international locations
  const locationKey = country 
    ? `${country.toLowerCase()}-${cityId}-${areaId}` 
    : areaId || "";
    
  const areaContent = serviceAreaContent[locationKey]?.[serviceId || ""];

  return (
    <>
      <ServiceAreaSEO 
        areaId={locationKey} 
        serviceId={serviceId || ""} 
        country={country}
      />
      <ServiceAreaComponent
        serviceId={serviceId || ""}
        areaName={areaName || ""}
        cityName={cityName}
        serviceTitle={service.title}
        beforeImage={service.image}
        afterImage={service.image}
        country={country}
      />
    </>
  );
};

export default ServiceArea;
