
import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface ServiceCostCalculatorProps {
  serviceTitle: string;
  onBookingClick: () => void;
}

export const ServiceCostCalculator = ({ serviceTitle, onBookingClick }: ServiceCostCalculatorProps) => {
  const [vehicleType, setVehicleType] = useState("sedan");
  const [vehicleCondition, setVehicleCondition] = useState(50);
  const [estimatedCost, setEstimatedCost] = useState("");

  const calculateEstimatedCost = () => {
    const basePrices: Record<string, number> = {
      "Exterior Detailing": 2999,
      "Interior Detailing": 2499,
      "Ceramic Coating": 15999,
      "Paint Protection Film": 25999,
      "Headlight Restoration": 1999
    };
    
    const typeMultipliers: Record<string, number> = {
      "hatchback": 0.9,
      "sedan": 1.0,
      "suv": 1.3,
      "luxury": 1.5
    };
    
    const conditionFactor = 0.8 + ((100 - vehicleCondition) / 100) * 0.5;
    const basePrice = basePrices[serviceTitle] || 3000;
    const estimate = Math.round(basePrice * typeMultipliers[vehicleType] * conditionFactor);
    
    return "₹" + estimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    setEstimatedCost(calculateEstimatedCost());
  }, [vehicleType, vehicleCondition, serviceTitle]);

  return (
    <Card className="mt-8 mb-8 border border-border bg-card/50 backdrop-blur-sm">
      <CardHeader className="bg-primary/5 border-b border-border/50">
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          <span>{serviceTitle} Cost Estimator</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="vehicle-type">Vehicle Type</Label>
              <Select value={vehicleType} onValueChange={setVehicleType}>
                <SelectTrigger id="vehicle-type" className="mt-2">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hatchback">Hatchback</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV/MUV</SelectItem>
                  <SelectItem value="luxury">Luxury/Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="condition">Vehicle Condition</Label>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Poor</span>
                <span>Good</span>
                <span>Excellent</span>
              </div>
              <Slider
                id="condition"
                defaultValue={[50]}
                max={100}
                step={10}
                className="mt-2"
                onValueChange={(value) => setVehicleCondition(value[0])}
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-center space-y-4 p-4 bg-primary/5 rounded-lg">
            <div className="text-center">
              <h4 className="text-sm text-muted-foreground">Estimated Price</h4>
              <div className="text-3xl font-bold text-primary mt-1">{estimatedCost}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Based on average pricing for your selections
              </p>
            </div>
            <Button 
              className="w-full" 
              onClick={onBookingClick}
            >
              Book Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
