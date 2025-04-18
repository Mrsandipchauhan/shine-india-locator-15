
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Phone, Car, User, Mail, Clock } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocation, useParams } from "react-router-dom";

interface BookingFormProps {
  selectedCity?: string;
  selectedService?: string;
}

const serviceTypes = [
  { id: "exterior", name: "Exterior Detailing" },
  { id: "interior", name: "Interior Detailing" },
  { id: "full", name: "Full Detailing" },
  { id: "ceramic", name: "Ceramic Coating" },
  { id: "polish", name: "Paint Correction & Polishing" },
  { id: "protection", name: "Paint Protection Film" }
];

const BookingForm = ({ selectedCity = "", selectedService = "" }: BookingFormProps) => {
  const location = useLocation();
  const params = useParams();
  const [detectedCity, setDetectedCity] = useState("");
  const [detectedService, setDetectedService] = useState("");
  
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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Detect city and service based on URL
  useEffect(() => {
    // Try to detect city from URL or params
    let cityFromUrl = "";
    let serviceFromUrl = "";
    
    // Check if we're on a city or area page
    if (params.cityId) {
      cityFromUrl = params.cityId.charAt(0).toUpperCase() + params.cityId.slice(1);
    } else if (params.areaId) {
      // If we're on an area page, use the area name
      // This would need to be refined based on your area data structure
      const areaName = params.areaId.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      cityFromUrl = areaName;
    }
    
    // Check if we're on a service page
    if (params.serviceId) {
      // Convert service-id to proper name (e.g., "exterior-detailing" to "Exterior Detailing")
      const serviceId = params.serviceId;
      const matchedService = serviceTypes.find(s => s.id === serviceId || 
        s.name.toLowerCase().replace(' ', '-') === serviceId);
      
      if (matchedService) {
        serviceFromUrl = matchedService.name;
      } else {
        // Try to format the service ID as a readable name
        serviceFromUrl = params.serviceId.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
      }
    }
    
    setDetectedCity(cityFromUrl);
    setDetectedService(serviceFromUrl);
    
    // Update form data with detected values if not already set by props
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
    
    // Validate form data
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time) {
      toast.error("Please fill in all required fields", {
        duration: 3000
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Booking request submitted! We'll contact you shortly.", {
        description: `Thank you ${formData.name}, your ${formData.serviceType || "detailing"} appointment has been requested.`,
        duration: 5000
      });
      
      // Reset form
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
  
  // Set a minimum date for booking (today)
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <Card className="border border-border bg-card shadow-lg">
      <CardHeader className="bg-primary/10 sticky top-0 z-10">
        <CardTitle className="text-xl font-semibold flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-primary" />
          <span>Book Your Detailing Service</span>
        </CardTitle>
      </CardHeader>
      <ScrollArea className="h-[calc(100vh-200px)] md:h-auto max-h-[600px]">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-primary" />
                  <span>Full Name*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Phone Number*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="bg-background"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Email Address*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="carType" className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-primary" />
                  <span>Vehicle Make & Model</span>
                </Label>
                <Input
                  id="carType"
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  placeholder="e.g., Honda City"
                  className="bg-background"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="serviceType" className="flex items-center space-x-2">
                  <span>Service Type*</span>
                </Label>
                <Select
                  name="serviceType"
                  value={formData.serviceType}
                  onValueChange={(value) => handleSelectChange("serviceType", value)}
                  required
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.id} value={service.name}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city" className="flex items-center space-x-2">
                  <span>City*</span>
                </Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  required
                  className="bg-background"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Preferred Date*</span>
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Preferred Time*</span>
                </Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
            </div>
            
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
