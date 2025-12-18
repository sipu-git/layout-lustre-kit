import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EnterpriseSoftwarePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4 block">
                // ENTERPRISE SOFTWARE DEVELOPMENT //
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 italic">
                Digitize. Optimize. Scale.
              </h1>
              <p className="text-muted-foreground text-lg">
                We Build Mission-Critical Enterprise Systems To Automate Workflows, Manage Operations, And Drive Growth.
              </p>
            </div>

            {/* Hero Visual - Kanban Board */}
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl overflow-hidden shadow-xl">
                <div className="h-full flex">
                  {/* Sidebar */}
                  <div className="w-48 border-r border-[hsl(var(--light-border))] p-4">
                    <div className="text-sm font-semibold text-[hsl(var(--light-foreground))] mb-4">Project Alpha</div>
                    <div className="space-y-2">
                      <div className="text-xs text-[hsl(var(--light-muted))] flex items-center gap-2">
                        <span>🏠</span> Home
                      </div>
                      <div className="text-xs text-[hsl(var(--light-muted))] flex items-center gap-2">
                        <span>💬</span> Messages
                      </div>
                      <div className="text-xs text-[hsl(var(--light-muted))] flex items-center gap-2">
                        <span>✓</span> Tasks
                      </div>
                    </div>
                  </div>
                  {/* Main content */}
                  <div className="flex-1 p-4">
                    <div className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-4">Kanban</div>
                    <div className="grid grid-cols-3 gap-4 h-[calc(100%-3rem)]">
                      <div className="bg-[hsl(var(--light-background))] rounded-lg p-3">
                        <div className="text-xs font-medium text-[hsl(var(--light-foreground))] mb-2">● To Do</div>
                        <div className="space-y-2">
                          <div className="bg-[hsl(var(--light-card))] rounded p-2 text-xs">Brainstorming</div>
                        </div>
                      </div>
                      <div className="bg-[hsl(var(--light-background))] rounded-lg p-3">
                        <div className="text-xs font-medium text-[hsl(var(--light-foreground))] mb-2">● In Progress</div>
                        <div className="space-y-2">
                          <div className="bg-[hsl(var(--light-card))] rounded p-2 text-xs">Onboarding</div>
                        </div>
                      </div>
                      <div className="bg-[hsl(var(--light-background))] rounded-lg p-3">
                        <div className="text-xs font-medium text-[hsl(var(--light-foreground))] mb-2">● Done</div>
                        <div className="space-y-2">
                          <div className="bg-[hsl(var(--light-card))] rounded p-2 text-xs">App Design</div>
                        </div>
                      </div>
                    </div>
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
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">Workflow Automation</h3>
                <p className="text-[hsl(var(--light-muted))]">Streamline operations with intelligent automation systems.</p>
              </div>
              <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl">
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">Custom Integrations</h3>
                <p className="text-[hsl(var(--light-muted))]">Seamlessly connect with your existing tools and platforms.</p>
              </div>
              <div className="p-6 bg-[hsl(var(--light-card))] border border-[hsl(var(--light-border))] rounded-2xl">
                <h3 className="text-xl font-bold text-[hsl(var(--light-foreground))] mb-3">Data Analytics</h3>
                <p className="text-[hsl(var(--light-muted))]">Make informed decisions with powerful reporting dashboards.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EnterpriseSoftwarePage;