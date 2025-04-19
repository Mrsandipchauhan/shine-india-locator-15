
import React, { ReactNode } from 'react';

/**
 * Enhanced heading components that maintain proper document outline
 * while allowing styled variations. This supports proper heading structure
 * for SEO while maintaining design flexibility.
 */

interface HeadingProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const H1 = ({ children, className = '', id }: HeadingProps) => (
  <h1 id={id} className={`text-3xl md:text-4xl font-bold ${className}`}>{children}</h1>
);

export const H2 = ({ children, className = '', id }: HeadingProps) => (
  <h2 id={id} className={`text-2xl md:text-3xl font-bold ${className}`}>{children}</h2>
);

export const H3 = ({ children, className = '', id }: HeadingProps) => (
  <h3 id={id} className={`text-xl md:text-2xl font-semibold ${className}`}>{children}</h3>
);

export const H4 = ({ children, className = '', id }: HeadingProps) => (
  <h4 id={id} className={`text-lg md:text-xl font-semibold ${className}`}>{children}</h4>
);

export const H5 = ({ children, className = '', id }: HeadingProps) => (
  <h5 id={id} className={`text-base md:text-lg font-medium ${className}`}>{children}</h5>
);

export const H6 = ({ children, className = '', id }: HeadingProps) => (
  <h6 id={id} className={`text-sm md:text-base font-medium ${className}`}>{children}</h6>
);

/**
 * Visual headings that don't impact the document outline but can be styled like headings
 */
export const VisualHeading = ({ 
  as: Component = 'div',
  visualLevel = 2,
  children, 
  className = '', 
  id 
}: HeadingProps & { 
  as?: React.ElementType; 
  visualLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}) => {
  let visualClass = '';
  
  switch (visualLevel) {
    case 1:
      visualClass = 'text-3xl md:text-4xl font-bold';
      break;
    case 2:
      visualClass = 'text-2xl md:text-3xl font-bold';
      break;
    case 3:
      visualClass = 'text-xl md:text-2xl font-semibold';
      break;
    case 4:
      visualClass = 'text-lg md:text-xl font-semibold';
      break;
    case 5:
      visualClass = 'text-base md:text-lg font-medium';
      break;
    case 6:
      visualClass = 'text-sm md:text-base font-medium';
      break;
  }
  
  return (
    <Component id={id} className={`${visualClass} ${className}`} aria-hidden="true">
      {children}
    </Component>
  );
};

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  VisualHeading
};
