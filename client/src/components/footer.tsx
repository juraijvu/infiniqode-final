import { Link } from "wouter";
import { Code, Linkedin, Twitter, Github, Dribbble } from "lucide-react";
import { FaReact, FaPython } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6" data-testid="footer-logo">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">DigitalCraft</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Crafting exceptional digital experiences that drive real business results.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:text-accent transition-colors"
                data-testid="footer-social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:text-accent transition-colors"
                data-testid="footer-social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:text-accent transition-colors"
                data-testid="footer-social-github"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:text-accent transition-colors"
                data-testid="footer-social-dribbble"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/services/web-development" className="hover:text-accent transition-colors">Web Development</Link></li>
              <li><Link href="/services/saas-development" className="hover:text-accent transition-colors">SaaS Development</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-accent transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/mobile-development" className="hover:text-accent transition-colors">Mobile Development</Link></li>
              <li><Link href="/services/seo-optimization" className="hover:text-accent transition-colors">SEO Optimization</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/about#team" className="hover:text-accent transition-colors">Our Team</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/portfolio" className="hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2023 DigitalCraft. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-muted-foreground text-sm">Made with</span>
              <div className="flex items-center space-x-2">
                <FaReact className="text-accent w-4 h-4" />
                <span className="text-muted-foreground text-sm">+</span>
                <FaPython className="text-accent w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
