
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import LocalServiceProviders from "@/components/LocalServiceProviders";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import LocationInfo from "@/components/LocationInfo";
import ServiceBenefits from "@/components/ServiceBenefits";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import { serviceProvidersByCity, defaultProviders } from "@/data/serviceProviders";
import { cityContents, getDefaultCityContent } from "@/data/cityContent";

const ServiceLocations = () => {
  const { cityId = "" } = useParams<{ cityId: string }>();
  const [cityName, setCityName] = useState("");
  const [providers, setProviders] = useState(defaultProviders);
  const [cityContent, setCityContent] = useState(getDefaultCityContent(""));
  
  useEffect(() => {
    const normalizedCityId = cityId.toLowerCase();
    const cityProviders = serviceProvidersByCity[normalizedCityId] || defaultProviders;
    setProviders(cityProviders);
    
    const formattedCityName = normalizedCityId.charAt(0).toUpperCase() + normalizedCityId.slice(1);
    setCityName(formattedCityName);
    
    setCityContent(cityContents[normalizedCityId] || getDefaultCityContent(formattedCityName));
    
    if (!normalizedCityId) {
      detectUserLocation();
    }
  }, [cityId]);
  
  const detectUserLocation = async () => {
    try {
      const location = await getUserLocation();
      
      if (location.lat && location.lon) {
        const nearest = findNearestCity(location.lat, location.lon);
        
        if (nearest?.city) {
          toast.info(`We detected you're near ${nearest.city.name}`, {
            description: `Would you like to view car detailing services in ${nearest.city.name}?`,
            action: {
              label: "View Services",
              onClick: () => {
                window.location.href = `/locations/${nearest.city.id}`;
              }
            },
            duration: 8000
          });
        }
      }
    } catch (error) {
      console.error("Error detecting location:", error);
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{cityContent.title}</h1>
          <p className="text-lg text-muted-foreground">{cityContent.description}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8">
            <div className="space-y-8">
              <LocationInfo cityName={cityName} content={cityContent} />
              <LocalServiceProviders city={cityName} providers={providers} />
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Car Detailing Locations in {cityName}</h2>
                <GoogleMapEmbed 
                  address="" 
                  city={cityContent.mapLocation} 
                  height="400px"
                  zoom={12}
                />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <BookingForm selectedCity={cityName} />
              <ServiceBenefits cityName={cityName} />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceLocations;
