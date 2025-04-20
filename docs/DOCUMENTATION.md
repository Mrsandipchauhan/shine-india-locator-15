
# ShineDetailers Website Documentation

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Structure](#3-project-structure)
4. [Key Components](#4-key-components)
5. [SEO Implementation](#5-seo-implementation)
6. [Core Features](#6-core-features)
7. [Performance Optimization](#7-performance-optimization)
8. [Hooks & Utilities](#8-hooks--utilities)
9. [State Management](#9-state-management)
10. [Deployment Guide](#10-deployment-guide)
11. [Contributing Guidelines](#11-contributing-guidelines)
12. [Testing](#12-testing)
13. [Security](#13-security)
14. [Contact & Support](#14-contact--support)

## 1. Project Overview

### Purpose
ShineDetailers is a premium car detailing service website that provides:
- Location-based service discovery
- Online booking system
- Detailed service information
- SEO-optimized content
- Performance-driven web application

### Key Features
- Responsive design across all devices
- Multiple city and area service coverage
- Interactive service packages
- Real-time location detection
- Dynamic pricing based on location
- Advanced SEO implementation
- Performance monitoring
- International service support

## 2. Technology Stack

### Frontend Technologies
- **Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Library**: shadcn/ui
- **State Management**: @tanstack/react-query
- **Routing**: React Router DOM v6
- **SEO**: react-helmet-async
- **Toast Notifications**: sonner
- **Icons**: lucide-react
- **Charts**: recharts
- **Forms**: react-hook-form

## 3. Project Structure

### Directory Organization
```
src/
├── components/         # Reusable UI components
│   ├── SEO/           # SEO-related components
│   ├── areas/         # Area-specific components
│   ├── booking/       # Booking-related components
│   ├── city/          # City-related components
│   ├── home/          # Homepage components
│   ├── services/      # Service-related components
│   └── ui/            # UI components (shadcn)
├── layouts/           # Layout components
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── data/             # Static data and types
├── services/         # API services
└── utils/            # Utility functions
```

## 4. Key Components

### Core Components
1. **Navigation**
   - `Navbar.tsx`: Main navigation
   - `Footer.tsx`: Site footer
   - `ScrollToTop.tsx`: Scroll management

2. **Service Components**
   - `ServiceCard.tsx`: Service display
   - `ServiceArea.tsx`: Area-specific services
   - `ServiceBenefits.tsx`: Service features

3. **Booking System**
   - `BookingForm.tsx`: Main booking interface
   - `BookingDialog.tsx`: Booking modal
   - `BookingFormInputs.tsx`: Form fields

4. **Location Components**
   - `LocationDetection.tsx`: Geolocation
   - `CitySlider.tsx`: City selection
   - `AreaListingSection.tsx`: Area listings

## 5. SEO Implementation

### Components
1. **Meta Tags Manager**
   ```typescript
   // MetaTags.tsx
   interface MetaTagsProps {
     title: string;
     description: string;
     canonicalUrl?: string;
   }
   ```

2. **Structured Data**
   - LocalBusiness Schema
   - Service Schema
   - FAQ Schema
   - Review Schema

### Performance Components
1. **SEO Optimizer**
   ```typescript
   // SEOOptimizer.tsx
   - Core Web Vitals monitoring
   - Performance metrics tracking
   - Resource optimization
   ```

2. **Performance Monitor**
   ```typescript
   // PerformanceMonitor.tsx
   - LCP tracking
   - FID monitoring
   - CLS optimization
   ```

## 6. Core Features

### Location Detection
```typescript
// LocationDetection.tsx
- Automatic city detection
- Nearest service area finding
- Location-based routing
```

### Dynamic Pricing
```typescript
// use-global-pricing.ts
- Country detection
- Currency conversion
- Price formatting
```

### Booking System
```typescript
// BookingForm.tsx
- Service selection
- Date/time picking
- Location integration
```

## 7. Performance Optimization

### Implemented Optimizations
1. **Image Optimization**
   - Lazy loading
   - WebP support
   - Responsive images

2. **Code Splitting**
   - Route-based splitting
   - Component lazy loading
   - Dynamic imports

3. **Resource Loading**
   - Critical CSS
   - Font optimization
   - Asset preloading

## 8. Hooks & Utilities

### Custom Hooks
1. **Location Hooks**
   ```typescript
   useCountryDetection(): string
   useCitySlider(): { cities: City[], nearest: City }
   ```

2. **Pricing Hooks**
   ```typescript
   useGlobalPricing(): {
     currency: Currency,
     convertPrice: (price: number) => number
   }
   ```

3. **SEO Hooks**
   ```typescript
   useSEO(): SEOProps
   useSEOMetadata(): MetadataProps
   ```

## 9. State Management

### Query Management
```typescript
// React Query Implementation
- Service queries
- Location caching
- Booking state
```

## 10. Deployment Guide

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Setup Steps
```bash
# Clone repository
git clone https://github.com/shinedetailers/website

# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build
```

## 11. Contributing Guidelines

### Code Style
- Follow TypeScript best practices
- Use consistent formatting
- Write descriptive commits

### Pull Request Process
1. Fork repository
2. Create feature branch
3. Update documentation
4. Submit PR

## 12. Testing

### Testing Strategy
- Unit tests for utilities
- Integration tests for features
- E2E tests for critical paths

## 13. Security

### Implemented Measures
- Input validation
- XSS prevention
- CORS configuration
- Rate limiting

## 14. Contact & Support

### Technical Support
- Email: tech@shinedetailers.in
- Issues: GitHub repository
- Documentation: Online docs

**Last Updated**: 2025-04-20
**Version**: 1.0.0
