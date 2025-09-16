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
  Smartphone, 
  CheckCircle, 
  Tablet, 
  Watch, 
  Search, 
  Gamepad2,
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
  Code
} from "lucide-react";
import { SiReact, SiFlutter, SiSwift, SiKotlin, SiAndroid, SiIos, SiFirebase, SiXcode } from "react-icons/si";

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

export default function MobileAppDevelopmentService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "description": "Create native and cross-platform mobile applications that engage users and drive business growth",
    "provider": {
      "@type": "Organization",
      "name": "InfiniQode",
      "url": "https://theinfiniqode.com"
    },
    "areaServed": "Worldwide",
    "serviceType": "Mobile App Development"
  };

  return (
    <>
      <SEOHead
        title="Mobile App Development Services - iOS & Android Apps"
        description="Create native and cross-platform mobile applications that engage users and drive business growth. From concept to App Store deployment with expert mobile development."
        keywords="mobile app development, iOS apps, Android apps, React Native, Flutter, app store deployment"
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
                  Mobile App Development<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we create native and cross-platform mobile applications that engage 
                  users and drive business growth. Our team delivers apps that perform flawlessly 
                  across all devices. From innovative concept to successful App Store deployment, 
                  we turn your vision into reality with cutting-edge mobile solutions.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "iOS Development",
                  "Android Development", 
                  "Cross-Platform Apps",
                  "App Store Deployment"
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
                      Start App Project
                    </Button>
                  }
                  title="Ready to Start Your Mobile App Project?"
                  description="Let's discuss your mobile app ideas and create solutions that users will love."
                  defaultService="Mobile App Development"
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
                {/* Large Smartphone Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Tablet Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Watch Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Gaming Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* App Icon Square */}
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
              { icon: Settings, title: "Discovery & Planning", step: "Step 1", desc: "Define app requirements, user personas, and technical architecture to create a professional development roadmap for success." },
              { icon: Code, title: "UI/UX Design", step: "Step 2", desc: "Create intuitive user interfaces and seamless user experiences optimized for mobile interaction patterns and user engagement." },
              { icon: Smartphone, title: "Development & Testing", step: "Step 3", desc: "Build your app using native or cross-platform technologies with continuous testing and quality assurance throughout." },
              { icon: Globe, title: "Launch & Support", step: "Step 4", desc: "Deploy to app stores and provide ongoing maintenance, updates, and performance optimization for sustained success." }
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
                What Our Mobile App Development<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our professional mobile app development service is designed to help businesses of all
                sizes create powerful mobile applications that engage users and drive growth. We work closely with your
                team to understand your unique vision and implement solutions that
                deliver exceptional user experiences and business value.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Native & Cross-Platform Development</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Build high-performance iOS and Android apps using 
                        Swift, Kotlin, or frameworks like Flutter for seamless, scalable solutions.
                      </p>
                    </div>
                  </div>
                  <div  className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">UI/UX Design & Prototyping</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Design intuitive, user-friendly app interfaces with 
                        prototypes that ensure engaging experiences and brand consistency.
                      </p>
                    </div>
                  </div>
                  <div  className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Backend & API Integration</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Develop secure, scalable backends with API integrations for 
                        real-time data and third-party service connectivity.
                      </p>
                    </div>
                  </div>
                  <div  className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">App Store Optimization & Deployment</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        Boost app visibility with ASO and ensure smooth, 
                        compliant launches on iOS App Store and Google Play.
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
                    {/* Mobile Device Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-blue-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Smartphone className="icon-white text-xl md:text-2xl" />
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
                  <div className="text-3xl font-bold text-white mb-1">200+</div>
                  <p className="text-purple-100/80 text-sm">Apps Developed</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">4.8</div>
                    <p className="text-xs text-purple-100/60">Avg Rating</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">1M+</div>
                  <p className="text-purple-100/80 text-sm">App Downloads</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">8-16</div>
                    <p className="text-xs text-purple-100/60">Weeks Dev</p>
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
            <h2 className="text-5xl font-bold text-white">All Mobile App Development Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our mobile app development services have transformed businesses
              across various industries with powerful mobile solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fitness Tracking App", subtitle: "500K+ Downloads with Social Features", desc: "Built a professional fitness app with workout tracking, social features, and wearable integration that achieved 500K+ downloads with 4.7 star rating." },
              { title: "Food Delivery Platform", subtitle: "50K+ Daily Orders Processing", desc: "Created a multi-vendor food delivery app with real-time tracking and payment integration serving 50K+ daily orders for 2M+ registered users." },
              { title: "Financial Services App", subtitle: "Bank-Grade Security Implementation", desc: "Developed a secure banking app with biometric authentication and real-time transaction monitoring maintaining 99.9% uptime with enterprise security." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-blue-800/40 to-blue-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-blue-200">
                          <span>Downloads</span>
                          <span>500K+</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-blue-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-blue-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-blue-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-blue-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-blue-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-blue-300">500K+ downloads with 4.7 star rating</div>
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
              Our professional mobile app development service combines cutting-edge technology with user-centered design to create applications that users love 
              and businesses depend on. We specialize in developing both native iOS and Android applications as well as cross-platform solutions using React Native 
              and Flutter. From intuitive user interfaces to robust backend systems, our mobile solutions are designed for performance, scalability, and optimal 
              user experience. We handle the complete app lifecycle from concept and design to development, testing, deployment, and ongoing maintenance.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Smartphone, title: "Native", subtitle: "iOS & Android" },
              { icon: Code, title: "Cross-Platform", subtitle: "React Native" },
              { icon: Globe, title: "App Store", subtitle: "Deployment" },
              { icon: Users, title: "User-Centric", subtitle: "Design" }
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
              { icon: SiReact, name: "React Native", desc: "Cross-platform framework for building native mobile apps with JavaScript and React components." },
              { icon: SiFlutter, name: "Flutter", desc: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop." },
              { icon: SiSwift, name: "Swift", desc: "Apple's programming language for iOS, iPadOS, macOS, and watchOS native development." },
              { icon: SiKotlin, name: "Kotlin", desc: "Modern programming language for Android development with full Java interoperability." },
              { icon: SiAndroid, name: "Android Studio", desc: "Official IDE for Android development with advanced debugging and testing tools." },
              { icon: SiIos, name: "iOS Development", desc: "Native iOS development using Xcode and Swift for optimal performance and features." },
              { icon: SiFirebase, name: "Firebase", desc: "Google's mobile and web development platform with backend services and analytics." },
              { icon: SiXcode, name: "Xcode", desc: "Apple's integrated development environment for creating apps for all Apple platforms." }
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
            <p className="text-xl text-purple-100/90">Common questions about our mobile app development services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="Should I build a native or cross-platform app?"
              answer="It depends on your requirements. Native apps offer the best performance and platform-specific features, while cross-platform apps are more cost-effective for reaching both iOS and Android users quickly."
            />
            <FAQItem 
              question="How long does mobile app development take?"
              answer="Simple apps take 8-12 weeks, while complex apps with custom features can take 16-24 weeks. We provide detailed timelines during the planning phase based on your specific requirements."
            />
            <FAQItem 
              question="Do you help with app store submission?"
              answer="Yes, we handle the complete app store submission process for both Apple App Store and Google Play Store, including optimization for better discoverability and faster approval."
            />
            <FAQItem 
              question="What's included in ongoing app maintenance?"
              answer="Our maintenance packages include bug fixes, OS compatibility updates, security patches, performance optimization, and feature enhancements based on user feedback and analytics."
            />
            <FAQItem 
              question="Can you integrate with existing backend systems?"
              answer="Absolutely! We can integrate your mobile app with existing APIs, databases, CRM systems, and third-party services to ensure seamless data flow and functionality."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}