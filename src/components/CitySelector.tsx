import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Top cities in India by car ownership
const majorCities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Coimbatore", "Nagpur", "Surat", "Indore", "Bhopal", "Patna", "Vadodara", "Guwahati", "Kochi"];

// City images mapping
const cityImages: Record<string, string> = {
  "Delhi": "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop",
  "Mumbai": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2069&auto=format&fit=crop",
  "Bangalore": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2071&auto=format&fit=crop",
  "Hyderabad": "https://images.unsplash.com/photo-1588416499018-d8c621346a94?q=80&w=2067&auto=format&fit=crop",
  "Chennai": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop",
  "default": "https://images.unsplash.com/photo-1625050789689-29c436451dc9?q=80&w=2070&auto=format&fit=crop"
};
const CitySelector = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [focused, setFocused] = useState(false);
  const filteredCities = searchTerm ? majorCities.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase())) : majorCities;

  // Get featured cities (first 5)
  const featuredCities = majorCities.slice(0, 5);
  return;
};
export default CitySelector;