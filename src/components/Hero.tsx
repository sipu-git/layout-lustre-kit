import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Availability Badge */}
          <div className="animate-fade-in-up mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full uppercase tracking-wider">
                2 Slots Left
              </span>
              <span className="text-muted-foreground text-sm">Accepting New Projects</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Creator Of Tailor Made{" "}
            <span className="block">Efficient Digital Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            We Craft Seamless Digital Experiences With{" "}
            <span className="text-foreground font-medium">UI/UX Design, Framer Development, Web & App Development</span>{" "}
            To Help Businesses Grow.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="lg" className="group">
              Let's Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Hero Image - Code Editor Mockup */}
          <div className="animate-fade-in-up animation-delay-400 mt-16 w-full max-w-3xl relative">
            {/* Floating Labels */}
            <div className="absolute -left-4 top-1/3 animate-float animation-delay-200 hidden lg:block">
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Mobile Application</span>
              </div>
            </div>

            <div className="absolute -right-4 top-12 animate-float hidden lg:block">
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Product Design</span>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 animate-float animation-delay-400 hidden lg:block">
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Web Development</span>
              </div>
            </div>

            {/* Code Editor */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden card-shadow">
              {/* Editor Header */}
              <div className="flex items-center gap-4 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    </svg>
                    index.js
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    </svg>
                    readme.md
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    </svg>
                    .gitignore
                  </span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-muted-foreground">// Imports</div>
                <div>
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-blue-400">mongoose</span>,{" "}
                  <span className="text-foreground">{"{"}</span>{" "}
                  <span className="text-yellow-400">Schema</span>{" "}
                  <span className="text-foreground">{"}"}</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">'mongoose'</span>
                </div>
                <br />
                <div className="text-muted-foreground">// Collection name</div>
                <div>
                  <span className="text-purple-400">export const</span>{" "}
                  <span className="text-blue-400">collection</span>{" "}
                  <span className="text-foreground">=</span>{" "}
                  <span className="text-green-400">'Product'</span>
                </div>
                <br />
                <div className="text-muted-foreground">// Schema</div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">schema</span>{" "}
                  <span className="text-foreground">=</span>{" "}
                  <span className="text-purple-400">new</span>{" "}
                  <span className="text-yellow-400">Schema</span>
                  <span className="text-foreground">{"({"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-foreground">name:</span>{" "}
                  <span className="text-foreground">{"{"}</span>
                </div>
                <div className="pl-8">
                  <span className="text-foreground">type:</span>{" "}
                  <span className="text-yellow-400">String</span>,
                </div>
                <div className="pl-8">
                  <span className="text-foreground">required:</span>{" "}
                  <span className="text-purple-400">true</span>
                </div>
                <div className="pl-4">
                  <span className="text-foreground">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
