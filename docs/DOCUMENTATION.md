
# ShineDetailers Website Documentation

## 1. Project Overview

### Purpose
ShineDetailers is a comprehensive car detailing service website designed to provide users with:
- Location-based service discovery
- Online booking system
- Detailed service information
- SEO-optimized content
- Performance-driven web application

### Key Features
- Responsive design
- Multiple city and area service coverage
- Interactive service packages
- Admin dashboard
- Performance monitoring
- Advanced SEO implementation

## 2. Technology Stack

### Frontend Technologies
- **Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Library**: shadcn/ui
- **State Management**: @tanstack/react-query
- **Routing**: React Router DOM

### Performance & SEO
- Core Web Vitals optimization
- Structured JSON-LD schemas
- Meta tag management
- Performance monitoring

## 3. Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page-level components
├── layouts/        # Layout components
├── hooks/          # Custom React hooks
├── data/           # Static data and types
├── services/       # API service layers
├── utils/          # Utility functions
└── SEO/            # SEO-related components
```

## 4. Key Components

### Navigation Components
- `Navbar.tsx`: Site-wide navigation
- `Footer.tsx`: Footer with important links
- `ScrollToTop.tsx`: Scroll restoration utility

### Service Components
- `ServiceCard.tsx`: Individual service representation
- `ServiceArea.tsx`: Location-specific service details
- `ServiceBenefits.tsx`: Service advantage display

### Booking Components
- `BookingForm.tsx`: Service reservation interface
- `BookingDialog.tsx`: Booking confirmation modal

### Location Components
- `LocationDetection.tsx`: Geolocation services
- `CitySelector.tsx`: City selection interface
- `AreaListingSection.tsx`: Area-specific listings

## 5. SEO Implementation

### Technical SEO
- Robots.txt configuration
- XML Sitemap generation
- Canonical URL management
- Structured Data (JSON-LD)
  - Local Business Schema
  - Service Schema
  - FAQ Schema
  - Review Schema

### Performance Optimization
- Lazy image loading
- Code splitting
- Core Web Vitals tracking
- Critical CSS inlining

## 6. Hooks & Utilities

### Custom Hooks
- `use-seo.tsx`: SEO metadata management
- `use-seo-metadata.tsx`: Advanced SEO configuration
- `use-mobile.tsx`: Mobile device detection
- `use-toast.ts`: Notification management

### Utility Functions
- `locationUtils.ts`: Geolocation helpers
- `jsonLdValidator.ts`: Schema validation

## 7. Deployment Guide

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

# Start development server
npm run dev

# Build for production
npm run build
```

## 8. Environment Configuration

### Required Environment Variables
- `VITE_GOOGLE_MAPS_API_KEY`
- `VITE_LOCATION_SERVICE_URL`
- `VITE_BOOKING_API_ENDPOINT`

## 9. Troubleshooting

### Common Issues
- Check TypeScript types
- Verify API endpoint configurations
- Monitor browser console for warnings

## 10. Contributing Guidelines

1. Fork the repository
2. Create feature branch
3. Commit with clear messages
4. Submit pull request
5. Follow code style guidelines

## 11. Performance Monitoring

- Lighthouse scoring
- Google PageSpeed Insights
- Core Web Vitals tracking

## 12. Contact & Support

**Technical Support**:
- Email: tech@shinedetailers.in
- GitHub Issues: https://github.com/shinedetailers/website/issues

**Last Updated**: 2025-04-20
**Version**: 1.0.0
