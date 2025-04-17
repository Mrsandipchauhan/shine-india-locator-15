
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import BookingForm from "./BookingForm";

const Hero = () => {
  const [showBooking, setShowBooking] = useState(false);
  
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/60 z-10"
        style={{ 
          backgroundImage: "linear-gradient(to bottom right, rgba(37, 99, 235, 0.1), rgba(59, 130, 246, 0.05), rgba(37, 99, 235, 0.1))"
        }}
      />
      
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2936&auto=format&fit=crop')",
          filter: "brightness(0.3) contrast(1.2)"
        }}
      />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient">Premium Car Detailing</span>
            <br />
            <span className="text-foreground">Services Across India</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Professional detailing services to restore and protect your vehicle's appearance.
            Serving 20+ major cities with certified technicians and premium products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 premium-shadow transition-all duration-300 text-lg"
              onClick={() => setShowBooking(true)}
            >
              Book Appointment
            </Button>
            
            <Link to="/locations">
              <Button 
                variant="outline" 
                size="lg" 
                className="glass hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg group"
              >
                Find Nearest Location 
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-lg backdrop-blur-lg hover-scale premium-shadow">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">20+</p>
              <p className="text-sm text-gray-300">Cities Covered</p>
            </div>
            <div className="glass p-6 rounded-lg backdrop-blur-lg hover-scale premium-shadow">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">10K+</p>
              <p className="text-sm text-gray-300">Cars Detailed</p>
            </div>
            <div className="glass p-6 rounded-lg backdrop-blur-lg hover-scale premium-shadow">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">99%</p>
              <p className="text-sm text-gray-300">Satisfaction</p>
            </div>
            <div className="glass p-6 rounded-lg backdrop-blur-lg hover-scale premium-shadow">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">5★</p>
              <p className="text-sm text-gray-300">Rated Service</p>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-[600px]">
          <BookingForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
