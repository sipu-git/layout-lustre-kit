import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowWeWork />
        <Services />
        <Technologies />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;