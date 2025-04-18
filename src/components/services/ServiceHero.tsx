
import { Card, CardContent } from "@/components/ui/card";

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

const ServiceHero = ({ title, description, image }: ServiceHeroProps) => {
  return (
    <div 
      className="mb-8"
      itemScope 
      itemType="https://schema.org/Service"
    >
      <h1 
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
        itemProp="name"
      >
        {title}
      </h1>
      
      <p 
        className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-center"
        itemProp="description"
      >
        {description}
      </p>
      
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <img 
            src={image} 
            alt={`Professional ${title} service`}
            className="w-full h-64 md:h-96 object-cover"
            itemProp="image"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceHero;
