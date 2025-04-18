import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Phone, Car, User, Mail, Clock } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Booking request submitted! We'll contact you shortly.", {
        description: `Thank you ${formData.name}, your ${formData.serviceType} appointment has been requested.`,
        duration: 5000
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        carType: "",
        serviceType: "",
        city: selectedCity,
        date: "",
        time: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <Card className="border border-border bg-card shadow-lg">
      <CardHeader className="bg-primary/10 sticky top-0 z-10">
        <CardTitle className="text-xl font-semibold flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-primary" />
          <span>Book Your Detailing Service</span>
        </CardTitle>
      </CardHeader>
      <ScrollArea className="h-[calc(100vh-200px)] md:h-auto">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-primary" />
                  <span>Full Name</span>
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
                  <span>Phone Number</span>
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
                  <span>Email Address</span>
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
                  required
                  className="bg-background"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="serviceType" className="flex items-center space-x-2">
                  <span>Service Type</span>
                </Label>
                <Select
                  name="serviceType"
                  value={formData.serviceType}
                  onValueChange={(value) => handleSelectChange("serviceType", value)}
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
                  <span>City</span>
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
                  <span>Preferred Date</span>
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Preferred Time</span>
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
