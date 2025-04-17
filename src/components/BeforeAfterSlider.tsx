
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
      className="comparison-slider relative w-full aspect-[16/9] overflow-hidden rounded-lg" 
      style={{"--position": `${position}%`} as React.CSSProperties}
      itemScope
      itemType="https://schema.org/ImageObject"
    >
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ 
          clipPath: `inset(0 ${100 - position}% 0 0)` 
        }}
      >
        <img 
          src={afterImage}
          alt="After detailing"
          className="absolute inset-0 w-full h-full object-cover"
          itemProp="contentUrl"
        />
        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded text-sm">
          {afterLabel}
        </div>
      </div>
      
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={beforeImage}
          alt="Before detailing"
          className="absolute inset-0 w-full h-full object-cover"
          itemProp="contentUrl"
        />
        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-sm">
          {beforeLabel}
        </div>
      </div>
      
      <div 
        ref={handleRef}
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 12H3M3 12l4-4M3 12l4 4M21 12l-4-4m4 4l-4 4"/>
          </svg>
        </div>
      </div>
      
      <meta itemProp="name" content="Car Detailing Before & After Comparison" />
      <meta itemProp="description" content="Visual comparison of a vehicle before and after professional detailing service" />
    </div>
  );
};

export default BeforeAfterSlider;
