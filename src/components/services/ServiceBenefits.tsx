
import { Card, CardContent } from "@/components/ui/card";

interface ServiceBenefitsProps {
  benefits: string[];
}

const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Benefits</h2>
        <p className="text-muted-foreground mb-6">
          Here's why our customers choose our professional service:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card/50 p-4 rounded-lg border border-border">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceBenefits;
