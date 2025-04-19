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
        areas: [
          "Manhattan", "Brooklyn", "Queens", "Long Island", "Staten Island",
          "Westchester", "Nassau County", "Suffolk County", "White Plains",
          "New Rochelle", "Yonkers", "Mount Vernon", "Scarsdale", "Great Neck", "Port Washington"
        ]
      },
      {
        name: "Los Angeles",
        areas: [
          "Beverly Hills", "Santa Monica", "West Hollywood", "Malibu", "Pasadena",
          "Glendale", "Newport Beach", "Irvine", "Manhattan Beach", "Calabasas",
          "Marina Del Rey", "Pacific Palisades", "Brentwood", "Hollywood Hills", "Sherman Oaks"
        ]
      }
    ]
  },
  {
    country: "UK",
    cities: [
      {
        name: "London",
        areas: [
          "Kensington", "Chelsea", "Mayfair", "Knightsbridge", "Westminster",
          "Richmond", "Hampstead", "St John's Wood", "Notting Hill", "Canary Wharf",
          "Belgravia", "Greenwich", "Islington", "Fulham", "Wimbledon"
        ]
      },
      {
        name: "Manchester",
        areas: [
          "City Centre", "Didsbury", "Chorlton", "Altrincham", "Sale",
          "Prestwich", "Worsley", "Hale", "Wilmslow", "Cheadle",
          "Stockport", "Bolton", "Bury", "Rochdale", "Oldham"
        ]
      }
    ]
  },
  {
    country: "Canada",
    cities: [
      {
        name: "Toronto",
        areas: [
          "Yorkville", "Forest Hill", "Rosedale", "The Bridle Path", "Lawrence Park",
          "Leaside", "The Beaches", "King West", "Summerhill", "Bayview Village",
          "High Park", "Bloor West Village", "Etobicoke", "North York", "Markham"
        ]
      },
      {
        name: "Vancouver",
        areas: [
          "West Vancouver", "North Vancouver", "Yaletown", "Kitsilano", "Point Grey",
          "Shaughnessy", "Kerrisdale", "UBC", "Coal Harbour", "Gastown",
          "Olympic Village", "Mount Pleasant", "Richmond", "Burnaby", "Surrey"
        ]
      }
    ]
  },
  {
    country: "Australia",
    cities: [
      {
        name: "Sydney",
        areas: [
          "Double Bay", "Vaucluse", "Mosman", "Rose Bay", "Woollahra",
          "Bellevue Hill", "Paddington", "Balmain", "Coogee", "Bondi",
          "North Sydney", "Chatswood", "Manly", "Parramatta", "Lane Cove"
        ]
      },
      {
        name: "Melbourne",
        areas: [
          "Toorak", "South Yarra", "Brighton", "Albert Park", "Hawthorn",
          "Kew", "Malvern", "Armadale", "Port Melbourne", "St Kilda",
          "Richmond", "Brunswick", "Carlton", "Docklands", "Williamstown"
        ]
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
