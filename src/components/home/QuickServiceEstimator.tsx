
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Car, Calculator } from "lucide-react";

const carTypes = [
  { id: "hatchback", name: "Hatchback", priceMultiplier: 1 },
  { id: "sedan", name: "Sedan", priceMultiplier: 1.2 },
  { id: "suv", name: "SUV", priceMultiplier: 1.5 },
  { id: "luxury", name: "Luxury", priceMultiplier: 2 }
];

const serviceTypes = [
  { id: "basic", name: "Basic Wash", basePrice: 999 },
  { id: "premium", name: "Premium Detailing", basePrice: 2499 },
  { id: "ceramic", name: "Ceramic Coating", basePrice: 7999 },
  { id: "interior", name: "Interior Detailing", basePrice: 1999 }
];

const QuickServiceEstimator = () => {
  const [carType, setCarType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const calculateEstimate = () => {
    if (!carType || !serviceType) {
      toast.error("Please select both car type and service");
      return;
    }

    const selectedCar = carTypes.find(car => car.id === carType);
    const selectedService = serviceTypes.find(service => service.id === serviceType);

    if (selectedCar && selectedService) {
      const price = Math.round(selectedService.basePrice * selectedCar.priceMultiplier);
      setEstimatedPrice(price);
      toast.success("Estimate generated!", {
        description: `${selectedService.name} for your ${selectedCar.name} starts at ₹${price}`
      });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Quick Price Estimator</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate for our premium detailing services based on your vehicle type
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
            
            <CardHeader className="text-center relative z-10">
              <CardTitle className="flex items-center justify-center gap-2">
                <Calculator className="text-primary h-6 w-6" />
                Service Cost Calculator
              </CardTitle>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Type</label>
                  <Select value={carType} onValueChange={setCarType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      {carTypes.map(car => (
                        <SelectItem key={car.id} value={car.id}>
                          {car.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map(service => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                onClick={calculateEstimate} 
                className="w-full bg-primary hover:bg-primary/90 mb-6"
                size="lg"
              >
                Calculate Estimate
              </Button>
              
              {estimatedPrice !== null && (
                <div className="bg-primary/5 p-4 rounded-lg text-center animate-fade-in">
                  <p className="text-sm mb-2">Estimated price starting from:</p>
                  <p className="text-3xl font-bold text-primary mb-3">₹{estimatedPrice}</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    *Final price may vary based on vehicle condition and specific requirements
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Link to="/services">
                      <Button variant="outline" size="sm">View All Services</Button>
                    </Link>
                    <Link to="/contact">
                      <Button size="sm">Request Quote</Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickServiceEstimator;
