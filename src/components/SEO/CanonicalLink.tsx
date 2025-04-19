
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface CanonicalLinkProps {
  url?: string;
}

/**
 * Component for adding canonical links to pages
 * This helps prevent duplicate content issues by specifying the "official" URL
 */
const CanonicalLink = ({ url }: CanonicalLinkProps) => {
  const location = useLocation();
  
  // Base URL for the site
  const baseUrl = 'https://shinedetailers.in';
  
  // If custom URL is provided, use it, otherwise use current path
  const canonicalUrl = url ? `${baseUrl}${url}` : `${baseUrl}${location.pathname}`;
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalLink;
