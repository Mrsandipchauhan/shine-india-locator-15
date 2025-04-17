
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

// Top cities in India by car ownership
const majorCities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", 
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
  "Chandigarh", "Coimbatore", "Nagpur", "Surat", "Indore",
  "Bhopal", "Patna", "Vadodara", "Guwahati", "Kochi"
];

const CitySlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    
    const scrollAmount = direction === "left" ? -200 : 200;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    
    // Update scroll position after scrolling
    setTimeout(() => {
      if (sliderRef.current) {
        setScrollPosition(sliderRef.current.scrollLeft);
      }
    }, 300);
  };
  
  // Update scroll position when scrolling manually
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
  
  // Check if we can scroll further
  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = sliderRef.current 
    ? scrollPosition < sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10
    : true;
  
  return (
    <div className="relative">
      {/* Scroll buttons for desktop */}
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
      
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-[1]" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-[1]" />
      
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide py-2 px-4 space-x-2 no-scrollbar"
        style={{ 
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        {majorCities.map((city) => (
          <Link
            key={city}
            to={`/locations/${city.toLowerCase()}`}
            className="flex items-center whitespace-nowrap bg-card hover:bg-primary/10 border border-border rounded-full px-3 py-1.5 transition-colors"
          >
            <MapPin size={14} className="text-primary mr-1.5" />
            <span className="text-sm">{city}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CitySlider;
