
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const contactOffices = [
  {
    city: "Delhi",
    address: "123 Connaught Place, New Delhi - 110001",
    phone: "+91 11-4567-8900",
    email: "delhi@shinedetailers.com",
    hours: "Mon-Sat: 9AM - 7PM, Sun: 10AM - 5PM"
  },
  {
    city: "Mumbai",
    address: "456 Andheri West, Mumbai - 400053",
    phone: "+91 22-4567-8901",
    email: "mumbai@shinedetailers.com",
    hours: "Mon-Sat: 9AM - 7PM, Sun: 10AM - 5PM"
  },
  {
    city: "Bangalore",
    address: "789 Indiranagar, Bangalore - 560038",
    phone: "+91 80-4567-8902",
    email: "bangalore@shinedetailers.com",
    hours: "Mon-Sat: 9AM - 7PM, Sun: 10AM - 5PM"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast.success("Message sent successfully", {
      description: "We'll get back to you within 24 hours."
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: ""
    });
  };
  
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
            backgroundImage: "url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop')",
            filter: "brightness(0.4) contrast(1.2)"
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions or ready to book your appointment? Reach out to our team.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">Phone Number</label>
                  <Input 
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-muted-foreground mb-1">City</label>
                  <Input 
                    id="city"
                    name="city"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full md:w-auto">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Corporate Head Office</h3>
              <div className="flex items-start mb-3">
                <MapPin size={20} className="text-primary mr-3 mt-1" />
                <div>
                  <p className="font-medium">ShineDetailers Headquarters</p>
                  <p className="text-muted-foreground">101 Premium Plaza, M.G. Road, New Delhi - 110001, India</p>
                </div>
              </div>
              <div className="flex items-start mb-3">
                <Phone size={20} className="text-primary mr-3 mt-1" />
                <div>
                  <p className="font-medium">Customer Support</p>
                  <p className="text-muted-foreground">+91 800-123-4567 (Toll Free)</p>
                </div>
              </div>
              <div className="flex items-start mb-3">
                <Mail size={20} className="text-primary mr-3 mt-1" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-muted-foreground">info@shinedetailers.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={20} className="text-primary mr-3 mt-1" />
                <div>
                  <p className="font-medium">Customer Support Hours</p>
                  <p className="text-muted-foreground">Monday to Sunday: 8:00 AM - 8:00 PM IST</p>
                </div>
              </div>
            </div>
            
            {/* Major City Offices */}
            <h3 className="text-xl font-semibold mb-4">Our Major Locations</h3>
            <div className="grid grid-cols-1 gap-4">
              {contactOffices.map((office, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{office.city} Office</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex items-start">
                        <MapPin size={16} className="text-primary mr-2 mt-0.5" />
                        <span className="text-muted-foreground">{office.address}</span>
                      </div>
                      <div className="flex items-start">
                        <Phone size={16} className="text-primary mr-2 mt-0.5" />
                        <span className="text-muted-foreground">{office.phone}</span>
                      </div>
                      <div className="flex items-start">
                        <Mail size={16} className="text-primary mr-2 mt-0.5" />
                        <span className="text-muted-foreground">{office.email}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock size={16} className="text-primary mr-2 mt-0.5" />
                        <span className="text-muted-foreground">{office.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Live Chat Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageSquare size={32} className="text-primary mr-3" />
            <h2 className="text-3xl font-bold">Need Immediate Assistance?</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our customer support team is available for live chat during business hours.
            Get your questions answered in real-time.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Live Chat
          </Button>
        </div>
      </div>
      
      {/* FAQ Quick Links */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our services, booking process, and policies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Card className="hover:border-primary transition-colors">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Booking & Appointments</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about our booking process, rescheduling policy, and appointment confirmation.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary">
                View FAQ
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:border-primary transition-colors">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Services & Pricing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Information about our service packages, pricing structure, and custom detailing options.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary">
                View FAQ
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:border-primary transition-colors">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Satisfaction Guarantee</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Details about our service guarantee, quality standards, and feedback process.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary">
                View FAQ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
