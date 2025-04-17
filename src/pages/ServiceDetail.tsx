import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageUtilities from "@/components/PageUtilities";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import BookingForm from "@/components/BookingForm";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceSidebar from "@/components/services/ServiceSidebar";

// Service data with detailed descriptions and matched before/after images of the same cars
const serviceData = {
  "exterior-detailing": {
    title: "Exterior Detailing",
    description: "Complete exterior cleaning, clay bar treatment, polishing, and waxing to restore your car's shine.",
    longDescription: `
      Our premium exterior detailing service is a comprehensive treatment designed to restore and enhance
      your vehicle's exterior surfaces. This service goes far beyond a standard car wash, addressing issues
      such as swirl marks, minor scratches, oxidation, and environmental contamination.
      
      Our certified technicians follow a meticulous multi-step process that includes a thorough wash,
      clay bar treatment to remove embedded contaminants, machine polishing to correct imperfections,
      and the application of premium wax or sealant for lasting protection.
    `,
    price: "Starting at ₹2,999",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Hand wash using premium pH-neutral shampoos",
      "Clay bar treatment to remove embedded contaminants",
      "Machine polishing to eliminate swirl marks and minor scratches",
      "Paint correction for deeper imperfections",
      "Application of premium carnauba wax or synthetic sealant",
      "Wheel cleaning and tire dressing",
      "Trim restoration and protection",
      "Glass cleaning and treatment"
    ],
    steps: [
      "Initial high-pressure rinse to remove loose dirt",
      "Hand washing with microfiber wash mitts and pH-neutral shampoo",
      "Decontamination with iron remover and clay bar treatment",
      "Surface inspection and assessment of paint condition",
      "Machine polishing with compound or polish as needed",
      "Second polishing step with finer polish if required",
      "Panel wipe to remove any residue",
      "Application of protective wax, sealant, or coating",
      "Wheel cleaning, tire dressing, and trim restoration",
      "Final inspection and touch-ups"
    ],
    benefits: [
      "Restores showroom shine and gloss",
      "Removes surface contaminants and embedded particles",
      "Eliminates swirl marks and minor scratches",
      "Provides protection against environmental contaminants",
      "Enhances vehicle appearance and maintains value",
      "Creates a hydrophobic surface that repels water and dirt"
    ]
  },
  "interior-detailing": {
    title: "Interior Detailing",
    description: "Deep cleaning of all interior surfaces, fabric/leather treatment, and sanitization.",
    longDescription: `
      Our interior detailing service transforms your vehicle's cabin into a clean, fresh, and sanitized
      environment. We address every surface and component, from carpets and upholstery to the smallest
      vents and crevices.
      
      Using specialized tools, equipment, and products, our technicians thoroughly clean, condition, and
      protect all interior surfaces while paying careful attention to material-specific requirements.
      The result is a rejuvenated interior that looks, feels, and smells like new.
    `,
    price: "Starting at ₹2,499",
    image: "https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=1964&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1583916057530-02fda0705797?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1583916057587-cfe5cc0fea85?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Deep vacuum cleaning of all carpets, seats, and mats",
      "Thorough cleaning of dashboard, console, and trim",
      "Leather cleaning and conditioning treatment",
      "Fabric upholstery shampooing and extraction",
      "Complete air vent and crevice cleaning",
      "Glass interior cleaning and anti-fog treatment",
      "Odor elimination and sanitization",
      "UV protection for interior surfaces"
    ],
    steps: [
      "Remove all personal items and floor mats",
      "Thorough vacuuming of all surfaces including seat crevices and trunk",
      "Clean and condition leather surfaces with appropriate products",
      "Shampoo fabric upholstery and extract dirt and stains",
      "Clean all hard surfaces with appropriate products for each material",
      "Detail air vents, switches, buttons, and small components",
      "Clean and treat door jambs and thresholds",
      "Apply UV protectant to prevent fading and cracking",
      "Clean all interior glass and mirrors",
      "Steam cleaning for stubborn stains and sanitization",
      "Deodorizing treatment and final inspection"
    ],
    benefits: [
      "Creates a cleaner, healthier vehicle environment",
      "Removes allergens, bacteria, and odor-causing agents",
      "Prevents premature wear and deterioration of interior materials",
      "Enhances driving comfort and experience",
      "Preserves the value of your vehicle",
      "Identifies and addresses hidden issues before they worsen"
    ]
  },
  "ceramic-coating": {
    title: "Ceramic Coating",
    description: "Long-lasting protection with advanced nanoceramic technology.",
    longDescription: `
      Our ceramic coating service provides ultimate protection for your vehicle's paint with advanced
      nano-ceramic technology. This semi-permanent coating creates a chemical bond with your vehicle's
      factory paint, resulting in a layer of protection that lasts for years, not months.
      
      The hydrophobic properties repel water, dirt, and contaminants, making your vehicle easier to
      clean while maintaining its showroom shine. The coating also provides exceptional resistance to
      UV rays, oxidation, chemical stains, and light scratches.
    `,
    price: "Starting at ₹15,999",
    image: "https://images.unsplash.com/photo-1619642340116-bade7c2b2309?q=80&w=1974&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1617814076169-2c8a354d6b86?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Advanced Nano-Ceramic Formula",
      "9H Hardness Rating",
      "5-Year Warranty",
      "Hydrophobic Properties",
      "UV Resistance",
      "Chemical Stain Protection",
      "Enhanced Gloss Finish",
      "Simplified Maintenance"
    ],
    steps: [
      "Initial decontamination wash",
      "Clay bar treatment to remove embedded contaminants",
      "Paint correction to eliminate swirl marks and imperfections",
      "Surface preparation with alcohol solution",
      "Application of ceramic coating in controlled environment",
      "Curing period with specific temperature and humidity control",
      "Inspection and quality assurance checks",
      "Final buff and detail"
    ],
    benefits: [
      "Long-lasting protection (up to 5 years)",
      "Enhanced paint depth and gloss",
      "Superior hydrophobic properties for easy cleaning",
      "Protection from environmental contaminants",
      "Resistance to chemical stains and etching",
      "Reduced maintenance time and costs",
      "Preserved resale value"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState<any>(null);
  const [showBooking, setShowBooking] = useState(false);
  
  useEffect(() => {
    if (serviceId && serviceData[serviceId as keyof typeof serviceData]) {
      setService(serviceData[serviceId as keyof typeof serviceData]);
    }
  }, [serviceId]);
  
  if (!service) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="mb-8">Sorry, the service you're looking for doesn't exist or has been moved.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedServices = Object.entries(serviceData)
    .filter(([id]) => id !== serviceId)
    .slice(0, 3)
    .map(([id, data]) => ({
      id,
      title: data.title,
      price: data.price,
      image: data.image,
    }));
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-6 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ServiceHero 
                title={service.title}
                description={service.description}
                image={service.image}
              />
              
              <ServiceOverview 
                description={service.longDescription}
                features={service.features}
                beforeImage={service.beforeImage}
                afterImage={service.afterImage}
              />
              
              <ServiceProcess 
                title={service.title}
                steps={service.steps}
              />
              
              <ServiceBenefits 
                benefits={service.benefits}
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
      </main>
      <Footer />
      <PageUtilities />
      
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-[600px]">
          <BookingForm selectedService={service.title} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceDetail;
