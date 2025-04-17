
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { ChevronLeft } from "lucide-react";
import PageUtilities from "@/components/PageUtilities";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import BookingForm from "@/components/BookingForm";

// Service data with detailed descriptions
const serviceData = {
  "exterior-detailing": {
    title: "Exterior Detailing",
    description: "Complete exterior cleaning, clay bar treatment, polishing, and waxing to restore your car's shine.",
    longDescription: `
      Our premium exterior detailing service is a comprehensive treatment designed to restore and enhance
      your vehicle's exterior surfaces. This service goes far beyond a standard car wash, addressing issues
      such as swirl marks, minor scratches, oxidation, and environmental contamination.
      
      Our certified technicians follow a meticulous multi-step process that includes a thorough wash,
      clay bar treatment to remove embedded contaminants, machine polishing to correct imperfections,
      and the application of premium wax or sealant for lasting protection.
    `,
    price: "Starting at ₹2,999",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Hand wash using premium pH-neutral shampoos",
      "Clay bar treatment to remove embedded contaminants",
      "Machine polishing to eliminate swirl marks and minor scratches",
      "Paint correction for deeper imperfections",
      "Application of premium carnauba wax or synthetic sealant",
      "Wheel cleaning and tire dressing",
      "Trim restoration and protection",
      "Glass cleaning and treatment"
    ],
    steps: [
      "Initial high-pressure rinse to remove loose dirt",
      "Hand washing with microfiber wash mitts and pH-neutral shampoo",
      "Decontamination with iron remover and clay bar treatment",
      "Surface inspection and assessment of paint condition",
      "Machine polishing with compound or polish as needed",
      "Second polishing step with finer polish if required",
      "Panel wipe to remove any residue",
      "Application of protective wax, sealant, or coating",
      "Wheel cleaning, tire dressing, and trim restoration",
      "Final inspection and touch-ups"
    ],
    benefits: [
      "Restores showroom shine and gloss",
      "Removes surface contaminants and embedded particles",
      "Eliminates swirl marks and minor scratches",
      "Provides protection against environmental contaminants",
      "Enhances vehicle appearance and maintains value",
      "Creates a hydrophobic surface that repels water and dirt"
    ]
  },
  "interior-detailing": {
    title: "Interior Detailing",
    description: "Deep cleaning of all interior surfaces, fabric/leather treatment, and sanitization.",
    longDescription: `
      Our interior detailing service transforms your vehicle's cabin into a clean, fresh, and sanitized
      environment. We address every surface and component, from carpets and upholstery to the smallest
      vents and crevices.
      
      Using specialized tools, equipment, and products, our technicians thoroughly clean, condition, and
      protect all interior surfaces while paying careful attention to material-specific requirements.
      The result is a rejuvenated interior that looks, feels, and smells like new.
    `,
    price: "Starting at ₹2,499",
    image: "https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=1964&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1583396752710-1c19d1b0514e?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Deep vacuum cleaning of all carpets, seats, and mats",
      "Thorough cleaning of dashboard, console, and trim",
      "Leather cleaning and conditioning treatment",
      "Fabric upholstery shampooing and extraction",
      "Complete air vent and crevice cleaning",
      "Glass interior cleaning and anti-fog treatment",
      "Odor elimination and sanitization",
      "UV protection for interior surfaces"
    ],
    steps: [
      "Remove all personal items and floor mats",
      "Thorough vacuuming of all surfaces including seat crevices and trunk",
      "Clean and condition leather surfaces with appropriate products",
      "Shampoo fabric upholstery and extract dirt and stains",
      "Clean all hard surfaces with appropriate products for each material",
      "Detail air vents, switches, buttons, and small components",
      "Clean and treat door jambs and thresholds",
      "Apply UV protectant to prevent fading and cracking",
      "Clean all interior glass and mirrors",
      "Steam cleaning for stubborn stains and sanitization",
      "Deodorizing treatment and final inspection"
    ],
    benefits: [
      "Creates a cleaner, healthier vehicle environment",
      "Removes allergens, bacteria, and odor-causing agents",
      "Prevents premature wear and deterioration of interior materials",
      "Enhances driving comfort and experience",
      "Preserves the value of your vehicle",
      "Identifies and addresses hidden issues before they worsen"
    ]
  },
  // Add detailed data for other services...
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState<any>(null);
  const [showBooking, setShowBooking] = useState(false);
  
  useEffect(() => {
    // Get service data based on serviceId
    if (serviceId && serviceData[serviceId as keyof typeof serviceData]) {
      setService(serviceData[serviceId as keyof typeof serviceData]);
    }
  }, [serviceId]);
  
  if (!service) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="mb-8">Sorry, the service you're looking for doesn't exist or has been moved.</p>
            <Link to="/services">
              <Button variant="outline">
                <ChevronLeft className="mr-2 h-4 w-4" /> View All Services
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-6 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6">
            <ChevronLeft className="mr-1 h-4 w-4" /> Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{service.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
              
              <Card className="mb-8 overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </CardContent>
              </Card>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
                  <p className="text-muted-foreground mb-6">{service.longDescription}</p>
                  
                  <h3 className="text-xl font-semibold mb-3">What's Included</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5"
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Before & After</h2>
                  <p className="text-muted-foreground mb-6">
                    Slide to see the dramatic transformation our {service.title} service provides.
                  </p>
                  <BeforeAfterSlider 
                    beforeImage={service.beforeImage} 
                    afterImage={service.afterImage}
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                </CardContent>
              </Card>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Our Process</h2>
                  <p className="text-muted-foreground mb-6">
                    Our {service.title} follows a meticulous multi-step process to ensure exceptional results:
                  </p>
                  <ol className="space-y-3 mb-6">
                    {service.steps.map((step: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                  <p className="text-muted-foreground mb-6">
                    Here's why our customers choose our professional {service.title} service:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="bg-card/50 p-4 rounded-lg border border-border">
                        <div className="flex items-start">
                          <svg
                            className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5"
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
                          <span>{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Service Details</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="text-lg font-semibold text-primary">{service.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-medium">4-6 hours (varies by vehicle)</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Recommendation</p>
                        <p className="font-medium">Every 3-4 months</p>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => setShowBooking(true)}
                    >
                      Book This Service
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">FAQ</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">How long does this service take?</h4>
                        <p className="text-sm text-muted-foreground">
                          Most vehicles require 4-6 hours for complete treatment, depending on size and condition.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Do I need to book in advance?</h4>
                        <p className="text-sm text-muted-foreground">
                          We recommend booking 2-3 days in advance to ensure availability, especially during weekends.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Is this service safe for all vehicles?</h4>
                        <p className="text-sm text-muted-foreground">
                          Yes, our techniques and products are safe for all vehicle types, from everyday cars to luxury vehicles.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">How often should I get this service?</h4>
                        <p className="text-sm text-muted-foreground">
                          We recommend this service every 3-4 months for optimal vehicle maintenance and protection.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Related Services</h3>
                    <div className="space-y-3">
                      {Object.entries(serviceData)
                        .filter(([id]) => id !== serviceId)
                        .slice(0, 3)
                        .map(([id, data]) => (
                          <Link key={id} to={`/services/${id}`} className="block">
                            <div className="flex items-start hover:bg-primary/5 p-2 rounded-lg transition-colors">
                              <img 
                                src={data.image} 
                                alt={data.title} 
                                className="w-16 h-12 object-cover rounded mr-3"
                              />
                              <div>
                                <h4 className="font-medium">{data.title}</h4>
                                <p className="text-xs text-primary">{data.price}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <PageUtilities />
      
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-[600px]">
          <BookingForm selectedService={service.title} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceDetail;
