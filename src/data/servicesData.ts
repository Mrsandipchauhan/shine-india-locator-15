
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: "detailing" | "protection" | "specialty";
  features: string[];
  duration: string;
  satisfaction: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    description: "Complete exterior cleaning, clay bar treatment, polishing, and waxing to restore your car's shine.",
    price: "Starting at ₹2,999",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop",
    category: "detailing",
    features: [
      "Exterior Hand Wash",
      "Clay Bar Treatment",
      "Paint Correction",
      "Wax/Sealant Application",
      "Wheel & Tire Care"
    ],
    duration: "4-5 hours",
    satisfaction: "99%"
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    description: "Deep cleaning of all interior surfaces, fabric/leather treatment, and sanitization.",
    price: "Starting at ₹2,499",
    image: "https://images.unsplash.com/photo-1601362840343-43892066c5b5?q=80&w=1964&auto=format&fit=crop",
    category: "detailing",
    features: [
      "Deep Vacuum Cleaning",
      "Leather/Fabric Treatment",
      "Dashboard & Trim Care",
      "Air Vent Cleaning",
      "Odor Elimination"
    ],
    duration: "3-4 hours",
    satisfaction: "98%"
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description: "Long-lasting protection with advanced nanoceramic technology.",
    price: "Starting at ₹15,999",
    image: "https://images.unsplash.com/photo-1619642340116-bade7c2b2309?q=80&w=1974&auto=format&fit=crop",
    category: "protection",
    features: [
      "Paint Protection",
      "Hydrophobic Effect",
      "UV Protection",
      "Scratch Resistance",
      "5-Year Warranty"
    ],
    duration: "2-3 days",
    satisfaction: "100%"
  },
  {
    id: "paint-protection",
    title: "Paint Protection Film",
    description: "Self-healing film that provides the ultimate defense against scratches and chips.",
    price: "Starting at ₹25,999",
    image: "https://images.unsplash.com/photo-1621712493890-0069349208c6?q=80&w=1964&auto=format&fit=crop",
    category: "protection",
    features: [
      "Rock Chip Protection",
      "Self-Healing Technology",
      "UV Resistance",
      "10-Year Warranty",
      "Invisible Protection"
    ],
    duration: "2-3 days",
    satisfaction: "100%"
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    description: "Restore clarity and brightness to yellowed, foggy headlights.",
    price: "Starting at ₹1,999",
    image: "https://images.unsplash.com/photo-1567789232377-845662da09b5?q=80&w=1374&auto=format&fit=crop",
    category: "specialty",
    features: [
      "UV Damage Removal",
      "Multi-Stage Polishing",
      "UV Sealant Application",
      "Improved Visibility",
      "Like-New Appearance"
    ],
    duration: "1-2 hours",
    satisfaction: "99%"
  },
  {
    id: "engine-detailing",
    title: "Engine Bay Detailing",
    description: "Professional cleaning and dressing of engine compartment.",
    price: "Starting at ₹1,499",
    image: "https://images.unsplash.com/photo-1590654893718-e4bed5228edf?q=80&w=1374&auto=format&fit=crop",
    category: "specialty",
    features: [
      "Safe Degreasing",
      "Detail Cleaning",
      "Plastic & Rubber Treatment",
      "Corrosion Prevention",
      "Enhanced Appearance"
    ],
    duration: "1-2 hours",
    satisfaction: "97%"
  }
];

export const servicePackages: ServicePackage[] = [
  {
    id: "essentials",
    title: "Essentials Package",
    description: "Perfect for regular maintenance",
    price: "₹4,999",
    features: [
      "Exterior Detailing",
      "Basic Interior Cleaning",
      "Wheel & Tire Treatment",
      "Wax Protection (3 months)"
    ]
  },
  {
    id: "premium",
    title: "Premium Package",
    description: "Our most popular complete detailing",
    price: "₹7,999",
    features: [
      "Full Exterior Detailing",
      "Complete Interior Detailing",
      "Engine Bay Cleaning",
      "Paint Sealant (6 months)",
      "Leather/Fabric Protection"
    ],
    featured: true
  },
  {
    id: "ultimate",
    title: "Ultimate Protection",
    description: "Long-term premium protection",
    price: "₹21,999",
    features: [
      "Full Exterior & Interior Detailing",
      "Paint Correction",
      "Ceramic Coating (2 years)",
      "Interior Fabric/Leather Protection",
      "Glass Treatment",
      "1-Year Maintenance Plan"
    ]
  }
];
