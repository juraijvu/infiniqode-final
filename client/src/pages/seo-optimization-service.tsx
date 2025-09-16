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
  Search, 
  CheckCircle, 
  BarChart, 
  FileText, 
  TrendingUp, 
  Globe,
  Users,
  Zap,
  Settings,
  Target,
  ArrowRight,
  Shield,
  Star,
  Phone,
  MessageCircle,
  MapPin,
  LineChart,
  Gauge,
  Eye
} from "lucide-react";
import { SiGoogleanalytics, SiGooglesearchconsole, SiSemrush,  SiYoast } from "react-icons/si";

// FAQ Item Component with improved accessibility
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-700/15 backdrop-blur-xs border border-purple-400/30 group hover:bg-purple-500/25 transition-all duration-300">
      <button 
        className="flex items-start justify-between cursor-pointer w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <p className="text-white font-medium leading-relaxed pr-4">{question}</p>
        <div className="w-8 h-8 bg-purple-500/40 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/60 transition-all duration-300">
          <span className={`text-white text-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
        </div>
      </button>
      <div 
        id={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className={`mt-4 text-purple-100/70 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {answer}
      </div>
    </div>
  );
}

export default function SEOOptimizationService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Optimization Services",
    "description": "Boost your search engine rankings and drive organic traffic with professional SEO strategies that deliver measurable results",
    "provider": {
      "@type": "Organization",
      "name": "InfiniQode",
      "url": "https://theinfiniqode.com"
    },
    "areaServed": "Worldwide",
    "serviceType": "SEO Optimization"
  };

  return (
    <>
      <SEOHead
        title="SEO Optimization Services - Boost Search Engine Rankings"
        description="Boost your search engine rankings and drive organic traffic with professional SEO strategies that deliver measurable results and increased visibility."
        keywords="SEO optimization, search engine optimization, organic traffic, keyword research, link building, technical SEO"
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section - Reference Design Match */}
      <section className="relative min-h-screen mt-[150px] md:mt-[50px] flex items-center overflow-hidden">
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text Section */}
            <div className="space-y-8">
              {/* Main Title */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  SEO Optimization<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we boost your search engine rankings and drive organic traffic 
                  with professional SEO strategies that deliver measurable results. Our team 
                  creates data-driven optimization campaigns. From technical SEO to content strategy, 
                  we deliver search engine optimization that increases your online visibility.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Technical SEO",
                  "Content Optimization", 
                  "Link Building",
                  "Analytics & Reporting"
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
                      Boost Your Rankings
                    </Button>
                  }
                  title="Ready to Improve Your SEO Rankings?"
                  description="Let's discuss your SEO goals and create strategies that drive organic growth."
                  defaultService="SEO Optimization"
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
                {/* Large SEO Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Analytics Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Search Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Content Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Rankings Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-green-300/30 to-purple-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
                {/* Small Transparent Cube */}
                <div className="absolute bottom-16 left-20 w-12 h-12 bg-gradient-to-br from-white/10 via-blue-200/20 to-transparent backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transform -rotate-6 hover:rotate-12 transition-transform duration-300"></div>
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
              { icon: Search, title: "SEO Audit & Research", step: "Step 1", desc: "professional analysis of current SEO performance, keyword research, and competitive landscape to identify optimization opportunities." },
              { icon: Settings, title: "Technical Optimization", step: "Step 2", desc: "Implement technical SEO improvements including site speed optimization, mobile responsiveness, and search engine crawlability." },
              { icon: FileText, title: "Content & On-Page SEO", step: "Step 3", desc: "Optimize existing content and create new SEO-focused content with proper keyword targeting and user intent alignment." },
              { icon: BarChart, title: "Monitoring & Reporting", step: "Step 4", desc: "Continuous performance monitoring, ranking tracking, and detailed reporting to measure success and refine strategies." }
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
                What Our SEO Optimization<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our professional SEO optimization service is designed to help businesses of all
                sizes improve their search engine visibility and drive organic growth. We work closely with your
                team to understand your unique goals and implement solutions that
                deliver increased rankings, traffic, and conversions from search engines.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Keyword Research & Strategy Development</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Identify high-intent keywords and develop targeted strategies to boost search rankings and traffic.
                      </p>
                    </div>
                  </div>
                      <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Technical SEO & Site Optimization</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Enhance site performance, speed, and crawlability with technical audits and optimizations.
                      </p>
                    </div>
                  </div>
                      <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Content Creation & On-Page SEO</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Craft engaging, SEO-optimized content with strategic on-page elements to drive organic growth.
                      </p>
                    </div>
                  </div>
                      <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Link Building & Off-Page SEO</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Build authoritative backlinks and leverage off-page strategies to improve domain authority.
                      </p>
                    </div>
                  </div>
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
                    {/* SEO Graph Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-green-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <TrendingUp className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-blue-400 rounded-full shadow-lg"></div>
                      <div className="w-6 h-6 bg-orange-400 rounded-md shadow-lg"></div>
                      <div className="w-10 h-6 bg-purple-400 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">300%</div>
                  <p className="text-purple-100/80 text-sm">Traffic Increase</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">#1</div>
                    <p className="text-xs text-purple-100/60">Page Rankings</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">1000+</div>
                  <p className="text-purple-100/80 text-sm">Keywords Ranked</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">90%</div>
                    <p className="text-xs text-purple-100/60">Page 1 Results</p>
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
            <h2 className="text-5xl font-bold text-white">All SEO Optimization Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our SEO optimization services have transformed businesses
              across various industries with data-driven search strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "E-commerce SEO Growth", subtitle: "300% Organic Traffic Increase", desc: "professional SEO optimization for e-commerce platform resulting in 300% organic traffic growth, 150% keyword rankings improvement, and 40% revenue increase." },
              { title: "Local Business Optimization", subtitle: "Top 3 Local Search Results", desc: "Local SEO strategy for service business achieving top 3 rankings in local search results, 200% increase in local inquiries, and 5-star review growth." },
              { title: "SaaS Platform SEO", subtitle: "500+ Keywords on Page 1", desc: "Technical SEO and content optimization for SaaS platform securing 500+ first-page keyword rankings and 250% increase in qualified organic leads." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-green-800/40 to-green-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-green-200">
                          <span>Organic Traffic</span>
                          <span>+300%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-green-400 rounded-t" style={{ height: '30%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-green-400 rounded-t" style={{ height: '50%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-green-400 rounded-t" style={{ height: '70%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-green-400 rounded-t" style={{ height: '85%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-green-400 rounded-t" style={{ height: '100%' }}></div>
                        </div>
                        <div className="text-xs text-green-300">300% organic traffic growth achieved</div>
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
              Our professional SEO optimization service combines data-driven keyword research with technical optimization and content strategy to improve 
              your search engine visibility and drive organic growth. We specialize in implementing sustainable SEO practices including on-page optimization, 
              technical SEO improvements, content creation, and strategic link building. From local SEO to enterprise-level optimization, our search engine 
              optimization solutions are designed with long-term results in mind, focusing on improving rankings, increasing organic traffic, and delivering 
              measurable ROI through proven SEO methodologies and continuous performance monitoring.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Search, title: "Keyword", subtitle: "Research" },
              { icon: Settings, title: "Technical", subtitle: "SEO" },
              { icon: FileText, title: "Content", subtitle: "Optimization" },
              { icon: LineChart, title: "Performance", subtitle: "Tracking" }
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
              { icon: SiGoogleanalytics, name: "Google Analytics", desc: "professional web analytics platform for tracking SEO performance and user behavior insights." },
              { icon: SiGooglesearchconsole, name: "Search Console", desc: "Google's search performance monitoring tool for tracking rankings, clicks, and indexing status." },
              { icon: SiSemrush, name: "SEMrush", desc: "All-in-one SEO toolkit for keyword research, competitor analysis, and ranking tracking." },
              { icon: Search, name: "Ahrefs", desc: "Professional SEO toolset for backlink analysis, keyword research, and content optimization." },
              { icon: Search, name: "Moz", desc: "SEO software suite providing keyword research, link building, and search ranking insights." },
              { icon: Eye, name: "Screaming Frog", desc: "Website crawler for technical SEO audits and identifying optimization opportunities." },
              { icon: SiYoast, name: "Yoast SEO", desc: "WordPress SEO plugin for on-page optimization and technical SEO improvements." },
              { icon: Gauge, name: "GTmetrix", desc: "Website performance testing tool for analyzing page speed and technical optimization needs." }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-white/5 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-purple-100/80 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-purple-100/90">Common questions about our SEO optimization services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="How long does it take to see SEO results?"
              answer="SEO is a long-term strategy. You may see initial improvements in 3-4 months, with significant results typically appearing in 6-12 months depending on competition, current site status, and keyword difficulty."
            />
            <FAQItem 
              question="What's the difference between on-page and off-page SEO?"
              answer="On-page SEO focuses on optimizing elements on your website (content, meta tags, site structure), while off-page SEO involves external factors like backlinks, social signals, and online reputation."
            />
            <FAQItem 
              question="Do you guarantee first-page rankings?"
              answer="While we can't guarantee specific rankings due to search algorithm changes, we use proven strategies and provide detailed reporting on progress. We focus on sustainable, long-term improvements."
            />
            <FAQItem 
              question="How do you measure SEO success?"
              answer="We track keyword rankings, organic traffic growth, click-through rates, conversion rates, and business metrics like leads and revenue to measure professional SEO success."
            />
            <FAQItem 
              question="Can you help with local SEO?"
              answer="Yes, we specialize in local SEO including Google My Business optimization, local citations, review management, and location-based keyword targeting to improve local search visibility."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}