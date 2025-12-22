import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import GreenGovernancePage from "./pages/works/GreenGovernancePage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import EnterpriseSoftwarePage from "./pages/services/EnterpriseSoftwarePage";
import SaaSDevelopmentPage from "./pages/services/SaaSDevelopmentPage";
import DigitalMarketingPage from "./pages/services/DigitalMarketingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/green-governance" element={<GreenGovernancePage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/enterprise-software" element={<EnterpriseSoftwarePage />} />
          <Route path="/services/saas-development" element={<SaaSDevelopmentPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;