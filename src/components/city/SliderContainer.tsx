
import { useSliderScroll } from "@/hooks/use-slider-scroll";
import { useIsMobile } from "@/hooks/use-mobile";
import { ReactNode, useEffect } from "react";

interface SliderContainerProps {
  children: ReactNode;
}

export const SliderContainer = ({ children }: SliderContainerProps) => {
  const isMobile = useIsMobile();
  const { 
    sliderRef, 
    autoScrollInterval,
    setAutoScrollInterval,
    scrollPosition
  } = useSliderScroll();

  // Implement auto-scrolling
  useEffect(() => {
    // Don't auto-scroll on mobile
    if (isMobile) return;
    
    // Clear any existing interval
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
    }
    
    // Start auto-scrolling after a delay
    const startScrollTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (!sliderRef.current) return;
        
        const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        const currentScroll = sliderRef.current.scrollLeft;
        
        // If near the end, smoothly reset to start
        if (currentScroll >= maxScroll - 5) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Controlled incremental scroll for smoother animation
          sliderRef.current.scrollBy({ 
            left: 1, 
            behavior: 'auto' 
          });
        }
      }, 25); // Faster interval for smoother scrolling
      
      setAutoScrollInterval(interval);
    }, 1500);
    
    return () => {
      clearTimeout(startScrollTimer);
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, [isMobile, sliderRef, setAutoScrollInterval]);

  return (
    <div 
      className="relative w-full overflow-hidden" 
      style={{ touchAction: "pan-y" }}
    >
      <div
        ref={sliderRef}
        className="transition-all duration-300 ease-linear w-full max-w-full touch-pan-y"
        onMouseEnter={() => {
          if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            setAutoScrollInterval(null);
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) {
            // Restart auto-scrolling when mouse leaves
            const interval = setInterval(() => {
              if (!sliderRef.current) return;
              
              const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
              const currentScroll = sliderRef.current.scrollLeft;
              
              // If near the end, smoothly reset to start
              if (currentScroll >= maxScroll - 5) {
                sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              } else {
                // Controlled incremental scroll for smoother animation
                sliderRef.current.scrollBy({ 
                  left: 1, 
                  behavior: 'auto' 
                });
              }
            }, 25);
            
            setAutoScrollInterval(interval);
          }
        }}
      >
        {children}
      </div>
    </div>
  );
};
