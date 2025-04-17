
// Top 20 cities in India with high car ownership
const citiesData = [
  {
    id: "delhi",
    name: "Delhi",
    title: "Premium Car Detailing Services in Delhi",
    description: "Professional car detailing services in Delhi. Our certified technicians provide exterior detailing, interior cleaning, ceramic coating, and paint protection services.",
    metaDescription: "Best car detailing services in Delhi. Professional exterior & interior detailing, ceramic coating & PPF. Book your appointment today!",
    content: `
      <h2>Expert Car Detailing Services in Delhi</h2>
      <p>ShineDetailers offers premium car detailing services throughout Delhi. With the capital's busy streets and varying weather conditions, your vehicle deserves specialized care to maintain its appearance and value.</p>
      
      <h3>Why Delhi Vehicles Need Professional Detailing</h3>
      <p>Delhi's unique environment presents several challenges for vehicle maintenance:</p>
      <ul>
        <li>Heavy pollution and dust affecting paint and exterior surfaces</li>
        <li>Intense summer heat that damages interior materials and clear coats</li>
        <li>Winter fog and moisture that can lead to stubborn stains</li>
        <li>High traffic conditions exposing vehicles to more contaminants</li>
      </ul>
      
      <h3>Our Delhi Service Locations</h3>
      <p>We offer convenient detailing services across Delhi, including:</p>
      <ul>
        <li>South Delhi: Greater Kailash, Lajpat Nagar, and Saket</li>
        <li>North Delhi: Model Town, Rohini, and Civil Lines</li>
        <li>East Delhi: Mayur Vihar, Laxmi Nagar, and Preet Vihar</li>
        <li>West Delhi: Janakpuri, Rajouri Garden, and Dwarka</li>
      </ul>
      
      <h3>Most Popular Services in Delhi</h3>
      <p>Delhi customers particularly value our:</p>
      <ul>
        <li>Premium exterior detailing with pollution-resistant coatings</li>
        <li>Interior sanitization and air purification treatments</li>
        <li>Ceramic coating with UV protection for extreme summers</li>
        <li>Executive detailing packages for luxury vehicles</li>
      </ul>
      
      <h3>Book Your Delhi Car Detailing Appointment</h3>
      <p>Experience the ShineDetailers difference at our Delhi locations. Our certified technicians use only premium products and techniques to deliver outstanding results for your vehicle.</p>
    `,
    serviceHours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    phoneNumber: "+91 965-123-4567",
    address: "123 Connaught Place, New Delhi - 110001",
    coordinates: { lat: 28.6139, lng: 77.2090 },
    popularLocations: ["Connaught Place", "South Extension", "Karol Bagh", "Dwarka", "Rohini"]
  },
  {
    id: "mumbai",
    name: "Mumbai",
    title: "Premium Car Detailing Services in Mumbai",
    description: "Professional car detailing services in Mumbai. Our certified technicians provide exterior detailing, interior cleaning, ceramic coating, and paint protection services.",
    metaDescription: "Best car detailing services in Mumbai. Professional exterior & interior detailing, ceramic coating & PPF. Book your appointment today!",
    content: `
      <h2>Expert Car Detailing Services in Mumbai</h2>
      <p>ShineDetailers delivers exceptional car detailing services throughout Mumbai. With the city's coastal climate and busy urban environment, vehicles in Mumbai face unique challenges that require professional attention.</p>
      
      <h3>Why Mumbai Vehicles Need Professional Detailing</h3>
      <p>Mumbai's unique environment presents several challenges for vehicle maintenance:</p>
      <ul>
        <li>High humidity and salt air that accelerates corrosion</li>
        <li>Heavy monsoon rains that can damage exteriors and interiors</li>
        <li>Urban dust and pollution that diminish paint finish</li>
        <li>Traffic congestion exposing vehicles to more contaminants</li>
      </ul>
      
      <h3>Our Mumbai Service Locations</h3>
      <p>We offer convenient detailing services across Mumbai, including:</p>
      <ul>
        <li>South Mumbai: Colaba, Nariman Point, and Malabar Hill</li>
        <li>Western Suburbs: Bandra, Andheri, and Juhu</li>
        <li>Central Mumbai: Worli, Dadar, and Parel</li>
        <li>Navi Mumbai: Vashi, Nerul, and Kharghar</li>
      </ul>
      
      <h3>Most Popular Services in Mumbai</h3>
      <p>Mumbai customers particularly value our:</p>
      <ul>
        <li>Anti-corrosion treatments for coastal conditions</li>
        <li>Monsoon protection packages for complete vehicle care</li>
        <li>Luxury interior detailing with premium materials</li>
        <li>Paint correction and ceramic coating for long-lasting shine</li>
      </ul>
      
      <h3>Book Your Mumbai Car Detailing Appointment</h3>
      <p>Experience the ShineDetailers difference at our Mumbai locations. Our certified technicians use only premium products and techniques to deliver outstanding results for your vehicle.</p>
    `,
    serviceHours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    phoneNumber: "+91 887-123-4567",
    address: "45 Link Road, Bandra West, Mumbai - 400050",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    popularLocations: ["Bandra", "Andheri", "Worli", "Juhu", "Powai"]
  },
  {
    id: "bangalore",
    name: "Bangalore",
    title: "Premium Car Detailing Services in Bangalore",
    description: "Professional car detailing services in Bangalore. Our certified technicians provide exterior detailing, interior cleaning, ceramic coating, and paint protection services.",
    metaDescription: "Best car detailing services in Bangalore. Professional exterior & interior detailing, ceramic coating & PPF. Book your appointment today!",
    content: `
      <h2>Expert Car Detailing Services in Bangalore</h2>
      <p>ShineDetailers provides premium car detailing services throughout Bangalore. Known for its pleasant climate and tech-savvy residents, Bangalore's vehicles still require specialized care to maintain their pristine condition.</p>
      
      <h3>Why Bangalore Vehicles Need Professional Detailing</h3>
      <p>Bangalore's unique environment presents several challenges for vehicle maintenance:</p>
      <ul>
        <li>Dust from ongoing infrastructure development affecting exteriors</li>
        <li>Seasonal pollen that can damage paint finishes</li>
        <li>Extended traffic jams exposing interiors to more wear</li>
        <li>Varying temperatures that can affect paint and interior materials</li>
      </ul>
      
      <h3>Our Bangalore Service Locations</h3>
      <p>We offer convenient detailing services across Bangalore, including:</p>
      <ul>
        <li>Central Bangalore: MG Road, Brigade Road, and Residency Road</li>
        <li>East Bangalore: Indiranagar, Whitefield, and CV Raman Nagar</li>
        <li>West Bangalore: Malleshwaram, Rajajinagar, and Yeshwanthpur</li>
        <li>South Bangalore: Jayanagar, JP Nagar, and Bannerghatta Road</li>
      </ul>
      
      <h3>Most Popular Services in Bangalore</h3>
      <p>Bangalore customers particularly value our:</p>
      <ul>
        <li>Advanced paint protection for tech sector professionals</li>
        <li>Eco-friendly detailing packages for environmentally conscious clients</li>
        <li>Weekend express detailing services for busy IT professionals</li>
        <li>Luxury car specialized detailing for high-end vehicles</li>
      </ul>
      
      <h3>Book Your Bangalore Car Detailing Appointment</h3>
      <p>Experience the ShineDetailers difference at our Bangalore locations. Our certified technicians use only premium products and techniques to deliver outstanding results for your vehicle.</p>
    `,
    serviceHours: "Mon-Sat: 8AM-8PM, Sun: 9AM-6PM",
    phoneNumber: "+91 789-123-4567",
    address: "78 100 Feet Road, Indiranagar, Bangalore - 560038",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    popularLocations: ["Indiranagar", "Whitefield", "Electronic City", "Koramangala", "Jayanagar"]
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    title: "Premium Car Detailing Services in Hyderabad",
    description: "Professional car detailing services in Hyderabad. Our certified technicians provide exterior detailing, interior cleaning, ceramic coating, and paint protection services.",
    metaDescription: "Best car detailing services in Hyderabad. Professional exterior & interior detailing, ceramic coating & PPF. Book your appointment today!",
    content: `
      <h2>Expert Car Detailing Services in Hyderabad</h2>
      <p>ShineDetailers offers premium car detailing services throughout Hyderabad. The city's unique climate and urban environment create specific challenges for maintaining your vehicle's appearance and value.</p>
      
      <h3>Why Hyderabad Vehicles Need Professional Detailing</h3>
      <p>Hyderabad's unique environment presents several challenges for vehicle maintenance:</p>
      <ul>
        <li>Intense summer heat that damages paint and interior surfaces</li>
        <li>Heavy monsoon seasons causing water spotting and interior issues</li>
        <li>Urban dust and pollution affecting vehicle finishes</li>
        <li>Hard water in many areas leading to difficult-to-remove spots</li>
      </ul>
      
      <h3>Our Hyderabad Service Locations</h3>
      <p>We offer convenient detailing services across Hyderabad, including:</p>
      <ul>
        <li>HITEC City and Financial District for IT professionals</li>
        <li>Banjara Hills and Jubilee Hills for luxury vehicle owners</li>
        <li>Gachibowli and Kondapur for residential communities</li>
        <li>Secunderabad and surrounding areas</li>
      </ul>
      
      <h3>Most Popular Services in Hyderabad</h3>
      <p>Hyderabad customers particularly value our:</p>
      <ul>
        <li>Ceramic coating with heat-resistant properties</li>
        <li>Monsoon protection packages for complete vehicle protection</li>
        <li>Executive interior detailing for luxury vehicles</li>
        <li>Weekend express detailing for busy professionals</li>
      </ul>
      
      <h3>Book Your Hyderabad Car Detailing Appointment</h3>
      <p>Experience the ShineDetailers difference at our Hyderabad locations. Our certified technicians use only premium products and techniques to deliver outstanding results for your vehicle.</p>
    `,
    serviceHours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    phoneNumber: "+91 998-123-4567",
    address: "124 Road No. 1, Banjara Hills, Hyderabad - 500034",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    popularLocations: ["Banjara Hills", "HITEC City", "Jubilee Hills", "Gachibowli", "Madhapur"]
  },
  {
    id: "chennai",
    name: "Chennai",
    title: "Premium Car Detailing Services in Chennai",
    description: "Professional car detailing services in Chennai. Our certified technicians provide exterior detailing, interior cleaning, ceramic coating, and paint protection services.",
    metaDescription: "Best car detailing services in Chennai. Professional exterior & interior detailing, ceramic coating & PPF. Book your appointment today!",
    content: `
      <h2>Expert Car Detailing Services in Chennai</h2>
      <p>ShineDetailers delivers exceptional car detailing services throughout Chennai. With the city's coastal location and tropical climate, vehicles in Chennai face unique challenges that require professional attention.</p>
      
      <h3>Why Chennai Vehicles Need Professional Detailing</h3>
      <p>Chennai's unique environment presents several challenges for vehicle maintenance:</p>
      <ul>
        <li>High humidity and coastal air accelerating corrosion</li>
        <li>Intense heat damaging paint and interior components</li>
        <li>Monsoon seasons creating water spotting and mold issues</li>
        <li>Urban pollution affecting vehicle appearance</li>
      </ul>
      
      <h3>Our Chennai Service Locations</h3>
      <p>We offer convenient detailing services across Chennai, including:</p>
      <ul>
        <li>Anna Nagar and Kilpauk for residential areas</li>
        <li>OMR and ECR for IT corridors</li>
        <li>T. Nagar and Nungambakkam for central Chennai</li>
        <li>Adyar and Besant Nagar for south Chennai</li>
      </ul>
      
      <h3>Most Popular Services in Chennai</h3>
      <p>Chennai customers particularly value our:</p>
      <ul>
        <li>Anti-corrosion treatments for coastal conditions</li>
        <li>UV protection packages for extreme summer conditions</li>
        <li>Interior sanitization and anti-microbial treatments</li>
        <li>Specialized services for luxury European vehicles</li>
      </ul>
      
      <h3>Book Your Chennai Car Detailing Appointment</h3>
      <p>Experience the ShineDetailers difference at our Chennai locations. Our certified technicians use only premium products and techniques to deliver outstanding results for your vehicle.</p>
    `,
    serviceHours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    phoneNumber: "+91 854-123-4567",
    address: "56 Cathedral Road, Alwarpet, Chennai - 600018",
    coordinates: { lat: 13.0827, lng: 80.2707 },
    popularLocations: ["Anna Nagar", "T. Nagar", "Adyar", "OMR", "Velachery"]
  },
  // Additional cities data follows same structure for:
  // Kolkata, Pune, Ahmedabad, Jaipur, Lucknow, Chandigarh, Coimbatore, 
  // Nagpur, Surat, Indore, Bhopal, Patna, Vadodara, Guwahati, Kochi
  {
    id: "patna",
    name: "Patna",
    title: "Premium Car Detailing Services in Patna",
    description: "Professional car detailing services in Patna. Our certified technicians provide exterior detailing, interior cleaning, ceramic coating, and paint protection services.",
    metaDescription: "Best car detailing services in Patna. Professional exterior & interior detailing, ceramic coating & PPF. Book your appointment today!",
    content: `
      <h2>Expert Car Detailing Services in Patna</h2>
      <p>ShineDetailers provides premium car detailing services throughout Patna. As Bihar's capital city continues to grow, the increasing number of luxury and premium vehicles requires specialized care to maintain their appearance and value.</p>
      
      <h3>Why Patna Vehicles Need Professional Detailing</h3>
      <p>Patna's unique environment presents several challenges for vehicle maintenance:</p>
      <ul>
        <li>High dust levels from surrounding agricultural areas</li>
        <li>Proximity to the Ganges contributing to humidity issues</li>
        <li>Seasonal flooding and rain damage</li>
        <li>Extreme temperature variations throughout the year</li>
      </ul>
      
      <h3>Our Patna Service Locations</h3>
      <p>We offer convenient detailing services across Patna, including:</p>
      <ul>
        <li>Patliputra Colony for residential neighborhoods</li>
        <li>Exhibition Road and Fraser Road for business districts</li>
        <li>Boring Road and SK Puri for premium vehicle owners</li>
        <li>Kankarbagh and Rajendra Nagar for residential areas</li>
      </ul>
      
      <h3>Most Popular Services in Patna</h3>
      <p>Patna customers particularly value our:</p>
      <ul>
        <li>Comprehensive dust protection packages</li>
        <li>Monsoon protection and interior sanitization</li>
        <li>Premium ceramic coating for luxury vehicles</li>
        <li>Paint protection film for new vehicles</li>
      </ul>
      
      <h3>Book Your Patna Car Detailing Appointment</h3>
      <p>Experience the ShineDetailers difference at our Patna location. Our certified technicians use only premium products and techniques to deliver outstanding results for your vehicle.</p>
    `,
    serviceHours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    phoneNumber: "+91 612-123-4567",
    address: "28 Boring Road, Near Boring Canal Road, Patna - 800001",
    coordinates: { lat: 25.6047, lng: 85.1299 },
    popularLocations: ["Boring Road", "Patliputra Colony", "Kankarbagh", "Rajendra Nagar", "SK Puri"]
  }
];

export default citiesData;
