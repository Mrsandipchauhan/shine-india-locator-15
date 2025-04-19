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
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const detectLocationAndSetAreas = async () => {
      try {
        const location = await getUserLocation();
        if (location.lat && location.lon) {
          const nearest = findNearestCity(location.lat, location.lon);
          if (nearest?.city) {
            const nearestCity = nearest.city.name;
            let nearbyAreas = localAreasData
              .filter(area => area.parentCity.toLowerCase() === nearestCity.toLowerCase())
              .map(area => area.name);
            
            if (nearbyAreas.length > 0) {
              nearbyAreas = [nearestCity, ...nearbyAreas];
              const otherCities = defaultCities.filter(city => 
                city.toLowerCase() !== nearestCity.toLowerCase()
              );
              nearbyAreas = [...new Set([...nearbyAreas, ...otherCities])];
              setDisplayLocations(nearbyAreas);
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
            if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
              slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              slider.scrollBy({ left: 2, behavior: 'auto' });
            }
          }
        }, 50);
        setAutoScrollInterval(interval);
      }
    };

    startAutoScroll();

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
          >
            <ChevronRight size={20} />
          </Button>
        </>
      )}
      
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
                if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
                  slider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                  slider.scrollBy({ left: 2, behavior: 'auto' });
                }
              }
            }, 50);
            setAutoScrollInterval(interval);
          }
        }}
      >
        {displayLocations.map((location) => (
          <Link
            key={location}
            to={`/locations/${location.toLowerCase()}`}
            className="flex items-center whitespace-nowrap bg-card hover:bg-primary/10 border border-border rounded-full px-3 py-1.5 transition-colors"
          >
            <MapPin size={14} className="text-primary mr-1.5" />
            <span className="text-sm">{location}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CitySlider;
