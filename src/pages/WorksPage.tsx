import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  { name: "Safe Forest", category: "Web Application" },
  { name: "The Virtual Plaza", category: "E-Commerce" },
  { name: "BraidPay Website", category: "Fintech" },
  { name: "Commerce Pulse", category: "Dashboard" },
];

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
                \\ WORKS \\
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group relative aspect-[4/3] bg-card border border-border rounded-2xl overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-muted/20 rounded-xl border border-border/50" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-lg font-semibold mt-1">{project.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorksPage;