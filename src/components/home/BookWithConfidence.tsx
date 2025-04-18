
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Shield, Star } from "lucide-react";

const BookWithConfidence = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Book With Confidence</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At ShineDetailers, we strive to make your booking experience as seamless as your detailing service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-muted-foreground">
                Choose a convenient date and time that fits your busy schedule
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Satisfaction Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                If you're not 100% satisfied, we'll make it right
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">
                Multiple payment options with secure processing
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Technicians</h3>
              <p className="text-sm text-muted-foreground">
                Serviced by certified and experienced professionals
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-10">
          <Link to="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookWithConfidence;
