
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PageUtilities from "@/components/PageUtilities";

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
  },
  {
    id: "paint-protection",
    title: "Paint Protection Film",
    description: "Ultimate protection against scratches, chips, and road debris with self-healing film.",
    price: "Starting at ₹24,999",
    image: "https://images.unsplash.com/photo-1619642340016-301791473ff2?q=80&w=1974&auto=format&fit=crop",
    features: [
      "Self-Healing Technology",
      "Impact Protection",
      "UV Protection",
      "10-Year Warranty",
      "Custom Installation"
    ]
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    description: "Restore cloudy, yellowed headlights to improve visibility and appearance.",
    price: "Starting at ₹1,499",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1974&auto=format&fit=crop",
    features: [
      "Surface Cleaning",
      "Wet Sanding",
      "Polishing",
      "UV Protection Coating",
      "Improved Visibility"
    ]
  },
  {
    id: "engine-detailing",
    title: "Engine Bay Detailing",
    description: "Professional cleaning and protection of your vehicle's engine compartment.",
    price: "Starting at ₹1,999",
    image: "https://images.unsplash.com/photo-1558854009-05a545210a92?q=80&w=1974&auto=format&fit=crop",
    features: [
      "Degreasing",
      "Steam Cleaning",
      "Surface Protection",
      "Plastic/Rubber Treatment",
      "Detailed Cleaning"
    ]
  }
];

const Services = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-6 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Premium Car Detailing Services</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional detailing services to restore and protect your vehicle
          </p>

          {/* Before/After Slider Showcase */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">See the Transformation</h2>
              <p className="text-muted-foreground mb-6">
                Slide to compare the before and after results of our professional detailing services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Exterior Detailing</h3>
                  <BeforeAfterSlider 
                    beforeImage="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop" 
                    afterImage="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Interior Detailing</h3>
                  <BeforeAfterSlider 
                    beforeImage="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop" 
                    afterImage="https://images.unsplash.com/photo-1583396752710-1c19d1b0514e?q=80&w=1000&auto=format&fit=crop"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          
          {/* SEO Content */}
          <Card className="mb-12">
            <CardContent className="p-6 seo-content">
              <h2>Why Professional Car Detailing Matters</h2>
              <p>
                Professional car detailing goes beyond a simple car wash. It involves meticulous cleaning, 
                restoration, and finishing of your vehicle, both inside and out, to produce a show-quality 
                level of detail. This comprehensive process protects your investment and enhances your 
                driving experience.
              </p>
              
              <h3>Benefits of Regular Professional Detailing</h3>
              <ul>
                <li><strong>Preserves Your Vehicle's Value:</strong> Regular detailing helps maintain your car's appearance and condition, which can significantly impact its resale value.</li>
                <li><strong>Protects Your Paint:</strong> Professional detailing includes the application of protective coatings that shield your paint from environmental contaminants, UV rays, and oxidation.</li>
                <li><strong>Enhances Driving Experience:</strong> A clean, well-maintained interior not only looks better but creates a more comfortable and healthy driving environment.</li>
                <li><strong>Identifies Potential Issues:</strong> During the detailing process, technicians may spot minor problems before they become major concerns.</li>
                <li><strong>Improves Safety:</strong> Clean windows, mirrors, and headlights enhance visibility, contributing to safer driving conditions.</li>
              </ul>
              
              <h3>Our Detailing Process</h3>
              <p>
                At ShineDetailers, we follow a systematic approach to ensure every vehicle receives the highest standard of care:
              </p>
              <ol>
                <li><strong>Initial Assessment:</strong> We evaluate your vehicle's condition to identify specific needs and areas of concern.</li>
                <li><strong>Exterior Washing:</strong> We use the two-bucket method and pH-neutral shampoos to safely remove surface contaminants.</li>
                <li><strong>Decontamination:</strong> Clay bar treatment removes embedded contaminants that washing alone cannot remove.</li>
                <li><strong>Paint Correction:</strong> We address swirl marks, scratches, and oxidation to restore your paint's clarity and shine.</li>
                <li><strong>Protection Application:</strong> We apply high-quality waxes, sealants, or ceramic coatings to protect your vehicle's finish.</li>
                <li><strong>Interior Detailing:</strong> Every surface inside your vehicle is thoroughly cleaned, sanitized, and protected.</li>
                <li><strong>Final Inspection:</strong> We conduct a comprehensive check to ensure every detail meets our exacting standards.</li>
              </ol>
              
              <h3>Why Choose ShineDetailers</h3>
              <p>
                With 20+ locations across India, certified technicians, and premium products, ShineDetailers 
                delivers exceptional results that exceed expectations. We understand the unique challenges that 
                Indian vehicles face, from monsoon humidity to urban pollution, and tailor our services accordingly.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <PageUtilities />
    </>
  );
};

export default Services;
