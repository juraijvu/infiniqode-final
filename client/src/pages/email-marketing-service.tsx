import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Mail, Send, BarChart3, UserCheck } from "lucide-react";
import { SiMailchimp, SiConstantcontact, SiSendgrid, SiHubspot, SiKlaviyo, SiActivecampaign, SiConvertkit, SiGetresponse } from "react-icons/si";

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

export function EmailMarketingService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Email Campaigns</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Automation</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Segmentation</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Email
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Marketing</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build lasting relationships and drive revenue with strategic email marketing campaigns that convert subscribers into loyal customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Boost Email Revenue
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Campaign Examples
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Mail className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Send className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <UserCheck className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Email Marketing Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic approach to building relationships and driving conversions through email
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Planning",
                description: "Develop comprehensive email marketing strategy aligned with your business goals and customer journey."
              },
              {
                step: "02", 
                title: "List Building & Segmentation",
                description: "Build quality subscriber lists and create targeted segments for personalized messaging."
              },
              {
                step: "03",
                title: "Campaign Creation",
                description: "Design beautiful email templates and write compelling copy that drives engagement and conversions."
              },
              {
                step: "04",
                title: "Automation & Optimization",
                description: "Set up automated workflows and continuously optimize performance based on analytics."
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
              <h2 className="text-4xl font-bold mb-8">Complete Email Marketing Solution</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Campaign Management</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Newsletter design and content creation</li>
                    <li>• Promotional campaign development</li>
                    <li>• A/B testing and optimization</li>
                    <li>• Mobile-responsive email templates</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Marketing Automation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Welcome series and onboarding flows</li>
                    <li>• Abandoned cart recovery sequences</li>
                    <li>• Lead nurturing drip campaigns</li>
                    <li>• Re-engagement and win-back campaigns</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Detailed performance analytics</li>
                    <li>• List growth and segmentation insights</li>
                    <li>• Revenue attribution tracking</li>
                    <li>• Deliverability monitoring and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">25%</div>
                    <div className="text-sm text-gray-300">Avg. Open Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">4.5%</div>
                    <div className="text-sm text-gray-300">Avg. Click Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">$42</div>
                    <div className="text-sm text-gray-300">ROI per $1 Spent</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">98%</div>
                    <div className="text-sm text-gray-300">Deliverability Rate</div>
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
            <h2 className="text-4xl font-bold mb-6">Email Marketing Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our email marketing campaigns</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Revenue Growth",
                description: "Increased email revenue by 350% for an online retailer through segmented campaigns and automated flows.",
                metrics: ["350% revenue increase", "45% higher open rates"]
              },
              {
                title: "SaaS Customer Retention",
                description: "Improved customer retention by 60% for a SaaS company through targeted onboarding and engagement emails.",
                metrics: ["60% better retention", "30% increase in upgrades"]
              },
              {
                title: "B2B Lead Nurturing",
                description: "Generated 200% more qualified leads for a consulting firm through strategic drip campaigns.",
                metrics: ["200% more qualified leads", "25% higher conversion rate"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Email Marketing Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic email marketing that builds relationships and drives measurable business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Audience Segmentation", desc: "Advanced segmentation strategies that deliver the right message to the right audience." },
              { icon: TrendingUp, title: "Revenue Optimization", desc: "Data-driven campaigns focused on maximizing email revenue and customer lifetime value." },
              { icon: Target, title: "Personalization", desc: "Highly personalized content and dynamic messaging based on subscriber behavior." },
              { icon: Zap, title: "Automation Expertise", desc: "Sophisticated automation workflows that nurture leads and retain customers." }
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
            <h2 className="text-4xl font-bold mb-6">Email Marketing Platforms We Use</h2>
            <p className="text-xl text-gray-300">Professional email marketing tools for maximum deliverability and performance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiMailchimp, name: "Mailchimp", desc: "All-in-one marketing platform with advanced automation and segmentation features." },
              { icon: SiConstantcontact, name: "Constant Contact", desc: "User-friendly email marketing solution with excellent customer support and templates." },
              { icon: SiSendgrid, name: "SendGrid", desc: "Reliable email delivery service with powerful API and analytics for developers." },
              { icon: SiHubspot, name: "HubSpot", desc: "Comprehensive marketing platform with CRM integration and advanced lead nurturing." },
              { icon: SiKlaviyo, name: "Klaviyo", desc: "E-commerce focused email marketing with powerful segmentation and automation." },
              { icon: SiActivecampaign, name: "ActiveCampaign", desc: "Advanced marketing automation platform with CRM and sales automation features." },
              { icon: SiConvertkit, name: "ConvertKit", desc: "Creator-focused email marketing platform with powerful automation and landing pages." },
              { icon: SiGetresponse, name: "GetResponse", desc: "Complete online marketing platform with email, landing pages, and webinars." }
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
            <p className="text-xl text-gray-300">Common questions about our email marketing services</p>
          </div>
          
          <div className="space-y-4">
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
              question="Do you provide email templates and design?"
              answer="Absolutely! We create custom email templates that match your brand, are mobile-responsive, and optimized for conversions. We also provide a library of templates for different campaign types."
            />
            <FAQItem 
              question="How do you measure email marketing success?"
              answer="We track open rates, click rates, conversion rates, revenue per email, list growth, unsubscribe rates, and overall ROI. We provide detailed monthly reports with actionable insights."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Boost Email Revenue</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to turn your email list into a revenue engine? Let's create campaigns that convert.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get Email Marketing Audit
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View Campaign Examples
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}