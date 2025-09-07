import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Shield, Lock, Eye, AlertTriangle } from "lucide-react";
import { SiPaloaltosoftware, SiCloudflare, SiNorton, SiKaspersky, SiMcafee, SiTrendmicro, SiBitdefender, SiCrowdstrike } from "react-icons/si";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
      <button
        className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export function CybersecurityService() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Security Audits</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Threat Detection</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Compliance</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Cybersecurity
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your business from cyber threats with comprehensive security solutions that safeguard your data, systems, and reputation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Secure Your Business
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Get Security Assessment
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-400/30 to-red-600/30 rounded-2xl flex items-center justify-center">
                    <Shield className="w-16 h-16 text-red-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Lock className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Eye className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <AlertTriangle className="w-16 h-16 text-orange-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Cybersecurity Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security strategy to protect against evolving cyber threats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Security Assessment",
                description: "Comprehensive audit of your current security posture, identifying vulnerabilities and potential threats."
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Create tailored security strategy addressing your specific risks, compliance requirements, and business needs."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Deploy security solutions including firewalls, monitoring systems, and access controls."
              },
              {
                step: "04",
                title: "Monitoring & Response",
                description: "24/7 security monitoring with rapid incident response and continuous threat intelligence updates."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full hover:from-white/15 hover:to-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Includes Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Complete Cybersecurity Protection</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Threat Detection & Prevention</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Advanced threat detection systems</li>
                    <li>• Real-time malware and virus protection</li>
                    <li>• Intrusion prevention and monitoring</li>
                    <li>• Zero-day threat intelligence</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Data Security & Compliance</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Data encryption and backup solutions</li>
                    <li>• GDPR and HIPAA compliance support</li>
                    <li>• Access control and identity management</li>
                    <li>• Security policy development</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Incident Response & Recovery</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 24/7 security monitoring and alerts</li>
                    <li>• Rapid incident response team</li>
                    <li>• Disaster recovery planning</li>
                    <li>• Forensic analysis and reporting</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-sm text-gray-300">Threat Detection Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">15min</div>
                    <div className="text-sm text-gray-300">Avg. Response Time</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">500+</div>
                    <div className="text-sm text-gray-300">Businesses Protected</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">0</div>
                    <div className="text-sm text-gray-300">Successful Breaches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Cybersecurity Success Stories</h2>
            <p className="text-xl text-gray-300">Real protection results from our cybersecurity implementations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare Data Protection",
                description: "Protected patient data for a healthcare network, achieving 100% HIPAA compliance and zero security incidents.",
                metrics: ["100% HIPAA compliance", "Zero security incidents"]
              },
              {
                title: "Financial Services Security",
                description: "Implemented multi-layered security for a fintech startup, preventing 10,000+ attack attempts monthly.",
                metrics: ["10K+ attacks blocked monthly", "99.99% uptime maintained"]
              },
              {
                title: "E-commerce Protection",
                description: "Secured customer data for an online retailer, reducing fraud by 95% and maintaining PCI compliance.",
                metrics: ["95% fraud reduction", "PCI DSS compliant"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, i) => (
                    <div key={i} className="text-purple-400 text-sm font-medium">✓ {metric}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Cybersecurity Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade security solutions that protect your business from evolving cyber threats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Team", desc: "Certified security professionals with extensive experience in threat detection and prevention." },
              { icon: TrendingUp, title: "Proactive Monitoring", desc: "24/7 threat monitoring with AI-powered detection and rapid response capabilities." },
              { icon: Target, title: "Compliance Ready", desc: "Ensure compliance with industry standards including GDPR, HIPAA, and PCI DSS." },
              { icon: Zap, title: "Rapid Response", desc: "Fast incident response team that minimizes damage and recovery time." }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-500/30 group-hover:to-purple-700/30 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Enterprise Security Technologies</h2>
            <p className="text-xl text-gray-300">Industry-leading security tools and platforms for comprehensive protection</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiPaloaltosoftware, name: "Palo Alto Networks", desc: "Next-generation firewalls and advanced threat prevention platforms." },
              { icon: SiCloudflare, name: "Cloudflare", desc: "Web application firewall and DDoS protection for online assets." },
              { icon: SiNorton, name: "Norton Security", desc: "Comprehensive endpoint protection and identity theft monitoring." },
              { icon: SiKaspersky, name: "Kaspersky", desc: "Advanced threat detection and enterprise security solutions." },
              { icon: SiMcafee, name: "McAfee", desc: "Enterprise security solutions with threat intelligence and endpoint protection." },
              { icon: SiTrendmicro, name: "Trend Micro", desc: "Cloud security and advanced threat defense for hybrid environments." },
              { icon: SiBitdefender, name: "Bitdefender", desc: "Advanced threat detection with machine learning and behavioral analysis." },
              { icon: SiCrowdstrike, name: "CrowdStrike", desc: "Cloud-native endpoint protection with threat hunting capabilities." }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-300">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Common questions about our cybersecurity services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What types of cyber threats do you protect against?"
              answer="We protect against malware, ransomware, phishing attacks, DDoS attacks, insider threats, advanced persistent threats (APTs), and zero-day exploits using multi-layered security approaches."
            />
            <FAQItem 
              question="How quickly can you respond to a security incident?"
              answer="Our 24/7 Security Operations Center (SOC) typically responds to critical threats within 15 minutes, with full incident response team deployment within 1 hour of detection."
            />
            <FAQItem 
              question="Do you help with compliance requirements?"
              answer="Yes, we specialize in helping businesses achieve and maintain compliance with GDPR, HIPAA, PCI DSS, SOX, and other industry-specific regulations through comprehensive security frameworks."
            />
            <FAQItem 
              question="What's included in your security assessment?"
              answer="Our assessment includes vulnerability scanning, penetration testing, network analysis, access control review, policy evaluation, and comprehensive reporting with remediation recommendations."
            />
            <FAQItem 
              question="Can you work with our existing IT infrastructure?"
              answer="Absolutely! We design security solutions that integrate seamlessly with your current systems, minimizing disruption while maximizing protection and maintaining operational efficiency."
            />
            <FAQItem 
              question="How do you stay updated on emerging threats?"
              answer="We maintain partnerships with leading threat intelligence providers, participate in security research communities, and use AI-powered threat detection systems that adapt to new attack patterns."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Secure Your Business</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Don't wait for a cyber attack. Protect your business with comprehensive security solutions.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get Free Security Assessment
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Security Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}