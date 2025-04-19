
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationHeader from "@/components/LocationHeader";
import LocationContentSection from "@/components/LocationContentSection";
import SidebarContent from "@/components/SidebarContent";
import PricingPackages from "@/components/PricingPackages";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import { serviceProvidersByCity, defaultProviders } from "@/data/serviceProviders";
import { cityContents, getDefaultCityContent } from "@/data/cityContent";

const ServiceLocations = () => {
  const { cityId = "" } = useParams<{ cityId: string }>();
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [providers, setProviders] = useState(defaultProviders);
  const [cityContent, setCityContent] = useState(getDefaultCityContent(""));
  const [hasViewedResults, setHasViewedResults] = useState(false);

  useEffect(() => {
    // Ensure cityId is properly decoded for handling URL-encoded parameters
    const decodedCityId = decodeURIComponent(cityId).toLowerCase();
    const cityProviders = serviceProvidersByCity[decodedCityId] || defaultProviders;
    setProviders(cityProviders);

    // Format the city name properly for display
    const formattedCityName = decodedCityId
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setCityName(formattedCityName);

    // Get appropriate content based on the city
    setCityContent(cityContents[decodedCityId] || getDefaultCityContent(formattedCityName));

    if (!decodedCityId) {
      detectUserLocation();
    }
  }, [cityId]);

  useEffect(() => {
    // Check if user clicked "View Results" from a prompt
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
                navigate(`/locations/${encodeURIComponent(nearest.city.id.toLowerCase())}`);
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

        {/* Adding Pricing Packages to ensure consistent design */}
        <div className="mb-12">
          <PricingPackages />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceLocations;
