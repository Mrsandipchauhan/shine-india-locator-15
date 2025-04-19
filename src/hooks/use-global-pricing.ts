
import { useState, useEffect } from 'react';
import { useCountryDetection } from './use-country-detection';

// Define currency symbols and codes by country
export const currencyByCountry = {
  "India": {
    symbol: "₹",
    code: "INR",
    name: "Indian Rupee"
  },
  "United States": {
    symbol: "$",
    code: "USD",
    name: "US Dollar"
  },
  "United Kingdom": {
    symbol: "£",
    code: "GBP",
    name: "British Pound"
  },
  "Australia": {
    symbol: "A$",
    code: "AUD",
    name: "Australian Dollar"
  },
  "Canada": {
    symbol: "C$",
    code: "CAD",
    name: "Canadian Dollar"
  },
  "Singapore": {
    symbol: "S$",
    code: "SGD",
    name: "Singapore Dollar"
  },
  "UAE": {
    symbol: "AED",
    code: "AED",
    name: "UAE Dirham"
  },
  "European Union": {
    symbol: "€",
    code: "EUR",
    name: "Euro"
  }
};

// Define which countries belong to the European Union
export const euCountries = [
  "France", "Germany", "Italy", "Spain", "Netherlands", 
  "Belgium", "Austria", "Ireland", "Greece", "Portugal", 
  "Finland", "Sweden", "Denmark", "Poland", "Czech Republic", 
  "Hungary", "Slovakia", "Slovenia", "Luxembourg", "Malta", 
  "Cyprus", "Estonia", "Latvia", "Lithuania", "Croatia", "Romania", "Bulgaria"
];

// Default currency if country not found
const defaultCurrency = currencyByCountry["India"];

// Currency conversion rates relative to INR (approximate)
const conversionRates = {
  "INR": 1,
  "USD": 0.012,
  "GBP": 0.0095,
  "EUR": 0.011,
  "AUD": 0.018,
  "CAD": 0.016,
  "SGD": 0.016,
  "AED": 0.044
};

export const useGlobalPricing = () => {
  const userCountry = useCountryDetection();
  const [currency, setCurrency] = useState(defaultCurrency);
  const [countryGroup, setCountryGroup] = useState("India");

  useEffect(() => {
    if (userCountry) {
      if (Object.keys(currencyByCountry).includes(userCountry)) {
        setCurrency(currencyByCountry[userCountry as keyof typeof currencyByCountry]);
        setCountryGroup(userCountry);
      } else if (euCountries.includes(userCountry)) {
        setCurrency(currencyByCountry["European Union"]);
        setCountryGroup("European Union");
      } else if (userCountry === "England" || userCountry === "Scotland" || userCountry === "Wales" || userCountry === "Northern Ireland") {
        setCurrency(currencyByCountry["United Kingdom"]);
        setCountryGroup("United Kingdom");
      } else {
        setCurrency(defaultCurrency);
        setCountryGroup("India");
      }
    }
  }, [userCountry]);

  // Convert price from INR to local currency
  const convertPrice = (priceInINR: number): number => {
    const rate = conversionRates[currency.code as keyof typeof conversionRates] || 1;
    return Math.round(priceInINR * rate);
  };

  // Format price with currency symbol
  const formatPrice = (price: number, useCurrencyCode = false): string => {
    const formattedPrice = price.toLocaleString();
    return useCurrencyCode 
      ? `${formattedPrice} ${currency.code}`
      : `${currency.symbol}${formattedPrice}`;
  };

  return {
    currency,
    countryGroup,
    convertPrice,
    formatPrice
  };
};
