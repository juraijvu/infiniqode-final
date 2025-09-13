import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { ContactPopup } from "@/components/contact-popup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

// Lazy Section Component - Optimized for 10% visibility trigger
function LazySection({ 
  children, 
  className = "", 
  threshold = 0.1, 
  rootMargin = "200px 0px" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  threshold?: number; 
  rootMargin?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold, // 0.1 = 10% of section must be visible
        rootMargin // Start loading 200px before entering viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <section ref={ref} className={className}>
      {isVisible ? children : (
        <div className="min-h-[40vh] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </section>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-700/15 backdrop-blur-xs border border-purple-400/30 group hover:bg-purple-500/25 transition-all duration-300">
      <div className="flex items-start justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-white font-medium leading-relaxed pr-4">{question}</p>
        <div className="w-8 h-8 bg-purple-500/40 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/60 transition-all duration-300">
          <span className={`text-white text-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
        </div>
      </div>
      <div className={`mt-4 text-purple-100/70 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
        {answer}
      </div>
    </div>
  );
}

// Type definitions
export interface ServicePageData {
  seo: {
    title: string;
    description: string;
    keywords: string;
    serviceName: string;
    serviceType: string;
  };
  hero: {
    mainTitle: string;
    subtitle: string;
    description: string;
    badges: string[];
    primaryCTA: string;
    secondaryCTA?: string;
    contactTitle: string;
    contactDescription: string;
    floatingElements?: React.ReactNode;
  };
  process: {
    steps: Array<{
      icon: LucideIcon;
      title: string;
      step: string;
      description: string;
    }>;
  };
  includes: {
    title: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    stats: Array<{
      value: string;
      label: string;
      subValue?: string;
      subLabel?: string;
    }>;
  };
  useCases: {
    title: string;
    subtitle: string;
    cases: Array<{
      title: string;
      subtitle: string;
      description: string;
    }>;
  };
  serviceDetails: {
    description: string;
    features: Array<{
      icon: LucideIcon;
      title: string;
      subtitle: string;
    }>;
  };
  technologies: {
    title?: string;
    techs: Array<{
      icon: IconType;
      name: string;
      description: string;
    }>;
  };
  pricing?: {
    title?: string;
    plans: Array<{
      title: string;
      subtitle: string;
      price: string;
      period: string;
      features: string[];
      isPopular?: boolean;
      ctaText: string;
    }>;
  };
  faq: {
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact?: {
    title: string;
    subtitle: string;
    contactInfo: Array<{
      icon: LucideIcon;
      title: string;
      details: string;
    }>;
  };
  testimonials?: {
    title?: string;
    subtitle?: string;
    items: Array<{
      name: string;
      position: string;
      content: string;
    }>;
  };
  finalCTA?: {
    title: string;
    subtitle: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
    companyName: string;
  };
}

interface StandardServicePageLayoutProps {
  data: ServicePageData;
}

export default function StandardServicePageLayout({ data }: StandardServicePageLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.seo.serviceName,
    "description": data.seo.description,
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": data.seo.serviceType
  };

  return (
    <>
      <SEOHead
        title={data.seo.title}
        description={data.seo.description}
        keywords={data.seo.keywords}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text Section */}
            <div className="space-y-8">
              {/* Main Title */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  {data.hero.mainTitle}<br />
                  <span className="text-purple-300">{data.hero.subtitle}</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  {data.hero.description}
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {data.hero.badges.map((badge, index) => (
                  <div key={index} className="px-6 py-3 bg-purple-700/50 backdrop-blur-sm border border-purple-500/30 rounded-full">
                    <span className="text-purple-100 font-medium text-sm">{badge}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <ContactPopup 
                  trigger={
                    <Button className="px-8 py-4 text-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white border-0 shadow-xl rounded-full" data-testid="button-start-project">
                      {data.hero.primaryCTA}
                    </Button>
                  }
                  title={data.hero.contactTitle}
                  description={data.hero.contactDescription}
                  defaultService={data.seo.serviceName}
                />
                <Button className="px-8 py-4 text-lg font-semibold bg-transparent border-2 border-purple-400/60 text-purple-100 hover:bg-purple-600/20 rounded-full" data-testid="button-schedule-call">
                  {data.hero.secondaryCTA || "Schedule a Call"}
                </Button>
              </div>
            </div>
            
            {/* Right Content - Floating Elements */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {data.hero.floatingElements || (
                <div className="relative w-full max-w-md h-96">
                  {/* Default floating elements */}
                  <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                  <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                  <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                  <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                  <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                  <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-purple-300/30 to-blue-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                  <div className="absolute bottom-16 left-20 w-12 h-12 bg-gradient-to-br from-white/10 via-purple-200/20 to-transparent backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transform -rotate-6 hover:rotate-12 transition-transform duration-300"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Process Section */}
      <LazySection className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.steps.map((item, index) => (
              <div key={index} className="group">
                <div className="relative h-full p-4 md:p-6 rounded-xl md:rounded-2xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                  
                  <div className="relative z-10 space-y-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-lg md:rounded-xl flex items-center justify-center border border-white/20">
                      <item.icon className="icon-white text-lg md:text-xl" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                    
                    <p className="text-sm text-purple-100/80 leading-relaxed line-clamp-4">{item.description}</p>
                    
                    <div className="pt-2">
                      <Badge className="bg-white/10 text-white border border-white/20 text-xs font-medium">
                        {item.step}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-end pt-2">
                      <ArrowRight className="text-purple-300 text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Strategic Service Includes Section */}
      <LazySection className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {data.includes.title}
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                {data.includes.description}
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {data.includes.features.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - 3D Illustration & Stats */}
            <div className="relative">
              {/* 3D Illustration Area */}
              <div className="relative h-64 md:h-80 rounded-xl md:rounded-2xl glass-card overflow-hidden mb-6 md:mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                
                {/* Mock 3D Elements */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-blue-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <ArrowRight className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-cyan-400 rounded-full shadow-lg"></div>
                      <div className="w-6 h-6 bg-green-400 rounded-md shadow-lg"></div>
                      <div className="w-10 h-6 bg-orange-400 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                {data.includes.stats.map((stat, index) => (
                  <div key={index} className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <p className="text-purple-100/80 text-sm">{stat.label}</p>
                    {stat.subValue && (
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="text-xl font-bold text-purple-200">{stat.subValue}</div>
                        <p className="text-xs text-purple-100/60">{stat.subLabel}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Use Cases Section */}
      <LazySection className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-5xl font-bold text-white">{data.useCases.title}</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              {data.useCases.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.useCases.cases.map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-purple-200">
                          <span>Revenue</span>
                          <span>68%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded relative">
                          <div className="absolute bottom-0 left-2 w-1 bg-purple-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-purple-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-purple-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-purple-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-purple-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-purple-300">Performance boost with modern technologies</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs text-purple-300 uppercase tracking-wider">{item.title}</div>
                      <h3 className="text-lg font-bold text-white">{item.subtitle}</h3>
                      <p className="text-sm text-purple-100/80 leading-relaxed">{item.description}</p>
                    </div>
                    <Button variant="outline" className="w-full border-purple-400/30 text-purple-200 hover:bg-purple-600/20 group-hover:border-purple-400/50 transition-all duration-300">
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Service Details Section */}
      <LazySection className="py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-bold text-white">Service Details:</h2>
          
          {/* Service Description */}
          <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-xl border border-purple-400/20 shadow-2xl">
            <p className="text-purple-100/90 leading-relaxed text-lg">
              {data.serviceDetails.description}
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {data.serviceDetails.features.map((item, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-purple-100/80">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Technologies Section */}
      <LazySection className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-5xl font-bold text-center text-white">{data.technologies.title || "Technologies We Use"}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.technologies.techs.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-purple-100/80 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Pricing Section */}
      {data.pricing && (
        <LazySection className="py-12 md:py-20 lg:py-24 relative">
          <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
            <h2 className="text-5xl font-bold text-center text-white">{data.pricing.title || "Strategic Pricing"}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.pricing.plans.map((plan, index) => (
                <div key={index} className="relative group">
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 font-semibold px-4 py-2">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <div className="h-full p-8 rounded-2xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                    <div className="space-y-6">
                      <div className="text-center space-y-2">
                        <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                        <p className="text-purple-100/80">{plan.subtitle}</p>
                        <div className="space-y-1">
                          <div className="text-4xl font-bold text-white">{plan.price}</div>
                          <p className="text-purple-100/60 text-sm">{plan.period}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {plan.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-purple-100/90 text-sm leading-relaxed">{feature}</p>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-xl">
                        {plan.ctaText}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LazySection>
      )}

      {/* Contact Form Section */}
      {data.contact && (
        <section className="py-16 md:py-24 lg:py-32 relative">
          <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Contact Form */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-white leading-tight">
                    {data.contact.title}
                  </h2>
                  <p className="text-purple-100/80">
                    {data.contact.subtitle}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-purple-100/80 mb-2">Full Name</label>
                      <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-gradient-to-br from-purple-500/15 to-purple-700/10 border border-purple-400/40 rounded-lg text-white placeholder-purple-200/60 backdrop-blur-xs focus:border-purple-400/70 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm text-purple-100/80 mb-2">Email</label>
                      <input type="email" placeholder="example@email.com" className="w-full px-4 py-3 bg-gradient-to-br from-purple-500/15 to-purple-700/10 border border-purple-400/40 rounded-lg text-white placeholder-purple-200/60 backdrop-blur-xs focus:border-purple-400/70 focus:outline-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-purple-100/80 mb-2">Service Interested In</label>
                    <select className="w-full px-4 py-3 bg-gradient-to-br from-purple-500/15 to-purple-700/10 border border-purple-400/40 rounded-lg text-white backdrop-blur-xs focus:border-purple-400/70 focus:outline-none">
                      <option value="" className="bg-purple-900">Select Service</option>
                      <option value="web-development" className="bg-purple-900">Web Development</option>
                      <option value="saas-solutions" className="bg-purple-900">SaaS Solutions</option>
                      <option value="digital-marketing" className="bg-purple-900">Digital Marketing</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-purple-100/80 mb-2">Project Query</label>
                    <textarea rows={4} placeholder="Tell us about your project requirements..." className="w-full px-4 py-3 bg-gradient-to-br from-purple-500/15 to-purple-700/10 border border-purple-400/40 rounded-lg text-white placeholder-purple-200/60 backdrop-blur-xs focus:border-purple-400/70 focus:outline-none resize-none"></textarea>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-purple-400 transition-all duration-300">
                    Submit Request
                  </Button>
                </div>
              </div>
              
              {/* Right Side - Contact Info */}
              <div className="grid grid-cols-2 gap-6">
                {data.contact.contactInfo.map((info, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-700/15 backdrop-blur-xs border border-purple-400/30 text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-700/20 rounded-xl flex items-center justify-center mx-auto">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                      <p className="text-purple-100/80 text-sm" dangerouslySetInnerHTML={{ __html: info.details.replace(/\n/g, '<br />') }}></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {data.faq.items.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {data.testimonials && (
        <section className="py-16 md:py-24 lg:py-32 relative">
          <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-5xl font-bold text-white mb-4">{data.testimonials.title || "Our Testimonials"}</h2>
              <p className="text-xl text-purple-100/80">
                {data.testimonials.subtitle || "Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results."}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.testimonials.items.map((testimonial, index) => (
                <div key={index} className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-purple-400/20 space-y-6">
                  {/* Twitter Icon */}
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <p className="text-purple-100/90 leading-relaxed">{testimonial.content}</p>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-purple-100/70 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-12">
              {Array.from({ length: Math.min(data.testimonials.items.length, 4) }).map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === 0 ? 'bg-purple-400' : 'bg-purple-400/30'
                }`}></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      {data.finalCTA && (
        <section className="py-16 md:py-24 lg:py-32 relative">
          <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {data.finalCTA.title}
            </h2>
            
            <p className="text-lg text-purple-100/80 max-w-3xl mx-auto leading-relaxed">
              {data.finalCTA.description}
            </p>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">{data.finalCTA.subtitle}</h3>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="px-8 py-4 text-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white border-0 shadow-xl rounded-full">
                  {data.finalCTA.primaryCTA}
                </Button>
                <Button className="px-8 py-4 text-lg font-semibold bg-transparent border-2 border-purple-400/60 text-purple-100 hover:bg-purple-600/20 rounded-full">
                  {data.finalCTA.secondaryCTA}
                </Button>
              </div>
              
              {/* Company Logo */}
              <div className="pt-8">
                <div className="text-4xl font-bold text-white tracking-wider">
                  {data.finalCTA.companyName.includes('INFINI') ? (
                    <>INFINI<span className="text-purple-400">QO</span>DE</>
                  ) : (
                    data.finalCTA.companyName
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}