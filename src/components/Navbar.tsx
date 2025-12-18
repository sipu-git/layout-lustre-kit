import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceItems = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Enterprise S/W Development", href: "/services/enterprise-software" },
  { name: "SaaS Development", href: "/services/saas-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">Sparkradi<span className="text-primary">X</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link 
              to="/about" 
              className={`px-4 py-2 text-sm transition-colors ${location.pathname === '/about' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              About
            </Link>
            <span className="text-border mx-2">|</span>
            <Link 
              to="/works" 
              className={`px-4 py-2 text-sm transition-colors ${location.pathname === '/works' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Works
            </Link>
            <span className="text-border mx-2">|</span>
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="outline" className="rounded-lg border-border text-foreground hover:bg-secondary">
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
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors py-3"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/works" 
              className="text-muted-foreground hover:text-foreground transition-colors py-3"
              onClick={() => setIsOpen(false)}
            >
              Works
            </Link>
            <div className="py-3">
              <button 
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors w-full"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Button variant="outline" className="w-full mt-2 rounded-lg border-border">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;