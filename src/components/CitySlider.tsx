
import { useIsMobile } from "@/hooks/use-mobile";
import { useCitySlider } from "@/hooks/use-city-slider";
import { ScrollButton } from "./city/ScrollButton";
import { LocationItem } from "./city/LocationItem";
import { useSliderScroll } from "@/hooks/use-slider-scroll";

const CitySlider = () => {
  const isMobile = useIsMobile();
  const { displayLocations, nearestCity, nearbyAreas } = useCitySlider();
  const { 
    sliderRef, 
    scroll, 
    canScrollLeft, 
    canScrollRight,
    autoScrollInterval,
    setAutoScrollInterval
  } = useSliderScroll();

  return (
    <div className="relative will-change-transform" style={{ contain: "content" }}>
      {!isMobile && (
        <>
          <ScrollButton direction="left" onClick={() => scroll("left")} disabled={!canScrollLeft} />
          <ScrollButton direction="right" onClick={() => scroll("right")} disabled={!canScrollRight} />
        </>
      )}
      
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-[1]" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-[1]" />
      
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide py-2 px-4 space-x-2 no-scrollbar"
        style={{ 
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          willChange: "scroll-position",
        }}
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
        {displayLocations.map((location) => (
          <LocationItem
            key={location}
            location={location}
            isNearestCity={location === nearestCity}
            isNearbyArea={nearbyAreas.includes(location)}
          />
        ))}
      </div>
    </div>
  );
};

export default CitySlider;
