import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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

  // Define the default service process steps
  const defaultServiceProcessSteps = [
    "We carefully examine your vehicle to identify specific needs and create a tailored plan.",
    "Specialized pre-wash treatments and careful hand washing to safely remove contaminants.",
    "Meticulous attention to every surface with specialized tools and techniques.",
    "Premium protective products applied to preserve your vehicle's appearance.",
    "Thorough quality check and walkthrough of completed work with maintenance tips."
  ];

  useEffect(() => {
    // Load custom process steps from localStorage if they exist
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

      <div 
        className="container mx-auto px-4 mb-8 mx-0 my-[60px] max-w-5xl" 
      >
        <div itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="Car Detailing Services" />
          <meta itemProp="description" content="Professional car detailing services including exterior and interior detailing, ceramic coating, paint protection, and specialty services." />
          <div itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="ShineDetailers" />
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Premium Services</Badge>
          {/* Make the service header clickable and link to /services */}
          <Link 
            to="/services" 
            className="text-4xl md:text-5xl font-bold mb-4 cursor-pointer hover:text-primary transition-colors inline-block"
            aria-label="Go to Services"
          >
            Professional Car Detailing Services
          </Link>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive care solutions for your vehicle, delivered by certified technicians using premium products.
          </p>
        </div>

        {/* Service Tabs */}
        <ServicesList 
          services={services} 
          onBookService={handleBookService}
        />

        {/* Service Packages */}
        <ServicesPackages 
          packages={servicePackages}
          onBookPackage={handleBookService}
        />

        {/* Process Section */}
        <ServiceProcess 
          title={processTitle} 
          steps={processSteps}
        />

        {/* Rich Content for SEO */}
        <section className="mt-24 mb-16">
          <ServicesSEO />
        </section>
      </div>

      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        {/* BookingForm dialog content */}
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
