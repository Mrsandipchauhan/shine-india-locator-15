
import { useEffect } from "react";
import PageUtilities from "@/components/PageUtilities";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import CitySelector from "@/components/CitySelector";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import CTASection from "@/components/CTASection";
import CitySlider from "@/components/CitySlider";
import WorkProcessSection from "@/components/WorkProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Star, Calendar } from "lucide-react";

const Index = () => {
  // Set page title and description for SEO
  useEffect(() => {
    document.title = "ShineDetailers - Premium Car Detailing Services Across India";
    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Professional car detailing services across 20+ cities in India. Exterior detailing, ceramic coating, interior cleaning, and paint protection with certified technicians.");
    }
  }, []);

  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <div className="py-6 bg-background">
          <div className="container mx-auto px-4">
            <CitySlider />
          </div>
        </div>
        <ServicesSection />
        <WorkProcessSection />
        
        {/* New section - Car Care Tips */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Expert Car Care Tips</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Keep your vehicle looking its best between professional detailing sessions with these helpful tips from our experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560253414-f65d1f5a1b0c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Daily Car Maintenance" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Daily Maintenance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Park in shaded areas to prevent sun damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Remove bird droppings promptly to prevent paint damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Use a microfiber cloth for quick dust removal</span>
                    </li>
                  </ul>
                  <Link to="/services" className="text-primary font-medium inline-block mt-4 hover:underline">
                    Learn more
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=2148&auto=format&fit=crop" 
                    alt="Interior Care" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Interior Care</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Vacuum interior weekly to prevent dirt buildup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Use proper leather cleaners for leather upholstery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Keep a small trash container to reduce clutter</span>
                    </li>
                  </ul>
                  <Link to="/services" className="text-primary font-medium inline-block mt-4 hover:underline">
                    Learn more
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1599937861537-d91e28c65a38?q=80&w=2070&auto=format&fit=crop" 
                    alt="Washing Tips" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Washing Tips</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Use the two-bucket method to prevent scratches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Wash in the shade, not direct sunlight</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Use automotive-specific cleaning products</span>
                    </li>
                  </ul>
                  <Link to="/services" className="text-primary font-medium inline-block mt-4 hover:underline">
                    Learn more
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/services">
                <Button size="lg">View All Car Care Tips</Button>
              </Link>
            </div>
          </div>
        </section>
        
        <WhyChooseUsSection />
        
        {/* New section - Detailing Packages */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Detailing Packages</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Choose from our range of comprehensive detailing packages tailored to meet your vehicle's specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border hover:border-primary transition-all relative">
                <div className="absolute top-0 right-0 bg-muted text-foreground px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Popular
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Essential Package</h3>
                  <div className="text-3xl font-bold mb-6">₹4,999 <span className="text-sm font-normal text-muted-foreground">onwards</span></div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Shield size={16} className="text-primary mr-2 mt-1" />
                      <span>Exterior hand wash and dry</span>
                    </li>
                    <li className="flex items-start">
                      <Shield size={16} className="text-primary mr-2 mt-1" />
                      <span>Interior vacuum and wipe down</span>
                    </li>
                    <li className="flex items-start">
                      <Shield size={16} className="text-primary mr-2 mt-1" />
                      <span>Tire and wheel cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <Shield size={16} className="text-primary mr-2 mt-1" />
                      <span>Dashboard and console polish</span>
                    </li>
                    <li className="flex items-start">
                      <Shield size={16} className="text-primary mr-2 mt-1" />
                      <span>Window cleaning</span>
                    </li>
                  </ul>
                  
                  <Link to="/services">
                    <Button className="w-full">Select Package</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="border-primary shadow-lg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm font-bold rounded-full">
                  Best Value
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Premium Package</h3>
                  <div className="text-3xl font-bold mb-6">₹9,999 <span className="text-sm font-normal text-muted-foreground">onwards</span></div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Award size={16} className="text-primary mr-2 mt-1" />
                      <span>Everything in Essential Package</span>
                    </li>
                    <li className="flex items-start">
                      <Award size={16} className="text-primary mr-2 mt-1" />
                      <span>Paint decontamination and clay bar</span>
                    </li>
                    <li className="flex items-start">
                      <Award size={16} className="text-primary mr-2 mt-1" />
                      <span>Single-stage polish</span>
                    </li>
                    <li className="flex items-start">
                      <Award size={16} className="text-primary mr-2 mt-1" />
                      <span>Premium wax protection</span>
                    </li>
                    <li className="flex items-start">
                      <Award size={16} className="text-primary mr-2 mt-1" />
                      <span>Leather conditioning</span>
                    </li>
                    <li className="flex items-start">
                      <Award size={16} className="text-primary mr-2 mt-1" />
                      <span>Engine bay cleaning</span>
                    </li>
                  </ul>
                  
                  <Link to="/services">
                    <Button className="w-full bg-primary hover:bg-primary/90">Select Package</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="border-border hover:border-primary transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ultimate Package</h3>
                  <div className="text-3xl font-bold mb-6">₹19,999 <span className="text-sm font-normal text-muted-foreground">onwards</span></div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Star size={16} className="text-primary mr-2 mt-1" />
                      <span>Everything in Premium Package</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={16} className="text-primary mr-2 mt-1" />
                      <span>Multi-stage paint correction</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={16} className="text-primary mr-2 mt-1" />
                      <span>Ceramic coating application</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={16} className="text-primary mr-2 mt-1" />
                      <span>Interior steam cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={16} className="text-primary mr-2 mt-1" />
                      <span>Glass coating treatment</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={16} className="text-primary mr-2 mt-1" />
                      <span>12-month protection guarantee</span>
                    </li>
                  </ul>
                  
                  <Link to="/services">
                    <Button className="w-full" variant="outline">Select Package</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 bg-muted p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-3">Need a Custom Package?</h3>
              <p className="text-muted-foreground mb-4">
                We can create customized detailing solutions tailored to your specific vehicle needs and budget.
              </p>
              <Link to="/contact">
                <Button variant="outline">Contact Us for Custom Quote</Button>
              </Link>
            </div>
          </div>
        </section>
        
        <TestimonialsSlider />
        <CitySelector />
        
        {/* New section - Book with Confidence */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Book With Confidence</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                At ShineDetailers, we strive to make your booking experience as seamless as your detailing service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose a convenient date and time that fits your busy schedule
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Satisfaction Guarantee</h3>
                  <p className="text-sm text-muted-foreground">
                    If you're not 100% satisfied, we'll make it right
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Secure Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    Multiple payment options with secure processing
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Expert Technicians</h3>
                  <p className="text-sm text-muted-foreground">
                    Serviced by certified and experienced professionals
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Your Appointment
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
      <PageUtilities />
    </>
  );
};

export default Index;
