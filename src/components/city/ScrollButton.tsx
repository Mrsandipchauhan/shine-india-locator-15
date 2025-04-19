
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScrollButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

export const ScrollButton = ({ direction, onClick, disabled }: ScrollButtonProps) => (
  <Button
    variant="ghost"
    size="icon"
    className={`absolute ${direction === 'left' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 z-10 rounded-full bg-background shadow-md ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
    onClick={onClick}
    disabled={disabled}
    style={{ transform: "translateY(-50%)", [direction === 'left' ? 'left' : 'right']: "-6px" }}
  >
    {direction === "left" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
  </Button>
);
