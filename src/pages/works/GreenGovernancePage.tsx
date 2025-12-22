import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";

const features = [
  "Environmental compliance tracking",
  "Sustainability reporting dashboard",
  "Carbon footprint calculator",
  "Regulatory document management",
  "Automated compliance alerts",
  "Real-time monitoring integration",
];

const techStack = ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "GraphQL"];

const PlusMarker = ({ className = "" }: { className?: string }) => (
  <span className={`absolute text-muted-foreground text-lg font-light select-none ${className}`}>+</span>
);

const GreenGovernancePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative bg-background">
          <div className="container mx-auto px-6">
            {/* Back Link */}
            <Link 
              to="/works" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Works
            </Link>

            <div className="max-w-3xl mb-16">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                \\ CASE STUDY \\
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Green Governance Platform
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                A comprehensive enterprise platform for environmental compliance tracking, sustainability reporting, and regulatory management. Built for organizations committed to environmental responsibility.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm">Enterprise Software</span>
                <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">Web Application</span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm">Dashboard</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <PlusMarker className="-top-3 -left-3" />
              <PlusMarker className="-top-3 -right-3" />
              <PlusMarker className="-bottom-3 -left-3" />
              <PlusMarker className="-bottom-3 -right-3" />
              
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-border" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
                <div className="absolute top-0 bottom-0 left-0 w-px bg-border" />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-border" />
              </div>

              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-border rounded-2xl overflow-hidden p-8">
                <div className="w-full h-full bg-card/50 rounded-xl border border-border flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-8xl">🌿</span>
                    <p className="text-muted-foreground mt-4">Platform Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 section-light">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
                  \\ THE CHALLENGE \\
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--light-foreground))] mb-6">
                  Managing Environmental Compliance at Scale
                </h2>
                <p className="text-[hsl(var(--light-muted))] leading-relaxed mb-4">
                  Our client, a multinational corporation, needed a centralized platform to manage environmental compliance across 50+ facilities worldwide. They were struggling with manual reporting processes, missed deadlines, and inconsistent data collection.
                </p>
                <p className="text-[hsl(var(--light-muted))] leading-relaxed">
                  The existing systems were fragmented, leading to regulatory risks and inefficiencies. They needed a unified solution that could scale with their operations while ensuring compliance with diverse regional regulations.
                </p>
              </div>
              <div>
                <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
                  \\ THE SOLUTION \\
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--light-foreground))] mb-6">
                  A Unified Governance Platform
                </h2>
                <p className="text-[hsl(var(--light-muted))] leading-relaxed mb-6">
                  We designed and built a comprehensive platform that centralizes all environmental data, automates compliance workflows, and provides real-time visibility into sustainability metrics across the organization.
                </p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-[hsl(var(--light-foreground))]">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                \\ TECH STACK \\
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Built With Modern Technologies
              </h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <PlusMarker className="-top-3 -left-3" />
              <PlusMarker className="-top-3 -right-3" />
              <PlusMarker className="-bottom-3 -left-3" />
              <PlusMarker className="-bottom-3 -right-3" />
              
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-border" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
                <div className="absolute top-0 bottom-0 left-0 w-px bg-border" />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-border" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-colors"
                  >
                    <span className="font-semibold">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 section-light">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
                \\ RESULTS \\
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--light-foreground))] mb-6">
                Impact & Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="p-8 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-[hsl(var(--light-muted))]">Reduction in Manual Reporting</div>
              </div>
              <div className="p-8 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-[hsl(var(--light-muted))]">Compliance Rate Achieved</div>
              </div>
              <div className="p-8 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-[hsl(var(--light-muted))]">Facilities Integrated</div>
              </div>
              <div className="p-8 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3x</div>
                <div className="text-sm text-[hsl(var(--light-muted))]">Faster Report Generation</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Have a similar project in mind?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how we can help build your enterprise solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Start a Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium hover:border-foreground transition-colors"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GreenGovernancePage;
