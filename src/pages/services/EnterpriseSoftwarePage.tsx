import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Workflow, Link2, BarChart3, Lock, Cloud, Settings } from "lucide-react";

const projects = [
  { 
    name: "Green Governance Platform", 
    category: "Enterprise Software",
    color: "from-green-500/20 to-emerald-500/10",
  },
  { 
    name: "Commerce Pulse Dashboard", 
    category: "Analytics Platform",
    color: "from-primary/20 to-cyan-500/10",
  },
  { 
    name: "Project Alpha", 
    category: "Task Management",
    color: "from-purple-500/20 to-pink-500/10",
  },
  { 
    name: "DataFlow Systems", 
    category: "Data Pipeline",
    color: "from-orange-500/20 to-amber-500/10",
  },
];

const deliverables = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline operations with intelligent automation systems.",
  },
  {
    icon: Link2,
    title: "Custom Integrations",
    description: "Seamlessly connect with your existing tools and platforms.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Make informed decisions with powerful reporting dashboards.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security with role-based access control.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions that grow with your business.",
  },
  {
    icon: Settings,
    title: "Custom Configuration",
    description: "Flexible systems tailored to your unique business needs.",
  },
];

const PlusMarker = ({ className = "" }: { className?: string }) => (
  <span className={`absolute text-muted-foreground text-lg font-light select-none ${className}`}>+</span>
);

const EnterpriseSoftwarePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                // ENTERPRISE SOFTWARE DEVELOPMENT //
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 italic">
                Digitize. Optimize. Scale.
              </h1>
              <p className="text-muted-foreground text-lg">
                We Build Mission-Critical Enterprise Systems To Automate Workflows, Manage Operations, And Drive Growth.
              </p>
            </div>

            {/* Hero Visual - Kanban Board */}
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl overflow-hidden shadow-xl">
                <div className="h-full flex">
                  {/* Sidebar */}
                  <div className="w-48 border-r border-[hsl(var(--light-border))] p-4">
                    <div className="text-sm font-semibold text-[hsl(var(--light-foreground))] mb-4">Project Alpha</div>
                    <div className="space-y-2">
                      <div className="text-xs text-[hsl(var(--light-muted))] flex items-center gap-2">
                        <span>🏠</span> Home
                      </div>
                      <div className="text-xs text-[hsl(var(--light-muted))] flex items-center gap-2">
                        <span>💬</span> Messages
                      </div>
                      <div className="text-xs text-[hsl(var(--light-muted))] flex items-center gap-2">
                        <span>✓</span> Tasks
                      </div>
                    </div>
                  </div>
                  {/* Main content */}
                  <div className="flex-1 p-4">
                    <div className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-4">Kanban</div>
                    <div className="grid grid-cols-3 gap-4 h-[calc(100%-3rem)]">
                      <div className="bg-[hsl(var(--light-background))] rounded-lg p-3">
                        <div className="text-xs font-medium text-[hsl(var(--light-foreground))] mb-2">● To Do</div>
                        <div className="space-y-2">
                          <div className="bg-[hsl(var(--light-card))] rounded p-2 text-xs">Brainstorming</div>
                        </div>
                      </div>
                      <div className="bg-[hsl(var(--light-background))] rounded-lg p-3">
                        <div className="text-xs font-medium text-[hsl(var(--light-foreground))] mb-2">● In Progress</div>
                        <div className="space-y-2">
                          <div className="bg-[hsl(var(--light-card))] rounded p-2 text-xs">Onboarding</div>
                        </div>
                      </div>
                      <div className="bg-[hsl(var(--light-background))] rounded-lg p-3">
                        <div className="text-xs font-medium text-[hsl(var(--light-foreground))] mb-2">● Done</div>
                        <div className="space-y-2">
                          <div className="bg-[hsl(var(--light-card))] rounded p-2 text-xs">App Design</div>
                        </div>
                      </div>
                    </div>
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
                Enterprise Projects
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
                    <div className={`absolute inset-6 rounded-2xl bg-gradient-to-br ${project.color} border border-border overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 bg-card/50 rounded-xl border border-border/50 flex items-center justify-center">
                          <span className="text-4xl opacity-30">💼</span>
                        </div>
                      </div>
                    </div>
                    
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
            </div>

            <div className="relative max-w-5xl mx-auto">
              <PlusMarker className="-top-3 -left-3" />
              <PlusMarker className="-top-3 -right-3" />
              <PlusMarker className="-top-3 left-1/3 -translate-x-1/2 hidden md:block" />
              <PlusMarker className="-top-3 left-2/3 -translate-x-1/2 hidden md:block" />
              <PlusMarker className="-bottom-3 -left-3" />
              <PlusMarker className="-bottom-3 -right-3" />
              <PlusMarker className="-bottom-3 left-1/3 -translate-x-1/2 hidden md:block" />
              <PlusMarker className="-bottom-3 left-2/3 -translate-x-1/2 hidden md:block" />
              
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
                Ready to transform your enterprise?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how we can help digitize and optimize your operations.
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

export default EnterpriseSoftwarePage;
