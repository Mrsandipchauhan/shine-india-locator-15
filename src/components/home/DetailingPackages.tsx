import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Star } from "lucide-react";

const DetailingPackages = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Detailing Packages</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of comprehensive detailing packages tailored to meet your vehicle's specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          <Card className="border-border hover:border-primary transition-all relative">
            <div className="absolute top-0 right-0 bg-muted text-foreground px-3 py-1 text-sm font-medium rounded-bl-lg">
              Popular
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Essential Package</h3>
              <div className="text-3xl font-bold mb-6">₹4,999 <span className="text-sm font-normal text-muted-foreground">onwards</span></div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Shield size={16} className="text-primary mr-2 mt-1" />
                  <span>Exterior hand wash and dry</span>
                </li>
                <li className="flex items-start">
                  <Shield size={16} className="text-primary mr-2 mt-1" />
                  <span>Interior vacuum and wipe down</span>
                </li>
                <li className="flex items-start">
                  <Shield size={16} className="text-primary mr-2 mt-1" />
                  <span>Tire and wheel cleaning</span>
                </li>
                <li className="flex items-start">
                  <Shield size={16} className="text-primary mr-2 mt-1" />
                  <span>Dashboard and console polish</span>
                </li>
                <li className="flex items-start">
                  <Shield size={16} className="text-primary mr-2 mt-1" />
                  <span>Window cleaning</span>
                </li>
              </ul>
              
              <Link to="/services">
                <Button className="w-full">Select Package</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border-primary shadow-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm font-bold rounded-full">
              Best Value
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Premium Package</h3>
              <div className="text-3xl font-bold mb-6">₹9,999 <span className="text-sm font-normal text-muted-foreground">onwards</span></div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Award size={16} className="text-primary mr-2 mt-1" />
                  <span>Everything in Essential Package</span>
                </li>
                <li className="flex items-start">
                  <Award size={16} className="text-primary mr-2 mt-1" />
                  <span>Paint decontamination and clay bar</span>
                </li>
                <li className="flex items-start">
                  <Award size={16} className="text-primary mr-2 mt-1" />
                  <span>Single-stage polish</span>
                </li>
                <li className="flex items-start">
                  <Award size={16} className="text-primary mr-2 mt-1" />
                  <span>Premium wax protection</span>
                </li>
                <li className="flex items-start">
                  <Award size={16} className="text-primary mr-2 mt-1" />
                  <span>Leather conditioning</span>
                </li>
                <li className="flex items-start">
                  <Award size={16} className="text-primary mr-2 mt-1" />
                  <span>Engine bay cleaning</span>
                </li>
              </ul>
              
              <Link to="/services">
                <Button className="w-full bg-primary hover:bg-primary/90">Select Package</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border-primary hover:border-primary transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Ultimate Package</h3>
              <div className="text-3xl font-bold mb-6">₹19,999 <span className="text-sm font-normal text-muted-foreground">onwards</span></div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Star size={16} className="text-primary mr-2 mt-1" />
                  <span>Everything in Premium Package</span>
                </li>
                <li className="flex items-start">
                  <Star size={16} className="text-primary mr-2 mt-1" />
                  <span>Multi-stage paint correction</span>
                </li>
                <li className="flex items-start">
                  <Star size={16} className="text-primary mr-2 mt-1" />
                  <span>Ceramic coating application</span>
                </li>
                <li className="flex items-start">
                  <Star size={16} className="text-primary mr-2 mt-1" />
                  <span>Interior steam cleaning</span>
                </li>
                <li className="flex items-start">
                  <Star size={16} className="text-primary mr-2 mt-1" />
                  <span>Glass coating treatment</span>
                </li>
                <li className="flex items-start">
                  <Star size={16} className="text-primary mr-2 mt-1" />
                  <span>12-month protection guarantee</span>
                </li>
              </ul>
              
              <Link to="/services">
                <Button className="w-full bg-primary hover:bg-primary/90">Select Package</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-10 bg-muted p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-3">Need a Custom Package?</h3>
          <p className="text-muted-foreground mb-4">
            We can create customized detailing solutions tailored to your specific vehicle needs and budget.
          </p>
          <Link to="/contact">
            <Button variant="outline">Contact Us for Custom Quote</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DetailingPackages;
