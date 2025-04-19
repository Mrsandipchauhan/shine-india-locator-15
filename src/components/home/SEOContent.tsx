
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Car, Star } from "lucide-react";

const SEOContent = () => {
  const faqs = [
    {
      question: "What is professional car detailing and why do I need it?",
      answer: "Professional car detailing is a comprehensive cleaning and restoration service that goes beyond regular car washing. It includes deep cleaning, paint correction, interior sanitization, and protective treatments to maintain your vehicle's value and appearance. Regular detailing helps protect your investment, maintains resale value, and provides a healthier driving environment."
    },
    {
      question: "How long does a full car detailing service take?",
      answer: "A complete car detailing service typically takes 4-8 hours depending on your vehicle's size and condition. Luxury vehicles like BMW, Audi, or Mercedes may require additional time due to their specific finishing requirements and detailed interiors."
    },
    {
      question: "How much does professional car detailing cost?",
      answer: "Car detailing prices vary based on vehicle size and service level, ranging from ₹2,999 for basic detailing to ₹15,999+ for premium packages with ceramic coating. Luxury vehicles like Audi, BMW, and Mercedes might have specialized packages due to their specific care requirements."
    },
    {
      question: "How often should I get my car detailed?",
      answer: "For optimal maintenance, we recommend professional detailing every 3-4 months. However, luxury vehicles or cars frequently exposed to harsh conditions may benefit from more frequent detailing services."
    },
    {
      question: "What's included in your premium car detailing service?",
      answer: "Our premium detailing includes exterior wash, clay bar treatment, paint correction, ceramic coating, interior deep cleaning, leather conditioning, engine bay cleaning, and wheel detailing. We use specialized products suitable for all vehicle types, including high-end luxury cars."
    },
    {
      question: "Do you offer mobile car detailing services?",
      answer: "Yes, we offer convenient mobile car detailing services across major cities. Our fully-equipped mobile units can provide the same high-quality service at your home or office, saving you valuable time."
    },
    {
      question: "What special care do you provide for luxury vehicles?",
      answer: "We have specialized detailing protocols for luxury vehicles like BMW, Audi, Mercedes, and other high-end cars. Our technicians are trained in brand-specific requirements and use premium products approved by luxury car manufacturers."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-center">Premium Car Detailing Services</h2>
            
            <div className="grid gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Car className="h-6 w-6 text-primary" />
                  Expert Car Detailing Near You
                </h3>
                <p className="text-muted-foreground">
                  Experience the finest car detailing services in your area with ShineDetailers. Our certified professionals deliver exceptional care for all vehicles, from everyday cars to luxury automobiles like BMW, Audi, Mercedes, and more. Using state-of-the-art equipment and premium products, we ensure your vehicle receives the attention it deserves.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Star className="h-6 w-6 text-primary" />
                  Luxury Car Detailing Specialists
                </h3>
                <p className="text-muted-foreground">
                  Our expertise extends to high-end luxury vehicles, including BMW, Audi, Mercedes-Benz, Porsche, and Range Rover. We understand the unique requirements of premium vehicles and employ specialized techniques and products to maintain their pristine condition. From paint correction to interior leather treatment, trust our skilled technicians to enhance and protect your luxury investment.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-center">Comprehensive Car Care Solutions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li>✓ Professional Paint Correction</li>
                  <li>✓ Ceramic Coating Protection</li>
                  <li>✓ Interior Deep Cleaning</li>
                  <li>✓ Leather Care Treatment</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Premium Wax Application</li>
                  <li>✓ Wheel & Rim Detailing</li>
                  <li>✓ Engine Bay Cleaning</li>
                  <li>✓ Glass Treatment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
