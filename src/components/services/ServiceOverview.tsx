
import { Card, CardContent } from "@/components/ui/card";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

interface ServiceOverviewProps {
  description: string;
  features: string[];
  beforeImage: string;
  afterImage: string;
}

const ServiceOverview = ({ description, features, beforeImage, afterImage }: ServiceOverviewProps) => {
  return (
    <>
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
          <p className="text-muted-foreground mb-6">{description}</p>
          
          <h3 className="text-xl font-semibold mb-3">What's Included</h3>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
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
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Before & After</h2>
          <p className="text-muted-foreground mb-6">
            Slide to see the dramatic transformation our service provides.
          </p>
          <BeforeAfterSlider 
            beforeImage={beforeImage} 
            afterImage={afterImage}
            beforeLabel="Before"
            afterLabel="After"
          />
        </CardContent>
      </Card>
    </>
  );
};

export default ServiceOverview;
