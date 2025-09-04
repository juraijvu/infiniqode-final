import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { ContactPopup } from "@/components/contact-popup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Code, 
  CheckCircle, 
  Smartphone, 
  Database, 
  Search, 
  Palette,
  Users,
  Zap,
  Settings,
  Globe,
  ArrowRight,
  Shield,
  Star
} from "lucide-react";
import { SiReact, SiNodedotjs, SiPostgresql, SiTailwindcss } from "react-icons/si";

export default function WebDevelopmentService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional responsive websites and web applications built with modern technologies",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "Web Development"
  };

  return (
    <>
      <SEOHead
        title="Web Development Services - Professional Website Development"
        description="Professional responsive websites and web applications built with modern technologies. Mobile-first design, SEO-friendly, and optimized for performance."
        keywords="web development, responsive design, mobile-first, SEO optimization, custom websites"
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section - Exact PDF Layout */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-bold gradient-text leading-tight">
              Web Development<br />
              Services
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              At DigitalCraft, we believe in the transformative power of digital solutions. Our team  
              of experts is dedicated to helping businesses like yours thrive in the fast-paced 
              digital landscape. From captivating web design to data-driven development 
              strategies, we are committed to delivering results that exceed expectations.
            </p>
            
            {/* Key Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto py-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20 shadow-xl">
                  <Database className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-foreground">Backend Development</h3>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20 shadow-xl">
                  <Palette className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-foreground">Frontend Design</h3>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20 shadow-xl">
                  <Globe className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-foreground">Web Applications</h3>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20 shadow-xl">
                  <Smartphone className="text-white text-2xl md:text-3xl" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-foreground">Mobile Optimization</h3>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <ContactPopup 
                trigger={
                  <Button className="glass-button px-8 py-4 text-lg font-semibold shadow-xl" data-testid="button-start-project">
                    Get Started
                  </Button>
                }
                title="Ready to Start Your Web Development Project?"
                description="Let's discuss your web development needs and create a custom solution that drives results."
                defaultService="Web Development"
              />
              <Button variant="outline" className="border-2 border-accent/50 text-accent hover:bg-accent hover:text-background px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-background/50" data-testid="button-schedule-call">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 bg-gradient-to-br from-muted/5 to-muted/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Settings, title: "Build Strategy Consulting", step: "Step 1" },
              { icon: Palette, title: "Design Interactive Layouts", step: "Step 2" },
              { icon: Code, title: "Development Web Application", step: "Step 3" },
              { icon: Globe, title: "Deployment & Launching", step: "Step 4" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-8 h-full relative overflow-hidden backdrop-blur-xl bg-background/30 border border-white/20 shadow-2xl rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  <div className="relative z-10 text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto shadow-xl border border-white/20">
                      <item.icon className="text-white text-3xl" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground leading-tight">{item.title}</h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Web Development Consulting Web Development Con Web
                      Strategy Consulting Web Development Co Web
                      Strategy Consulting Web Development Consulting
                      Web Development Con Web Development Consulting Web
                      Strategy Co Web Development Consulting
                    </p>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent/20 text-accent border border-accent/30 backdrop-blur-sm font-semibold">
                        {item.step}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Service Includes - Two Column Layout */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/5 to-background"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text leading-tight">
                What Our Web Development Integration<br />
                Service Includes
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our comprehensive web development service is designed to help businesses of all
                sizes harness the power of modern technology. We work closely with your
                team to understand your unique challenges and implement web solutions that
                drive real business value.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Needs Assessment & Strategy", desc: "We analyze your business processes and identify opportunities where technology can create the most impact." },
                  { title: "Custom Development & Implementation", desc: "We analyze your business processes and identify opportunities where technology can create the most impact." },
                  { title: "Testing & Quality Assurance", desc: "We analyze your business processes and identify opportunities where technology can create the most impact." },
                  { title: "Deployment & Maintenance", desc: "We analyze your business processes and identify opportunities where technology can create the most impact." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl backdrop-blur-sm bg-background/30 border border-white/10">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Statistics - Image Area */}
            <div className="flex flex-col justify-center items-center space-y-16 lg:pl-8">
              <div className="glass-card p-12 text-center backdrop-blur-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/20 shadow-2xl rounded-3xl">
                <div className="text-7xl font-bold gradient-text mb-4">70%+</div>
                <p className="text-muted-foreground text-xl mb-6">Search Popularity</p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-4xl font-bold text-accent">4.5x</div>
                  <p className="text-muted-foreground">Interactive</p>
                </div>
              </div>
              
              <div className="glass-card p-12 text-center backdrop-blur-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-white/20 shadow-2xl rounded-3xl">
                <div className="text-7xl font-bold gradient-text mb-4">100%</div>
                <p className="text-muted-foreground text-xl mb-6">User Oriented App</p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-4xl font-bold text-accent">5x</div>
                  <p className="text-muted-foreground">Higher Intent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Web Development Use Cases */}
      <section className="py-20 bg-gradient-to-br from-muted/5 to-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">All Web Development Usecase</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our web development services have transformed businesses
              across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="glass-card p-8 backdrop-blur-xl bg-background/40 border border-white/20 shadow-2xl rounded-2xl space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Leads Productivity</h3>
                  <p className="text-muted-foreground font-semibold">
                    Leads Generation and Quality of
                    Leads
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Using modern web technologies to create conversion-focused
                    websites, increasing lead generation by 45% while
                    improving user engagement and retention.
                  </p>
                </div>
                <Button variant="outline" className="w-full border-accent/50 text-accent hover:bg-accent hover:text-background backdrop-blur-sm bg-background/50">
                  View Case Study
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-muted/5"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Service Details:</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card p-8 backdrop-blur-sm bg-background/30 border border-white/10 rounded-2xl">
              <p className="text-muted-foreground leading-relaxed">
                Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge
                technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web
                development service combines cutting-edge technology with sleek aesthetics to
              </p>
            </div>
            <div className="glass-card p-8 backdrop-blur-sm bg-background/30 border border-white/10 rounded-2xl">
              <p className="text-muted-foreground leading-relaxed">
                Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge
                technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web
                development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek
                aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines
                cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our
                premium web development service combines cutting-edge technology with sleek aesthetics to
              </p>
            </div>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Palette, title: "Custom", subtitle: "Responsive Design" },
              { icon: Users, title: "Interactive", subtitle: "Unique Design" },
              { icon: Smartphone, title: "User Friendly", subtitle: "Design Element" },
              { icon: Zap, title: "New", subtitle: "Generation Theme" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto shadow-xl border border-white/20">
                  <item.icon className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-gradient-to-br from-muted/5 to-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text">Technologies We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: SiReact, name: "Frontend Development" },
              { icon: SiNodedotjs, name: "Backend Development" },
              { icon: SiPostgresql, name: "Database Design" },
              { icon: SiTailwindcss, name: "Styling Framework" }
            ].map((tech, index) => (
              <div key={index} className="text-center space-y-4 group cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto shadow-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="text-white text-3xl" />
                </div>
                <span className="text-lg font-semibold text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Our Web Development Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our web development services have transformed businesses across various industries.
            </p>
            <Badge className="bg-accent text-background px-6 py-2 text-lg font-semibold shadow-xl">
              Most Popular
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="glass-card p-8 text-center backdrop-blur-xl bg-background/40 border border-white/20 shadow-2xl rounded-2xl space-y-6 relative">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Starter</h3>
                <p className="text-muted-foreground">Perfect for small projects and startups</p>
                <div className="space-y-2">
                  <div className="text-4xl font-bold gradient-text">INR 4,500</div>
                  <p className="text-muted-foreground">/Project</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-left">
                {[
                  "Frontend Development & Design",
                  "Responsive layouts for up to 5 key pages",
                  "Basic functionality implementation",
                  "Design System",
                  "User Testing",
                  "Basic Prototype"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <ContactPopup 
                trigger={
                  <Button className="w-full backdrop-blur-sm bg-background/50 border border-accent/50 hover:bg-accent hover:text-background" data-testid="button-select-starter">
                    Get Started
                  </Button>
                }
                title="Get Started with Starter Plan"
                description="Ready to begin your web development project with our Starter plan? Let's discuss your specific requirements."
                defaultService="Web Development"
              />
            </div>

            {/* Professional Package - Most Popular */}
            <div className="glass-card p-8 text-center backdrop-blur-xl bg-background/40 border-2 border-accent shadow-2xl rounded-2xl space-y-6 relative transform scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-background px-4 py-1 font-semibold">
                Most Popular
              </Badge>
              
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-bold text-foreground">Professional</h3>
                <p className="text-muted-foreground">Perfect for Mid Range projects and Ecommerce</p>
                <div className="space-y-2">
                  <div className="text-4xl font-bold gradient-text">INR 10,500</div>
                  <p className="text-muted-foreground">/Project</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-left">
                {[
                  "Frontend & Backend Development",
                  "Wireframes for up to 5 key screens",
                  "UI Design for up to 5 screens",
                  "Basic Prototype",
                  "Basic Prototype",
                  "Basic Prototype"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <ContactPopup 
                trigger={
                  <Button className="w-full glass-button shadow-xl" data-testid="button-select-professional">
                    Get Started
                  </Button>
                }
                title="Get Started with Professional Plan"
                description="Ready to begin your web development project with our Professional plan? Let's discuss your specific requirements."
                defaultService="Web Development"
              />
            </div>

            {/* Enterprise Package */}
            <div className="glass-card p-8 text-center backdrop-blur-xl bg-background/40 border border-white/20 shadow-2xl rounded-2xl space-y-6 relative">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Enterprise</h3>
                <p className="text-muted-foreground">Perfect for Big projects and Professional Enterprises</p>
                <div className="space-y-2">
                  <div className="text-4xl font-bold gradient-text">INR 21,500</div>
                  <p className="text-muted-foreground">/Project</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-left">
                {[
                  "Frontend & Backend Development",
                  "Wireframes for up to 5 key screens",
                  "UI Design for up to 5 screens",
                  "Basic Prototype",
                  "Basic Prototype",
                  "Basic Prototype"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <ContactPopup 
                trigger={
                  <Button className="w-full backdrop-blur-sm bg-background/50 border border-accent/50 hover:bg-accent hover:text-background" data-testid="button-select-enterprise">
                    Get Started
                  </Button>
                }
                title="Get Started with Enterprise Plan"
                description="Ready to begin your web development project with our Enterprise plan? Let's discuss your specific requirements."
                defaultService="Web Development"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}