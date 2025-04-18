
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
import DetailingPackages from "@/components/home/DetailingPackages";
import CarCareTips from "@/components/home/CarCareTips";
import BookWithConfidence from "@/components/home/BookWithConfidence";

const Index = () => {
  // Set page title and description for SEO
  useEffect(() => {
    document.title = "ShineDetailers - Premium Car Detailing Services Across India";
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
        <CarCareTips />
        <WhyChooseUsSection />
        <DetailingPackages />
        <TestimonialsSlider />
        <CitySelector />
        <BookWithConfidence />
        <CTASection />
      </main>
      <Footer />
      <PageUtilities />
    </>
  );
};

export default Index;
