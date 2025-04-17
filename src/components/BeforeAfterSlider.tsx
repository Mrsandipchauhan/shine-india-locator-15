
import { useState, useEffect, useRef } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before", 
  afterLabel = "After" 
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleMouseDown = () => {
      isDragging.current = true;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !sliderRef.current) return;
      
      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newPosition = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setPosition(newPosition);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !sliderRef.current) return;
      
      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const newPosition = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setPosition(newPosition);
      
      // Prevent scrolling while dragging
      e.preventDefault();
    };

    const handle = handleRef.current;
    const slider = sliderRef.current;

    if (handle && slider) {
      handle.addEventListener('mousedown', handleMouseDown);
      handle.addEventListener('touchstart', handleMouseDown, { passive: false });
      
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      if (handle && slider) {
        handle.removeEventListener('mousedown', handleMouseDown);
        handle.removeEventListener('touchstart', handleMouseDown);
        
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchend', handleMouseUp);
      }
    };
  }, []);

  return (
    <div 
      ref={sliderRef} 
      className="comparison-slider" 
      style={{"--position": `${position}%`} as React.CSSProperties}
    >
      <div 
        className="after" 
        style={{ backgroundImage: `url(${afterImage})` }}
      >
        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded text-sm">
          {afterLabel}
        </div>
      </div>
      
      <div 
        className="before" 
        style={{ backgroundImage: `url(${beforeImage})` }}
      >
        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-sm">
          {beforeLabel}
        </div>
      </div>
      
      <div ref={handleRef} className="slider-handle"></div>
    </div>
  );
};

export default BeforeAfterSlider;
