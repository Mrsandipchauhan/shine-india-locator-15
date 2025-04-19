import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLocation, useParams } from "react-router-dom";
import { BookingFormInputs } from "./booking/BookingFormInputs";

interface BookingFormProps {
  selectedCity?: string;
  selectedService?: string;
  isQuoteForm?: boolean;
}

const BookingForm = ({ selectedCity = "", selectedService = "", isQuoteForm = false }: BookingFormProps) => {
  const location = useLocation();
  const params = useParams();
  const [detectedCity, setDetectedCity] = useState("");
  const [detectedService, setDetectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carType: "",
    serviceType: selectedService,
    city: selectedCity,
    date: "",
    time: ""
  });
  
  const formTitle = isQuoteForm ? "Get Your Custom Quote" : "Book Your Premium Service";
  const formDescription = isQuoteForm 
    ? "Tell us about your requirements and we'll provide a personalized quote" 
    : "Schedule your detailing service with our expert team";

  useEffect(() => {
    let cityFromUrl = "";
    let serviceFromUrl = "";
    
    if (params.cityId) {
      cityFromUrl = params.cityId.charAt(0).toUpperCase() + params.cityId.slice(1);
    } else if (params.areaId) {
      const areaName = params.areaId.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      cityFromUrl = areaName;
    }
    
    if (params.serviceId) {
      const serviceId = params.serviceId;
      serviceFromUrl = serviceId.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
    setDetectedCity(cityFromUrl);
    setDetectedService(serviceFromUrl);
    
    setFormData(prev => ({
      ...prev,
      city: prev.city || cityFromUrl || selectedCity,
      serviceType: prev.serviceType || serviceFromUrl || selectedService
    }));
  }, [location, params, selectedCity, selectedService]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      if (isQuoteForm) {
        toast.success("Quote request received!", {
          description: `Thank you ${formData.name}, we'll send your custom quote shortly.`,
          duration: 5000
        });
      } else {
        toast.success("Booking request submitted!", {
          description: `Thank you ${formData.name}, your ${formData.serviceType || "detailing"} appointment has been requested.`,
          duration: 5000
        });
      }
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        carType: "",
        serviceType: detectedService || selectedService,
        city: detectedCity || selectedCity,
        date: "",
        time: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <Card className="border border-border bg-card shadow-lg">
      <DialogHeader className="px-6 pt-6">
        <DialogTitle className="text-2xl font-bold text-center">{formTitle}</DialogTitle>
        <DialogDescription className="text-center text-muted-foreground">
          {formDescription}
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-[calc(100vh-200px)] md:h-auto max-h-[600px]">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <BookingFormInputs 
              formData={formData}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              today={today}
              isQuoteForm={isQuoteForm}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 mt-4 sticky bottom-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : isQuoteForm ? "Request Quote" : "Book Appointment"}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center mt-2">
              {isQuoteForm 
                ? "Our team will contact you with a custom quote within 24 hours." 
                : "Our representative will contact you to confirm your appointment details."}
            </p>
          </form>
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default BookingForm;
