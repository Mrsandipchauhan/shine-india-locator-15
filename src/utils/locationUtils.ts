
import citiesData from "@/data/citiesData";
import { worldwideLocations } from "@/data/globalLocationsData";

export const getCityData = (cityName: string) => {
  return citiesData.find(city => 
    city.name.toLowerCase() === cityName.toLowerCase()
  );
};

export const getAllCities = () => {
  const cities: string[] = [];
  Object.values(worldwideLocations).forEach(countries => {
    Object.values(countries).forEach(countryCities => {
      cities.push(...countryCities);
    });
  });
  return cities;
};

export const getCityCountry = (cityName: string): string | undefined => {
  for (const [continent, countries] of Object.entries(worldwideLocations)) {
    for (const [country, cities] of Object.entries(countries)) {
      if (cities.includes(cityName)) {
        return country;
      }
    }
  }
  return undefined;
};
