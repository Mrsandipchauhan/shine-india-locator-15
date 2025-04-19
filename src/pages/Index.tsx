
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
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
import LocalBusinessSchema from "@/components/SEO/LocalBusinessSchema";
import PerformanceMonitor from "@/components/SEO/PerformanceMonitor";
import { ImageOptimizer } from "@/components/ImageOptimizer";
import { H1, H2 } from "@/components/SEO/HeadingStructure";

const Index = () => {
  const location = useLocation();
  const canonicalUrl = `https://shinedetailers.in${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>ShineDetailers - Premium Car Detailing Services Across India</title>
        <meta name="description" content="Professional car detailing services across India. Expert exterior detailing, ceramic coating, interior cleaning, and paint protection services with certified technicians." />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Additional meta tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ShineDetailers - Premium Car Detailing Services" />
        <meta property="og:description" content="Professional car detailing services across India with certified technicians." />
        <meta property="og:url" content={canonicalUrl} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ShineDetailers - Premium Car Detailing" />
        <meta name="twitter:description" content="Professional car detailing services across India." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <PerformanceMonitor />
        <LocalBusinessSchema />
        
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <div className="py-4 md:py-6 bg-background">
            <div className="container mx-auto">
              <CitySlider />
            </div>
          </div>
          
          <div className="space-y-8 md:space-y-12">
            <ServicesSection />
            <DetailingPackages />
            <FeaturedAreasSection />
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
      </div>
    </>
  );
};

export default Index;
