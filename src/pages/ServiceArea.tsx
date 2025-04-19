
import { useParams } from "react-router-dom";
import ServiceAreaComponent from "@/components/services/ServiceArea";
import ServiceAreaSEO from "@/components/services/ServiceAreaSEO";
import { serviceAreaContent } from "@/data/serviceAreaContent";
import { services } from "@/data/servicesData";
import { useEffect, useState } from "react";

const ServiceArea = () => {
  const { areaId, serviceId } = useParams();
  const [cityName, setCityName] = useState("");
  
  useEffect(() => {
    // Extract city name from area ID (e.g., "south-delhi" -> "Delhi")
    const city = areaId?.split('-').pop();
    if (city) {
      setCityName(city.charAt(0).toUpperCase() + city.slice(1));
    }
  }, [areaId]);
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return <div>Service not found</div>;
  }
  
  const areaName = areaId
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const areaContent = serviceAreaContent[areaId || ""]?.[serviceId || ""];

  return (
    <>
      <ServiceAreaSEO areaId={areaId || ""} serviceId={serviceId || ""} />
    <ServiceAreaComponent
      serviceId={serviceId || ""}
      areaName={areaName || ""}
      cityName={cityName}
      serviceTitle={service.title}
      beforeImage={service.image}
      afterImage={service.image}
    />
    </>
  );
};

export default ServiceArea;
