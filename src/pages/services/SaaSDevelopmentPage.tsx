import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SaaSDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                // SAAS DEVELOPMENT //
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build Scalable SaaS Products That Users Love
              </h1>
              <p className="text-muted-foreground text-lg">
                We Create Subscription-Based Software Solutions With Multi-Tenancy, Security, And Seamless User Experiences Built In.
              </p>
            </div>

            {/* Hero Visual */}
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-card border border-border rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl">☁️</span>
                  <p className="text-muted-foreground mt-4">Cloud-Native Architecture</p>
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
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">Multi-Tenant Architecture</h3>
                <p className="text-[hsl(var(--light-muted))]">Efficiently serve multiple customers from a single codebase.</p>
              </div>
              <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl">
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">Subscription Billing</h3>
                <p className="text-[hsl(var(--light-muted))]">Integrated payment systems with flexible pricing tiers.</p>
              </div>
              <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl">
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">Auto-Scaling</h3>
                <p className="text-[hsl(var(--light-muted))]">Infrastructure that grows automatically with your user base.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SaaSDevelopmentPage;