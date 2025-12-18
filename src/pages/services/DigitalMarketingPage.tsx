import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DigitalMarketingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                // DIGITAL MARKETING //
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Grow Your Brand With Data-Driven Marketing
              </h1>
              <p className="text-muted-foreground text-lg">
                We Help Businesses Reach Their Target Audience Through Strategic Digital Marketing Campaigns That Deliver Results.
              </p>
            </div>

            {/* Hero Visual */}
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-card border border-border rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl">📈</span>
                  <p className="text-muted-foreground mt-4">Analytics & Growth</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 section-light">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl">
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">SEO Optimization</h3>
                <p className="text-[hsl(var(--light-muted))]">Improve your search rankings and drive organic traffic.</p>
              </div>
              <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl">
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">Social Media Marketing</h3>
                <p className="text-[hsl(var(--light-muted))]">Engage your audience across all major platforms.</p>
              </div>
              <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl">
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">Performance Analytics</h3>
                <p className="text-[hsl(var(--light-muted))]">Track and optimize campaigns with detailed insights.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMarketingPage;