
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, Droplet, Shield, Sun, Settings, Gauge } from "lucide-react";

const services = [
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    description: "Complete exterior cleaning, clay bar treatment, polishing, and waxing to restore your car's shine and protect against environmental damage.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    description: "Deep cleaning of all interior surfaces, fabric/leather treatment, and sanitization to restore that new car feeling.",
    icon: Droplet,
    image: "https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description: "Long-lasting protection with advanced nanoceramic technology that creates a permanent bond with your vehicle's paint.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1619642340116-bade7c2b2309?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "paint-protection",
    title: "Paint Protection Film",
    description: "Premium self-healing film that protects your vehicle's paint from scratches, chips, and environmental damage.",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1608506375591-b90e602a0ecb?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    description: "Restore clarity and brightness to cloudy, yellowed headlights to improve visibility and appearance.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1532587459811-f057563d1e97?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "engine-detailing",
    title: "Engine Bay Detailing",
    description: "Careful cleaning and dressing of your engine bay to improve appearance and help identify potential issues.",
    icon: Gauge,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of detailing services to keep your vehicle looking its best. 
            Each service is performed by certified professionals using premium products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="border border-border bg-card overflow-hidden hover:border-primary/50 transition-all">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center">
                  <div className="bg-primary/20 backdrop-blur-sm p-2 rounded-full mr-3">
                    <service.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link to={`/services/${service.id}`}>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
