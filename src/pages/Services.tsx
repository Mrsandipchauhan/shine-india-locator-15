import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageUtilities from "@/components/PageUtilities";
import BookingForm from "@/components/BookingForm";
import { services, servicePackages } from "@/data/servicesData";
import ServicesList from "@/components/services/ServicesList";
import ServicesPackages from "@/components/services/ServicesPackages";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServicesSEO from "@/components/services/ServicesSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [processSteps, setProcessSteps] = useState<string[]>([]);
  const [processTitle, setProcessTitle] = useState("Detailing");

  const defaultServiceProcessSteps = ["We carefully examine your vehicle to identify specific needs and create a tailored plan.", "Specialized pre-wash treatments and careful hand washing to safely remove contaminants.", "Meticulous attention to every surface with specialized tools and techniques.", "Premium protective products applied to preserve your vehicle's appearance.", "Thorough quality check and walkthrough of completed work with maintenance tips."];

  useEffect(() => {
    const savedSteps = localStorage.getItem('processSteps');
    const savedTitle = localStorage.getItem('processTitle');
    if (savedSteps) {
      setProcessSteps(JSON.parse(savedSteps));
    } else {
      setProcessSteps(defaultServiceProcessSteps);
    }
    if (savedTitle) {
      setProcessTitle(savedTitle);
    }
  }, []);

  const handleBookService = (service: string) => {
    setSelectedService(service);
    setShowBooking(true);
  };

  return <>
      <Navbar />

      <div className="container mx-auto px-4 mb-8 lg:mb-16 my-[60px] lg:my-[80px] max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-2">Premium Services</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 cursor-pointer hover:text-primary transition-colors inline-block">
            Professional Car Detailing Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed lg:text-2xl">
            Comprehensive care solutions for your vehicle, delivered by certified technicians using premium products.
          </p>
        </div>

        <section className="mb-16 lg:mb-24">
          <ServicesList services={services} onBookService={handleBookService} />
        </section>

        <ServicesPackages packages={servicePackages} onBookPackage={handleBookService} />

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 mt-24">
          <div className="lg:col-span-8">
            <ServiceProcess title={processTitle} steps={processSteps} />
          </div>
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <section className="bg-card rounded-xl p-8 border border-border h-full">
              <ServicesSEO />
            </section>
          </div>
        </div>
      </div>

      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-[600px]">
          <BookingForm selectedService={selectedService} />
        </DialogContent>
      </Dialog>

      <Footer />
      <PageUtilities />
    </>;
};

export default Services;
