import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { PartnersSection } from "@/components/partners-section";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Rocket, Calendar, Download, Code, Shield, Zap, Globe, Star, TrendingUp, BarChart3, Monitor, Smartphone, Database, Cloud, Server, Cpu, Layers, GitBranch, Palette, Settings, Target, Award, CheckCircle, ArrowRight, PlayCircle, ExternalLink } from "lucide-react";
import { useFadeInUp, useStaggerAnimation, useCountAnimation, useParallaxEffect, initializeGSAP } from "@/lib/gsap-animations";
import { useEffect } from "react";

export default function Home() {
  // Initialize GSAP animations
  useEffect(() => {
    const cleanup = initializeGSAP();
    return cleanup;
  }, []);

  // Animation refs
  const heroRef = useFadeInUp(0);
  const statsRef = useStaggerAnimation('.stat-item', 0.2);
  const featuresRef = useStaggerAnimation('.feature-item', 0.1);
  const methodologyRef = useStaggerAnimation('.methodology-step', 0.15);
  
  // Counter refs for animated numbers
  const projectsCountRef = useCountAnimation(150, 2, '+');
  const satisfactionCountRef = useCountAnimation(98, 2, '%');
  const experienceCountRef = useCountAnimation(5, 1.5, '+');
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DigitalCraft",
    "url": "https://digitalcraft.agency",
    "logo": "https://digitalcraft.agency/logo.png",
    "description": "Premium digital agency specializing in React TypeScript development, Python Flask backends, and cutting-edge digital marketing solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://linkedin.com/company/digitalcraft",
      "https://twitter.com/digitalcraft",
      "https://github.com/digitalcraft"
    ]
  };

  return (
    <>
      <SEOHead
        title="Home"
        description="DigitalCraft is a premium digital agency specializing in React TypeScript development, Python Flask backends, and cutting-edge digital marketing solutions. Transform your business with our world-class solutions."
        keywords="digital agency, web development, digital marketing, React TypeScript, Python Flask, SaaS development, SEO optimization"
        structuredData={structuredData}
      />
      <Navigation />
      <div ref={heroRef as any}>
        <HeroSection />
      </div>
      
      {/* Enhanced Stats Section with Depth */}
      <section className="py-3 relative" ref={statsRef as any}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">Proven Excellence</h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Numbers that speak louder than words. Our track record of success spans across industries and technologies, 
              delivering measurable results that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
            <div className="stat-item depth-card  p-8 text-center group" data-testid="stat-projects">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
              </div>
              <div ref={projectsCountRef as any} className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">0+</div>
              <div className="font-body text-muted-foreground text-lg mb-4">Projects Completed</div>
              <div className="text-sm text-muted-foreground/70">Across 25+ Industries</div>
            </div>
            
            <div className="stat-item depth-card  p-8 text-center group" data-testid="stat-satisfaction">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <div ref={satisfactionCountRef as any} className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">0%</div>
              <div className="font-body text-muted-foreground text-lg mb-4">Client Satisfaction</div>
              <div className="text-sm text-muted-foreground/70">Average Rating: 4.9/5</div>
            </div>
            
            <div className="stat-item depth-card  p-8 text-center group" data-testid="stat-experience">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div ref={experienceCountRef as any} className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">0+</div>
              <div className="font-body text-muted-foreground text-lg mb-4">Years Experience</div>
              <div className="text-sm text-muted-foreground/70">Since 2019</div>
            </div>
            
            <div className="stat-item depth-card  p-8 text-center group" data-testid="stat-support">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">24/7</div>
              <div className="font-body text-muted-foreground text-lg mb-4">Support Available</div>
              <div className="text-sm text-muted-foreground/70">Global Coverage</div>
            </div>
          </div>
          
          {/* Status Indicators inspired by BetterStack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="depth-card  p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="status-indicator status-operational">Operational</div>
                <span className="font-heading text-lg">Development Pipeline</span>
              </div>
              <p className="font-body text-muted-foreground text-sm">All systems running optimally with 99.9% uptime</p>
            </div>
            
            <div className="depth-card  p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="status-indicator status-operational">Operational</div>
                <span className="font-heading text-lg">Client Support</span>
              </div>
              <p className="font-body text-muted-foreground text-sm">Response time: &lt; 2 hours during business hours</p>
            </div>
            
            <div className="depth-card  p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="status-indicator status-operational">Operational</div>
                <span className="font-heading text-lg">Infrastructure</span>
              </div>
              <p className="font-body text-muted-foreground text-sm">Cloud-native architecture with global CDN</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Deep Dive */}
      <section className="py-3 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">Our Technology Mastery</h2>
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies and proven frameworks to build scalable, 
              secure, and high-performance digital solutions that stand the test of time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4" ref={featuresRef as any}>
            <div className="feature-item depth-card  p-8 group">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Frontend Excellence</h3>
              </div>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                React TypeScript, Next.js, Vue.js, Angular with modern state management, 
                progressive web apps, and cutting-edge UI frameworks.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="font-body text-sm">Type-safe development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="font-body text-sm">Component-driven architecture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="font-body text-sm">Performance optimization</span>
                </div>
              </div>
            </div>
            
            <div className="feature-item depth-card  p-8 group">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <Server className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Backend Mastery</h3>
              </div>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                Python Flask, Node.js, Express, FastAPI with microservices architecture, 
                API gateways, and enterprise-grade security implementations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="font-body text-sm">Scalable API design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="font-body text-sm">Security best practices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="font-body text-sm">Real-time capabilities</span>
                </div>
              </div>
            </div>
            
            <div className="feature-item depth-card  p-8 group">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Cloud className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Cloud Infrastructure</h3>
              </div>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                AWS, Google Cloud, Azure with Docker, Kubernetes, CI/CD pipelines, 
                monitoring, and automated scaling solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="font-body text-sm">Auto-scaling infrastructure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="font-body text-sm">99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="font-body text-sm">Global CDN deployment</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technology Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: <Layers className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
              { name: 'TypeScript', icon: <Code className="w-8 h-8" />, color: 'from-blue-600 to-blue-700' },
              { name: 'Python', icon: <Database className="w-8 h-8" />, color: 'from-yellow-500 to-green-500' },
              { name: 'Node.js', icon: <Server className="w-8 h-8" />, color: 'from-green-500 to-green-600' },
              { name: 'PostgreSQL', icon: <Database className="w-8 h-8" />, color: 'from-blue-500 to-indigo-600' },
              { name: 'AWS', icon: <Cloud className="w-8 h-8" />, color: 'from-orange-500 to-orange-600' }
            ].map((tech, index) => (
              <div key={tech.name} className="depth-card  p-6 text-center group">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                  {tech.icon}
                </div>
                <h4 className="font-heading font-semibold">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Simple section divider for mobile performance */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"></div>
      
      <ServicesSection />
      
      {/* Simple section divider for mobile performance */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"></div>

      {/* Our Methodology - Deep Content */}
      <section className="py-3 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">Our Proven Methodology</h2>
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Every successful project follows a carefully crafted process. Our methodology combines 
              agile development principles with design thinking to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-4" ref={methodologyRef as any}>
            <div className="methodology-step depth-card  p-10 group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    01
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Discovery & Strategy</h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    We begin every project with deep research and strategic planning. Understanding your 
                    business goals, target audience, and competitive landscape forms the foundation of our approach.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">Stakeholder interviews & workshops</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <BarChart3 className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">Market analysis & competitor research</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">User persona development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="methodology-step depth-card  p-10 group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    02
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Design & Prototyping</h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    Our design phase focuses on creating intuitive, beautiful interfaces that enhance user 
                    experience while reflecting your brand identity and achieving business objectives.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Palette className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">Brand-aligned visual design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Monitor className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">Interactive prototypes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Smartphone className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">Responsive design systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="methodology-step depth-card  p-10 group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    03
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Development & Integration</h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    Using cutting-edge technologies and best practices, we build scalable, secure solutions 
                    with clean code architecture and comprehensive testing protocols.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <GitBranch className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">Agile development methodology</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">Security-first approach</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">Performance optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="methodology-step depth-card  p-10 group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    04
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Launch & Optimization</h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    Post-launch, we monitor performance, gather user feedback, and continuously optimize 
                    your solution to ensure it meets evolving business needs and user expectations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Rocket className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">Seamless deployment process</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <BarChart3 className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">Performance monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm">Ongoing maintenance & support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Simple section divider for mobile performance */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"></div>
      
      {/* About Section */}
      <section id="about" className="py-3 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">About DigitalCraft</h2>
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're a team of passionate developers, designers, and digital strategists who believe in 
              crafting exceptional digital experiences that drive real business results and transform how people interact with technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-4">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-4">Award-Winning Solutions</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Our work has been recognized by industry leaders and has helped businesses 
                      achieve their digital transformation goals with measurable ROI improvements 
                      averaging 300% within the first year.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-4">Expert Team</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Our diverse team of 25+ specialists brings years of experience in cutting-edge 
                      technologies and proven methodologies. Each team member is certified in their 
                      respective domains with continuous learning programs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-4">Innovation First</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      We stay ahead of the curve by adopting the latest technologies and best practices 
                      to deliver future-proof solutions. Our R&D team dedicates 20% of time to 
                      emerging technology research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="depth-card  p-8">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern digital agency team collaborating" 
                  className="rounded-xl w-full h-auto mb-6"
                />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">25+</div>
                    <div className="font-body text-sm text-muted-foreground">Team Members</div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">15</div>
                    <div className="font-body text-sm text-muted-foreground">Countries Served</div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">40+</div>
                    <div className="font-body text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold gradient-text mb-1">99.9%</div>
                    <div className="font-body text-sm text-muted-foreground">Uptime SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Company Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
            <div className="depth-card  p-8 text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Security First</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Every solution is built with enterprise-grade security, ensuring your data and users are protected.
              </p>
            </div>
            
            <div className="depth-card  p-8 text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Performance</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Optimized for speed and efficiency, our solutions consistently achieve top performance scores.
              </p>
            </div>
            
            <div className="depth-card  p-8 text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Global Scale</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Built to scale globally with multi-region deployment and localization capabilities.
              </p>
            </div>
            
            <div className="depth-card  p-8 text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Excellence</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Committed to delivering exceptional quality that exceeds expectations and industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Deep Dive */}
      <section className="py-3 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">Success Stories</h2>
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Real results for real businesses. See how we've helped companies transform their digital presence 
              and achieve measurable growth through innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-4">
            <div className="depth-card  p-10 group">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold">E-commerce Platform</h3>
                    <p className="font-body text-muted-foreground text-sm">Fortune 500 Retail Company</p>
                  </div>
                </div>
              </div>
              
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                Built a comprehensive e-commerce platform serving 2M+ customers with real-time inventory, 
                personalized recommendations, and seamless checkout experience.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold gradient-text">300%</div>
                  <div className="font-body text-xs text-muted-foreground">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold gradient-text">2M+</div>
                  <div className="font-body text-xs text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold gradient-text">99.9%</div>
                  <div className="font-body text-xs text-muted-foreground">Uptime</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-primary">
                <span className="font-body text-sm font-medium">View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            
            <div className="depth-card  p-10 group">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold">Analytics Dashboard</h3>
                    <p className="font-body text-muted-foreground text-sm">Healthcare Technology Startup</p>
                  </div>
                </div>
              </div>
              
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                Developed real-time analytics platform processing 50M+ data points daily with 
                machine learning insights and predictive modeling capabilities.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold gradient-text">50M+</div>
                  <div className="font-body text-xs text-muted-foreground">Data Points/Day</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold gradient-text">85%</div>
                  <div className="font-body text-xs text-muted-foreground">Accuracy Boost</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold gradient-text">200ms</div>
                  <div className="font-body text-xs text-muted-foreground">Response Time</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-primary">
                <span className="font-body text-sm font-medium">View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Simple section divider for mobile performance */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"></div>
      
      <PortfolioSection />
      
      {/* Simple section divider for mobile performance */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"></div>
      
      <TeamSection />
      
      {/* Simple section divider for mobile performance */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"></div>
      
      <TestimonialsSection />
      
      <PartnersSection />
      
      {/* Simple section divider for mobile performance */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"></div>
      
      {/* Industry Expertise Section */}
      <section className="py-3 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">Industry Expertise</h2>
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We've worked across diverse industries, bringing specialized knowledge and proven solutions 
              to help businesses in every sector achieve their digital transformation goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce & Retail',
                description: 'Custom platforms, inventory management, payment processing, and customer analytics',
                projects: '45+',
                icon: <Monitor className="w-8 h-8" />,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Healthcare & MedTech',
                description: 'HIPAA-compliant systems, patient portals, telemedicine, and data analytics',
                projects: '25+',
                icon: <Shield className="w-8 h-8" />,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'FinTech & Banking',
                description: 'Secure payment systems, trading platforms, KYC/AML compliance, and blockchain',
                projects: '30+',
                icon: <TrendingUp className="w-8 h-8" />,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Education & E-learning',
                description: 'Learning management systems, virtual classrooms, and assessment platforms',
                projects: '20+',
                icon: <Users className="w-8 h-8" />,
                color: 'from-orange-500 to-orange-600'
              },
              {
                title: 'SaaS & Enterprise',
                description: 'Scalable platforms, API integrations, workflow automation, and analytics',
                projects: '35+',
                icon: <Server className="w-8 h-8" />,
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                title: 'Media & Entertainment',
                description: 'Streaming platforms, content management, user engagement, and monetization',
                projects: '15+',
                icon: <PlayCircle className="w-8 h-8" />,
                color: 'from-pink-500 to-pink-600'
              }
            ].map((industry, index) => (
              <div key={industry.title} className="depth-card  p-8 group">
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                    {industry.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4">{industry.title}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="font-body text-sm font-medium text-primary">{industry.projects} Projects</span>
                  </div>
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <BlogSection />
      
      {/* Simple section divider for mobile performance */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"></div>
      
      {/* Resources & Knowledge Hub */}
      <section className="py-3 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">Knowledge Hub</h2>
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Stay ahead with our comprehensive resources, whitepapers, and technical insights 
              covering the latest trends in web development and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
            <div className="depth-card  p-8 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Technical Guides</h3>
              </div>
              <p className="font-body text-muted-foreground mb-4 text-sm leading-relaxed">
                In-depth tutorials on React, TypeScript, Python, and modern development practices.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <span className="font-body text-sm font-medium">Browse Guides</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
            
            <div className="depth-card  p-8 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Whitepapers</h3>
              </div>
              <p className="font-body text-muted-foreground mb-4 text-sm leading-relaxed">
                Research papers on emerging technologies, best practices, and industry trends.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <span className="font-body text-sm font-medium">Download Papers</span>
                <Download className="w-4 h-4" />
              </div>
            </div>
            
            <div className="depth-card  p-8 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">Video Tutorials</h3>
              </div>
              <p className="font-body text-muted-foreground mb-4 text-sm leading-relaxed">
                Step-by-step video content covering development workflows and tool usage.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <span className="font-body text-sm font-medium">Watch Videos</span>
                <PlayCircle className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Simple section divider for mobile performance */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"></div>
      
      <ContactSection />

      {/* Enhanced CTA Section */}
      <section className="py-3 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="depth-card  p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text">
                Ready to Transform Your Business?
              </h2>
              <p className="font-body text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Join hundreds of satisfied clients who have revolutionized their digital presence with our expertise. 
                Let's discuss how we can help you achieve your digital transformation goals with cutting-edge technology solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-4">Free Consultation</h3>
                  <p className="font-body text-muted-foreground text-sm">30-minute strategy session</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-4">Custom Proposal</h3>
                  <p className="font-body text-muted-foreground text-sm">Tailored to your needs</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-4">Fast Delivery</h3>
                  <p className="font-body text-muted-foreground text-sm">2-4 week typical timeline</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact">
                  <Button className="glass-button px-10 py-5 text-lg font-medium" data-testid="button-schedule-consultation">
                    <Calendar className="mr-3 h-6 w-6" />
                    Schedule Free Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-black px-10 py-5 text-lg font-medium backdrop-blur-md"
                    data-testid="button-download-portfolio"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Download Portfolio
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="font-body text-muted-foreground text-sm">
                  <span className="font-medium">Trusted by 150+ companies worldwide</span> • 
                  <span className="font-medium">98% client satisfaction rate</span> • 
                  <span className="font-medium">24/7 support available</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple section divider for mobile performance */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"></div>
      
      {/* Final Stats Banner */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Why Choose DigitalCraft?</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver exceptional results that drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GlassCard className="text-center p-8 hover" hover>
              <div className="text-5xl font-bold gradient-text mb-4">150+</div>
              <h4 className="text-lg font-semibold mb-2">Successful Projects</h4>
              <p className="text-muted-foreground text-sm">Delivered with excellence and precision</p>
            </GlassCard>
            <GlassCard className="text-center p-8 hover" hover>
              <div className="text-5xl font-bold gradient-text mb-4">25+</div>
              <h4 className="text-lg font-semibold mb-2">Expert Developers</h4>
              <p className="text-muted-foreground text-sm">Skilled professionals at your service</p>
            </GlassCard>
            <GlassCard className="text-center p-8 hover" hover>
              <div className="text-5xl font-bold gradient-text mb-4">15</div>
              <h4 className="text-lg font-semibold mb-2">Countries Served</h4>
              <p className="text-muted-foreground text-sm">Global reach and local expertise</p>
            </GlassCard>
            <GlassCard className="text-center p-8 hover" hover>
              <div className="text-5xl font-bold gradient-text mb-4">5+</div>
              <h4 className="text-lg font-semibold mb-2">Years Excellence</h4>
              <p className="text-muted-foreground text-sm">Proven track record of success</p>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* Simple section divider for mobile performance */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"></div>
      
      <Footer />
    </>
  );
}
