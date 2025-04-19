
// Global locations data for car detailing services

// Cities by continent and country for location selection
export const worldwideLocations = {
  "Asia": {
    "India": [
      "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", 
      "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
      "Chandigarh", "Coimbatore", "Nagpur", "Surat", "Indore"
    ],
    "Singapore": [
      "Central", "East Region", "North Region", "North-East Region", "West Region"
    ],
    "UAE": [
      "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"
    ],
    "Malaysia": [
      "Kuala Lumpur", "Penang", "Johor Bahru", "Malacca", "Ipoh"
    ],
    "Thailand": [
      "Bangkok", "Phuket", "Chiang Mai", "Pattaya", "Hua Hin"
    ]
  },
  "North America": {
    "United States": [
      "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
      "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
      "Miami", "San Francisco", "Seattle", "Boston", "Denver"
    ],
    "Canada": [
      "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton",
      "Ottawa", "Winnipeg", "Quebec City", "Hamilton"
    ],
    "Mexico": [
      "Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana"
    ]
  },
  "Europe": {
    "United Kingdom": [
      "London", "Manchester", "Birmingham", "Glasgow", "Liverpool",
      "Edinburgh", "Leeds", "Bristol", "Sheffield", "Cardiff"
    ],
    "Germany": [
      "Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt",
      "Stuttgart", "Dusseldorf", "Leipzig", "Hannover"
    ],
    "France": [
      "Paris", "Marseille", "Lyon", "Toulouse", "Nice",
      "Nantes", "Strasbourg", "Montpellier", "Bordeaux"
    ],
    "Italy": [
      "Rome", "Milan", "Naples", "Turin", "Palermo",
      "Bologna", "Florence", "Catania", "Venice"
    ],
    "Spain": [
      "Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza",
      "Malaga", "Murcia", "Palma", "Bilbao"
    ]
  },
  "Oceania": {
    "Australia": [
      "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide",
      "Gold Coast", "Canberra", "Newcastle", "Wollongong"
    ],
    "New Zealand": [
      "Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga"
    ]
  }
};

// Top detailing keywords by region for search optimization
export const regionSpecificKeywords = {
  "North America": [
    "auto detailing", "car detailer", "mobile detailing", "paint correction",
    "ceramic coating", "car wash", "paint protection film", "interior detailing",
    "express detailing", "showroom finish", "clay bar treatment",
    "professional detailing", "full service car wash"
  ],
  "Europe": [
    "car valeting", "vehicle detailing", "professional car cleaning",
    "hand car wash", "car polish", "interior valeting", "paintwork correction",
    "nano ceramic coating", "luxury car detailing", "car paint restoration",
    "hydrophobic coating", "executive car cleaning"
  ],
  "Asia": [
    "car spa", "premium car cleaning", "car polishing", "teflon coating",
    "ceramic protection", "interior cleaning", "paint protection",
    "car grooming", "vehicle maintenance", "car sanitization",
    "express car service", "paint restoration"
  ],
  "Oceania": [
    "car groomer", "paint protection", "cut and polish", "car detailer",
    "mobile car wash", "ceramic coating", "car buffing", "clay bar treatment",
    "paint correction", "premium detailing", "swirl mark removal"
  ]
};

// Currency and pricing by region
export const regionPricing = {
  "North America": {
    "United States": {
      currencyCode: "USD",
      symbol: "$",
      basic: {
        wash: 49.99,
        exterior: 149.99,
        interior: 129.99,
        full: 249.99
      },
      premium: {
        ceramic: 799.99,
        protection: 1299.99,
        headlight: 99.99,
        engine: 79.99
      }
    },
    "Canada": {
      currencyCode: "CAD",
      symbol: "CA$",
      basic: {
        wash: 69.99,
        exterior: 189.99,
        interior: 159.99,
        full: 299.99
      },
      premium: {
        ceramic: 999.99,
        protection: 1499.99,
        headlight: 129.99,
        engine: 99.99
      }
    }
  },
  "Europe": {
    "United Kingdom": {
      currencyCode: "GBP",
      symbol: "£",
      basic: {
        wash: 39.99,
        exterior: 119.99,
        interior: 99.99,
        full: 199.99
      },
      premium: {
        ceramic: 649.99,
        protection: 999.99,
        headlight: 79.99,
        engine: 69.99
      }
    },
    "European Union": {
      currencyCode: "EUR",
      symbol: "€",
      basic: {
        wash: 44.99,
        exterior: 139.99,
        interior: 119.99,
        full: 229.99
      },
      premium: {
        ceramic: 749.99,
        protection: 1199.99,
        headlight: 89.99,
        engine: 79.99
      }
    }
  },
  "Asia": {
    "India": {
      currencyCode: "INR",
      symbol: "₹",
      basic: {
        wash: 1499,
        exterior: 2999,
        interior: 2499,
        full: 4999
      },
      premium: {
        ceramic: 15999,
        protection: 25999,
        headlight: 1999,
        engine: 1499
      }
    },
    "Singapore": {
      currencyCode: "SGD",
      symbol: "S$",
      basic: {
        wash: 69.99,
        exterior: 199.99,
        interior: 169.99,
        full: 299.99
      },
      premium: {
        ceramic: 899.99,
        protection: 1399.99,
        headlight: 129.99,
        engine: 99.99
      }
    },
    "UAE": {
      currencyCode: "AED",
      symbol: "AED",
      basic: {
        wash: 179.99,
        exterior: 499.99,
        interior: 399.99,
        full: 799.99
      },
      premium: {
        ceramic: 2599.99,
        protection: 3999.99,
        headlight: 349.99,
        engine: 279.99
      }
    }
  },
  "Oceania": {
    "Australia": {
      currencyCode: "AUD",
      symbol: "A$",
      basic: {
        wash: 59.99,
        exterior: 179.99,
        interior: 149.99,
        full: 259.99
      },
      premium: {
        ceramic: 849.99,
        protection: 1349.99,
        headlight: 119.99,
        engine: 99.99
      }
    },
    "New Zealand": {
      currencyCode: "NZD",
      symbol: "NZ$",
      basic: {
        wash: 69.99,
        exterior: 189.99,
        interior: 159.99,
        full: 279.99
      },
      premium: {
        ceramic: 899.99,
        protection: 1399.99,
        headlight: 129.99,
        engine: 109.99
      }
    }
  }
};

// Vehicle types by region
export const regionSpecificVehicleTypes = {
  "North America": [
    { id: "compact", name: "Compact/Sedan", priceMultiplier: 1 },
    { id: "midsize", name: "Midsize Car/Crossover", priceMultiplier: 1.2 },
    { id: "suv", name: "SUV/Minivan", priceMultiplier: 1.5 },
    { id: "truck", name: "Pickup Truck", priceMultiplier: 1.6 },
    { id: "luxury", name: "Luxury Vehicle", priceMultiplier: 1.8 },
    { id: "exotic", name: "Exotic/Supercar", priceMultiplier: 2.5 }
  ],
  "Europe": [
    { id: "compact", name: "Compact/Hatchback", priceMultiplier: 1 },
    { id: "sedan", name: "Saloon/Estate", priceMultiplier: 1.2 },
    { id: "suv", name: "SUV/Crossover", priceMultiplier: 1.5 },
    { id: "luxury", name: "Luxury/Executive", priceMultiplier: 1.8 },
    { id: "sport", name: "Sports Car", priceMultiplier: 2 },
    { id: "exotic", name: "Supercar", priceMultiplier: 2.5 }
  ],
  "Asia": [
    { id: "hatchback", name: "Hatchback", priceMultiplier: 1 },
    { id: "sedan", name: "Sedan", priceMultiplier: 1.2 },
    { id: "suv", name: "SUV", priceMultiplier: 1.5 },
    { id: "premium", name: "Premium Sedan", priceMultiplier: 1.8 },
    { id: "luxury", name: "Luxury", priceMultiplier: 2 },
    { id: "exotic", name: "Exotic/Supercar", priceMultiplier: 3 }
  ],
  "Oceania": [
    { id: "small", name: "Small Car", priceMultiplier: 1 },
    { id: "medium", name: "Medium Car", priceMultiplier: 1.2 },
    { id: "suv", name: "SUV/4WD", priceMultiplier: 1.5 },
    { id: "utility", name: "Ute", priceMultiplier: 1.4 },
    { id: "luxury", name: "Luxury/Sports", priceMultiplier: 1.8 },
    { id: "exotic", name: "Prestige/Exotic", priceMultiplier: 2.5 }
  ]
};
