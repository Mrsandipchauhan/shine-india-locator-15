
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, ExternalLink } from "lucide-react";

interface ServiceProvider {
  id: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  openHours: string;
  services: string[];
}

interface LocalServiceProvidersProps {
  city: string;
  providers: ServiceProvider[];
}

const LocalServiceProviders = ({ city, providers }: LocalServiceProvidersProps) => {
  if (!providers || providers.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          No service providers found in {city}. Please try another location.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Top Car Detailing Services in {city}</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {providers.map((provider) => (
          <Card key={provider.id} className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Rating sidebar */}
                <div className="md:col-span-2 bg-primary/10 p-4 flex flex-row md:flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{provider.rating}</div>
                    <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(provider.rating) ? "fill-primary text-primary" : "text-gray-500"}
                        />
                      ))}
                    </div>
                    <div className="text-xs mt-1 text-muted-foreground">Top Rated</div>
                  </div>
                </div>
                
                {/* Provider details */}
                <div className="md:col-span-10 p-4">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{provider.name}</h3>
                      
                      <div className="flex items-start mt-2 space-x-2">
                        <MapPin size={16} className="text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">{provider.address}</span>
                      </div>
                      
                      <div className="flex items-center mt-2 space-x-2">
                        <Phone size={16} className="text-primary" />
                        <a 
                          href={`tel:${provider.phone.replace(/\D/g, '')}`}
                          className="text-sm hover:text-primary transition-colors"
                        >
                          {provider.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center mt-2 space-x-2">
                        <Clock size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">{provider.openHours}</span>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {provider.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="bg-background/50">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex flex-col gap-2">
                      <a href={`tel:${provider.phone.replace(/\D/g, '')}`}>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          <Phone size={16} className="mr-2" /> Call Now
                        </Button>
                      </a>
                      <a href={`https://maps.google.com/?q=${encodeURIComponent(provider.address)}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full">
                          <ExternalLink size={16} className="mr-2" /> Directions
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LocalServiceProviders;
