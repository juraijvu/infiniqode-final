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
  Shield, 
  CheckCircle, 
  Lock, 
  Eye, 
  Search, 
  AlertTriangle,
  Users,
  Zap,
  Settings,
  Globe,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck
} from "lucide-react";
import { SiPaloaltosoftware, SiCloudflare, SiNorton, SiKaspersky, SiMcafee, SiTrendmicro, SiBitdefender, SiCrowdstrike } from "react-icons/si";

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

export default function CybersecurityService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cybersecurity Services",
    "description": "Protect your business from cyber threats with comprehensive security solutions that safeguard your data, systems, and reputation",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "Cybersecurity"
  };

  return (
    <>
      <SEOHead
        title="Cybersecurity Services - Protect Your Business & Data"
        description="Protect your business from cyber threats with comprehensive security solutions that safeguard your data, systems, and reputation from advanced threats."
        keywords="cybersecurity, data protection, security audits, threat detection, compliance, penetration testing, security consulting"
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
                  Cybersecurity<br />
                  <span className="text-purple-300">Solutions</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we protect your business from cyber threats with comprehensive 
                  security solutions that safeguard your data, systems, and reputation. Our team 
                  provides advanced threat detection and prevention. From security audits to 
                  compliance frameworks, we deliver cybersecurity solutions that keep your business secure.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Security Audits",
                  "Threat Detection", 
                  "Compliance",
                  "Penetration Testing"
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
                      Secure Your Business
                    </Button>
                  }
                  title="Ready to Enhance Your Cybersecurity?"
                  description="Let's discuss your security needs and create solutions that protect your business."
                  defaultService="Cybersecurity"
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
                {/* Large Security Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Lock Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Shield Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Alert Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Monitor Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
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
              { icon: Search, title: "Security Assessment", step: "Step 1", desc: "Comprehensive evaluation of your current security posture, identifying vulnerabilities and risk areas across all systems." },
              { icon: Shield, title: "Defense Implementation", step: "Step 2", desc: "Deploy advanced security solutions including firewalls, monitoring systems, and threat detection technologies." },
              { icon: Eye, title: "Continuous Monitoring", step: "Step 3", desc: "24/7 security monitoring and threat intelligence to detect and respond to security incidents in real-time." },
              { icon: Globe, title: "Compliance & Training", step: "Step 4", desc: "Ensure regulatory compliance and provide security awareness training to maintain strong security culture." }
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
                What Our Cybersecurity<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive cybersecurity service is designed to help businesses of all
                sizes protect against evolving cyber threats. We work closely with your
                team to understand your unique security needs and implement solutions that
                deliver robust protection, regulatory compliance, and peace of mind.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "Security Audits & Penetration Testing",
                  "Threat Detection & Incident Response", 
                  "Compliance & Risk Management",
                  "Security Training & Awareness Programs"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We provide enterprise-grade security solutions that are proactive, comprehensive, 
                        and tailored to your specific industry requirements and threat landscape.
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
                    {/* Security Shield Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-red-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Shield className="icon-white text-xl md:text-2xl" />
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
                  <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                  <p className="text-purple-100/80 text-sm">Threat Detection</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">24/7</div>
                    <p className="text-xs text-purple-100/60">Monitoring</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">0</div>
                  <p className="text-purple-100/80 text-sm">Security Breaches</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">100%</div>
                    <p className="text-xs text-purple-100/60">Compliance</p>
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
            <h2 className="text-5xl font-bold text-white">All Cybersecurity Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our cybersecurity services have protected businesses
              across various industries from evolving cyber threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Healthcare Data Protection", subtitle: "HIPAA Compliance & Zero Breaches", desc: "Implemented comprehensive cybersecurity framework for healthcare network protecting 1M+ patient records with zero security incidents and full HIPAA compliance." },
              { title: "Financial Services Security", subtitle: "Bank-Grade Protection & Monitoring", desc: "Deployed advanced threat detection and prevention systems for financial institution handling $500M+ in daily transactions with 99.9% uptime." },
              { title: "E-commerce Platform Security", subtitle: "PCI DSS Compliance & Fraud Prevention", desc: "Secured e-commerce platform processing 100K+ daily transactions with PCI DSS compliance, fraud prevention, and real-time threat monitoring." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-red-800/40 to-red-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-red-200">
                          <span>Threats Blocked</span>
                          <span>99.9%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-red-500/30 to-green-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-red-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-red-400 rounded-t" style={{ height: '95%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-red-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-green-400 rounded-t" style={{ height: '100%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-green-400 rounded-t" style={{ height: '98%' }}></div>
                        </div>
                        <div className="text-xs text-red-300">Zero security breaches with 24/7 monitoring</div>
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
              Our comprehensive cybersecurity service combines advanced threat detection technologies with proven security frameworks to protect your 
              business from evolving cyber threats. We specialize in implementing multi-layered security architectures including firewalls, intrusion 
              detection systems, and continuous monitoring solutions. From vulnerability assessments to incident response planning, our cybersecurity 
              solutions are designed with regulatory compliance, risk management, and business continuity in mind, ensuring your organization maintains 
              robust protection against both current and emerging security threats.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Shield, title: "Threat", subtitle: "Protection" },
              { icon: Lock, title: "Data", subtitle: "Security" },
              { icon: Eye, title: "24/7", subtitle: "Monitoring" },
              { icon: ShieldCheck, title: "Compliance", subtitle: "Management" }
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
              { icon: SiPaloaltosoftware, name: "Palo Alto", desc: "Next-generation firewalls and advanced threat prevention solutions for comprehensive network security." },
              { icon: SiCloudflare, name: "Cloudflare", desc: "Web security and performance optimization with DDoS protection and threat intelligence." },
              { icon: SiNorton, name: "Norton", desc: "Endpoint protection and antivirus solutions for comprehensive device and data security." },
              { icon: SiKaspersky, name: "Kaspersky", desc: "Advanced threat detection and cybersecurity solutions for enterprise environments." },
              { icon: SiMcafee, name: "McAfee", desc: "Comprehensive security suites and threat intelligence for business protection." },
              { icon: SiTrendmicro, name: "Trend Micro", desc: "Cloud security and advanced threat defense solutions for modern businesses." },
              { icon: SiBitdefender, name: "Bitdefender", desc: "Multi-layered cybersecurity solutions with machine learning threat detection." },
              { icon: SiCrowdstrike, name: "CrowdStrike", desc: "Cloud-delivered endpoint protection and threat intelligence for advanced cyber defense." }
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
            <p className="text-xl text-purple-100/90">Common questions about our cybersecurity services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="What types of cyber threats do you protect against?"
              answer="We protect against malware, ransomware, phishing attacks, DDoS attacks, insider threats, advanced persistent threats (APTs), and zero-day exploits through comprehensive multi-layered security approaches."
            />
            <FAQItem 
              question="How quickly can you respond to security incidents?"
              answer="Our security operations center provides 24/7 monitoring with incident response times under 15 minutes for critical threats and comprehensive incident management throughout the resolution process."
            />
            <FAQItem 
              question="Do you help with regulatory compliance?"
              answer="Yes, we ensure compliance with major frameworks including GDPR, HIPAA, PCI DSS, SOX, ISO 27001, and industry-specific regulations through comprehensive compliance management and regular audits."
            />
            <FAQItem 
              question="What's included in your security assessments?"
              answer="Our assessments include vulnerability scanning, penetration testing, security architecture review, policy evaluation, staff training assessment, and detailed remediation recommendations with priority rankings."
            />
            <FAQItem 
              question="Can you integrate with our existing security tools?"
              answer="Absolutely! We integrate with existing security infrastructure including SIEM systems, firewalls, endpoint protection, and monitoring tools to enhance your current security posture without disruption."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}