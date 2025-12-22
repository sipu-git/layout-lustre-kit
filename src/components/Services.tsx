import { Link } from "react-router-dom";
import { Monitor, Code, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web And System Applications",
    description: "Custom, High-Speed Websites Built For Performance And Scalability.",
    href: "/services/web-development",
  },
  {
    icon: Code,
    title: "Enterprise Software Development",
    description: "Conversion-Focused Online Stores Optimized For Seamless Shopping Experiences.",
    href: "/services/enterprise-software",
  },
];

const PlusMarker = ({ className = "" }: { className?: string }) => (
  <span className={`absolute text-muted-foreground text-lg font-light select-none ${className}`}>+</span>
);

const Services = () => {
  return (
    <section id="services" className="py-24 relative section-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
            \\ SERVICES \\
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--light-foreground))] mb-6">
            We build future-ready digital experiences
          </h2>
          <p className="text-[hsl(var(--light-muted))]">
            We Provide End-To-End Digital Solutions, Ensuring High Performance, Seamless User Experience, And Growth.
          </p>
        </div>

        {/* Services Grid with Plus Dividers */}
        <div className="relative">
          {/* Corner Plus Markers */}
          <PlusMarker className="-top-3 -left-3" />
          <PlusMarker className="-top-3 -right-3" />
          <PlusMarker className="-bottom-3 -left-3" />
          <PlusMarker className="-bottom-3 -right-3" />
          
          {/* Horizontal center plus markers */}
          <PlusMarker className="-top-3 left-1/2 -translate-x-1/2" />
          <PlusMarker className="-bottom-3 left-1/2 -translate-x-1/2" />
          
          {/* Grid Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Horizontal line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--light-border))]" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[hsl(var(--light-border))]" />
            {/* Vertical center line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[hsl(var(--light-border))] hidden md:block" />
            {/* Vertical side lines */}
            <div className="absolute top-0 bottom-0 left-0 w-px bg-[hsl(var(--light-border))]" />
            <div className="absolute top-0 bottom-0 right-0 w-px bg-[hsl(var(--light-border))]" />
          </div>

          <div className="grid md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group p-8 hover:bg-[hsl(var(--light-card))] transition-all duration-300"
              >
                {/* Left side plus marker for second card on mobile */}
                {index === 1 && (
                  <PlusMarker className="-left-3 top-0 -translate-y-1/2 md:hidden" />
                )}
                
                <div className="w-14 h-14 border border-[hsl(var(--light-border))] rounded-xl flex items-center justify-center mb-6 bg-[hsl(var(--light-card))]">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">{service.title}</h3>
                <p className="text-[hsl(var(--light-muted))] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Link 
                  to={service.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[hsl(var(--light-border))] rounded-full text-sm text-[hsl(var(--light-foreground))] hover:border-[hsl(var(--light-foreground))] transition-colors group/btn"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>

                {/* Preview Image Placeholder */}
                <div className="mt-8 aspect-video bg-gradient-to-br from-[hsl(var(--light-border))] to-transparent rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-[hsl(var(--light-card))] rounded-lg shadow-inner flex items-center justify-center">
                    <div className="w-3/4 h-3/4 border border-[hsl(var(--light-border))] rounded-lg bg-gradient-to-b from-[hsl(var(--light-background))] to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
