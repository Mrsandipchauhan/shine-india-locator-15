
import { useIsMobile } from "@/hooks/use-mobile";
import { useCitySlider } from "@/hooks/use-city-slider";
import { ScrollButton } from "./city/ScrollButton";
import { LocationItem } from "./city/LocationItem";
import { SliderContainer } from "./city/SliderContainer";

const CitySlider = () => {
  const isMobile = useIsMobile();
  const { displayLocations, nearestCity, nearbyAreas } = useCitySlider();
  
  return (
    <SliderContainer>
      {!isMobile && (
        <>
          <ScrollButton direction="left" />
          <ScrollButton direction="right" />
        </>
      )}
      
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-[1]" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-[1]" />
      
      <div className="flex overflow-x-auto scrollbar-hide py-2 px-4 space-x-2 no-scrollbar">
        {displayLocations.map((location, index) => (
          <LocationItem
            key={`${location}-${index}`}
            location={location}
            isNearestCity={location === nearestCity}
            isNearbyArea={nearbyAreas.includes(location)}
          />
        ))}
      </div>
    </SliderContainer>
  );
};

export default CitySlider;
