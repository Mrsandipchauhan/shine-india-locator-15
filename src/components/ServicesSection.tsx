
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    description: "Complete exterior cleaning, clay bar treatment, polishing, and waxing to restore your car's shine.",
    price: "Starting at ₹2,999",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Exterior Hand Wash",
      "Clay Bar Treatment",
      "Paint Correction",
      "Ceramic Coating",
      "Wheel & Tire Care"
    ]
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    description: "Deep cleaning of all interior surfaces, fabric/leather treatment, and sanitization.",
    price: "Starting at ₹2,499",
    image: "https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=1964&auto=format&fit=crop",
    features: [
      "Deep Vacuum Cleaning",
      "Leather/Fabric Treatment",
      "Dashboard & Trim Care",
      "Air Vent Cleaning",
      "Odor Elimination"
    ]
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description: "Long-lasting protection with advanced nanoceramic technology.",
    price: "Starting at ₹15,999",
    image: "https://images.unsplash.com/photo-1619642340116-bade7c2b2309?q=80&w=1974&auto=format&fit=crop",
    features: [
      "Paint Protection",
      "Hydrophobic Effect",
      "UV Protection",
      "Scratch Resistance",
      "5-Year Warranty"
    ]
  }
];

const ServicesSection = () => {
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
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
