
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarSelector from "@/components/CarSelector";
import ServiceSelector from "@/components/ServiceSelector";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BookService = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleNext = () => {
    if (step === 1 && !selectedCar) {
      toast.error("Please select a car to continue");
      return;
    }
    if (step === 2 && selectedServices.length === 0) {
      toast.error("Please select at least one service");
      return;
    }
    if (step < 2) {
      setStep(step + 1);
    } else {
      toast.error("Please connect to Supabase to enable booking functionality");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className={`h-1 w-1/3 ${step >= 1 ? "bg-primary" : "bg-muted"}`} />
            <div className={`h-1 w-1/3 ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
          </div>

          {/* Step Content */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            {step === 1 ? (
              <CarSelector selectedCar={selectedCar} onSelectCar={setSelectedCar} />
            ) : (
              <ServiceSelector 
                selectedServices={selectedServices}
                onSelectServices={setSelectedServices}
              />
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            <Button 
              className="ml-auto"
              onClick={handleNext}
            >
              {step < 2 ? "Next" : "Book Service"}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookService;
