import { Code, Zap } from "lucide-react";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "JS" },
  { name: "Framer", icon: "◈" },
  { name: "VS Code", icon: "◆" },
  { name: "Python", icon: "🐍" },
  { name: "HTML", icon: "◇" },
];

const Technologies = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            \\ Technology \\
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Technologies That Power Our Web Agency
          </h2>
        </div>

        {/* Tech Icons Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <span className="text-sm text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Clean and efficient code</h3>
              <p className="text-sm text-muted-foreground">
                We write scalable, maintainable, and high-performance code.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Lightning fast optimization</h3>
              <p className="text-sm text-muted-foreground">
                We ensure fast-loading and optimized experiences across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
