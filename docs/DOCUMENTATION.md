
# ShineDetailers Website Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Components Breakdown](#components-breakdown)
5. [SEO Implementation](#seo-implementation)
6. [Performance Optimization](#performance-optimization)
7. [Deployment Guide](#deployment-guide)

## 1. Project Overview

ShineDetailers is a car detailing service website built with React and TypeScript. The website offers:
- Location-based service discovery
- Online booking system
- Service package comparison
- SEO optimization
- Performance monitoring

## 2. Technology Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Type Safety**: TypeScript
- **Routing**: React Router DOM
- **State Management**: @tanstack/react-query
- **Form Handling**: react-hook-form
- **Data Visualization**: recharts
- **SEO**: react-helmet-async

## 3. Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── layouts/           # Layout components
├── hooks/             # Custom React hooks
├── data/             # Static data and types
├── utils/            # Utility functions
└── services/         # API services
```

## 4. Components Breakdown

### Core Components

#### Navigation
- `Navbar.tsx`: Main navigation component
  - Purpose: Site-wide navigation
  - Props: None
  - Usage: Imported in MainLayout

#### Layout Components
- `MainLayout.tsx`: Main layout wrapper
  ```typescript
  interface MainLayoutProps {
    children: React.ReactNode;
  }
  ```
  - Used in all main pages
  - Includes Navbar and Footer

#### SEO Components
Located in `src/components/SEO/`:
- `SEOManager.tsx`: Central SEO management
- `MetaTags.tsx`: Meta tag management
- `schemas/`: JSON-LD schema implementations

#### Service Components
- `ServiceArea.tsx`: Service area display
  ```typescript
  interface ServiceAreaProps {
    serviceId: string;
    areaName: string;
    cityName: string;
    serviceTitle: string;
  }
  ```

### Form Components
- `BookingForm.tsx`: Service booking form
  - Uses react-hook-form
  - Validates inputs
  - Handles submission

### Custom Hooks
Located in `src/hooks/`:
- `use-seo.tsx`: SEO management hook
- `use-seo-metadata.tsx`: Metadata management
- `use-toast.ts`: Toast notifications

## 5. SEO Implementation

### Meta Tags
```typescript
interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}
```

### Schema Markup
Available schemas:
- LocalBusiness
- Service
- FAQ
- BreadcrumbList
- Review

Example usage:
```typescript
<LocalBusinessSchema 
  name="ShineDetailers"
  city="Mumbai"
  services={["Car Detailing", "Ceramic Coating"]}
/>
```

## 6. Performance Optimization

### Image Optimization
- `LazyImage.tsx`: Lazy loading component
- `ImageOptimizer.tsx`: Image optimization

### Core Web Vitals
Monitored through `SEOOptimizer.tsx`:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

## 7. Deployment Guide

### Environment Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

### Build Process
```bash
npm run build
```

### Production Deployment
1. Build the project
2. Deploy the `dist` folder
3. Configure server settings
4. Set up environment variables

## 8. Code Examples

### Adding a New Service
```typescript
// In src/data/servicesData.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
}

// Add new service
const newService: Service = {
  id: "ceramic-coating",
  title: "Ceramic Coating",
  description: "Professional ceramic coating service",
  price: 15000
};
```

### Creating a New Page
```typescript
// src/pages/NewService.tsx
import { MainLayout } from '@/layouts';
import { SEOHead } from '@/components/SEO';

const NewService = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="New Service"
        description="Description for SEO"
      />
      {/* Page content */}
    </MainLayout>
  );
};
```

### Using Custom Hooks
```typescript
// Example using SEO hook
import { useSEO } from '@/hooks/use-seo';

const Component = () => {
  useSEO({
    title: "Page Title",
    description: "Page Description"
  });
  
  return <div>Content</div>;
};
```

## 9. Best Practices

1. **Component Organization**
   - Keep components small and focused
   - Use TypeScript interfaces
   - Implement proper prop validation

2. **SEO**
   - Always include meta tags
   - Implement proper schema markup
   - Use semantic HTML

3. **Performance**
   - Lazy load images
   - Implement code splitting
   - Monitor Core Web Vitals

4. **Code Style**
   - Follow consistent naming conventions
   - Use TypeScript strictly
   - Document complex logic

## 10. Troubleshooting

Common issues and solutions:

1. **Build Errors**
   - Check TypeScript types
   - Verify import paths
   - Check for missing dependencies

2. **Performance Issues**
   - Monitor console for warnings
   - Check image sizes
   - Verify lazy loading

3. **SEO Issues**
   - Validate schema markup
   - Check meta tags
   - Verify canonical URLs

## 11. Contributing

1. Fork the repository
2. Create feature branch
3. Follow code style
4. Submit pull request

## Contact

For technical support or questions:
- Email: support@shinedetailers.in
- Documentation: https://docs.shinedetailers.in

