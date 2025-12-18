import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  "Sales Automation",
  "Funnel Creation",
  "E Commerce",
  "Web Design",
];

const works = [
  "Green Bank",
  "Rayform Studio",
  "BraidPay Website",
  "Commerce Pulse",
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Framer",
  "Laravel",
  "GraphQL",
];

const socials = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-xl">✦</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Company</span>
            </div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight">TEXSORA</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Much more than just a service provider, we want to be a true technical partner for our customers.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-sm">✦</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Services</span>
            </div>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Works */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-sm">✦</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Works</span>
            </div>
            <ul className="space-y-3">
              {works.map((work, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {work}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-sm">✦</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Information</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Innovation Street, 56789 Techville, USA</span>
              </li>
              <li>
                <a
                  href="tel:+15559876543"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1 555 987 6543
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@texsora.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@texsora.com
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Tech */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-sm">✦</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Socials</span>
            </div>
            <ul className="space-y-3 mb-8">
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

        {/* Technologies Marquee */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary text-sm">✦</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Technologies</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs text-muted-foreground bg-secondary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Texsora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
