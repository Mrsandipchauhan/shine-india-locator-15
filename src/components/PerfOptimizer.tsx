
import { ReactNode, useEffect, useState } from 'react';

interface PerfOptimizerProps {
  children: ReactNode;
  delay?: number;
  placeholder?: ReactNode;
}

/**
 * PerfOptimizer defers rendering of non-critical components
 * to improve initial page load performance
 */
const PerfOptimizer = ({ 
  children, 
  delay = 500, 
  placeholder 
}: PerfOptimizerProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Don't render immediately to prioritize critical path rendering
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (shouldRender) {
    return <>{children}</>;
  }

  if (placeholder) {
    return <>{placeholder}</>;
  }

  return null;
};

export default PerfOptimizer;
