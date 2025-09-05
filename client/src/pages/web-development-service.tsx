import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { ContactPopup } from "@/components/contact-popup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Code, 
  CheckCircle, 
  Smartphone, 
  Database, 
  Search, 
  Palette,
  Users,
  Zap,
  Settings,
  Globe,
  ArrowRight,
  Shield,
  Star,
  TrendingUp,
  Target
} from "lucide-react";
import { SiReact, SiNodedotjs, SiPostgresql, SiTailwindcss } from "react-icons/si";

export default function WebDevelopmentService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional responsive websites and web applications built with modern technologies",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "Web Development"
  };

  return (
    <>
      <SEOHead
        title="Web Development Services - Professional Website Development"
        description="Professional responsive websites and web applications built with modern technologies. Mobile-first design, SEO-friendly, and optimized for performance."
        keywords="web development, responsive design, mobile-first, SEO optimization, custom websites"
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
                  Web Development<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we believe in the transformative power of digital solutions. Our team 
                  of experts is dedicated to helping businesses like yours thrive in the fast-paced 
                  digital landscape. From captivating web design to data-driven development 
                  strategies, we are committed to delivering results that exceed expectations.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Frontend Development",
                  "Backend Development", 
                  "Full Stack Solutions",
                  "Mobile Optimization"
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
                  title="Ready to Start Your Web Development Project?"
                  description="Let's discuss your web development needs and create a custom solution that drives results."
                  defaultService="Web Development"
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
      <section className="py-32 relative">
        <div className="absolute inset-10 bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-sm border border-purple-400/20 rounded-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Settings, title: "Build Strategy Consulting", step: "Step 1", desc: "AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting" },
              { icon: Palette, title: "Design Interactive Layouts", step: "Step 2", desc: "AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting" },
              { icon: Code, title: "Development Web Application", step: "Step 3", desc: "AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting" },
              { icon: Globe, title: "Deployment & Launching", step: "Step 4", desc: "AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Consulting AI Strategy Con AI Strategy Consulting AI Strategy Consulting" }
            ].map((item, index) => (
              <div key={index} className="group">
                {/* Glass Card */}
                <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-xl border border-purple-400/20 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                  
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center border border-white/20">
                      <item.icon className="text-white text-xl" />
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
      <section className="py-32 relative">
        <div className="absolute inset-10 bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-sm border border-purple-400/20 rounded-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                What Our UI/UX Integration<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive UI integration service is designed to help businesses of all
                sizes harness the power of artificial intelligence. We work closely with your
                team to understand your unique challenges and implement AI solutions that
                drive real business value.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "Needs Assessment & Strategy",
                  "Needs Assessment & Strategy", 
                  "Needs Assessment & Strategy",
                  "Needs Assessment & Strategy"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We analyze your business processes and identify 
                        opportunities where AI can create the most impact.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - 3D Illustration & Stats */}
            <div className="relative">
              {/* 3D Illustration Area */}
              <div className="relative h-80 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-sm border border-purple-400/20 overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                
                {/* Mock 3D Elements */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    {/* Laptop Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-blue-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Palette className="text-white text-2xl" />
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
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-sm border border-purple-400/20">
                  <div className="text-3xl font-bold text-white mb-1">70%+</div>
                  <p className="text-purple-100/80 text-sm">Search Popularity</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">4.5x</div>
                    <p className="text-xs text-purple-100/60">Interactive</p>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-sm border border-purple-400/20">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <p className="text-purple-100/80 text-sm">User Oriented App</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">5x</div>
                    <p className="text-xs text-purple-100/60">Higher Intent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 relative">
        <div className="absolute inset-10 bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-sm border border-purple-400/20 rounded-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl font-bold text-white">All Web Development Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our web development services have transformed businesses
              across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Leads Productivity", subtitle: "Leads Generation and Quality of Leads", desc: "Using modern web technologies to create conversion-focused websites, reducing inventory costs by 32% while improving product reach." },
              { title: "Leads Productivity", subtitle: "Leads Generation and Quality of Leads", desc: "Using modern web technologies to improve demand platforms, reducing inventory costs by 32% while improving product reach." },
              { title: "Leads Productivity", subtitle: "Leads Generation and Quality of Leads", desc: "Using modern web technologies to create efficient platforms, reducing inventory costs by 32% while improving product reach." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-xl border border-purple-400/20 shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-purple-800/40 to-purple-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-purple-200">
                          <span>Revenue</span>
                          <span>68%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-purple-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-purple-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-purple-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-purple-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-purple-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-purple-300">45% Performance boost with modern technologies</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs text-purple-300 uppercase tracking-wider">Leads Productivity</div>
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
      <section className="py-32 relative">
        <div className="absolute inset-10 bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-sm border border-purple-400/20 rounded-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-20">
          <h2 className="text-4xl font-bold text-white">Service Details:</h2>
          
          {/* Service Description */}
          <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-xl border border-purple-400/20 shadow-2xl">
            <p className="text-purple-100/90 leading-relaxed text-lg">
              Our premium 3D web design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web design service combines cutting-edge 
              technology with sleek aesthetics to Our premium 3D web design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web 
              design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web design service combines cutting-edge technology with sleek 
              aesthetics to Our premium 3D web design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web design service combines 
              cutting-edge technology with sleek aesthetics to Our premium 3D web design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web 
              design service combines cutting-edge technology with sleek aesthetics to Our premium 3D web design service combines cutting-edge technology with sleek aesthetics to.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Palette, title: "Custom", subtitle: "Responsive Design" },
              { icon: Users, title: "Interactive", subtitle: "Unique Design" },
              { icon: Smartphone, title: "User Friendly", subtitle: "Design Element" },
              { icon: Zap, title: "New", subtitle: "Generation Theme" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto shadow-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32 relative">
        <div className="absolute inset-10 bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-sm border border-purple-400/20 rounded-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          <h2 className="text-5xl font-bold text-center text-white">Technologies We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: SiReact, name: "Frontend Development" },
              { icon: SiNodedotjs, name: "Backend Development" },
              { icon: SiPostgresql, name: "Database Design" },
              { icon: SiTailwindcss, name: "Styling Framework" }
            ].map((tech, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto shadow-2xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="text-white text-4xl" />
                </div>
                <span className="text-lg font-semibold text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pricing Section */}
      <section className="py-32 relative">
        <div className="absolute inset-10 bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-sm border border-purple-400/20 rounded-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-20">
          <div className="text-center space-y-8">
            <h2 className="text-5xl font-bold text-white">Our Web Development Packages</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our web development services have transformed businesses across various industries.
            </p>
            <Badge className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 text-lg font-semibold shadow-xl">
              Most Popular
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="group">
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-xl border border-purple-400/20 shadow-2xl group-hover:shadow-3xl transition-all duration-300 space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white">Starter</h3>
                  <p className="text-purple-100/80">Perfect for small projects and startups</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-white">INR 4,500</div>
                    <p className="text-purple-100/80">/Project</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Frontend Development & Design",
                    "Responsive layouts for up to 5 key pages",
                    "Basic functionality implementation",
                    "Design System",
                    "User Testing",
                    "Basic Prototype"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-100/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <ContactPopup 
                  trigger={
                    <Button className="w-full bg-white/10 border border-white/20 text-white hover:bg-white/20" data-testid="button-select-starter">
                      Get Started
                    </Button>
                  }
                  title="Get Started with Starter Plan"
                  description="Ready to begin your web development project with our Starter plan? Let's discuss your specific requirements."
                  defaultService="Web Development"
                />
              </div>
            </div>

            {/* Professional Package */}
            <div className="group transform scale-105">
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-background/90 to-primary/10 backdrop-blur-xl border-2 border-primary/30 shadow-3xl space-y-8 relative">
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 font-semibold">
                  Most Popular
                </Badge>
                
                <div className="text-center space-y-4 pt-4">
                  <h3 className="text-2xl font-bold text-foreground">Professional</h3>
                  <p className="text-muted-foreground">Perfect for Mid Range projects and Ecommerce</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">INR 10,500</div>
                    <p className="text-muted-foreground">/Project</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Frontend & Backend Development",
                    "Wireframes for up to 5 key screens",
                    "UI Design for up to 5 screens",
                    "Basic Prototype",
                    "Basic Prototype",
                    "Basic Prototype"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-100/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <ContactPopup 
                  trigger={
                    <Button className="w-full bg-gradient-to-r from-primary to-accent text-white shadow-xl hover:shadow-2xl" data-testid="button-select-professional">
                      Get Started
                    </Button>
                  }
                  title="Get Started with Professional Plan"
                  description="Ready to begin your web development project with our Professional plan? Let's discuss your specific requirements."
                  defaultService="Web Development"
                />
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="group">
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-xl border border-purple-400/20 shadow-2xl group-hover:shadow-3xl transition-all duration-300 space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Enterprise</h3>
                  <p className="text-muted-foreground">Perfect for Big projects and Professional Enterprises</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">INR 21,500</div>
                    <p className="text-muted-foreground">/Project</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Frontend & Backend Development",
                    "Wireframes for up to 5 key screens",
                    "UI Design for up to 5 screens",
                    "Basic Prototype",
                    "Basic Prototype",
                    "Basic Prototype"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-100/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <ContactPopup 
                  trigger={
                    <Button className="w-full bg-gradient-to-r from-background to-muted border border-primary/30 text-primary hover:bg-primary/10" data-testid="button-select-enterprise">
                      Get Started
                    </Button>
                  }
                  title="Get Started with Enterprise Plan"
                  description="Ready to begin your web development project with our Enterprise plan? Let's discuss your specific requirements."
                  defaultService="Web Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}