
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface Location {
  country: string;
  cities: {
    name: string;
    areas: string[];
  }[];
}

const locations: Location[] = [
  {
    country: "USA",
    cities: [
      {
        name: "New York",
        areas: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"]
      },
      {
        name: "Los Angeles",
        areas: ["Hollywood", "Beverly Hills", "Santa Monica", "Venice", "Downtown"]
      }
    ]
  },
  {
    country: "UK",
    cities: [
      {
        name: "London",
        areas: ["Westminster", "Camden", "Greenwich", "Kensington", "Hackney"]
      },
      {
        name: "Manchester",
        areas: ["City Centre", "Salford", "Trafford", "Stockport", "Bolton"]
      }
    ]
  },
  {
    country: "Canada",
    cities: [
      {
        name: "Toronto",
        areas: ["Downtown", "North York", "Scarborough", "Etobicoke", "York"]
      },
      {
        name: "Vancouver",
        areas: ["Downtown", "Kitsilano", "Gastown", "Yaletown", "West End"]
      }
    ]
  },
  {
    country: "Australia",
    cities: [
      {
        name: "Sydney",
        areas: ["CBD", "North Sydney", "Bondi", "Manly", "Parramatta"]
      },
      {
        name: "Melbourne",
        areas: ["CBD", "St Kilda", "South Yarra", "Richmond", "Brunswick"]
      }
    ]
  }
];

const InternationalLocations = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">International Service Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location) => (
            <div key={location.country} className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {location.country}
              </h3>
              <div className="space-y-4">
                {location.cities.map((city) => (
                  <div key={city.name}>
                    <h4 className="font-medium mb-2">{city.name}</h4>
                    <ul className="space-y-1">
                      {city.areas.map((area) => (
                        <li key={area}>
                          <Link
                            to={`/area/${location.country.toLowerCase()}/${city.name.toLowerCase()}/${area.toLowerCase()}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {area}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalLocations;
