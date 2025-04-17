
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// This would ideally come from a database
const carBrands = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata",
  "Mahindra",
  "Honda",
  "Toyota",
  "Kia",
  "MG",
  "Volkswagen",
  "Skoda"
];

const popularModels: Record<string, string[]> = {
  "Maruti Suzuki": ["Swift", "Baleno", "Dzire", "Brezza", "Ertiga"],
  "Hyundai": ["Creta", "Venue", "i20", "Verna", "Tucson"],
  "Tata": ["Nexon", "Harrier", "Safari", "Punch", "Altroz"],
  // Add more as needed
};

interface CarSelectorProps {
  selectedCar: string;
  onSelectCar: (car: string) => void;
}

const CarSelector = ({ selectedCar, onSelectCar }: CarSelectorProps) => {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setSelectedModel("");
    onSelectCar("");
  };

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    onSelectCar(`${selectedBrand} ${model}`);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Select Your Car</h2>
        <p className="text-muted-foreground">
          Choose your car brand and model to get started
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Car Brand</Label>
          <Select value={selectedBrand} onValueChange={handleBrandChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              {carBrands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Car Model</Label>
          <Select 
            value={selectedModel} 
            onValueChange={handleModelChange}
            disabled={!selectedBrand}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              {selectedBrand && popularModels[selectedBrand]?.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {selectedBrand && (
        <div className="mt-8">
          <Label>Don't see your model?</Label>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              type="text" 
              placeholder="Type your car model..."
              className="pl-10"
              onChange={(e) => handleModelChange(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarSelector;
