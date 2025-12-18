import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with them was an absolute pleasure. Their technical expertise and problem-solving skills set them apart.",
    author: "David Ross",
    company: "HealthTech Ltd",
    avatar: "DR",
  },
  {
    quote: "The team delivered beyond expectations! The design and functionality of our app have helped us scale faster than we imagined.",
    author: "Sophia Martinez",
    company: "Rayform Ltd",
    avatar: "SM",
  },
  {
    quote: "Their attention to detail and seamless execution made our web platform a success. I can highly recommend them.",
    author: "Daniel Hayes",
    company: "Macro FinServ Ltd",
    avatar: "DH",
  },
  {
    quote: "We partnered with this team to build a SaaS app for the English market. Their proactiveness and efficiency were outstanding!",
    author: "Walter White",
    company: "Baking Bad Ltd",
    avatar: "WW",
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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            \\ Testimonials \\
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            They Talk About It Better Than We Do
          </h2>
          <p className="text-muted-foreground">
            We take pride in delivering exceptional digital experiences that drive results.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
                    <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                    <p className="text-lg md:text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
