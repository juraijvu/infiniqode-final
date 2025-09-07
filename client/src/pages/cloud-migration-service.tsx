import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Cloud, Server, Database, ArrowUpRight } from "lucide-react";
import { SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiDigitalocean, SiHeroku, SiVercel, SiNetlify, SiCloudflare } from "react-icons/si";

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

export function CloudMigrationService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">AWS Migration</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Azure Migration</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">DevOps Setup</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Cloud
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Migration</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Seamlessly migrate your infrastructure to the cloud with minimal downtime, enhanced security, and improved scalability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Start Cloud Migration
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Get Migration Assessment
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Cloud className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Server className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <Database className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <ArrowUpRight className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Cloud Migration Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured approach to ensure smooth, secure, and efficient cloud migration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description: "Comprehensive analysis of your current infrastructure, dependencies, and migration requirements."
              },
              {
                step: "02", 
                title: "Migration Strategy",
                description: "Develop tailored migration strategy including timeline, resource allocation, and risk mitigation."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute migration in phases with thorough testing and validation at each stage."
              },
              {
                step: "04",
                title: "Optimization & Support",
                description: "Optimize cloud resources for performance and cost, provide ongoing support and monitoring."
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
              <h2 className="text-4xl font-bold mb-8">Complete Cloud Migration Solution</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Infrastructure Migration</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Server and application migration</li>
                    <li>• Database migration and optimization</li>
                    <li>• Network architecture redesign</li>
                    <li>• Storage and backup solutions</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">DevOps & Automation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• CI/CD pipeline setup and optimization</li>
                    <li>• Infrastructure as Code (IaC) implementation</li>
                    <li>• Container orchestration with Kubernetes</li>
                    <li>• Monitoring and logging solutions</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cloud security configuration</li>
                    <li>• Identity and access management</li>
                    <li>• Compliance framework implementation</li>
                    <li>• Data encryption and protection</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">300+</div>
                    <div className="text-sm text-gray-300">Successful Migrations</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime During Migration</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">40%</div>
                    <div className="text-sm text-gray-300">Avg. Cost Reduction</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">6-12</div>
                    <div className="text-sm text-gray-300">Weeks Timeline</div>
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
            <h2 className="text-4xl font-bold mb-6">Cloud Migration Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our cloud migration projects</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Data Center Migration",
                description: "Migrated 200+ servers to AWS for a Fortune 500 company, reducing infrastructure costs by 45%.",
                metrics: ["45% cost reduction", "Zero downtime migration"]
              },
              {
                title: "SaaS Platform Scaling",
                description: "Enabled 10x traffic growth for a SaaS startup through AWS auto-scaling and microservices architecture.",
                metrics: ["10x traffic capacity", "50% performance improvement"]
              },
              {
                title: "Healthcare Cloud Compliance",
                description: "Migrated healthcare systems to HIPAA-compliant Azure environment with enhanced security.",
                metrics: ["100% HIPAA compliance", "99.99% uptime achieved"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Cloud Migration Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert cloud migration that minimizes risks and maximizes business value
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Cloud Expertise", desc: "Certified cloud architects with extensive experience across AWS, Azure, and Google Cloud." },
              { icon: TrendingUp, title: "Minimal Downtime", desc: "Proven migration strategies that ensure business continuity and minimal service disruption." },
              { icon: Target, title: "Cost Optimization", desc: "Right-size resources and implement cost optimization strategies from day one." },
              { icon: Zap, title: "Rapid Implementation", desc: "Accelerated migration timelines with parallel processing and automated tools." }
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
            <h2 className="text-4xl font-bold mb-6">Cloud Platforms & Technologies</h2>
            <p className="text-xl text-gray-300">Comprehensive migration services across all major cloud providers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiAmazonaws, name: "Amazon AWS", desc: "Comprehensive migration to AWS with EC2, RDS, S3, and other managed services." },
              { icon: SiMicrosoftazure, name: "Microsoft Azure", desc: "Enterprise-grade migration to Azure with hybrid cloud and Active Directory integration." },
              { icon: SiGooglecloud, name: "Google Cloud", desc: "Migration to GCP with advanced analytics, AI/ML, and container orchestration." },
              { icon: SiDigitalocean, name: "DigitalOcean", desc: "Simple and cost-effective cloud migration for startups and small businesses." },
              { icon: SiHeroku, name: "Heroku", desc: "Platform-as-a-Service migration for rapid application deployment and scaling." },
              { icon: SiVercel, name: "Vercel", desc: "Frontend deployment and hosting migration with global CDN and edge functions." },
              { icon: SiNetlify, name: "Netlify", desc: "JAMstack deployment platform for modern web applications and static sites." },
              { icon: SiCloudflare, name: "Cloudflare", desc: "Global CDN and security services for improved performance and protection." }
            ].map((platform, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300">
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-300">{platform.desc}</p>
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
            <p className="text-xl text-gray-300">Common questions about our cloud migration services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="How long does a typical cloud migration take?"
              answer="Migration timelines vary based on complexity and scope. Simple applications can migrate in 2-4 weeks, while enterprise systems typically take 8-16 weeks. We provide detailed timelines during the assessment phase."
            />
            <FAQItem 
              question="Will there be downtime during migration?"
              answer="We design migrations to minimize downtime, often achieving zero-downtime migrations through blue-green deployments and gradual traffic shifting. Any required downtime is scheduled during maintenance windows."
            />
            <FAQItem 
              question="How much will cloud migration cost?"
              answer="Costs vary based on your current infrastructure and target architecture. Most clients see 20-40% cost savings post-migration. We provide detailed cost analysis and optimization recommendations."
            />
            <FAQItem 
              question="What about data security during migration?"
              answer="Security is our top priority. We use encrypted data transfer, secure VPN connections, and follow industry best practices. All migrations comply with relevant security standards and regulations."
            />
            <FAQItem 
              question="Do you provide post-migration support?"
              answer="Yes, we offer comprehensive post-migration support including monitoring, optimization, troubleshooting, and ongoing maintenance to ensure optimal cloud performance."
            />
            <FAQItem 
              question="Can you help optimize costs after migration?"
              answer="Absolutely! We implement cost optimization strategies including right-sizing instances, utilizing reserved instances, implementing auto-scaling, and continuous cost monitoring and optimization."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Start Cloud Migration</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to move to the cloud? Let's plan your migration strategy.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get Migration Assessment
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Cloud Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}