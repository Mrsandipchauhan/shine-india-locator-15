import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Clock, Phone, Calendar, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import BookingDialog from "@/components/BookingDialog";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import localAreasData from "@/data/localAreasData";
import { serviceProvidersByCity } from "@/data/serviceProviders";
import ServiceBenefits from "@/components/ServiceBenefits";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const defaultImages = {
  before: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop",
  after: "https://images.unsplash.com/photo-1605723517503-3cadb5818bc3?q=80&w=1000&auto=format&fit=crop"
};

const AreaLocation = () => {
  const { areaId } = useParams<{ areaId: string }>();
  const [areaData, setAreaData] = useState<any>(null);
  const [providers, setProviders] = useState<any[]>([]);
  
  useEffect(() => {
    const normalizedAreaId = areaId?.toLowerCase();
    const area = localAreasData.find(area => 
      area.id.toLowerCase() === normalizedAreaId || 
      area.id.toLowerCase().replace(/-/g, '') === normalizedAreaId?.replace(/-/g, '')
    );
    
    if (area) {
      setAreaData(area);
      
      const cityProviders = serviceProvidersByCity[area.parentCity] || [];
      
      const localizedProviders = cityProviders.map((provider, index) => ({
        ...provider,
        id: `${area.id}${index + 1}`,
        name: provider.name.includes(area.name) ? provider.name : `${provider.name} - ${area.name} Branch`,
        address: provider.address.includes(area.name) ? provider.address : `${area.content.serviceAreas[index % area.content.serviceAreas.length]}, ${area.name}`
      }));
      
      setProviders(localizedProviders);
      
      document.title = area.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", area.description);
      }
    } else {
      console.log(`Area not found for ID: ${areaId}`);
      console.log("Available areas:", localAreasData.map(a => a.id));
    }
  }, [areaId]);
  
  if (!areaData) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold">Location Not Found</h1>
          <p className="mt-4">Sorry, we couldn't find information for this location.</p>
          <Link to="/locations">
            <Button className="mt-8">View All Locations</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1635770311293-b35546d6a583?q=80&w=2070&auto=format&fit=crop')",
            filter: "brightness(0.4) contrast(1.2)"
          }}
        ></div>
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300 mb-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/locations" className="hover:text-primary">Locations</Link>
              <span>/</span>
              <span className="text-primary">{areaData.name}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
              Car Detailing Near Me {areaData.name}
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional car detailing services in {areaData.name}. Our certified technicians use premium products and advanced techniques to restore and protect your vehicle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mobile-tap-target">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Appointment in {areaData.name}
              </Button>
              <a href={`tel:${areaData.phoneNumber}`}>
                <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
                  <Phone size={16} className="mr-2" /> Call {areaData.phoneNumber}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-card border-border mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Car Detailing Services in {areaData.name}</h2>
                <div className="space-y-4">
                  <p>{areaData.content.introduction}</p>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Affordable Service Packages</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">Basic Package</span>
                          <span className="text-primary">₹1,499</span>
                        </div>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-primary" />
                            Exterior Wash
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-primary" />
                            Interior Vacuum
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-primary" />
                            Dashboard Cleaning
                          </li>
                        </ul>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">Premium Package</span>
                          <span className="text-primary">₹2,999</span>
                        </div>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-primary" />
                            Deep Exterior Cleaning
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-primary" />
                            Interior Deep Clean
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-primary" />
                            Engine Bay Cleaning
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-6">Local Challenges for {areaData.name} Vehicles</h3>
                  <p>{areaData.content.localChallenges}</p>
                  
                  <h3 className="text-xl font-semibold mt-6">Special Tips for {areaData.name} Car Owners</h3>
                  <p>{areaData.content.specialTips}</p>
                  
                  <div className="mt-8 bg-primary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Special Offers for {areaData.name} Residents</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Star className="text-primary" size={18} />
                        20% off on first-time bookings
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="text-primary" size={18} />
                        Free interior sanitization with premium packages
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="text-primary" size={18} />
                        Complimentary pick-up and drop service
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Results You Can Expect in {areaData.name}</h2>
                <p className="mb-6">
                  See the dramatic transformation our detailing services can achieve. Slide to compare before and after results from a recent {areaData.name} customer.
                </p>
                <BeforeAfterSlider
                  beforeImage={defaultImages.before}
                  afterImage={defaultImages.after}
                  beforeLabel="Before Detailing"
                  afterLabel="After Detailing"
                />
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Areas We Serve in {areaData.name}</h2>
                <p className="mb-4">
                  Our mobile detailing services are available throughout {areaData.name}, including the following areas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {areaData.content.serviceAreas.map((area: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2 bg-background/50 p-2 rounded-lg">
                      <MapPin size={16} className="text-primary" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <h2 className="text-2xl font-bold mb-6">Our Services in {areaData.name}</h2>
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
                    Complete exterior washing, clay bar treatment, paint correction, and protective coating customized for {areaData.name}'s local conditions.
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
                    Deep cleaning, sanitization, and conditioning of all interior surfaces and materials with special attention to {areaData.name}'s specific environmental factors.
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
                    Professional application of ceramic coating with 2-5 years of protection, specially formulated to withstand {areaData.name}'s local environmental challenges.
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
                    Premium self-healing film to protect your vehicle from scratches, chips, and {areaData.name}'s specific environmental hazards.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Car Detailing Providers in {areaData.name}</h2>
            {providers.length > 0 ? (
              <div className="space-y-4 mb-8">
                {providers.map((provider) => (
                  <Card key={provider.id} className="bg-card border-border overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                        <div className="md:col-span-2 bg-primary/10 p-4 flex flex-row md:flex-col items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary">{provider.rating}</div>
                            <div className="flex justify-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className={i < Math.floor(provider.rating) ? "fill-primary text-primary" : "text-gray-500"}
                                />
                              ))}
                            </div>
                            <div className="text-xs mt-1 text-muted-foreground">Top Rated</div>
                          </div>
                        </div>
                        
                        <div className="md:col-span-10 p-4">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div>
                              <h3 className="font-bold text-lg">{provider.name}</h3>
                              
                              <div className="flex items-start mt-2 space-x-2">
                                <MapPin size={16} className="text-primary mt-0.5" />
                                <span className="text-sm text-muted-foreground">{provider.address}</span>
                              </div>
                              
                              <div className="flex items-center mt-2 space-x-2">
                                <Phone size={16} className="text-primary" />
                                <a 
                                  href={`tel:${provider.phone.replace(/\D/g, '')}`}
                                  className="text-sm hover:text-primary transition-colors"
                                >
                                  {provider.phone}
                                </a>
                              </div>
                              
                              <div className="flex items-center mt-2 space-x-2">
                                <Clock size={16} className="text-primary" />
                                <span className="text-sm text-muted-foreground">{provider.openHours}</span>
                              </div>
                              
                              <div className="mt-3 flex flex-wrap gap-2">
                                {provider.services.map((service: string, index: number) => (
                                  <div key={index} className="text-xs bg-background/50 px-2 py-1 rounded-full">
                                    {service}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="mt-4 md:mt-0 flex flex-col gap-2">
                              <a href={`tel:${provider.phone.replace(/\D/g, '')}`}>
                                <Button className="w-full bg-primary hover:bg-primary/90">
                                  <Phone size={16} className="mr-2" /> Call Now
                                </Button>
                              </a>
                              <a href={`https://maps.google.com/?q=${encodeURIComponent(provider.address)}`} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="w-full">
                                  <MapPin size={16} className="mr-2" /> Directions
                                </Button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-6">
                  <p>No providers found in {areaData.name} at the moment. Please call our main number to schedule an appointment.</p>
                </CardContent>
              </Card>
            )}
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Find Us in {areaData.name}</h2>
              <GoogleMapEmbed 
                address={areaData.address}
                city={areaData.name}
                height="400px"
              />
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Car Detailing in Nearby Areas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {areaData.content.nearbyLocations.map((location: string, index: number) => {
                  const matchedArea = localAreasData.find(area => 
                    area.name.toLowerCase() === location.toLowerCase()
                  );
                  
                  return (
                    <Card key={index} className="bg-card border-border">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <MapPin size={16} className="text-primary mr-2" />
                            <span>{location}</span>
                          </div>
                          {matchedArea && (
                            <Link to={`/area/${matchedArea.id}`} className="text-primary hover:underline flex items-center text-sm">
                              View <ArrowRight size={14} className="ml-1" />
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">FAQs About Car Detailing in {areaData.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">How much does car detailing cost in {areaData.name}?</h3>
                    <p className="text-sm text-muted-foreground">
                      Pricing in {areaData.name} starts from ₹1,499 for basic packages and ranges up to ₹25,000 for premium ceramic coating packages, depending on your vehicle size and condition.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">How often should I detail my car in {areaData.name}?</h3>
                    <p className="text-sm text-muted-foreground">
                      For {areaData.name}'s specific environmental conditions, we recommend a full detailing every 3-4 months, with more frequent exterior washes especially during {areaData.name}'s challenging seasons.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Do you offer mobile detailing in {areaData.name}?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, we offer convenient mobile detailing services throughout {areaData.name}. Our fully-equipped mobile units can provide almost all services at your home or office.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">What makes your {areaData.name} detailing services unique?</h3>
                    <p className="text-sm text-muted-foreground">
                      We've developed specialized treatments for {areaData.name}'s specific environmental challenges. Our certified technicians have extensive local experience and use premium products specifically selected for local conditions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div>
            <div className="sticky top-24 space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Book Your Car Detailing in {areaData.name}</h3>
                  <BookingForm selectedCity={areaData.name} />
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{areaData.name} Service Center</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div className="ml-3">
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">{areaData.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div className="ml-3">
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">{areaData.phoneNumber}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <a href={`tel:${areaData.phoneNumber}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Phone size={16} className="mr-2" /> Call Us
                      </Button>
                    </a>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(areaData.address)}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        <MapPin size={16} className="mr-2" /> Get Directions
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <ServiceBenefits cityName={areaData.name} />
            </div>
          </div>
        </div>
      </div>
      
      <BookingDialog />
      <Footer />
    </div>
  );
};

export default AreaLocation;
