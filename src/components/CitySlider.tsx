import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import localAreasData from "@/data/localAreasData";

const defaultCities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", 
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
  "Chandigarh", "Coimbatore", "Nagpur", "Surat", "Indore",
  "Bhopal", "Patna", "Vadodara", "Guwahati", "Kochi"
];

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
  const scrollStep = 1; // Smaller step for smoother scrolling
  const scrollInterval = 30; // More frequent updates for smoother animation

  useEffect(() => {
    const detectLocationAndSetAreas = async () => {
      try {
        const location = await getUserLocation();
        if (location.lat && location.lon) {
          const nearest = findNearestCity(location.lat, location.lon);
          if (nearest?.city) {
            const detectedCity = nearest.city.name;
            setNearestCity(detectedCity);
            
            // Get areas for the nearest city
            let cityAreasList = localAreasData
              .filter(area => area.parentCity.toLowerCase() === detectedCity.toLowerCase())
              .map(area => area.name);
            
            if (cityAreasList.length > 0) {
              setNearbyAreas(cityAreasList);
              
              // Combine nearest city, its areas, and other cities for display
              const allLocations = [detectedCity, ...cityAreasList];
              const otherCities = defaultCities.filter(city => 
                city.toLowerCase() !== detectedCity.toLowerCase()
              );
              
              // Create final display list without duplicates
              const uniqueLocations = [...new Set([...allLocations, ...otherCities])];
              setDisplayLocations(uniqueLocations);
            } else {
              setDisplayLocations(defaultCities);
            }
          } else {
            setDisplayLocations(defaultCities);
          }
        } else {
          setDisplayLocations(defaultCities);
        }
      } catch (error) {
        console.error("Error detecting location:", error);
        setDisplayLocations(defaultCities);
      }
    };
    
    detectLocationAndSetAreas();
  }, []);

  useEffect(() => {
    const startAutoScroll = () => {
      if (sliderRef.current) {
        const interval = setInterval(() => {
          const slider = sliderRef.current;
          if (slider) {
            // Check if we've reached the end
            if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 5)) {
              // If we're at the end, reset to beginning with smooth animation
              slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              // Otherwise continue smooth scrolling with very small increments
              slider.scrollBy({ left: scrollStep, behavior: 'auto' });
            }
          }
        }, scrollInterval);
        setAutoScrollInterval(interval);
      }
    };

    // Start auto-scroll when locations are loaded
    if (displayLocations.length > 0) {
      startAutoScroll();
    }

    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, [displayLocations]);

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

  // Helper function to highlight nearest city and areas
  const getItemStyles = (location: string) => {
    const isNearestCity = location === nearestCity;
    const isNearbyArea = nearbyAreas.includes(location);
    
    let className = "flex items-center whitespace-nowrap border border-border rounded-full px-3 py-1.5 transition-colors";
    
    if (isNearestCity) {
      className += " bg-primary text-primary-foreground hover:bg-primary/90";
    } else if (isNearbyArea) {
      className += " bg-primary/20 hover:bg-primary/30";
    } else {
      className += " bg-card hover:bg-primary/10";
    }
    
    return className;
  };

  return (
    <div className="relative">
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
          WebkitOverflowScrolling: "touch"
        }}
        onMouseEnter={() => {
          if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            setAutoScrollInterval(null);
          }
        }}
        onMouseLeave={() => {
          if (!autoScrollInterval && sliderRef.current) {
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
          if (!autoScrollInterval && sliderRef.current) {
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
            }, 2000); // Delay resuming auto-scroll after touch
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
