
import ServiceCard from "./ServiceCard";
import { services } from "@/data/servicesData";

const ServicesSection = () => {
  // Take just the first 3 services for the homepage
  const featuredServices = services.slice(0, 3);
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of detailing services to keep your vehicle looking its best. 
            Each service is performed by certified professionals using premium products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
