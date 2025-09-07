import React, { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { ContactPopup } from "@/components/contact-popup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Lock,
  Smartphone,
  Code,
  Palette
} from "lucide-react";
import { SiAmazon, SiGooglecloud, SiDocker, SiKubernetes, SiPostgresql, SiMongodb, SiRedis } from "react-icons/si";

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


  return (
    <>
      <SEOHead
        title="SaaS Solutions - Custom SaaS Development & Optimization"
        description="Custom SaaS development and optimization for scalable cloud applications. Scalable architecture, API integrations, and subscription models."
        keywords="SaaS development, cloud applications, scalable architecture, API integration, subscription billing"
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section - Reference Design Match */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text Section */}
            <div className="space-y-8">
              {/* Main Title */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  SaaS Solutions<br />
                  <span className="text-purple-300">Development</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we believe in the transformative power of scalable software solutions. Our team 
                  of experts is dedicated to helping businesses like yours thrive in the cloud-first 
                  digital landscape. From MVP development to enterprise-grade platforms 
                  solutions, we are committed to delivering results that exceed expectations.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "MVP Development",
                  "Cloud Architecture", 
                  "API Integration",
                  "Subscription Management"
                ].map((service, index) => (
                  <div key={index} className="px-6 py-3 bg-purple-700/50 backdrop-blur-sm border border-purple-500/30 rounded-full">
                    <span className="text-purple-100 font-medium text-sm">{service}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <ContactPopup 
                  trigger={
                    <Button className="px-8 py-4 text-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white border-0 shadow-xl rounded-full" data-testid="button-start-project">
                      Get Started
                    </Button>
                  }
                  title="Ready to Start Your SaaS Development Project?"
                  description="Let's discuss your SaaS vision and create a scalable platform that drives recurring revenue."
                  defaultService="SaaS Solutions"
                />
                <Button className="px-8 py-4 text-lg font-semibold bg-transparent border-2 border-purple-400/60 text-purple-100 hover:bg-purple-600/20 rounded-full" data-testid="button-schedule-call">
                  Schedule a Call
                </Button>
              </div>
            </div>
            
            {/* Right Content - 3D Graphics */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Floating 3D Elements */}
              <div className="relative w-full max-w-md h-96">
                {/* Large Blue Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Green Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Purple Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Light Blue Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Yellow Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-purple-300/30 to-blue-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
                {/* Small Transparent Cube */}
                <div className="absolute bottom-16 left-20 w-12 h-12 bg-gradient-to-br from-white/10 via-purple-200/20 to-transparent backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transform -rotate-6 hover:rotate-12 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Process Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Settings, title: "Architecture Planning & Design", step: "Step 1", desc: "SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning" },
              { icon: Code, title: "MVP Development & Testing", step: "Step 2", desc: "SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning" },
              { icon: Cloud, title: "Cloud Deployment & Scaling", step: "Step 3", desc: "SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning" },
              { icon: BarChart3, title: "Analytics & Optimization", step: "Step 4", desc: "SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning SaaS Strategy Planning" }
            ].map((item, index) => (
              <div key={index} className="group">
                {/* Glass Card */}
                <div className="relative h-full p-4 md:p-6 rounded-xl md:rounded-2xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                  
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-lg md:rounded-xl flex items-center justify-center border border-white/20">
                      <item.icon className="icon-white text-lg md:text-xl" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                    
                    <p className="text-sm text-purple-100/80 leading-relaxed line-clamp-4">{item.desc}</p>
                    
                    {/* Step Badge */}
                    <div className="pt-2">
                      <Badge className="bg-white/10 text-white border border-white/20 text-xs font-medium">
                        {item.step}
                      </Badge>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-end pt-2">
                      <ArrowRight className="text-purple-300 text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Service Includes Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                What Our SaaS Development<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive SaaS development service is designed to help businesses of all
                sizes harness the power of cloud-native solutions. We work closely with your
                team to understand your unique challenges and implement scalable platforms that
                drive real business value and sustainable recurring revenue.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "MVP Development & Validation",
                  "Scalable Cloud Architecture", 
                  "Subscription Management",
                  "API Integration & Development"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We analyze your business model and identify 
                        opportunities where SaaS solutions can create the most impact.
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
                    {/* Cloud Architecture Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-blue-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Cloud className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
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
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                  <p className="text-purple-100/80 text-sm">Uptime SLA</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">10x</div>
                    <p className="text-xs text-purple-100/60">Scalability</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">50%</div>
                  <p className="text-purple-100/80 text-sm">Faster Development</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">3x</div>
                    <p className="text-xs text-purple-100/60">ROI Improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-5xl font-bold text-white">All SaaS Development Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our SaaS development services have transformed businesses
              across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Revenue Model", subtitle: "Subscription Revenue & Customer Retention", desc: "Using scalable SaaS architecture to create recurring revenue models, reducing churn by 40% while improving customer lifetime value and retention." },
              { title: "Operational Efficiency", subtitle: "Business Process Automation", desc: "Using cloud-native solutions to improve operational efficiency platforms, reducing operational costs by 35% while improving business scalability." },
              { title: "Market Expansion", subtitle: "Global Scalability & Market Reach", desc: "Using multi-tenant architecture to create efficient global platforms, reducing time-to-market by 60% while improving international reach." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-purple-200">
                          <span>SaaS Metrics</span>
                          <span>92%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-purple-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-purple-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-purple-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-purple-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-purple-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-purple-300">75% Performance boost with cloud architecture</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs text-purple-300 uppercase tracking-wider">{item.title}</div>
                      <h3 className="text-lg font-bold text-white">{item.subtitle}</h3>
                      <p className="text-sm text-purple-100/80 leading-relaxed">{item.desc}</p>
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
      </section>

      {/* Service Details Section */}
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-bold text-white">Service Details:</h2>
          
          {/* Service Description */}
          <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-xl border border-purple-400/20 shadow-2xl">
            <p className="text-purple-100/90 leading-relaxed text-lg">
              Our premium SaaS development service combines cutting-edge cloud technology with scalable architecture to Our premium SaaS development service 
              combines cutting-edge cloud technology with scalable architecture to Our premium SaaS development service combines cutting-edge cloud technology 
              with scalable architecture to Our premium SaaS development service combines cutting-edge cloud technology with scalable architecture to 
              Our premium SaaS development service combines cutting-edge cloud technology with scalable architecture to Our premium SaaS development service 
              combines cutting-edge cloud technology with scalable architecture to Our premium SaaS development service combines cutting-edge cloud technology.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Cloud, title: "Cloud", subtitle: "Native Architecture" },
              { icon: Server, title: "Scalable", subtitle: "Infrastructure" },
              { icon: Shield, title: "Secure", subtitle: "Platform Design" },
              { icon: Zap, title: "High", subtitle: "Performance" }
            ].map((item, index) => (
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
      </section>

      {/* Technologies Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-5xl font-bold text-center text-white">Technologies We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiAmazon, name: "AWS", desc: "Amazon Web Services cloud infrastructure for scalable and reliable SaaS hosting." },
              { icon: Cloud, name: "Azure", desc: "Microsoft Azure cloud platform for enterprise-grade SaaS applications and services." },
              { icon: SiGooglecloud, name: "Google Cloud", desc: "Google Cloud Platform for modern SaaS applications with global scalability." },
              { icon: SiDocker, name: "Docker", desc: "Containerization technology for consistent deployment across different environments." },
              { icon: SiKubernetes, name: "Kubernetes", desc: "Container orchestration platform for automated deployment and scaling of applications." },
              { icon: SiPostgresql, name: "PostgreSQL", desc: "Advanced relational database for storing and managing SaaS application data securely." },
              { icon: SiMongodb, name: "MongoDB", desc: "NoSQL database for flexible data storage and rapid application development needs." },
              { icon: SiRedis, name: "Redis", desc: "In-memory data structure store for caching and real-time application performance." }
            ].map((tech, index) => (
              <div key={index} className="group">
                <div className="h-full p-6 rounded-2xl glass-card shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                    <p className="text-sm text-purple-100/80 leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-purple-100/90">Get answers to common questions about our SaaS development services</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does it take to develop a SaaS platform?",
                answer: "Development time varies based on complexity. An MVP typically takes 3-6 months, while a full-featured platform can take 6-12 months depending on requirements."
              },
              {
                question: "What makes your SaaS development approach different?",
                answer: "We focus on scalable cloud-native architecture, modern development practices, and proven SaaS business models to ensure your platform can grow with your business."
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer: "Yes, we offer comprehensive support packages including hosting, maintenance, feature updates, and technical support to ensure your SaaS platform runs smoothly."
              },
              {
                question: "Can you integrate with existing systems and APIs?",
                answer: "Absolutely! We specialize in API integrations and can connect your SaaS platform with existing business systems, third-party services, and popular software tools."
              },
              {
                question: "How do you ensure the security of our SaaS platform?",
                answer: "We implement enterprise-grade security including data encryption, secure authentication, role-based access control, and compliance with industry standards like SOC 2 and GDPR."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}