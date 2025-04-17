import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "sonner";
import BookingForm from "@/components/BookingForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageUtilities from "@/components/PageUtilities";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import { serviceFAQs } from "@/data/faqData";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceSidebar from "@/components/services/ServiceSidebar";

const servicesData = {
  "exterior-detailing": {
    title: "Exterior Detailing",
    description: "Restore your vehicle's exterior shine with our professional detailing service",
    fullDescription: "Our exterior detailing service is a comprehensive treatment designed to restore and protect your vehicle's outer surfaces. We use premium products and techniques to remove contaminants, restore shine, and apply protective treatments that shield your car from environmental damage.",
    price: "Starting at ₹2,999",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1605723517503-3cadb5818bc3?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Thorough exterior hand wash with pH-balanced soap",
      "Clay bar treatment to remove embedded contaminants",
      "Machine polishing to remove swirls and minor scratches",
      "Paint sealant or wax application for lasting protection",
      "Wheel and tire cleaning and dressing",
      "Exterior glass cleaning and treatment",
      "Chrome and trim restoration and protection"
    ],
    process: [
      "Initial rinse to remove loose dirt and debris",
      "Foam application and hand washing with microfiber mitts",
      "Clay bar treatment to remove bonded contaminants",
      "Machine polishing to correct paint imperfections",
      "Application of premium sealant or wax for protection",
      "Wheel and tire cleaning, including wheel wells",
      "Exterior trim and plastic restoration",
      "Final inspection and touch-ups"
    ],
    benefits: [
      "Enhanced vehicle appearance and restored shine",
      "Protection against environmental contaminants",
      "Prevention of premature paint oxidation and fading",
      "Increased resale value with maintained exterior",
      "Removal of harmful contaminants that can damage paint",
      "Lasting protection between maintenance washes",
      "Professional results that exceed typical car wash cleaning"
    ]
  },
  "interior-detailing": {
    title: "Interior Detailing",
    description: "Deep cleaning of all interior surfaces for a fresh, sanitized cabin",
    fullDescription: "Our interior detailing service delivers a meticulous cleaning and rejuvenation of your vehicle's cabin. We thoroughly clean every surface, remove stains, eliminate odors, and apply protective treatments to restore your interior to a like-new condition while sanitizing all touchpoints.",
    price: "Starting at ₹2,499",
    image: "https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=1964&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Complete vacuuming of all interior surfaces",
      "Steam cleaning of seats, carpets, and floor mats",
      "Dashboard, console, and trim cleaning and protection",
      "Leather cleaning, conditioning, and protection",
      "Interior glass cleaning and anti-fog treatment",
      "Air vent cleaning and sanitization",
      "Odor elimination treatments"
    ],
    process: [
      "Removal of all personal items and trash",
      "Thorough vacuuming of all surfaces including seats and trunk",
      "Steam cleaning of fabric surfaces and floor mats",
      "Specialized leather cleaning and conditioning",
      "Interior plastic and vinyl cleaning and protection",
      "Detailed cleaning of all switches, buttons, and vents",
      "Glass cleaning with streak-free solutions",
      "Application of fabric protectant and sanitizer"
    ],
    benefits: [
      "Elimination of allergens, bacteria, and germs",
      "Removal of stubborn stains and embedded dirt",
      "Prevention of premature wear on interior surfaces",
      "Restoration of leather, vinyl, and fabric surfaces",
      "Elimination of odors at their source, not masking",
      "Protection against UV damage to interior components",
      "Healthier vehicle environment for you and passengers"
    ]
  },
  "ceramic-coating": {
    title: "Ceramic Coating",
    description: "Long-lasting protection with advanced nano-ceramic technology",
    fullDescription: "Our professional ceramic coating service applies a nano-ceramic liquid polymer that bonds with your vehicle's paint at a molecular level. This creates a permanent protective layer that offers unmatched gloss, hardness, and hydrophobic properties that protect your paint for years, not months.",
    price: "Starting at ₹15,999",
    image: "https://images.unsplash.com/photo-1619642340116-bade7c2b2309?q=80&w=1974&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Premium grade 9H hardness ceramic coating",
      "Multi-stage paint correction before application",
      "Extreme hydrophobic properties for easy cleaning",
      "UV protection to prevent paint oxidation",
      "Chemical resistance against harsh contaminants",
      "Enhanced gloss and depth of color",
      "5-year warranty with documented application"
    ],
    process: [
      "Initial decontamination wash and clay bar treatment",
      "Multi-stage paint correction to remove defects",
      "Surface preparation with specialized alcohols",
      "Professional application of ceramic coating in layers",
      "Controlled curing in optimal conditions",
      "Final inspection and documentation for warranty",
      "Detailed care instructions for maintenance"
    ],
    benefits: [
      "Long-term protection lasting 5+ years with proper care",
      "Superior gloss and shine compared to traditional waxes",
      "Extreme water beading and self-cleaning properties",
      "Protection against bird droppings, tree sap, and acid rain",
      "Resistance to micro-marring and wash swirls",
      "Reduced maintenance time and frequency",
      "Enhanced resale value with documented protection"
    ]
  },
  "paint-protection": {
    title: "Paint Protection Film",
    description: "Ultimate physical protection with self-healing film technology",
    fullDescription: "Our Paint Protection Film (PPF) service applies a virtually invisible urethane film to your vehicle's exterior. This thermoplastic material offers the ultimate physical barrier against rock chips, scratches, and environmental damage while featuring self-healing properties that maintain a perfect finish.",
    price: "Starting at ₹25,999",
    image: "https://images.unsplash.com/photo-1621712493890-0069349208c6?q=80&w=1964&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1542230387-bfc77d70f34f?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Optically clear self-healing film technology",
      "Protection against rock chips and road debris",
      "Resistance to scratches and abrasions",
      "UV protection to prevent yellowing and fading",
      "Custom patterns for full vehicle or partial coverage",
      "Professional installation with no visible seams",
      "10-year warranty against yellowing and cracking"
    ],
    process: [
      "Full vehicle paint correction before installation",
      "Computer-cut patterns tailored to your specific vehicle",
      "Professional installation by certified technicians",
      "Heat-forming and stretching for perfect fitment",
      "Trimming and finishing for invisible edges",
      "Final inspection and documentation for warranty",
      "Detailed care instructions for maintenance"
    ],
    benefits: [
      "Self-healing technology that eliminates minor scratches",
      "Preservation of factory paint for higher resale value",
      "Protection from road salt and winter conditions",
      "Invisible protection that doesn't alter appearance",
      "Peace of mind when driving on highways and gravel roads",
      "Maintained gloss and color without yellowing",
      "Reduced long-term cost of paint repairs and touch-ups"
    ]
  },
  "headlight-restoration": {
    title: "Headlight Restoration",
    description: "Restore clarity and brightness to yellowed, foggy headlights",
    fullDescription: "Our headlight restoration service removes oxidation, yellowing, and haziness from your vehicle's headlights. Using professional-grade compounds and UV sealants, we restore optical clarity for improved visibility and safety while enhancing your vehicle's appearance.",
    price: "Starting at ₹1,999",
    image: "https://images.unsplash.com/photo-1567789232377-845662da09b5?q=80&w=1374&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1591311630200-ffa5138a1d79?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600661653561-629509413baa?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Removal of yellowing, oxidation, and haziness",
      "Multi-stage wet sanding to restore clarity",
      "Machine polishing to perfect surface finish",
      "UV-resistant sealant to prevent future deterioration",
      "Improved light output and beam pattern",
      "Enhanced appearance of vehicle front end",
      "Typically completed in 1-2 hours"
    ],
    process: [
      "Thorough cleaning and preparation of headlight surface",
      "Progressive wet sanding with various grits",
      "Machine polishing with specialized compounds",
      "Application of UV sealant for lasting protection",
      "Before and after light output testing",
      "Final inspection and documentation with photos"
    ],
    benefits: [
      "Improved nighttime visibility and safety",
      "Restored appearance of vehicle front end",
      "Cost-effective alternative to headlight replacement",
      "Prevention of further UV damage and deterioration",
      "Potential improvement in vehicle inspection approval",
      "Enhanced light output for safer driving conditions",
      "Quick service with immediate visible results"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [showBooking, setShowBooking] = useState(false);
  
  useEffect(() => {
    // Show booking popup after 12 seconds only on service pages
    const timer = setTimeout(() => {
      setShowBooking(true);
    }, 12000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle non-existent service
  if (!serviceId || !servicesData[serviceId as keyof typeof servicesData]) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold">Service Not Found</h1>
          <p className="text-muted-foreground mt-4">
            The requested service does not exist. Please check our available services.
          </p>
        </div>
        <Footer />
      </>
    );
  }
  
  const service = servicesData[serviceId as keyof typeof servicesData];
  const faqs = serviceFAQs[serviceId as keyof typeof serviceFAQs] || [];
  
  // Get related services (excluding current service)
  const relatedServicesIds = Object.keys(servicesData).filter(id => id !== serviceId);
  const relatedServices = relatedServicesIds.slice(0, 3).map(id => ({
    id,
    title: servicesData[id as keyof typeof servicesData].title,
    price: servicesData[id as keyof typeof servicesData].price,
    image: servicesData[id as keyof typeof servicesData].image
  }));
  
  return (
    <>
      <Navbar />
      <div 
        className="container mx-auto px-4 py-8"
        itemScope 
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content={service.title} />
        <meta itemProp="description" content={service.fullDescription} />
        <meta itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness" />
        <meta itemProp="areaServed" content="India" />
        <meta itemProp="serviceType" content="Car Detailing" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ServiceHero 
              title={service.title} 
              description={service.description}
              image={service.image}
            />
            
            <ServiceOverview 
              description={service.fullDescription}
              features={service.features}
              beforeImage={service.beforeImage}
              afterImage={service.afterImage}
            />
            
            <ServiceProcess 
              title={service.title}
              steps={service.process}
            />
            
            <ServiceBenefits 
              benefits={service.benefits}
            />
            
            <ServiceFAQ
              serviceName={service.title}
              faqs={faqs}
            />
          </div>
          
          <div className="lg:col-span-1">
            <ServiceSidebar
              price={service.price}
              title={service.title}
              onBookingClick={() => setShowBooking(true)}
              relatedServices={relatedServices}
            />
          </div>
        </div>
      </div>
      
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-[600px]">
          <BookingForm selectedService={service.title} />
        </DialogContent>
      </Dialog>
      
      <Footer />
      <PageUtilities />
    </>
  );
};

export default ServiceDetail;
