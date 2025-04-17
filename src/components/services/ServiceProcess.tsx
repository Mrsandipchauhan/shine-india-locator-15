
import { Badge } from "@/components/ui/badge";

const ServiceProcess = () => {
  return (
    <section className="mt-24 mb-16 bg-card rounded-xl p-8 border border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="outline" className="mb-2">Our Process</Badge>
          <h2 className="text-3xl font-bold mb-4">How Our Detailing Works</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We follow a systematic approach to ensure exceptional results for every vehicle we service.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold">Inspection & Assessment</h3>
                <p className="text-muted-foreground">We carefully examine your vehicle to identify specific needs and create a tailored plan.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold">Pre-Treatment & Washing</h3>
                <p className="text-muted-foreground">Specialized pre-wash treatments and careful hand washing to safely remove contaminants.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold">Detailed Cleaning & Correction</h3>
                <p className="text-muted-foreground">Meticulous attention to every surface with specialized tools and techniques.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-4">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold">Protection Application</h3>
                <p className="text-muted-foreground">Premium protective products applied to preserve your vehicle's appearance.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-4">
                5
              </div>
              <div>
                <h3 className="text-lg font-semibold">Final Inspection & Delivery</h3>
                <p className="text-muted-foreground">Thorough quality check and walkthrough of completed work with maintenance tips.</p>
              </div>
            </div>
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
