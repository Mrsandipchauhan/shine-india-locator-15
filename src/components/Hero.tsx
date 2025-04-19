import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, lazy, Suspense, useEffect } from "react";
import { getUserLocation, findNearestCity } from "@/services/locationService";

const BookingForm = lazy(() => import("./BookingForm"));

const Hero = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [locationText, setLocationText] = useState("#1 Premium Detailing Service in India");
  
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const location = await getUserLocation();
        if (location.lat && location.lon) {
          const nearest = findNearestCity(location.lat, location.lon);
          if (nearest?.city) {
            setLocationText(`#1 Premium Car Detailing Service in ${nearest.city.name}`);
          }
        }
      } catch (error) {
        console.error("Location detection failed:", error);
        // Keep the default text if location access is denied
      }
    };
    
    // Delay location detection to ensure smooth page load
    const timer = setTimeout(() => {
      detectLocation();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center pt-16 md:pt-0">
      <div className="absolute inset-0 bg-background z-0"></div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1920&auto=format&fit=crop')",
          filter: "brightness(0.15) contrast(1.3) saturate(1.2)",
          transform: "translateZ(0)"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-10"></div>
      
      <div 
        className="absolute inset-0 z-10 opacity-10 mobile-perf" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M0 20L20 0h20v20L20 40H0z\"/%3E%3C/g%3E%3C/svg%3E')",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary font-medium text-xs sm:text-sm mb-4 sm:mb-6 animate-fade-in hover:bg-primary/10 transition-colors">
            {locationText}
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-4 sm:mb-6">
            <span className="text-white">Transform Your</span>
            <br />
            <span className="text-gradient">Car's Appearance</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed font-light max-w-2xl">
            Professional detailing services with cutting-edge techniques and premium products.
            Our certified experts serve 20+ major cities across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-8 md:mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 premium-shadow px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px] animate-float group"
              onClick={() => setShowBooking(true)}
            >
              Get Estimate Budget
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Link to="/locations" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="glass hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-xl border-white/10 group w-full"
              >
                Find Nearest Location 
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6 relative">
            <div className="relative overflow-hidden rounded-xl glass px-4 py-6 md:px-6 md:py-8 backdrop-blur-md group hover-scale transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <p className="text-2xl md:text-4xl font-bold text-white mb-1">20<span className="text-primary">+</span></p>
                <p className="text-xs md:text-sm text-gray-400 font-medium">Cities Covered</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl glass px-4 py-6 md:px-6 md:py-8 backdrop-blur-md group hover-scale transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <p className="text-2xl md:text-4xl font-bold text-white mb-1">10K<span className="text-primary">+</span></p>
                <p className="text-xs md:text-sm text-gray-400 font-medium">Cars Detailed</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl glass px-4 py-6 md:px-6 md:py-8 backdrop-blur-md group hover-scale transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <p className="text-2xl md:text-4xl font-bold text-white mb-1">99<span className="text-primary">%</span></p>
                <p className="text-xs md:text-sm text-gray-400 font-medium">Satisfaction</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl glass px-4 py-6 md:px-6 md:py-8 backdrop-blur-md group hover-scale transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <p className="text-2xl md:text-4xl font-bold text-white mb-1">5<span className="text-primary">★</span></p>
                <p className="text-xs md:text-sm text-gray-400 font-medium">Rated Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl z-5 opacity-50"></div>
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-primary/10 rounded-full filter blur-3xl z-5 opacity-50"></div>
      
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <Suspense fallback={<div className="p-4 text-center">Loading booking form...</div>}>
            <BookingForm />
          </Suspense>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
