
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCitySlider } from "@/hooks/use-city-slider";
import { ScrollButton } from "./city/ScrollButton";

const CitySlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { displayLocations, nearestCity, nearbyAreas } = useCitySlider();
  
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

    if (displayLocations.length > 0 && !isMobile) {
      const timer = setTimeout(startAutoScroll, 1000);
      return () => {
        clearTimeout(timer);
        if (autoScrollInterval) clearInterval(autoScrollInterval);
      };
    }
    
    return () => {
      if (autoScrollInterval) clearInterval(autoScrollInterval);
    };
  }, [displayLocations, isMobile, scrollInterval, scrollStep]);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === "left" ? -200 : 200;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(() => {
      if (sliderRef.current) setScrollPosition(sliderRef.current.scrollLeft);
    }, 300);
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = sliderRef.current 
    ? scrollPosition < sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10
    : true;

  const getItemStyles = (location: string) => {
    const isNearestCity = location === nearestCity;
    const isNearbyArea = nearbyAreas.includes(location);
    let className = "flex items-center whitespace-nowrap border border-border rounded-full px-3 py-1.5 transition-colors shadow-sm";
    
    if (isNearestCity) {
      className += " bg-primary text-white font-medium hover:bg-primary/90";
    } else if (isNearbyArea) {
      className += " bg-primary/30 text-white hover:bg-primary/40";
    } else {
      className += " bg-card hover:bg-primary/10";
    }
    
    return className;
  };

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
                sliderRef.current.scrollBy({ left: scrollStep, behavior: 'auto' });
              }
            }, scrollInterval);
            setAutoScrollInterval(interval);
          }
        }}
      >
        {displayLocations.map((location) => (
          <Link
            key={location}
            to={`/locations/${location.toLowerCase()}`}
            className={getItemStyles(location)}
          >
            <MapPin size={14} className={location === nearestCity ? "text-primary-foreground mr-1.5" : "text-primary mr-1.5"} />
            <span className="text-sm">
              {location}
              {location === nearestCity && <span className="ml-1 text-xs">(nearest)</span>}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CitySlider;
