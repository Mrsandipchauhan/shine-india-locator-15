
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import localAreasData from "@/data/localAreasData";

// Get a selection of featured areas from different parent cities
const getFeaturedAreas = (count = 6) => {
  const featuredAreas = [];
  const parentCities = new Set();
  
  // First pick one area from each parent city
  for (const area of localAreasData) {
    if (!parentCities.has(area.parentCity)) {
      parentCities.add(area.parentCity);
      featuredAreas.push(area);
    }
    
    if (featuredAreas.length >= count) break;
  }
  
  // If we need more areas, add additional ones
  if (featuredAreas.length < count) {
    for (const area of localAreasData) {
      if (!featuredAreas.includes(area)) {
        featuredAreas.push(area);
      }
      
      if (featuredAreas.length >= count) break;
    }
  }
  
  return featuredAreas.slice(0, count);
};

const FeaturedAreasSection = () => {
  const featuredAreas = getFeaturedAreas(6);
  
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Detailing Locations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find premium car detailing services in these popular areas or search for your location to discover services near you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAreas.map((area) => (
            <Card key={area.id} className="bg-background hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-40 bg-cover bg-center" style={{ 
                backgroundImage: `url('https://source.unsplash.com/featured/?${area.name},car')`,
                filter: "brightness(0.7) contrast(1.1)"
              }}>
                <div className="w-full h-full bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center text-white">
                    <MapPin size={16} className="text-primary mr-2" />
                    <h3 className="font-semibold">{area.name}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {area.content.introduction.substring(0, 100)}...
                </p>
                <Link to={`/area/${area.id}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center">
                    View Services <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/locations">
            <Button variant="outline" size="lg">
              View All Locations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAreasSection;
