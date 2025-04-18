
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import BookingForm from "@/components/BookingForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageUtilities from "@/components/PageUtilities";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import { serviceFAQs } from "@/data/faqData";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import { ServiceCostCalculator } from "@/components/services/ServiceCostCalculator";
import { services } from "@/data/servicesData";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [showBooking, setShowBooking] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBooking(true);
    }, 12000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!serviceId || !services.find(s => s.id === serviceId)) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold">Service Not Found</h1>
          <p className="text-muted-foreground mt-4">
            The requested service does not exist. Please check our available services.
          </p>
        </div>
        <Footer />
      </>
    );
  }
  
  const service = services.find(s => s.id === serviceId)!;
  const faqs = serviceFAQs[serviceId as keyof typeof serviceFAQs] || [];
  
  const relatedServicesIds = services.filter(s => s.id !== serviceId).map(s => s.id);
  const relatedServices = relatedServicesIds.slice(0, 3).map(id => {
    const relatedService = services.find(s => s.id === id)!;
    return {
      id,
      title: relatedService.title,
      price: relatedService.price,
      image: relatedService.image
    };
  });
  
  return (
    <>
      <Navbar />
      <div 
        className="container mx-auto px-4 py-8"
        itemScope 
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content={service.title} />
        <meta itemProp="description" content={service.description} />
        <meta itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness" />
        <meta itemProp="areaServed" content="India" />
        <meta itemProp="serviceType" content="Car Detailing" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ServiceHero 
              title={service.title} 
              description={service.description}
              image={service.image}
            />
            
            <ServiceOverview 
              description={service.description}
              features={service.features}
              beforeImage={service.image}
              afterImage={service.image}
            />
            
            <ServiceCostCalculator
              serviceTitle={service.title}
              onBookingClick={() => setShowBooking(true)}
            />
            
            <ServiceProcess 
              title={service.title}
              steps={service.features.map((feature, index) => `Step ${index + 1}: ${feature}`)}
            />
            
            <ServiceBenefits 
              benefits={service.features}
            />
            
            <ServiceFAQ
              serviceName={service.title}
              faqs={faqs}
            />
          </div>
          
          <div className="lg:col-span-1">
            <ServiceSidebar
              price={service.price}
              title={service.title}
              onBookingClick={() => setShowBooking(true)}
              relatedServices={relatedServices}
            />
          </div>
        </div>
      </div>
      
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Book {service.title}</DialogTitle>
            <DialogDescription>
              Fill out the form below to schedule your {service.title} appointment.
            </DialogDescription>
          </DialogHeader>
          <BookingForm selectedService={service.title} />
        </DialogContent>
      </Dialog>
      
      <Footer />
      <PageUtilities />
    </>
  );
};

export default ServiceDetail;
