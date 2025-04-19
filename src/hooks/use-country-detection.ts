
import { useState, useEffect } from 'react';

export const useCountryDetection = () => {
  const [userCountry, setUserCountry] = useState<string>('');

  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Using a free IP geolocation API
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setUserCountry(data.country_name || 'India'); // Default to India if detection fails
      } catch (error) {
        console.error('Error detecting country:', error);
        setUserCountry('India'); // Default to India on error
      }
    };

    detectCountry();
  }, []);

  return userCountry;
};
