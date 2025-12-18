import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Sparking Digital
            <span className="block">Innovations</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-100 text-base md:text-lg text-muted-foreground max-w-xl mb-10">
            We Design And Develop Custom Digital Products, That Capture Your Brand's Essence.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-200">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-lg">
              Let's Get Started
            </Button>
          </div>

          {/* Hero Image - Code Editor Mockup */}
          <div className="animate-fade-in-up animation-delay-300 mt-16 w-full max-w-3xl relative">
            {/* Floating Labels */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 animate-float animation-delay-200 hidden lg:block">
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Mobile Application</span>
              </div>
            </div>

            <div className="absolute -right-8 top-8 animate-float hidden lg:block">
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Product Design</span>
              </div>
            </div>

            <div className="absolute -right-8 bottom-1/4 animate-float animation-delay-400 hidden lg:block">
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Web Developement</span>
              </div>
            </div>

            {/* Code Editor */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden card-shadow">
              {/* Editor Header - File Tabs */}
              <div className="flex items-center gap-6 px-6 py-4 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  </svg>
                  index.js
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  </svg>
                  readme.md
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  </svg>
                  .gitignore
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-loose">
                <div className="flex gap-4">
                  <div className="text-muted-foreground/50 select-none text-right w-6">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                  </div>
                  <div>
                    <div><span className="text-muted-foreground">// Imports</span></div>
                    <div>
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-primary">mongoose</span>,{" "}
                      <span className="text-foreground">{"{"}</span>{" "}
                      <span className="text-yellow-400">Schema</span>{" "}
                      <span className="text-foreground">{"}"}</span>{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-green-400">'mongoose'</span>
                    </div>
                    <div>&nbsp;</div>
                    <div><span className="text-muted-foreground">// Collection name</span></div>
                    <div>
                      <span className="text-purple-400">export const</span>{" "}
                      <span className="text-primary">collection</span>{" "}
                      <span className="text-foreground">=</span>{" "}
                      <span className="text-green-400">'Product'</span>|
                    </div>
                    <div>&nbsp;</div>
                    <div><span className="text-muted-foreground">// Schema</span></div>
                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-primary">schema</span>{" "}
                      <span className="text-foreground">=</span>{" "}
                      <span className="text-purple-400">new</span>{" "}
                      <span className="text-yellow-400">Schema</span>
                      <span className="text-foreground">({"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-foreground">name:</span>{" "}
                      <span className="text-foreground">{"{"}</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-foreground">type:</span>{" "}
                      <span className="text-yellow-400">String</span>,
                    </div>
                  </div>
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