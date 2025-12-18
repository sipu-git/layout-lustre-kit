import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                \\ ABOUT \\
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                We Thrive On Challenges
              </h1>
              <p className="text-muted-foreground text-lg">
                We Don't Just Develop Websites And Apps—We Bring Your Ideas To Life With Scalable, High-Performance Solutions.
              </p>
            </div>

            {/* Hero Image */}
            <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-card border border-border">
              <div className="w-full h-full bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                <span className="text-8xl opacity-20">👥</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 section-light">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary text-sm font-mono tracking-widest uppercase mb-4 block">
                  \\ OUR MISSION \\
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--light-foreground))] mb-6">
                  Building Digital Excellence
                </h2>
                <p className="text-[hsl(var(--light-muted))] mb-4 leading-relaxed">
                  At SparkradiX, we believe in transforming ideas into powerful digital experiences. Our mission is to partner with businesses of all sizes to create solutions that drive growth and innovation.
                </p>
                <p className="text-[hsl(var(--light-muted))] leading-relaxed">
                  With a team of passionate developers, designers, and strategists, we deliver projects that exceed expectations and stand the test of time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">175+</div>
                  <div className="text-sm text-[hsl(var(--light-muted))]">Projects Delivered</div>
                </div>
                <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">96%</div>
                  <div className="text-sm text-[hsl(var(--light-muted))]">Client Satisfaction</div>
                </div>
                <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-[hsl(var(--light-muted))]">Team Members</div>
                </div>
                <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-[hsl(var(--light-muted))]">Years Experience</div>
                </div>
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