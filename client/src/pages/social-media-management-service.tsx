import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Share2, MessageCircle, Heart, BarChart3 } from "lucide-react";
import { SiFacebook, SiInstagram, SiTwitter, SiLinkedin, SiTiktok, SiYoutube, SiPinterest, SiSnapchat } from "react-icons/si";

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

export function SocialMediaManagementService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Content Creation</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Community Management</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Social Advertising</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Social Media
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Management</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build engaged communities and drive meaningful interactions across all social platforms with our comprehensive social media management services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Boost Your Social Presence
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Success Stories
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Share2 className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-400/30 to-pink-600/30 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-16 h-16 text-pink-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-red-400/30 to-red-600/30 rounded-2xl flex items-center justify-center">
                    <Heart className="w-16 h-16 text-red-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-green-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Social Media Management Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic approach to building your social presence and engaging your audience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy Development",
                description: "Analyze your audience and competitors to create a comprehensive social media strategy tailored to your goals."
              },
              {
                step: "02", 
                title: "Content Planning",
                description: "Design content calendars with engaging posts, stories, and campaigns that resonate with your audience."
              },
              {
                step: "03",
                title: "Community Management",
                description: "Monitor and engage with your community, respond to comments, and build meaningful relationships."
              },
              {
                step: "04",
                title: "Analytics & Optimization",
                description: "Track performance metrics and continuously optimize your strategy for maximum engagement and growth."
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
              <h2 className="text-4xl font-bold mb-8">Complete Social Media Management</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Content Creation & Publishing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Custom graphics and visual content</li>
                    <li>• Engaging captions and copy</li>
                    <li>• Stories and reels creation</li>
                    <li>• Scheduled posting across platforms</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Daily monitoring and responding</li>
                    <li>• Comment and message management</li>
                    <li>• Follower growth strategies</li>
                    <li>• Influencer outreach and partnerships</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Performance Analytics</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Monthly performance reports</li>
                    <li>• Engagement metrics tracking</li>
                    <li>• Audience insights analysis</li>
                    <li>• ROI measurement and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">500K+</div>
                    <div className="text-sm text-gray-300">Followers Grown</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">15%</div>
                    <div className="text-sm text-gray-300">Avg. Engagement Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">24/7</div>
                    <div className="text-sm text-gray-300">Community Support</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">8</div>
                    <div className="text-sm text-gray-300">Platforms Managed</div>
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
            <h2 className="text-4xl font-bold mb-6">Social Media Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our social media management campaigns</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Brand Growth",
                description: "Increased follower count by 300% and boosted online sales through strategic social commerce campaigns.",
                metrics: ["300% follower growth", "45% increase in social sales"]
              },
              {
                title: "B2B Lead Generation", 
                description: "Generated qualified leads through LinkedIn content strategy and engagement campaigns for professional services.",
                metrics: ["150+ qualified leads/month", "25% conversion rate improvement"]
              },
              {
                title: "Restaurant Chain Engagement",
                description: "Built local community engagement and increased foot traffic through location-based social campaigns.",
                metrics: ["80% increase in local engagement", "35% boost in reservations"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Social Media Management</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional social media management that drives real business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Team", desc: "Dedicated social media specialists with proven track records across industries." },
              { icon: TrendingUp, title: "Growth Focused", desc: "Strategies designed to increase followers, engagement, and conversions consistently." },
              { icon: Target, title: "Targeted Content", desc: "Content tailored to your specific audience and business objectives." },
              { icon: Zap, title: "Real-Time Response", desc: "Quick response times for comments, messages, and community management." }
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
            <h2 className="text-4xl font-bold mb-6">Social Media Platforms We Manage</h2>
            <p className="text-xl text-gray-300">Comprehensive management across all major social networks</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiFacebook, name: "Facebook", desc: "Build communities and drive engagement with strategic Facebook marketing campaigns." },
              { icon: SiInstagram, name: "Instagram", desc: "Visual storytelling and audience engagement through posts, stories, and reels." },
              { icon: SiTwitter, name: "Twitter", desc: "Real-time engagement and thought leadership through strategic Twitter presence." },
              { icon: SiLinkedin, name: "LinkedIn", desc: "Professional networking and B2B lead generation through LinkedIn content marketing." },
              { icon: SiTiktok, name: "TikTok", desc: "Creative short-form content and viral marketing campaigns for younger audiences." },
              { icon: SiYoutube, name: "YouTube", desc: "Video content strategy and channel growth for long-form educational content." },
              { icon: SiPinterest, name: "Pinterest", desc: "Visual discovery and e-commerce integration for product-focused businesses." },
              { icon: SiSnapchat, name: "Snapchat", desc: "Ephemeral content and AR experiences for engaging younger demographics." }
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
            <p className="text-xl text-gray-300">Common questions about our social media management services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="How many posts do you create per week?"
              answer="Typically 3-5 posts per platform per week, including a mix of original content, curated content, and stories. The exact number depends on your package and platform requirements."
            />
            <FAQItem 
              question="Do you provide content creation or just posting?"
              answer="We provide complete content creation including custom graphics, copywriting, video editing, and photography coordination. All content is created specifically for your brand."
            />
            <FAQItem 
              question="How do you measure social media success?"
              answer="We track engagement rates, follower growth, reach, website traffic from social, lead generation, and conversions. Monthly reports include detailed analytics and insights."
            />
            <FAQItem 
              question="Can you manage our existing social media accounts?"
              answer="Yes, we can take over existing accounts or help you start fresh. We'll audit your current presence and develop strategies to improve performance across all platforms."
            />
            <FAQItem 
              question="Do you handle paid social media advertising?"
              answer="Absolutely! We create and manage paid social campaigns across Facebook, Instagram, LinkedIn, and other platforms to amplify your organic reach and drive targeted results."
            />
            <FAQItem 
              question="How quickly will I see results from social media management?"
              answer="Initial improvements in posting consistency and quality are immediate. Significant growth in followers and engagement typically occurs within 2-3 months of consistent management."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Boost Your Social Presence</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to grow your social media presence? Let's create a strategy that works.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get a Social Media Audit
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}