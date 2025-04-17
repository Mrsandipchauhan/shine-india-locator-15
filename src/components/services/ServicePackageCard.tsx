
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { ServicePackage } from "@/data/servicesData";

interface ServicePackageCardProps {
  packageData: ServicePackage;
  onBookNow: (packageTitle: string) => void;
}

const ServicePackageCard = ({ packageData, onBookNow }: ServicePackageCardProps) => {
  const { title, description, price, features, featured } = packageData;
  
  return (
    <Card className={`border-border overflow-hidden ${featured ? 'ring-2 ring-primary shadow-lg' : ''}`}>
      {featured && (
        <div className="bg-primary text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <p className="text-3xl font-bold text-primary mb-6">{price}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                <ShieldCheck size={16} className="text-primary" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${featured ? 'bg-primary hover:bg-primary/90' : 'bg-card hover:bg-card/90'}`}
          variant={featured ? "default" : "outline"}
          onClick={() => onBookNow(title)}
        >
          Book This Package
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServicePackageCard;
