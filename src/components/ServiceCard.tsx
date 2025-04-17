
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import BookingForm from "./BookingForm";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
}

const ServiceCard = ({ title, description, image, price, features }: ServiceCardProps) => {
  const [showBooking, setShowBooking] = useState(false);
  
  return (
    <>
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border border-border">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
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
        
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-4">{description}</p>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <svg
                  className="w-4 h-4 mr-2 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <Button 
            className="w-full bg-primary hover:bg-primary/90" 
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
