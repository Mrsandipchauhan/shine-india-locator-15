
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import localAreasData from "@/data/localAreasData";

// Get unique cities from localAreasData
const getAllCities = () => {
  const uniqueCities = new Set<string>();
  localAreasData.forEach(area => {
    uniqueCities.add(area.parentCity);
  });
  return Array.from(uniqueCities);
};

const cityAreas: { [key: string]: string[] } = {};
localAreasData.forEach(area => {
  if (!cityAreas[area.parentCity]) {
    cityAreas[area.parentCity] = [];
  }
  cityAreas[area.parentCity].push(area.name);
});

const CitySlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [displayLocations, setDisplayLocations] = useState<string[]>([]);
  const [autoScrollInterval, setAutoScrollInterval] = useState<NodeJS.Timeout | null>(null);
  const [nearestCity, setNearestCity] = useState<string>("");
  const [nearbyAreas, setNearbyAreas] = useState<string[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  // Reduce animation work on mobile for better performance
  const isMobileDevice = useIsMobile();
  const scrollStep = isMobileDevice ? 0.5 : 1;
  const scrollInterval = isMobileDevice ? 60 : 30;

  useEffect(() => {
    // Simplified and optimized location detection with fallback
  const detectLocationAndSetAreas = async () => {
      // Set initial cities immediately to prevent UI waiting
      const initialCities = getAllCities();
      setDisplayLocations(initialCities);
      
      try {
        const location = await getUserLocation();
        if (location.lat && location.lon) {
          const nearest = findNearestCity(location.lat, location.lon);
          if (nearest?.city) {
            const detectedCity = nearest.city.name;
            setNearestCity(detectedCity);
            
            // Get areas for the nearest city - limit to top 3 for performance
            let cityAreasList = localAreasData
              .filter(area => area.parentCity.toLowerCase() === detectedCity.toLowerCase())
              .map(area => area.name)
              .slice(0, 3); // Limit to top 3 areas for better performance
            
            if (cityAreasList.length > 0) {
              setNearbyAreas(cityAreasList);
              
              // Create more efficient display list - limit other cities for performance
              const otherCities = getAllCities()
                .filter(city => city.toLowerCase() !== detectedCity.toLowerCase())
                .slice(0, 6); // Limit additional cities for better performance
              
              // Create final display list with priorities
              const uniqueLocations = [...new Set([detectedCity, ...cityAreasList, ...otherCities])];
              setDisplayLocations(uniqueLocations);
            }
          }
        }
      } catch (error) {
        console.error("Error detecting location:", error);
        // We already set initial cities, so no need to do anything here
      }
    };
    
    detectLocationAndSetAreas();
  }, []);

  useEffect(() => {
    // Skip auto-scroll initialization on mobile for better performance
    if (isMobile) {
      return;
    }
    
    const startAutoScroll = () => {
      if (sliderRef.current) {
        const interval = setInterval(() => {
          const slider = sliderRef.current;
          if (slider) {
            // Optimize scrolling behavior
            if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 5)) {
              // Use reduced animation on mobile for reset
              slider.scrollTo({ 
                left: 0, 
                behavior: isMobile ? 'auto' : 'smooth' 
              });
            } else {
              // Use more efficient scrolling with reduced work
              slider.scrollBy({ 
                left: scrollStep, 
                behavior: 'auto' 
              });
            }
          }
        }, scrollInterval);
        setAutoScrollInterval(interval);
      }
    };

    // Start auto-scroll only if not on mobile and locations are loaded
    if (displayLocations.length > 0 && !isMobile) {
      // Add slight delay before starting scroll to improve initial load performance
      const timer = setTimeout(() => {
        startAutoScroll();
      }, 1000);
      
      return () => {
        clearTimeout(timer);
        if (autoScrollInterval) {
          clearInterval(autoScrollInterval);
        }
      };
    }
    
    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, [displayLocations, isMobile, scrollInterval, scrollStep]);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    
    const scrollAmount = direction === "left" ? -200 : 200;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    
    setTimeout(() => {
      if (sliderRef.current) {
        setScrollPosition(sliderRef.current.scrollLeft);
      }
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        setScrollPosition(sliderRef.current.scrollLeft);
      }
    };
    
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      return () => slider.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = sliderRef.current 
    ? scrollPosition < sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10
    : true;

  // Helper function to highlight nearest city and areas with enhanced contrast for mobile
  const getItemStyles = (location: string) => {
    const isNearestCity = location === nearestCity;
    const isNearbyArea = nearbyAreas.includes(location);
    
    // Base styles with enhanced mobile visibility
    let className = "flex items-center whitespace-nowrap border border-border rounded-full px-3 py-1.5 transition-colors";
    
    if (isNearestCity) {
      // Enhanced contrast for nearest city on mobile
      className += " bg-primary text-white font-medium hover:bg-primary/90";
    } else if (isNearbyArea) {
      // Improved visibility for nearby areas
      className += " bg-primary/30 text-white hover:bg-primary/40";
    } else {
      // Better contrast for regular items
      className += " bg-card hover:bg-primary/10";
    }
    
    // Add slight shadow for better mobile visibility
    className += " shadow-sm";
    
    return className;
  };

  return (
    <div className="relative will-change-transform" style={{ contain: "content" }}>
      {!isMobile && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background shadow-md ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            style={{ transform: "translateY(-50%)", left: "-6px" }}
          >
            <ChevronLeft size={20} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background shadow-md ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            style={{ transform: "translateY(-50%)", right: "-6px" }}
          >
            <ChevronRight size={20} />
          </Button>
        </>
      )}
      
      {/* Add subtle gradient overlays for better UX */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-[1]"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-[1]"></div>
      
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide py-2 px-4 space-x-2 no-scrollbar"
        style={{ 
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          willChange: "scroll-position", // Performance optimization for scroll
        }}
        onMouseEnter={() => {
          if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            setAutoScrollInterval(null);
          }
        }}
        onMouseLeave={() => {
          if (!autoScrollInterval && sliderRef.current && !isMobile) {
            const interval = setInterval(() => {
              const slider = sliderRef.current;
              if (slider) {
                if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 5)) {
                  slider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                  slider.scrollBy({ left: scrollStep, behavior: 'auto' });
                }
              }
            }, scrollInterval);
            setAutoScrollInterval(interval);
          }
        }}
        onTouchStart={() => {
          if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            setAutoScrollInterval(null);
          }
        }}
        onTouchEnd={() => {
          // Only restart autoscroll on non-mobile or if explicitly requested
          if (!isMobile && !autoScrollInterval && sliderRef.current) {
            setTimeout(() => {
              const interval = setInterval(() => {
                const slider = sliderRef.current;
                if (slider) {
                  if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 5)) {
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                  } else {
                    slider.scrollBy({ left: scrollStep, behavior: 'auto' });
                  }
                }
              }, scrollInterval);
              setAutoScrollInterval(interval);
            }, 2000);
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
