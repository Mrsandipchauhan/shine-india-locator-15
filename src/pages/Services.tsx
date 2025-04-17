
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ChevronRight, ShieldCheck, Clock, Car, Star, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageUtilities from "@/components/PageUtilities";
import BookingForm from "@/components/BookingForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const services = [
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    description: "Complete exterior cleaning, clay bar treatment, polishing, and waxing to restore your car's shine.",
    price: "Starting at ₹2,999",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop",
    category: "detailing",
    features: [
      "Exterior Hand Wash",
      "Clay Bar Treatment",
      "Paint Correction",
      "Wax/Sealant Application",
      "Wheel & Tire Care"
    ],
    duration: "4-5 hours",
    satisfaction: "99%"
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    description: "Deep cleaning of all interior surfaces, fabric/leather treatment, and sanitization.",
    price: "Starting at ₹2,499",
    image: "https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=1964&auto=format&fit=crop",
    category: "detailing",
    features: [
      "Deep Vacuum Cleaning",
      "Leather/Fabric Treatment",
      "Dashboard & Trim Care",
      "Air Vent Cleaning",
      "Odor Elimination"
    ],
    duration: "3-4 hours",
    satisfaction: "98%"
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description: "Long-lasting protection with advanced nanoceramic technology.",
    price: "Starting at ₹15,999",
    image: "https://images.unsplash.com/photo-1619642340116-bade7c2b2309?q=80&w=1974&auto=format&fit=crop",
    category: "protection",
    features: [
      "Paint Protection",
      "Hydrophobic Effect",
      "UV Protection",
      "Scratch Resistance",
      "5-Year Warranty"
    ],
    duration: "2-3 days",
    satisfaction: "100%"
  },
  {
    id: "paint-protection",
    title: "Paint Protection Film",
    description: "Self-healing film that provides the ultimate defense against scratches and chips.",
    price: "Starting at ₹25,999",
    image: "https://images.unsplash.com/photo-1621712493890-0069349208c6?q=80&w=1964&auto=format&fit=crop",
    category: "protection",
    features: [
      "Rock Chip Protection",
      "Self-Healing Technology",
      "UV Resistance",
      "10-Year Warranty",
      "Invisible Protection"
    ],
    duration: "2-3 days",
    satisfaction: "100%"
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    description: "Restore clarity and brightness to yellowed, foggy headlights.",
    price: "Starting at ₹1,999",
    image: "https://images.unsplash.com/photo-1567789232377-845662da09b5?q=80&w=1374&auto=format&fit=crop",
    category: "specialty",
    features: [
      "UV Damage Removal",
      "Multi-Stage Polishing",
      "UV Sealant Application",
      "Improved Visibility",
      "Like-New Appearance"
    ],
    duration: "1-2 hours",
    satisfaction: "99%"
  },
  {
    id: "engine-detailing",
    title: "Engine Bay Detailing",
    description: "Professional cleaning and dressing of engine compartment.",
    price: "Starting at ₹1,499",
    image: "https://images.unsplash.com/photo-1590654893718-e4bed5228edf?q=80&w=1374&auto=format&fit=crop",
    category: "specialty",
    features: [
      "Safe Degreasing",
      "Detail Cleaning",
      "Plastic & Rubber Treatment",
      "Corrosion Prevention",
      "Enhanced Appearance"
    ],
    duration: "1-2 hours",
    satisfaction: "97%"
  }
];

const packages = [
  {
    id: "essentials",
    title: "Essentials Package",
    description: "Perfect for regular maintenance",
    price: "₹4,999",
    features: [
      "Exterior Detailing",
      "Basic Interior Cleaning",
      "Wheel & Tire Treatment",
      "Wax Protection (3 months)"
    ]
  },
  {
    id: "premium",
    title: "Premium Package",
    description: "Our most popular complete detailing",
    price: "₹7,999",
    features: [
      "Full Exterior Detailing",
      "Complete Interior Detailing",
      "Engine Bay Cleaning",
      "Paint Sealant (6 months)",
      "Leather/Fabric Protection"
    ],
    featured: true
  },
  {
    id: "ultimate",
    title: "Ultimate Protection",
    description: "Long-term premium protection",
    price: "₹21,999",
    features: [
      "Full Exterior & Interior Detailing",
      "Paint Correction",
      "Ceramic Coating (2 years)",
      "Interior Fabric/Leather Protection",
      "Glass Treatment",
      "1-Year Maintenance Plan"
    ]
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();
  
  const handleBookService = (service: string) => {
    setSelectedService(service);
    setShowBooking(true);
  };
  
  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);
  
  return (
    <>
      <Navbar />
      
      <div 
        className="container mx-auto px-4 py-12"
        itemScope 
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content="Car Detailing Services" />
        <meta itemProp="description" content="Professional car detailing services including exterior and interior detailing, ceramic coating, paint protection, and specialty services." />
        <meta itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="ShineDetailers" />
        </meta>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Premium Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Car Detailing Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive care solutions for your vehicle, delivered by certified technicians using premium products.
          </p>
        </div>
        
        {/* Service Tabs */}
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-card">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="detailing">Detailing</TabsTrigger>
              <TabsTrigger value="protection">Protection</TabsTrigger>
              <TabsTrigger value="specialty">Specialty</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col border-border hover:border-primary/30 transition-colors">
                    <div className="relative h-48">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                          <p className="text-primary font-semibold">{service.price}</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="space-y-4 mb-6 flex-grow">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock size={16} className="mr-2 text-primary" />
                          <span>Duration: {service.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star size={16} className="mr-2 text-primary" />
                          <span>Satisfaction Rate: {service.satisfaction}</span>
                        </div>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <svg
                                className="w-4 h-4 mr-2 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button 
                          className="bg-primary hover:bg-primary/90 flex-grow"
                          onClick={() => handleBookService(service.title)}
                        >
                          Book Now
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-grow"
                          onClick={() => navigate(`/services/${service.id}`)}
                        >
                          Learn More <ChevronRight size={16} className="ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Service Packages */}
        <section className="mt-20 mb-16">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Value Packages</Badge>
            <h2 className="text-3xl font-bold mb-4">Comprehensive Detailing Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Save with our bundled service packages designed to provide maximum value for your vehicle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`border-border overflow-hidden ${pkg.featured ? 'ring-2 ring-primary shadow-lg' : ''}`}
              >
                {pkg.featured && (
                  <div className="bg-primary text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  <p className="text-3xl font-bold text-primary mb-6">{pkg.price}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                          <ShieldCheck size={16} className="text-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${pkg.featured ? 'bg-primary hover:bg-primary/90' : 'bg-card hover:bg-card/90'}`}
                    variant={pkg.featured ? "default" : "outline"}
                    onClick={() => handleBookService(pkg.title)}
                  >
                    Book This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Process Section */}
        <section className="mt-24 mb-16 bg-card rounded-xl p-8 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-2">Our Process</Badge>
              <h2 className="text-3xl font-bold mb-4">How Our Detailing Works</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We follow a systematic approach to ensure exceptional results for every vehicle we service.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Inspection & Assessment</h3>
                    <p className="text-muted-foreground">We carefully examine your vehicle to identify specific needs and create a tailored plan.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Pre-Treatment & Washing</h3>
                    <p className="text-muted-foreground">Specialized pre-wash treatments and careful hand washing to safely remove contaminants.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Detailed Cleaning & Correction</h3>
                    <p className="text-muted-foreground">Meticulous attention to every surface with specialized tools and techniques.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Protection Application</h3>
                    <p className="text-muted-foreground">Premium protective products applied to preserve your vehicle's appearance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Final Inspection & Delivery</h3>
                    <p className="text-muted-foreground">Thorough quality check and walkthrough of completed work with maintenance tips.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1635260537978-67eff8c97786?q=80&w=800&auto=format&fit=crop" 
                  alt="Detailing process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=800&auto=format&fit=crop" 
                  alt="Detailing process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607856400955-ceefe9cdea49?q=80&w=800&auto=format&fit=crop" 
                  alt="Detailing process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=800&auto=format&fit=crop" 
                  alt="Detailing process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Rich Content for SEO */}
        <section className="mt-24 mb-16">
          <div className="prose max-w-none">
            <h2>Professional Car Detailing Services Across India</h2>
            <p>
              ShineDetailers provides comprehensive car detailing services designed to meet the unique needs of vehicles across India. 
              From the bustling urban environments of Delhi and Mumbai to the coastal conditions of Chennai and the varying climate of Bangalore, 
              our services are tailored to address location-specific challenges.
            </p>
            
            <h3>Exterior Detailing: Beyond Just Washing</h3>
            <p>
              Our exterior detailing goes far beyond a standard car wash. We employ a multi-step process that includes specialized pre-washing, 
              safe hand washing techniques, clay bar treatment to remove embedded contaminants, machine polishing to remove swirls and scratches,
              and application of premium protective products. This comprehensive approach ensures your vehicle not only looks its best but is also
              protected against environmental contaminants.
            </p>
            
            <h3>Interior Detailing: Creating a Clean, Healthy Cabin</h3>
            <p>
              Interior detailing focuses on creating a clean, sanitized, and rejuvenated cabin environment. Our technicians meticulously clean
              every surface, from dashboards and consoles to the smallest vents and switches. We use specialized tools to extract dirt from carpets
              and upholstery, treat leather surfaces with professional conditioners, and employ antimicrobial treatments to eliminate odors and
              create a healthier environment.
            </p>
            
            <h3>Paint Protection: Advanced Solutions for Lasting Beauty</h3>
            <p>
              Modern vehicles deserve modern protection. Our ceramic coating and paint protection film services represent the pinnacle of vehicle
              paint preservation. Ceramic coatings create a nanoscopic layer that bonds with your paint, providing years of protection against UV rays,
              chemical contaminants, and minor abrasions. Paint protection film offers physical protection against stone chips, scratches, and road debris
              with self-healing properties that maintain a flawless finish.
            </p>
            
            <h3>Why Professional Detailing Matters</h3>
            <p>
              Regular professional detailing is an investment in your vehicle's longevity and value. Beyond the immediate aesthetic benefits,
              proper detailing removes harmful contaminants that can damage surfaces over time, prevents premature aging of both exterior and interior
              materials, and helps maintain resale value. For daily drivers and enthusiast vehicles alike, professional detailing offers protection
              and preservation that far exceeds typical cleaning methods.
            </p>
            
            <h3>Finding the Right Service for Your Vehicle</h3>
            <p>
              At ShineDetailers, we understand that every vehicle has unique needs based on its condition, usage patterns, and your personal
              preferences. That's why we offer free consultations to help determine the most appropriate services for your specific situation.
              Whether you're looking for regular maintenance detailing, preparing your vehicle for sale, or seeking long-term protection for
              a new purchase, our team can guide you to the optimal service package.
            </p>
            
            <p>
              Explore our service offerings above or contact us directly to discuss how we can help keep your vehicle in pristine condition.
              With locations across India and mobile services available in select areas, professional detailing has never been more accessible.
            </p>
          </div>
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
