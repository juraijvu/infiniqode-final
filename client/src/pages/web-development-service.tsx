import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { ContactPopup } from "@/components/contact-popup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
  HeadphonesIcon
} from "lucide-react";
import { SiReact, SiWordpress, SiShopify } from "react-icons/si";

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

  const keyFeatures = [
    {
      icon: <Smartphone className="w-8 h-8 text-accent" />,
      title: "Mobile-First Design",
      description: "Responsive layouts that work perfectly on all devices"
    },
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "CMS Integration",
      description: "Easy content management with user-friendly interfaces"
    },
    {
      icon: <Search className="w-8 h-8 text-accent" />,
      title: "SEO-Friendly",
      description: "Optimized for search engines from the ground up"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Fast Performance",
      description: "Lightning-fast load times and smooth interactions"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Secure Architecture",
      description: "Enterprise-grade security and data protection"
    },
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: "Custom Design",
      description: "Unique designs tailored to your brand identity"
    },
    {
      icon: <Settings className="w-8 h-8 text-accent" />,
      title: "API Integration",
      description: "Seamless third-party service integrations"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "User Experience",
      description: "Intuitive interfaces that convert visitors to customers"
    }
  ];

  const processSteps = [
    { step: "01", title: "Scope", description: "Define project requirements and objectives" },
    { step: "02", title: "Consultation", description: "Strategic planning and technical discussion" },
    { step: "03", title: "Kick Start", description: "Project initiation and team setup" },
    { step: "04", title: "Wireframe", description: "Create detailed layouts and user flows" },
    { step: "05", title: "Build", description: "Development and implementation phase" },
    { step: "06", title: "Launch", description: "Testing, deployment, and go-live" },
    { step: "07", title: "Deliver", description: "Final handover and documentation" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses",
      features: [
        "5-page responsive website",
        "Mobile optimization",
        "Basic SEO setup",
        "Contact form integration",
        "1 month free support"
      ]
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 pages",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "Analytics setup",
        "3 months free support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,999",
      description: "For large organizations",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Performance optimization",
        "Security hardening",
        "6 months free support"
      ]
    }
  ];

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
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
        <div className="hero-glow top-20 left-20"></div>
        <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
            Web Development<br />
            Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            At DigitalCraft, we believe in the transformative power of digital solutions. Our team  
            of experts is dedicated to helping businesses like yours thrive in the fast-paced 
            digital landscape. From captivating web design to data-driven development 
            strategies, we are committed to delivering results that exceed expectations.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Palette className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Frontend Design</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Web Applications</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Optimization</h3>
            </div>
          </div>

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
      </section>

      {/* Core Offering */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <GlassCard className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Our Core Offering</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We specialize in creating modern, responsive websites and sophisticated web applications 
              that deliver exceptional user experiences. From simple business websites to complex 
              e-commerce platforms, we build digital solutions that scale with your business. 
              Our development process focuses on performance, security, and maintainability, 
              ensuring your website not only looks great but performs flawlessly across all devices 
              and browsers while driving measurable business results.
            </p>
          </GlassCard>
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
              <p className="text-muted-foreground mb-4">
                Leads Generation and Quality of
                Leads
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Using modern web technologies to create conversion-focused
                websites, increasing lead generation by 45% while
                improving user engagement and retention.
              </p>
              <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-black">
                View Case Study
              </Button>
            </GlassCard>
            
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-4">E-commerce Growth</h3>
              <p className="text-muted-foreground mb-4">
                Online Store Optimization and
                Sales Conversion
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Implementing advanced e-commerce solutions with payment
                integration, reducing cart abandonment by 32% while
                improving customer satisfaction and sales.
              </p>
              <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-black">
                View Case Study
              </Button>
            </GlassCard>
            
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-4">Mobile Performance</h3>
              <p className="text-muted-foreground mb-4">
                Mobile-First Design and
                Responsive Development
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Creating responsive web applications optimized for mobile,
                improving mobile traffic conversion by 60% while
                enhancing user experience across all devices.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Palette className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold">Custom</h3>
              <p className="text-sm text-muted-foreground">Responsive Design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold">Interactive</h3>
              <p className="text-sm text-muted-foreground">Unique Design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold">User Friendly</h3>
              <p className="text-sm text-muted-foreground">Design Element</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold">New</h3>
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
              <span className="text-lg font-semibold">React Development</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">Database Design</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">API Integration</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">Security Testing</span>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center relative">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-muted-foreground mb-6">Perfect for small projects and startups</p>
              <div className="text-4xl font-bold mb-6 gradient-text">INR 4,500 <span className="text-lg text-muted-foreground">/Project</span></div>
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
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Contact form integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>1 month support</span>
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

            <GlassCard className="p-8 text-center relative border-2 border-accent">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-black">
                Most Popular
              </Badge>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <p className="text-muted-foreground mb-6">Perfect for Mid Range projects and Ecommerce</p>
              <div className="text-4xl font-bold mb-6 gradient-text">INR 10,500 <span className="text-lg text-muted-foreground">/Project</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Advanced Frontend & Backend Development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Responsive design for up to 15 pages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Advanced functionality & animations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Database integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>E-commerce functionality</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>3 months support</span>
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

            <GlassCard className="p-8 text-center relative">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-muted-foreground mb-6">Perfect for Big projects and Professional Enterprises</p>
              <div className="text-4xl font-bold mb-6 gradient-text">INR 21,500 <span className="text-lg text-muted-foreground">/Project</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Full-stack development & architecture</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Unlimited pages & custom features</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Advanced API integrations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Security hardening</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>6 months support</span>
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

      {/* FAQ Section */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">
            <Link href="/faq-development" className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity">
              Development FAQs
              <ArrowRight className="w-6 h-6" />
            </Link>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our web development services
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}