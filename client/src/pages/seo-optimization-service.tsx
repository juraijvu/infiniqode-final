import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Search, BarChart, FileText, Globe } from "lucide-react";
import { SiGoogleanalytics, SiGooglesearchconsole, SiSemrush, SiAhrefs, SiMoz, SiScreaminggrog, SiYoast, SiGtmetrix } from "react-icons/si";

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

export function SEOOptimizationService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Technical SEO</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Content Optimization</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Link Building</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                SEO
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Optimization</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Boost your search engine rankings and drive organic traffic with comprehensive SEO strategies that deliver measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Improve Your Rankings
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Get SEO Audit
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Search className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <BarChart className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <FileText className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <Globe className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our SEO Optimization Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data-driven SEO strategies that improve rankings and drive qualified traffic
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "SEO Audit & Analysis",
                description: "Comprehensive analysis of your current SEO performance, technical issues, and competitive landscape."
              },
              {
                step: "02", 
                title: "Keyword Research",
                description: "Identify high-value keywords and search opportunities relevant to your business and audience."
              },
              {
                step: "03",
                title: "On-Page Optimization",
                description: "Optimize content, meta tags, site structure, and technical elements for better search visibility."
              },
              {
                step: "04",
                title: "Monitoring & Reporting",
                description: "Track rankings, traffic, and conversions with detailed monthly reports and ongoing optimization."
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
              <h2 className="text-4xl font-bold mb-8">Complete SEO Optimization Package</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Technical SEO</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Site speed optimization and Core Web Vitals</li>
                    <li>• Mobile responsiveness and mobile-first indexing</li>
                    <li>• Schema markup and structured data</li>
                    <li>• XML sitemaps and robots.txt optimization</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">On-Page SEO</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Keyword research and content optimization</li>
                    <li>• Meta titles and descriptions optimization</li>
                    <li>• Header tags and internal linking structure</li>
                    <li>• Image optimization and alt text</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Off-Page SEO</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• High-quality backlink building strategies</li>
                    <li>• Local SEO and Google My Business optimization</li>
                    <li>• Content marketing and outreach campaigns</li>
                    <li>• Online reputation management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">300%</div>
                    <div className="text-sm text-gray-300">Avg. Traffic Increase</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">Top 3</div>
                    <div className="text-sm text-gray-300">Ranking Achievement</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">90%</div>
                    <div className="text-sm text-gray-300">Client Retention Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">3-6</div>
                    <div className="text-sm text-gray-300">Months to Results</div>
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
            <h2 className="text-4xl font-bold mb-6">SEO Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our SEO optimization campaigns</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Growth",
                description: "Increased organic traffic by 450% and doubled online sales for a fashion retailer through strategic SEO.",
                metrics: ["450% organic traffic increase", "100% sales growth"]
              },
              {
                title: "Local Business Visibility",
                description: "Improved local search rankings and increased foot traffic for a restaurant chain across 15 locations.",
                metrics: ["85% increase in local calls", "Top 3 local rankings"]
              },
              {
                title: "B2B Lead Generation",
                description: "Generated 300% more qualified leads for a consulting firm through targeted keyword optimization.",
                metrics: ["300% more qualified leads", "60% increase in conversions"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our SEO Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional SEO optimization that delivers sustainable organic growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Team", desc: "Certified SEO specialists with proven track records across various industries." },
              { icon: TrendingUp, title: "Data-Driven", desc: "Strategies based on comprehensive analytics and continuous performance monitoring." },
              { icon: Target, title: "White-Hat Techniques", desc: "Ethical SEO practices that ensure long-term sustainability and search engine compliance." },
              { icon: Zap, title: "Transparent Reporting", desc: "Monthly detailed reports with clear metrics and actionable insights for improvement." }
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
            <h2 className="text-4xl font-bold mb-6">Professional SEO Tools & Analytics</h2>
            <p className="text-xl text-gray-300">Industry-leading tools for comprehensive SEO analysis and optimization</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiGoogleanalytics, name: "Google Analytics", desc: "Comprehensive website analytics and user behavior tracking for data-driven decisions." },
              { icon: SiGooglesearchconsole, name: "Search Console", desc: "Google's official tool for monitoring search performance and technical issues." },
              { icon: SiSemrush, name: "SEMrush", desc: "All-in-one digital marketing toolkit for keyword research and competitive analysis." },
              { icon: SiAhrefs, name: "Ahrefs", desc: "Powerful SEO toolset for backlink analysis, keyword research, and site auditing." },
              { icon: SiMoz, name: "Moz Pro", desc: "SEO software suite for keyword tracking, site audits, and link building opportunities." },
              { icon: SiScreaminggrog, name: "Screaming Frog", desc: "Website crawler for technical SEO audits and on-page optimization analysis." },
              { icon: SiYoast, name: "Yoast SEO", desc: "WordPress SEO plugin for on-page optimization and content analysis." },
              { icon: SiGtmetrix, name: "GTmetrix", desc: "Website performance analysis tool for Core Web Vitals and speed optimization." }
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
            <p className="text-xl text-gray-300">Common questions about our SEO optimization services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="How long does it take to see SEO results?"
              answer="Typically 3-6 months for significant improvements. You may see some quick wins in 4-8 weeks, but substantial ranking improvements and traffic growth usually occur after 3-6 months of consistent optimization."
            />
            <FAQItem 
              question="Do you guarantee first page rankings?"
              answer="No ethical SEO agency can guarantee specific rankings due to Google's complex algorithm. We focus on sustainable improvements and increased organic visibility using proven white-hat techniques."
            />
            <FAQItem 
              question="What's included in your SEO audit?"
              answer="Our comprehensive audit covers technical SEO, on-page optimization, content analysis, backlink profile, competitor research, and keyword opportunities with actionable recommendations."
            />
            <FAQItem 
              question="Do you work with all types of businesses?"
              answer="Yes, we have experience with e-commerce, local businesses, B2B companies, professional services, and various industries. Our strategies are customized based on your specific business needs."
            />
            <FAQItem 
              question="How do you measure SEO success?"
              answer="We track keyword rankings, organic traffic growth, conversion rates, search visibility, and business-specific KPIs. Monthly reports include detailed analytics and progress insights."
            />
            <FAQItem 
              question="Can you help with local SEO?"
              answer="Absolutely! We specialize in local SEO including Google My Business optimization, local citations, review management, and location-based keyword strategies for businesses serving specific geographic areas."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Improve Your Rankings</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to dominate search results? Let's boost your SEO performance.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get Free SEO Audit
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule SEO Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}