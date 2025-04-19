
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useSEO({ 
  title = '', 
  description = '', 
  image = '',
  type = 'website'
}: {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}) {
  const location = useLocation();
  const baseUrl = 'https://shinedetailers.in';
  const url = `${baseUrl}${location.pathname}`;
  
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', url);
    updateMetaTag('property', 'og:type', type);
    if (image) {
      updateMetaTag('property', 'og:image', image);
    }
    
    // Update Twitter tags
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:url', url);
    if (image) {
      updateMetaTag('name', 'twitter:image', image);
    }
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);
    
  }, [title, description, image, type, url]);
  
  function updateMetaTag(attribute: string, name: string, content?: string) {
    if (!content) return;
    
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  }
  
  // No UI to render
  return null;
}
