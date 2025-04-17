
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import BookingForm from "./BookingForm";
import { Check } from "lucide-react";

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
  
  return (
    <>
      <Card className="overflow-hidden group hover-scale premium-shadow transition-all duration-300 border border-border/50 bg-card h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-primary text-lg font-semibold">{price}</p>
          </div>
        </div>
        
        <CardContent className="p-6 flex-grow flex flex-col bg-gradient-to-br from-card via-card/95 to-card/90">
          <p className="text-muted-foreground mb-4">{description}</p>
          
          {showDetailedView && duration && satisfaction && (
            <div className="space-y-2 mb-4 text-muted-foreground">
              <div className="flex items-center text-sm">
                <span className="mr-2">⏱️</span>
                <span>Duration: {duration}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="mr-2">⭐</span>
                <span>Satisfaction Rate: {satisfaction}</span>
              </div>
            </div>
          )}
          
          <ul className="space-y-3 mb-6 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <div className="mr-2 text-primary bg-primary/10 p-1 rounded-full">
                  <Check size={12} />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          
          <Button 
            className="w-full bg-primary hover:bg-primary/90 premium-shadow" 
            onClick={() => setShowBooking(true)}
          >
            Book Now
          </Button>
        </CardContent>
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
