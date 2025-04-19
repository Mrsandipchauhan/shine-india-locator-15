
// Updated provider list to include Enquire button, and no Call/Direction buttons.
// Also assumes view results toggle state fixed via localStorage check and removal.

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationHeader from "@/components/LocationHeader";
import LocationContentSection from "@/components/LocationContentSection";
import SidebarContent from "@/components/SidebarContent";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import { serviceProvidersByCity, defaultProviders } from "@/data/serviceProviders";
import { cityContents, getDefaultCityContent } from "@/data/cityContent";

const ServiceLocations = () => {
  const { cityId = "" } = useParams<{ cityId: string }>();
  const [cityName, setCityName] = useState("");
  const [providers, setProviders] = useState(defaultProviders);
  const [cityContent, setCityContent] = useState(getDefaultCityContent(""));
  const [hasViewedResults, setHasViewedResults] = useState(false);

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

  useEffect(() => {
    // Assuming "viewResults" in localStorage indicates if user clicked "View Results"
    const viewed = localStorage.getItem('viewResultsClicked') === 'true';
    setHasViewedResults(viewed);
    if (viewed && window.location.pathname.includes('/locations')) {
      // Remove immediately after user lands on page so it won't persist next times
      localStorage.removeItem('viewResultsClicked');
    }
  }, []);

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
                localStorage.setItem('viewResultsClicked', 'true');
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
        <LocationHeader title={cityContent.title} description={cityContent.description} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <LocationContentSection
            cityName={cityName}
            content={cityContent}
            providers={providers}
          />
          <SidebarContent cityName={cityName} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceLocations;
