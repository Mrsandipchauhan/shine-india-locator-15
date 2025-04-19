
import { useEffect } from 'react';

interface PreloadLink {
  rel: string;
  href: string;
  as?: string;
  type?: string;
  crossOrigin?: string;
}

interface PerformanceEntryWithRecent extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}

interface PerformanceEntryWithProcessing extends PerformanceEntry {
  processingStart?: number;
}

// Component to implement core web vitals optimizations
const SEOOptimizer = () => {
  useEffect(() => {
    // Set up performance metrics tracking
    if ('PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint) observer
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcpEntry = entries[entries.length - 1];
        console.log('LCP:', lcpEntry.startTime / 1000, 'seconds');
      });
      
      // CLS (Cumulative Layout Shift) observer
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0;
        for (const entry of entryList.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntryWithRecent;
          if (layoutShiftEntry && !layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        }
        console.log('CLS:', clsValue);
      });
      
      // FID (First Input Delay) observer
      const fidObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const fidEntry = entry as PerformanceEntryWithProcessing;
          if (fidEntry && fidEntry.processingStart) {
            const delay = fidEntry.processingStart - fidEntry.startTime;
            console.log('FID:', delay, 'ms');
          }
        }
      });

      try {
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
        fidObserver.observe({ type: 'first-input', buffered: true });
      } catch (e) {
        console.error('Performance observer error:', e);
      }

      return () => {
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      };
    }
  }, []);

  // Preload critical assets
  useEffect(() => {
    // Preload critical fonts
    const preloadLinks: PreloadLink[] = [
      { rel: 'preload', href: '/fonts/main-font.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    ];

    // Preconnect to critical domains
    const preconnectLinks: PreloadLink[] = [
      { rel: 'preconnect', href: 'https://images.unsplash.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    ];

    // Create and append link elements to the document head
    [...preloadLinks, ...preconnectLinks].forEach((linkProps) => {
      const { rel, href, as, type, crossOrigin } = linkProps;
      if (!document.querySelector(`link[rel="${rel}"][href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (as) link.setAttribute('as', as);
        if (type) link.setAttribute('type', type);
        if (crossOrigin) link.setAttribute('crossOrigin', crossOrigin);
        document.head.appendChild(link);
      }
    });

    return () => {
      // Clean up only the preload links when the component unmounts
      preloadLinks.forEach(({ rel, href }) => {
        const link = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return null;
};

export default SEOOptimizer;
