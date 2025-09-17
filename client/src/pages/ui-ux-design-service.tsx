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
  Palette, 
  CheckCircle, 
  Monitor, 
  Smartphone, 
  Search, 
  Layout,
  Users,
  Zap,
  Settings,
  Globe,
  ArrowRight,
  Shield,
  Star,
  TrendingUp,
  Target,
  Phone,
  MessageCircle,
  MapPin,
  Eye,
  Layers
} from "lucide-react";
import { SiFigma, SiSketch, SiAdobe, SiFramer, SiInvision, SiMiro, SiAbstract } from "react-icons/si";

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

export default function UIUXDesignService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UI/UX Design Services",
    "description": "Create intuitive, beautiful user experiences that delight users and drive business results through research-driven design",
    "provider": {
      "@type": "Organization",
      "name": "InfiniQode",
      "url": "https://theinfiniqode.com"
    },
    "areaServed": "Worldwide",
    "serviceType": "UI/UX Design"
  };

  return (
    <>
      <SEOHead
        title="UI/UX Design Services - User-Centered Digital Experiences"
        description="Create intuitive, beautiful user experiences that delight users and drive business results through research-driven design and user-centered methodology."
        keywords="UI design, UX design, user experience, user interface, wireframing, prototyping, user research"
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
                  UI/UX Design<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we create intuitive, beautiful user experiences that delight users 
                  and drive business results through research-driven design. Our team crafts digital 
                  experiences that users love. From user research to interactive prototypes, 
                  we deliver design solutions that enhance usability and increase conversions.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "User Research",
                  "Wireframing", 
                  "Prototyping",
                  "Visual Design"
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
                      Start Design Project
                    </Button>
                  }
                  title="Ready to Start Your Design Project?"
                  description="Let's discuss your design needs and create experiences that users will love."
                  defaultService="UI/UX Design"
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
                {/* Large Design Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Monitor Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Mobile Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Layout Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Color Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-pink-300/30 to-purple-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
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
              { icon: Search, title: "Research & Discovery", step: "Step 1", desc: "Conduct user research, analyze competitor landscapes, and define design goals to create user-centered solutions." },
              { icon: Layout, title: "Wireframing & Architecture", step: "Step 2", desc: "Design information architecture and create wireframes that establish clear user flows and content hierarchy." },
              { icon: Palette, title: "Visual Design & Prototyping", step: "Step 3", desc: "Craft beautiful interfaces and interactive prototypes that bring designs to life with pixel-perfect execution." },
              { icon: Globe, title: "Testing & Optimization", step: "Step 4", desc: "Conduct usability testing, gather feedback, and iterate designs for optimal user experience and business results." }
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
                What Our UI/UX Design<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our professional UI/UX design service is designed to help businesses of all
                sizes create exceptional digital experiences. We work closely with your
                team to understand your users' needs and implement solutions that
                deliver intuitive interfaces, seamless interactions, and measurable business results.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">User Research & Persona Development</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Conduct in-depth user research to create detailed personas, ensuring designs align 
                        with target audience needs and behaviors for optimal engagement.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Information Architecture & Wireframing</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Develop intuitive information architecture and detailed wireframes to structure user-friendly 
                        interfaces that enhance navigation and usability effectively.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Visual Design & Brand Integration</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Craft visually stunning designs that integrate brand identity, ensuring cohesive aesthetics
                         and engaging user experiences across all platforms.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Interactive Prototyping & Testing</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Build interactive prototypes and conduct usability testing to validate designs, 
                        ensuring seamless functionality and user satisfaction before development.
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
                    {/* Design Tool Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-pink-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Palette className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-blue-400 rounded-full shadow-lg"></div>
                      <div className="w-6 h-6 bg-green-400 rounded-md shadow-lg"></div>
                      <div className="w-10 h-6 bg-purple-400 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">300+</div>
                  <p className="text-purple-100/80 text-sm">Designs Created</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">95%</div>
                    <p className="text-xs text-purple-100/60">User Satisfaction</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">40%</div>
                  <p className="text-purple-100/80 text-sm">Conversion Increase</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">60%</div>
                    <p className="text-xs text-purple-100/60">Time Reduction</p>
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
            <h2 className="text-5xl font-bold text-white">All UI/UX Design Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our UI/UX design services have transformed businesses
              across various industries with user-centered design solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "E-commerce Redesign", subtitle: "40% Conversion Rate Improvement", desc: "Complete redesign of e-commerce platform resulting in 40% higher conversions, 60% faster checkout process, and 95% customer satisfaction scores." },
              { title: "SaaS Dashboard Optimization", subtitle: "50% User Engagement Increase", desc: "Redesigned complex dashboard interface with improved information hierarchy and user flows, resulting in 50% higher user engagement and retention." },
              { title: "Mobile Banking App", subtitle: "Bank-Grade Security & Usability", desc: "Designed intuitive mobile banking app with biometric authentication and simplified navigation, serving 100K+ users with 4.8 star rating." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-pink-800/40 to-pink-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-pink-200">
                          <span>Conversion</span>
                          <span>+40%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-pink-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-pink-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-pink-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-pink-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-pink-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-pink-300">40% conversion improvement with new design</div>
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
              Our professional UI/UX design service combines user-centered design methodology with creative excellence to create digital experiences 
              that users love and businesses depend on. We specialize in conducting thorough user research, creating intuitive information architectures, 
              and designing beautiful interfaces that work seamlessly across all devices. From wireframes to high-fidelity prototypes, our design solutions 
              are crafted with accessibility, usability, and business goals in mind, ensuring that every interaction delights users while driving 
              measurable results for your organization.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Search, title: "User", subtitle: "Research" },
              { icon: Layout, title: "Information", subtitle: "Architecture" },
              { icon: Palette, title: "Visual", subtitle: "Design" },
              { icon: Eye, title: "Usability", subtitle: "Testing" }
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
              { icon: SiFigma, name: "Figma", desc: "Collaborative design platform for creating wireframes, prototypes, and design systems with real-time collaboration." },
              { icon: SiSketch, name: "Sketch", desc: "Professional design toolkit for creating beautiful user interfaces and design systems for digital products." },
              { icon: SiAdobe, name: "Adobe XD", desc: "Complete UX/UI design platform for wireframing, prototyping, and creating interactive design experiences." },
              { icon: SiFramer, name: "Framer", desc: "Advanced prototyping tool for creating high-fidelity interactive prototypes with realistic animations." },
              { icon: SiInvision, name: "InVision", desc: "Digital product design platform for prototyping, collaboration, and design workflow management." },
              { icon: Layers, name: "Zeplin", desc: "Collaboration tool bridging design and development with specs, assets, and design handoff capabilities." },
              { icon: SiMiro, name: "Miro", desc: "Online collaborative whiteboard platform for brainstorming, user journey mapping, and design workshops." },
              { icon: SiAbstract, name: "Abstract", desc: "Version control and collaboration platform specifically designed for design teams and file management." }
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
            <p className="text-xl text-purple-100/90">Common questions about our UI/UX design services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="What's the difference between UI and UX design?"
              answer="UX design focuses on the overall user experience and journey, including research and strategy, while UI design focuses on the visual interface elements like buttons, typography, and layout. Both work together to create great products."
            />
            <FAQItem 
              question="How long does a typical design project take?"
              answer="Simple projects take 4-8 weeks, while complex applications can take 12-20 weeks. Timeline depends on project scope, research requirements, number of screens, and revision cycles."
            />
            <FAQItem 
              question="Do you conduct user research and testing?"
              answer="Yes, we conduct professional user research including interviews, surveys, and usability testing. We also create user personas, journey maps, and validate designs through A/B testing and user feedback."
            />
            <FAQItem 
              question="What deliverables do you provide?"
              answer="We provide wireframes, high-fidelity mockups, interactive prototypes, design systems, style guides, and developer handoff documentation. All designs are delivered in industry-standard formats."
            />
            <FAQItem 
              question="Can you work with our existing brand guidelines?"
              answer="Absolutely! We can work within your existing brand guidelines or help evolve them for digital experiences. We ensure all designs align with your brand identity while optimizing for usability."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}