
import { useEffect } from "react";
import PageUtilities from "@/components/PageUtilities";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import CitySlider from "@/components/CitySlider";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import CTASection from "@/components/CTASection";
import WorkProcessSection from "@/components/WorkProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import DetailingPackages from "@/components/home/DetailingPackages";
import CarCareTips from "@/components/home/CarCareTips";
import BookWithConfidence from "@/components/home/BookWithConfidence";
import FeaturedAreasSection from "@/components/FeaturedAreasSection";
import QuickServiceEstimator from "@/components/home/QuickServiceEstimator";
import SEOContent from "@/components/home/SEOContent";

const Index = () => {
  useEffect(() => {
    document.title = "ShineDetailers - Premium Car Detailing Services Across India";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Professional car detailing services across 20+ cities in India. Exterior detailing, ceramic coating, interior cleaning, and paint protection with certified technicians.");
    }
  }, []);

  return <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <div className="py-4 md:py-6 bg-background border-b border-border/10 w-full overflow-hidden">
          <div className="container mx-auto w-full overflow-hidden">
            <CitySlider />
          </div>
        </div>
        <div className="space-y-8 md:space-y-0 w-full overflow-hidden">
          <ServicesSection />
          <DetailingPackages />
          <FeaturedAreasSection /> {/* Moved this section up */}
          <QuickServiceEstimator />
          <WorkProcessSection />
          <WhyChooseUsSection />
          <CarCareTips />
          <TestimonialsSlider />
          <SEOContent />
          <BookWithConfidence />
          <CTASection />
        </div>
      </main>
      <Footer />
      <PageUtilities />
    </div>;
};

export default Index;
