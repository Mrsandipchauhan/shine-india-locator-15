
import { Link } from "react-router-dom";
import SEOMetadata from "@/components/SEOMetadata";
import MainLayout from "@/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import LocalServiceProviders from "@/components/LocalServiceProviders";
import ServiceBenefits from "@/components/ServiceBenefits";
import { MapPin, Calendar, Clock, Shield } from "lucide-react";

interface ServiceAreaProps {
  serviceId: string;
  areaName: string;
  cityName: string;
  serviceTitle: string;
  beforeImage: string;
  afterImage: string;
  country?: string;
}

const ServiceArea = ({ 
  serviceId, 
  areaName, 
  cityName, 
  serviceTitle,
  beforeImage,
  afterImage,
  country
}: ServiceAreaProps) => {
  // Create consistent routes for services
  const createServiceRoute = (service: string) => {
    if (country) {
      return `/area/${country.toLowerCase()}/${cityName.toLowerCase()}/${encodeURIComponent(areaName.toLowerCase())}/${service}`;
    }
    return `/area/${encodeURIComponent(areaName.toLowerCase())}/${service}`;
  };

  return (
    <MainLayout>
      <SEOMetadata city={areaName} type="service" />
      
      <div 
        className="py-16 container mx-auto px-4"
        itemScope 
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content={`${serviceTitle} in ${areaName}`} />
        <meta itemProp="areaServed" content={areaName} />
        <meta itemProp="serviceType" content="Car Detailing" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-primary/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{serviceTitle} in {areaName}</h1>
                <p className="text-muted-foreground text-lg">
                  Professional {serviceTitle.toLowerCase()} services in {areaName}, {cityName}. 
                  Expert technicians, premium products, and guaranteed satisfaction.
                </p>
              </div>
            </div>

            <Card className="mb-8 p-6">
              <h2 className="text-2xl font-bold mb-4">Why Choose Our {serviceTitle} Service in {areaName}?</h2>
              <BeforeAfterSlider 
                beforeImage={beforeImage}
                afterImage={afterImage}
                beforeLabel="Before Service"
                afterLabel="After Service"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                  <Calendar className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">Book at your convenience</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Quick Service</h3>
                  <p className="text-sm text-muted-foreground">Professional efficiency</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg">
                  <Shield className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">Guaranteed Quality</h3>
                  <p className="text-sm text-muted-foreground">100% satisfaction</p>
                </div>
              </div>
            </Card>

            <ServiceBenefits cityName={areaName} />
            
            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">{serviceTitle} Process in {areaName}</h2>
              <p className="text-muted-foreground mb-6">
                Our certified technicians follow a systematic approach to deliver exceptional results:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Initial Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Thorough inspection of your vehicle's condition
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Surface Preparation</h3>
                    <p className="text-sm text-muted-foreground">
                      Cleaning and preparation of surfaces
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Application</h3>
                    <p className="text-sm text-muted-foreground">
                      Professional application using premium products
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Check</h3>
                    <p className="text-sm text-muted-foreground">
                      Final inspection and customer approval
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <LocalServiceProviders city={areaName} providers={[]} />
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Book {serviceTitle} in {areaName}</h2>
                <BookingForm selectedCity={areaName} selectedService={serviceTitle} />
              </Card>
              
              <Card className="mt-6 p-6">
                <h3 className="font-semibold mb-4">Other Services in {areaName}</h3>
                <div className="space-y-2">
                  <Link to={createServiceRoute("exterior-detailing")}>
                    <Button variant="ghost" className="w-full justify-start">Exterior Detailing</Button>
                  </Link>
                  <Link to={createServiceRoute("interior-detailing")}>
                    <Button variant="ghost" className="w-full justify-start">Interior Detailing</Button>
                  </Link>
                  <Link to={createServiceRoute("ceramic-coating")}>
                    <Button variant="ghost" className="w-full justify-start">Ceramic Coating</Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServiceArea;
