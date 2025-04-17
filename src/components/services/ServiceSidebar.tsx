
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceSidebarProps {
  price: string;
  title: string;
  onBookingClick: () => void;
  relatedServices: Array<{
    id: string;
    title: string;
    price: string;
    image: string;
  }>;
}

const ServiceSidebar = ({ price, title, onBookingClick, relatedServices }: ServiceSidebarProps) => {
  return (
    <div className="sticky top-24 space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">Service Details</h3>
          <div className="space-y-4 mb-6">
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="text-lg font-semibold text-primary">{price}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium">4-6 hours (varies by vehicle)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Recommendation</p>
              <p className="font-medium">Every 3-4 months</p>
            </div>
          </div>
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={onBookingClick}
          >
            Book This Service
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">FAQ</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">How long does this service take?</h4>
              <p className="text-sm text-muted-foreground">
                Most vehicles require 4-6 hours for complete treatment, depending on size and condition.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Do I need to book in advance?</h4>
              <p className="text-sm text-muted-foreground">
                We recommend booking 2-3 days in advance to ensure availability, especially during weekends.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Is this service safe for all vehicles?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, our techniques and products are safe for all vehicle types, from everyday cars to luxury vehicles.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">How often should I get this service?</h4>
              <p className="text-sm text-muted-foreground">
                We recommend this service every 3-4 months for optimal vehicle maintenance and protection.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Related Services</h3>
          <div className="space-y-3">
            {relatedServices.map(({ id, title, price, image }) => (
              <Link key={id} to={`/services/${id}`} className="block">
                <div className="flex items-start hover:bg-primary/5 p-2 rounded-lg transition-colors">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-16 h-12 object-cover rounded mr-3"
                  />
                  <div>
                    <h4 className="font-medium">{title}</h4>
                    <p className="text-xs text-primary">{price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceSidebar;
