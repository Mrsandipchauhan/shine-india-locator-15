
import React from 'react';
import { useLocation } from 'react-router-dom';
import MetaTags from './MetaTags';
import LocalBusinessSchema from './schemas/LocalBusinessSchema';
import ServiceSchema from './schemas/ServiceSchema';
import FAQSchema from './schemas/FAQSchema';
import BreadcrumbSchema from './schemas/BreadcrumbSchema';
import ReviewSchema from './schemas/ReviewSchema';
import PerformanceOptimizer from './PerformanceOptimizer';

const SEOManager = () => {
  const location = useLocation();
  
  // Generate breadcrumb items based on current path
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    return pathSegments.map((segment, index) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      item: '/' + pathSegments.slice(0, index + 1).join('/')
    }));
  };

  return (
    <>
      {/* Meta Tags */}
      <MetaTags 
        title="ShineDetailers - Premium Car Detailing Services"
        description="Professional car detailing services across India. Expert exterior and interior detailing, ceramic coating, and paint protection."
        canonicalUrl={`https://shinedetailers.in${location.pathname}`}
      />
      
      {/* Schema Markup */}
      <LocalBusinessSchema />
      
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={getBreadcrumbItems()} />
      
      {/* Performance Optimization */}
      <PerformanceOptimizer />
    </>
  );
};

export default SEOManager;
