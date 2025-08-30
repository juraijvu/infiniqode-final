import { useState, useEffect, useRef } from "react";
import { logoAnimation, slideInFromLeft, slideInFromRight } from "@/lib/animations";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code } from "lucide-react";

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
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href}>
      <span
        className={`transition-colors cursor-pointer ${
          location === href 
            ? "text-foreground" 
            : "text-muted-foreground hover:text-accent"
        }`}
        onClick={() => setIsOpen(false)}
        data-testid={`nav-${label.toLowerCase()}`}
      >
        {label}
      </span>
    </Link>
  );

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer" data-testid="logo">
              <div ref={logoRef} className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">DigitalCraft</span>
            </div>
          </Link>
          
          <div ref={navLinksRef} className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>

          <div ref={ctaButtonRef} className="hidden md:block">
            <Link href="/contact">
              <Button className="glass-button text-white font-medium" data-testid="button-get-started">
                Get Started
              </Button>
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-card border-border">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
                <Link href="/contact">
                  <Button className="glass-button text-white font-medium w-full mt-6" data-testid="button-mobile-get-started">
                    Get Started
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
