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
  Shield
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
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32">
        <div className="hero-glow top-20 left-20"></div>
        <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Web Development<br />
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
              At DigitalCraft, we believe in the transformative power of digital solutions. Our team  
              of experts is dedicated to helping businesses like yours thrive in the fast-paced 
              digital landscape. From captivating web design to data-driven development 
              strategies, we are committed to delivering results that exceed expectations.
            </p>
            
            {/* Key Features - Horizontal Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="text-white text-3xl" />
                </div>
                <h3 className="text-lg font-semibold">Backend Development</h3>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-white text-3xl" />
                </div>
                <h3 className="text-lg font-semibold">Frontend Design</h3>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white text-3xl" />
                </div>
                <h3 className="text-lg font-semibold">Full-Stack Apps</h3>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="text-white text-3xl" />
                </div>
                <h3 className="text-lg font-semibold">Mobile Optimization</h3>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ContactPopup 
                trigger={
                  <Button className="glass-button px-12 py-6 text-xl" data-testid="button-start-project">
                    Get Started
                  </Button>
                }
                title="Ready to Start Your Web Development Project?"
                description="Let's discuss your web development needs and create a custom solution that drives results."
                defaultService="Web Development"
              />
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black px-12 py-6 text-xl" data-testid="button-schedule-call">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <GlassCard className="p-8 h-full relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Build Strategy Consulting</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Web Development Consulting Web Development Con Web
                  Strategy Consulting Web Development Co Web
                  Strategy Consulting Web Development Consulting
                  Web Development Con Web Development Consulting Web
                  Strategy Co Web Development Consulting
                </p>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="text-sm font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full">Step 1</div>
                </div>
              </GlassCard>
            </div>
            <div className="text-center">
              <GlassCard className="p-8 h-full relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Palette className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Design Interactive Layouts</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Web Development Consulting Web Development Con Web
                  Strategy Consulting Web Development Co Web
                  Strategy Consulting Web Development Consulting
                  Web Development Con Web Development Consulting Web
                  Strategy Co Web Development Consulting
                </p>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="text-sm font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full">Step 2</div>
                </div>
              </GlassCard>
            </div>
            <div className="text-center">
              <GlassCard className="p-8 h-full relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Code className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Development Web Application</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Web Development Consulting Web Development Con Web
                  Strategy Consulting Web Development Co Web
                  Strategy Consulting Web Development Consulting
                  Web Development Con Web Development Consulting Web
                  Strategy Co Web Development Consulting
                </p>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="text-sm font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full">Step 3</div>
                </div>
              </GlassCard>
            </div>
            <div className="text-center">
              <GlassCard className="p-8 h-full relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Deployment & Launching</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Web Development Consulting Web Development Con Web
                  Strategy Consulting Web Development Co Web
                  Strategy Consulting Web Development Consulting
                  Web Development Con Web Development Consulting Web
                  Strategy Co Web Development Consulting
                </p>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="text-sm font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full">Step 4</div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Web Development Service Includes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text leading-tight">
                What Our Web Development Integration<br />
                Service Includes
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Our comprehensive web development service is designed to help businesses of all
                sizes harness the power of modern technology. We work closely with your
                team to understand your unique challenges and implement web solutions that
                drive real business value.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Needs Assessment & Strategy</h3>
                    <p className="text-muted-foreground">
                      We analyze your business processes and identify
                      opportunities where technology can create the most impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Custom Development & Implementation</h3>
                    <p className="text-muted-foreground">
                      We analyze your business processes and identify
                      opportunities where technology can create the most impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Testing & Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      We analyze your business processes and identify
                      opportunities where technology can create the most impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Deployment & Maintenance</h3>
                    <p className="text-muted-foreground">
                      We analyze your business processes and identify
                      opportunities where technology can create the most impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Statistics Section */}
            <div className="flex flex-col justify-center items-center space-y-16">
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-4">70%+</div>
                <p className="text-muted-foreground text-lg mb-2">Search Popularity</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="text-3xl font-bold text-accent">4.5x</div>
                  <p className="text-sm text-muted-foreground">Interactive</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-4">100%</div>
                <p className="text-muted-foreground text-lg mb-2">User Oriented App</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="text-3xl font-bold text-accent">5x</div>
                  <p className="text-sm text-muted-foreground">Higher Intent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Web Development Use Cases */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">All Web Development Usecase</h2>
            <p className="text-xl text-muted-foreground">
              Discover how our web development services have transformed businesses
              across various industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-4">Leads Productivity</h3>
              <p className="text-muted-foreground mb-4 font-semibold">
                Leads Generation and Quality of
                Leads
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Using modern web technologies to create conversion-focused
                websites, increasing lead generation by 45% while
                improving user engagement and retention.
              </p>
              <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-black">
                View Case Study
              </Button>
            </GlassCard>
            
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-4">Leads Productivity</h3>
              <p className="text-muted-foreground mb-4 font-semibold">
                Leads Generation and Quality of
                Leads
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Using modern web technologies to create conversion-focused
                websites, increasing lead generation by 45% while
                improving user engagement and retention.
              </p>
              <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-black">
                View Case Study
              </Button>
            </GlassCard>
            
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-4">Leads Productivity</h3>
              <p className="text-muted-foreground mb-4 font-semibold">
                Leads Generation and Quality of
                Leads
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Using modern web technologies to create conversion-focused
                websites, increasing lead generation by 45% while
                improving user engagement and retention.
              </p>
              <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-black">
                View Case Study
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Service Details:</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge
                technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web
                development service combines cutting-edge technology with sleek aesthetics to
              </p>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge
                technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web
                development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek
                aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines
                cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our
                premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge
                technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web
                development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek
                aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines
                cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Palette className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom</h3>
              <p className="text-sm text-muted-foreground">Responsive Design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Interactive</h3>
              <p className="text-sm text-muted-foreground">Unique Design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">User Friendly</h3>
              <p className="text-sm text-muted-foreground">Design Element</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">New</h3>
              <p className="text-sm text-muted-foreground">Generation Theme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <SiReact className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">Frontend Development</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <SiNodedotjs className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">Backend Development</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <SiPostgresql className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">Database Design</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <SiTailwindcss className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">Styling Framework</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Web Development Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Our Web Development Packages</h2>
            <p className="text-xl text-muted-foreground">
              Discover how our web development services have transformed businesses across various industries.
            </p>
            <div className="mt-8">
              <Badge className="bg-accent text-black px-4 py-2 text-lg">Most Popular</Badge>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-muted-foreground mb-6">Perfect for small projects and startups</p>
              <div className="text-4xl font-bold mb-6 gradient-text">
                INR 4,500 <span className="text-lg text-muted-foreground">/Project</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Frontend Development & Design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Responsive layouts for up to 5 key pages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Basic functionality implementation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Design System</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>User Testing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Basic Prototype</span>
                </li>
              </ul>
              <ContactPopup 
                trigger={
                  <Button className="w-full" data-testid="button-select-starter">
                    Get Started
                  </Button>
                }
                title="Get Started with Starter Plan"
                description="Ready to begin your web development project with our Starter plan? Let's discuss your specific requirements."
                defaultService="Web Development"
              />
            </GlassCard>

            <GlassCard className="p-8 text-center border-2 border-accent relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-black">
                Most Popular
              </Badge>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <p className="text-muted-foreground mb-6">Perfect for Mid Range projects and Ecommerce</p>
              <div className="text-4xl font-bold mb-6 gradient-text">
                INR 10,500 <span className="text-lg text-muted-foreground">/Project</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Frontend & Backend Development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Wireframes for up to key 5 screens</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>UI Design for up to 5 screens</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Basic Prototype</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Basic Prototype</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Basic Prototype</span>
                </li>
              </ul>
              <ContactPopup 
                trigger={
                  <Button className="w-full glass-button" data-testid="button-select-professional">
                    Get Started
                  </Button>
                }
                title="Get Started with Professional Plan"
                description="Ready to begin your web development project with our Professional plan? Let's discuss your specific requirements."
                defaultService="Web Development"
              />
            </GlassCard>

            <GlassCard className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-muted-foreground mb-6">Perfect for Big projects and Professional Enterprises</p>
              <div className="text-4xl font-bold mb-6 gradient-text">
                INR 21,500 <span className="text-lg text-muted-foreground">/Project</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Frontend & Backend Development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Wireframes for up to key 5 screens</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>UI Design for up to 5 screens</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Basic Prototype</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Basic Prototype</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Basic Prototype</span>
                </li>
              </ul>
              <ContactPopup 
                trigger={
                  <Button className="w-full" data-testid="button-select-enterprise">
                    Get Started
                  </Button>
                }
                title="Get Started with Enterprise Plan"
                description="Ready to begin your web development project with our Enterprise plan? Let's discuss your specific requirements."
                defaultService="Web Development"
              />
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}