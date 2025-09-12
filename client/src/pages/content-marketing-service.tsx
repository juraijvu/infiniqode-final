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
  PenTool, 
  CheckCircle, 
  BookOpen, 
  Video, 
  TrendingUp, 
  Megaphone,
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
  Edit3
} from "lucide-react";
import { SiContentful, SiWordpress, SiHubspot, SiMailchimp, SiCanva, SiAdobe, SiBuzzfeed, SiMedium } from "react-icons/si";

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

export default function ContentMarketingService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Content Marketing Services",
    "description": "Create compelling content that engages your audience, builds trust, and drives conversions across all marketing channels",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "Content Marketing"
  };

  return (
    <>
      <SEOHead
        title="Content Marketing Services - Engaging Content Strategy"
        description="Create compelling content that engages your audience, builds trust, and drives conversions across all marketing channels with strategic content marketing."
        keywords="content marketing, blog writing, video content, content strategy, social media content, copywriting"
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
                  Content Marketing<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we create compelling content that engages your audience, builds trust, 
                  and drives conversions across all marketing channels. Our team crafts strategic 
                  content that resonates with your audience. From blog writing to video production, 
                  we deliver content marketing that amplifies your brand and drives measurable results.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Blog Writing",
                  "Video Content", 
                  "Content Strategy",
                  "Social Media Content"
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
                      Create Content Strategy
                    </Button>
                  }
                  title="Ready to Amplify Your Content?"
                  description="Let's discuss your content needs and create strategies that engage and convert."
                  defaultService="Content Marketing"
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
                {/* Large Content Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Blog Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Video Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Strategy Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Social Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-pink-300/30 to-purple-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
                {/* Small Transparent Cube */}
                <div className="absolute bottom-16 left-20 w-12 h-12 bg-gradient-to-br from-white/10 via-green-200/20 to-transparent backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transform -rotate-6 hover:rotate-12 transition-transform duration-300"></div>
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
              { icon: Target, title: "Content Strategy & Planning", step: "Step 1", desc: "Develop comprehensive content strategy aligned with your brand goals, audience needs, and marketing objectives." },
              { icon: Edit3, title: "Content Creation & Production", step: "Step 2", desc: "Create high-quality, engaging content across multiple formats including blogs, videos, infographics, and social media." },
              { icon: Megaphone, title: "Distribution & Amplification", step: "Step 3", desc: "Strategically distribute content across channels to maximize reach, engagement, and audience growth." },
              { icon: TrendingUp, title: "Performance & Optimization", step: "Step 4", desc: "Monitor content performance, analyze engagement metrics, and continuously optimize strategy for better results." }
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
                What Our Content Marketing<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive content marketing service is designed to help businesses of all
                sizes build meaningful connections with their audience through strategic content. We work closely with your
                team to understand your brand voice and implement solutions that
                deliver engaging experiences, build trust, and drive conversions across all channels.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "Strategic Content Planning & Editorial Calendars",
                  "Blog Writing & SEO-Optimized Content", 
                  "Video Production & Visual Content Creation",
                  "Social Media Content & Community Management"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We create content that is authentic, valuable, and strategically aligned with 
                        your business goals to build lasting relationships with your audience.
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
                    {/* Content Creation Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-pink-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <PenTool className="icon-white text-xl md:text-2xl" />
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
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <p className="text-purple-100/80 text-sm">Content Pieces</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">300%</div>
                    <p className="text-xs text-purple-100/60">Engagement</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">85%</div>
                  <p className="text-purple-100/80 text-sm">Lead Quality</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">200%</div>
                    <p className="text-xs text-purple-100/60">Brand Reach</p>
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
            <h2 className="text-5xl font-bold text-white">All Content Marketing Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our content marketing services have transformed businesses
              across various industries with strategic content that engages and converts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "SaaS Content Strategy", subtitle: "300% Lead Generation Increase", desc: "Developed comprehensive content strategy for SaaS platform including thought leadership blog, video tutorials, and case studies resulting in 300% qualified lead increase." },
              { title: "E-commerce Content Hub", subtitle: "200% Organic Traffic Growth", desc: "Created product-focused content hub with buying guides, tutorials, and user-generated content achieving 200% organic traffic growth and 40% higher conversions." },
              { title: "B2B Thought Leadership", subtitle: "Industry Authority Positioning", desc: "Established industry thought leadership through strategic content including whitepapers, webinars, and expert interviews increasing brand authority and premium pricing." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-pink-800/40 to-pink-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-pink-200">
                          <span>Engagement</span>
                          <span>+300%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-pink-400 rounded-t" style={{ height: '45%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-pink-400 rounded-t" style={{ height: '65%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-pink-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-pink-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-pink-400 rounded-t" style={{ height: '100%' }}></div>
                        </div>
                        <div className="text-xs text-pink-300">300% engagement increase achieved</div>
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
              Our comprehensive content marketing service combines strategic content planning with creative execution to build meaningful connections 
              between your brand and audience. We specialize in developing multi-channel content strategies including blog content, video production, 
              social media campaigns, and thought leadership initiatives. From content audit to performance optimization, our content marketing solutions 
              are designed with audience engagement, brand building, and conversion optimization in mind, ensuring that every piece of content serves 
              a strategic purpose in your customer journey and delivers measurable business results.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: PenTool, title: "Content", subtitle: "Creation" },
              { icon: Video, title: "Video", subtitle: "Production" },
              { icon: BookOpen, title: "Editorial", subtitle: "Strategy" },
              { icon: Megaphone, title: "Content", subtitle: "Amplification" }
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
              { icon: SiContentful, name: "Contentful", desc: "Headless content management system for creating, managing, and delivering digital content across channels." },
              { icon: SiWordpress, name: "WordPress", desc: "Popular content management platform for building and managing websites with extensive customization options." },
              { icon: SiHubspot, name: "HubSpot", desc: "Comprehensive marketing platform for content management, lead generation, and customer relationship management." },
              { icon: SiMailchimp, name: "Mailchimp", desc: "Email marketing platform for creating newsletters, automated campaigns, and audience segmentation." },
              { icon: SiCanva, name: "Canva", desc: "Design platform for creating visual content including graphics, presentations, and social media posts." },
              { icon: SiAdobe, name: "Adobe Creative", desc: "Professional creative suite including Photoshop, Illustrator, and Premiere for content creation." },
              { icon: SiBuzzfeed, name: "Content Tools", desc: "Various content creation and distribution tools for viral marketing and audience engagement." },
              { icon: SiMedium, name: "Publishing Platforms", desc: "Professional publishing platforms for thought leadership and content distribution strategies." }
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
            <p className="text-xl text-purple-100/90">Common questions about our content marketing services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="How often should we publish new content?"
              answer="Content frequency depends on your audience and resources. We typically recommend 2-3 blog posts weekly, daily social media content, and monthly video content, but we'll create a custom schedule based on your goals."
            />
            <FAQItem 
              question="What types of content do you create?"
              answer="We create diverse content including blog posts, articles, videos, infographics, social media content, whitepapers, case studies, email newsletters, podcasts, and interactive content tailored to your audience."
            />
            <FAQItem 
              question="How do you measure content marketing success?"
              answer="We track engagement metrics, website traffic, lead generation, conversion rates, brand awareness, social shares, and ROI to measure content effectiveness and optimize strategy accordingly."
            />
            <FAQItem 
              question="Can you help with content distribution?"
              answer="Yes, we develop comprehensive distribution strategies including social media, email marketing, influencer partnerships, guest posting, and paid promotion to maximize your content reach and impact."
            />
            <FAQItem 
              question="Do you handle content for different industries?"
              answer="Absolutely! We have experience creating content for technology, healthcare, finance, e-commerce, B2B services, and many other industries, adapting tone and messaging to each sector's specific needs."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}