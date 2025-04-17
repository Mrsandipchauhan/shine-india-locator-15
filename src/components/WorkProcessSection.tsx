
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Book Your Service",
    description: "Choose your preferred service, date, and time through our online booking system or by calling us directly.",
    icon: "📅"
  },
  {
    number: "02",
    title: "Vehicle Inspection",
    description: "Our expert technicians will carefully inspect your vehicle to assess its condition and specific needs.",
    icon: "🔍"
  },
  {
    number: "03",
    title: "Premium Detailing",
    description: "Using state-of-the-art equipment and high-quality products, we'll perform your selected detailing service.",
    icon: "✨"
  },
  {
    number: "04",
    title: "Final Inspection",
    description: "We conduct a thorough review to ensure every detail meets our high standards before delivery.",
    icon: "✓"
  }
];

const WorkProcessSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Detailing Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a systematic approach to ensure consistent, exceptional results for every vehicle.
            Our process has been refined over years of experience to deliver the best possible outcome.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border border-border">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-primary text-xl font-bold mb-1">{step.number}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
