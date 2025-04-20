
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PerformanceOptimizer = () => {
  const location = useLocation();

  useEffect(() => {
    // Preload critical assets based on route
    const preloadCriticalAssets = () => {
      const criticalAssets = [
        { type: 'image', path: '/hero-image.webp' },
        { type: 'font', path: '/fonts/main.woff2' }
      ];

      criticalAssets.forEach(asset => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = asset.path;
        link.as = asset.type;
        if (asset.type === 'font') {
          link.setAttribute('crossorigin', 'anonymous');
        }
        document.head.appendChild(link);
      });
    };

    // Initialize performance monitoring
    const initPerformanceMonitoring = () => {
      if ('PerformanceObserver' in window) {
        // Monitor Core Web Vitals
        ['largest-contentful-paint', 'first-input', 'layout-shift'].forEach(metric => {
          try {
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach(entry => {
                // Report to analytics
                console.log(`${metric}:`, entry);
              });
            });
            observer.observe({ type: metric, buffered: true });
          } catch (e) {
            console.error(`Error monitoring ${metric}:`, e);
          }
        });
      }
    };

    preloadCriticalAssets();
    initPerformanceMonitoring();

    // Clean up function
    return () => {
      // Cleanup performance observers if needed
    };
  }, [location]);

  return null;
};

export default PerformanceOptimizer;
