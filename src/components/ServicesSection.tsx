
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Shield, Star, SprayCan, Brush } from "lucide-react";
import { lazy } from "react";
import { useCountryDetection } from "@/hooks/use-country-detection";

const BookingForm = lazy(() => import("./BookingForm"));

const ServicesSection = () => {
  const userCountry = useCountryDetection();

  // Define services with country availability
  const services = [
    {
      id: "exterior-detailing",
      title: "Exterior Detailing",
      description: "Complete exterior cleaning, polishing, and protection for your vehicle's surfaces.",
      icon: <Car className="h-6 w-6 text-primary" />,
      price: userCountry === 'India' ? "From ₹2,999" : "From $99",
      features: ["Deep Clean Exterior", "Paint Decontamination", "Paint Sealant", "Wheels & Tires"],
      availableIn: ["India", "USA", "UK", "Canada", "Australia"]
    },
    {
      id: "ceramic-coating",
      title: "Ceramic Coating",
      description: "Long-lasting nano-ceramic protection that shields your car's paint from environmental damage.",
      icon: <Shield className="h-6 w-6 text-primary" />,
      price: userCountry === 'India' ? "From ₹15,999" : "From $599",
      features: ["9H Hardness", "Hydrophobic", "UV Protection", "5 Years Warranty"],
      availableIn: ["India", "USA", "UK", "Canada", "Australia"]
    },
    {
      id: "interior-detailing",
      title: "Interior Detailing",
      description: "Deep cleaning and sanitization of all interior surfaces for a fresh, like-new cabin.",
      icon: <Brush className="h-6 w-6 text-primary" />,
      price: userCountry === 'India' ? "From ₹2,499" : "From $89",
      features: ["Deep Cleaning", "Sanitization", "Leather Care", "Odor Removal"],
      availableIn: ["India", "USA", "UK", "Canada", "Australia"]
    },
    {
      id: "express-detailing",
      title: "Express Detailing",
      description: "Quick but thorough exterior and interior cleaning service.",
      icon: <Star className="h-6 w-6 text-primary" />,
      price: userCountry === 'India' ? "From ₹999" : "From $49",
      features: ["Quick Service", "Essential Cleaning", "Interior Vacuum", "Exterior Wash"],
      availableIn: ["India", "USA", "UK", "Canada", "Australia"]
    },
    {
      id: "ac-sanitization",
      title: "AC Sanitization",
      description: "Complete air conditioning system cleaning and sanitization for fresh, healthy air.",
      icon: <SprayCan className="h-6 w-6 text-primary" />,
      price: "From ₹999",
      features: ["Deep AC Cleaning", "Antibacterial Treatment", "Odor Removal", "Air Quality Test"],
      availableIn: ["India"] // Only available in India
    },
    {
      id: "denting-painting",
      title: "Denting & Painting",
      description: "Professional dent removal and painting services for all types of vehicles.",
      icon: <Car className="h-6 w-6 text-primary" />,
      price: "From ₹4,999",
      features: ["Dent Removal", "Color Matching", "Premium Paint", "Clear Coat Protection"],
      availableIn: ["India"] // Only available in India
    }
  ];

  // Filter services based on user's country
  const filteredServices = services.filter(service => 
    service.availableIn.includes(userCountry)
  );

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Premium Detailing Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional car detailing services using premium products and cutting-edge techniques. 
            Our certified technicians deliver exceptional results every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`}
              className="group transition-transform hover:-translate-y-1"
            >
              <Card className="h-full bg-card hover:bg-accent/5 transition-colors overflow-hidden relative">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="text-lg font-semibold text-primary mb-4">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
