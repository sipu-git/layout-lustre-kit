import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Monitor, Code, Zap, Shield, Smartphone, Database } from "lucide-react";

const projects = [
  { 
    name: "Green Governance Platform", 
    category: "Enterprise Software",
    color: "from-green-500/20 to-emerald-500/10",
  },
  { 
    name: "Safe Forest", 
    category: "Web Application",
    color: "from-primary/20 to-cyan-500/10",
  },
  { 
    name: "The Virtual Plaza", 
    category: "E-Commerce",
    color: "from-purple-500/20 to-pink-500/10",
  },
  { 
    name: "BraidPay Website", 
    category: "Fintech",
    color: "from-orange-500/20 to-amber-500/10",
  },
];

const deliverables = [
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Applications that work seamlessly across all devices and screen sizes.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed with lightning-fast load times and smooth interactions.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Built with security best practices and designed to grow with your business.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Well-documented, maintainable code that follows industry best practices.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Solutions that work flawlessly on web, mobile, and desktop platforms.",
  },
  {
    icon: Database,
    title: "Backend Integration",
    description: "Seamless API integrations and robust database architecture.",
  },
];

const PlusMarker = ({ className = "" }: { className?: string }) => (
  <span className={`absolute text-muted-foreground text-lg font-light select-none ${className}`}>+</span>
);

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                // WEB AND SYSTEM APPLICATIONS //
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 italic">
                Build High-Performance Apps That Run Flawlessly — Anywhere
              </h1>
              <p className="text-muted-foreground text-lg">
                We Craft Scalable, Secure, And Responsive Web And System Applications Designed For Speed And User Experience.
              </p>
            </div>

            {/* Hero Visual */}
            <div className="max-w-4xl mx-auto relative">
              <div className="aspect-video bg-card border border-border rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Phone mockup */}
                <div className="relative">
                  <div className="w-48 h-80 bg-[hsl(var(--light-card))] rounded-3xl border-4 border-[hsl(var(--light-border))] shadow-xl">
                    <div className="w-full h-full rounded-2xl overflow-hidden p-2">
                      <div className="w-full h-full bg-gradient-to-b from-[hsl(var(--light-background))] to-[hsl(var(--light-card))] rounded-xl flex flex-col items-center justify-center">
                        <span className="text-4xl">📱</span>
                        <span className="text-sm text-[hsl(var(--light-muted))] mt-2">App Preview</span>
                      </div>
                    </div>
                  </div>
                  {/* Floating stats */}
                  <div className="absolute -left-32 top-8 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-xl p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">↑</span>
                      <span className="text-sm font-semibold text-[hsl(var(--light-foreground))]">347.23%</span>
                    </div>
                  </div>
                  <div className="absolute -right-32 bottom-16 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-xl p-3 shadow-lg">
                    <div className="text-xs text-[hsl(var(--light-muted))]">Total Income</div>
                    <div className="text-lg font-bold text-[hsl(var(--light-foreground))]">567.34K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                \\ OUR WORK \\
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Projects We've Delivered
              </h2>
            </div>

            <div className="relative">
              {/* Corner Plus Markers */}
              <PlusMarker className="-top-3 -left-3" />
              <PlusMarker className="-top-3 -right-3" />
              <PlusMarker className="-top-3 left-1/2 -translate-x-1/2" />
              <PlusMarker className="-bottom-3 -left-3" />
              <PlusMarker className="-bottom-3 -right-3" />
              <PlusMarker className="-bottom-3 left-1/2 -translate-x-1/2" />
              
              {/* Border lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-border" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
                <div className="absolute top-0 bottom-0 left-0 w-px bg-border" />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-border" />
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border hidden md:block" />
              </div>

              <div className="grid md:grid-cols-2">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="group relative aspect-[4/3] p-6 hover:bg-card/50 transition-all duration-300"
                  >
                    {/* Project Preview */}
                    <div className={`absolute inset-6 rounded-2xl bg-gradient-to-br ${project.color} border border-border overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 bg-card/50 rounded-xl border border-border/50 flex items-center justify-center">
                          <span className="text-4xl opacity-30">📱</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{project.category}</span>
                        <h3 className="text-lg font-semibold mt-1">{project.name}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-card">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-24 section-light">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
                \\ OUR DELIVERABLES \\
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--light-foreground))] mb-6">
                What You Get
              </h2>
              <p className="text-[hsl(var(--light-muted))]">
                Every project includes our comprehensive approach to quality and excellence.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Plus Markers */}
              <PlusMarker className="-top-3 -left-3" />
              <PlusMarker className="-top-3 -right-3" />
              <PlusMarker className="-top-3 left-1/3 -translate-x-1/2 hidden md:block" />
              <PlusMarker className="-top-3 left-2/3 -translate-x-1/2 hidden md:block" />
              <PlusMarker className="-bottom-3 -left-3" />
              <PlusMarker className="-bottom-3 -right-3" />
              <PlusMarker className="-bottom-3 left-1/3 -translate-x-1/2 hidden md:block" />
              <PlusMarker className="-bottom-3 left-2/3 -translate-x-1/2 hidden md:block" />
              
              {/* Border lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--light-border))]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[hsl(var(--light-border))]" />
                <div className="absolute top-0 bottom-0 left-0 w-px bg-[hsl(var(--light-border))]" />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-[hsl(var(--light-border))]" />
                <div className="absolute top-0 bottom-0 left-1/3 w-px bg-[hsl(var(--light-border))] hidden md:block" />
                <div className="absolute top-0 bottom-0 left-2/3 w-px bg-[hsl(var(--light-border))] hidden md:block" />
              </div>

              <div className="grid md:grid-cols-3">
                {deliverables.map((item, index) => (
                  <div key={index} className="p-8">
                    <div className="w-14 h-14 border border-[hsl(var(--light-border))] rounded-xl flex items-center justify-center mb-6 bg-[hsl(var(--light-card))]">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(var(--light-foreground))] mb-3">{item.title}</h3>
                    <p className="text-sm text-[hsl(var(--light-muted))] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to build your next project?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how we can help bring your vision to life.
              </p>
              <Link 
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
