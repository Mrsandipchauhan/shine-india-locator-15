
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  serviceName: string;
  faqs: FAQItem[];
}

const ServiceFAQ = ({ serviceName, faqs }: ServiceFAQProps) => {
  return (
    <div className="py-8 bg-card/50 backdrop-blur">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions about {serviceName}</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-background/50 rounded-lg">
              <AccordionTrigger className="px-4 text-left hover:bg-muted/50 rounded-t-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ServiceFAQ;
