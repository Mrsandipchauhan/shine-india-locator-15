
import { Badge } from "@/components/ui/badge";
import { ServicePackage } from "@/data/servicesData";
import ServicePackageCard from "./ServicePackageCard";

interface ServicesPackagesProps {
  packages: ServicePackage[];
  onBookPackage: (packageTitle: string) => void;
}

const ServicesPackages = ({ packages, onBookPackage }: ServicesPackagesProps) => {
  return (
    <section className="mt-20 lg:mt-32 mb-16">
      <div className="text-center mb-12 lg:mb-16">
        <Badge variant="outline" className="mb-2">Value Packages</Badge>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Comprehensive Detailing Packages</h2>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          Save with our bundled service packages designed to provide maximum value for your vehicle.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {packages.map((pkg) => (
          <ServicePackageCard 
            key={pkg.id} 
            packageData={pkg} 
            onBookNow={onBookPackage} 
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesPackages;
