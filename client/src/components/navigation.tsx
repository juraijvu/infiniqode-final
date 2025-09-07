import { useState, useEffect, useRef } from "react";
import { logoAnimation, slideInFromLeft, slideInFromRight } from "@/lib/animations";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ContactPopup } from "@/components/contact-popup";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Code, ChevronDown, Globe, Server, TrendingUp, Cloud, X, Home, Briefcase, User, FileText, Mail } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
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

  const servicesItems = [
    { href: "/services/web-development", label: "Web Development", icon: Globe, description: "React TypeScript applications" },
    { href: "/services/backend-development", label: "Backend Development", icon: Server, description: "Python Flask APIs" },
    { href: "/services/digital-marketing", label: "Digital Marketing", icon: TrendingUp, description: "SEO & analytics" },
    { href: "/services/saas-development", label: "SaaS Development", icon: Cloud, description: "Complete SaaS platforms" },
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
        className={`group flex items-center gap-4 p-4 rounded-xl transition-colors duration-150 cursor-pointer ${
          location === href
            ? "bg-gradient-to-r from-purple-500/20 to-purple-700/20 text-white border border-purple-500/50"
            : "text-muted-foreground hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-700/10 hover:text-foreground"
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

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-nav border-2 border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-purple-700/10 rounded-2xl hanging-nav">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer" data-testid="logo">
              <div ref={logoRef} className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DigitalCraft</span>
            </div>
          </Link>
          
          <div ref={navLinksRef} className="hidden md:flex items-center space-x-8">
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
              <DropdownMenuContent className="w-80 glass-card border-2 border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-purple-700/10 z-[1000]" sideOffset={8}>
                <div className="p-2 space-y-1">
                  {servicesItems.map((service) => (
                    <Link key={service.href} href={service.href}>
                      <DropdownMenuItem className="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-purple-700/20 transition-colors duration-150 group">
                        <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-150">
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{service.label}</div>
                          <div className="text-sm text-muted-foreground">{service.description}</div>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                  ))}
                  <div className="border-t border-border/50 mt-2 pt-2">
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

          <div ref={ctaButtonRef} className="hidden md:block">
            <ContactPopup 
              trigger={
                <Button className="glass-button text-white font-medium" data-testid="button-get-started">
                  Get Started
                </Button>
              }
              title="Let's Start Your Project"
              description="Ready to transform your business with a custom digital solution? Tell us about your project and we'll create a tailored proposal."
            />
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden relative z-10" data-testid="button-mobile-menu">
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
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-purple-500/50">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">DigitalCraft</span>
                </div>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex flex-col h-full">
                <div className="flex-1 px-6 py-4 space-y-2">
                  {/* Main Navigation */}
                  {navItems.map((item) => (
                    <MobileNavLink key={item.href} {...item} />
                  ))}
                  
                  {/* Services Section */}
                  <div className="pt-4">
                    <div className="text-sm font-medium text-muted-foreground mb-3 px-4">Services</div>
                    {servicesItems.map((service) => (
                      <Link key={service.href} href={service.href}>
                        <div
                          className="group flex items-center gap-4 p-4 rounded-xl transition-colors duration-150 cursor-pointer hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-700/10 hover:text-foreground text-muted-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-200 will-change-auto">
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

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-purple-500/50 space-y-4">
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
