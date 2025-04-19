
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "./use-mobile";

interface UseSliderScrollProps {
  onScroll?: () => void;
}

export const useSliderScroll = ({ onScroll }: UseSliderScrollProps = {}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const scrollStep = isMobile ? 0.5 : 1;
  const scrollInterval = isMobile ? 60 : 30;

  useEffect(() => {
    if (isMobile) return;

    const startAutoScroll = () => {
      const interval = setInterval(() => {
        if (!sliderRef.current) return;
        
        if (sliderRef.current.scrollLeft >= (sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 5)) {
          sliderRef.current.scrollTo({ left: 0, behavior: isMobile ? 'auto' : 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: scrollStep, behavior: 'auto' });
        }
      }, scrollInterval);
      setAutoScrollInterval(interval);
    };

    const timer = setTimeout(startAutoScroll, 1000);
    return () => {
      clearTimeout(timer);
      if (autoScrollInterval) clearInterval(autoScrollInterval);
    };
  }, [isMobile, scrollInterval, scrollStep]);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === "left" ? -200 : 200;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(() => {
      if (sliderRef.current) setScrollPosition(sliderRef.current.scrollLeft);
    }, 300);
    onScroll?.();
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = sliderRef.current 
    ? scrollPosition < sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10
    : true;

  return {
    sliderRef,
    scroll,
    canScrollLeft,
    canScrollRight,
    autoScrollInterval,
    setAutoScrollInterval,
    scrollInterval,
    scrollStep
  };
};
