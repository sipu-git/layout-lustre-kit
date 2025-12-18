import { Globe, ShoppingCart, Target, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Custom, high-speed websites built for performance and scalability.",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Conversion-focused online stores optimized for seamless shopping experiences.",
    color: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-400",
  },
  {
    icon: Target,
    title: "Funnel Creation",
    description: "High-converting funnels that turn visitors into customers.",
    color: "from-green-500/20 to-green-600/5",
    iconColor: "text-green-400",
  },
  {
    icon: Zap,
    title: "Sales Automation",
    description: "Smart automation to enhance conversions and streamline user journeys.",
    color: "from-orange-500/20 to-orange-600/5",
    iconColor: "text-orange-400",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            \\ Services \\
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your Project Deserves Real Experts
          </h2>
          <p className="text-muted-foreground">
            We provide end-to-end digital solutions, ensuring high performance, seamless user experience, and growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <span className="text-primary text-sm font-medium group-hover:underline">
                  Learn More
                </span>
              </div>

              {/* Preview Image Placeholder */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity">
                <div className="w-full h-full bg-gradient-to-tl from-primary/30 to-transparent rounded-tl-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
