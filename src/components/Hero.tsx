
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, lazy, Suspense } from "react";

// Lazy load the BookingForm component to improve initial load time
const BookingForm = lazy(() => import("./BookingForm"));

const Hero = () => {
  const [showBooking, setShowBooking] = useState(false);
  
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center pt-16 md:pt-0">
      {/* Static background color first for better perceived performance */}
      <div className="absolute inset-0 bg-background z-0"></div>
      
      {/* Animated background elements with reduced complexity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      {/* Background image with optimized loading */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1920&auto=format&fit=crop')",
          filter: "brightness(0.15) contrast(1.3) saturate(1.2)",
          // Use transform for hardware acceleration
          transform: "translateZ(0)"
        }}
      />
      
      {/* Simplified overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-10"></div>
      
      {/* Simplified grid pattern overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-10 mobile-perf" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M0 20L20 0h20v20L20 40H0z\"/%3E%3C/g%3E%3C/svg%3E')",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary font-medium text-sm mb-6">
            #1 Premium Detailing Service in India
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            <span className="text-white">Transform Your</span>
            <br />
            <span className="text-gradient">Car's Appearance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light max-w-2xl">
            Professional detailing services with cutting-edge techniques and premium products.
            Our certified experts serve 20+ major cities across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-8 md:mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 premium-shadow px-8 py-6 text-white text-lg font-medium rounded-xl transition-all group"
              onClick={() => setShowBooking(true)}
            >
              Book Your Service
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Link to="/locations">
              <Button 
                variant="outline" 
                size="lg" 
                className="glass hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-medium rounded-xl border-white/10 group w-full sm:w-auto"
              >
                Find Nearest Location 
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 relative">
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
      
      {/* Simpler floating gradient orbs with reduced animation complexity */}
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
