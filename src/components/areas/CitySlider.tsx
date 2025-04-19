
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

interface CitySliderProps {
  locations: string[];
  onLocationSelect?: (location: string) => void;
}

const CitySlider = ({ locations, onLocationSelect }: CitySliderProps) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, [locations]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence>
        {!isMobile && canScrollLeft && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide py-2 px-8 space-x-2 no-scrollbar snap-x snap-mandatory touch-pan-y"
        style={{ touchAction: "pan-y" }}
        onScroll={checkScrollButtons}
      >
        {locations.map((location) => (
          <Link
            key={location}
            to={`/locations/${location.toLowerCase()}`}
            onClick={() => onLocationSelect?.(location)}
            className="flex items-center whitespace-nowrap bg-card hover:bg-primary/10 border border-border rounded-full px-3 py-1.5 transition-colors snap-start"
          >
            <MapPin size={14} className="text-primary mr-1.5" />
            <span className="text-sm font-medium">{location}</span>
          </Link>
        ))}
      </div>

      <AnimatePresence>
        {!isMobile && canScrollRight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CitySlider;
