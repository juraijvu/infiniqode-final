import { useState, useEffect, useRef } from "react";
import { logoAnimation, slideInFromLeft, slideInFromRight } from "@/lib/animations";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ContactPopup } from "@/components/contact-popup";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Code, ChevronDown, Globe, Server, TrendingUp, Cloud, X, Home, Briefcase, User, FileText, Mail, ChevronRight } from "lucide-react";
import myImage from '../Logo.svg';

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      logoAnimation(logoRef.current);
    }
    if (navLinksRef.current) {
      slideInFromLeft(navLinksRef.current, { delay: 0.3 });
    }
    if (ctaButtonRef.current) {
      slideInFromRight(ctaButtonRef.current, { delay: 0.5 });
    }
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/portfolio", label: "Portfolio", icon: Briefcase },
    { href: "/about", label: "About", icon: User },
    { href: "/blog", label: "Blog", icon: FileText },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const servicesCategories = [
    {
      title: "Development",
      icon: Code,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      services: [
        { href: "/services/web-development", label: "Web Development", icon: Globe, description: "Modern, responsive websites" },
        { href: "/services/mobile-app-development", label: "Mobile Apps", icon: Briefcase, description: "iOS & Android applications" },
        { href: "/services/api-development", label: "API Development", icon: Server, description: "Robust backend APIs" },
        { href: "/services/saas-solutions", label: "SaaS Solutions", icon: Cloud, description: "Custom Software as a Service" },
        { href: "/services/ecommerce-development", label: "E-commerce", icon: TrendingUp, description: "Online store development" },
        { href: "/services/blockchain-development", label: "Blockchain", icon: Code, description: "Decentralized applications" },
      ]
    },
    {
      title: "AI & Analytics",
      icon: TrendingUp,
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      services: [
        { href: "/services/ai-machine-learning", label: "AI & Machine Learning", icon: Code, description: "Intelligent automation solutions" },
        { href: "/services/data-analytics", label: "Data Analytics", icon: TrendingUp, description: "Business intelligence insights" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-500/30",
      services: [
        { href: "/services/cloud-migration", label: "Cloud Migration", icon: Cloud, description: "Seamless cloud platform migration" },
        { href: "/services/devops-automation", label: "DevOps Automation", icon: Server, description: "Automated CI/CD pipelines" },
        { href: "/services/cybersecurity", label: "Cybersecurity", icon: TrendingUp, description: "professional security solutions" },
        { href: "/services/quality-assurance", label: "Quality Assurance", icon: Code, description: "Complete testing services" },
      ]
    },
    {
      title: "Marketing",
      icon: TrendingUp,
      color: "from-pink-500/20 to-pink-600/20",
      borderColor: "border-pink-500/30",
      services: [
        { href: "/services/digital-marketing", label: "Digital Marketing", icon: TrendingUp, description: "Data-driven growth strategies" },
        { href: "/services/seo-optimization", label: "SEO Optimization", icon: TrendingUp, description: "Search engine optimization" },
        { href: "/services/content-marketing", label: "Content Marketing", icon: FileText, description: "Engaging content strategies" },
        { href: "/services/email-marketing", label: "Email Marketing", icon: Mail, description: "Targeted email campaigns" },
        { href: "/services/social-media-management", label: "Social Media", icon: User, description: "Social media management" },
        { href: "/services/paid-advertising", label: "Paid Advertising", icon: TrendingUp, description: "PPC & social ads" },
        { href: "/services/marketing-automation", label: "Marketing Automation", icon: TrendingUp, description: "Automated marketing workflows" },
      ]
    },
    {
      title: "Design & Business",
      icon: User,
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      services: [
        { href: "/services/ui-ux-design", label: "UI/UX Design", icon: User, description: "User-centered design" },
        { href: "/services/brand-identity", label: "Brand Identity", icon: User, description: "Complete branding solutions" },
        { href: "/services/business-consulting", label: "Business Consulting", icon: Briefcase, description: "Strategic business guidance" },
      ]
    }
  ];

  const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon?: any }) => (
    <Link href={href}>
      <span
        className={`transition-colors duration-150 cursor-pointer flex items-center gap-2 ${
          location === href 
            ? "text-foreground" 
            : "text-muted-foreground hover:text-white"
        }`}
        onClick={() => setIsOpen(false)}
        data-testid={`nav-${label.toLowerCase()}`}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {label}
      </span>
    </Link>
  );

  const MobileNavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon?: any }) => (
    <Link href={href}>
      <div
        className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-200 cursor-pointer touch-manipulation ${
          location === href
            ? "bg-gradient-to-r from-purple-500/20 to-purple-700/20 text-white border border-purple-500/50"
            : "text-muted-foreground hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-700/10 hover:text-foreground active:bg-purple-500/20"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {Icon && (
          <div className={`p-2 rounded-lg transition-colors duration-150 ${
            location === href
              ? "bg-white/20"
              : "bg-white/10 group-hover:bg-white/20"
          }`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
        <div className="flex-1">
          <span className="text-base font-medium">{label}</span>
        </div>
      </div>
    </Link>
  );

  const CategoryCard = ({ category, onClick }) => (
    <div
      className={`p-4 rounded-xl bg-gradient-to-r ${category.color} border ${category.borderColor} cursor-pointer transition-all duration-200 touch-manipulation active:scale-95`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/20">
            <category.icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{category.title}</h3>
            <p className="text-xs text-white/70">{category.services.length} services</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-white/70" />
      </div>
    </div>
  );

  const ServicesList = ({ category, onBack }) => (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 p-4 border-b border-purple-500/30">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="p-2 hover:bg-white/10"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
          </Button>
          <div className="flex items-center gap-2">
            <category.icon className="w-5 h-5 text-white" />
            <h2 className="font-semibold text-white">{category.title}</h2>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2" style={{ WebkitOverflowScrolling: 'touch' }}>
        {category.services.map((service) => (
          <Link key={service.href} href={service.href}>
            <div
              className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-700/10 hover:text-foreground text-muted-foreground touch-manipulation active:bg-purple-500/20"
              onClick={() => setIsOpen(false)}
            >
              <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-200">
                <service.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-base font-medium">{service.label}</div>
                <div className="text-sm text-muted-foreground/80">{service.description}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-nav border-2 border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-purple-700/10 rounded-2xl hanging-nav">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
             <img 
                  src={myImage} 
                  alt="Logo"
                  width={150}
                  height={75}
                />
          </Link>
          
          <div ref={navLinksRef} className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 hover:text-white transition-colors">
                  Services
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-96 glass-card border-2 border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-purple-700/10 z-[1000]" sideOffset={8}>
                <div className="p-3 space-y-4 max-h-[70vh] overflow-y-auto">
                  {servicesCategories.map((category, categoryIndex) => (
                    <div key={category.title}>
                      <div className="text-sm font-semibold text-white mb-2 px-2">{category.title}</div>
                      <div className="space-y-1">
                        {category.services.map((service) => (
                          <Link key={service.href} href={service.href}>
                            <DropdownMenuItem className="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-purple-700/20 transition-colors duration-150 group">
                              <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-150">
                                <service.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-foreground text-sm">{service.label}</div>
                                <div className="text-xs text-muted-foreground">{service.description}</div>
                              </div>
                            </DropdownMenuItem>
                          </Link>
                        ))}
                      </div>
                      {categoryIndex < servicesCategories.length - 1 && (
                        <div className="border-t border-border/50 mt-3 pt-1"></div>
                      )}
                    </div>
                  ))}
                  <div className="border-t border-border/50 mt-3 pt-3">
                    <Link href="/services">
                      <DropdownMenuItem className="justify-center p-3 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                        <span className="text-sm font-medium text-white">View All Services</span>
                      </DropdownMenuItem>
                    </Link>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div ref={ctaButtonRef} className="hidden lg:block">
            <ContactPopup 
              trigger={
                <Button variant="glass" size="default" data-testid="button-get-started">
                  Get Started
                </Button>
              }
              title="Let's Start Your Project"
              description="Ready to transform your business with a custom digital solution? Tell us about your project and we'll create a tailored proposal."
            />
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden relative z-10" data-testid="button-mobile-menu">
                <div className="relative w-6 h-6 transform transition-transform duration-200">
                  {isOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full sm:w-[400px] glass-card border-2 border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-purple-700/10 p-0 backdrop-blur-xl transform-gpu"
              style={{ touchAction: 'pan-y' }}
            >
              {/* Mobile Menu Header */}
              <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-purple-500/30">
                <div className="flex items-center space-x-2">
                   <img 
                      src={myImage} 
                      alt="Logo"
                      width={100}
                      height={50}
                    />
                </div>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex flex-col h-[calc(100vh-120px)]">
                {activeCategory ? (
                  <ServicesList 
                    category={activeCategory} 
                    onBack={() => setActiveCategory(null)} 
                  />
                ) : (
                  <>
                    {/* Main Navigation */}
                    <div className="flex-shrink-0 p-6 space-y-2">
                      {navItems.map((item) => (
                        <MobileNavLink key={item.href} {...item} />
                      ))}
                    </div>

                    {/* Services Categories */}
                    <div className="flex-1 overflow-y-auto px-6 pb-4" style={{ WebkitOverflowScrolling: 'touch' }}>
                      <div className="text-sm font-medium text-muted-foreground mb-4">Services</div>
                      <div className="space-y-3">
                        {servicesCategories.map((category) => (
                          <CategoryCard 
                            key={category.title}
                            category={category}
                            onClick={() => setActiveCategory(category)}
                          />
                        ))}
                        
                        {/* View All Services */}
                        <Link href="/services">
                          <div 
                            className="p-4 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-purple-700/10 cursor-pointer transition-all duration-200 touch-manipulation active:scale-95"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center justify-center">
                              <span className="text-base font-medium text-white">View All Services</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </>
                )}

                {/* Mobile Menu Footer */}
                {!activeCategory && (
                  <div className="flex-shrink-0 p-6 border-t border-purple-500/50 space-y-4">
                    <ContactPopup 
                      trigger={
                        <Button className="glass-button text-white font-medium w-full h-12 text-base" data-testid="button-mobile-get-started">
                          Get Started
                        </Button>
                      }
                      title="Let's Start Your Project"
                      description="Ready to transform your business with a custom digital solution? Tell us about your project and we'll create a tailored proposal."
                    />
                    <div className="text-center text-sm text-muted-foreground">
                      Ready to transform your business?
                    </div>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}