
import { useEffect, useRef } from "react";

interface GoogleMapEmbedProps {
  address: string;
  city: string;
  height?: string;
  width?: string;
  zoom?: number;
}

const GoogleMapEmbed = ({
  address,
  city,
  height = "300px",
  width = "100%",
  zoom = 14
}: GoogleMapEmbedProps) => {
  // Create a sanitized query for the Google Maps embed
  const location = encodeURIComponent(`${address ? address + ', ' : ''}${city}, India`);
  
  // Construct a free Google Maps embed URL that doesn't require API key
  const mapUrl = `https://maps.google.com/maps?q=${location}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
  
  return (
    <div className="w-full rounded-lg overflow-hidden border border-border">
      <iframe
        title={`Map of ${address} in ${city}`}
        width={width}
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        src={mapUrl}
        allowFullScreen
        className="w-full"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
