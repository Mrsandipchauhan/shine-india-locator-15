interface CityContent {
  title: string;
  description: string;
  weatherImpact: string;
  localChallenges: string;
  specialTips: string;
  mapLocation: string;
}

export const cityContents: Record<string, CityContent> = {
  delhi: {
    title: "Car Detailing Services in Delhi",
    description: "Delhi's extreme climate and urban pollution require specialized car detailing solutions. Our certified professionals use advanced techniques and premium products to protect your vehicle from Delhi's unique environmental challenges.",
    weatherImpact: "Delhi experiences extreme temperature variations throughout the year, from scorching summers to chilly winters. The intense summer heat can damage your car's paint and interior, while winter fog and moisture can lead to stubborn stains and mold. Our detailing packages are specifically designed to address these seasonal challenges.",
    localChallenges: "Delhi's high pollution levels and dust from construction activities can severely affect your vehicle's appearance and finish. Our detailed cleaning process removes embedded contaminants and applies protective coatings that shield your car from Delhi's harsh environment.",
    specialTips: "For Delhi car owners, we recommend quarterly detailing services with additional exterior washes during heavy pollution seasons. Consider ceramic coating for maximum protection against pollution and UV damage, which is particularly important in Delhi's strong summer sun.",
    mapLocation: "Delhi, India"
  },
  mumbai: {
    title: "Car Detailing Services in Mumbai",
    description: "Mumbai's coastal climate presents unique challenges for car maintenance. Our specialized detailing services protect your vehicle from salt air corrosion, monsoon damage, and the city's humid conditions.",
    weatherImpact: "Mumbai's coastal environment and high humidity accelerate corrosion on metal parts, while the heavy monsoon season can lead to water damage, mold, and mildew. Our detailing treatments include anti-corrosion applications and thorough interior dehumidification to combat these issues.",
    localChallenges: "Mumbai's combination of coastal salt air, urban pollution, and torrential monsoon rains creates a perfect storm for vehicle deterioration. Our comprehensive detailing packages address these specific concerns with specialized products designed for coastal environments.",
    specialTips: "For Mumbai car owners, we recommend interior sanitization treatments every 3 months to prevent mold growth in the humid climate. Protective ceramic coating is essential to shield against salt air corrosion and should be applied before the monsoon season.",
    mapLocation: "Mumbai, India"
  },
  bangalore: {
    title: "Car Detailing Services in Bangalore",
    description: "Bangalore's moderate climate and tech-forward environment call for sophisticated car care solutions. Our detailing services cater to both everyday vehicles and luxury cars with treatments that maintain pristine appearance despite the city's increasing dust levels.",
    weatherImpact: "Bangalore's generally pleasant climate is advantageous for car maintenance, but seasonal changes still impact your vehicle. The dry seasons bring dust that can scratch paint, while occasional heavy rains can cause water spotting and interior dampness if not properly addressed.",
    localChallenges: "Bangalore's ongoing infrastructure development creates continuous dust issues, while the city's growing traffic means longer exposure to contaminants during commutes. Our detailing services address these specific urban challenges.",
    specialTips: "For Bangalore car owners, we recommend quarterly detailing with an emphasis on dust protection and paint preservation. Our weekend express detailing services are perfect for busy IT professionals who need quick but thorough car care solutions.",
    mapLocation: "Bangalore, India"
  },
  hyderabad: {
    title: "Car Detailing Services in Hyderabad",
    description: "Hyderabad's unique climate combining dry heat and monsoon seasons requires specialized car care approaches. Our detailing experts deliver treatments that protect your vehicle year-round against the city's varying environmental conditions.",
    weatherImpact: "Hyderabad's intense summer heat can damage paint, fade interiors, and deteriorate rubber components. During monsoon seasons, excess moisture can cause water spots and interior mildew. Our seasonal detailing packages address both extremes.",
    localChallenges: "Hyderabad's hard water can leave stubborn mineral deposits on your vehicle after washing, and the combination of heat and dust accelerates paint oxidation. Our detailing processes include specialized treatments for these regional issues.",
    specialTips: "For Hyderabad car owners, we recommend heat-resistant ceramic coating application to protect against the intense summer sun. Interior fabric protection is equally important to prevent UV damage and maintain your car's cabin condition.",
    mapLocation: "Hyderabad, India"
  },
  chennai: {
    title: "Car Detailing Services in Chennai",
    description: "Chennai's coastal tropical climate presents significant challenges for vehicle maintenance. Our specialized detailing services protect against salt air corrosion, extreme heat damage, and the effects of high humidity.",
    weatherImpact: "Chennai's combination of heat, humidity, and coastal air creates an environment where vehicles deteriorate rapidly without proper care. Our detailing treatments focus on humidity control for interiors and salt-resistant protection for exteriors.",
    localChallenges: "Chennai's proximity to the coast accelerates rusting and corrosion, while the intense heat can cause paint fading and interior damage. Our comprehensive detailing packages include UV protection and anti-corrosion treatments specifically designed for these conditions.",
    specialTips: "For Chennai car owners, we recommend anti-corrosion treatments every 6 months and interior sanitization quarterly due to the high humidity. Paint protection films are particularly valuable in Chennai's harsh environment to maintain your vehicle's appearance and value.",
    mapLocation: "Chennai, India"
  }
};

export const getDefaultCityContent = (cityName: string): CityContent => ({
  title: `Car Detailing Services in ${cityName}`,
  description: `Professional car detailing services in ${cityName}. Our certified technicians use premium products to deliver exceptional results.`,
  weatherImpact: "Our services are tailored to address the specific environmental conditions in your area.",
  localChallenges: "We understand the unique challenges that local conditions pose to your vehicle's appearance and protection.",
  specialTips: "Regular detailing helps maintain your car's value and appearance, especially in challenging climate conditions.",
  mapLocation: `${cityName}, India`
});
