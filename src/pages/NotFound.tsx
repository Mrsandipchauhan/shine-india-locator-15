
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="relative mb-8 mx-auto w-32 h-32">
            <div className="absolute inset-0 bg-primary rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute inset-3 bg-background border border-primary/20 rounded-full flex items-center justify-center">
              <Search size={42} className="text-primary opacity-70" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          
          <p className="text-muted-foreground mb-8">
            The page might have been moved, deleted, or maybe you typed the URL incorrectly.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                <Home size={16} className="mr-2" /> Back to Home
              </Button>
            </Link>
            <Link to="/locations">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Find Nearest Location
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
