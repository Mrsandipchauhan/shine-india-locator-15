
export interface ServiceAreaMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface ServiceAreaContent {
  meta: ServiceAreaMeta;
  introduction: string;
  serviceDetails: string;
  localBenefits: string[];
  testimonials: {
    name: string;
    rating: number;
    comment: string;
  }[];
}

export interface ServiceAreaData {
  [areaId: string]: {
    [serviceId: string]: ServiceAreaContent;
  };
}

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
