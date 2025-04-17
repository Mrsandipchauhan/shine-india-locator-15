
import { Check } from "lucide-react";

interface ServiceBenefitsProps {
  cityName: string;
}

const ServiceBenefits = ({ cityName }: ServiceBenefitsProps) => {
  return (
    <div className="p-6 bg-card rounded-lg border border-border">
      <h3 className="text-lg font-bold mb-3">Why Choose Our Services in {cityName}</h3>
      <ul className="space-y-3">
        <BenefitItem
          title="Local Expertise"
          description={`Our technicians understand ${cityName}'s specific environmental challenges.`}
        />
        <BenefitItem
          title="Premium Products"
          description="We use only the highest quality detailing products suitable for local conditions."
        />
        <BenefitItem
          title="Convenience"
          description={`Multiple service centers across ${cityName} with flexible scheduling options.`}
        />
        <BenefitItem
          title="Satisfaction Guarantee"
          description="If you're not completely satisfied, we'll make it right."
        />
      </ul>
    </div>
  );
};

const BenefitItem = ({ title, description }: { title: string; description: string }) => (
  <li className="flex items-start">
    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
      <Check className="w-4 h-4 text-primary" />
    </div>
    <p className="text-sm text-muted-foreground">
      <span className="font-medium text-foreground">{title}:</span> {description}
    </p>
  </li>
);

export default ServiceBenefits;
