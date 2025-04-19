import React from "react";
import { ServiceProvider } from "@/data/serviceProviders";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface LocalServiceProvidersProps {
  city: string;
  providers: ServiceProvider[];
  ctaText?: string;
}

const LocalServiceProviders = ({ city, providers, ctaText = "Enquire Now" }: LocalServiceProvidersProps) => {
  return (
    <div className="space-y-6">
      {providers.map((provider) => (
        <Card key={provider.id} className="p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h3 className="text-lg font-semibold">{provider.name}</h3>
              <p className="text-sm text-muted-foreground">{provider.address}</p>
              <p className="text-sm mt-1"><strong>Phone:</strong> <a href={`tel:${provider.phone}`} className="text-primary underline">{provider.phone}</a></p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button size="md" variant="primary" className="w-full sm:w-auto" onClick={() => window.location.href = `mailto:${provider.email}`}>
                {ctaText}
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default LocalServiceProviders;
