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
  CreditCard, 
  CheckCircle, 
  MousePointer, 
  Eye, 
  TrendingUp, 
  BarChart,
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
  DollarSign
} from "lucide-react";
import { SiGoogleads, SiFacebook, SiLinkedin, SiTwitter, SiMicrosoft, SiAmazon, SiSnapchat, SiTiktok } from "react-icons/si";

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

export default function PaidAdvertisingService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Paid Advertising Services",
    "description": "Drive immediate traffic and conversions with strategic paid advertising campaigns across Google, Facebook, LinkedIn, and more",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "Paid Advertising"
  };

  return (
    <>
      <SEOHead
        title="Paid Advertising Services - Drive Immediate Traffic & Conversions"
        description="Drive immediate traffic and conversions with strategic paid advertising campaigns across Google, Facebook, LinkedIn, and more platforms with expert PPC management."
        keywords="paid advertising, Google Ads, Facebook Ads, PPC management, social media advertising, search advertising"
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
                  Paid Advertising<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we drive immediate traffic and conversions with strategic paid advertising 
                  campaigns across Google, Facebook, LinkedIn, and more. Our team creates high-performing 
                  ad campaigns that deliver results. From PPC management to social advertising, 
                  we deliver paid advertising solutions that maximize ROI and accelerate growth.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Google Ads",
                  "Facebook Ads", 
                  "PPC Management",
                  "Campaign Optimization"
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
                      Start Advertising Campaign
                    </Button>
                  }
                  title="Ready to Drive Immediate Results?"
                  description="Let's discuss your advertising goals and create campaigns that convert."
                  defaultService="Paid Advertising"
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
                {/* Large Ad Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Click Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Campaign Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Conversion Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* ROI Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-red-300/30 to-purple-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
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
              { icon: Target, title: "Strategy & Planning", step: "Step 1", desc: "Analyze target audience, competitors, and goals to develop comprehensive paid advertising strategy and budget allocation." },
              { icon: Settings, title: "Campaign Setup & Launch", step: "Step 2", desc: "Create optimized campaigns with compelling ad copy, targeting parameters, and bidding strategies across platforms." },
              { icon: Eye, title: "Monitoring & Management", step: "Step 3", desc: "Continuous campaign monitoring, bid adjustments, and real-time optimization to maximize performance and ROI." },
              { icon: BarChart, title: "Analysis & Optimization", step: "Step 4", desc: "Detailed performance analysis, A/B testing, and strategic adjustments to improve conversion rates and reduce costs." }
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
                What Our Paid Advertising<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive paid advertising service is designed to help businesses of all
                sizes generate immediate traffic and conversions through strategic campaigns. We work closely with your
                marketing team to understand your goals and implement solutions that
                deliver maximum ROI, qualified leads, and measurable business growth across all platforms.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "Google Ads & Search Campaign Management",
                  "Social Media Advertising (Facebook, LinkedIn, Twitter)", 
                  "Display & Retargeting Campaign Optimization",
                  "Performance Analytics & ROI Reporting"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We create data-driven advertising campaigns that are strategically targeted, 
                        continuously optimized, and designed to deliver immediate results and long-term growth.
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
                    {/* Advertising Dashboard Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-red-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <CreditCard className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-blue-400 rounded-full shadow-lg"></div>
                      <div className="w-6 h-6 bg-green-400 rounded-md shadow-lg"></div>
                      <div className="w-10 h-6 bg-orange-400 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">400%</div>
                  <p className="text-purple-100/80 text-sm">ROI Average</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">$2M+</div>
                    <p className="text-xs text-purple-100/60">Ad Spend Managed</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">85%</div>
                  <p className="text-purple-100/80 text-sm">Conversion Rate</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">24/7</div>
                    <p className="text-xs text-purple-100/60">Monitoring</p>
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
            <h2 className="text-5xl font-bold text-white">All Paid Advertising Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our paid advertising services have transformed businesses
              across various industries with strategic campaigns that drive immediate results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "SaaS Lead Generation", subtitle: "500% Increase in Qualified Leads", desc: "Developed comprehensive Google Ads and LinkedIn campaigns for B2B SaaS platform with targeted keyword strategy and conversion optimization achieving 500% qualified lead increase." },
              { title: "E-commerce Sales Growth", subtitle: "300% Revenue from Paid Ads", desc: "Created multi-platform advertising strategy for e-commerce store including Google Shopping, Facebook Ads, and retargeting campaigns resulting in 300% revenue growth from paid channels." },
              { title: "Local Business Expansion", subtitle: "10x Local Market Penetration", desc: "Implemented local advertising strategy for service business with geo-targeted campaigns across Google and Facebook achieving 10x increase in local market penetration and bookings." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-red-800/40 to-red-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-red-200">
                          <span>Conversion Rate</span>
                          <span>+500%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-red-500/30 to-green-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-red-400 rounded-t" style={{ height: '20%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-red-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-red-400 rounded-t" style={{ height: '65%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-green-400 rounded-t" style={{ height: '85%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-green-400 rounded-t" style={{ height: '100%' }}></div>
                        </div>
                        <div className="text-xs text-red-300">500% qualified leads increase achieved</div>
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
              Our comprehensive paid advertising service combines strategic campaign development with data-driven optimization to deliver 
              immediate traffic, qualified leads, and measurable conversions across all major digital advertising platforms. We specialize 
              in creating high-performance campaigns for Google Ads, Facebook Advertising, LinkedIn Marketing, and other premium networks. 
              From keyword research to audience targeting, our paid advertising solutions are designed with conversion optimization, cost efficiency, 
              and ROI maximization in mind, ensuring that every advertising dollar generates maximum business value through intelligent bidding 
              strategies, compelling ad creative, and continuous performance optimization.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Target, title: "Targeted", subtitle: "Campaigns" },
              { icon: MousePointer, title: "Click", subtitle: "Optimization" },
              { icon: DollarSign, title: "ROI", subtitle: "Maximization" },
              { icon: BarChart, title: "Performance", subtitle: "Analytics" }
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
          <h2 className="text-5xl font-bold text-center text-white">Advertising Platforms We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiGoogleads, name: "Google Ads", desc: "Search, display, and shopping campaigns on the world's largest search platform for maximum reach." },
              { icon: SiFacebook, name: "Facebook Ads", desc: "Targeted social advertising with advanced audience segmentation and creative optimization for engagement." },
              { icon: SiLinkedin, name: "LinkedIn Ads", desc: "Professional B2B advertising platform for targeting decision-makers and industry professionals." },
              { icon: SiTwitter, name: "Twitter Ads", desc: "Real-time advertising on Twitter for trend-based marketing and conversation engagement." },
              { icon: SiMicrosoft, name: "Microsoft Ads", desc: "Bing search advertising platform reaching unique audiences with lower competition rates." },
              { icon: SiAmazon, name: "Amazon Ads", desc: "E-commerce advertising platform for product promotion and sponsored listings on Amazon marketplace." },
              { icon: SiSnapchat, name: "Snapchat Ads", desc: "Mobile-first advertising platform targeting younger demographics with creative, interactive formats." },
              { icon: SiTiktok, name: "TikTok Ads", desc: "Video-first advertising platform for reaching Gen Z and millennial audiences with viral content." }
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
            <p className="text-xl text-purple-100/90">Common questions about our paid advertising services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="What's the minimum budget needed for paid advertising?"
              answer="Minimum budgets vary by platform and goals. We typically recommend starting with $1,000-2,000 monthly for Google Ads and $500-1,000 for social platforms to gather meaningful data and optimize performance effectively."
            />
            <FAQItem 
              question="How quickly can I see results from paid advertising?"
              answer="You can see initial traffic within hours of launch, but meaningful optimization data typically requires 2-4 weeks. Significant performance improvements usually occur within 30-60 days as we optimize campaigns."
            />
            <FAQItem 
              question="Which advertising platform is best for my business?"
              answer="Platform selection depends on your target audience, business model, and goals. B2B companies often perform well on LinkedIn and Google, while B2C brands typically succeed on Facebook and Instagram. We analyze your needs to recommend the best mix."
            />
            <FAQItem 
              question="How do you measure advertising success?"
              answer="We track key metrics including click-through rates, conversion rates, cost per acquisition, return on ad spend (ROAS), and lifetime customer value. We provide detailed monthly reports with actionable insights."
            />
            <FAQItem 
              question="Do you handle both campaign creation and ongoing management?"
              answer="Yes, we provide end-to-end service including strategy development, campaign creation, ad copywriting, creative development, ongoing optimization, bid management, and detailed performance reporting."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}