
import { Card } from "@/components/ui/card";

interface LocationInfoProps {
  cityName: string;
  content: {
    weatherImpact: string;
    localChallenges: string;
    specialTips: string;
  };
}

const LocationInfo = ({ cityName, content }: LocationInfoProps) => {
  return (
    <Card className="bg-card border-border p-6">
      <h2 className="text-xl font-bold mb-4">Why Car Detailing Matters in {cityName}</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-primary mb-2">Local Weather Impact</h3>
          <p className="text-muted-foreground">{content.weatherImpact}</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-primary mb-2">Local Challenges for Vehicles</h3>
          <p className="text-muted-foreground">{content.localChallenges}</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-primary mb-2">Special Tips for {cityName} Car Owners</h3>
          <p className="text-muted-foreground">{content.specialTips}</p>
        </div>
      </div>
    </Card>
  );
};

export default LocationInfo;
