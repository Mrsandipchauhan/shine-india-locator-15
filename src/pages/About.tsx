import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Car, Wrench, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const [selectedTab, setSelectedTab] = useState<'story' | 'mission' | 'team'>('story');
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/60 z-10"></div>
        
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2070&auto=format&fit=crop')",
            filter: "brightness(0.4) contrast(1.2)"
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              About ShineDetailers
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              India's premier car detailing service committed to excellence and perfection.
            </p>
          </div>
        </div>
      </div>
      
      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 border-b border-border overflow-x-auto">
          <button 
            className={`px-6 py-3 font-medium ${selectedTab === 'story' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
            onClick={() => setSelectedTab('story')}
          >
            Our Story
          </button>
          <button 
            className={`px-6 py-3 font-medium ${selectedTab === 'mission' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
            onClick={() => setSelectedTab('mission')}
          >
            Mission & Values
          </button>
          <button 
            className={`px-6 py-3 font-medium ${selectedTab === 'team' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
            onClick={() => setSelectedTab('team')}
          >
            Our Team
          </button>
        </div>
        
        {/* Our Story */}
        {selectedTab === 'story' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-muted-foreground mb-4">
                ShineDetailers was founded in 2015 by a group of automotive enthusiasts who saw a gap in the market for premium car detailing services in India. What started as a small garage operation in Delhi has now grown into a nationwide network with over 20 locations across the country.
              </p>
              <p className="text-muted-foreground mb-4">
                Our founders' passion for cars and commitment to excellence has been the driving force behind our rapid growth. We've built a reputation for exceptional quality, unmatched expertise, and personalized service that keeps our customers coming back.
              </p>
              <p className="text-muted-foreground">
                Today, ShineDetailers is recognized as India's leading car detailing service, trusted by everyday car owners and exotic car collectors alike. Our journey continues as we expand to new cities and introduce innovative detailing solutions.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2069&auto=format&fit=crop" 
                alt="ShineDetailers team at work" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}
        
        {/* Mission & Values */}
        {selectedTab === 'mission' && (
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-xl text-muted-foreground">
                At ShineDetailers, our mission is to provide exceptional car care that preserves the beauty and value of every vehicle we touch. We are guided by a set of core values that shape everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                  <p className="text-muted-foreground">
                    We never compromise on quality. From the products we use to the techniques we employ, excellence is our standard.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                  <p className="text-muted-foreground">
                    We operate with honesty and transparency in every interaction with our customers and partners.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                  <p className="text-muted-foreground">
                    We build lasting relationships with our customers by exceeding expectations and providing personalized service.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Car size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Environmental Responsibility</h4>
                    <p className="text-muted-foreground text-sm">
                      We use eco-friendly products and water-saving techniques to minimize our environmental impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Wrench size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Continuous Innovation</h4>
                    <p className="text-muted-foreground text-sm">
                      We constantly research and adopt the latest detailing technologies and techniques.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <BookOpen size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Education & Training</h4>
                    <p className="text-muted-foreground text-sm">
                      We invest in continuous training for our technicians to maintain the highest standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Shield size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Satisfaction Guarantee</h4>
                    <p className="text-muted-foreground text-sm">
                      We stand behind our work with a 100% satisfaction guarantee on all our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Our Team */}
        {selectedTab === 'team' && (
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">Meet Our Leadership</h2>
              <p className="text-xl text-muted-foreground">
                Our success is driven by a team of passionate professionals dedicated to delivering exceptional service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                    alt="Rajiv Sharma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Rajiv Sharma</h3>
                <p className="text-primary mb-2">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  A car enthusiast with over 15 years of experience in the automotive industry.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                    alt="Priya Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Priya Patel</h3>
                <p className="text-primary mb-2">Head of Operations</p>
                <p className="text-muted-foreground text-sm">
                  Manages our nationwide network of detailing centers with precision and excellence.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop" 
                    alt="Vikram Singh" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Vikram Singh</h3>
                <p className="text-primary mb-2">Technical Director</p>
                <p className="text-muted-foreground text-sm">
                  An expert in detailing with international certification and training experience.
                </p>
              </div>
            </div>
            
            <div className="bg-primary/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Join Our Team</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                We're always looking for talented individuals who are passionate about cars and committed to excellence. Explore career opportunities with ShineDetailers.
              </p>
              <Button size="lg">
                View Career Opportunities
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Call to Action */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Premium Car Detailing</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to give your car the care it deserves? Book a detailing appointment with the experts at ShineDetailers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 min-w-40">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/locations">
              <Button variant="outline" size="lg" className="min-w-40">
                Find a Location
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
