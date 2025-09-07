import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Settings, GitBranch, Server, Gauge } from "lucide-react";
import { SiDocker, SiKubernetes, SiJenkins, SiGithubactions, SiTerraform, SiAnsible, SiPrometheus, SiGrafana } from "react-icons/si";

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

export function DevOpsAutomationService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">CI/CD Pipelines</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Infrastructure as Code</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Container Orchestration</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                DevOps
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Automation</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Streamline development workflows with automated CI/CD pipelines, infrastructure as code, and monitoring solutions that accelerate delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Automate Your Workflow
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View DevOps Solutions
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Settings className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <GitBranch className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <Server className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <Gauge className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our DevOps Automation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive approach to automating development and deployment workflows
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description: "Analyze current workflows, identify bottlenecks, and design automation strategy for maximum efficiency."
              },
              {
                step: "02", 
                title: "CI/CD Implementation",
                description: "Set up continuous integration and deployment pipelines with automated testing and quality gates."
              },
              {
                step: "03",
                title: "Infrastructure Automation",
                description: "Implement Infrastructure as Code for consistent, scalable, and repeatable deployments."
              },
              {
                step: "04",
                title: "Monitoring & Optimization",
                description: "Deploy comprehensive monitoring and continuously optimize automation for better performance."
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
              <h2 className="text-4xl font-bold mb-8">Complete DevOps Automation</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">CI/CD Pipelines</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Automated build and testing workflows</li>
                    <li>• Multi-environment deployment automation</li>
                    <li>• Quality gates and approval processes</li>
                    <li>• Rollback and deployment strategies</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Infrastructure as Code</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Terraform infrastructure provisioning</li>
                    <li>• Ansible configuration management</li>
                    <li>• Container orchestration with Kubernetes</li>
                    <li>• Environment consistency and reproducibility</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Monitoring & Observability</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Application and infrastructure monitoring</li>
                    <li>• Log aggregation and analysis</li>
                    <li>• Performance metrics and alerting</li>
                    <li>• Automated incident response</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">90%</div>
                    <div className="text-sm text-gray-300">Deployment Time Reduction</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-sm text-gray-300">System Uptime</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">80%</div>
                    <div className="text-sm text-gray-300">Faster Bug Detection</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">50+</div>
                    <div className="text-sm text-gray-300">Automated Pipelines</div>
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
            <h2 className="text-4xl font-bold mb-6">DevOps Automation Success Stories</h2>
            <p className="text-xl text-gray-300">Real efficiency gains from our DevOps automation implementations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Startup Scaling Success",
                description: "Automated deployment pipeline for a SaaS startup, reducing deployment time from 4 hours to 15 minutes.",
                metrics: ["95% deployment time reduction", "Zero-downtime deployments"]
              },
              {
                title: "Enterprise CI/CD",
                description: "Implemented enterprise-wide CI/CD for a Fortune 500 company, improving release frequency by 500%.",
                metrics: ["500% more frequent releases", "75% fewer production bugs"]
              },
              {
                title: "Microservices Orchestration",
                description: "Set up Kubernetes orchestration for 50+ microservices, improving scalability and resource efficiency.",
                metrics: ["50+ services orchestrated", "60% resource optimization"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our DevOps Automation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert DevOps automation that accelerates development and improves reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "DevOps Experts", desc: "Certified DevOps engineers with extensive experience in automation and cloud platforms." },
              { icon: TrendingUp, title: "Proven Results", desc: "Track record of reducing deployment times and improving system reliability for clients." },
              { icon: Target, title: "Best Practices", desc: "Implementation of industry best practices for security, compliance, and efficiency." },
              { icon: Zap, title: "Rapid Implementation", desc: "Quick setup of automation pipelines with minimal disruption to existing workflows." }
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
            <h2 className="text-4xl font-bold mb-6">DevOps Tools & Technologies</h2>
            <p className="text-xl text-gray-300">Industry-leading tools for comprehensive DevOps automation</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiDocker, name: "Docker", desc: "Containerization platform for consistent application deployment across environments." },
              { icon: SiKubernetes, name: "Kubernetes", desc: "Container orchestration platform for automated scaling and management." },
              { icon: SiJenkins, name: "Jenkins", desc: "Open-source automation server for building CI/CD pipelines and workflows." },
              { icon: SiGithubactions, name: "GitHub Actions", desc: "Native CI/CD platform integrated with GitHub for automated workflows." },
              { icon: SiTerraform, name: "Terraform", desc: "Infrastructure as Code tool for provisioning and managing cloud resources." },
              { icon: SiAnsible, name: "Ansible", desc: "Configuration management and automation tool for server provisioning." },
              { icon: SiPrometheus, name: "Prometheus", desc: "Monitoring and alerting toolkit for collecting and querying metrics." },
              { icon: SiGrafana, name: "Grafana", desc: "Visualization platform for creating dashboards and monitoring solutions." }
            ].map((tool, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-300">{tool.desc}</p>
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
            <p className="text-xl text-gray-300">Common questions about our DevOps automation services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What is DevOps automation and why do I need it?"
              answer="DevOps automation streamlines development workflows by automating repetitive tasks like testing, deployment, and infrastructure management. It reduces manual errors, speeds up delivery, and improves reliability."
            />
            <FAQItem 
              question="How long does it take to implement DevOps automation?"
              answer="Implementation typically takes 4-8 weeks depending on complexity. Basic CI/CD pipelines can be set up in 2-3 weeks, while comprehensive automation with monitoring takes 6-8 weeks."
            />
            <FAQItem 
              question="Can you work with our existing tools and infrastructure?"
              answer="Yes, we adapt to your existing tools and infrastructure. We can integrate with current version control, cloud platforms, and development tools while gradually introducing automation improvements."
            />
            <FAQItem 
              question="What's the difference between CI and CD?"
              answer="CI (Continuous Integration) automatically builds and tests code changes, while CD (Continuous Deployment) automatically deploys tested code to production. Together, they create a seamless delivery pipeline."
            />
            <FAQItem 
              question="How do you ensure security in automated pipelines?"
              answer="We implement security best practices including secret management, access controls, vulnerability scanning, compliance checks, and secure deployment practices throughout the automation pipeline."
            />
            <FAQItem 
              question="What kind of monitoring and alerting do you provide?"
              answer="We set up comprehensive monitoring for applications, infrastructure, and pipeline performance with real-time alerting, custom dashboards, and automated incident response workflows."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Automate Your Workflow</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to streamline your development process? Let's automate your workflows for faster, more reliable deployments.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get DevOps Assessment
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Automation Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}