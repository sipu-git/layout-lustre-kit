import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { PlusMarker } from "@/components/ui/PlusMarker";

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including technology, healthcare, finance, e-commerce, logistics, and more. Our solutions are tailored to meet the specific needs of each sector.",
  },
  {
    question: "Do you offer end-to-end product development?",
    answer: "Yes, we provide complete product development services from initial concept and design through development, testing, deployment, and ongoing maintenance.",
  },
  {
    question: "How do you ensure project transparency?",
    answer: "We maintain transparency through regular progress updates, sprint reviews, shared project dashboards, and open communication channels. You'll always know the status of your project.",
  },
  {
    question: "Can I hire a dedicated development team?",
    answer: "Absolutely! We offer dedicated team arrangements where you get a committed group of developers, designers, and project managers working exclusively on your project.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 relative bg-[#f8f8f8]">
      {/* Plus markers at section corners */}
      <PlusMarker className="top-0 left-6" />
      <PlusMarker className="top-0 right-6" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-0 rounded-2xl px-6 shadow-sm group"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                    <div className="shrink-0">
                      <Plus className="w-5 h-5 text-gray-400 transition-transform group-data-[state=open]:rotate-45" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-5">
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
