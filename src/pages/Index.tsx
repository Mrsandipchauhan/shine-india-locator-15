
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";
import LocationDetection from "@/components/LocationDetection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ServicesSection />
      <TestimonialsSlider />
      <CTASection />
      <Footer />
      <BookingDialog />
      <LocationDetection />
    </div>
  );
};

export default Index;
