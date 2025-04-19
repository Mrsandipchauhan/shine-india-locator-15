
interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  provider?: string;
  areaServed?: string;
  image?: string;
  price?: string;
  priceCurrency?: string;
}

const ServiceSchema = ({
  serviceName,
  description,
  provider = "ShineDetailers",
  areaServed = "India",
  image = "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200&auto=format&fit=crop",
  price,
  priceCurrency = "INR"
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider,
      "image": image
    },
    "areaServed": {
      "@type": "Country",
      "name": areaServed
    },
    "serviceType": "Car Detailing",
    "category": "Automotive Services"
  };

  // Add offers only if price is available
  if (price) {
    Object.assign(schema, {
      "offers": {
        "@type": "Offer",
        "price": price.replace(/[^0-9]/g, ''),
        "priceCurrency": priceCurrency
      }
    });
  }

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;
