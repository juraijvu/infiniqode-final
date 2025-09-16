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
  Mail, 
  CheckCircle, 
  Send, 
  BarChart3, 
  Search, 
  UserCheck,
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
  MapPin
} from "lucide-react";
import { SiMailchimp, SiSendgrid, SiHubspot } from "react-icons/si";

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

export default function EmailMarketingService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Email Marketing Services",
    "description": "Build lasting relationships and drive revenue with strategic email marketing campaigns",
    "provider": {
      "@type": "Organization",
      "name": "InfiniQode",
      "url": "https://theinfiniqode.com"
    },
    "areaServed": "Worldwide",
    "serviceType": "Email Marketing"
  };

  return (
    <>
      <SEOHead
        title="Email Marketing Services - Strategic Email Campaigns"
        description="Build lasting relationships and drive revenue with strategic email marketing campaigns that convert subscribers into loyal customers."
        keywords="email marketing, email campaigns, automation, segmentation, newsletter, drip campaigns"
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
                  Email Marketing<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we build lasting relationships and drive revenue through strategic 
                  email marketing campaigns. Our team creates personalized experiences that convert 
                  subscribers into loyal customers. From automation workflows to advanced 
                  segmentation strategies, we deliver results that exceed expectations.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Email Campaigns",
                  "Marketing Automation", 
                  "List Segmentation",
                  "Performance Analytics"
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
                      Boost Email Revenue
                    </Button>
                  }
                  title="Ready to Start Your Email Marketing Campaign?"
                  description="Let's discuss your email marketing needs and create campaigns that convert subscribers into customers."
                  defaultService="Email Marketing"
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
                {/* Large Email Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Send Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Analytics Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* User Check Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Campaign Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-blue-300/30 to-purple-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
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
              { icon: Settings, title: "Strategy & Planning", step: "Step 1", desc: "Develop professional email marketing strategy aligned with your business goals and customer journey for maximum impact." },
              { icon: Users, title: "List Building & Segmentation", step: "Step 2", desc: "Build quality subscriber lists and create targeted segments for personalized messaging that resonates with your audience." },
              { icon: Mail, title: "Campaign Creation", step: "Step 3", desc: "Design beautiful email templates and write compelling copy that drives engagement and conversions across all devices." },
              { icon: BarChart3, title: "Automation & Optimization", step: "Step 4", desc: "Set up automated workflows and continuously optimize performance based on analytics and subscriber behavior." }
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
                What Our Email Marketing<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our professional email marketing service is designed to help businesses of all
                sizes build lasting relationships with their audience and drive measurable revenue. We work closely with your
                team to understand your unique goals and implement strategies that
                deliver real business results.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Campaign Management & Design</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Craft visually appealing email campaigns with strategic management to
                         boost engagement and conversions effectively.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Marketing Automation Workflows</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Build automated email workflows to nurture leads and streamline customer journeys with precision.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Advanced Audience Segmentation</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Target specific audience segments with tailored emails to enhance relevance and improve open rates.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Performance Analytics & Reporting</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Track email performance with detailed analytics and reports to optimize campaigns for maximum ROI.
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
                    {/* Email Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-blue-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Mail className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-green-400 rounded-full shadow-lg"></div>
                      <div className="w-6 h-6 bg-orange-400 rounded-md shadow-lg"></div>
                      <div className="w-10 h-6 bg-purple-400 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">25%</div>
                  <p className="text-purple-100/80 text-sm">Avg. Open Rate</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">$42</div>
                    <p className="text-xs text-purple-100/60">ROI per $1</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">4.5%</div>
                  <p className="text-purple-100/80 text-sm">Avg. Click Rate</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">98%</div>
                    <p className="text-xs text-purple-100/60">Deliverability</p>
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
            <h2 className="text-5xl font-bold text-white">All Email Marketing Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our email marketing services have transformed businesses
              across various industries with strategic campaigns that convert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "E-commerce Growth", subtitle: "350% Revenue Increase with Segmentation", desc: "Increased email revenue by 350% for an online retailer through segmented campaigns and automated flows with personalized product recommendations." },
              { title: "SaaS Retention", subtitle: "60% Better Customer Retention", desc: "Improved customer retention by 60% for a SaaS company through targeted onboarding and engagement emails that reduced churn significantly." },
              { title: "B2B Lead Generation", subtitle: "200% More Qualified Leads", desc: "Generated 200% more qualified leads for a consulting firm through strategic drip campaigns and lead nurturing automation workflows." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-blue-800/40 to-blue-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-blue-200">
                          <span>Open Rate</span>
                          <span>45%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-blue-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-blue-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-blue-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-blue-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-blue-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-blue-300">350% revenue boost with email campaigns</div>
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
              Our professional email marketing service combines strategic planning with cutting-edge automation to build lasting relationships that drive revenue. 
              We specialize in creating personalized email campaigns that engage subscribers at every stage of the customer journey. From welcome series and 
              abandoned cart recovery to advanced segmentation and A/B testing, our solutions are designed to maximize open rates, click-through rates, and 
              conversions. We work with leading email platforms to ensure optimal deliverability and provide detailed analytics to track performance and ROI.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Mail, title: "Campaign", subtitle: "Design & Content" },
              { icon: Send, title: "Automated", subtitle: "Workflows" },
              { icon: Users, title: "Audience", subtitle: "Segmentation" },
              { icon: BarChart3, title: "Analytics", subtitle: "& Reporting" }
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
              { icon: SiMailchimp, name: "Mailchimp", desc: "All-in-one marketing platform with advanced automation and segmentation features for growing businesses." },
              { icon: Mail, name: "Constant Contact", desc: "User-friendly email marketing solution with excellent customer support and beautiful templates." },
              { icon: SiSendgrid, name: "SendGrid", desc: "Reliable email delivery service with powerful API and analytics for developers and marketers." },
              { icon: SiHubspot, name: "HubSpot", desc: "professional marketing platform with CRM integration and advanced lead nurturing capabilities." },
              { icon: Send, name: "Klaviyo", desc: "E-commerce focused email marketing with powerful segmentation and automation for online stores." },
              { icon: BarChart3, name: "ActiveCampaign", desc: "Advanced marketing automation platform with CRM and sales automation features included." },
              { icon: Users, name: "ConvertKit", desc: "Creator-focused email marketing platform with powerful automation and landing page features." },
              { icon: Target, name: "GetResponse", desc: "Complete online marketing platform with email, landing pages, and webinar capabilities." }
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
            <p className="text-xl text-purple-100/90">Common questions about our email marketing services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="How often should we send marketing emails?"
              answer="It depends on your audience and content quality. Generally, 1-2 emails per week works well for most businesses. We'll help determine the optimal frequency based on your audience engagement and business goals."
            />
            <FAQItem 
              question="What's a good email open rate?"
              answer="Average open rates vary by industry, typically ranging from 15-25%. We focus on improving your specific metrics through better subject lines, segmentation, and send time optimization."
            />
            <FAQItem 
              question="How do you ensure emails don't go to spam?"
              answer="We follow best practices including proper authentication, list hygiene, engagement monitoring, and compliance with CAN-SPAM laws. We also monitor deliverability metrics and sender reputation."
            />
            <FAQItem 
              question="Can you help grow our email list?"
              answer="Yes! We create lead magnets, optimize sign-up forms, implement popup strategies, and develop content that encourages subscriptions while maintaining list quality and compliance."
            />
            <FAQItem 
              question="How do you measure email marketing success?"
              answer="We track open rates, click rates, conversion rates, revenue per email, list growth, unsubscribe rates, and overall ROI. We provide detailed monthly reports with actionable insights."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}