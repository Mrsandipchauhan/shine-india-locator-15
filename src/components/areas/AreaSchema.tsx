
import { LocalArea } from "@/data/types";

interface AreaSchemaProps {
  area: LocalArea;
}

const AreaSchema = ({ area }: AreaSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": `ShineDetailers Car Detailing - ${area.name}`,
    "description": area.description,
    "image": `https://source.unsplash.com/featured/?${area.name},car&auto=format&w=500`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": area.address,
      "addressLocality": area.name,
      "addressRegion": area.parentCity,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": area.coordinates.lat,
      "longitude": area.coordinates.lng
    },
    "telephone": area.phoneNumber,
    "priceRange": "₹₹₹",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": area.coordinates.lat,
        "longitude": area.coordinates.lng
      },
      "geoRadius": "10000"
    },
    "areaServed": area.content.serviceAreas.map(serviceArea => ({
      "@type": "City",
      "name": serviceArea
    })),
    "openingHoursSpecification": {
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default AreaSchema;
