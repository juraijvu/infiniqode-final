import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, CreditCard, MousePointer, Eye, BarChart } from "lucide-react";
import { SiGoogleads, SiFacebook, SiLinkedin, SiTwitter, SiMicrosoft, SiAmazon, SiSnapchat, SiTiktok } from "react-icons/si";

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

export function PaidAdvertisingService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Google Ads</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Facebook Ads</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">PPC Management</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Paid
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Advertising</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Drive immediate traffic and conversions with strategic paid advertising campaigns across Google, Facebook, LinkedIn, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Launch Ad Campaigns
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Get Free Audit
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <CreditCard className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <MousePointer className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <Eye className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <BarChart className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Paid Advertising Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic approach to maximizing ROI from your advertising spend
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Campaign Strategy",
                description: "Develop targeted advertising strategy based on your goals, audience, and competitive landscape."
              },
              {
                step: "02", 
                title: "Campaign Setup",
                description: "Create optimized campaigns with compelling ad copy, targeting, and landing page alignment."
              },
              {
                step: "03",
                title: "Launch & Monitor",
                description: "Launch campaigns and continuously monitor performance with real-time optimization adjustments."
              },
              {
                step: "04",
                title: "Optimize & Scale",
                description: "Analyze data, optimize for better performance, and scale successful campaigns for maximum ROI."
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
              <h2 className="text-4xl font-bold mb-8">Complete Paid Advertising Management</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Campaign Management</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Google Ads (Search, Display, Shopping)</li>
                    <li>• Facebook and Instagram advertising</li>
                    <li>• LinkedIn sponsored content and InMail</li>
                    <li>• Microsoft Ads (Bing) campaigns</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Creative & Copy</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Ad copy creation and A/B testing</li>
                    <li>• Visual ad design and video creation</li>
                    <li>• Landing page optimization</li>
                    <li>• Creative performance analysis</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Analytics & Optimization</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Conversion tracking and attribution</li>
                    <li>• ROI analysis and reporting</li>
                    <li>• Audience segmentation and targeting</li>
                    <li>• Bid management and budget optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">$5M+</div>
                    <div className="text-sm text-gray-300">Ad Spend Managed</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">4.2x</div>
                    <div className="text-sm text-gray-300">Avg. ROAS</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">65%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">200+</div>
                    <div className="text-sm text-gray-300">Campaigns Managed</div>
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
            <h2 className="text-4xl font-bold mb-6">Paid Advertising Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our paid advertising campaigns</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Scale-Up",
                description: "Increased ROAS by 300% for an online retailer through strategic Google Shopping and Facebook campaigns.",
                metrics: ["300% ROAS improvement", "50% lower cost per acquisition"]
              },
              {
                title: "B2B Lead Generation",
                description: "Generated 500+ qualified leads per month for a SaaS company using LinkedIn and Google Ads.",
                metrics: ["500+ qualified leads/month", "40% conversion rate"]
              },
              {
                title: "Local Business Growth",
                description: "Increased store visits by 200% for a restaurant chain through location-based advertising campaigns.",
                metrics: ["200% increase in store visits", "35% boost in reservations"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Paid Advertising Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert advertising management that maximizes ROI and drives sustainable growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Certified Experts", desc: "Google and Facebook certified specialists with proven campaign management experience." },
              { icon: TrendingUp, title: "ROI Focused", desc: "Every campaign optimized for maximum return on advertising spend and business growth." },
              { icon: Target, title: "Precision Targeting", desc: "Advanced audience targeting and segmentation for higher conversion rates." },
              { icon: Zap, title: "Real-Time Optimization", desc: "Continuous monitoring and optimization for peak campaign performance." }
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
            <h2 className="text-4xl font-bold mb-6">Advertising Platforms We Manage</h2>
            <p className="text-xl text-gray-300">Comprehensive campaign management across all major advertising networks</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiGoogleads, name: "Google Ads", desc: "Search, display, shopping, and YouTube advertising campaigns for maximum reach." },
              { icon: SiFacebook, name: "Facebook Ads", desc: "Facebook and Instagram advertising with advanced targeting and creative options." },
              { icon: SiLinkedin, name: "LinkedIn Ads", desc: "B2B advertising through sponsored content, InMail, and display campaigns." },
              { icon: SiTwitter, name: "Twitter Ads", desc: "Promoted tweets and trending campaigns for brand awareness and engagement." },
              { icon: SiMicrosoft, name: "Microsoft Ads", desc: "Bing search advertising for reaching additional search engine audiences." },
              { icon: SiAmazon, name: "Amazon Ads", desc: "Product advertising on Amazon marketplace for e-commerce businesses." },
              { icon: SiSnapchat, name: "Snapchat Ads", desc: "Mobile-first advertising for reaching younger demographics with visual content." },
              { icon: SiTiktok, name: "TikTok Ads", desc: "Short-form video advertising for engaging Gen Z and millennial audiences." }
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
            <p className="text-xl text-gray-300">Common questions about our paid advertising services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What's the minimum ad spend budget you recommend?"
              answer="We typically recommend a minimum of $3,000-5,000 per month for effective campaigns. This allows for proper testing, optimization, and meaningful data collection across platforms."
            />
            <FAQItem 
              question="How quickly will I see results from paid advertising?"
              answer="Initial results can be seen within 1-2 weeks, with optimization improving performance over 30-60 days. Full campaign maturity and optimal performance typically occurs after 90 days."
            />
            <FAQItem 
              question="Do you provide transparent reporting?"
              answer="Yes, we provide detailed monthly reports showing spend, impressions, clicks, conversions, ROAS, and other key metrics. You also have direct access to campaign dashboards."
            />
            <FAQItem 
              question="Can you work with our existing landing pages?"
              answer="Absolutely! We can optimize campaigns for your existing pages. However, we often recommend landing page improvements to maximize conversion rates and campaign performance."
            />
            <FAQItem 
              question="How do you determine the best platforms for my business?"
              answer="We analyze your target audience, business goals, competition, and budget to recommend the most effective platforms. B2B companies often benefit from LinkedIn, while e-commerce works well with Google and Facebook."
            />
            <FAQItem 
              question="What's your approach to campaign optimization?"
              answer="We use data-driven optimization including A/B testing ad creatives, adjusting targeting, bid optimization, and continuous performance monitoring to improve ROI and reduce costs."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Launch Ad Campaigns</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to drive immediate results with paid advertising? Let's maximize your ROI.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get Free Ad Account Audit
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}