import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Get tailored tech advice from our solution architects.",
  "Agile, transparent, and always on time.",
  "We stay, support, and scale with you.",
];

const CTA = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="relative bg-card border border-border rounded-3xl overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-muted-foreground text-sm font-mono">// SPARKRADIX</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                Let's turn your vision into scalable, high-impact digital reality.
              </h2>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-lg">
                Schedule a Call
              </Button>
            </div>

            {/* Visual Side - Pyramid/S Logo */}
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[300px] flex items-center justify-center">
              {/* Abstract S/pyramid shape */}
              <div className="relative w-64 h-64">
                {/* Triangle background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-48 h-48 bg-gradient-to-b from-muted/50 to-transparent"
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    }}
                  />
                </div>
                {/* S shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-muted-foreground/30" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M70 25 Q70 15 50 15 Q30 15 30 30 Q30 45 50 50 Q70 55 70 70 Q70 85 50 85 Q30 85 30 75" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="8"
                          strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;