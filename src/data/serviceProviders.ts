export interface ServiceProvider {
  id: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  openHours: string;
  services: string[];
}

export const serviceProvidersByCity: Record<string, ServiceProvider[]> = {
  delhi: [
    {
      id: "delhi1",
      name: "Supreme Auto Detailing",
      address: "45 Connaught Place, New Delhi",
      phone: "+91 98765 43210",
      rating: 4.8,
      openHours: "Mon-Sat: 9AM - 7PM, Sun: 10AM - 5PM",
      services: ["Exterior Detailing", "Interior Detailing", "Ceramic Coating", "Paint Protection"]
    },
    {
      id: "delhi2",
      name: "CarSpa Delhi",
      address: "112 South Extension Part II, New Delhi",
      phone: "+91 87654 32109",
      rating: 4.5,
      openHours: "Mon-Sat: 8AM - 8PM, Sun: Closed",
      services: ["Full Detailing", "Steam Cleaning", "Headlight Restoration", "Engine Bay Cleaning"]
    },
    {
      id: "delhi3",
      name: "Royal Touch Auto Care",
      address: "22 Rajouri Garden Main Market, New Delhi",
      phone: "+91 76543 21098",
      rating: 4.7,
      openHours: "Daily: 9AM - 7PM",
      services: ["Premium Detailing", "Leather Treatment", "Paint Correction", "Nano Coating"]
    }
  ],
  mumbai: [
    {
      id: "mumbai1",
      name: "Mumbai Car Care Studio",
      address: "78 Linking Road, Bandra West, Mumbai",
      phone: "+91 98765 12345",
      rating: 4.9,
      openHours: "Mon-Sat: 8AM - 9PM, Sun: 10AM - 6PM",
      services: ["Ceramic Coating", "PPF Installation", "Luxury Detailing", "Interior Sanitization"]
    },
    {
      id: "mumbai2",
      name: "Shine Masters",
      address: "23 Juhu Tara Road, Juhu, Mumbai",
      phone: "+91 87654 23456",
      rating: 4.6,
      openHours: "Daily: 8AM - 8PM",
      services: ["Exterior Detailing", "Interior Cleaning", "Paint Correction", "Ceramic Protection"]
    },
    {
      id: "mumbai3",
      name: "Auto Sparkle Mumbai",
      address: "112 Andheri West, Mumbai",
      phone: "+91 76543 34567",
      rating: 4.7,
      openHours: "Mon-Sat: 9AM - 7PM, Sun: By Appointment",
      services: ["Premium Wash", "Interior Detailing", "Paint Restoration", "Rim Cleaning"]
    }
  ],
  bangalore: [
    {
      id: "bangalore1",
      name: "Bangalore Auto Spa",
      address: "56 Indiranagar 100 Ft Road, Bangalore",
      phone: "+91 98765 56789",
      rating: 4.8,
      openHours: "Mon-Sat: 9AM - 8PM, Sun: 10AM - 6PM",
      services: ["Full Detail Package", "Ceramic Pro Coating", "Interior Renovation", "Paint Correction"]
    },
    {
      id: "bangalore2",
      name: "Tech City Car Care",
      address: "34 Koramangala 6th Block, Bangalore",
      phone: "+91 87654 67890",
      rating: 4.7,
      openHours: "Daily: 8AM - 9PM",
      services: ["Express Detailing", "Paint Protection Film", "Leather Care", "Wheel Restoration"]
    },
    {
      id: "bangalore3",
      name: "Pristine Auto Detailing",
      address: "78 Whitefield Main Road, Bangalore",
      phone: "+91 76543 78901",
      rating: 4.9,
      openHours: "Mon-Sat: 8AM - 7PM, Sun: 9AM - 5PM",
      services: ["Premium Detailing", "Nano Ceramic Coating", "Interior Sanitization", "Engine Detailing"]
    }
  ],
  hyderabad: [
    {
      id: "hyderabad1",
      name: "Hyderabad Car Care Studio",
      address: "45 Banjara Hills Road No. 12, Hyderabad",
      phone: "+91 98765 89012",
      rating: 4.7,
      openHours: "Mon-Sat: 9AM - 7PM, Sun: 10AM - 5PM",
      services: ["Ceramic Coating", "Interior Detailing", "Paint Correction", "Headlight Restoration"]
    },
    {
      id: "hyderabad2",
      name: "HITEC Auto Spa",
      address: "22 Madhapur Main Road, Hyderabad",
      phone: "+91 87654 90123",
      rating: 4.6,
      openHours: "Daily: 9AM - 8PM",
      services: ["Full Detailing", "Premium Wash", "Leather Treatment", "Wax Protection"]
    },
    {
      id: "hyderabad3",
      name: "Jubilee Car Care",
      address: "67 Jubilee Hills Road No. 36, Hyderabad",
      phone: "+91 76543 01234",
      rating: 4.8,
      openHours: "Mon-Sat: 8AM - 7PM, Sun: By Appointment",
      services: ["Executive Detailing", "Paint Protection", "Interior Deep Clean", "Odor Removal"]
    }
  ],
  chennai: [
    {
      id: "chennai1",
      name: "Chennai Auto Detailing Pro",
      address: "78 Anna Nagar East, Chennai",
      phone: "+91 98765 12345",
      rating: 4.8,
      openHours: "Mon-Sat: 9AM - 7PM, Sun: 10AM - 5PM",
      services: ["Premium Detailing", "Ceramic Coating", "Paint Correction", "Interior Renovation"]
    },
    {
      id: "chennai2",
      name: "ECR Car Spa",
      address: "45 East Coast Road, Chennai",
      phone: "+91 87654 23456",
      rating: 4.7,
      openHours: "Daily: 8AM - 8PM",
      services: ["Anti-Rust Treatment", "Interior Clean", "Exterior Polish", "Paint Protection"]
    },
    {
      id: "chennai3",
      name: "T. Nagar Auto Care",
      address: "23 Pondy Bazaar, T. Nagar, Chennai",
      phone: "+91 76543 34567",
      rating: 4.6,
      openHours: "Mon-Sat: 8:30AM - 7:30PM, Sun: Closed",
      services: ["Express Detailing", "Full Detail Service", "Headlight Restoration", "Leather Care"]
    }
  ]
};

export const defaultProviders: ServiceProvider[] = [
  {
    id: "default1",
    name: "ShineDetailers Premium Service",
    address: "Central Location",
    phone: "+91 800-123-4567",
    rating: 5.0,
    openHours: "Mon-Sat: 9AM - 8PM, Sun: 10AM - 6PM",
    services: ["Full Detailing", "Ceramic Coating", "Interior Detailing", "Paint Protection"]
  },
  {
    id: "default2",
    name: "ShineDetailers Express",
    address: "Multiple Locations",
    phone: "+91 800-123-7890",
    rating: 4.8,
    openHours: "Daily: 8AM - 8PM",
    services: ["Express Detailing", "Wash & Wax", "Interior Cleaning", "Headlight Restoration"]
  }
];
