
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSliderScroll } from "@/hooks/use-slider-scroll";

interface ScrollButtonProps {
  direction: "left" | "right";
}

export const ScrollButton = ({ direction }: ScrollButtonProps) => {
  const { scroll, canScrollLeft, canScrollRight } = useSliderScroll();
  const disabled = direction === "left" ? !canScrollLeft : !canScrollRight;

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`absolute ${direction === 'left' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 z-10 rounded-full bg-background shadow-md ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={() => scroll(direction)}
      disabled={disabled}
      style={{ transform: "translateY(-50%)", [direction === 'left' ? 'left' : 'right']: "-6px" }}
    >
      {direction === "left" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </Button>
  );
};
