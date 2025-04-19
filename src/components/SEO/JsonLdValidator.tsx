
import { useEffect } from 'react';

interface JsonLdValidatorProps {
  data: Record<string, any>;
}

/**
 * JsonLdValidator component validates JSON-LD data at runtime
 * and logs warnings for issues that could affect SEO
 */
const JsonLdValidator = ({ data }: JsonLdValidatorProps) => {
  useEffect(() => {
    // Basic validation for common schema.org requirements
    try {
      // Check for required @context
      if (!data['@context'] || data['@context'] !== 'https://schema.org') {
        console.warn('JSON-LD warning: Missing or invalid @context property. Should be "https://schema.org"');
      }
      
      // Check for @type
      if (!data['@type']) {
        console.warn('JSON-LD warning: Missing @type property');
      }
      
      // Common type-specific validations
      switch (data['@type']) {
        case 'LocalBusiness':
        case 'AutoRepair':
          if (!data.name) console.warn('JSON-LD warning: LocalBusiness missing name property');
          if (!data.address) console.warn('JSON-LD warning: LocalBusiness missing address property');
          break;
          
        case 'Service':
          if (!data.name) console.warn('JSON-LD warning: Service missing name property');
          if (!data.provider) console.warn('JSON-LD warning: Service missing provider property');
          break;
          
        case 'BreadcrumbList':
          if (!data.itemListElement || !Array.isArray(data.itemListElement)) {
            console.warn('JSON-LD warning: BreadcrumbList missing itemListElement array');
          } else {
            data.itemListElement.forEach((item: any, index: number) => {
              if (item['@type'] !== 'ListItem') {
                console.warn(`JSON-LD warning: BreadcrumbList item ${index} should have @type ListItem`);
              }
              if (!item.position) console.warn(`JSON-LD warning: BreadcrumbList item ${index} missing position`);
              if (!item.name) console.warn(`JSON-LD warning: BreadcrumbList item ${index} missing name`);
              if (!item.item) console.warn(`JSON-LD warning: BreadcrumbList item ${index} missing item`);
            });
          }
          break;
          
        case 'FAQPage':
          if (!data.mainEntity || !Array.isArray(data.mainEntity)) {
            console.warn('JSON-LD warning: FAQPage missing mainEntity array');
          } else {
            data.mainEntity.forEach((item: any, index: number) => {
              if (item['@type'] !== 'Question') {
                console.warn(`JSON-LD warning: FAQPage mainEntity ${index} should have @type Question`);
              }
              if (!item.name) console.warn(`JSON-LD warning: Question ${index} missing name property`);
              if (!item.acceptedAnswer) console.warn(`JSON-LD warning: Question ${index} missing acceptedAnswer property`);
            });
          }
          break;
      }
    } catch (error) {
      console.error('Error validating JSON-LD:', error);
    }
  }, [data]);

  return null;
};

export default JsonLdValidator;
