
import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // LCP Observer
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        console.log('LCP:', Math.round(lcpEntry.startTime), 'ms');
      });
      
      // FID Observer
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const fid = entry.processingStart! - entry.startTime;
          console.log('FID:', Math.round(fid), 'ms');
        });
      });
      
      // CLS Observer
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        fidObserver.observe({ entryTypes: ['first-input'] });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.error('Performance monitoring error:', e);
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
