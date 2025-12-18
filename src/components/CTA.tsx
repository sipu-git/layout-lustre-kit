import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "Thoughtfully crafted user experiences",
  "Pixel-perfect development standards",
  "Consistent quality across every touchpoint",
];

const CTA = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="relative bg-card border border-border rounded-3xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-primary text-xl">✦</span>
                <span className="text-sm text-muted-foreground">Texsora</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                Need a web agency to develop your web or mobile project?
              </h2>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" className="group">
                Make an Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Visual Side */}
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/20 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-card/80 border border-border flex items-center justify-center">
                  <span className="text-5xl">💬</span>
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
