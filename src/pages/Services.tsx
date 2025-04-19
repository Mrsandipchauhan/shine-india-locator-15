
// Improved spacing on container and the service header linked with mega menu, added mb-8 and my-[60px] consistent spacing

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
import { Link } from "react-router-dom";

const Services = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [processSteps, setProcessSteps] = useState<string[]>([]);
  const [processTitle, setProcessTitle] = useState("Detailing");

  const defaultServiceProcessSteps = [
    "We carefully examine your vehicle to identify specific needs and create a tailored plan.",
    "Specialized pre-wash treatments and careful hand washing to safely remove contaminants.",
    "Meticulous attention to every surface with specialized tools and techniques.",
    "Premium protective products applied to preserve your vehicle's appearance.",
    "Thorough quality check and walkthrough of completed work with maintenance tips."
  ];

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

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 mb-8 my-[60px] max-w-5xl">
        <div itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="Car Detailing Services" />
          <meta itemProp="description" content="Professional car detailing services including exterior and interior detailing, ceramic coating, paint protection, and specialty services." />
          <div itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="ShineDetailers" />
          </div>
        </div>
        
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Premium Services</Badge>
          <Link 
            to="/services" 
            className="text-4xl md:text-5xl font-bold mb-4 cursor-pointer hover:text-primary transition-colors inline-block"
            aria-label="Go to Services"
          >
            Professional Car Detailing Services
          </Link>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive care solutions for your vehicle, delivered by certified technicians using premium products.
          </p>
        </div>

        <ServicesList 
          services={services} 
          onBookService={handleBookService}
        />

        <ServicesPackages 
          packages={servicePackages}
          onBookPackage={handleBookService}
        />

        <ServiceProcess 
          title={processTitle} 
          steps={processSteps}
        />

        <section className="mt-24 mb-16">
          <ServicesSEO />
        </section>
      </div>

      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-[600px]">
          <BookingForm selectedService={selectedService} />
        </DialogContent>
      </Dialog>

      <Footer />
      <PageUtilities />
    </>
  );
};

export default Services;
