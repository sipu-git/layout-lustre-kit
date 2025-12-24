import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "Sparkradix Streamlined Our AWS Infrastructure With EKS And GitOps. Faster Rollouts, Better Transparency, Zero Hassle. A True Partner In Our Journey!",
    author: "Rydeu Logistics UG",
    avatar: "R",
  },
  {
    quote: "Our Custom ERP/CRM System Manages 27 Sites Effortlessly. Sparkradix Delivered Operational Excellence Across Projects!",
    author: "Sparkradix Infratech Pvt Ltd",
    avatar: "S",
  },
  {
    quote: "Switching To GitHub Actions And EKS Improved Our CI/CD Dramatically. Sparkradix Made Our DevOps Agile, Secure, And Scalable. Outstanding Delivery!",
    author: "Riaxie",
    avatar: "R",
  },
  {
    quote: "The team delivered our e-commerce platform ahead of schedule. Their expertise in modern web technologies is remarkable!",
    author: "TechStart Inc.",
    avatar: "T",
  },
  {
    quote: "Professional, responsive, and technically excellent. SparkradiX transformed our digital presence completely.",
    author: "GrowthLab",
    avatar: "G",
  },
];

const TestimonialCard = ({ quote, author, avatar }: { quote: string; author: string; avatar: string }) => (
  <div className="flex-shrink-0 w-[350px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <p className="text-gray-800 text-sm leading-relaxed mb-6">
      {quote}
    </p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-semibold text-sm">
          {avatar}
        </div>
        <span className="text-gray-600 text-sm font-medium">{author}</span>
      </div>
      <span className="text-gray-200 text-3xl font-serif">"</span>
    </div>
  </div>
);

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
              \\ TESTIMONIALS \\
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              They Talk About It<br />Better Than We Do
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm md:text-right">
            We Take Pride In Delivering Exceptional Digital Experiences That Drive Results.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-hidden px-6"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Double the testimonials for seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
