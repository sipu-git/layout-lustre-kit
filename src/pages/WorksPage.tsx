import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { 
    name: "Green Governance Platform", 
    category: "Enterprise Software",
    description: "A comprehensive platform for environmental compliance and sustainability tracking.",
    color: "from-green-500/20 to-emerald-500/10",
    href: "/works/green-governance",
  },
  { 
    name: "Safe Forest", 
    category: "Web Application",
    description: "Forest monitoring and conservation management system.",
    color: "from-primary/20 to-cyan-500/10",
    href: "/works",
  },
  { 
    name: "The Virtual Plaza", 
    category: "E-Commerce",
    description: "Virtual shopping experience with immersive 3D environment.",
    color: "from-purple-500/20 to-pink-500/10",
    href: "/works",
  },
  { 
    name: "BraidPay Website", 
    category: "Fintech",
    description: "Modern payment platform with seamless transaction experience.",
    color: "from-orange-500/20 to-amber-500/10",
    href: "/works",
  },
];

const PlusMarker = ({ className = "" }: { className?: string }) => (
  <span className={`absolute text-muted-foreground text-lg font-light select-none ${className}`}>+</span>
);

const WorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                \\ OUR WORKS \\
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 italic">
                Turning Vision Into Reality,<br />One Project At A Time
              </h1>
              <p className="text-muted-foreground text-lg">
                Explore The Projects That Define Our Creativity, Innovation, And Impact. From Startups To Agencies, We Craft Digital Experiences That Stand Out.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24 bg-background">
          <div className="container mx-auto px-6">
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
                  <Link 
                    key={index}
                    to={project.href}
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorksPage;
