
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Service } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesListProps {
  services: Service[];
  onBookService: (serviceTitle: string) => void;
}

const ServicesList = ({ services, onBookService }: ServicesListProps) => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();
  
  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);
  
  return (
    <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-card">
          <TabsTrigger value="all">All Services</TabsTrigger>
          <TabsTrigger value="detailing">Detailing</TabsTrigger>
          <TabsTrigger value="protection">Protection</TabsTrigger>
          <TabsTrigger value="specialty">Specialty</TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value={activeTab} className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceCard 
                {...service}
                showDetailedView={true}
              />
            </motion.div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ServicesList;
