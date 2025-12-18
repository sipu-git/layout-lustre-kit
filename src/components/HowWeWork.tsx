import { TrendingUp } from "lucide-react";

const steps = [
  {
    number: "STEP 1",
    title: "Plan",
    description: "We Dive Into Your Goals And Craft A Clear, Winning Strategy.",
    visual: (
      <div className="relative w-full h-40 flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-primary rounded-lg rotate-45 relative">
          <div className="absolute inset-2 border border-muted-foreground/30 rounded" />
        </div>
        <div className="absolute right-1/3 top-1/2 -translate-y-1/2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg">+</div>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-muted/50 rounded-full px-3 py-1">
          <div className="w-6 h-6 rounded-full border-2 border-dashed border-muted-foreground" />
          <span className="text-sm text-muted-foreground">You</span>
        </div>
      </div>
    ),
  },
  {
    number: "STEP 2",
    title: "Build",
    description: "Design, Develop, And Launch — Fast, Secure, And Scalable.",
    visual: (
      <div className="relative w-full h-40 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-1">
          <div className="w-8 h-8 bg-primary/80 rounded" />
          <div className="w-8 h-16 bg-primary rounded col-span-1 row-span-2" />
          <div className="w-8 h-8 bg-primary/60 rounded" />
          <div className="w-8 h-8 bg-primary/40 rounded" />
          <div className="w-8 h-8 bg-primary/50 rounded" />
        </div>
      </div>
    ),
  },
  {
    number: "STEP 3",
    title: "Grow",
    description: "We Support, Optimize, And Scale As Your Business Evolves.",
    visual: (
      <div className="relative w-full h-40 flex items-center justify-center">
        <div className="flex items-end gap-2 h-24">
          <div className="w-1 h-8 bg-muted-foreground/30 rounded" />
          <div className="w-1 h-12 bg-muted-foreground/30 rounded" />
          <div className="w-1 h-10 bg-muted-foreground/30 rounded" />
          <div className="w-1 h-16 bg-muted-foreground/30 rounded" />
          <div className="w-1 h-14 bg-muted-foreground/30 rounded" />
          <div className="w-1 h-20 bg-primary rounded" />
        </div>
        <div className="absolute right-8 top-4 flex items-center gap-1 bg-primary/20 text-primary px-2 py-1 rounded text-xs">
          +43.5%
        </div>
      </div>
    ),
  },
];

const stats = [
  { value: "175+", label: "Clients Served" },
  { value: "96%", label: "Client Satisfaction" },
  { value: "85%", label: "Repeat Clients" },
  { value: "100%", label: "Transparent Process" },
];

const HowWeWork = () => {
  return (
    <section className="py-24 relative section-light-gradient">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
              \\ HOW WE WORK \\
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--light-foreground))]">
              A Simple, Scalable<br />Process Built for Results
            </h2>
          </div>
          <p className="text-[hsl(var(--light-muted))] max-w-sm lg:text-right lg:pt-12">
            We Bring Your Ideas To Life Through A Clear Approach That Combines Strategy, Execution, And Growth.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              {step.visual}
              <span className="text-xs text-primary font-mono tracking-wider mb-2 block">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold text-[hsl(var(--light-foreground))] mb-3">{step.title}</h3>
              <p className="text-[hsl(var(--light-muted))] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[hsl(var(--light-border))]">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-[hsl(var(--light-foreground))]" />
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--light-foreground))]">{stat.value}</div>
                <div className="text-sm text-[hsl(var(--light-muted))]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;