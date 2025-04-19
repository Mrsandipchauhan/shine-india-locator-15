
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Home, Shield, Star, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between flex-wrap">
          <Link to="/" className="flex items-center space-x-2 z-10">
            <div className="w-10 h-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-80 animate-pulse-glow"></div>
              <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SD</span>
              </div>
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">ShineDetailers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/') ? 'text-primary bg-primary/5' : 'text-white/90 hover:text-primary hover:bg-white/5'}`}
            >
              <div className="flex items-center">
                <Home size={16} className="mr-2" />
                Home
              </div>
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-3 py-2 text-sm font-medium ${isActive('/services') ? 'text-primary' : 'text-white/90'}`}>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-6 w-[600px] bg-card/95 backdrop-blur-xl border border-border/30 rounded-xl">
                      <Link to="/services/exterior-detailing" className="group block space-y-2 p-4 rounded-lg hover:bg-primary/5">
                        <div className="flex items-start">
                          <div className="mt-0.5 mr-3 bg-primary/10 p-2 rounded-lg text-primary">
                            <Shield size={18} />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium group-hover:text-primary">Exterior Detailing</h3>
                            <p className="text-xs text-muted-foreground">Complete exterior restoration and protection</p>
                          </div>
                        </div>
                      </Link>
                      <Link to="/services/ceramic-coating" className="group block space-y-2 p-4 rounded-lg hover:bg-primary/5">
                        <div className="flex items-start">
                          <div className="mt-0.5 mr-3 bg-primary/10 p-2 rounded-lg text-primary">
                            <Shield size={18} />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium group-hover:text-primary">Ceramic Coating</h3>
                            <p className="text-xs text-muted-foreground">Long-lasting nano-ceramic protection</p>
                          </div>
                        </div>
                      </Link>
                      <Link to="/services/interior-detailing" className="group block space-y-2 p-4 rounded-lg hover:bg-primary/5">
                        <div className="flex items-start">
                          <div className="mt-0.5 mr-3 bg-primary/10 p-2 rounded-lg text-primary">
                            <Star size={18} />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium group-hover:text-primary">Interior Detailing</h3>
                            <p className="text-xs text-muted-foreground">Deep interior cleaning and protection</p>
                          </div>
                        </div>
                      </Link>
                      <Link to="/services/paint-protection" className="group block space-y-2 p-4 rounded-lg hover:bg-primary/5">
                        <div className="flex items-start">
                          <div className="mt-0.5 mr-3 bg-primary/10 p-2 rounded-lg text-primary">
                            <Settings size={18} />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium group-hover:text-primary">Paint Protection</h3>
                            <p className="text-xs text-muted-foreground">Premium PPF installation</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link 
              to="/locations" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/locations') ? 'text-primary bg-primary/5' : 'text-white/90 hover:text-primary hover:bg-white/5'}`}
            >
              Locations
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary bg-primary/5' : 'text-white/90 hover:text-primary hover:bg-white/5'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/contact') ? 'text-primary bg-primary/5' : 'text-white/90 hover:text-primary hover:bg-white/5'}`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white">
              <div className="p-2 rounded-full bg-primary/10">
                <Phone size={16} className="text-primary" />
              </div>
              <a href="tel:+918001234567" className="text-sm font-medium hover:text-primary transition-colors">+91 800-123-4567</a>
            </div>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-sm font-medium px-5 py-2 rounded-lg">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/5"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link to="/" className="flex items-center space-x-2 px-4 py-3 rounded-lg text-white hover:bg-primary/5 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <Home size={18} />
              <span>Home</span>
            </Link>
            
            <div className="space-y-2">
              <div className="font-medium px-4 py-2 text-white/80">Services</div>
              <Link to="/services/exterior-detailing" className="flex items-center space-x-2 px-6 py-3 rounded-lg text-white/70 hover:text-primary hover:bg-primary/5 transition-colors" onClick={() => setIsMenuOpen(false)}>
                <Shield size={16} />
                <span>Exterior Detailing</span>
              </Link>
              <Link to="/services/ceramic-coating" className="flex items-center space-x-2 px-6 py-3 rounded-lg text-white/70 hover:text-primary hover:bg-primary/5 transition-colors" onClick={() => setIsMenuOpen(false)}>
                <Shield size={16} />
                <span>Ceramic Coating</span>
              </Link>
              <Link to="/services/interior-detailing" className="flex items-center space-x-2 px-6 py-3 rounded-lg text-white/70 hover:text-primary hover:bg-primary/5 transition-colors" onClick={() => setIsMenuOpen(false)}>
                <Star size={16} />
                <span>Interior Detailing</span>
              </Link>
              <Link to="/services/paint-protection" className="flex items-center space-x-2 px-6 py-3 rounded-lg text-white/70 hover:text-primary hover:bg-primary/5 transition-colors" onClick={() => setIsMenuOpen(false)}>
                <Settings size={16} />
                <span>Paint Protection</span>
              </Link>
            </div>
            
            <Link to="/locations" className="flex items-center space-x-2 px-4 py-3 rounded-lg text-white hover:bg-primary/5 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <span>Locations</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 px-4 py-3 rounded-lg text-white hover:bg-primary/5 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 px-4 py-3 rounded-lg text-white hover:bg-primary/5 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <span>Contact</span>
            </Link>
            
            <div className="flex items-center space-x-3 px-4 py-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Phone size={16} className="text-primary" />
              </div>
              <a href="tel:+918001234567" className="text-sm hover:text-primary transition-colors">+91 800-123-4567</a>
            </div>
            
            <Link to="/contact" className="block px-4" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 py-6">Book Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
