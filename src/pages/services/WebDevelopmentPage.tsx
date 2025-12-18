import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                // WEB AND SYSTEM APPLICATIONS //
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build High-Performance Apps That Run Flawlessly — Anywhere
              </h1>
              <p className="text-muted-foreground text-lg">
                We Craft Scalable, Secure, And Responsive Web And System Applications Designed For Speed And User Experience.
              </p>
            </div>

            {/* Hero Visual */}
            <div className="max-w-4xl mx-auto relative">
              <div className="aspect-video bg-card border border-border rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Phone mockup */}
                <div className="relative">
                  <div className="w-48 h-80 bg-[hsl(var(--light-card))] rounded-3xl border-4 border-[hsl(var(--light-border))] shadow-xl">
                    <div className="w-full h-full rounded-2xl overflow-hidden p-2">
                      <div className="w-full h-full bg-gradient-to-b from-[hsl(var(--light-background))] to-[hsl(var(--light-card))] rounded-xl flex flex-col items-center justify-center">
                        <span className="text-4xl">📱</span>
                        <span className="text-sm text-[hsl(var(--light-muted))] mt-2">App Preview</span>
                      </div>
                    </div>
                  </div>
                  {/* Floating stats */}
                  <div className="absolute -left-32 top-8 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-xl p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">↑</span>
                      <span className="text-sm font-semibold text-[hsl(var(--light-foreground))]">347.23%</span>
                    </div>
                  </div>
                  <div className="absolute -right-32 bottom-16 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-xl p-3 shadow-lg">
                    <div className="text-xs text-[hsl(var(--light-muted))]">Total Income</div>
                    <div className="text-lg font-bold text-[hsl(var(--light-foreground))]">567.34K</div>
                  </div>
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
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">Responsive Design</h3>
                <p className="text-[hsl(var(--light-muted))]">Applications that work seamlessly across all devices and screen sizes.</p>
              </div>
              <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl">
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">High Performance</h3>
                <p className="text-[hsl(var(--light-muted))]">Optimized for speed with lightning-fast load times and smooth interactions.</p>
              </div>
              <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl">
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">Secure & Scalable</h3>
                <p className="text-[hsl(var(--light-muted))]">Built with security best practices and designed to grow with your business.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;