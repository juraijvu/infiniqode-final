import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Workflow, Send, BarChart, Bot } from "lucide-react";
import { SiHubspot, SiMailchimp, SiMarketo, SiSalesforce, SiZapier, SiActivepieces, SiAutomateio, SiIntegrately } from "react-icons/si";

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

export function MarketingAutomationService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Lead Nurturing</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Workflow Automation</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Personalization</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Marketing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Automation</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Scale your marketing efforts with intelligent automation that nurtures leads, personalizes experiences, and drives conversions on autopilot.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Automate Your Marketing
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Automation Examples
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Workflow className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Send className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <BarChart className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <Bot className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Marketing Automation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic approach to automating marketing workflows for maximum efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Mapping",
                description: "Map customer journeys and identify automation opportunities for maximum impact and efficiency."
              },
              {
                step: "02", 
                title: "Workflow Design",
                description: "Create sophisticated automation workflows with triggers, conditions, and personalized messaging."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Set up automation platforms, integrate systems, and configure campaigns for optimal performance."
              },
              {
                step: "04",
                title: "Optimization",
                description: "Monitor performance, A/B test variations, and continuously optimize for better results."
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
              <h2 className="text-4xl font-bold mb-8">Complete Marketing Automation Solution</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Lead Nurturing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Automated drip campaigns and sequences</li>
                    <li>• Lead scoring and qualification</li>
                    <li>• Behavioral trigger campaigns</li>
                    <li>• Progressive profiling workflows</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Customer Journey Automation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Welcome series and onboarding flows</li>
                    <li>• Abandoned cart recovery campaigns</li>
                    <li>• Re-engagement and win-back sequences</li>
                    <li>• Cross-sell and upsell automation</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Campaign performance tracking</li>
                    <li>• ROI and attribution analysis</li>
                    <li>• A/B testing and optimization</li>
                    <li>• Custom dashboard creation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">70%</div>
                    <div className="text-sm text-gray-300">Time Savings</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">3x</div>
                    <div className="text-sm text-gray-300">Lead Quality Improvement</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">45%</div>
                    <div className="text-sm text-gray-300">Conversion Increase</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">24/7</div>
                    <div className="text-sm text-gray-300">Automated Nurturing</div>
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
            <h2 className="text-4xl font-bold mb-6">Marketing Automation Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our marketing automation implementations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SaaS Lead Nurturing",
                description: "Increased trial-to-paid conversion by 180% for a SaaS company through automated onboarding sequences.",
                metrics: ["180% conversion increase", "65% reduced sales cycle"]
              },
              {
                title: "E-commerce Automation",
                description: "Boosted revenue by 250% for an online retailer with cart abandonment and post-purchase campaigns.",
                metrics: ["250% revenue increase", "40% higher customer lifetime value"]
              },
              {
                title: "B2B Lead Qualification",
                description: "Improved lead quality by 300% for a consulting firm using behavioral scoring and nurturing workflows.",
                metrics: ["300% better lead quality", "50% more qualified opportunities"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Marketing Automation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent automation that scales your marketing while delivering personalized experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Personalization Experts", desc: "Advanced segmentation and personalization strategies for maximum relevance." },
              { icon: TrendingUp, title: "Revenue Growth", desc: "Focus on automation that directly drives revenue and business growth." },
              { icon: Target, title: "Precision Targeting", desc: "Sophisticated targeting and behavioral triggers for the right message at the right time." },
              { icon: Zap, title: "Rapid Deployment", desc: "Quick implementation of automation workflows with immediate impact." }
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
            <h2 className="text-4xl font-bold mb-6">Marketing Automation Platforms</h2>
            <p className="text-xl text-gray-300">Professional platforms for comprehensive marketing automation</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiHubspot, name: "HubSpot", desc: "All-in-one inbound marketing platform with comprehensive automation features." },
              { icon: SiMailchimp, name: "Mailchimp", desc: "Email marketing platform with automation workflows and customer journey builder." },
              { icon: SiMarketo, name: "Marketo", desc: "Enterprise marketing automation platform with advanced lead management capabilities." },
              { icon: SiSalesforce, name: "Salesforce Pardot", desc: "B2B marketing automation platform with CRM integration and lead scoring." },
              { icon: SiZapier, name: "Zapier", desc: "Automation platform connecting apps and services for seamless workflow integration." },
              { icon: SiActivepieces, name: "Activepieces", desc: "Open-source automation platform for creating custom workflows and integrations." },
              { icon: SiAutomateio, name: "Automate.io", desc: "Cloud-based automation platform for connecting business applications." },
              { icon: SiIntegrately, name: "Integrately", desc: "Integration platform with pre-built automation templates for marketing tools." }
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
            <p className="text-xl text-gray-300">Common questions about our marketing automation services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What types of marketing can be automated?"
              answer="We can automate email campaigns, lead nurturing, social media posting, lead scoring, customer onboarding, abandoned cart recovery, re-engagement campaigns, and much more."
            />
            <FAQItem 
              question="How long does it take to set up marketing automation?"
              answer="Basic automation can be set up in 2-3 weeks, while comprehensive multi-channel automation typically takes 6-8 weeks depending on complexity and integrations required."
            />
            <FAQItem 
              question="Will automation make my marketing feel impersonal?"
              answer="Not at all! Modern automation enables hyper-personalization by delivering the right message to the right person at the right time based on their behavior and preferences."
            />
            <FAQItem 
              question="Can you integrate with our existing tools?"
              answer="Yes, we integrate with most CRM systems, email platforms, e-commerce platforms, and marketing tools. We ensure seamless data flow between all your marketing systems."
            />
            <FAQItem 
              question="How do you measure automation success?"
              answer="We track key metrics like conversion rates, lead quality scores, customer lifetime value, engagement rates, and ROI. We provide detailed analytics and optimization recommendations."
            />
            <FAQItem 
              question="What if our business processes change?"
              answer="Marketing automation workflows are flexible and can be easily modified. We design scalable systems that grow with your business and adapt to changing requirements."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Automate Your Marketing</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to scale your marketing with intelligent automation? Let's create workflows that drive results.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get Automation Strategy
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View Automation Examples
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}