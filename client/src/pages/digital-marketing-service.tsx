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
  Megaphone, 
  CheckCircle, 
  TrendingUp,
  Search,
  Target,
  BarChart3,
  Users,
  Zap,
  ArrowRight,
  Globe,
  Mail,
  MessageSquare,
  Settings,
  Shield,
  Star,
  Phone,
  MapPin
} from "lucide-react";
import { SiGoogle, SiFacebook, SiHubspot, SiGoogleanalytics, SiLinkedin, SiInstagram } from "react-icons/si";

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

export default function DigitalMarketingService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Data-driven growth strategies that increase brand visibility and drive conversions",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "Digital Marketing"
  };


  return (
    <>
      <SEOHead
        title="Digital Marketing Services - Data-Driven Growth Strategies"
        description="Data-driven growth strategies that increase brand visibility and drive conversions. SEO, social ads, conversion optimization, and comprehensive analytics."
        keywords="digital marketing, SEO, SEM, social media advertising, conversion optimization, growth marketing"
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
                  Digital Marketing<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we believe in the transformative power of data-driven marketing solutions. Our team 
                  of experts is dedicated to helping businesses like yours thrive in the competitive 
                  digital landscape. From strategic SEO optimization to performance-driven advertising 
                  campaigns, we are committed to delivering results that exceed expectations.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "SEO Optimization",
                  "Paid Advertising", 
                  "Content Marketing",
                  "Social Media Marketing"
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
                  title="Ready to Start Your Digital Marketing Campaign?"
                  description="Let's discuss your marketing needs and create a custom strategy that drives measurable results."
                  defaultService="Digital Marketing"
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
              { icon: Search, title: "Market Research & Analysis", step: "Step 1", desc: "Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy" },
              { icon: Target, title: "Audience Targeting Strategy", step: "Step 2", desc: "Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy" },
              { icon: TrendingUp, title: "Campaign Implementation", step: "Step 3", desc: "Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy" },
              { icon: BarChart3, title: "Performance Optimization", step: "Step 4", desc: "Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy Research Digital Marketing Strategy" }
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
                What Our Digital Marketing<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive digital marketing service is designed to help businesses of all
                sizes harness the power of data-driven strategies. We work closely with your
                team to understand your unique challenges and implement marketing solutions that
                drive real business value and measurable ROI.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "SEO & Content Strategy",
                  "Paid Advertising Campaigns", 
                  "Social Media Marketing",
                  "Performance Analytics & Reporting"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We analyze your market and identify 
                        opportunities where digital marketing can create the most impact.
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
                    {/* Dashboard Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-blue-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <BarChart3 className="icon-white text-xl md:text-2xl" />
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
                  <div className="text-3xl font-bold text-white mb-1">300%+</div>
                  <p className="text-purple-100/80 text-sm">ROI Increase</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">5.2x</div>
                    <p className="text-xs text-purple-100/60">Conversion Rate</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">250%</div>
                  <p className="text-purple-100/80 text-sm">Traffic Growth</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">8x</div>
                    <p className="text-xs text-purple-100/60">Lead Quality</p>
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
            <h2 className="text-5xl font-bold text-white">All Digital Marketing Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our digital marketing services have transformed businesses
              across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Lead Generation", subtitle: "High-Quality Lead Generation & Conversion", desc: "Using data-driven digital marketing strategies to create conversion-focused campaigns, reducing customer acquisition costs by 45% while improving lead quality." },
              { title: "Brand Awareness", subtitle: "Brand Visibility & Market Reach", desc: "Using multi-channel marketing to improve brand recognition platforms, reducing marketing spend by 38% while improving brand reach and awareness." },
              { title: "Revenue Growth", subtitle: "Sales Performance & Revenue Optimization", desc: "Using advanced marketing automation to create efficient sales funnels, reducing conversion time by 50% while improving revenue per customer." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-purple-200">
                          <span>Marketing ROI</span>
                          <span>85%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-purple-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-purple-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-purple-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-purple-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-purple-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-purple-300">60% Performance boost with targeted campaigns</div>
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
              Our premium digital marketing service combines data-driven strategies with creative execution to Our premium digital marketing service combines 
              data-driven strategies with creative execution to Our premium digital marketing service combines data-driven strategies with creative execution to 
              Our premium digital marketing service combines data-driven strategies with creative execution to Our premium digital marketing service combines 
              data-driven strategies with creative execution to Our premium digital marketing service combines data-driven strategies with creative execution to 
              Our premium digital marketing service combines data-driven strategies with creative execution to Our premium digital marketing service combines 
              data-driven strategies with creative execution to Our premium digital marketing service combines data-driven strategies with creative execution to.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Search, title: "SEO", subtitle: "Search Optimization" },
              { icon: Target, title: "Targeted", subtitle: "Audience Reach" },
              { icon: TrendingUp, title: "Growth", subtitle: "Driven Results" },
              { icon: BarChart3, title: "Analytics", subtitle: "Data Insights" }
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
          <h2 className="text-5xl font-bold text-center text-white">Marketing Platforms We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiGoogle, name: "Google Ads", desc: "Advanced search and display advertising campaigns with smart bidding strategies." },
              { icon: SiFacebook, name: "Facebook", desc: "Social media advertising and audience targeting across Facebook and Instagram platforms." },
              { icon: SiLinkedin, name: "LinkedIn", desc: "Professional B2B marketing and lead generation through LinkedIn advertising platform." },
              { icon: SiInstagram, name: "Instagram", desc: "Visual storytelling and influencer marketing campaigns for brand awareness and engagement." },
              { icon: SiHubspot, name: "HubSpot", desc: "Marketing automation, CRM integration, and comprehensive lead nurturing workflows." },
              { icon: SiGoogleanalytics, name: "Analytics", desc: "Advanced web analytics and conversion tracking for data-driven decision making." },
              { icon: Mail, name: "Email Marketing", desc: "Automated email campaigns and personalized customer journey optimization." },
              { icon: MessageSquare, name: "Content Tools", desc: "Content management and social media scheduling tools for consistent brand messaging." }
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
            <p className="text-xl text-purple-100/90">Get answers to common questions about our digital marketing services</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does it take to see results from digital marketing?",
                answer: "Typically, you can expect to see initial results within 30-60 days, with significant improvements in 3-6 months depending on your industry and competition."
              },
              {
                question: "What makes your digital marketing approach different?",
                answer: "We focus on data-driven strategies with transparent reporting, custom audience targeting, and continuous optimization to maximize your ROI and sustainable growth."
              },
              {
                question: "Do you work with businesses in my industry?",
                answer: "Yes, we have experience across various industries including e-commerce, B2B services, healthcare, technology, and more. We adapt our strategies to your specific market."
              },
              {
                question: "How do you measure marketing success?",
                answer: "We track key metrics like conversion rates, cost per acquisition, return on ad spend (ROAS), organic traffic growth, and ultimately your revenue growth and business objectives."
              },
              {
                question: "Can I see examples of your previous marketing campaigns?",
                answer: "Absolutely! We have detailed case studies and examples of successful campaigns. Contact us to see relevant examples from your industry and learn about our proven strategies."
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