import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-primary text-xl">✦</span>
            <span className="text-xl font-bold tracking-tight">TEXSORA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <span className="text-border">|</span>
            <a href="#works" className="text-muted-foreground hover:text-foreground transition-colors">
              Works
            </a>
            <span className="text-border">|</span>
            <div className="relative group">
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="nav" size="default">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              About
            </a>
            <a href="#works" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Works
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Services
            </a>
            <Button variant="nav" className="w-full mt-2">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
