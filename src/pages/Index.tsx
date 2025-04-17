
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import CTASection from "@/components/CTASection";
import PageUtilities from "@/components/PageUtilities";

const Index = () => {
  return (
    <MainLayout>
      <main>
        <Hero />
        <ServicesSection />
        <TestimonialsSlider />
        <CTASection />
      </main>
      <PageUtilities />
    </MainLayout>
  );
};

export default Index;
