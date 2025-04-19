import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import BookingForm from "./BookingForm";

const CTASection = () => {
  const [showBooking, setShowBooking] = useState(false);
  
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop')",
          filter: "brightness(0.2) saturate(1.2)"
        }}
      >
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent z-0 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">Ready to Transform Your Car?</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
            Schedule a detailing appointment today and experience the ShineDetailers difference.
            Our certified technicians use premium products to deliver exceptional results every time.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="bg-background/10 backdrop-blur-sm border border-white/10 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-primary/20 p-3 rounded-full mb-4">
                <CalendarDays size={24} className="text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Book Online</h3>
              <p className="text-sm text-gray-300 text-center">
                Schedule your appointment online at your convenience
              </p>
            </div>
            
            <div className="bg-background/10 backdrop-blur-sm border border-white/10 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-primary/20 p-3 rounded-full mb-4">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Visit a Location</h3>
              <p className="text-sm text-gray-300 text-center">
                Drop by one of our 20+ locations across India
              </p>
            </div>
            
            <div className="bg-background/10 backdrop-blur-sm border border-white/10 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-primary/20 p-3 rounded-full mb-4">
                <Phone size={24} className="text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-gray-300 text-center">
                Speak with our team at +91 800-123-4567
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 px-6 py-4 text-base sm:text-lg font-medium rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px] animate-float"
              onClick={() => setShowBooking(true)}
            >
              Get Estimate Budget
            </Button>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 hover:bg-white/10 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-[600px]">
          <BookingForm />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;
