import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, BarChart3, PieChart, LineChart, Database } from "lucide-react";
import { SiTableau, SiPowerbi, SiGoogleanalytics, SiSnowflake, SiDatabricks, SiMongodb, SiPostgresql, SiApachespark } from "react-icons/si";

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

export function DataAnalyticsService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Business Intelligence</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Data Visualization</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Predictive Analytics</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Data
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Analytics</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform raw data into actionable insights that drive strategic business decisions and competitive advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Unlock Data Insights
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Analytics Examples
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <PieChart className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <LineChart className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <Database className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Data Analytics Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Systematic approach to turning data into strategic business intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Data Discovery",
                description: "Identify data sources, assess quality, and understand business requirements for meaningful analysis."
              },
              {
                step: "02", 
                title: "Data Integration",
                description: "Consolidate data from multiple sources into a unified, clean, and analysis-ready format."
              },
              {
                step: "03",
                title: "Analysis & Modeling",
                description: "Apply statistical analysis, machine learning, and predictive modeling to extract insights."
              },
              {
                step: "04",
                title: "Visualization & Reporting",
                description: "Create interactive dashboards and reports that make complex data easy to understand and act upon."
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
              <h2 className="text-4xl font-bold mb-8">Complete Data Analytics Solution</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Business Intelligence</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Executive dashboards and KPI tracking</li>
                    <li>• Sales and marketing analytics</li>
                    <li>• Financial reporting and analysis</li>
                    <li>• Operational performance monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Predictive modeling and forecasting</li>
                    <li>• Customer segmentation analysis</li>
                    <li>• Statistical analysis and hypothesis testing</li>
                    <li>• Machine learning model development</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Data Infrastructure</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Data warehouse design and implementation</li>
                    <li>• ETL pipeline development</li>
                    <li>• Real-time data streaming solutions</li>
                    <li>• Data governance and quality management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">95%</div>
                    <div className="text-sm text-gray-300">Accuracy Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">25%</div>
                    <div className="text-sm text-gray-300">Avg. Revenue Increase</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">50+</div>
                    <div className="text-sm text-gray-300">Data Sources Integrated</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">Real-time</div>
                    <div className="text-sm text-gray-300">Dashboard Updates</div>
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
            <h2 className="text-4xl font-bold mb-6">Data Analytics Success Stories</h2>
            <p className="text-xl text-gray-300">Real business impact from our data analytics solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Retail Sales Optimization",
                description: "Increased sales by 30% for a retail chain through customer behavior analysis and demand forecasting.",
                metrics: ["30% sales increase", "85% forecast accuracy"]
              },
              {
                title: "Healthcare Cost Reduction",
                description: "Reduced operational costs by 20% for a hospital network through predictive analytics and resource optimization.",
                metrics: ["20% cost reduction", "15% efficiency improvement"]
              },
              {
                title: "Manufacturing Quality Control",
                description: "Improved product quality by 40% using machine learning to predict and prevent defects in real-time.",
                metrics: ["40% quality improvement", "60% defect reduction"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Data Analytics Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your data into competitive advantages with expert analytics solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Data Scientists", desc: "PhD-level data scientists and analytics experts with proven track records." },
              { icon: TrendingUp, title: "Actionable Insights", desc: "Focus on insights that directly impact business decisions and drive measurable results." },
              { icon: Target, title: "Custom Solutions", desc: "Tailored analytics solutions designed for your specific industry and business needs." },
              { icon: Zap, title: "Real-Time Analytics", desc: "Live dashboards and real-time analysis for immediate decision-making capabilities." }
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
            <h2 className="text-4xl font-bold mb-6">Analytics Tools & Platforms</h2>
            <p className="text-xl text-gray-300">Enterprise-grade analytics stack for comprehensive data analysis</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiTableau, name: "Tableau", desc: "Leading data visualization platform for interactive dashboards and business intelligence." },
              { icon: SiPowerbi, name: "Power BI", desc: "Microsoft's business analytics solution for self-service and enterprise reporting." },
              { icon: SiGoogleanalytics, name: "Google Analytics", desc: "Web analytics platform for tracking user behavior and conversion optimization." },
              { icon: SiSnowflake, name: "Snowflake", desc: "Cloud data warehouse platform for storing and analyzing large-scale datasets." },
              { icon: SiDatabricks, name: "Databricks", desc: "Unified analytics platform for big data processing and machine learning." },
              { icon: SiMongodb, name: "MongoDB", desc: "NoSQL database for handling unstructured data and real-time analytics." },
              { icon: SiPostgresql, name: "PostgreSQL", desc: "Advanced relational database with powerful analytics and JSON capabilities." },
              { icon: SiApachespark, name: "Apache Spark", desc: "Fast and general engine for large-scale data processing and analytics." }
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
            <p className="text-xl text-gray-300">Common questions about our data analytics services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What types of data can you analyze?"
              answer="We work with all types of data including transactional data, customer data, web analytics, IoT sensor data, financial data, and social media data. We can integrate structured and unstructured data from multiple sources."
            />
            <FAQItem 
              question="How long does it take to see results?"
              answer="Initial insights can be delivered within 2-4 weeks for basic analytics. Comprehensive business intelligence solutions typically take 8-12 weeks to implement, depending on data complexity and requirements."
            />
            <FAQItem 
              question="Do you work with existing data systems?"
              answer="Yes, we integrate with existing databases, CRM systems, ERP platforms, and third-party APIs. We can work with cloud platforms like AWS, Azure, Google Cloud, and on-premise systems."
            />
            <FAQItem 
              question="What's the difference between reporting and analytics?"
              answer="Reporting tells you what happened using historical data, while analytics tells you why it happened and predicts what might happen next. We provide both descriptive reporting and predictive analytics."
            />
            <FAQItem 
              question="How do you ensure data security and privacy?"
              answer="We implement enterprise-grade security including data encryption, access controls, audit trails, and compliance with regulations like GDPR and HIPAA. All data processing follows strict security protocols."
            />
            <FAQItem 
              question="Can you provide training for our team?"
              answer="Absolutely! We offer comprehensive training programs for your team on dashboard usage, data interpretation, and basic analytics concepts to ensure you can maximize the value of your analytics investment."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Unlock Data Insights</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to turn your data into strategic advantages? Let's unlock powerful insights.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get Data Analytics Consultation
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View Analytics Examples
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}