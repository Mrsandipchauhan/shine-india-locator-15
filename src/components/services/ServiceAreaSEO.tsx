import { useEffect } from 'react';
import { serviceAreaContent } from '@/data/serviceAreaContent';

interface ServiceAreaSEOProps {
  areaId: string;
  serviceId: string;
  country?: string;
}

const ServiceAreaSEO = ({ areaId, serviceId, country }: ServiceAreaSEOProps) => {
  useEffect(() => {
    const content = serviceAreaContent[areaId]?.[serviceId];
    if (!content) return;

    // Update meta title
    document.title = content.meta.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', content.meta.description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.setAttribute('name', 'description');
      newMetaDescription.setAttribute('content', content.meta.description);
      document.head.appendChild(newMetaDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', content.meta.keywords.join(', '));
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.setAttribute('name', 'keywords');
      newMetaKeywords.setAttribute('content', content.meta.keywords.join(', '));
      document.head.appendChild(newMetaKeywords);
    }

    // Add schema markup
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": content.meta.title,
      "description": content.meta.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": "ShineDetailers",
        "image": "https://shinedetailers.in/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": areaId.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')
        }
      },
      "areaServed": {
        "@type": "City",
        "name": areaId.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Car Detailing Services",
        "itemListElement": content.localBenefits.map((benefit, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": benefit
          }
        }))
      }
    };
    schemaScript.innerHTML = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    return () => {
      // Cleanup schema script on unmount
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, [areaId, serviceId]);

  return null;
};

export default ServiceAreaSEO;
