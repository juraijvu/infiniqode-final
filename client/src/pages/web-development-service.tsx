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
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Code className="text-white text-4xl" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
            Web Development
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            We create responsive websites and powerful web applications that drive business growth. 
            Our expert team combines cutting-edge technology with stunning design to deliver 
            digital experiences that engage users and convert visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <ContactPopup 
              trigger={
                <Button className="glass-button px-12 py-6 text-xl" data-testid="button-start-project">
                  Start Your Project
                </Button>
              }
              title="Ready to Start Your Web Development Project?"
              description="Let's discuss your web development needs and create a custom solution that drives results."
              defaultService="Web Development"
            />
            <Link href="/portfolio">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black px-12 py-6 text-xl" data-testid="button-view-portfolio">
                View Our Work
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">6 Months Free Support</span>
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

      {/* Key Features */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Key Features</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for a successful web presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="glass-card p-8 text-center hover:scale-105 transition-transform">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Tech Stack</h2>
          <p className="text-xl text-muted-foreground mb-12">
            We use industry-leading technologies to build your digital solutions
          </p>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SiReact className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">React</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SiWordpress className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">WordPress</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SiShopify className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">Shopify</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              From concept to launch, here's how we bring your vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <GlassCard className="p-6 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </GlassCard>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-accent w-8 h-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Pricing Plans</h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <GlassCard key={index} className={`p-8 text-center relative ${plan.popular ? 'border-2 border-accent' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-black">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2 gradient-text">{plan.price}</div>
                <p className="text-muted-foreground mb-8">{plan.description}</p>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ContactPopup 
                  trigger={
                    <Button className={`w-full ${plan.popular ? 'glass-button' : ''}`} data-testid={`button-select-${plan.name.toLowerCase()}`}>
                      Get Started
                    </Button>
                  }
                  title={`Get Started with ${plan.name} Plan`}
                  description={`Ready to begin your web development project with our ${plan.name} plan? Let's discuss your specific requirements.`}
                  defaultService="Web Development"
                />
              </GlassCard>
            ))}
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