
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState, useEffect } from "react";
import { AreaCard } from "./AreaCard";
import localAreasData from "@/data/localAreasData";

interface AreaScrollerProps {
  cityName: string;
}

const AreaScroller = ({ cityName }: AreaScrollerProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
  }, [cityName]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  // Normalize the city name for case-insensitive matching
  const normalizedCityName = cityName.toLowerCase();
  
  const cityAreas = localAreasData.filter(
    area => area.parentCity.toLowerCase() === normalizedCityName
  );

  if (cityAreas.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full py-4 overflow-hidden">
      {canScrollLeft && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-md"
            onClick={() => scroll("left")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide py-2 px-8 space-x-4 no-scrollbar touch-pan-y"
        style={{ touchAction: "pan-y", scrollBehavior: "smooth" }}
        onScroll={checkScrollButtons}
      >
        {cityAreas.map((area) => (
          <div key={area.id} className="flex-shrink-0 w-[300px] max-w-[80vw]">
            <AreaCard area={area} />
          </div>
        ))}
      </div>

      {canScrollRight && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-md"
            onClick={() => scroll("right")}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default AreaScroller;
