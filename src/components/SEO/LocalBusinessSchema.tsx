
interface LocalBusinessSchemaProps {
  businessName?: string;
  city?: string;
  area?: string;
  services?: string[];
  image?: string;
  rating?: number;
  reviewCount?: number;
}

const LocalBusinessSchema = ({
  businessName = "ShineDetailers",
  city = "India",
  area,
  services = ["Car Detailing", "Ceramic Coating", "Paint Protection", "Interior Detailing"],
  image = "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200&auto=format&fit=crop",
  rating = 4.8,
  reviewCount = 250
}: LocalBusinessSchemaProps) => {
  const location = area ? `${area}, ${city}` : city;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": `${businessName} - ${location}`,
    "description": `Professional car detailing services in ${location}. We provide exterior detailing, interior cleaning, ceramic coating, and paint protection services.`,
    "image": image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": area || city,
      "addressRegion": city,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates"
    },
    "url": `https://shinedetailers.in/${area ? `area/${area.toLowerCase().replace(/\s+/g, '-')}` : `city/${city.toLowerCase().replace(/\s+/g, '-')}`}`,
    "telephone": "+918001234567",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Detailing Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      }))
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
