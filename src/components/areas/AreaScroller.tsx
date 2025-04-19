
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import { AreaCard } from "./AreaCard";
import localAreasData from "@/data/localAreasData";

interface AreaScrollerProps {
  cityName: string;
}

const AreaScroller = ({ cityName }: AreaScrollerProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const cityAreas = localAreasData.filter(
    area => area.parentCity.toLowerCase() === cityName.toLowerCase()
  );

  return (
    <div className="relative w-full py-4">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={() => scroll("left")}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
      
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide py-2 px-4 space-x-4 no-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {cityAreas.map((area) => (
          <div key={area.id} className="flex-shrink-0 w-[300px]">
            <AreaCard area={area} />
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={() => scroll("right")}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AreaScroller;
