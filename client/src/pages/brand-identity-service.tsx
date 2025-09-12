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
  Eye, 
  Layers, 
  TrendingUp, 
  Award,
  Users,
  Zap,
  Settings,
  Globe,
  ArrowRight,
  Shield,
  Star,
  Target,
  Phone,
  MessageCircle,
  MapPin,
  Brush
} from "lucide-react";
import { SiAdobe, SiFigma, SiSketch, SiCanva, SiIllustrator, SiPhotoshop, SiXd, SiInvision } from "react-icons/si";

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

export default function BrandIdentityService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brand Identity Design Services",
    "description": "Create a memorable brand identity that resonates with your audience and drives business growth through strategic design and visual identity",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "Brand Identity Design"
  };

  return (
    <>
      <SEOHead
        title="Brand Identity Design Services - Create Memorable Brand Identity"
        description="Create a memorable brand identity that resonates with your audience and drives business growth through strategic design, logo creation, and visual identity."
        keywords="brand identity design, logo design, visual identity, brand strategy, brand guidelines, corporate identity"
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
                  Brand Identity<br />
                  <span className="text-purple-300">Design</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we create memorable brand identities that resonate with your audience 
                  and drive business growth. Our team crafts distinctive visual identities that tell your 
                  story. From logo design to complete brand guidelines, we deliver brand identity solutions 
                  that establish strong market presence and authentic connections.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Brand Strategy",
                  "Logo Design", 
                  "Visual Identity",
                  "Brand Guidelines"
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
                      Create Brand Identity
                    </Button>
                  }
                  title="Ready to Build Your Brand Identity?"
                  description="Let's discuss your brand vision and create an identity that resonates with your audience."
                  defaultService="Brand Identity Design"
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
                {/* Large Brand Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Design Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Identity Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Logo Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Visual Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-gold-300/30 to-purple-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
                {/* Small Transparent Cube */}
                <div className="absolute bottom-16 left-20 w-12 h-12 bg-gradient-to-br from-white/10 via-pink-200/20 to-transparent backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transform -rotate-6 hover:rotate-12 transition-transform duration-300"></div>
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
              { icon: Target, title: "Brand Strategy & Research", step: "Step 1", desc: "Deep dive into your market, competitors, and target audience to define brand positioning and unique value proposition." },
              { icon: Brush, title: "Visual Identity Creation", step: "Step 2", desc: "Design distinctive logo, color palette, typography, and visual elements that embody your brand personality." },
              { icon: Layers, title: "Brand System Development", step: "Step 3", desc: "Create comprehensive brand guidelines, applications, and templates for consistent brand expression." },
              { icon: Globe, title: "Implementation & Launch", step: "Step 4", desc: "Deploy brand identity across all touchpoints and provide ongoing support for brand consistency." }
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
                What Our Brand Identity<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive brand identity service is designed to help businesses of all
                sizes establish a strong, memorable presence in their market. We work closely with your
                team to understand your vision and implement solutions that
                deliver authentic brand expression, market differentiation, and lasting customer connections.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "Strategic Brand Discovery & Positioning",
                  "Logo Design & Visual Identity Systems", 
                  "Brand Guidelines & Style Guides",
                  "Brand Application & Implementation Support"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We create cohesive brand identities that are memorable, distinctive, and 
                        strategically aligned with your business goals and target audience expectations.
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
                    {/* Brand Design Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-gold-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Palette className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-pink-400 rounded-full shadow-lg"></div>
                      <div className="w-6 h-6 bg-blue-400 rounded-md shadow-lg"></div>
                      <div className="w-10 h-6 bg-green-400 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">200+</div>
                  <p className="text-purple-100/80 text-sm">Brands Created</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">95%</div>
                    <p className="text-xs text-purple-100/60">Client Satisfaction</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">150%</div>
                  <p className="text-purple-100/80 text-sm">Brand Recognition</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">30+</div>
                    <p className="text-xs text-purple-100/60">Industries</p>
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
            <h2 className="text-5xl font-bold text-white">All Brand Identity Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our brand identity design services have transformed businesses
              across various industries with memorable, strategic brand identities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Tech Startup Rebrand", subtitle: "Complete Visual Identity System", desc: "Developed comprehensive brand identity for emerging tech startup including logo design, color system, typography, and brand guidelines achieving 300% brand recognition increase." },
              { title: "Restaurant Chain Identity", subtitle: "Multi-location Brand Consistency", desc: "Created cohesive brand identity system for restaurant chain with scalable design elements, menu design, and location guidelines ensuring consistent brand experience across 15 locations." },
              { title: "Professional Services Brand", subtitle: "Premium Brand Positioning", desc: "Designed sophisticated brand identity for consulting firm including executive branding, presentation templates, and digital assets positioning them as industry leaders and increasing client acquisition by 200%." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-gold-800/40 to-gold-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gold-200">
                          <span>Brand Recognition</span>
                          <span>+300%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-gold-500/30 to-pink-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-gold-400 rounded-t" style={{ height: '35%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-gold-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-gold-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-pink-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-pink-400 rounded-t" style={{ height: '100%' }}></div>
                        </div>
                        <div className="text-xs text-gold-300">300% brand recognition improvement achieved</div>
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
              Our comprehensive brand identity design service combines strategic brand thinking with creative visual design to establish 
              distinctive, memorable identities that resonate with target audiences and drive business growth. We specialize in developing 
              complete brand systems including logo design, color palettes, typography, imagery style, and comprehensive brand guidelines. 
              From startup launches to established business rebrands, our brand identity solutions are designed with market differentiation, 
              customer connection, and long-term brand equity in mind, ensuring that every visual element communicates your brand values 
              authentically and creates lasting impressions across all customer touchpoints.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Eye, title: "Brand", subtitle: "Strategy" },
              { icon: Palette, title: "Visual", subtitle: "Design" },
              { icon: Layers, title: "Brand", subtitle: "Guidelines" },
              { icon: Award, title: "Brand", subtitle: "Experience" }
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
          <h2 className="text-5xl font-bold text-center text-white">Design Tools We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiAdobe, name: "Adobe Creative Suite", desc: "Professional design suite including Photoshop, Illustrator, and InDesign for comprehensive brand creation." },
              { icon: SiFigma, name: "Figma", desc: "Collaborative design platform for creating scalable brand assets and design systems with team collaboration." },
              { icon: SiSketch, name: "Sketch", desc: "Vector graphics editor optimized for digital design and user interface brand element creation." },
              { icon: SiCanva, name: "Canva", desc: "User-friendly design platform for creating brand materials, presentations, and marketing collateral." },
              { icon: SiIllustrator, name: "Adobe Illustrator", desc: "Industry-standard vector graphics software for logo design and scalable brand identity elements." },
              { icon: SiPhotoshop, name: "Adobe Photoshop", desc: "Professional image editing software for photo manipulation and raster graphic brand elements." },
              { icon: SiXd, name: "Adobe XD", desc: "User experience design tool for prototyping brand applications and digital brand experiences." },
              { icon: SiInvision, name: "InVision", desc: "Digital product design platform for prototyping brand interfaces and collaborative design reviews." }
            ].map((tool, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-white/5 group-hover:scale-110 transition-transform duration-300">
                  <tool.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-sm text-purple-100/80 leading-relaxed">{tool.desc}</p>
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
            <p className="text-xl text-purple-100/90">Common questions about our brand identity design services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="What's included in a complete brand identity package?"
              answer="A complete package includes logo design, color palette, typography selection, brand guidelines, business card design, letterhead, and digital assets. We also provide usage guidelines and brand application examples."
            />
            <FAQItem 
              question="How long does the brand identity design process take?"
              answer="The typical brand identity project takes 6-8 weeks from initial consultation to final delivery. This includes research, concept development, revisions, and finalization of all brand assets."
            />
            <FAQItem 
              question="Do you provide trademark research for logos?"
              answer="We conduct basic trademark searches during our design process, but we recommend professional trademark research and registration through a qualified attorney for comprehensive legal protection."
            />
            <FAQItem 
              question="Can you redesign an existing brand identity?"
              answer="Absolutely! We specialize in brand refreshes and complete rebrands. We analyze your current brand, market position, and goals to create an updated identity that better reflects your evolved business."
            />
            <FAQItem 
              question="What file formats do you provide for the final brand assets?"
              answer="We provide comprehensive file packages including vector formats (AI, EPS, SVG), high-resolution rasters (PNG, JPG), and print-ready PDFs. All files are optimized for different use cases and applications."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}