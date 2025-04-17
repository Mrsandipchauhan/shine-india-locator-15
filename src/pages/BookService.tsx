
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarSelector from "@/components/CarSelector";
import ServiceSelector from "@/components/ServiceSelector";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { createBooking } from "@/lib/supabase";
import type { ServiceBooking } from "@/types/booking";

const BookService = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [date, setDate] = useState<Date>();
  
  const form = useForm<Omit<ServiceBooking, 'id' | 'status' | 'createdAt'>>({
    defaultValues: {
      city: "",
      carBrand: "",
      carModel: "",
      selectedServices: [],
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      preferredDate: "",
    },
  });

  const handleNext = () => {
    if (step === 1 && !selectedCar) {
      toast.error("Please select a car to continue");
      return;
    }
    if (step === 2 && selectedServices.length === 0) {
      toast.error("Please select at least one service");
      return;
    }
    if (step < 3) {
      setStep(step + 1);
      if (step === 1) {
        const [brand, model] = selectedCar.split(" ");
        form.setValue("carBrand", brand);
        form.setValue("carModel", model);
      }
      if (step === 2) {
        form.setValue("selectedServices", selectedServices);
      }
    }
  };

  const onSubmit = async (data: Omit<ServiceBooking, 'id' | 'status' | 'createdAt'>) => {
    try {
      await createBooking({
        ...data,
        status: 'pending'
      });
      toast.success("Booking submitted successfully!");
      navigate("/booking-confirmation");
    } catch (error) {
      toast.error("Failed to submit booking. Please try again.");
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
            <div className={`h-1 w-1/3 ${step >= 3 ? "bg-primary" : "bg-muted"}`} />
          </div>

          {/* Step Content */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            {step === 1 ? (
              <CarSelector selectedCar={selectedCar} onSelectCar={setSelectedCar} />
            ) : step === 2 ? (
              <ServiceSelector 
                selectedServices={selectedServices}
                onSelectServices={setSelectedServices}
              />
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="customerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} required />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="customerEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} required />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="customerPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} required />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left">
                              {date ? format(date, "PPP") : (
                                <span className="text-muted-foreground">Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={(newDate) => {
                                setDate(newDate);
                                if (newDate) {
                                  field.onChange(format(newDate, "yyyy-MM-dd"));
                                }
                              }}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">Book Service</Button>
                </form>
              </Form>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            {step < 3 && (
              <Button 
                className={step === 1 ? "w-full" : "ml-auto"}
                onClick={handleNext}
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookService;
