
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Essential",
    price: "₹2,999",
    description: "Basic detailing package for regular maintenance",
    features: [
      "Exterior Hand Wash",
      "Interior Vacuum",
      "Dashboard & Console Cleaning",
      "Tire & Rim Cleaning",
      "Windows & Mirrors",
      "Basic Wax Protection"
    ]
  },
  {
    name: "Premium",
    price: "₹5,999",
    description: "Advanced detailing for superior results",
    features: [
      "Everything in Essential",
      "Clay Bar Treatment",
      "Paint Decontamination",
      "Leather Treatment",
      "Engine Bay Cleaning",
      "Premium Wax Application",
      "Headlight Restoration"
    ]
  },
  {
    name: "Ultimate",
    price: "₹9,999",
    description: "Complete transformation with lasting protection",
    features: [
      "Everything in Premium",
      "Paint Correction",
      "Ceramic Coating",
      "Interior Deep Clean",
      "Fabric Protection",
      "Paint Sealant",
      "12-Month Warranty"
    ]
  }
];

const PricingPackages = () => {
  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Detailing Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated detailing packages designed to meet every need and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={pkg.name} className={`relative overflow-hidden ${index === 1 ? 'border-primary' : ''}`}>
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Check size={16} className="text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
