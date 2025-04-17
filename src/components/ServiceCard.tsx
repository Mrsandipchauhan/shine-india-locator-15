
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import BookingForm from "./BookingForm";
import { Check, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  duration?: string;
  satisfaction?: string;
  showDetailedView?: boolean;
}

const ServiceCard = ({ 
  title, 
  description, 
  image, 
  price, 
  features,
  duration,
  satisfaction,
  showDetailedView = false
}: ServiceCardProps) => {
  const [showBooking, setShowBooking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
      <Card 
        className="overflow-hidden group transition-all duration-500 border-border/30 bg-card/50 h-full flex flex-col rounded-xl backdrop-blur-sm relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover glow effect */}
        <div className={`absolute inset-0 bg-primary/5 rounded-xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <div className="relative h-56 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
          
          {/* Background image with zoom effect */}
          <img 
            src={image} 
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Price tag */}
          <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <p className="text-primary font-semibold">{price}</p>
          </div>
          
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        
        <CardContent className="p-6 flex-grow flex flex-col bg-gradient-to-br from-card via-card/95 to-card/90 relative z-10">
          <p className="text-muted-foreground mb-5">{description}</p>
          
          {showDetailedView && duration && satisfaction && (
            <div className="space-y-3 mb-5 text-muted-foreground">
              <div className="flex items-center text-sm bg-card/70 p-2 rounded-lg">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary">⏱️</span>
                </div>
                <span>Duration: {duration}</span>
              </div>
              <div className="flex items-center text-sm bg-card/70 p-2 rounded-lg">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary">⭐</span>
                </div>
                <span>Satisfaction Rate: {satisfaction}</span>
              </div>
            </div>
          )}
          
          <ul className="space-y-3 mb-6 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <div className="mr-3 text-primary bg-primary/10 p-1.5 rounded-full">
                  <Check size={12} />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          
          <Button 
            className="w-full bg-primary hover:bg-primary/90 rounded-lg group transition-all px-4 py-6 flex items-center justify-center space-x-2" 
            onClick={() => setShowBooking(true)}
          >
            <span>Book Now</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
        
        {/* Border glow effect on hover */}
        <div 
          className={`absolute inset-0 rounded-xl border border-primary/50 transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        ></div>
      </Card>
      
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-[600px]">
          <BookingForm selectedService={title} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceCard;
