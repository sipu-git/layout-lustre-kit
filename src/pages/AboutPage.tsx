import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Target, Users, Lightbulb, Shield } from "lucide-react";

const ethics = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, pushing boundaries to deliver exceptional results.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in true partnership, working closely with our clients to achieve shared goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain transparency and honesty in all our business relationships and practices.",
  },
];

const PlusMarker = ({ className = "" }: { className?: string }) => (
  <span className={`absolute text-muted-foreground text-lg font-light select-none ${className}`}>+</span>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                \\ ABOUT US \\
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 italic">
                We Thrive On Challenges And<br />Build What Matters
              </h1>
              <p className="text-muted-foreground text-lg">
                We Don't Just Develop Websites And Apps—We Bring Your Ideas To Life With Scalable, High-Performance Solutions That Drive Real Business Growth.
              </p>
            </div>

            {/* Hero Image */}
            <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-card border border-border">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-card to-muted/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl opacity-50">🚀</span>
                  <p className="text-muted-foreground mt-4">Building the Future Together</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 section-light">
          <div className="container mx-auto px-6">
            <div className="relative max-w-5xl mx-auto">
              {/* Plus Markers */}
              <PlusMarker className="-top-3 -left-3" />
              <PlusMarker className="-top-3 -right-3" />
              <PlusMarker className="-bottom-3 -left-3" />
              <PlusMarker className="-bottom-3 -right-3" />
              
              {/* Border lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--light-border))]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[hsl(var(--light-border))]" />
                <div className="absolute top-0 bottom-0 left-0 w-px bg-[hsl(var(--light-border))]" />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-[hsl(var(--light-border))]" />
              </div>

              <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12">
                <div>
                  <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
                    \\ WHO WE ARE \\
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--light-foreground))] mb-6">
                    Your Technical Partner For Digital Excellence
                  </h2>
                </div>
                <div>
                  <p className="text-[hsl(var(--light-muted))] mb-4 leading-relaxed">
                    At SparkradiX, we believe in transforming ideas into powerful digital experiences. We're not just developers—we're strategic partners who understand that technology should serve your business goals.
                  </p>
                  <p className="text-[hsl(var(--light-muted))] leading-relaxed mb-6">
                    With a team of passionate developers, designers, and strategists, we deliver projects that exceed expectations and stand the test of time. From startups to enterprises, we've helped businesses across industries achieve digital transformation.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[hsl(var(--light-border))] rounded-full text-sm text-[hsl(var(--light-foreground))] hover:border-[hsl(var(--light-foreground))] transition-colors"
                  >
                    Get in Touch
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 bg-card border border-border rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">175+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">96%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Ethics Section */}
        <section className="py-24 section-light">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
                \\ OUR VALUES \\
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--light-foreground))] mb-6">
                Company Ethics
              </h2>
              <p className="text-[hsl(var(--light-muted))]">
                The principles that guide our work and define who we are as a team.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Plus Markers */}
              <PlusMarker className="-top-3 -left-3" />
              <PlusMarker className="-top-3 -right-3" />
              <PlusMarker className="-top-3 left-1/2 -translate-x-1/2" />
              <PlusMarker className="-bottom-3 -left-3" />
              <PlusMarker className="-bottom-3 -right-3" />
              <PlusMarker className="-bottom-3 left-1/2 -translate-x-1/2" />
              
              {/* Border lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--light-border))]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[hsl(var(--light-border))]" />
                <div className="absolute top-0 bottom-0 left-0 w-px bg-[hsl(var(--light-border))]" />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-[hsl(var(--light-border))]" />
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[hsl(var(--light-border))]" />
              </div>

              <div className="grid md:grid-cols-2">
                {ethics.map((item, index) => (
                  <div key={index} className="p-8 md:p-10">
                    <div className="w-14 h-14 border border-[hsl(var(--light-border))] rounded-xl flex items-center justify-center mb-6 bg-[hsl(var(--light-card))]">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">{item.title}</h3>
                    <p className="text-[hsl(var(--light-muted))] leading-relaxed">{item.description}</p>
                  </div>
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

export default AboutPage;
