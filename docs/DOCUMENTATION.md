
# ShineDetailers Website Documentation

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Structure](#3-project-structure)
4. [Key Components](#4-key-components)
5. [Pages](#5-pages)
6. [Features](#6-features)
7. [SEO Implementation](#7-seo-implementation)
8. [Performance Optimization](#8-performance-optimization)
9. [Hooks & Utilities](#9-hooks--utilities)
10. [State Management](#10-state-management)
11. [Deployment Guide](#11-deployment-guide)
12. [Testing](#12-testing)
13. [Security](#13-security)
14. [Contributing Guidelines](#14-contributing-guidelines)

## 1. Project Overview

### Purpose
ShineDetailers is a premium car detailing service website designed to:
- Provide location-based service discovery
- Enable online booking system
- Display detailed service information
- Implement SEO optimization
- Offer real-time pricing based on location
- Support multiple languages and currencies
- Showcase before/after results
- Handle customer reviews and ratings

### Core Features
- Responsive design across all devices
- Location-based service discovery
- Dynamic pricing system
- Online booking platform
- Service package customization
- Multi-city coverage
- Real-time availability checking
- Customer dashboard
- Review management
- Image galleries
- Service area mapping

## 2. Technology Stack

### Frontend Technologies
- **Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - shadcn/ui for component library
- **State Management**: 
  - @tanstack/react-query for server state
  - React Context for local state
- **Routing**: React Router DOM v6
- **Form Handling**: react-hook-form
- **Data Visualization**: recharts
- **Notifications**: sonner toast
- **Icons**: lucide-react
- **SEO**: react-helmet-async

### Key Dependencies
- @hookform/resolvers: Form validation
- @radix-ui/* components: Accessible UI primitives
- date-fns: Date manipulation
- zod: Schema validation
- next-themes: Theme management
- vaul: Drawer components

## 3. Project Structure

### Directory Organization
```
src/
├── components/          # Reusable UI components
│   ├── SEO/            # SEO-related components
│   ├── areas/          # Area-specific components
│   ├── booking/        # Booking system components
│   ├── city/           # City-related components
│   ├── home/           # Homepage components
│   ├── services/       # Service-related components
│   └── ui/             # shadcn UI components
├── hooks/              # Custom React hooks
├── layouts/            # Layout components
├── pages/              # Page components
├── data/              # Static data and types
├── services/          # API services
└── utils/             # Utility functions
```

## 4. Key Components

### Core Components
1. **Navigation System**
   - `Navbar.tsx`: Main navigation bar
   - `Footer.tsx`: Site footer
   - `ScrollToTop.tsx`: Scroll management
   - `LocationDetection.tsx`: User location detection

2. **Booking System**
   - `BookingForm.tsx`: Main booking interface
   - `BookingDialog.tsx`: Booking modal
   - `BookingFormInputs.tsx`: Form input fields
   - Features:
     - Service selection
     - Date/time picking
     - Location integration
     - Price calculation
     - Validation

3. **Service Components**
   - `ServiceCard.tsx`: Service display cards
   - `ServiceArea.tsx`: Area-specific services
   - `ServiceBenefits.tsx`: Service features
   - `ServicesSEO.tsx`: SEO content
   - Features:
     - Dynamic pricing
     - Service descriptions
     - Image galleries
     - Booking integration

4. **Location Components**
   - `CitySlider.tsx`: City selection interface
   - `AreaListingSection.tsx`: Area listings
   - `LocationContentSection.tsx`: Location content
   - Features:
     - Automatic location detection
     - City/area navigation
     - Service availability check
     - Map integration

### UI Components
1. **Form Elements**
   - Input fields
   - Select dropdowns
   - Date pickers
   - Time selectors
   - Validation feedback

2. **Layout Components**
   - Grid systems
   - Flex containers
   - Responsive layouts
   - Card components

3. **Interactive Elements**
   - Buttons
   - Links
   - Tooltips
   - Modals
   - Drawers

## 5. Pages

### Homepage (Index.tsx)
- Hero section with location detection
- Service highlights
- City selection
- Testimonials
- Call-to-action sections
- SEO optimization

### Services Page
- Service listings
- Pricing information
- Package comparisons
- Booking integration
- Before/after galleries

### Location Pages
- City-specific content
- Area coverage maps
- Local pricing
- Available services
- Customer reviews

### Booking Pages
- Service selection
- DateTime picker
- Location selection
- Price calculator
- Contact form

## 6. Features

### Location Detection
```typescript
// LocationDetection.tsx
- Automatic city detection
- Nearest service area finding
- GPS integration
- Fallback mechanisms
```

### Dynamic Pricing
```typescript
// use-global-pricing.ts
- Country detection
- Currency conversion
- Price formatting
- Location-based rates
```

### Booking System
```typescript
// BookingForm.tsx
- Service selection
- DateTime picking
- Location integration
- Price calculation
- Validation
- Confirmation system
```

### SEO Implementation
```typescript
// SEOManager.tsx
- Meta tags
- Schema markup
- Canonical URLs
- Sitemap generation
- Robots.txt configuration
```

## 7. SEO Implementation

### Components
1. **Meta Tags Manager**
   - Title management
   - Description generation
   - Open Graph tags
   - Twitter cards

2. **Schema Markup**
   - LocalBusiness
   - Service
   - FAQ
   - Review
   - BreadcrumbList

### Performance Components
1. **SEO Optimizer**
   - Core Web Vitals monitoring
   - Performance metrics tracking
   - Resource optimization

2. **Content Strategy**
   - Semantic HTML
   - Structured data
   - Content hierarchy
   - Internal linking

## 8. Performance Optimization

### Implemented Optimizations
1. **Image Optimization**
   - Lazy loading
   - WebP format
   - Responsive images
   - Image compression

2. **Code Optimization**
   - Code splitting
   - Route-based chunking
   - Tree shaking
   - Bundle optimization

3. **Resource Loading**
   - Critical CSS
   - Font optimization
   - Asset preloading
   - Cache management

## 9. Hooks & Utilities

### Custom Hooks
1. **Location Hooks**
   - useCountryDetection
   - useCitySlider
   - useLocationDetection

2. **Pricing Hooks**
   - useGlobalPricing
   - useCurrencyConverter
   - usePriceCalculator

3. **SEO Hooks**
   - useSEO
   - useSEOMetadata
   - useSchemaMarkup

## 10. State Management

### Query Management
- Service queries
- Location caching
- Booking state
- User preferences

### Context Providers
- Theme provider
- Location provider
- Pricing provider
- Booking provider

## 11. Deployment Guide

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

## 12. Testing

### Testing Strategy
- Unit tests
- Integration tests
- E2E tests
- Performance tests

### Test Coverage
- Components
- Hooks
- Utilities
- API integration

## 13. Security

### Implemented Measures
- Input validation
- XSS prevention
- CORS configuration
- Rate limiting
- Data sanitization

## 14. Contributing Guidelines

### Code Style
- TypeScript best practices
- Component patterns
- File organization
- Documentation

### Pull Request Process
1. Fork repository
2. Create feature branch
3. Follow style guide
4. Submit PR

**Last Updated**: 2025-04-20
**Version**: 2.0.0

