
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, ThumbsUp, Clock, Sparkle, Wrench } from "lucide-react";

const reasons = [
  {
    title: "Premium Products",
    description: "We use only the highest quality detailing products that are safe for your vehicle and the environment.",
    icon: <Sparkle className="w-10 h-10 text-primary" />
  },
  {
    title: "Certified Technicians",
    description: "Our detailing specialists undergo rigorous training and certification to ensure expert service.",
    icon: <Award className="w-10 h-10 text-primary" />
  },
  {
    title: "Satisfaction Guarantee",
    description: "Your satisfaction is our priority. If you're not completely happy, we'll make it right.",
    icon: <ThumbsUp className="w-10 h-10 text-primary" />
  },
  {
    title: "Quick Turnaround",
    description: "We value your time and work efficiently to return your vehicle as quickly as possible.",
    icon: <Clock className="w-10 h-10 text-primary" />
  },
  {
    title: "Advanced Equipment",
    description: "Our state-of-the-art equipment ensures precise and thorough detailing for best results.",
    icon: <Wrench className="w-10 h-10 text-primary" />
  },
  {
    title: "Warranty Protection",
    description: "Our ceramic coating and paint protection services come with warranty for your peace of mind.",
    icon: <Shield className="w-10 h-10 text-primary" />
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose ShineDetailers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over a decade of experience in premium car detailing, we've built a reputation for excellence 
            through our commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-primary/10 p-4 rounded-full">{reason.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
