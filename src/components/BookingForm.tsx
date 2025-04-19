import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLocation, useParams } from "react-router-dom";
import { BookingFormInputs } from "./booking/BookingFormInputs";
import { getUserLocation, findNearestCity } from "@/services/locationService";

interface BookingFormProps {
  selectedCity?: string;
  selectedService?: string;
  isQuoteForm?: boolean;
}

const BookingForm = ({ selectedCity = "", selectedService = "", isQuoteForm = false }: BookingFormProps) => {
  const location = useLocation();
  const params = useParams();
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
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
  
  const formTitle = isQuoteForm 
    ? "Get Your Personalized Quote" 
    : selectedService 
      ? `Book ${selectedService}` 
      : "Book Your Premium Service";

  const formDescription = isQuoteForm 
    ? "Fill in your details below and we'll send you a custom quote within 24 hours" 
    : "Schedule your detailing service with our expert team - takes only 2 minutes!";

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
    
    setFormData(prev => ({
      ...prev,
      city: prev.city || cityFromUrl || selectedCity,
      serviceType: prev.serviceType || serviceFromUrl || selectedService
    }));
    
    if (!formData.city) {
      detectUserLocation();
    }
  }, [location, params, selectedCity, selectedService]);

  const detectUserLocation = async () => {
    if (isDetectingLocation) return;
    
    setIsDetectingLocation(true);
    try {
      const location = await getUserLocation();
      const nearest = location.city ? 
        { city: { name: location.city, id: location.city.toLowerCase() } } : 
        findNearestCity(location.lat, location.lon);
      
      if (nearest?.city) {
        setFormData(prev => ({
          ...prev,
          city: nearest.city.name
        }));
        toast.success(`Location detected: ${nearest.city.name}`);
      }
    } catch (error) {
      console.error("Error detecting location:", error);
    } finally {
      setIsDetectingLocation(false);
    }
  };
  
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
      toast.error("कृपया सभी आवश्यक फ़ील्ड भरें", {
        description: "नाम, फ़ोन नंबर और ईमेल आवश्यक हैं"
      });
      return;
    }
    
    toast.success(
      isQuoteForm ? "कोटेशन अनुरोध प्राप्त हुआ!" : "बुकिंग अनुरोध सफल!",
      {
        description: isQuoteForm
          ? `धन्यवाद ${formData.name}, हम जल्द ही आपका कस्टम कोटेशन भेजेंगे`
          : `धन्यवाद ${formData.name}, आपकी ${formData.serviceType || "डिटेलिंग"} अपॉइंटमेंट का अनुरोध प्राप्त हो गया है`
      }
    );
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      carType: "",
      serviceType: selectedService,
      city: formData.city, // Keep detected city
      date: "",
      time: ""
    });
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
              className="w-full bg-primary hover:bg-primary/90 mt-4"
            >
              {isQuoteForm ? "मुफ्त कोटेशन पाएं" : "अपॉइंटमेंट बुक करें"}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center mt-2">
              {isQuoteForm 
                ? "हमारी टीम 24 घंटों के भीतर आपसे संपर्क करेगी" 
                : "हमारा प्रतिनिधि आपकी अपॉइंटमेंट की पुष्टि के लिए संपर्क करेगा"}
            </p>
          </form>
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default BookingForm;
