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
  Star,
  TrendingUp,
  Target
} from "lucide-react";
import { SiReact, SiNodedotjs, SiPostgresql, SiTailwindcss } from "react-icons/si";

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
      
      {/* Hero Section - Reference Design Match */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text Section */}
            <div className="space-y-8">
              {/* Main Title */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Web Development<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we believe in the transformative power of digital solutions. Our team 
                  of experts is dedicated to helping businesses like yours thrive in the fast-paced 
                  digital landscape. From captivating web design to data-driven development 
                  strategies, we are committed to delivering results that exceed expectations.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Frontend Development",
                  "Backend Development", 
                  "Full Stack Solutions",
                  "Mobile Optimization"
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
                  title="Ready to Start Your Web Development Project?"
                  description="Let's discuss your web development needs and create a custom solution that drives results."
                  defaultService="Web Development"
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
        <div className="absolute inset-1 md:inset-2 lg:inset-4 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Settings, title: "Build Strategy Consulting", step: "Step 1", desc: "AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting" },
              { icon: Palette, title: "Design Interactive Layouts", step: "Step 2", desc: "AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting" },
              { icon: Code, title: "Development Web Application", step: "Step 3", desc: "AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting" },
              { icon: Globe, title: "Deployment & Launching", step: "Step 4", desc: "AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting" }
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
        <div className="absolute inset-1 md:inset-2 lg:inset-4 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                What Our UI/UX Integration<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive UI integration service is designed to help businesses of all
                sizes harness the power of artificial intelligence. We work closely with your
                team to understand your unique challenges and implement AI solutions that
                drive real business value.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "Needs Assessment & Strategy",
                  "Needs Assessment & Strategy", 
                  "Needs Assessment & Strategy",
                  "Needs Assessment & Strategy"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We analyze your business processes and identify 
                        opportunities where AI can create the most impact.
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
                    {/* Laptop Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-blue-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Palette className="icon-white text-xl md:text-2xl" />
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
                  <div className="text-3xl font-bold text-white mb-1">70%+</div>
                  <p className="text-purple-100/80 text-sm">Search Popularity</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">4.5x</div>
                    <p className="text-xs text-purple-100/60">Interactive</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <p className="text-purple-100/80 text-sm">User Oriented App</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">5x</div>
                    <p className="text-xs text-purple-100/60">Higher Intent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-1 md:inset-2 lg:inset-4 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-5xl font-bold text-white">All Web Development Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our web development services have transformed businesses
              across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Leads Productivity", subtitle: "Leads Generation and Quality of Leads", desc: "Using modern web technologies to create conversion-focused websites, reducing inventory costs by 32% while improving product reach." },
              { title: "Leads Productivity", subtitle: "Leads Generation and Quality of Leads", desc: "Using modern web technologies to improve demand platforms, reducing inventory costs by 32% while improving product reach." },
              { title: "Leads Productivity", subtitle: "Leads Generation and Quality of Leads", desc: "Using modern web technologies to create efficient platforms, reducing inventory costs by 32% while improving product reach." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-purple-200">
                          <span>Revenue</span>
                          <span>68%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-purple-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-purple-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-purple-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-purple-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-purple-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-purple-300">45% Performance boost with modern technologies</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs text-purple-300 uppercase tracking-wider">Leads Productivity</div>
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
        <div className="absolute inset-1 md:inset-2 lg:inset-4 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-bold text-white">Service Details:</h2>
          
          {/* Service Description */}
          <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-xl border border-purple-400/20 shadow-2xl">
            <p className="text-purple-100/90 leading-relaxed text-lg">
              Our premium 3D web design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web design service combines cutting-edge 
              technology with sleek aesthetics to Our premium 3D web design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web 
              design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web design service combines cutting-edge technology with sleek 
              aesthetics to Our premium 3D web design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web design service combines 
              cutting-edge technology with sleek aesthetics to Our premium 3D web design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web 
              design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web design service combines cutting-edge technology with sleek aesthetics to.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Palette, title: "Custom", subtitle: "Responsive Design" },
              { icon: Users, title: "Interactive", subtitle: "Unique Design" },
              { icon: Smartphone, title: "User Friendly", subtitle: "Design Element" },
              { icon: Zap, title: "New", subtitle: "Generation Theme" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="icon-white text-xl md:text-2xl" />
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

      {/* Technologies Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-1 md:inset-2 lg:inset-4 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-5xl font-bold text-center text-white">Technologies We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: SiReact, name: "Frontend Development" },
              { icon: SiNodedotjs, name: "Backend Development" },
              { icon: SiPostgresql, name: "Database Design" },
              { icon: SiTailwindcss, name: "Styling Framework" }
            ].map((tech, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="icon-white text-2xl md:text-3xl" />
                </div>
                <span className="text-lg font-semibold text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pricing Section */}
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-1 md:inset-2 lg:inset-4 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-8">
            <h2 className="text-5xl font-bold text-white">Our Web Development Packages</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our web development services have transformed businesses across various industries.
            </p>
            <Badge className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 text-lg font-semibold shadow-xl">
              Most Popular
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="group">
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-xl border border-purple-400/20 shadow-2xl group-hover:shadow-3xl transition-all duration-300 space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white">Starter</h3>
                  <p className="text-purple-100/80">Perfect for small projects and startups</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-white">INR 4,500</div>
                    <p className="text-purple-100/80">/Project</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Frontend Development & Design",
                    "Responsive layouts for up to 5 key pages",
                    "Basic functionality implementation",
                    "Design System",
                    "User Testing",
                    "Basic Prototype"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-100/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <ContactPopup 
                  trigger={
                    <Button className="w-full bg-white/10 border border-white/20 text-white hover:bg-white/20" data-testid="button-select-starter">
                      Get Started
                    </Button>
                  }
                  title="Get Started with Starter Plan"
                  description="Ready to begin your web development project with our Starter plan? Let's discuss your specific requirements."
                  defaultService="Web Development"
                />
              </div>
            </div>

            {/* Professional Package */}
            <div className="group transform scale-105">
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-background/90 to-primary/10 backdrop-blur-xl border-2 border-primary/30 shadow-3xl space-y-8 relative">
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 font-semibold">
                  Most Popular
                </Badge>
                
                <div className="text-center space-y-4 pt-4">
                  <h3 className="text-2xl font-bold text-foreground">Professional</h3>
                  <p className="text-muted-foreground">Perfect for Mid Range projects and Ecommerce</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">INR 10,500</div>
                    <p className="text-muted-foreground">/Project</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Frontend & Backend Development",
                    "Wireframes for up to 5 key screens",
                    "UI Design for up to 5 screens",
                    "Basic Prototype",
                    "Basic Prototype",
                    "Basic Prototype"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-100/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <ContactPopup 
                  trigger={
                    <Button className="w-full bg-gradient-to-r from-primary to-accent text-white shadow-xl hover:shadow-2xl" data-testid="button-select-professional">
                      Get Started
                    </Button>
                  }
                  title="Get Started with Professional Plan"
                  description="Ready to begin your web development project with our Professional plan? Let's discuss your specific requirements."
                  defaultService="Web Development"
                />
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="group">
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-xl border border-purple-400/20 shadow-2xl group-hover:shadow-3xl transition-all duration-300 space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Enterprise</h3>
                  <p className="text-muted-foreground">Perfect for Big projects and Professional Enterprises</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">INR 21,500</div>
                    <p className="text-muted-foreground">/Project</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Frontend & Backend Development",
                    "Wireframes for up to 5 key screens",
                    "UI Design for up to 5 screens",
                    "Basic Prototype",
                    "Basic Prototype",
                    "Basic Prototype"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-100/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <ContactPopup 
                  trigger={
                    <Button className="w-full bg-gradient-to-r from-background to-muted border border-primary/30 text-primary hover:bg-primary/10" data-testid="button-select-enterprise">
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
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-1 md:inset-2 lg:inset-4 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white leading-tight">
                  Ready to Transform Your<br />
                  Digital Experience ?
                </h2>
                <p className="text-purple-100/80">
                  Fill out the form and our team will get back to you within 24 hours.
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
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-700/15 backdrop-blur-xs border border-purple-400/30 text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-700/20 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Phone No</h3>
                  <p className="text-purple-100/80 text-sm">+91-9511871458<br />+91-9548858300</p>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-700/15 backdrop-blur-xs border border-purple-400/30 text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-700/20 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                  <p className="text-purple-100/80 text-sm">+91-9511871458<br />+91-9548858300</p>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-700/15 backdrop-blur-xs border border-purple-400/30 text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-700/20 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-purple-100/80 text-sm">Business World<br />Ahmedabad</p>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-700/15 backdrop-blur-xs border border-purple-400/30 text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-700/20 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-purple-100/80 text-sm">info@infiniqode.com<br />infiniqode@agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-1 md:inset-2 lg:inset-4 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-white mb-4">Frequently Asked Question</h2>
            <p className="text-xl text-purple-100/80">
              Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and
              more. We focus on helping you establish and expand your online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                question: "How long does it take to complete a web development project?", 
                answer: "The timeline for completing a web development project depends on the project's complexity and requirements. Our team strives to deliver high-quality standards. The timeline varies based on the scope of work and specific client needs."
              },
              { 
                question: "What technologies do you use for web development?", 
                answer: "We use modern technologies like React, Node.js, TypeScript, and PostgreSQL to build scalable and efficient web applications. Our tech stack ensures high performance and maintainability."
              },
              { 
                question: "Do you provide ongoing support and maintenance?", 
                answer: "Yes, we offer comprehensive support and maintenance packages to ensure your website remains secure, updated, and performs optimally after launch."
              },
              { 
                question: "Can you help with mobile-responsive design?", 
                answer: "Absolutely! All our web development projects include mobile-first responsive design to ensure your website looks and functions perfectly on all devices."
              },
              { 
                question: "What is included in your web development packages?", 
                answer: "Our packages include custom design, development, testing, deployment, and documentation. We also provide training and ongoing support based on your selected plan."
              },
              { 
                question: "How do you ensure the security of web applications?", 
                answer: "We implement industry-standard security practices including SSL certificates, secure authentication, data encryption, and regular security audits to protect your application."
              }
            ].map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-1 md:inset-2 lg:inset-4 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-white mb-4">Our Testimonials</h2>
            <p className="text-xl text-purple-100/80">
              Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and
              more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ashraf Khan",
                position: "Founder of Marjan Group of Companies",
                content: "Working with Infiniqode was a pleasure. Their web design team created a stunning website that perfectly represents our brand. The positive feedback from our customers has been overwhelmingly positive."
              },
              {
                name: "Ashraf Khan", 
                position: "Founder of Marjan Group of Companies",
                content: "Working with Infiniqode was a pleasure. Their web design team created a stunning website that perfectly represents our brand. The positive feedback from our customers has been overwhelmingly positive."
              },
              {
                name: "Ashraf Khan",
                position: "Founder of Marjan Group of Companies", 
                content: "Working with Infiniqode was a pleasure. Their web design team created a stunning website that perfectly represents our brand. The positive feedback from our customers has been overwhelmingly positive."
              }
            ].map((testimonial, index) => (
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
            {[0, 1, 2, 3].map((dot, index) => (
              <div key={index} className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === 0 ? 'bg-purple-400' : 'bg-purple-400/30'
              }`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-1 md:inset-2 lg:inset-4 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Digital Presence?
          </h2>
          
          <p className="text-lg text-purple-100/80 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards digital success with INFINIQODE by your side. Our team of experts is eager to craft tailored solutions that 
            drive growth for your business. Join us now and witness a powerful mobile app or a data-driven marketing campaign, 
            we've got you covered. Let's embark on this transformative journey together.
          </p>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Unlock Your Digital Potential Today</h3>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="px-8 py-4 text-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white border-0 shadow-xl rounded-full">
                Get Start With Us
              </Button>
              <Button className="px-8 py-4 text-lg font-semibold bg-transparent border-2 border-purple-400/60 text-purple-100 hover:bg-purple-600/20 rounded-full">
                Free Consultation
              </Button>
            </div>
            
            {/* Company Logo */}
            <div className="pt-8">
              <div className="text-4xl font-bold text-white tracking-wider">
                INFINI<span className="text-purple-400">QO</span>DE
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}