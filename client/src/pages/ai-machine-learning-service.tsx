import React, { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { ContactPopup } from "@/components/contact-popup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Brain, 
  CheckCircle, 
  Bot, 
  Database, 
  Search, 
  Cpu,
  Users,
  Zap,
  Settings,
  Globe,
  ArrowRight,
  Shield,
  Star,
  TrendingUp,
  Target,
  Phone,
  MessageCircle,
  MapPin,
  Lightbulb
} from "lucide-react";
import { SiPython, SiTensorflow, SiPytorch, SiJupyter, SiGoogle, SiMicrosoft } from "react-icons/si";

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-700/15 backdrop-blur-xs border border-purple-400/30 group hover:bg-purple-500/25 transition-all duration-300">
      <div className="flex items-start justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-white font-medium leading-relaxed pr-4">{question}</p>
        <div className="w-8 h-8 bg-purple-500/40 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/60 transition-all duration-300">
          <span className={`text-white text-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
        </div>
      </div>
      <div className={`mt-4 text-purple-100/70 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
        {answer}
      </div>
    </div>
  );
}

export default function AIMachineLearningService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI & Machine Learning Services",
    "description": "Harness the power of artificial intelligence to transform your business operations and decision-making",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "AI & Machine Learning"
  };

  return (
    <>
      <SEOHead
        title="AI & Machine Learning Services - Intelligent Business Solutions"
        description="Harness the power of artificial intelligence and machine learning to transform your business operations, improve decision-making, and create intelligent applications."
        keywords="artificial intelligence, machine learning, AI development, neural networks, deep learning, automation"
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section - Reference Design Match */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text Section */}
            <div className="space-y-8">
              {/* Main Title */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  AI & Machine Learning<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we harness the power of artificial intelligence to transform business 
                  operations and unlock new possibilities. Our team creates intelligent solutions that 
                  learn, adapt, and evolve. From predictive analytics to automated decision-making 
                  systems, we deliver AI that drives real business value.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Machine Learning",
                  "Neural Networks", 
                  "Computer Vision",
                  "Natural Language Processing"
                ].map((service, index) => (
                  <div key={index} className="px-6 py-3 bg-purple-700/50 backdrop-blur-sm border border-purple-500/30 rounded-full">
                    <span className="text-purple-100 font-medium text-sm">{service}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <ContactPopup 
                  trigger={
                    <Button className="px-8 py-4 text-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white border-0 shadow-xl rounded-full" data-testid="button-start-project">
                      Transform with AI
                    </Button>
                  }
                  title="Ready to Start Your AI Project?"
                  description="Let's discuss your AI needs and create intelligent solutions that drive business growth."
                  defaultService="AI & Machine Learning"
                />
                <Button className="px-8 py-4 text-lg font-semibold bg-transparent border-2 border-purple-400/60 text-purple-100 hover:bg-purple-600/20 rounded-full" data-testid="button-schedule-call">
                  Schedule a Call
                </Button>
              </div>
            </div>
            
            {/* Right Content - 3D Graphics */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Floating 3D Elements */}
              <div className="relative w-full max-w-md h-96">
                {/* Large Brain Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Neural Network Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* AI Chip Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Data Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Algorithm Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-cyan-300/30 to-purple-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
                {/* Small Transparent Cube */}
                <div className="absolute bottom-16 left-20 w-12 h-12 bg-gradient-to-br from-white/10 via-pink-200/20 to-transparent backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transform -rotate-6 hover:rotate-12 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Process Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Settings, title: "Data Analysis & Strategy", step: "Step 1", desc: "Analyze your data landscape and identify AI opportunities that align with your business objectives for maximum impact." },
              { icon: Brain, title: "Model Development", step: "Step 2", desc: "Design and train custom machine learning models tailored to your specific use case and data requirements." },
              { icon: Bot, title: "AI Implementation", step: "Step 3", desc: "Deploy intelligent solutions with proper integration, testing, and validation to ensure optimal performance." },
              { icon: Globe, title: "Optimization & Scaling", step: "Step 4", desc: "Continuously monitor, optimize, and scale AI systems to maximize ROI and business value over time." }
            ].map((item, index) => (
              <div key={index} className="group">
                {/* Glass Card */}
                <div className="relative h-full p-4 md:p-6 rounded-xl md:rounded-2xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                  
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-lg md:rounded-xl flex items-center justify-center border border-white/20">
                      <item.icon className="icon-white text-lg md:text-xl" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                    
                    <p className="text-sm text-purple-100/80 leading-relaxed line-clamp-4">{item.desc}</p>
                    
                    {/* Step Badge */}
                    <div className="pt-2">
                      <Badge className="bg-white/10 text-white border border-white/20 text-xs font-medium">
                        {item.step}
                      </Badge>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-end pt-2">
                      <ArrowRight className="text-purple-300 text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Service Includes Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                What Our AI & Machine Learning<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive AI and machine learning service is designed to help businesses of all
                sizes harness the power of artificial intelligence. We work closely with your
                team to understand your unique challenges and implement AI solutions that
                drive real business value and competitive advantage.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "Custom AI Model Development",
                  "Natural Language Processing", 
                  "Computer Vision Solutions",
                  "Predictive Analytics Implementation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We develop intelligent systems that learn from your data to automate processes, 
                        improve decision-making, and unlock new business opportunities.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - 3D Illustration & Stats */}
            <div className="relative">
              {/* 3D Illustration Area */}
              <div className="relative h-64 md:h-80 rounded-xl md:rounded-2xl glass-card overflow-hidden mb-6 md:mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                
                {/* Mock 3D Elements */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    {/* AI Brain Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-cyan-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <Brain className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-pink-400 rounded-full shadow-lg"></div>
                      <div className="w-6 h-6 bg-yellow-400 rounded-md shadow-lg"></div>
                      <div className="w-10 h-6 bg-green-400 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <p className="text-purple-100/80 text-sm">Accuracy Rate</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">50%</div>
                    <p className="text-xs text-purple-100/60">Cost Reduction</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">3x</div>
                  <p className="text-purple-100/80 text-sm">Faster Processing</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">100+</div>
                    <p className="text-xs text-purple-100/60">AI Models</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-5xl font-bold text-white">All AI & Machine Learning Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our AI and machine learning services have transformed businesses
              across various industries with intelligent automation and insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Healthcare Diagnostics", subtitle: "95% Accuracy in Medical Image Analysis", desc: "AI-powered medical imaging system that detects diseases with 95% accuracy, reducing diagnosis time by 60% and improving patient outcomes." },
              { title: "Financial Fraud Detection", subtitle: "99.5% Fraud Detection Rate", desc: "Machine learning model that identifies fraudulent transactions in real-time, preventing $2M+ in losses with minimal false positives." },
              { title: "Supply Chain Optimization", subtitle: "30% Cost Reduction with Predictive Analytics", desc: "Predictive analytics solution that optimizes inventory management and logistics, reducing costs by 30% and improving delivery times." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-cyan-800/40 to-cyan-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-cyan-200">
                          <span>Accuracy</span>
                          <span>95%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-cyan-500/30 to-pink-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-cyan-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-cyan-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-cyan-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-cyan-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-cyan-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-cyan-300">95% accuracy with AI-powered analysis</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs text-purple-300 uppercase tracking-wider">{item.title}</div>
                      <h3 className="text-lg font-bold text-white">{item.subtitle}</h3>
                      <p className="text-sm text-purple-100/80 leading-relaxed">{item.desc}</p>
                    </div>
                    <Button variant="outline" className="w-full border-purple-400/30 text-purple-200 hover:bg-purple-600/20 group-hover:border-purple-400/50 transition-all duration-300">
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-bold text-white">Service Details:</h2>
          
          {/* Service Description */}
          <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-700/5 backdrop-blur-xl border border-purple-400/20 shadow-2xl">
            <p className="text-purple-100/90 leading-relaxed text-lg">
              Our comprehensive AI and machine learning service combines cutting-edge algorithms with deep business understanding to create intelligent solutions 
              that transform operations. We specialize in developing custom neural networks, implementing computer vision systems, and building natural language 
              processing applications that learn and adapt to your specific needs. From predictive analytics that forecast market trends to automated decision-making 
              systems that optimize workflows, our AI solutions are designed to deliver measurable results and sustainable competitive advantages.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Brain, title: "Machine", subtitle: "Learning Models" },
              { icon: Bot, title: "AI", subtitle: "Automation" },
              { icon: Database, title: "Data", subtitle: "Analytics" },
              { icon: Lightbulb, title: "Intelligent", subtitle: "Insights" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-purple-100/80">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-5xl font-bold text-center text-white">Technologies We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiPython, name: "Python", desc: "Primary programming language for AI development with extensive machine learning libraries and frameworks." },
              { icon: SiTensorflow, name: "TensorFlow", desc: "Open-source machine learning framework for building and deploying neural networks at scale." },
              { icon: SiPytorch, name: "PyTorch", desc: "Dynamic neural network framework preferred for research and rapid prototyping of AI models." },
              { icon: Brain, name: "OpenAI", desc: "Advanced AI models and APIs for natural language processing and generative AI applications." },
              { icon: Bot, name: "AWS ML", desc: "Cloud-based machine learning services for scalable AI model training and deployment." },
              { icon: SiMicrosoft, name: "Azure AI", desc: "Microsoft's AI platform providing cognitive services and machine learning capabilities." },
              { icon: SiGoogle, name: "Google AI", desc: "Google Cloud AI platform with pre-trained models and AutoML capabilities for businesses." },
              { icon: SiJupyter, name: "Jupyter", desc: "Interactive development environment for data science, machine learning experimentation, and analysis." }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-white/5 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-purple-100/80 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-4 md:inset-8 lg:inset-16 bg-gradient-to-br from-purple-500/25 to-purple-700/20 backdrop-blur-[20px] border border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-purple-100/90">Common questions about our AI & machine learning services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="How do I know if my business needs AI?"
              answer="AI can benefit any business with repetitive processes, large datasets, or complex decision-making needs. We conduct assessments to identify the best AI opportunities for your specific situation."
            />
            <FAQItem 
              question="How long does it take to develop an AI solution?"
              answer="Development time varies from 3-12 months depending on complexity. Simple automation projects take 3-6 months, while complex neural networks may require 6-12 months including data preparation and testing."
            />
            <FAQItem 
              question="What data do you need to build AI models?"
              answer="We need relevant historical data for training. The amount varies by project - typically thousands to millions of data points. We can work with various formats and help clean and prepare your data."
            />
            <FAQItem 
              question="How do you ensure AI model accuracy?"
              answer="We use rigorous testing methodologies, cross-validation, and performance monitoring. Models are trained on separate datasets and continuously evaluated to maintain high accuracy rates."
            />
            <FAQItem 
              question="Can AI integrate with our existing systems?"
              answer="Yes, our AI solutions are designed to integrate seamlessly with existing infrastructure through APIs, cloud services, and custom connectors to minimize disruption to your operations."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}