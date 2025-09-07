import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, PenTool, BookOpen, Video, Megaphone } from "lucide-react";
import { SiContentful, SiWordpress, SiHubspot, SiMailchimp, SiCanva, SiAdobe, SiBuzzfeed, SiMedium } from "react-icons/si";

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

export function ContentMarketingService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Blog Writing</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Video Content</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Content Strategy</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Content
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Marketing</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create compelling content that engages your audience, builds trust, and drives conversions across all marketing channels.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Start Content Strategy
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Content Samples
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <PenTool className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-red-400/30 to-red-600/30 rounded-2xl flex items-center justify-center">
                    <Video className="w-16 h-16 text-red-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <Megaphone className="w-16 h-16 text-orange-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Content Marketing Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic content creation that builds authority and drives business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Content Strategy",
                description: "Develop comprehensive content strategy aligned with your business goals and audience needs."
              },
              {
                step: "02", 
                title: "Content Creation",
                description: "Produce high-quality blogs, videos, infographics, and multimedia content that resonates with your audience."
              },
              {
                step: "03",
                title: "Distribution & Promotion",
                description: "Distribute content across multiple channels and amplify reach through strategic promotion."
              },
              {
                step: "04",
                title: "Performance Analysis",
                description: "Track content performance, engagement metrics, and ROI to optimize future content strategy."
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
              <h2 className="text-4xl font-bold mb-8">Complete Content Marketing Solution</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Blog posts and articles</li>
                    <li>• Video scripts and production</li>
                    <li>• Infographics and visual content</li>
                    <li>• Email newsletters and campaigns</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Content Strategy & Planning</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Content calendar development</li>
                    <li>• Audience research and persona creation</li>
                    <li>• Competitive content analysis</li>
                    <li>• SEO content optimization</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Distribution & Amplification</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Multi-channel content distribution</li>
                    <li>• Social media promotion</li>
                    <li>• Influencer outreach campaigns</li>
                    <li>• Content repurposing strategies</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">500+</div>
                    <div className="text-sm text-gray-300">Content Pieces Created</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">250%</div>
                    <div className="text-sm text-gray-300">Avg. Engagement Increase</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">80%</div>
                    <div className="text-sm text-gray-300">Lead Quality Improvement</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">50+</div>
                    <div className="text-sm text-gray-300">Brands Served</div>
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
            <h2 className="text-4xl font-bold mb-6">Content Marketing Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our content marketing campaigns</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "B2B Thought Leadership",
                description: "Established industry authority through strategic content, generating 400% more qualified leads for a consulting firm.",
                metrics: ["400% more qualified leads", "300% increase in website traffic"]
              },
              {
                title: "E-commerce Content Strategy",
                description: "Boosted online sales with product-focused content and buying guides that improved conversion rates by 65%.",
                metrics: ["65% conversion rate increase", "150% more product page views"]
              },
              {
                title: "SaaS Content Marketing",
                description: "Reduced customer acquisition cost by 40% through educational content and free resource campaigns.",
                metrics: ["40% lower CAC", "200% increase in trial signups"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Content Marketing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic content marketing that builds brand authority and drives measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Writers", desc: "Skilled content creators with industry expertise and proven track records." },
              { icon: TrendingUp, title: "Data-Driven Strategy", desc: "Content strategies based on analytics, audience insights, and performance data." },
              { icon: Target, title: "Audience-Focused", desc: "Content tailored to your specific audience needs and buying journey stages." },
              { icon: Zap, title: "Multi-Format Content", desc: "Diverse content types from blogs to videos, infographics, and interactive content." }
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
            <h2 className="text-4xl font-bold mb-6">Content Creation & Management Tools</h2>
            <p className="text-xl text-gray-300">Professional tools for creating, managing, and distributing content</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiContentful, name: "Contentful", desc: "Headless CMS for creating and managing content across multiple channels and platforms." },
              { icon: SiWordpress, name: "WordPress", desc: "Popular content management system for building and managing blogs and websites." },
              { icon: SiHubspot, name: "HubSpot", desc: "Comprehensive marketing platform for content creation, distribution, and performance tracking." },
              { icon: SiMailchimp, name: "Mailchimp", desc: "Email marketing platform for creating and distributing newsletter and campaign content." },
              { icon: SiCanva, name: "Canva", desc: "Design platform for creating visual content, infographics, and social media graphics." },
              { icon: SiAdobe, name: "Adobe Creative Suite", desc: "Professional design tools for creating high-quality visual and multimedia content." },
              { icon: SiBuzzfeed, name: "BuzzSumo", desc: "Content research and analytics tool for finding trending topics and content ideas." },
              { icon: SiMedium, name: "Medium", desc: "Publishing platform for thought leadership articles and professional content distribution." }
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
            <p className="text-xl text-gray-300">Common questions about our content marketing services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="How often should we publish new content?"
              answer="Consistency is key. We typically recommend 2-4 blog posts per month, weekly social content, and monthly long-form pieces. The frequency depends on your industry, audience, and resources."
            />
            <FAQItem 
              question="What types of content do you create?"
              answer="We create blog posts, articles, whitepapers, case studies, infographics, videos, social media content, email newsletters, ebooks, webinar content, and interactive content pieces."
            />
            <FAQItem 
              question="How do you measure content marketing success?"
              answer="We track metrics like website traffic, engagement rates, lead generation, conversion rates, social shares, time on page, and ultimately ROI and business impact from content efforts."
            />
            <FAQItem 
              question="Do you help with content distribution?"
              answer="Yes, we develop comprehensive distribution strategies including social media promotion, email marketing, influencer outreach, guest posting, and paid content promotion to maximize reach."
            />
            <FAQItem 
              question="Can you work with our existing content team?"
              answer="Absolutely! We can supplement your team's efforts, provide strategy guidance, or handle specific content types. We're flexible and adapt to your existing workflows and team structure."
            />
            <FAQItem 
              question="How do you ensure content aligns with our brand?"
              answer="We start with brand guidelines review, tone of voice documentation, and content style guide development. All content goes through brand alignment reviews before publication."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Start Content Strategy</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to create content that drives results? Let's build your content strategy.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get Content Strategy Consultation
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View Content Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}