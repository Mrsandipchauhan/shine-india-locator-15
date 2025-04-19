
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
              if (sliderRef.current.scrollLeft >= (sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 5)) {
                sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              } else {
                sliderRef.current.scrollBy({ left: 1, behavior: 'auto' });
              }
            }, 30);
            setAutoScrollInterval(interval);
          }
        }}
      >
        {children}
      </div>
    </div>
  );
};
