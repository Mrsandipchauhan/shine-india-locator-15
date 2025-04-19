
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search, ArrowRight } from "lucide-react";
import localAreasData from "@/data/localAreasData";

// Group areas by parent city
const groupAreasByCity = () => {
  const groups: Record<string, typeof localAreasData> = {};
  
  localAreasData.forEach(area => {
    if (!groups[area.parentCity]) {
      groups[area.parentCity] = [];
    }
    groups[area.parentCity].push(area);
  });
  
  return groups;
};

const AreaListingSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCities, setExpandedCities] = useState<string[]>([]);
  
  const toggleCityExpansion = (cityId: string) => {
    if (expandedCities.includes(cityId)) {
      setExpandedCities(expandedCities.filter(id => id !== cityId));
    } else {
      setExpandedCities([...expandedCities, cityId]);
    }
  };
  
  // Group areas by parent city
  const groupedAreas = groupAreasByCity();
  
  // Filter areas based on search term
  const filteredAreas = searchTerm.trim() === "" 
    ? localAreasData 
    : localAreasData.filter(area => 
        area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        area.content.introduction.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Find Car Detailing Services Near You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide premium car detailing services across 30 major locations in India. 
            Find the nearest service center or request mobile detailing in your area.
          </p>
        </div>
        
        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for your location..."
            className="pl-10 py-6"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {searchTerm.trim() !== "" ? (
          // Search results
          <div>
            <h3 className="text-xl font-semibold mb-4">Search Results for "{searchTerm}"</h3>
            {filteredAreas.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAreas.map((area) => (
                  <Card key={area.id} className="bg-card hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary/10 p-2 rounded-full mt-1">
                          <MapPin size={18} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{area.name}</h4>
                          <p className="text-xs text-muted-foreground mb-3">
                            {area.content.introduction.substring(0, 120)}...
                          </p>
                          <div className="space-y-2">
                            <Link to={`/area/${area.id}`}>
                              <Button variant="link" className="p-0 h-auto text-primary font-medium flex items-center">
                                View All Services <ArrowRight size={14} className="ml-1" />
                              </Button>
                            </Link>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {['exterior-detailing', 'interior-detailing', 'ceramic-coating'].map((serviceId) => (
                                <Link 
                                  key={serviceId} 
                                  to={`/area/${area.id}/${serviceId}`}
                                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">
                No locations found matching "{searchTerm}". Please try another search term.
              </p>
            )}
          </div>
        ) : (
          // Organized by city
          <div className="space-y-8">
            {Object.entries(groupedAreas).map(([cityId, areas]) => (
              <div key={cityId} className="bg-card border border-border rounded-lg overflow-hidden">
                <div 
                  className="bg-primary/5 p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCityExpansion(cityId)}
                >
                  <h3 className="font-semibold">{areas[0]?.parentCity.charAt(0).toUpperCase() + areas[0]?.parentCity.slice(1)} Areas</h3>
                  <Button variant="ghost" size="sm">
                    {expandedCities.includes(cityId) ? "Collapse" : "Expand"}
                  </Button>
                </div>
                
                {expandedCities.includes(cityId) && (
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {areas.map((area) => (
                        <Card key={area.id} className="bg-background hover:shadow-sm transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <MapPin size={14} className="text-primary mr-2" />
                                <span className="font-medium">{area.name}</span>
                              </div>
                              <Link to={`/area/${area.id}`}>
                                <Button variant="ghost" size="sm" className="p-1 h-auto text-primary">
                                  <ArrowRight size={14} />
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AreaListingSection;
