
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Shield, Star, Droplets, Brush, SprayCan, Wrench, Radio, SunMedium } from "lucide-react";
import { lazy } from "react";

const BookingForm = lazy(() => import("./BookingForm"));

const ServicesSection = () => {
  const services = [
    {
      id: "exterior-detailing",
      title: "Exterior Detailing",
      description: "Complete exterior cleaning, polishing, and protection for your vehicle's surfaces.",
      icon: <Car className="h-6 w-6 text-primary" />,
      price: "From ₹2,999",
      features: ["Deep Clean Exterior", "Paint Decontamination", "Paint Sealant", "Wheels & Tires"]
    },
    {
      id: "ceramic-coating",
      title: "Ceramic Coating",
      description: "Long-lasting nano-ceramic protection that shields your car's paint from environmental damage.",
      icon: <Shield className="h-6 w-6 text-primary" />,
      price: "From ₹15,999",
      features: ["9H Hardness", "Hydrophobic", "UV Protection", "5 Years Warranty"]
    },
    {
      id: "paint-protection",
      title: "Paint Protection Film",
      description: "Premium PPF installation to protect your vehicle from scratches and stone chips.",
      icon: <Shield className="h-6 w-6 text-primary" />,
      price: "From ₹24,999",
      features: ["Self-Healing Film", "Impact Protection", "UV Resistant", "10 Years Warranty"]
    },
    {
      id: "interior-detailing",
      title: "Interior Detailing",
      description: "Deep cleaning and sanitization of all interior surfaces for a fresh, like-new cabin.",
      icon: <Brush className="h-6 w-6 text-primary" />,
      price: "From ₹2,499",
      features: ["Deep Cleaning", "Sanitization", "Leather Care", "Odor Removal"]
    },
    {
      id: "paint-correction",
      title: "Paint Correction",
      description: "Professional paint correction to remove swirls, scratches, and imperfections.",
      icon: <SprayCan className="h-6 w-6 text-primary" />,
      price: "From ₹8,999",
      features: ["Swirl Removal", "Scratch Repair", "Paint Enhancement", "Gloss Restoration"]
    },
    {
      id: "engine-detailing",
      title: "Engine Bay Detailing",
      description: "Thorough cleaning and dressing of your vehicle's engine compartment.",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      price: "From ₹1,999",
      features: ["Deep Clean", "Degreasing", "Protection", "Visual Enhancement"]
    },
    {
      id: "headlight-restoration",
      title: "Headlight Restoration",
      description: "Restore clarity to cloudy and yellowed headlights for better visibility.",
      icon: <SunMedium className="h-6 w-6 text-primary" />,
      price: "From ₹1,499",
      features: ["UV Protection", "Clarity Restoration", "Safety Enhancement", "Long-lasting Results"]
    },
    {
      id: "glass-treatment",
      title: "Glass Treatment",
      description: "Professional glass cleaning and rain-repellent coating application.",
      icon: <Droplets className="h-6 w-6 text-primary" />,
      price: "From ₹1,999",
      features: ["Rain Repellent", "Better Visibility", "Easy Cleaning", "UV Protection"]
    },
    {
      id: "wheel-rim-detailing",
      title: "Wheel & Rim Detailing",
      description: "Specialized cleaning and protection for wheels, rims, and brake components.",
      icon: <Radio className="h-6 w-6 text-primary" />,
      price: "From ₹1,499",
      features: ["Deep Cleaning", "Brake Dust Protection", "Sealant Application", "Tire Dressing"]
    },
    {
      id: "express-detailing",
      title: "Express Detailing",
      description: "Quick but thorough exterior and interior cleaning service.",
      icon: <Star className="h-6 w-6 text-primary" />,
      price: "From ₹999",
      features: ["Quick Service", "Essential Cleaning", "Interior Vacuum", "Exterior Wash"]
    }
  ];

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
          {services.map((service) => (
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
