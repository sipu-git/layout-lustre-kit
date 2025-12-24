import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { PlusMarker } from "@/components/ui/PlusMarker";

const services = [
  { name: "Sales Automation", href: "/services/web-development" },
  { name: "Funnel Creation", href: "/services/enterprise-software" },
  { name: "E Commerce", href: "/services/saas-development" },
  { name: "Web Design", href: "/services/digital-marketing" },
];

const works = [
  { name: "Safe Forest", href: "/works" },
  { name: "The Virtual Plaza", href: "/works" },
  { name: "Green Govt.", href: "/works/green-governance" },
  { name: "Rydeu Logistics", href: "/works" },
];

const information = [
  { name: "FAQ", href: "/#faq" },
  { name: "Support", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const socials = [
  { name: "LinkedIn", href: "#" },
  { name: "X (Twitter)", href: "#" },
  { name: "Instagram", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Newsletter Section */}
      <div className="relative">
        <PlusMarker className="top-0 left-6" />
        <PlusMarker className="top-0 right-6" />
        
        <div className="container mx-auto px-6 py-12">
          <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Logo */}
            <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-10">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor" className="text-gray-400">
                <polygon points="50,10 90,90 10,90" />
                <text x="50" y="60" textAnchor="middle" fontSize="24" fontWeight="bold">S</text>
              </svg>
            </div>
            
            <div className="relative max-w-lg">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-wider mb-4 block">
                // SPARKRADIX
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Let's turn your vision into scalable, high-impact digital reality.
              </h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check className="w-5 h-5 text-primary" />
                  Get tailored tech advice from our solution architects.
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check className="w-5 h-5 text-primary" />
                  Agile, transparent, and always on time.
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check className="w-5 h-5 text-primary" />
                  We stay, support, and scale with you.
                </li>
              </ul>
              
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-4 block">
              // COMPANY
            </span>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight">Sparkradi<span className="text-primary">X</span></span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Much More Than Just A Service Provider, We Want To Be A True Technical Partner For Our Customers.
            </p>
          </div>

          {/* Services */}
          <div>
            <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-4 block">
              // SERVICES
            </span>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Works */}
          <div>
            <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-4 block">
              // WORKS
            </span>
            <ul className="space-y-3">
              {works.map((work, index) => (
                <li key={index}>
                  <Link
                    to={work.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {work.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-4 block">
              // INFORMATION
            </span>
            <ul className="space-y-3">
              {information.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-4 block">
              // SOCIALS
            </span>
            <ul className="space-y-3">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SparkradiX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
