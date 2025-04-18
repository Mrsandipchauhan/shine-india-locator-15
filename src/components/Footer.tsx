
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-primary rounded-full opacity-20"></div>
                <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">SD</span>
                </div>
              </div>
              <span className="text-xl font-bold">ShineDetailers</span>
            </div>
            <p className="text-muted-foreground text-sm">
              India's premier car detailing service, providing exceptional care for your vehicle across 20+ locations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/locations" className="text-sm text-muted-foreground hover:text-primary transition-colors">Locations</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/exterior-detailing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Exterior Detailing</Link>
              </li>
              <li>
                <Link to="/services/ceramic-coating" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ceramic Coating</Link>
              </li>
              <li>
                <Link to="/services/interior-detailing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Interior Detailing</Link>
              </li>
              <li>
                <Link to="/services/paint-protection" className="text-sm text-muted-foreground hover:text-primary transition-colors">Paint Protection</Link>
              </li>
              <li>
                <Link to="/services/headlight-restoration" className="text-sm text-muted-foreground hover:text-primary transition-colors">Headlight Restoration</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  #123, MG Road, Bangalore, Karnataka - 560001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary" />
                <a href="tel:+918001234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 800-123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary" />
                <a href="mailto:info@shinedetailers.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@shinedetailers.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ShineDetailers. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
