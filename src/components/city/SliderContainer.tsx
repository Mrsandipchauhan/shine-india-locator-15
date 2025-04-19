
import { useSliderScroll } from "@/hooks/use-slider-scroll";
import { useIsMobile } from "@/hooks/use-mobile";
import { ReactNode } from "react";

interface SliderContainerProps {
  children: ReactNode;
}

export const SliderContainer = ({ children }: SliderContainerProps) => {
  const isMobile = useIsMobile();
  const { 
    sliderRef, 
    autoScrollInterval,
    setAutoScrollInterval
  } = useSliderScroll();

  return (
    <div 
      className="relative will-change-transform" 
      style={{ contain: "content" }}
    >
      <div
        ref={sliderRef}
        className="transition-all duration-300 ease-linear"
        onMouseEnter={() => {
          if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            setAutoScrollInterval(null);
          }
        }}
        onMouseLeave={() => {
          if (!autoScrollInterval && !isMobile) {
            const interval = setInterval(() => {
              if (!sliderRef.current) return;
              
              const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
              const currentScroll = sliderRef.current.scrollLeft;
              
              // If near the end, smoothly reset to start
              if (currentScroll >= maxScroll - 2) {
                sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              } else {
                // Slower, smoother scroll
                sliderRef.current.scrollBy({ 
                  left: 0.5, 
                  behavior: 'auto' 
                });
              }
            }, 50); // Increased interval for smoother motion
            setAutoScrollInterval(interval);
          }
        }}
      >
        {children}
      </div>
    </div>
  );
};
