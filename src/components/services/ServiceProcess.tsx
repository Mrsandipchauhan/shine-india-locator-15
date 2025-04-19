
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ServiceProcessProps {
  title: string;
  steps: string[];
}

const ServiceProcess = ({ title, steps }: ServiceProcessProps) => {
  return (
    <section className="mt-24 mb-16 bg-card rounded-xl p-8 border border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="outline" className="mb-2">Our Process</Badge>
          <h2 className="text-3xl font-bold mb-4">How Our {title} Works</h2>
          <p className="text-lg text-muted-foreground mb-4">
            We follow a systematic approach to ensure exceptional results for every vehicle we service.
          </p>
          
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-2">Available in Popular Areas:</h3>
            <div className="flex flex-wrap gap-2">
              {["south-delhi", "mumbai-andheri", "bangalore-whitefield", "chennai-adyar"].map((areaId) => (
                <Link 
                  key={areaId} 
                  to={`/area/${areaId}/${title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {areaId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {index === 0 && "Inspection & Assessment"}
                    {index === 1 && "Pre-Treatment & Washing"}
                    {index === 2 && "Detailed Cleaning & Correction"}
                    {index === 3 && "Protection Application"}
                    {index === 4 && "Final Inspection & Delivery"}
                  </h3>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1635260537978-67eff8c97786?q=80&w=800&auto=format&fit=crop" 
              alt="Detailing process"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=800&auto=format&fit=crop" 
              alt="Detailing process"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1607856400955-ceefe9cdea49?q=80&w=800&auto=format&fit=crop" 
              alt="Detailing process"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=800&auto=format&fit=crop" 
              alt="Detailing process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
