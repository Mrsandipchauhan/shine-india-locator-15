
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
            <Link to="/" className="px-3 py-2 text-sm text-foreground/90 hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="px-3 py-2 text-sm text-foreground/90 hover:text-primary transition-colors">Services</Link>
            <Link to="/locations" className="px-3 py-2 text-sm text-foreground/90 hover:text-primary transition-colors">Locations</Link>
            <Link to="/gallery" className="px-3 py-2 text-sm text-foreground/90 hover:text-primary transition-colors">Gallery</Link>
            <Link to="/about" className="px-3 py-2 text-sm text-foreground/90 hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="px-3 py-2 text-sm text-foreground/90 hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-foreground/80">
              <Phone size={16} className="text-primary" />
              <span className="text-sm">+91 800-123-4567</span>
            </div>
            <Button className="bg-primary hover:bg-primary/90" onClick={() => navigate('/book-service')}>Book Now</Button>
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
            <Link to="/" className="block px-3 py-2 text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="block px-3 py-2 text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/locations" className="block px-3 py-2 text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Locations</Link>
            <Link to="/gallery" className="block px-3 py-2 text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link to="/about" className="block px-3 py-2 text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block px-3 py-2 text-foreground/90 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => {
              navigate('/book-service');
              setIsMenuOpen(false);
            }}>Book Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
