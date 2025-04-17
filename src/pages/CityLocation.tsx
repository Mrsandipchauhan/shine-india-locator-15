
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Clock, Phone, Calendar, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import citiesData from "@/data/citiesData";

const CityLocation = () => {
  const { cityId } = useParams<{ cityId: string }>();
  
  // Find the city data or default to Delhi if not found
  const cityData = citiesData.find(city => city.id === cityId) || citiesData[0];

  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = `${cityData.title} - ShineDetailers`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", cityData.metaDescription);
    }
  }, [cityData]);

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
            backgroundImage: "url('https://images.unsplash.com/photo-1583508805133-8fd01e121c8a?q=80&w=2070&auto=format&fit=crop')",
            filter: "brightness(0.4) contrast(1.2)"
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-20">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/locations" className="hover:text-primary">Locations</Link>
              <span>/</span>
              <span className="text-primary">{cityData.name}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
              Car Detailing Services in {cityData.name}
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              {cityData.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Appointment in {cityData.name}
              </Button>
              <a href={`tel:${cityData.phoneNumber}`}>
                <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
                  <Phone size={16} className="mr-2" /> Call {cityData.phoneNumber}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {/* Intro Content */}
            <div className="prose prose-lg prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{ __html: cityData.content }} />
            
            {/* Services Grid */}
            <h2 className="text-2xl font-bold mb-6">Our Services in {cityData.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <CheckCircle size={20} className="text-primary" />
                    </div>
                    <h3 className="font-semibold">Exterior Detailing</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete exterior washing, clay bar treatment, paint correction, and protective coating.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <CheckCircle size={20} className="text-primary" />
                    </div>
                    <h3 className="font-semibold">Interior Detailing</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Deep cleaning, sanitization, and conditioning of all interior surfaces and materials.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <CheckCircle size={20} className="text-primary" />
                    </div>
                    <h3 className="font-semibold">Ceramic Coating</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professional application of ceramic coating with 2-5 years of protection for your vehicle.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <CheckCircle size={20} className="text-primary" />
                    </div>
                    <h3 className="font-semibold">Paint Protection Film</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Premium self-healing film to protect your vehicle from scratches and chips.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Testimonials */}
            <h2 className="text-2xl font-bold mb-6">What Our {cityData.name} Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    "The team at ShineDetailers {cityData.name} did an incredible job on my SUV. The ceramic coating made it look better than when I first bought it!"
                  </p>
                  <p className="font-semibold text-sm">Rahul M. - {cityData.name}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    "I've tried several detailing services in {cityData.name}, but none compare to ShineDetailers. Their attention to detail is unmatched!"
                  </p>
                  <p className="font-semibold text-sm">Priya S. - {cityData.name}</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Sidebar Column */}
          <div>
            {/* Location Info Card */}
            <Card className="bg-card border-border mb-6 sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{cityData.name} Service Center</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">{cityData.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium">Service Hours</p>
                      <p className="text-sm text-muted-foreground">{cityData.serviceHours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{cityData.phoneNumber}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Calendar size={16} className="mr-2" /> Book Appointment
                  </Button>
                  <a href={`tel:${cityData.phoneNumber}`}>
                    <Button variant="outline" className="w-full">
                      <Phone size={16} className="mr-2" /> Call Us
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* Popular Locations */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Popular Areas We Serve in {cityData.name}</h3>
                <ul className="space-y-2">
                  {cityData.popularLocations.map((location, index) => (
                    <li key={index} className="flex items-center">
                      <MapPin size={16} className="text-primary mr-2" />
                      <span className="text-sm">{location}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-card py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions About Car Detailing in {cityData.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">How often should I detail my car in {cityData.name}?</h3>
              <p className="text-sm text-muted-foreground">
                For {cityData.name}'s specific conditions, we recommend a full detailing every 3-4 months, with more frequent exterior washes due to local environmental factors.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">How long does a full detailing service take?</h3>
              <p className="text-sm text-muted-foreground">
                A comprehensive detailing service typically takes 4-8 hours depending on your vehicle's size and condition. We offer loaner vehicles for your convenience.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Do you offer mobile detailing in {cityData.name}?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, we offer mobile detailing services throughout {cityData.name} for your convenience. Contact us to check availability in your specific area.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">What makes ShineDetailers different from other services in {cityData.name}?</h3>
              <p className="text-sm text-muted-foreground">
                We use only premium products, employ certified technicians, and have developed specific treatments for {cityData.name}'s unique environmental conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CityLocation;
