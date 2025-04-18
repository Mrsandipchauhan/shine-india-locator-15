
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AreaListingSection from "@/components/AreaListingSection";
import citiesData from "@/data/citiesData";

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCities = searchTerm
    ? citiesData.filter(city => 
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : citiesData;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/60 z-10"></div>
        
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop')",
            filter: "brightness(0.4) contrast(1.2)"
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
              Find Car Detailing Services Near You
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              ShineDetailers provides premium car detailing services across major cities in India. 
              Find your city below to discover our services in your area.
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search your city..."
                className="pl-10 pr-4 py-6 text-foreground bg-background/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Cities Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city) => (
            <Link 
              key={city.id} 
              to={`/locations/${city.id}`}
              className="group relative overflow-hidden rounded-lg bg-card border border-border transition-all hover:border-primary/50"
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              
              {/* City image background */}
              <div 
                className="w-full h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ 
                  backgroundImage: `url('https://source.unsplash.com/featured/?${city.name},city')`,
                  filter: "brightness(0.7) contrast(1.1)"
                }}
              ></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center mb-2">
                  <MapPin size={20} className="text-primary mr-2" />
                  <h3 className="text-xl font-bold text-white">{city.name}</h3>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Professional car detailing services in {city.name}
                </p>
                <span className="inline-block text-sm font-medium text-primary group-hover:underline">
                  View Services in {city.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Local Areas Section */}
      <AreaListingSection />
      
      {/* Benefits Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose ShineDetailers Nationwide?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No matter which city you're in, ShineDetailers delivers the same premium quality service with these exclusive benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <CheckCircle size={24} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">Certified Technicians</h3>
              <p className="text-sm text-muted-foreground">
                All our detailing professionals are certified and regularly trained in the latest techniques.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <ShieldCheck size={24} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">Premium Products</h3>
              <p className="text-sm text-muted-foreground">
                We use only the highest quality detailing products and materials for lasting results.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Sparkles size={24} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">Satisfaction Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                If you're not 100% satisfied with our service, we'll make it right at no additional cost.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Calendar size={24} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">Convenient Booking</h3>
              <p className="text-sm text-muted-foreground">
                Easy online scheduling and flexible appointment times to fit your busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our nationwide services? Find answers to common questions below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">Do your services vary by location?</h3>
            <p className="text-sm text-muted-foreground">
              While our core services remain consistent nationwide, we offer location-specific treatments tailored to each city's unique environmental conditions.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">Can I use my service package in different cities?</h3>
            <p className="text-sm text-muted-foreground">
              Yes, our premium packages are transferable between all ShineDetailers locations across India, making it convenient for customers who travel frequently.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">How far in advance should I book?</h3>
            <p className="text-sm text-muted-foreground">
              We recommend booking 2-3 days in advance for regular services and 5-7 days for premium services like ceramic coating to ensure availability.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">Do you offer mobile detailing in all cities?</h3>
            <p className="text-sm text-muted-foreground">
              Mobile detailing is available in most major cities, but coverage areas may vary. Contact your local ShineDetailers to confirm mobile service availability.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// For the missing import in the component
const CheckCircle = ({ size = 24, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
};

const ShieldCheck = ({ size = 24, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
};

const Sparkles = ({ size = 24, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
};

export default Locations;
