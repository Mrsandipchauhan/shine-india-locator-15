
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOMetadataOptions {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const useSEOMetadata = ({
  title,
  description,
  keywords,
  ogImage = 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200&auto=format&fit=crop',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}: SEOMetadataOptions) => {
  const location = useLocation();
  const baseUrl = 'https://shinedetailers.in';
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:image', ogImage, 'property');

    // Update Twitter Card tags
    updateMetaTag('twitter:card', twitterCard, 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');

    // Update canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

  }, [title, description, keywords, ogImage, ogType, twitterCard, canonicalUrl]);
};

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default useSEOMetadata;
