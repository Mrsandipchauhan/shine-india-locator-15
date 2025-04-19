
// New component: Carousel of before-after sliders, uses embla-carousel-react for swipe support

import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import BeforeAfterSlider from "../BeforeAfterSlider";

interface ImagePair {
  before: string;
  after: string;
}

interface LocationBeforeAfterCarouselProps {
  images: ImagePair[];
}

const LocationBeforeAfterCarousel = ({ images }: LocationBeforeAfterCarouselProps) => {
  const [emblaApi, setEmblaApi] = useState<any | null>(null);

  return (
    <div className="relative">
      <Carousel setApi={setEmblaApi} className="overflow-visible" opts={{ loop: true }}>
        <CarouselContent className="cursor-grab">
          {images.map(({ before, after }, index) => (
            <CarouselItem key={index} className="px-2">
              <BeforeAfterSlider 
                beforeImage={before} 
                afterImage={after}
                beforeLabel="Before"
                afterLabel="After"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 top-1/2 -translate-y-1/2" />
        <CarouselNext className="right-0 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default LocationBeforeAfterCarousel;
