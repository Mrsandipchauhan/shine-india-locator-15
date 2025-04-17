import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import CitySelector from "@/components/CitySelector";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import BookingDialog from "@/components/BookingDialog";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const topCities = [
  { id: "delhi", name: "Delhi" },
  { id: "mumbai", name: "Mumbai" },
  { id: "bangalore", name: "Bangalore" },
  { id: "hyderabad", name: "Hyderabad" },
  { id: "chennai", name: "Chennai" }
];

const Index = () => {
  const [userCity, setUserCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    detectUserLocation();
  }, []);

  const detectUserLocation = async () => {
    try {
      const location = await getUserLocation();
      
      if (location.lat && location.lon) {
        const nearest = findNearestCity(location.lat, location.lon);
        
        if (nearest?.city) {
          setUserCity(nearest.city.name);
          
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

  const filteredCities = topCities.filter(city => 
    city.name.toLowerCase().includes(searchCity.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ServicesSection />
      <TestimonialsSlider />
      <CTASection />
      <Footer />
      <BookingDialog />
    </div>
  );
};

export default Index;
