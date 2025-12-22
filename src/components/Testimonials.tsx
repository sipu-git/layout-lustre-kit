import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with SparkradiX was a game-changer for our business. Their team delivered a stunning, high-performance website that exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "SJ",
  },
  {
    quote: "The attention to detail and technical expertise of SparkradiX is unmatched. They transformed our vision into a seamless digital experience.",
    author: "Michael Chen",
    role: "Founder, GrowthLab",
    avatar: "MC",
  },
  {
    quote: "SparkradiX delivered our enterprise solution on time and within budget. Their professionalism and communication throughout the project was exceptional.",
    author: "Emily Rodriguez",
    role: "CTO, DataFlow Systems",
    avatar: "ER",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
            \\ TESTIMONIALS \\
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What our clients say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 mt-4">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <div className="font-semibold">{testimonials[currentIndex].author}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2 ml-auto">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
