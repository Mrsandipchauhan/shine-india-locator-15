
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocation, useParams } from "react-router-dom";
import { BookingFormInputs } from "./booking/BookingFormInputs";

interface BookingFormProps {
  selectedCity?: string;
  selectedService?: string;
}

const BookingForm = ({ selectedCity = "", selectedService = "" }: BookingFormProps) => {
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
  
  // Detect city and service based on URL
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
    
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Booking request submitted! We'll contact you shortly.", {
        description: `Thank you ${formData.name}, your ${formData.serviceType || "detailing"} appointment has been requested.`,
        duration: 5000
      });
      
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
      <ScrollArea className="h-[calc(100vh-200px)] md:h-auto max-h-[600px]">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <BookingFormInputs 
              formData={formData}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              today={today}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 mt-4 sticky bottom-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Appointment"}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center mt-2">
              Our representative will contact you to confirm your appointment details.
            </p>
          </form>
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default BookingForm;
