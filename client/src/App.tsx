import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingParticles } from "@/components/floating-particles";
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
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/technical" component={TechnicalBlog} />
      <Route path="/blog/general" component={GeneralBlog} />
      <Route path="/blog/marketing" component={MarketingBlog} />
      <Route path="/blog/news" component={NewsBlog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <FloatingParticles />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
