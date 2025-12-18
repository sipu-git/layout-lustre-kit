const technologies = [
  { 
    name: "React", 
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
      </svg>
    ),
    hasDotPattern: true,
  },
  { 
    name: "aws", 
    icon: (
      <span className="text-2xl font-bold tracking-tight text-foreground">aws</span>
    ),
    hasDotPattern: false,
  },
  { 
    name: "Framer", 
    icon: (
      <svg className="w-10 h-10 text-foreground" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 0h16v8H12L4 0zm0 8h8l8 8H4V8zm0 8h8v8l-8-8z"/>
      </svg>
    ),
    hasDotPattern: false,
  },
  { 
    name: "PostgreSQL", 
    icon: (
      <svg className="w-10 h-10 text-foreground" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    hasDotPattern: false,
  },
  { 
    name: "TypeScript", 
    icon: (
      <span className="text-xl font-bold text-foreground">TS</span>
    ),
    hasDotPattern: false,
  },
  { 
    name: "Node.js", 
    icon: (
      <svg className="w-10 h-10 text-foreground" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.487-.169.586-.207 1.106-.5.054-.032.126-.018.182.015l1.872 1.112c.068.038.166.038.228 0l7.291-4.213c.068-.039.11-.118.11-.2V7.9c0-.084-.042-.161-.11-.201l-7.291-4.207c-.068-.039-.158-.039-.226 0L4.588 7.7c-.068.04-.112.117-.112.2v8.435c0 .083.044.159.112.199l1.993 1.155c1.08.54 1.745-.096 1.745-.738V8.597c0-.118.094-.212.212-.212h.93c.115 0 .212.094.212.212v8.354c0 1.448-.788 2.28-2.161 2.28-.422 0-.752 0-1.678-.458l-1.914-1.102A1.548 1.548 0 013 16.335V7.9c0-.565.303-1.092.772-1.375l7.291-4.213c.461-.259 1.073-.259 1.528 0l7.291 4.213c.469.283.772.81.772 1.375v8.435c0 .565-.303 1.09-.772 1.373l-7.291 4.212c-.24.128-.497.065-.591.065z"/>
      </svg>
    ),
    hasDotPattern: false,
  },
];

const Technologies = () => {
  return (
    <section className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
            \\ TECHNOLOGY \\
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Technologies That Power Our Web Agency
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="relative">
          {/* Grid with plus markers */}
          <div className="grid grid-cols-3 gap-px bg-border">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="relative aspect-square bg-background flex flex-col items-center justify-center p-8 group cursor-pointer animate-glitch"
              >
                {/* Dot pattern for first card */}
                {tech.hasDotPattern && (
                  <div className="absolute inset-0 dot-pattern opacity-50" />
                )}
                
                {/* Corner plus markers */}
                <span className="absolute -top-2 -left-2 text-muted-foreground text-xs">+</span>
                <span className="absolute -top-2 -right-2 text-muted-foreground text-xs">+</span>
                <span className="absolute -bottom-2 -left-2 text-muted-foreground text-xs">+</span>
                <span className="absolute -bottom-2 -right-2 text-muted-foreground text-xs">+</span>

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>

                {/* Hover glitch effect overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          {/* Outer border markers */}
          <span className="absolute -top-4 left-0 text-muted-foreground text-xs">+</span>
          <span className="absolute -top-4 right-0 text-muted-foreground text-xs">+</span>
          <span className="absolute -bottom-4 left-0 text-muted-foreground text-xs">+</span>
          <span className="absolute -bottom-4 right-0 text-muted-foreground text-xs">+</span>
        </div>
      </div>
    </section>
  );
};

export default Technologies;