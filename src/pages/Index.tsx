
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
import { getUserLocation, findNearestCity } from "@/services/locationService";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Top cities in India for quick access
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

  // Effect to detect user location on page load
  useEffect(() => {
    detectUserLocation();
  }, []);

  // Function to detect user location
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

  // Filter cities based on search term
  const filteredCities = topCities.filter(city => 
    city.name.toLowerCase().includes(searchCity.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      
      {/* City Selection & Location Search */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Find Car Detailing Services Near You</h2>
              <p className="text-muted-foreground">
                Our detailing experts provide premium services across India with specialized treatments for local conditions.
              </p>
            </div>
            
            {userCity && (
              <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">We detected you're near:</p>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span className="font-medium text-lg">{userCity}</span>
                </div>
                <div className="mt-3">
                  <Link to={`/locations/${userCity.toLowerCase()}`}>
                    <Button className="bg-primary hover:bg-primary/90">
                      View Services in {userCity}
                    </Button>
                  </Link>
                </div>
              </div>
            )}
            
            <div className="relative mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="text"
                  placeholder="Search your city..."
                  className="pl-10 pr-4 py-6 text-foreground bg-background/50"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                />
              </div>
              
              {isSearchFocused && searchCity && filteredCities.length > 0 && (
                <div className="absolute z-20 mt-1 w-full bg-background rounded-md border border-border shadow-lg max-h-60 overflow-auto">
                  <ul className="py-1">
                    {filteredCities.map((city) => (
                      <li key={city.id}>
                        <Link
                          to={`/locations/${city.id}`}
                          className="flex items-center px-4 py-2 hover:bg-primary/10 text-sm cursor-pointer"
                        >
                          <MapPin size={14} className="mr-2 text-primary" />
                          Car Detailing in {city.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {topCities.map((city) => (
                <Link 
                  key={city.id}
                  to={`/locations/${city.id}`}
                  className="bg-background hover:bg-primary/10 border border-border rounded-lg p-4 text-center transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <MapPin size={20} className="text-primary mb-2" />
                    <span className="font-medium">{city.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Book Your Detailing Service Now</h2>
              <p className="text-muted-foreground mb-6">
                Experience the ShineDetailers difference with our premium car care services. Our certified technicians use only the highest quality products to restore and protect your vehicle's appearance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Premium Service Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      We stand behind our work with a satisfaction guarantee. If you're not completely satisfied, we'll make it right.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Flexible Scheduling</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose a time that works for you with our convenient online booking system. Weekend and evening appointments available.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Transparent Pricing</h3>
                    <p className="text-sm text-muted-foreground">
                      No hidden fees or surprises. We provide clear pricing information upfront so you know exactly what to expect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSlider />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
