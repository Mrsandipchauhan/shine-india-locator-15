
import { useState } from "react";
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

const Services = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  
  const handleBookService = (service: string) => {
    setSelectedService(service);
    setShowBooking(true);
  };
  
  return (
    <>
      <Navbar />
      
      <div 
        className="container mx-auto px-4 py-12"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Car Detailing Services</h1>
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
        <ServiceProcess />
        
        {/* Rich Content for SEO */}
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
