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
  Code, 
  CheckCircle, 
  Database, 
  Globe, 
  Search, 
  Shield,
  Users,
  Zap,
  Settings,
  Server,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Phone,
  MessageCircle,
  MapPin,
  FileText
} from "lucide-react";
import { SiNodedotjs, SiPython, SiRuby, SiGo, SiRust, SiPostgresql, SiMongodb, SiRedis } from "react-icons/si";

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

export default function APIDevelopmentService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "API Development Services",
    "description": "Build robust, scalable APIs that power modern applications with secure, high-performance backend services",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "API Development"
  };

  return (
    <>
      <SEOHead
        title="API Development Services - REST, GraphQL & Microservices"
        description="Build robust, scalable APIs that power modern applications with secure, high-performance backend services and seamless integrations."
        keywords="API development, REST API, GraphQL, microservices, backend development, API integration"
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
                  API Development<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we build robust, scalable APIs that power modern applications with 
                  secure, high-performance backend services. Our team creates seamless integrations 
                  and microservices architectures. From REST APIs to GraphQL endpoints, 
                  we deliver backend solutions that scale with your business.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "REST APIs",
                  "GraphQL", 
                  "Microservices",
                  "API Integration"
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
                      Build Custom APIs
                    </Button>
                  }
                  title="Ready to Start Your API Project?"
                  description="Let's discuss your API needs and create robust backend solutions that scale."
                  defaultService="API Development"
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
                {/* Large API Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Database Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Server Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Code Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Integration Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-blue-300/30 to-purple-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
                {/* Small Transparent Cube */}
                <div className="absolute bottom-16 left-20 w-12 h-12 bg-gradient-to-br from-white/10 via-orange-200/20 to-transparent backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transform -rotate-6 hover:rotate-12 transition-transform duration-300"></div>
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
              { icon: Settings, title: "API Planning & Design", step: "Step 1", desc: "Define API specifications, data models, and security requirements to create a robust and scalable architecture blueprint." },
              { icon: Code, title: "Development & Testing", step: "Step 2", desc: "Build secure, high-performance APIs with comprehensive testing, documentation, and validation for reliability." },
              { icon: Server, title: "Deployment & Integration", step: "Step 3", desc: "Deploy APIs with proper monitoring, versioning, and integration support for seamless system connectivity." },
              { icon: Globe, title: "Monitoring & Scaling", step: "Step 4", desc: "Continuously monitor performance, handle scaling needs, and maintain API excellence with ongoing optimization." }
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
                What Our API Development<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive API development service is designed to help businesses of all
                sizes create robust backend systems that scale. We work closely with your
                team to understand your unique requirements and implement solutions that
                deliver exceptional performance, security, and developer experience.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "RESTful & GraphQL API Development",
                  "Microservices Architecture", 
                  "API Security & Authentication",
                  "Documentation & Testing Suites"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We build APIs that are secure, scalable, and easy to integrate with 
                        comprehensive documentation and robust testing frameworks.
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
                    {/* API Server Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-blue-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Server className="icon-white text-xl md:text-2xl" />
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
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <p className="text-purple-100/80 text-sm">APIs Deployed</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">99.9%</div>
                    <p className="text-xs text-purple-100/60">Uptime</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">1M+</div>
                  <p className="text-purple-100/80 text-sm">API Calls/Day</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">< 100ms</div>
                    <p className="text-xs text-purple-100/60">Response</p>
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
            <h2 className="text-5xl font-bold text-white">All API Development Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our API development services have powered businesses
              across various industries with robust backend solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "E-commerce Platform", subtitle: "Microservices Architecture for Scale", desc: "Built a microservices API architecture handling 100K+ transactions daily with 99.9% uptime and sub-100ms response times for optimal performance." },
              { title: "Financial Services API", subtitle: "Bank-Grade Security & Compliance", desc: "Developed secure financial APIs with multi-factor authentication, encryption, and regulatory compliance processing $50M+ in transactions." },
              { title: "IoT Data Processing", subtitle: "Real-Time Analytics & Monitoring", desc: "Created high-throughput APIs processing 1M+ IoT sensor readings per hour with real-time analytics and automated alerting systems." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-blue-800/40 to-blue-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-blue-200">
                          <span>Requests/sec</span>
                          <span>1.2K</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-blue-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-blue-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-blue-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-blue-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-blue-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-blue-300">99.9% uptime with sub-100ms response</div>
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
              Our comprehensive API development service combines modern backend technologies with industry best practices to create robust, scalable APIs 
              that power your digital ecosystem. We specialize in designing RESTful APIs, GraphQL endpoints, and microservices architectures that handle 
              high traffic loads while maintaining security and performance. From authentication systems to real-time data processing, our APIs are built 
              with comprehensive documentation, thorough testing, and monitoring solutions that ensure reliability and ease of integration.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Code, title: "RESTful", subtitle: "APIs" },
              { icon: Database, title: "GraphQL", subtitle: "Endpoints" },
              { icon: Shield, title: "Secure", subtitle: "Authentication" },
              { icon: FileText, title: "API", subtitle: "Documentation" }
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
              { icon: SiNodedotjs, name: "Node.js", desc: "JavaScript runtime for building fast, scalable server-side applications and RESTful APIs." },
              { icon: SiPython, name: "Python", desc: "High-level programming language perfect for API development with frameworks like Django and FastAPI." },
              { icon: SiRuby, name: "Ruby", desc: "Dynamic programming language with Ruby on Rails framework for rapid API development." },
              { icon: SiGo, name: "Go", desc: "Google's programming language designed for building high-performance, concurrent backend services." },
              { icon: SiRust, name: "Rust", desc: "Systems programming language offering memory safety and performance for critical API infrastructure." },
              { icon: SiPostgresql, name: "PostgreSQL", desc: "Advanced relational database with powerful features for complex data relationships and queries." },
              { icon: SiMongodb, name: "MongoDB", desc: "NoSQL document database for flexible, scalable data storage in modern applications." },
              { icon: SiRedis, name: "Redis", desc: "In-memory data structure store used for caching, session management, and real-time applications." }
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
            <p className="text-xl text-purple-100/90">Common questions about our API development services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="What's the difference between REST and GraphQL APIs?"
              answer="REST APIs use standard HTTP methods with multiple endpoints, while GraphQL uses a single endpoint with flexible queries. GraphQL offers more precise data fetching, while REST is simpler and more widely adopted."
            />
            <FAQItem 
              question="How do you ensure API security?"
              answer="We implement multiple security layers including authentication (OAuth, JWT), authorization, rate limiting, input validation, HTTPS encryption, and regular security audits to protect against common vulnerabilities."
            />
            <FAQItem 
              question="What documentation do you provide?"
              answer="We provide comprehensive API documentation including endpoint descriptions, request/response examples, authentication details, error codes, and interactive testing interfaces using tools like Swagger/OpenAPI."
            />
            <FAQItem 
              question="How do you handle API versioning?"
              answer="We implement semantic versioning strategies with backward compatibility, clear deprecation timelines, and migration guides. We support multiple versions simultaneously to ensure smooth transitions."
            />
            <FAQItem 
              question="Can you integrate with existing systems?"
              answer="Yes, we specialize in creating APIs that integrate seamlessly with existing databases, third-party services, legacy systems, and modern cloud platforms through various integration patterns."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}