import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const FAQ = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
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
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
