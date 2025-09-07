import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Brain, Bot, ChartBar, Cpu } from "lucide-react";
import { SiTensorflow, SiPytorch, SiPython, SiJupyter, SiKaggle, SiGooglecloud, SiAmazonaws, SiMicrosoftazure } from "react-icons/si";

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

export function AIMachineLearningService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Machine Learning</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Deep Learning</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">AI Integration</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                AI & Machine
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Learning</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Harness the power of artificial intelligence and machine learning to automate processes, predict outcomes, and unlock insights from your data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Build AI Solutions
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View AI Projects
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Brain className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Bot className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <ChartBar className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our AI & ML Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data-driven approach to building intelligent systems that solve real business problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Problem Definition",
                description: "Identify AI opportunities, define success metrics, and assess data requirements for optimal solutions."
              },
              {
                step: "02", 
                title: "Data Preparation",
                description: "Collect, clean, and preprocess data to ensure high-quality training datasets for model development."
              },
              {
                step: "03",
                title: "Model Development",
                description: "Design, train, and validate machine learning models using advanced algorithms and techniques."
              },
              {
                step: "04",
                title: "Deployment & Monitoring",
                description: "Deploy models to production with continuous monitoring and optimization for peak performance."
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
              <h2 className="text-4xl font-bold mb-8">Complete AI & ML Solutions</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Sales and demand forecasting</li>
                    <li>• Customer behavior prediction</li>
                    <li>• Risk assessment and fraud detection</li>
                    <li>• Maintenance scheduling optimization</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Computer Vision & NLP</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Image recognition and classification</li>
                    <li>• Document processing and extraction</li>
                    <li>• Chatbots and virtual assistants</li>
                    <li>• Sentiment analysis and text mining</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Automation & Optimization</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Process automation and RPA</li>
                    <li>• Recommendation systems</li>
                    <li>• Dynamic pricing optimization</li>
                    <li>• Supply chain optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">95%</div>
                    <div className="text-sm text-gray-300">Model Accuracy</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">50%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">80%</div>
                    <div className="text-sm text-gray-300">Process Automation</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">10x</div>
                    <div className="text-sm text-gray-300">Faster Insights</div>
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
            <h2 className="text-4xl font-bold mb-6">AI & ML Success Stories</h2>
            <p className="text-xl text-gray-300">Real-world AI implementations driving business transformation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare Diagnostics AI",
                description: "Developed machine learning model for medical image analysis, improving diagnostic accuracy by 25%.",
                metrics: ["25% accuracy improvement", "30% faster diagnosis"]
              },
              {
                title: "Retail Recommendation Engine",
                description: "Built personalized recommendation system increasing customer engagement and sales by 40%.",
                metrics: ["40% sales increase", "60% better engagement"]
              },
              {
                title: "Financial Fraud Detection",
                description: "Implemented real-time fraud detection system reducing false positives by 70% while catching 99% of fraud.",
                metrics: ["99% fraud detection", "70% fewer false positives"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our AI & ML Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert AI development that transforms data into competitive advantages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "AI Specialists", desc: "PhD-level data scientists and ML engineers with proven expertise across industries." },
              { icon: TrendingUp, title: "Business Impact", desc: "Focus on AI solutions that deliver measurable business value and ROI." },
              { icon: Target, title: "Custom Solutions", desc: "Tailored AI models designed specifically for your data and business objectives." },
              { icon: Zap, title: "Rapid Deployment", desc: "Accelerated development cycles with MLOps practices for faster time-to-market." }
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
            <h2 className="text-4xl font-bold mb-6">AI & ML Technologies Stack</h2>
            <p className="text-xl text-gray-300">Cutting-edge tools and frameworks for building intelligent systems</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiTensorflow, name: "TensorFlow", desc: "Google's open-source machine learning framework for building and training neural networks." },
              { icon: SiPytorch, name: "PyTorch", desc: "Facebook's dynamic neural network framework preferred for research and production AI models." },
              { icon: SiPython, name: "Python", desc: "Primary programming language for data science and machine learning development." },
              { icon: SiJupyter, name: "Jupyter", desc: "Interactive development environment for data analysis and model experimentation." },
              { icon: SiKaggle, name: "Kaggle", desc: "Data science platform for accessing datasets and collaborating on ML competitions." },
              { icon: SiGooglecloud, name: "Google Cloud AI", desc: "Cloud-based AI services including AutoML, Vision API, and Natural Language processing." },
              { icon: SiAmazonaws, name: "AWS SageMaker", desc: "Amazon's machine learning platform for building, training, and deploying ML models at scale." },
              { icon: SiMicrosoftazure, name: "Azure ML", desc: "Microsoft's cloud platform for the complete machine learning lifecycle management." }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-300">{tech.desc}</p>
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
            <p className="text-xl text-gray-300">Common questions about our AI & Machine Learning services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What's the difference between AI and Machine Learning?"
              answer="AI is a broader concept of machines performing tasks intelligently, while Machine Learning is a subset of AI that learns patterns from data to make predictions or decisions without explicit programming."
            />
            <FAQItem 
              question="How much data do I need for a machine learning project?"
              answer="Data requirements vary by project complexity and type. Simple models may need hundreds of examples, while complex deep learning models might require thousands or millions. We assess your specific needs during consultation."
            />
            <FAQItem 
              question="How long does it take to develop an AI solution?"
              answer="Timeline depends on complexity: simple models take 4-8 weeks, while comprehensive AI systems can take 3-6 months. We provide detailed project timelines after initial assessment."
            />
            <FAQItem 
              question="Can AI models work with my existing systems?"
              answer="Yes, we design AI solutions to integrate seamlessly with your existing infrastructure through APIs, databases, and cloud platforms. We ensure minimal disruption to current operations."
            />
            <FAQItem 
              question="How do you ensure AI model accuracy and reliability?"
              answer="We use rigorous testing methodologies, cross-validation, performance monitoring, and continuous model retraining to maintain high accuracy and reliability in production environments."
            />
            <FAQItem 
              question="What ongoing support do you provide for AI systems?"
              answer="We offer comprehensive support including model monitoring, performance optimization, retraining with new data, troubleshooting, and updates to ensure your AI systems remain effective."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Build AI Solutions</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to transform your business with AI? Let's build intelligent solutions that drive results.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get AI Consultation
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View AI Projects
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}