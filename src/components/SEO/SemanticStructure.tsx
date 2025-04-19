
import { ReactNode } from 'react';

interface SemanticSectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
  ariaLabel?: string;
}

export const MainContent = ({ children, className = '' }: SemanticSectionProps) => (
  <main className={`main-content ${className}`} role="main">
    {children}
  </main>
);

export const Section = ({ 
  children, 
  title, 
  className = '',
  ariaLabel 
}: SemanticSectionProps) => (
  <section 
    className={`section ${className}`}
    aria-label={ariaLabel || title}
  >
    {title && <h2 className="section-title">{title}</h2>}
    {children}
  </section>
);

export const Article = ({ children, className = '' }: SemanticSectionProps) => (
  <article className={`article ${className}`}>
    {children}
  </article>
);

export const Aside = ({ children, className = '' }: SemanticSectionProps) => (
  <aside className={`aside ${className}`} role="complementary">
    {children}
  </aside>
);

export default {
  MainContent,
  Section,
  Article,
  Aside
};
