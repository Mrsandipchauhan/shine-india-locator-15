
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

// Top cities in India by car ownership
const majorCities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", 
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
  "Chandigarh", "Coimbatore", "Nagpur", "Surat", "Indore",
  "Bhopal", "Patna", "Vadodara", "Guwahati", "Kochi"
];

// Group cities into columns
const cityGroups = [
  majorCities.slice(0, 5),
  majorCities.slice(5, 10),
  majorCities.slice(10, 15),
  majorCities.slice(15, 20)
];

const Footer = () => {
  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About ShineDetailers</h3>
            <p className="text-muted-foreground text-sm mb-4">
              India's premier car detailing service, offering professional car care solutions with 
              certified technicians and premium products in 20+ cities across India.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/exterior-detailing" className="text-muted-foreground hover:text-primary transition-colors">
                  Exterior Detailing
                </Link>
              </li>
              <li>
                <Link to="/services/interior-detailing" className="text-muted-foreground hover:text-primary transition-colors">
                  Interior Detailing
                </Link>
              </li>
              <li>
                <Link to="/services/ceramic-coating" className="text-muted-foreground hover:text-primary transition-colors">
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link to="/services/paint-protection" className="text-muted-foreground hover:text-primary transition-colors">
                  Paint Protection Film
                </Link>
              </li>
              <li>
                <Link to="/services/headlight-restoration" className="text-muted-foreground hover:text-primary transition-colors">
                  Headlight Restoration
                </Link>
              </li>
              <li>
                <Link to="/services/engine-detailing" className="text-muted-foreground hover:text-primary transition-colors">
                  Engine Bay Detailing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  #123, ShineDetailers HQ, MG Road,<br />
                  Bangalore, Karnataka 560001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 800-123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@shinedetailers.in</span>
              </li>
            </ul>
          </div>

          {/* Cities Dropdown */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {cityGroups.map((group, groupIndex) => (
                <ul key={groupIndex} className="space-y-2">
                  {group.map((city) => (
                    <li key={city}>
                      <Link 
                        to={`/locations/${city.toLowerCase()}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {city}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} ShineDetailers. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
