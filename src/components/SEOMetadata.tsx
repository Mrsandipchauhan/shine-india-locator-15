
import { useEffect } from 'react';

interface SEOMetadataProps {
  city: string;
  type?: 'area' | 'service';
}

const SEOMetadata = ({ city, type = 'area' }: SEOMetadataProps) => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const keywords = document.querySelector('meta[name="keywords"]');
    
    const lsiKeywords = [
      'car detailing services',
      'auto detailing',
      'professional car cleaning',
      'car wash services',
      'vehicle detailing',
      'car care services',
      'automotive detailing',
      'car polish',
      'car wax',
      'interior car cleaning',
      'exterior car cleaning',
      'mobile car detailing',
      'ceramic coating',
      'paint protection',
      'car maintenance',
      `${city} car services`,
      `car detailing in ${city}`,
      `best car detailing ${city}`,
      `professional car cleaning ${city}`,
      `${city} auto care`,
      `${city} car wash`
    ].join(', ');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Professional car detailing services in ${city}. Expert auto detailing, ceramic coating, paint protection, and interior cleaning services. Mobile car detailing available. Top-rated car care in ${city}.`
      );
    }
    
    if (keywords) {
      keywords.setAttribute('content', lsiKeywords);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'keywords');
      meta.setAttribute('content', lsiKeywords);
      document.head.appendChild(meta);
    }
  }, [city, type]);
  
  return null;
};

export default SEOMetadata;
