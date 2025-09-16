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
  Briefcase, 
  CheckCircle, 
  Lightbulb, 
  TrendingUp, 
  Target, 
  Users,
  Zap,
  Settings,
  Globe,
  ArrowRight,
  Shield,
  Star,
  Phone,
  MessageCircle,
  MapPin,
  BarChart,
  Building2
} from "lucide-react";
import {  SiSlack, SiAsana, SiNotion, SiJira, SiTrello, SiMiro, SiZoom } from "react-icons/si";

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

export default function BusinessConsultingService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Consulting Services",
    "description": "Strategic business consulting that transforms operations, accelerates growth, and drives sustainable competitive advantages",
    "provider": {
      "@type": "Organization",
      "name": "InfiniQode",
      "url": "https://theinfiniqode.com"
    },
    "areaServed": "Worldwide",
    "serviceType": "Business Consulting"
  };

  return (
    <>
      <SEOHead
        title="Business Consulting Services - Strategic Growth & Operations"
        description="Strategic business consulting that transforms operations, accelerates growth, and drives sustainable competitive advantages with expert guidance."
        keywords="business consulting, strategic planning, operations optimization, growth strategy, management consulting"
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
                  Business Consulting<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we provide strategic business consulting that transforms operations, 
                  accelerates growth, and drives sustainable competitive advantages. Our team delivers 
                  expert guidance for business transformation. From strategy development to process optimization, 
                  we deliver consulting solutions that drive measurable business results.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Strategy Development",
                  "Process Optimization", 
                  "Growth Planning",
                  "Digital Transformation"
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
                      Transform Your Business
                    </Button>
                  }
                  title="Ready to Accelerate Your Business Growth?"
                  description="Let's discuss your business challenges and create strategies that drive results."
                  defaultService="Business Consulting"
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
                {/* Large Strategy Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Growth Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Process Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Innovation Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Success Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-gold-300/30 to-purple-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
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
              { icon: Target, title: "Discovery & Assessment", step: "Step 1", desc: "professional business analysis to identify challenges, opportunities, and strategic priorities for sustainable growth." },
              { icon: Lightbulb, title: "Strategy Development", step: "Step 2", desc: "Create customized strategies and roadmaps that align with your business goals and market positioning." },
              { icon: Settings, title: "Implementation Planning", step: "Step 3", desc: "Develop detailed implementation plans with clear timelines, resources, and success metrics for execution." },
              { icon: TrendingUp, title: "Execution & Optimization", step: "Step 4", desc: "Guide implementation and continuously optimize processes to ensure sustained business growth and competitive advantage." }
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
                What Our Business Consulting<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our professional business consulting service is designed to help businesses of all
                sizes transform their operations and accelerate growth. We work closely with your
                leadership team to understand your unique challenges and implement solutions that
                deliver strategic advantage, operational excellence, and sustainable success.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Strategic Planning & Business Development</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Craft data-driven strategies to drive business growth, identify opportunities, 
                        and align objectives with market trends for sustainable success.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Operations Optimization & Process Improvement</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Streamline operations and enhance efficiency through process audits, lean methodologies,
                         and tailored improvements for optimal performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Digital Transformation & Change Management</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Guide seamless digital transformation with change management strategies to adopt technologies 
                        and foster organizational adaptability effectively.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Performance Analytics & Growth Strategy</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Leverage analytics to track KPIs, uncover insights, and develop growth
                        strategies that accelerate business expansion and ROI.
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
                    {/* Strategy Chart Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-gold-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Briefcase className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-green-400 rounded-full shadow-lg"></div>
                      <div className="w-6 h-6 bg-blue-400 rounded-md shadow-lg"></div>
                      <div className="w-10 h-6 bg-purple-400 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">150+</div>
                  <p className="text-purple-100/80 text-sm">Businesses Transformed</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">85%</div>
                    <p className="text-xs text-purple-100/60">Growth Rate</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">$50M+</div>
                  <p className="text-purple-100/80 text-sm">Revenue Generated</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">6-12</div>
                    <p className="text-xs text-purple-100/60">Months ROI</p>
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
            <h2 className="text-5xl font-bold text-white">All Business Consulting Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our business consulting services have transformed organizations
              across various industries with strategic guidance and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Manufacturing Optimization", subtitle: "40% Efficiency Improvement", desc: "Led professional operational transformation for manufacturing company resulting in 40% efficiency gains, $5M cost savings, and 25% faster production cycles." },
              { title: "Digital Transformation", subtitle: "Enterprise-wide Technology Adoption", desc: "Guided tech startup through digital transformation implementing cloud infrastructure, automated workflows, and data analytics achieving 300% productivity increase." },
              { title: "Market Expansion Strategy", subtitle: "Successfully Entered 5 New Markets", desc: "Developed market entry strategy for retail chain expanding into 5 new markets with strategic positioning, competitive analysis, and $20M+ revenue growth." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-gold-800/40 to-gold-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gold-200">
                          <span>Efficiency</span>
                          <span>+40%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-gold-500/30 to-green-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-gold-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-gold-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-gold-400 rounded-t" style={{ height: '75%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-gold-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-green-400 rounded-t" style={{ height: '100%' }}></div>
                        </div>
                        <div className="text-xs text-gold-300">40% efficiency improvement achieved</div>
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
              Our professional business consulting service combines strategic expertise with practical implementation experience to help organizations 
              achieve sustainable competitive advantages. We specialize in developing customized strategies for business transformation, operational 
              excellence, and growth acceleration across diverse industries. From organizational restructuring to digital transformation initiatives, 
              our consulting solutions are designed with measurable outcomes in mind, ensuring that every recommendation delivers tangible business 
              value and positions your organization for long-term success in an evolving marketplace.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Target, title: "Strategic", subtitle: "Planning" },
              { icon: BarChart, title: "Performance", subtitle: "Analytics" },
              { icon: Users, title: "Change", subtitle: "Management" },
              { icon: TrendingUp, title: "Growth", subtitle: "Strategy" }
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
              { icon: Building2, name: "Microsoft 365", desc: "professional productivity suite for collaboration, document management, and business operations." },
              { icon: SiSlack, name: "Slack", desc: "Team communication and collaboration platform for streamlined business workflows." },
              { icon: SiAsana, name: "Asana", desc: "Project management tool for organizing tasks, tracking progress, and team coordination." },
              { icon: SiNotion, name: "Notion", desc: "All-in-one workspace for documentation, project management, and knowledge sharing." },
              { icon: SiJira, name: "Jira", desc: "Issue tracking and project management software for agile development and business processes." },
              { icon: SiTrello, name: "Trello", desc: "Visual project management tool using boards and cards for workflow organization." },
              { icon: SiMiro, name: "Miro", desc: "Online collaborative whiteboard for brainstorming, planning, and visual strategy sessions." },
              { icon: SiZoom, name: "Zoom", desc: "Video conferencing platform for remote meetings, training, and business communication." }
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
            <p className="text-xl text-purple-100/90">Common questions about our business consulting services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="What types of businesses do you work with?"
              answer="We work with businesses of all sizes from startups to Fortune 500 companies across various industries including technology, manufacturing, retail, healthcare, and professional services."
            />
            <FAQItem 
              question="How long do consulting engagements typically last?"
              answer="Engagement duration varies from 3-6 months for specific projects to 12-24 months for professional transformations. We tailor the timeline to your specific needs and complexity."
            />
            <FAQItem 
              question="What's your approach to change management?"
              answer="We use a structured change management methodology focusing on stakeholder engagement, communication planning, training programs, and gradual implementation to ensure sustainable adoption."
            />
            <FAQItem 
              question="How do you measure success?"
              answer="We establish clear KPIs and success metrics at project start, including financial performance, operational efficiency, employee engagement, and strategic milestone achievement."
            />
            <FAQItem 
              question="Do you provide ongoing support after implementation?"
              answer="Yes, we offer post-implementation support including performance monitoring, optimization recommendations, additional training, and strategic guidance to ensure sustained success."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}