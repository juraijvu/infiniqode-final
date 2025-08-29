import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Megaphone, 
  CheckCircle, 
  TrendingUp,
  Search,
  Target,
  BarChart3,
  Users,
  Zap,
  ArrowRight,
  Globe,
  Mail,
  MessageSquare
} from "lucide-react";
import { SiGoogle, SiFacebook, SiHubspot } from "react-icons/si";

export default function DigitalMarketingService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Data-driven growth strategies that increase brand visibility and drive conversions",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "Digital Marketing"
  };

  const keyFeatures = [
    {
      icon: <Search className="w-8 h-8 text-accent" />,
      title: "SEO/SEM",
      description: "Search engine optimization and marketing for maximum visibility"
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Social Ads",
      description: "Targeted advertising campaigns across all major platforms"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Conversion Optimization",
      description: "Maximize ROI through data-driven conversion improvements"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and performance analysis"
    },
    {
      icon: <Mail className="w-8 h-8 text-accent" />,
      title: "Email Marketing",
      description: "Automated email campaigns that nurture and convert"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-accent" />,
      title: "Content Marketing",
      description: "Engaging content that builds brand authority"
    }
  ];

  const processSteps = [
    { step: "01", title: "Audit", description: "Comprehensive analysis of current marketing performance" },
    { step: "02", title: "Strategy", description: "Custom marketing strategy development" },
    { step: "03", title: "Setup", description: "Campaign setup and tracking implementation" },
    { step: "04", title: "Launch", description: "Multi-channel campaign execution" },
    { step: "05", title: "Optimize", description: "Continuous optimization based on data" },
    { step: "06", title: "Scale", description: "Scale successful campaigns for maximum ROI" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,999/mo",
      description: "Perfect for small businesses",
      features: [
        "SEO audit & basic optimization",
        "Google Ads management",
        "Social media setup",
        "Monthly reporting",
        "Email support"
      ]
    },
    {
      name: "Growth",
      price: "$3,999/mo",
      description: "Ideal for growing businesses",
      features: [
        "Comprehensive SEO strategy",
        "Multi-platform ad management",
        "Content marketing",
        "Email automation",
        "Bi-weekly strategy calls",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$7,999/mo",
      description: "For large organizations",
      features: [
        "Full-service marketing",
        "Custom attribution modeling",
        "Dedicated account manager",
        "Weekly strategy sessions",
        "Priority support",
        "Custom integrations"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Digital Marketing Services - Data-Driven Growth Strategies"
        description="Data-driven growth strategies that increase brand visibility and drive conversions. SEO, social ads, conversion optimization, and comprehensive analytics."
        keywords="digital marketing, SEO, SEM, social media advertising, conversion optimization, growth marketing"
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
        <div className="hero-glow top-20 left-20"></div>
        <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Megaphone className="text-white text-4xl" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
            Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            We create data-driven growth strategies that amplify your brand's reach and drive measurable results. 
            Our comprehensive approach combines SEO, paid advertising, content marketing, and conversion optimization 
            to maximize your ROI and accelerate business growth across all digital channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button className="glass-button px-12 py-6 text-xl" data-testid="button-boost-marketing">
              Boost Marketing Now
            </Button>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black px-12 py-6 text-xl" data-testid="button-view-case-studies">
              View Case Studies
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
              We specialize in creating comprehensive digital marketing strategies that drive sustainable growth. 
              Our data-driven approach combines cutting-edge technology with proven marketing methodologies 
              to increase brand visibility, generate qualified leads, and maximize conversion rates. 
              From SEO and paid advertising to social media marketing and email automation, 
              we deliver integrated campaigns that deliver measurable results and exceptional ROI 
              for businesses of all sizes.
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
              Comprehensive marketing services to grow your business
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

      {/* Platform Logos */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Platform Expertise</h2>
          <p className="text-xl text-muted-foreground mb-12">
            We leverage the most powerful marketing platforms to maximize your reach
          </p>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SiGoogle className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">Google Ads</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SiFacebook className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">Facebook</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SiHubspot className="text-white text-3xl" />
              </div>
              <span className="text-lg font-semibold">HubSpot</span>
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
              Strategic approach to maximize your marketing ROI
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
              Choose the marketing plan that fits your growth goals
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
              <div className="text-6xl font-bold text-accent mb-4">300% ROI</div>
              <div className="text-xl text-muted-foreground mb-8">Achieved in just 3 months</div>
            </div>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                A growing e-commerce company approached us with stagnant sales despite having quality products. 
                Their previous marketing efforts were scattered and lacked strategic focus, resulting in poor ROI 
                and limited brand visibility.
              </p>
              <p className="mb-4">
                We implemented a comprehensive digital marketing strategy that included SEO optimization, 
                targeted Google Ads campaigns, Facebook and Instagram advertising, and email marketing automation. 
                Our data-driven approach identified high-converting keywords and audience segments while optimizing 
                the sales funnel for maximum conversion rates.
              </p>
              <p className="mb-4">
                Within the first month, we saw a 75% increase in qualified traffic. By month two, conversion rates 
                had improved by 150% through landing page optimization and retargeting campaigns. The third month 
                brought the breakthrough - a 300% return on investment with sustained growth momentum.
              </p>
              <p>
                The client not only recovered their marketing investment but scaled their business to new heights, 
                establishing a strong online presence that continues to drive consistent growth month over month.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">
            <Link href="/faq-marketing" className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity">
              Marketing FAQs
              <ArrowRight className="w-6 h-6" />
            </Link>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our digital marketing services
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}