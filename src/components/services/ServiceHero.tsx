
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

const ServiceHero = ({ title, description, image }: ServiceHeroProps) => {
  return (
    <>
      <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6">
        <ChevronLeft className="mr-1 h-4 w-4" /> Back to Services
      </Link>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
      <p className="text-xl text-muted-foreground mb-6">{description}</p>
      
      <Card className="mb-8 overflow-hidden">
        <CardContent className="p-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </CardContent>
      </Card>
    </>
  );
};

export default ServiceHero;
