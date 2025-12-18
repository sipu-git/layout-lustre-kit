import { Check } from "lucide-react";

const features = [
  "Deep Business Understanding",
  "Reliable Execution & Speed",
  "Transparent Collaboration",
  "Built for Scalable Growth",
];

const About = () => {
  return (
    <section id="about" className="py-24 relative section-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
              \\ ABOUT US \\
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--light-foreground))]">
              We Thrive on Complex<br />Challenges
            </h2>
          </div>
          <p className="text-[hsl(var(--light-muted))] max-w-sm lg:text-right lg:pt-12">
            More Than A Service Provider, We're Your Trusted Technology Partner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[hsl(var(--light-border))]">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--light-foreground)/0.1)] to-transparent" />
              {/* Placeholder for team image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-gradient-to-br from-[hsl(var(--light-muted)/0.3)] to-[hsl(var(--light-muted)/0.1)] rounded-xl flex items-center justify-center">
                  <span className="text-6xl opacity-20">👥</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--light-foreground))] mb-6">
              Partnering With You To Build Impactful Digital Solutions
            </h3>
            
            <p className="text-[hsl(var(--light-muted))] mb-4 leading-relaxed">
              We Don't Just Build Apps And Websites — We Bring Bold Ideas To Life Through Scalable, High-Performance Digital Solutions.
            </p>
            
            <p className="text-[hsl(var(--light-muted))] mb-8 leading-relaxed">
              Combining Creativity With Engineering Precision, We Craft Seamless, User-First Experiences That Drive Business Growth And Set You Apart In Today's Digital Landscape. Every Project Is Built With Clarity, Innovation, And A Relentless Focus On Quality.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-[hsl(var(--light-foreground))]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;