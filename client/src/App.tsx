import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PlasmaBackground } from "@/components/plasma-background";
import { useLenis } from "@/hooks/use-lenis";
import Home from "@/pages/home";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import WebDevelopmentService from "@/pages/web-development-service";
import DigitalMarketingService from "@/pages/digital-marketing-service";
import SaaSSolutionsService from "@/pages/saas-solutions-service";
import Portfolio from "@/pages/portfolio";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import TechnicalBlog from "@/pages/technical-blog";
import GeneralBlog from "@/pages/general-blog";
import MarketingBlog from "@/pages/marketing-blog";
import NewsBlog from "@/pages/news-blog";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import PortfolioDetailStatic from "@/pages/portfolio-detail-static";
import { PageBuilderPage } from "@/pages/PageBuilderPage";
import { AdminDashboard } from "@/pages/AdminDashboard";
import Login from "@/pages/login";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/web-development" component={WebDevelopmentService} />
      <Route path="/services/digital-marketing" component={DigitalMarketingService} />
      <Route path="/services/saas-solutions" component={SaaSSolutionsService} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:slug" component={PortfolioDetailStatic} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/technical" component={TechnicalBlog} />
      <Route path="/blog/general" component={GeneralBlog} />
      <Route path="/blog/marketing" component={MarketingBlog} />
      <Route path="/blog/news" component={NewsBlog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/page-builder/:templateId?" component={PageBuilderPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Lenis smooth scroll
  const lenis = useLenis();

  // Expose lenis globally for utility functions
  if (lenis && typeof window !== 'undefined') {
    window.lenis = lenis;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
