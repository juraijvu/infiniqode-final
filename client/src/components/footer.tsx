import { Link } from "wouter";
import { Code, Linkedin, Twitter, Github, Dribbble } from "lucide-react";
import { FaReact, FaPython } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-br from-gray-900/95 via-purple-900/10 to-gray-900/95 backdrop-blur-xl border-t border-purple-500/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-2">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6" data-testid="footer-logo">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DigitalCraft</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Crafting exceptional digital experiences that drive real business results.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-lg flex items-center justify-center hover:from-purple-500/30 hover:to-purple-700/30 transition-all duration-300 shadow-lg shadow-purple-500/25"
                data-testid="footer-social-linkedin"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-lg flex items-center justify-center hover:from-purple-500/30 hover:to-purple-700/30 transition-all duration-300 shadow-lg shadow-purple-500/25"
                data-testid="footer-social-twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-lg flex items-center justify-center hover:from-purple-500/30 hover:to-purple-700/30 transition-all duration-300 shadow-lg shadow-purple-500/25"
                data-testid="footer-social-github"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-lg flex items-center justify-center hover:from-purple-500/30 hover:to-purple-700/30 transition-all duration-300 shadow-lg shadow-purple-500/25"
                data-testid="footer-social-dribbble"
              >
                <Dribbble className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/saas-development" className="hover:text-white transition-colors">SaaS Development</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/mobile-development" className="hover:text-white transition-colors">Mobile Development</Link></li>
              <li><Link href="/services/seo-optimization" className="hover:text-white transition-colors">SEO Optimization</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about#team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
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
                <FaReact className="text-white w-4 h-4" />
                <span className="text-muted-foreground text-sm">+</span>
                <FaPython className="text-white w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
