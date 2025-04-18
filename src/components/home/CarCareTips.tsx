
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CarCareTips = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Expert Car Care Tips</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Keep your vehicle looking its best between professional detailing sessions with these helpful tips from our experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560253414-f65d1f5a1b0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Daily Car Maintenance" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Daily Maintenance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Park in shaded areas to prevent sun damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Remove bird droppings promptly to prevent paint damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Use a microfiber cloth for quick dust removal</span>
                </li>
              </ul>
              <Link to="/services" className="text-primary font-medium inline-block mt-4 hover:underline">
                Learn more
              </Link>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=2148&auto=format&fit=crop" 
                alt="Interior Care" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Interior Care</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Vacuum interior weekly to prevent dirt buildup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Use proper leather cleaners for leather upholstery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Keep a small trash container to reduce clutter</span>
                </li>
              </ul>
              <Link to="/services" className="text-primary font-medium inline-block mt-4 hover:underline">
                Learn more
              </Link>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1599937861537-d91e28c65a38?q=80&w=2070&auto=format&fit=crop" 
                alt="Washing Tips" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Washing Tips</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Use the two-bucket method to prevent scratches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Wash in the shade, not direct sunlight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Use automotive-specific cleaning products</span>
                </li>
              </ul>
              <Link to="/services" className="text-primary font-medium inline-block mt-4 hover:underline">
                Learn more
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-10">
          <Link to="/services">
            <Button size="lg">View All Car Care Tips</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarCareTips;
