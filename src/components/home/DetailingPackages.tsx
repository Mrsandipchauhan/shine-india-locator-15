
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const DetailingPackages = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Detailing Package</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select from our carefully curated detailing packages, each designed to restore and protect your vehicle's appearance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Essential Package */}
          <Card className="group relative overflow-hidden border border-primary/20 hover:border-white/50 transition-all duration-300 bg-card p-6 rounded-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary/20"></div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Essential Care</h3>
              <div className="text-3xl font-bold mb-2">₹2,999</div>
              <p className="text-sm text-muted-foreground">Perfect for regular maintenance</p>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                "Exterior Hand Wash",
                "Wheel Cleaning",
                "Windows & Mirrors",
                "Tire Dressing",
                "Interior Vacuum"
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300">
              Select Package
            </Button>
          </Card>

          {/* Premium Package */}
          <Card className="group relative overflow-hidden border border-primary/20 hover:border-white/50 transition-all duration-300 bg-card p-6 rounded-xl transform hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-primary/40"></div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                Popular
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Premium Care</h3>
              <div className="text-3xl font-bold mb-2">₹4,999</div>
              <p className="text-sm text-muted-foreground">Complete interior & exterior care</p>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                "Everything in Essential",
                "Interior Deep Clean",
                "Leather Treatment",
                "Paint Decontamination",
                "Hand Wax Application",
                "Engine Bay Cleaning"
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-primary hover:bg-primary/90">
              Select Package
            </Button>
          </Card>

          {/* Ultimate Package */}
          <Card className="group relative overflow-hidden border border-primary/20 hover:border-white/50 transition-all duration-300 bg-card p-6 rounded-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary/20"></div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Ultimate Care</h3>
              <div className="text-3xl font-bold mb-2">₹7,999</div>
              <p className="text-sm text-muted-foreground">Professional grade detailing</p>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                "Everything in Premium",
                "Paint Correction",
                "Ceramic Coating",
                "Headlight Restoration",
                "Premium Sealant",
                "Interior Sanitization",
                "1 Year Protection"
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300">
              Select Package
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DetailingPackages;
