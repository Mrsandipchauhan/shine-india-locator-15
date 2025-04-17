
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// This would ideally come from a database
const availableServices = [
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    description: "Complete exterior cleaning, clay bar treatment, polishing, and waxing.",
    price: "₹4,999"
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    description: "Deep cleaning of all interior surfaces, fabric/leather treatment, and sanitization.",
    price: "₹3,999"
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description: "Long-lasting protection with advanced nanoceramic technology.",
    price: "₹24,999"
  },
  {
    id: "paint-protection",
    title: "Paint Protection Film",
    description: "Premium self-healing film that protects your vehicle's paint.",
    price: "₹49,999"
  }
];

interface ServiceSelectorProps {
  selectedServices: string[];
  onSelectServices: (services: string[]) => void;
}

const ServiceSelector = ({ selectedServices, onSelectServices }: ServiceSelectorProps) => {
  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onSelectServices(selectedServices.filter(id => id !== serviceId));
    } else {
      onSelectServices([...selectedServices, serviceId]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Select Services</h2>
        <p className="text-muted-foreground">
          Choose the services you'd like for your vehicle
        </p>
      </div>

      <div className="grid gap-4">
        {availableServices.map((service) => (
          <Card key={service.id} className="p-4 cursor-pointer hover:border-primary/50 transition-colors">
            <div className="flex items-start space-x-4" onClick={() => toggleService(service.id)}>
              <Checkbox
                id={service.id}
                checked={selectedServices.includes(service.id)}
                onCheckedChange={() => toggleService(service.id)}
              />
              <div className="flex-1">
                <Label htmlFor={service.id} className="text-lg font-medium cursor-pointer">
                  {service.title}
                </Label>
                <p className="text-muted-foreground text-sm mt-1">{service.description}</p>
              </div>
              <div className="text-right">
                <span className="font-semibold text-primary">{service.price}</span>
                <p className="text-xs text-muted-foreground">Starting from</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelector;
