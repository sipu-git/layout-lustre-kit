import { Check } from "lucide-react";

const features = [
  "Understanding Your Business",
  "Reliable & Fast Execution",
  "Transparent Collaboration",
  "Scalable Growth",
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/10 border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-30">🚀</div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-24 h-24 rounded-xl border border-primary/30 bg-card/50" />
              <div className="absolute bottom-4 right-4 w-32 h-32 rounded-xl border border-primary/30 bg-card/50" />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              \\ About Us \\
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Collaborate with an Agency That Loves Challenges
            </h2>
            <p className="text-muted-foreground mb-8">
              Much more than just a service provider, we want to be a true technical partner for our customers.
            </p>

            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Partnering with You to Build Impactful Digital Solutions
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We don't just develop websites and apps—we bring your ideas to life with scalable, high-performance solutions. With a blend of creativity and technology, we craft seamless, user-focused experiences that help businesses grow and stand out in the digital landscape.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
