
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
import FeaturedAreasSection from "@/components/FeaturedAreasSection";
import QuickServiceEstimator from "@/components/home/QuickServiceEstimator";

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
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <div className="py-4 md:py-6 bg-background border-b border-border/10 w-full">
          <div className="container mx-auto px-4 w-full">
            <CitySlider />
          </div>
        </div>
        <div className="space-y-8 md:space-y-0 w-full">
          <ServicesSection />
          <QuickServiceEstimator />
          <WorkProcessSection />
          <DetailingPackages />
          <WhyChooseUsSection />
          <CarCareTips />
          <TestimonialsSlider />
          <FeaturedAreasSection />
          <div className="pt-6 md:pt-10">
            <CitySelector />
          </div>
          <BookWithConfidence />
          <CTASection />
        </div>
      </main>
      <Footer />
      <PageUtilities />
    </div>
  );
};

export default Index;
