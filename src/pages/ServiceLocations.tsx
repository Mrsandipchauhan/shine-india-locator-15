
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import LocalServiceProviders from "@/components/LocalServiceProviders";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import { getUserLocation, findNearestCity } from "@/services/locationService";
import { toast } from "sonner";

// Service provider data for each city
// In a real application, this would come from an API or database
const serviceProvidersByCity: Record<string, any[]> = {
  delhi: [
    {
      id: "delhi1",
      name: "Supreme Auto Detailing",
      address: "45 Connaught Place, New Delhi",
      phone: "+91 98765 43210",
      rating: 4.8,
      openHours: "Mon-Sat: 9AM - 7PM, Sun: 10AM - 5PM",
      services: ["Exterior Detailing", "Interior Detailing", "Ceramic Coating", "Paint Protection"]
    },
    {
      id: "delhi2",
      name: "CarSpa Delhi",
      address: "112 South Extension Part II, New Delhi",
      phone: "+91 87654 32109",
      rating: 4.5,
      openHours: "Mon-Sat: 8AM - 8PM, Sun: Closed",
      services: ["Full Detailing", "Steam Cleaning", "Headlight Restoration", "Engine Bay Cleaning"]
    },
    {
      id: "delhi3",
      name: "Royal Touch Auto Care",
      address: "22 Rajouri Garden Main Market, New Delhi",
      phone: "+91 76543 21098",
      rating: 4.7,
      openHours: "Daily: 9AM - 7PM",
      services: ["Premium Detailing", "Leather Treatment", "Paint Correction", "Nano Coating"]
    }
  ],
  mumbai: [
    {
      id: "mumbai1",
      name: "Mumbai Car Care Studio",
      address: "78 Linking Road, Bandra West, Mumbai",
      phone: "+91 98765 12345",
      rating: 4.9,
      openHours: "Mon-Sat: 8AM - 9PM, Sun: 10AM - 6PM",
      services: ["Ceramic Coating", "PPF Installation", "Luxury Detailing", "Interior Sanitization"]
    },
    {
      id: "mumbai2",
      name: "Shine Masters",
      address: "23 Juhu Tara Road, Juhu, Mumbai",
      phone: "+91 87654 23456",
      rating: 4.6,
      openHours: "Daily: 8AM - 8PM",
      services: ["Exterior Detailing", "Interior Cleaning", "Paint Correction", "Ceramic Protection"]
    },
    {
      id: "mumbai3",
      name: "Auto Sparkle Mumbai",
      address: "112 Andheri West, Mumbai",
      phone: "+91 76543 34567",
      rating: 4.7,
      openHours: "Mon-Sat: 9AM - 7PM, Sun: By Appointment",
      services: ["Premium Wash", "Interior Detailing", "Paint Restoration", "Rim Cleaning"]
    }
  ],
  bangalore: [
    {
      id: "bangalore1",
      name: "Bangalore Auto Spa",
      address: "56 Indiranagar 100 Ft Road, Bangalore",
      phone: "+91 98765 56789",
      rating: 4.8,
      openHours: "Mon-Sat: 9AM - 8PM, Sun: 10AM - 6PM",
      services: ["Full Detail Package", "Ceramic Pro Coating", "Interior Renovation", "Paint Correction"]
    },
    {
      id: "bangalore2",
      name: "Tech City Car Care",
      address: "34 Koramangala 6th Block, Bangalore",
      phone: "+91 87654 67890",
      rating: 4.7,
      openHours: "Daily: 8AM - 9PM",
      services: ["Express Detailing", "Paint Protection Film", "Leather Care", "Wheel Restoration"]
    },
    {
      id: "bangalore3",
      name: "Pristine Auto Detailing",
      address: "78 Whitefield Main Road, Bangalore",
      phone: "+91 76543 78901",
      rating: 4.9,
      openHours: "Mon-Sat: 8AM - 7PM, Sun: 9AM - 5PM",
      services: ["Premium Detailing", "Nano Ceramic Coating", "Interior Sanitization", "Engine Detailing"]
    }
  ],
  hyderabad: [
    {
      id: "hyderabad1",
      name: "Hyderabad Car Care Studio",
      address: "45 Banjara Hills Road No. 12, Hyderabad",
      phone: "+91 98765 89012",
      rating: 4.7,
      openHours: "Mon-Sat: 9AM - 7PM, Sun: 10AM - 5PM",
      services: ["Ceramic Coating", "Interior Detailing", "Paint Correction", "Headlight Restoration"]
    },
    {
      id: "hyderabad2",
      name: "HITEC Auto Spa",
      address: "22 Madhapur Main Road, Hyderabad",
      phone: "+91 87654 90123",
      rating: 4.6,
      openHours: "Daily: 9AM - 8PM",
      services: ["Full Detailing", "Premium Wash", "Leather Treatment", "Wax Protection"]
    },
    {
      id: "hyderabad3",
      name: "Jubilee Car Care",
      address: "67 Jubilee Hills Road No. 36, Hyderabad",
      phone: "+91 76543 01234",
      rating: 4.8,
      openHours: "Mon-Sat: 8AM - 7PM, Sun: By Appointment",
      services: ["Executive Detailing", "Paint Protection", "Interior Deep Clean", "Odor Removal"]
    }
  ],
  chennai: [
    {
      id: "chennai1",
      name: "Chennai Auto Detailing Pro",
      address: "78 Anna Nagar East, Chennai",
      phone: "+91 98765 12345",
      rating: 4.8,
      openHours: "Mon-Sat: 9AM - 7PM, Sun: 10AM - 5PM",
      services: ["Premium Detailing", "Ceramic Coating", "Paint Correction", "Interior Renovation"]
    },
    {
      id: "chennai2",
      name: "ECR Car Spa",
      address: "45 East Coast Road, Chennai",
      phone: "+91 87654 23456",
      rating: 4.7,
      openHours: "Daily: 8AM - 8PM",
      services: ["Anti-Rust Treatment", "Interior Clean", "Exterior Polish", "Paint Protection"]
    },
    {
      id: "chennai3",
      name: "T. Nagar Auto Care",
      address: "23 Pondy Bazaar, T. Nagar, Chennai",
      phone: "+91 76543 34567",
      rating: 4.6,
      openHours: "Mon-Sat: 8:30AM - 7:30PM, Sun: Closed",
      services: ["Express Detailing", "Full Detail Service", "Headlight Restoration", "Leather Care"]
    }
  ]
};

// Default providers if city not found
const defaultProviders = [
  {
    id: "default1",
    name: "ShineDetailers Premium Service",
    address: "Central Location",
    phone: "+91 800-123-4567",
    rating: 5.0,
    openHours: "Mon-Sat: 9AM - 8PM, Sun: 10AM - 6PM",
    services: ["Full Detailing", "Ceramic Coating", "Interior Detailing", "Paint Protection"]
  },
  {
    id: "default2",
    name: "ShineDetailers Express",
    address: "Multiple Locations",
    phone: "+91 800-123-7890",
    rating: 4.8,
    openHours: "Daily: 8AM - 8PM",
    services: ["Express Detailing", "Wash & Wax", "Interior Cleaning", "Headlight Restoration"]
  }
];

const cityContents: Record<string, {
  title: string;
  description: string;
  weatherImpact: string;
  localChallenges: string;
  specialTips: string;
  mapLocation: string;
}> = {
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

const ServiceLocations = () => {
  const { cityId = "" } = useParams<{ cityId: string }>();
  const [cityName, setCityName] = useState("");
  const [providers, setProviders] = useState<any[]>([]);
  const [cityContent, setCityContent] = useState<any>(null);
  
  useEffect(() => {
    // Normalize the city ID from URL parameter
    const normalizedCityId = cityId.toLowerCase();
    
    // Set providers based on city ID
    const cityProviders = serviceProvidersByCity[normalizedCityId] || defaultProviders;
    setProviders(cityProviders);
    
    // Set city name with proper capitalization
    const formattedCityName = normalizedCityId.charAt(0).toUpperCase() + normalizedCityId.slice(1);
    setCityName(formattedCityName);
    
    // Set city content from our database
    setCityContent(cityContents[normalizedCityId] || {
      title: `Car Detailing Services in ${formattedCityName}`,
      description: `Professional car detailing services in ${formattedCityName}. Our certified technicians use premium products to deliver exceptional results.`,
      weatherImpact: "Our services are tailored to address the specific environmental conditions in your area.",
      localChallenges: "We understand the unique challenges that local conditions pose to your vehicle's appearance and protection.",
      specialTips: "Regular detailing helps maintain your car's value and appearance, especially in challenging climate conditions.",
      mapLocation: `${formattedCityName}, India`
    });
    
    // Try to detect user location if no city is specified
    if (!normalizedCityId) {
      detectUserLocation();
    }
  }, [cityId]);
  
  // Function to detect user location and suggest nearest city
  const detectUserLocation = async () => {
    try {
      const location = await getUserLocation();
      
      if (location.lat && location.lon) {
        const nearest = findNearestCity(location.lat, location.lon);
        
        if (nearest?.city) {
          toast.info(`We detected you're near ${nearest.city.name}`, {
            description: `Would you like to view car detailing services in ${nearest.city.name}?`,
            action: {
              label: "View Services",
              onClick: () => {
                window.location.href = `/locations/${nearest.city.id}`;
              }
            },
            duration: 8000
          });
        }
      }
    } catch (error) {
      console.error("Error detecting location:", error);
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{cityContent?.title || `Car Detailing in ${cityName}`}</h1>
          <p className="text-lg text-muted-foreground">
            {cityContent?.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {/* Location specific content */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="text-xl font-bold mb-4">Why Car Detailing Matters in {cityName}</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Local Weather Impact</h3>
                    <p className="text-muted-foreground">
                      {cityContent?.weatherImpact}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Local Challenges for Vehicles</h3>
                    <p className="text-muted-foreground">
                      {cityContent?.localChallenges}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Special Tips for {cityName} Car Owners</h3>
                    <p className="text-muted-foreground">
                      {cityContent?.specialTips}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Service Providers Section */}
              <LocalServiceProviders city={cityName} providers={providers} />
              
              {/* Map Section */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Car Detailing Locations in {cityName}</h2>
                <GoogleMapEmbed 
                  address="" 
                  city={cityContent?.mapLocation || cityName} 
                  height="400px"
                  zoom={12}
                />
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <BookingForm selectedCity={cityName} />
              
              <div className="mt-6 p-6 bg-card rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-3">Why Choose Our Services in {cityName}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Local Expertise:</span> Our technicians understand {cityName}'s specific environmental challenges.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Premium Products:</span> We use only the highest quality detailing products suitable for local conditions.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Convenience:</span> Multiple service centers across {cityName} with flexible scheduling options.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Satisfaction Guarantee:</span> If you're not completely satisfied, we'll make it right.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceLocations;
