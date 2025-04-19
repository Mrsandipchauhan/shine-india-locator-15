
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Package } from "lucide-react";
import { useGlobalPricing } from "@/hooks/use-global-pricing";
import BookingForm from "@/components/BookingForm";

const DetailingPackages = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const { currency, convertPrice, formatPrice } = useGlobalPricing();

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    setShowBooking(true);
  };

  const packages = [
    {
      title: "Essential Care",
      basePrice: 2999,
      description: "Perfect for regular maintenance",
      features: [
        "Exterior Hand Wash",
        "Wheel Cleaning",
        "Windows & Mirrors",
        "Tire Dressing",
        "Interior Vacuum"
      ]
    },
    {
      title: "Premium Care",
      basePrice: 4999,
      description: "Complete interior & exterior care",
      features: [
        "Everything in Essential",
        "Interior Deep Clean",
        "Leather Treatment",
        "Paint Decontamination",
        "Hand Wax Application",
        "Engine Bay Cleaning"
      ],
      popular: true
    },
    {
      title: "Ultimate Care",
      basePrice: 7999,
      description: "Professional grade detailing",
      features: [
        "Everything in Premium",
        "Paint Correction",
        "Ceramic Coating",
        "Headlight Restoration",
        "Premium Sealant",
        "Interior Sanitization",
        "1 Year Protection"
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Transform Your Car Today</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect detailing package that suits your needs and budget. Professional service guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border transition-all duration-300 bg-card hover:shadow-xl
                ${pkg.title === selectedPackage 
                  ? 'ring-2 ring-primary scale-105 shadow-lg' 
                  : 'hover:border-primary/50'
                }
                ${pkg.popular ? 'md:scale-105' : ''}
              `}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/20"></div>
              
              {pkg.popular && (
                <div className="absolute -right-12 top-6 transform rotate-45 bg-primary px-12 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
              )}
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="mx-auto w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <div className="text-3xl font-bold mb-2">
                    {formatPrice(convertPrice(pkg.basePrice))}
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="w-5 h-5 text-primary mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full transition-all duration-300 ${
                    pkg.title === selectedPackage
                      ? 'bg-primary hover:bg-primary/90'
                      : 'bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground'
                  }`}
                  onClick={() => handlePackageSelect(pkg.title)}
                >
                  {pkg.title === selectedPackage ? 'Selected Package' : 'Select Package'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-[600px]">
          <BookingForm 
            selectedService={selectedPackage} 
            isQuoteForm={false}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DetailingPackages;
