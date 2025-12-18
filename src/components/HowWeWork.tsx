import { Phone, CreditCard, Rocket } from "lucide-react";

const steps = [
  {
    number: "step 1",
    title: "Book a Call",
    description: "Schedule a quick call to discuss your goals and requirements.",
    icon: Phone,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    number: "step 2",
    title: "Process Payment",
    description: "Secure your spot with a smooth and hassle-free payment process.",
    icon: CreditCard,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    number: "step 3",
    title: "Get Your Solution",
    description: "We design, develop, and deliver a high-converting digital solution.",
    icon: Rocket,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
];

const stats = [
  { value: "$55M+", label: "Problems Solved" },
  { value: "96%", label: "Client Satisfaction" },
  { value: "85%", label: "Repeat Clients" },
  { value: "100%", label: "Transparent Process" },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              \\ How We Work \\
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              A Simple, Efficient<br />Process
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            We Follow A Streamlined Approach To Ensure Fast, Hassle-Free Execution While Keeping Your Goals In Mind.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${step.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <step.icon className={`w-7 h-7 ${step.color}`} />
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-2xl text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
