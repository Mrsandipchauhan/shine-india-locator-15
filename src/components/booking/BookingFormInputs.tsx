
import { User, Phone, Mail, Car, Calendar, Clock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services } from "@/data/servicesData";

interface BookingFormInputsProps {
  formData: {
    name: string;
    phone: string;
    email: string;
    carType: string;
    serviceType: string;
    city: string;
    date: string;
    time: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  today: string;
}

export const BookingFormInputs = ({
  formData,
  handleChange,
  handleSelectChange,
  today
}: BookingFormInputsProps) => {
  return (
    <div className="space-y-4">
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
          <Label htmlFor="serviceType">Service Type*</Label>
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
              {services.map((service) => (
                <SelectItem key={service.id} value={service.title}>{service.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="city">City*</Label>
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
    </div>
  );
};
