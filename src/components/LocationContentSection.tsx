
import React from "react";
import LocationInfo from "./LocationInfo";
import LocalServiceProviders from "./LocalServiceProviders";
import ServiceLocationMap from "./ServiceLocationMap";
import { ServiceProvider } from "@/data/serviceProviders";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { Card } from "./ui/card";

interface LocationContentSectionProps {
  cityName: string;
  content: {
    weatherImpact: string;
    localChallenges: string;
    specialTips: string;
    mapLocation: string;
  };
  providers: ServiceProvider[];
}

// Sample before/after images for each city
const cityImages: Record<string, { before: string, after: string }> = {
  default: {
    before: "https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?q=80&w=1000&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1618236248279-640f4c829b5b?q=80&w=1000&auto=format&fit=crop"
  },
  delhi: {
    before: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1617814065893-00757125efab?q=80&w=1000&auto=format&fit=crop"
  },
  mumbai: {
    before: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    after: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop"
  }
};

const LocationContentSection = ({ cityName, content, providers }: LocationContentSectionProps) => {
  const lowerCityName = cityName.toLowerCase();
  const images = cityImages[lowerCityName] || cityImages.default;
  
  return (
    <div 
      className="lg:col-span-8"
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content={`ShineDetailers Car Detailing - ${cityName}`} />
      <meta itemProp="description" content={`Professional car detailing services in ${cityName}. We provide exterior detailing, interior cleaning, ceramic coating, and paint protection.`} />
      <meta itemProp="areaServed" content={cityName} />
      <meta itemProp="priceRange" content="₹₹₹" />
      
      <div className="space-y-8">
        <LocationInfo cityName={cityName} content={content} />
        
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">See the Difference in {cityName}</h2>
          <p className="text-muted-foreground mb-6">
            Slide to compare the before and after transformation of a recent car detailing project in {cityName}.
            Our expert detailers can restore your vehicle to showroom condition.
          </p>
          <BeforeAfterSlider 
            beforeImage={images.before} 
            afterImage={images.after}
            beforeLabel="Before Detailing"
            afterLabel="After Detailing"
          />
        </Card>
        
        <LocalServiceProviders city={cityName} providers={providers} />
        
        {/* Rich SEO Content Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Car Detailing Expertise in {cityName}</h2>
          <div className="seo-content">
            <h3>Understanding {cityName}'s Environmental Challenges</h3>
            <p>
              Car owners in {cityName} face unique challenges that make professional detailing essential. The local climate, 
              environmental conditions, and urban factors all contribute to accelerated wear and deterioration of vehicle
              exteriors and interiors.
            </p>
            
            <h3>Premium Detailing Services Available in {cityName}</h3>
            <p>
              At ShineDetailers, we offer a comprehensive range of specialized car detailing services tailored specifically 
              for vehicles in {cityName}:
            </p>
            <ul>
              <li><strong>Exterior Detailing:</strong> Complete surface cleaning, clay bar treatment, paint correction, and protective coating application.</li>
              <li><strong>Interior Detailing:</strong> Deep cleaning of all surfaces, sanitization, and protection of dashboard, seats, and carpets.</li>
              <li><strong>Ceramic Coating:</strong> Long-lasting nano-ceramic protection that shields your vehicle from UV rays, oxidation, and contaminants.</li>
              <li><strong>Paint Protection Film:</strong> Self-healing film that provides the ultimate defense against scratches, chips, and road debris.</li>
              <li><strong>Headlight Restoration:</strong> Professional restoration of cloudy, yellowed headlights to improve visibility and appearance.</li>
            </ul>
            
            <h3>Why {cityName} Vehicles Need Specialized Care</h3>
            <p>
              The unique conditions in {cityName} make regular professional detailing even more important. From protecting against the 
              harsh effects of pollution to maintaining resale value, our services are designed to address these specific concerns.
            </p>
            
            <h3>Recent Car Detailing Projects in {cityName}</h3>
            <p>
              Our team recently completed several major detailing projects in {cityName}, including luxury sedans, SUVs, and vintage cars.
              Each project demonstrates our commitment to excellence and attention to detail, resulting in vehicles that look better than new.
            </p>
            
            <h3>Customer Reviews from {cityName}</h3>
            <blockquote>
              "I've tried multiple detailing services in {cityName}, but none compare to ShineDetailers. Their attention to detail
              and use of premium products made my car look showroom-new again." - Local {cityName} Customer
            </blockquote>
            
            <h3>{cityName} Car Detailing Price Comparison</h3>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Starting Price</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Wash & Wax</td>
                  <td>₹1,499</td>
                  <td>2-3 hours</td>
                </tr>
                <tr>
                  <td>Full Exterior Detailing</td>
                  <td>₹2,999</td>
                  <td>5-6 hours</td>
                </tr>
                <tr>
                  <td>Interior Detailing</td>
                  <td>₹2,499</td>
                  <td>4-5 hours</td>
                </tr>
                <tr>
                  <td>Ceramic Coating</td>
                  <td>₹15,999</td>
                  <td>1-2 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
        
        <ServiceLocationMap cityName={cityName} mapLocation={content.mapLocation} />
      </div>
    </div>
  );
};

export default LocationContentSection;
