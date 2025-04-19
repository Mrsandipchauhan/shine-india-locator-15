
interface AreaSchemaProps {
  area: {
    name: string;
    parentCity: string;
    phoneNumber: string;
    address: string;
    description: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

const AreaSchema = ({ area }: AreaSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": `ShineDetailers Car Detailing - ${area.name}`,
    "description": area.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": area.address,
      "addressLocality": area.name,
      "addressRegion": area.parentCity
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
