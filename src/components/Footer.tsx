import { Link } from "react-router-dom";
import { Send, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Enterprise Software", href: "/services/enterprise-software" },
  { name: "SaaS Development", href: "/services/saas-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

const works = [
  { name: "Safe Forest", href: "/works" },
  { name: "The Virtual Plaza", href: "/works" },
  { name: "BraidPay Website", href: "/works" },
  { name: "Commerce Pulse", href: "/works" },
];

const technologies = ["React", "Next.js", "Node.js", "TypeScript", "Python", "AWS"];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      {/* Newsletter Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Subscribe to our newsletter
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates on our projects, insights, and industry trends delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3.5 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button className="px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Send className="w-4 h-4" />
                Subscribe
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
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight">Sparkradi<span className="text-primary">X</span></span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Much more than just a service provider, we want to be a true technical partner for our customers.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">// SERVICES</span>
            </div>
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
            <div className="flex items-center gap-2 mb-4">
              <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">// WORKS</span>
            </div>
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

          {/* Technologies */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">// TECHNOLOGIES</span>
            </div>
            <ul className="space-y-3">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <span className="text-sm text-muted-foreground">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">// CONTACT</span>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@sparkradix.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  hello@sparkradix.com
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Remote First
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Global Team
                </span>
              </li>
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
