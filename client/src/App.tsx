import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useLenis } from "@/hooks/use-lenis";
import Home from "@/pages/home";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import WebDevelopmentService from "@/pages/web-development-service";
import MobileAppDevelopmentService from "@/pages/mobile-app-development-service";
import ApiDevelopmentService from "@/pages/api-development-service";
import EcommerceDevelopmentService from "@/pages/ecommerce-development-service";
import BlockchainDevelopmentService from "@/pages/blockchain-development-service";
import DigitalMarketingService from "@/pages/digital-marketing-service";
import SaaSSolutionsService from "@/pages/saas-solutions-service";
import AiMachineLearningService from "@/pages/ai-machine-learning-service";
import DataAnalyticsService from "@/pages/data-analytics-service";
import CloudMigrationService from "@/pages/cloud-migration-service";
import DevopsAutomationService from "@/pages/devops-automation-service";
import CybersecurityService from "@/pages/cybersecurity-service";
import QualityAssuranceService from "@/pages/quality-assurance-service";
import SeoOptimizationService from "@/pages/seo-optimization-service";
import ContentMarketingService from "@/pages/content-marketing-service";
import EmailMarketingService from "@/pages/email-marketing-service";
import SocialMediaManagementService from "@/pages/social-media-management-service";
import PaidAdvertisingService from "@/pages/paid-advertising-service";
import MarketingAutomationService from "@/pages/marketing-automation-service";
import UiUxDesignService from "@/pages/ui-ux-design-service";
import BrandIdentityService from "@/pages/brand-identity-service";
import BusinessConsultingService from "@/pages/business-consulting-service";
import Portfolio from "@/pages/portfolio";
import PrivacyPolicy from "@/pages/privacy-policy";
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
      <Route path="/services/mobile-app-development" component={MobileAppDevelopmentService} />
      <Route path="/services/api-development" component={ApiDevelopmentService} />
      <Route path="/services/digital-marketing" component={DigitalMarketingService} />
      <Route path="/services/saas-solutions" component={SaaSSolutionsService} />
      <Route path="/services/ecommerce-development" component={EcommerceDevelopmentService} />
      <Route path="/services/blockchain-development" component={BlockchainDevelopmentService} />
      <Route path="/services/ai-machine-learning" component={AiMachineLearningService} />
      <Route path="/services/data-analytics" component={DataAnalyticsService} />
      <Route path="/services/cloud-migration" component={CloudMigrationService} />
      <Route path="/services/devops-automation" component={DevopsAutomationService} />
      <Route path="/services/cybersecurity" component={CybersecurityService} />
      <Route path="/services/quality-assurance" component={QualityAssuranceService} />
      <Route path="/services/seo-optimization" component={SeoOptimizationService} />
      <Route path="/services/content-marketing" component={ContentMarketingService} />
      <Route path="/services/email-marketing" component={EmailMarketingService} />
      <Route path="/services/social-media-management" component={SocialMediaManagementService} />
      <Route path="/services/paid-advertising" component={PaidAdvertisingService} />
      <Route path="/services/marketing-automation" component={MarketingAutomationService} />
      <Route path="/services/ui-ux-design" component={UiUxDesignService} />
      <Route path="/services/brand-identity" component={BrandIdentityService} />
      <Route path="/services/business-consulting" component={BusinessConsultingService} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:slug" component={PortfolioDetailStatic} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
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
