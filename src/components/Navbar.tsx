
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Home } from "lucide-react";
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
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">SD</span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">ShineDetailers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm ${isActive('/') ? 'text-primary' : 'text-foreground/90'} hover:text-primary transition-colors flex items-center`}
            >
              <Home size={16} className="mr-1" />
              Home
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-6 w-[600px]">
                      <Link to="/services/exterior-detailing" className="group block space-y-2 p-4 rounded-lg hover:bg-muted">
                        <h3 className="text-sm font-medium group-hover:text-primary">Exterior Detailing</h3>
                        <p className="text-xs text-muted-foreground">Complete exterior restoration and protection</p>
                      </Link>
                      <Link to="/services/ceramic-coating" className="group block space-y-2 p-4 rounded-lg hover:bg-muted">
                        <h3 className="text-sm font-medium group-hover:text-primary">Ceramic Coating</h3>
                        <p className="text-xs text-muted-foreground">Long-lasting nano-ceramic protection</p>
                      </Link>
                      <Link to="/services/interior-detailing" className="group block space-y-2 p-4 rounded-lg hover:bg-muted">
                        <h3 className="text-sm font-medium group-hover:text-primary">Interior Detailing</h3>
                        <p className="text-xs text-muted-foreground">Deep interior cleaning and protection</p>
                      </Link>
                      <Link to="/services/paint-protection" className="group block space-y-2 p-4 rounded-lg hover:bg-muted">
                        <h3 className="text-sm font-medium group-hover:text-primary">Paint Protection</h3>
                        <p className="text-xs text-muted-foreground">Premium PPF installation</p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link 
              to="/locations" 
              className={`px-3 py-2 text-sm ${isActive('/locations') ? 'text-primary' : 'text-foreground/90'} hover:text-primary transition-colors`}
            >
              Locations
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm ${isActive('/about') ? 'text-primary' : 'text-foreground/90'} hover:text-primary transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm ${isActive('/contact') ? 'text-primary' : 'text-foreground/90'} hover:text-primary transition-colors`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-foreground/80">
              <Phone size={16} className="text-primary" />
              <a href="tel:+918001234567" className="text-sm hover:text-primary transition-colors">+91 800-123-4567</a>
            </div>
            <Link to="/services">
              <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground/80 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link to="/" className="flex items-center space-x-2 px-3 py-2 text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              <Home size={16} className="mr-1" />
              Home
            </Link>
            <div className="space-y-2">
              <div className="font-medium px-3 py-2">Services</div>
              <Link to="/services/exterior-detailing" className="block px-6 py-2 text-sm text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Exterior Detailing</Link>
              <Link to="/services/ceramic-coating" className="block px-6 py-2 text-sm text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Ceramic Coating</Link>
              <Link to="/services/interior-detailing" className="block px-6 py-2 text-sm text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Interior Detailing</Link>
              <Link to="/services/paint-protection" className="block px-6 py-2 text-sm text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Paint Protection</Link>
            </div>
            <Link to="/locations" className="block px-3 py-2 text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Locations</Link>
            <Link to="/about" className="block px-3 py-2 text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block px-3 py-2 text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/services">
              <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
