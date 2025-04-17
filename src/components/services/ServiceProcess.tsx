
import { Card, CardContent } from "@/components/ui/card";

interface ServiceProcessProps {
  title: string;
  steps: string[];
}

const ServiceProcess = ({ title, steps }: ServiceProcessProps) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Our Process</h2>
        <p className="text-muted-foreground mb-6">
          Our {title} follows a meticulous multi-step process to ensure exceptional results:
        </p>
        <ol className="space-y-3 mb-6">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                {index + 1}
              </span>
              <span className="text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default ServiceProcess;
