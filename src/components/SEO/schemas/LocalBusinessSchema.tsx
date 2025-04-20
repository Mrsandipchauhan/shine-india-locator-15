
import React from 'react';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  address?: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
}

const LocalBusinessSchema = ({
  name = "ShineDetailers",
  description = "Premium car detailing services across India",
  telephone = "+91-800-123-4567",
  address = {
    street: "#123, MG Road",
    locality: "Bangalore",
    region: "Karnataka",
    postalCode: "560001",
    country: "IN"
  }
}: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "@id": "https://shinedetailers.in",
    "url": "https://shinedetailers.in",
    "telephone": telephone,
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.locality,
      "addressRegion": address.region,
      "postalCode": address.postalCode,
      "addressCountry": address.country
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
