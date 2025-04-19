
export interface LocalArea {
  id: string;
  name: string;
  parentCity: string;
  title: string;
  description: string;
  content: {
    introduction: string;
    localChallenges: string;
    specialTips: string;
    serviceAreas: string[];
    nearbyLocations: string[];
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  phoneNumber: string;
  address: string;
}
