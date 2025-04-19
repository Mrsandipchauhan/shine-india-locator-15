
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

  // Track scroll position changes
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        setScrollPosition(sliderRef.current.scrollLeft);
      }
    };

    const currentSlider = sliderRef.current;
    if (currentSlider) {
      currentSlider.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentSlider) {
        currentSlider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Make sure scroll position is updated after manual scroll
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === "left" ? -200 : 200;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    
    // Manually update scroll position after animation
    setTimeout(() => {
      if (sliderRef.current) setScrollPosition(sliderRef.current.scrollLeft);
    }, 300);
    
    // Pause auto-scroll when manually scrolling
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      setAutoScrollInterval(null);
    }
    
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
    scrollStep,
    scrollPosition
  };
};
