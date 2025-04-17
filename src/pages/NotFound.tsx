
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/ui/layout";
import { MapPin, Search, Home, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 min-h-[calc(100vh-200px)]">
        <Card className="max-w-3xl mx-auto border border-border">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <div className="text-4xl font-bold text-primary">404</div>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We're sorry, but the page you're looking for doesn't exist or has been moved.
              Please check the URL or try one of the options below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Link to="/" className="flex flex-col items-center p-4 rounded-lg hover:bg-muted transition-colors">
                <Home size={24} className="text-primary mb-2" />
                <span className="font-medium">Return Home</span>
              </Link>
              
              <Link to="/locations" className="flex flex-col items-center p-4 rounded-lg hover:bg-muted transition-colors">
                <MapPin size={24} className="text-primary mb-2" />
                <span className="font-medium">Find Locations</span>
              </Link>
              
              <Link to="/services" className="flex flex-col items-center p-4 rounded-lg hover:bg-muted transition-colors">
                <Search size={24} className="text-primary mb-2" />
                <span className="font-medium">Browse Services</span>
              </Link>
            </div>
            
            <Button variant="ghost" onClick={() => window.history.back()} className="flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
