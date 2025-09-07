import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Briefcase, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import { SiMicrosoft, SiSlack, SiAsana, SiNotion, SiJira, SiTrello, SiMiro, SiZoom } from "react-icons/si";

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

export function BusinessConsultingService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Strategy Development</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Process Optimization</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Growth Planning</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Business
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Consulting</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Strategic business consulting that transforms operations, accelerates growth, and drives sustainable competitive advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Transform Your Business
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Briefcase className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <ArrowRight className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Business Consulting Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Systematic approach to identifying opportunities and implementing strategic solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Business Assessment",
                description: "Comprehensive analysis of current operations, market position, and growth opportunities."
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Create tailored strategies addressing specific challenges and capitalizing on market opportunities."
              },
              {
                step: "03",
                title: "Implementation Planning",
                description: "Develop detailed action plans with timelines, resources, and success metrics for execution."
              },
              {
                step: "04",
                title: "Execution Support",
                description: "Provide ongoing support, monitoring, and optimization to ensure successful strategy implementation."
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
              <h2 className="text-4xl font-bold mb-8">Comprehensive Business Consulting</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Strategic Planning</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Business model development and optimization</li>
                    <li>• Market analysis and competitive positioning</li>
                    <li>• Growth strategy and expansion planning</li>
                    <li>• Digital transformation roadmaps</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Operational Excellence</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Process optimization and automation</li>
                    <li>• Organizational restructuring</li>
                    <li>• Performance management systems</li>
                    <li>• Change management and training</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Financial Optimization</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cost reduction and efficiency improvements</li>
                    <li>• Revenue optimization strategies</li>
                    <li>• Financial planning and forecasting</li>
                    <li>• Investment and funding guidance</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">200+</div>
                    <div className="text-sm text-gray-300">Businesses Transformed</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">35%</div>
                    <div className="text-sm text-gray-300">Avg. Revenue Growth</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">50%</div>
                    <div className="text-sm text-gray-300">Efficiency Improvement</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">95%</div>
                    <div className="text-sm text-gray-300">Client Satisfaction</div>
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
            <h2 className="text-4xl font-bold mb-6">Business Transformation Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our business consulting engagements</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Manufacturing Efficiency",
                description: "Increased production efficiency by 45% for a manufacturing company through process optimization and automation.",
                metrics: ["45% efficiency increase", "30% cost reduction"]
              },
              {
                title: "Startup Scale-Up",
                description: "Helped a tech startup scale from $1M to $10M revenue through strategic planning and operational improvements.",
                metrics: ["10x revenue growth", "Series B funding secured"]
              },
              {
                title: "Retail Digital Transformation",
                description: "Led digital transformation for a retail chain, increasing online sales by 300% and improving customer experience.",
                metrics: ["300% online sales growth", "85% customer satisfaction"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Business Consulting</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic expertise that transforms challenges into competitive advantages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Consultants", desc: "Senior consultants with C-level experience across multiple industries and business functions." },
              { icon: TrendingUp, title: "Proven Results", desc: "Track record of delivering measurable business improvements and sustainable growth." },
              { icon: Target, title: "Customized Approach", desc: "Tailored solutions designed specifically for your industry, size, and unique challenges." },
              { icon: Zap, title: "Rapid Implementation", desc: "Fast-track strategic initiatives with proven methodologies and change management expertise." }
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
            <h2 className="text-4xl font-bold mb-6">Business Tools & Platforms</h2>
            <p className="text-xl text-gray-300">Professional tools for business analysis, planning, and collaboration</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiMicrosoft, name: "Microsoft 365", desc: "Comprehensive business productivity suite for collaboration and document management." },
              { icon: SiSlack, name: "Slack", desc: "Team communication platform for streamlined collaboration and project coordination." },
              { icon: SiAsana, name: "Asana", desc: "Project management tool for tracking tasks, deadlines, and team productivity." },
              { icon: SiNotion, name: "Notion", desc: "All-in-one workspace for notes, documentation, and knowledge management." },
              { icon: SiJira, name: "Jira", desc: "Agile project management tool for tracking development and business initiatives." },
              { icon: SiTrello, name: "Trello", desc: "Visual project management tool using boards and cards for workflow organization." },
              { icon: SiMiro, name: "Miro", desc: "Collaborative whiteboard platform for brainstorming and strategic planning." },
              { icon: SiZoom, name: "Zoom", desc: "Video conferencing platform for remote meetings and client consultations." }
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
            <p className="text-xl text-gray-300">Common questions about our business consulting services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What types of businesses do you work with?"
              answer="We work with businesses of all sizes from startups to Fortune 500 companies across various industries including technology, healthcare, manufacturing, retail, and professional services."
            />
            <FAQItem 
              question="How long does a typical consulting engagement last?"
              answer="Engagements typically range from 3-12 months depending on scope and complexity. Strategic planning projects usually take 6-8 weeks, while full transformation initiatives can take 6-12 months."
            />
            <FAQItem 
              question="What's your approach to measuring success?"
              answer="We establish clear KPIs and success metrics at the beginning of each engagement, including financial metrics, operational improvements, and strategic milestones. Regular progress reviews ensure accountability."
            />
            <FAQItem 
              question="Do you provide implementation support?"
              answer="Yes, we don't just provide recommendations. We work alongside your team to implement strategies, provide change management support, and ensure successful execution of initiatives."
            />
            <FAQItem 
              question="How do you ensure confidentiality?"
              answer="We maintain strict confidentiality through comprehensive NDAs, secure data handling protocols, and limited access to sensitive information. All consultants are bound by professional ethics standards."
            />
            <FAQItem 
              question="Can you work with our existing team?"
              answer="Absolutely! We collaborate closely with your internal teams, providing knowledge transfer, training, and mentoring to build internal capabilities for long-term success."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Transform Your Business</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to unlock your business potential? Let's develop a strategy for sustainable growth.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get Business Assessment
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Strategy Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}