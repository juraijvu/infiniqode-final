import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Cloud, 
  CheckCircle, 
  Server,
  Zap,
  Shield,
  Users,
  BarChart3,
  Settings,
  ArrowRight,
  Database,
  Globe,
  Lock
} from "lucide-react";
import { SiAmazon, SiGooglecloud } from "react-icons/si";

export default function SaaSSolutionsService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SaaS Solutions",
    "description": "Custom SaaS development and optimization for scalable cloud applications",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "SaaS Development"
  };

  const keyFeatures = [
    {
      icon: <Server className="w-8 h-8 text-accent" />,
      title: "Scalable Architecture",
      description: "Cloud-native solutions that grow with your business needs"
    },
    {
      icon: <Settings className="w-8 h-8 text-accent" />,
      title: "API Integrations",
      description: "Seamless third-party service integration and custom APIs"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Subscription Models",
      description: "Flexible billing and subscription management systems"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Enterprise Security",
      description: "Advanced security measures and compliance standards"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: "Analytics Dashboard",
      description: "Comprehensive user analytics and business intelligence"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "High Performance",
      description: "Optimized for speed and reliability at scale"
    }
  ];

  const processSteps = [
    { step: "01", title: "Design", description: "Architecture planning and system design" },
    { step: "02", title: "Develop", description: "Agile development with regular milestones" },
    { step: "03", title: "Deploy", description: "Cloud deployment and infrastructure setup" },
    { step: "04", title: "Optimize", description: "Performance tuning and scaling optimization" },
    { step: "05", title: "Monitor", description: "Continuous monitoring and maintenance" },
    { step: "06", title: "Scale", description: "Growth support and feature expansion" }
  ];

  const pricingPlans = [
    {
      name: "MVP",
      price: "$15,999",
      description: "Perfect for startups",
      features: [
        "Core functionality development",
        "Basic user management",
        "Cloud deployment",
        "3 months support",
        "Mobile responsive"
      ]
    },
    {
      name: "Professional",
      price: "$35,999",
      description: "Ideal for growing businesses",
      features: [
        "Full feature development",
        "Advanced user roles",
        "Payment integration",
        "API development",
        "Analytics dashboard",
        "6 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$75,999",
      description: "For large organizations",
      features: [
        "Complete SaaS platform",
        "Multi-tenant architecture",
        "Custom integrations",
        "Advanced security",
        "Dedicated support",
        "12 months support"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="SaaS Solutions - Custom SaaS Development & Optimization"
        description="Custom SaaS development and optimization for scalable cloud applications. Scalable architecture, API integrations, and subscription models."
        keywords="SaaS development, cloud applications, scalable architecture, API integration, subscription billing"
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
        <div className="hero-glow top-20 left-20"></div>
        <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Cloud className="text-white text-4xl" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
            SaaS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            We build and optimize custom Software-as-a-Service platforms that scale with your business. 
            From MVP development to enterprise-grade solutions, our expertise in cloud architecture, 
            subscription management, and API integrations ensures your SaaS platform delivers exceptional 
            user experiences while driving sustainable recurring revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button className="glass-button px-12 py-6 text-xl" data-testid="button-get-saas-proposal">
              Get SaaS Proposal
            </Button>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black px-12 py-6 text-xl" data-testid="button-view-saas-portfolio">
              View SaaS Portfolio
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
              We specialize in developing comprehensive SaaS platforms that combine innovative technology 
              with proven business models. Our custom development and optimization services cover everything 
              from initial concept and MVP development to enterprise scaling and performance optimization. 
              We build cloud-native applications with robust subscription management, seamless API integrations, 
              and scalable architecture that supports millions of users while maintaining exceptional performance 
              and security standards that enterprise clients demand.
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
              Everything you need for a successful SaaS platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <h2 className="text-4xl font-bold mb-6 gradient-text">Cloud Infrastructure</h2>
          <p className="text-xl text-muted-foreground mb-12">
            We leverage leading cloud platforms for maximum scalability and reliability
          </p>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SiAmazon className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">AWS</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cloud className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">Azure</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SiGooglecloud className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">Google Cloud</span>
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
              From concept to scale, we guide your SaaS journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <GlassCard className="p-6 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </GlassCard>
                {index < processSteps.length - 1 && index % 3 !== 2 && (
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
              Choose the SaaS development package that fits your vision
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
                <Button className={`w-full ${plan.popular ? 'glass-button' : ''}`} data-testid={`button-select-${plan.name.toLowerCase()}`}>
                  Get Started
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <GlassCard className="p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Success Story</h2>
              <div className="text-6xl font-bold text-accent mb-4">40%</div>
              <div className="text-xl text-muted-foreground mb-8">Increased client retention</div>
            </div>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                A rapidly growing B2B software company approached us with a critical challenge: their existing 
                platform was struggling under increased user load, leading to performance issues and customer churn. 
                Their subscription management was fragmented, and they lacked the analytics needed to understand 
                user behavior and optimize their service offerings.
              </p>
              <p className="mb-4">
                We redesigned their entire SaaS architecture using a microservices approach with cloud-native 
                technologies. Our team implemented a robust subscription management system with flexible billing 
                options, integrated advanced analytics for user behavior tracking, and built a comprehensive 
                admin dashboard that gave them deep insights into their business metrics.
              </p>
              <p className="mb-4">
                The new platform featured auto-scaling infrastructure that could handle traffic spikes seamlessly, 
                a modernized user interface that improved user experience significantly, and API integrations 
                that streamlined their customers' workflows. We also implemented advanced security measures 
                including SSO, role-based access control, and compliance monitoring.
              </p>
              <p>
                The results exceeded expectations: client retention increased by 40% within six months, 
                platform performance improved by 300%, and the company was able to onboard enterprise 
                clients that previously couldn't be supported. The scalable architecture we built 
                positioned them for continued growth and market expansion.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">
            <Link href="/faq-saas" className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity">
              Common SaaS Questions
              <ArrowRight className="w-6 h-6" />
            </Link>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to frequently asked questions about SaaS development
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}