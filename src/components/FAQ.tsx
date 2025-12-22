import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Why choose a web agency for my project?",
    answer: "A specialized team ensures high-quality, scalable, and efficient solutions. We bring expertise across multiple disciplines, saving you time and delivering professional results.",
  },
  {
    question: "What areas can you help me with?",
    answer: "We offer UI/UX, Framer, Web & App Development, and E-Commerce solutions. Our team can handle everything from design to deployment.",
  },
  {
    question: "Where is your agency located?",
    answer: "We work globally and collaborate remotely with businesses worldwide. Our distributed team allows us to serve clients across different time zones effectively.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "The timeline depends on the project scope, but we ensure efficient execution without compromising quality. A typical website project takes 4-8 weeks, while complex applications may take 3-6 months.",
  },
];

const PlusMarker = ({ className = "" }: { className?: string }) => (
  <span className={`absolute text-muted-foreground text-lg font-light select-none ${className}`}>+</span>
);

const FAQ = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        {/* Section with plus dividers */}
        <div className="relative max-w-4xl mx-auto">
          {/* Corner Plus Markers */}
          <PlusMarker className="-top-3 -left-3" />
          <PlusMarker className="-top-3 -right-3" />
          <PlusMarker className="-bottom-3 -left-3" />
          <PlusMarker className="-bottom-3 -right-3" />
          
          {/* Border lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-border" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
            <div className="absolute top-0 bottom-0 left-0 w-px bg-border" />
            <div className="absolute top-0 bottom-0 right-0 w-px bg-border" />
          </div>

          <div className="p-8 md:p-12">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                \\ FAQ \\
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Frequently asked questions
              </h2>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 group"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 [&>svg]:hidden">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium pr-4">{faq.question}</span>
                      <div className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center group-data-[state=open]:bg-primary group-data-[state=open]:border-primary transition-colors">
                        <Plus className="w-4 h-4 group-data-[state=open]:hidden" />
                        <Minus className="w-4 h-4 hidden group-data-[state=open]:block text-primary-foreground" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
