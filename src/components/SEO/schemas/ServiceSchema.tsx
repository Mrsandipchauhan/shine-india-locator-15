
import React from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  area?: string;
  price?: {
    amount: number;
    currency: string;
  };
}

const ServiceSchema = ({
  name,
  description,
  provider = "ShineDetailers",
  area = "India",
  price
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider
    },
    "areaServed": area,
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price.amount,
        "priceCurrency": price.currency
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;
