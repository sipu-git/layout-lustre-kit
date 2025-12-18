const services = [
  "Sales Automation",
  "Funnel Creation",
  "E Commerce",
  "Web Design",
];

const works = [
  "Safe Forest",
  "The Virtual Plaza",
  "BraidPay Website",
  "Commerce Pulse",
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">// COMPANY</span>
            </div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight">Sparkradi<span className="text-primary">X</span></span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Much more than just a service provider, we want to be a true technical partner for our customers.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">// SERVICES</span>
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
              <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">// WORKS</span>
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

          {/* Newsletter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">// NEWSLETTER</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get updates on our latest projects and insights.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SparkradiX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;