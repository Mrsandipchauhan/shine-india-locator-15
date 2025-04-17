
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
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/60 z-10"></div>
      
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2936&auto=format&fit=crop')",
          filter: "brightness(0.4) contrast(1.2)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gradient">
            Premium Car Detailing Services Across India
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Professional detailing services to restore and protect your vehicle's appearance.
            Serving 20+ major cities with certified technicians and premium products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300"
              onClick={() => setShowBooking(true)}
            >
              Book Appointment
            </Button>
            <Link to="/locations">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Find Nearest Location <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass p-4 rounded-lg backdrop-blur-lg transition-all duration-300 hover:scale-105">
              <p className="text-2xl md:text-3xl font-bold text-gradient">20+</p>
              <p className="text-sm text-gray-300">Cities Covered</p>
            </div>
            <div className="glass p-4 rounded-lg backdrop-blur-lg transition-all duration-300 hover:scale-105">
              <p className="text-2xl md:text-3xl font-bold text-gradient">10K+</p>
              <p className="text-sm text-gray-300">Cars Detailed</p>
            </div>
            <div className="glass p-4 rounded-lg backdrop-blur-lg transition-all duration-300 hover:scale-105">
              <p className="text-2xl md:text-3xl font-bold text-gradient">99%</p>
              <p className="text-sm text-gray-300">Satisfaction</p>
            </div>
            <div className="glass p-4 rounded-lg backdrop-blur-lg transition-all duration-300 hover:scale-105">
              <p className="text-2xl md:text-3xl font-bold text-gradient">5★</p>
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
