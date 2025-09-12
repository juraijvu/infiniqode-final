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
  Share2, 
  CheckCircle, 
  MessageCircle, 
  Heart, 
  TrendingUp, 
  BarChart3,
  Users,
  Zap,
  Settings,
  Globe,
  ArrowRight,
  Shield,
  Star,
  Target,
  Phone,
  MapPin,
  Camera
} from "lucide-react";
import { SiFacebook, SiInstagram, SiTwitter, SiLinkedin, SiTiktok, SiYoutube, SiPinterest, SiSnapchat } from "react-icons/si";

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

export default function SocialMediaManagementService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Management Services",
    "description": "Build engaged communities and drive meaningful interactions across all social platforms with comprehensive social media management",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "Social Media Management"
  };

  return (
    <>
      <SEOHead
        title="Social Media Management Services - Build Engaged Communities"
        description="Build engaged communities and drive meaningful interactions across all social platforms with comprehensive social media management and content strategy."
        keywords="social media management, community management, social media marketing, content creation, social advertising"
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
                  Social Media Management<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we build engaged communities and drive meaningful interactions across 
                  all social platforms with comprehensive social media management services. Our team 
                  creates authentic social experiences. From content creation to community management, 
                  we deliver social media strategies that build brand loyalty and drive conversions.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Content Creation",
                  "Community Management", 
                  "Social Advertising",
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
                      Grow Social Presence
                    </Button>
                  }
                  title="Ready to Amplify Your Social Media?"
                  description="Let's discuss your social media goals and create strategies that build communities."
                  defaultService="Social Media Management"
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
                {/* Large Social Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Engagement Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Community Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Content Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Share Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-blue-300/30 to-purple-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
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
              { icon: Target, title: "Strategy & Planning", step: "Step 1", desc: "Develop comprehensive social media strategy aligned with brand goals, audience insights, and platform best practices." },
              { icon: Camera, title: "Content Creation & Design", step: "Step 2", desc: "Create engaging visual content, graphics, videos, and copy that resonates with your target audience across platforms." },
              { icon: Users, title: "Community Management", step: "Step 3", desc: "Actively engage with your audience, respond to comments, build relationships, and foster brand loyalty." },
              { icon: BarChart3, title: "Analytics & Optimization", step: "Step 4", desc: "Monitor performance metrics, analyze engagement data, and continuously optimize strategy for better results." }
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
                What Our Social Media Management<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive social media management service is designed to help businesses of all
                sizes build authentic connections with their audience across social platforms. We work closely with your
                brand to understand your voice and implement solutions that
                deliver meaningful engagement, community growth, and measurable business results.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "Strategic Content Planning & Creation",
                  "Community Management & Engagement", 
                  "Social Media Advertising & Promotion",
                  "Performance Analytics & Reporting"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We create authentic social media experiences that build brand loyalty, increase 
                        engagement, and drive conversions across all major social platforms.
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
                    {/* Social Media Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-blue-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Share2 className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-pink-400 rounded-full shadow-lg"></div>
                      <div className="w-6 h-6 bg-green-400 rounded-md shadow-lg"></div>
                      <div className="w-10 h-6 bg-purple-400 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">500%</div>
                  <p className="text-purple-100/80 text-sm">Engagement Growth</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">10K+</div>
                    <p className="text-xs text-purple-100/60">New Followers</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">300+</div>
                  <p className="text-purple-100/80 text-sm">Content Pieces</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">8</div>
                    <p className="text-xs text-purple-100/60">Platforms</p>
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
            <h2 className="text-5xl font-bold text-white">All Social Media Management Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our social media management services have transformed businesses
              across various industries with engaging content and community building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fashion Brand Growth", subtitle: "500% Instagram Engagement Increase", desc: "Transformed fashion brand's social presence with stunning visual content, influencer partnerships, and community engagement achieving 500% engagement growth and 50K+ new followers." },
              { title: "Restaurant Social Strategy", subtitle: "300% Foot Traffic from Social", desc: "Developed mouth-watering content strategy for restaurant chain with food photography, user-generated content, and local community engagement driving 300% foot traffic increase." },
              { title: "SaaS Community Building", subtitle: "Industry Thought Leadership", desc: "Built thriving professional community for B2B SaaS platform through educational content, webinars, and customer success stories establishing industry authority and 200% lead growth." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-blue-800/40 to-blue-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-blue-200">
                          <span>Engagement</span>
                          <span>+500%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-blue-500/30 to-pink-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-blue-400 rounded-t" style={{ height: '30%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-blue-400 rounded-t" style={{ height: '55%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-blue-400 rounded-t" style={{ height: '75%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-pink-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-pink-400 rounded-t" style={{ height: '100%' }}></div>
                        </div>
                        <div className="text-xs text-blue-300">500% engagement increase achieved</div>
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
              Our comprehensive social media management service combines strategic content creation with authentic community building to establish 
              meaningful connections between your brand and audience across all major social platforms. We specialize in developing platform-specific 
              strategies for Facebook, Instagram, Twitter, LinkedIn, TikTok, and emerging social channels. From content calendar planning to real-time 
              community engagement, our social media solutions are designed with brand consistency, audience growth, and conversion optimization in mind, 
              ensuring that every post, comment, and interaction contributes to building a loyal community that drives business results.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Camera, title: "Content", subtitle: "Creation" },
              { icon: Users, title: "Community", subtitle: "Management" },
              { icon: Share2, title: "Social", subtitle: "Advertising" },
              { icon: BarChart3, title: "Analytics", subtitle: "Reporting" }
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
          <h2 className="text-5xl font-bold text-center text-white">Platforms We Manage</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiFacebook, name: "Facebook", desc: "Community building and targeted advertising on the world's largest social network for broad audience reach." },
              { icon: SiInstagram, name: "Instagram", desc: "Visual storytelling and brand aesthetic development through photos, stories, and reels for lifestyle brands." },
              { icon: SiTwitter, name: "Twitter", desc: "Real-time engagement and thought leadership through conversations, news, and trending topics." },
              { icon: SiLinkedin, name: "LinkedIn", desc: "Professional networking and B2B marketing through industry insights and thought leadership content." },
              { icon: SiTiktok, name: "TikTok", desc: "Creative short-form video content and viral marketing for younger demographics and trending culture." },
              { icon: SiYoutube, name: "YouTube", desc: "Long-form video content, tutorials, and brand storytelling for educational and entertainment value." },
              { icon: SiPinterest, name: "Pinterest", desc: "Visual discovery and inspiration platform perfect for lifestyle, fashion, and creative industries." },
              { icon: SiSnapchat, name: "Snapchat", desc: "Ephemeral content and AR experiences targeting younger audiences with authentic, fun content." }
            ].map((platform, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-white/5 group-hover:scale-110 transition-transform duration-300">
                  <platform.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                <p className="text-sm text-purple-100/80 leading-relaxed">{platform.desc}</p>
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
            <p className="text-xl text-purple-100/90">Common questions about our social media management services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="Which social media platforms should my business be on?"
              answer="The best platforms depend on your target audience and business goals. We analyze your audience demographics and competition to recommend the most effective platforms for your brand, typically focusing on 3-5 key channels."
            />
            <FAQItem 
              question="How often do you post content?"
              answer="Posting frequency varies by platform and strategy. Generally, we recommend 3-5 posts per week on Facebook, daily Instagram content, 3-5 tweets daily, and 2-3 LinkedIn posts weekly. We customize based on your audience engagement patterns."
            />
            <FAQItem 
              question="Do you handle social media advertising?"
              answer="Yes, we manage paid social media campaigns including Facebook Ads, Instagram promotions, LinkedIn advertising, and other platform-specific promotional tools to amplify reach and drive conversions."
            />
            <FAQItem 
              question="How do you measure social media success?"
              answer="We track engagement rates, follower growth, reach, click-through rates, conversions, and brand mention sentiment. We provide monthly reports showing progress toward your specific business objectives."
            />
            <FAQItem 
              question="Can you respond to customer inquiries on social media?"
              answer="Absolutely! We provide community management services including responding to comments, messages, and reviews in your brand voice. We can handle customer service inquiries or escalate complex issues to your team."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}