
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Delhi",
    comment: "ShineDetailers transformed my 5-year-old Hyundai Creta. The ceramic coating made it look better than when I first bought it. Excellent service!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    car: "Hyundai Creta"
  },
  {
    id: 2,
    name: "Priya Patel",
    city: "Mumbai",
    comment: "I had my Mercedes C-Class detailed before a special event. The team was professional, thorough, and delivered exceptional results. Highly recommended!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    car: "Mercedes C-Class"
  },
  {
    id: 3,
    name: "Vikram Singh",
    city: "Bangalore",
    comment: "The paint protection film installed on my BMW has saved my car from numerous scratches already. Worth every rupee spent!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    car: "BMW 3 Series"
  },
  {
    id: 4,
    name: "Anjali Mehta",
    city: "Hyderabad",
    comment: "Regular maintenance detailing package keeps my Audi looking new. The attention to detail is impressive, especially for the interior cleaning.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    car: "Audi A4"
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    city: "Chennai",
    comment: "The headlight restoration service made a dramatic difference in night visibility. The team was prompt, courteous, and very skilled.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    car: "Toyota Fortuner"
  }
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentIndex]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers across India have to say about our car detailing services.
          </p>
        </div>
        
        <div 
          className="relative overflow-hidden" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="bg-background p-6 rounded-lg border border-border flex flex-col"
              >
                <div className="flex items-start mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.city} | {testimonial.car}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={16}
                          className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic flex-grow">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft size={18} />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
