
export const validateJsonLd = (data: Record<string, any>): string[] => {
  const errors: string[] = [];
  
  try {
    // Basic schema validation
    if (!data['@context'] || data['@context'] !== 'https://schema.org') {
      errors.push('Missing or invalid @context');
    }
    
    if (!data['@type']) {
      errors.push('Missing @type');
    }
    
    // Type-specific validation
    switch (data['@type']) {
      case 'LocalBusiness':
      case 'AutoRepair':
        if (!data.name) errors.push('LocalBusiness missing name');
        if (!data.address) errors.push('LocalBusiness missing address');
        break;
        
      case 'Service':
        if (!data.name) errors.push('Service missing name');
        if (!data.provider) errors.push('Service missing provider');
        break;
        
      case 'BreadcrumbList':
        if (!data.itemListElement?.length) {
          errors.push('BreadcrumbList missing items');
        }
        break;
    }
  } catch (error) {
    errors.push(`JSON-LD validation error: ${error}`);
  }
  
  return errors;
}
