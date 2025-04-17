
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ArrowRight, Check, Car, Shield, Award, Users, Tool, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CitySelector from "@/components/CitySelector";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import CTASection from "@/components/CTASection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PageUtilities from "@/components/PageUtilities";

const Index = () => {
  // Detect first-time visitors
  useEffect(() => {
    const isFirstVisit = localStorage.getItem('visited') !== 'true';
    
    if (isFirstVisit) {
      setTimeout(() => {
        toast.info("Welcome to ShineDetailers!", {
          description: "Get 10% off your first car detailing service.",
          action: {
            label: "Book Now",
            onClick: () => {
              window.location.href = "/services";
            }
          },
          duration: 8000
        });
      }, 2000);
      
      localStorage.setItem('visited', 'true');
    }
  }, []);
  
  return (
    <>
      <Navbar />
      <div
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <meta itemProp="name" content="ShineDetailers" />
        <meta itemProp="description" content="Premium car detailing services across India with 20+ locations offering ceramic coating, paint protection, exterior and interior detailing." />
        <meta itemProp="telephone" content="+91 800-123-4567" />
        <meta itemProp="email" content="info@shinedetailers.in" />
        <meta itemProp="priceRange" content="₹₹₹" />
        <link itemProp="image" href="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2936&auto=format&fit=crop" />
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="streetAddress" content="#123, MG Road" />
          <meta itemProp="addressLocality" content="Bangalore" />
          <meta itemProp="addressRegion" content="Karnataka" />
          <meta itemProp="postalCode" content="560001" />
          <meta itemProp="addressCountry" content="IN" />
        </div>
      
        <Hero />
        
        {/* Featured Services Showcase */}
        <section className="py-16 bg-gradient-to-b from-background to-background/95">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-2 text-primary border-primary">Premium Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Elevate Your Vehicle's Appearance</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our certified technicians use industry-leading techniques and premium products to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all hover:shadow-md group">
                <CardContent className="p-6">
                  <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Car className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Exterior Detailing</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive treatment including washing, clay bar, polishing, and protection to restore your car's shine.
                  </p>
                  <Link to="/services/exterior-detailing" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all hover:shadow-md group">
                <CardContent className="p-6">
                  <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Ceramic Coating</h3>
                  <p className="text-muted-foreground mb-4">
                    Advanced nanoceramic protection that shields your paint from environmental damage for years.
                  </p>
                  <Link to="/services/ceramic-coating" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all hover:shadow-md group">
                <CardContent className="p-6">
                  <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Tool className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Paint Protection</h3>
                  <p className="text-muted-foreground mb-4">
                    Self-healing film that provides the ultimate defense against scratches, chips, and road debris.
                  </p>
                  <Link to="/services/paint-protection" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Link to="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View All Services <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Premium Experience */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-2 text-primary border-primary">The ShineDetailers Difference</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Exceptional Quality</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  At ShineDetailers, we deliver more than just clean cars. Our attention to detail, premium products, and skilled technicians ensure your vehicle receives the care it deserves.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-1.5 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Certified Technicians</h3>
                      <p className="text-muted-foreground">All our detailers receive extensive training and certification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-1.5 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Premium Products</h3>
                      <p className="text-muted-foreground">We use only the highest quality detailing products and equipment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-1.5 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Satisfaction Guarantee</h3>
                      <p className="text-muted-foreground">If you're not completely satisfied, we'll make it right</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg transform -rotate-3"></div>
                <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                  <BeforeAfterSlider
                    beforeImage="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop"
                    afterImage="https://images.unsplash.com/photo-1605723517503-3cadb5818bc3?q=80&w=1000&auto=format&fit=crop"
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-lg border border-border shadow-lg z-20">
                  <div className="flex items-center space-x-2">
                    <div className="bg-primary/10 p-1.5 rounded-full">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Customer Satisfaction</p>
                      <p className="text-xl font-bold">99.8%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-background relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-2 text-primary border-primary">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">India's Premier Car Detailing Service</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From our nationwide presence to our exceptional results, discover why ShineDetailers leads the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">10,000+</h3>
                  <p className="text-muted-foreground">Satisfied customers across India</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">20+ Cities</h3>
                  <p className="text-muted-foreground">Service locations nationwide</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">7+ Years</h3>
                  <p className="text-muted-foreground">Industry experience</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">4.9/5</h3>
                  <p className="text-muted-foreground">Average customer rating</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <ServicesSection />
        
        <CitySelector />
        
        <TestimonialsSlider />
        
        <CTASection />
      </div>
      <Footer />
      <PageUtilities />
    </>
  );
};

// Add missing components
import { Star, MapPin, Calendar } from "lucide-react";

export default Index;
