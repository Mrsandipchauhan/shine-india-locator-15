
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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Create a sanitized query for the Google Maps embed
  const query = encodeURIComponent(`${address}, ${city}, India`);
  
  // Construct the Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBgylnQzeB3R-qxij4A2uAbnD1_UMLkU5Q&q=${query}&zoom=${zoom}`;
  
  return (
    <div className="w-full rounded-lg overflow-hidden border border-border">
      <iframe
        ref={iframeRef}
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
