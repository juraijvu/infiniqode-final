import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Smartphone, Tablet, Watch, Gamepad2 } from "lucide-react";
import { SiReact, SiFlutter, SiSwift, SiKotlin, SiAndroid, SiIos, SiFirebase, SiXcode } from "react-icons/si";

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

export function MobileAppDevelopmentService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">iOS Apps</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Android Apps</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Cross-Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Mobile App
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Development</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create native and cross-platform mobile applications that engage users and drive business growth. From concept to App Store deployment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Start Your App Project
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View App Portfolio
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Tablet className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <Watch className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <Gamepad2 className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Mobile App Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From wireframes to app store launch - a proven process for mobile success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Define app requirements, user personas, and technical architecture to create a comprehensive development roadmap."
              },
              {
                step: "02", 
                title: "UI/UX Design",
                description: "Create intuitive user interfaces and seamless user experiences optimized for mobile interaction patterns."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build your app using native or cross-platform technologies with continuous testing and quality assurance."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploy to app stores and provide ongoing maintenance, updates, and performance optimization."
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
              <h2 className="text-4xl font-bold mb-8">Complete Mobile App Development</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Native & Cross-Platform Apps</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• iOS apps with Swift and Objective-C</li>
                    <li>• Android apps with Kotlin and Java</li>
                    <li>• React Native cross-platform development</li>
                    <li>• Flutter hybrid app development</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Backend & API Integration</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Custom API development and integration</li>
                    <li>• Cloud backend services setup</li>
                    <li>• Real-time data synchronization</li>
                    <li>• Push notification implementation</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">App Store Optimization</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• App Store and Google Play submission</li>
                    <li>• App store listing optimization</li>
                    <li>• App performance monitoring</li>
                    <li>• Crash reporting and analytics</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">200+</div>
                    <div className="text-sm text-gray-300">Apps Developed</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">4.8</div>
                    <div className="text-sm text-gray-300">Avg. App Store Rating</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">1M+</div>
                    <div className="text-sm text-gray-300">App Downloads</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">8-16</div>
                    <div className="text-sm text-gray-300">Weeks Development</div>
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
            <h2 className="text-4xl font-bold mb-6">Mobile App Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our mobile app development projects</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fitness Tracking App",
                description: "Built a comprehensive fitness app with workout tracking, social features, and wearable integration.",
                metrics: ["500K+ downloads", "4.7 App Store rating"]
              },
              {
                title: "Food Delivery Platform",
                description: "Created a multi-vendor food delivery app with real-time tracking and payment integration.",
                metrics: ["50K+ daily orders", "2M+ registered users"]
              },
              {
                title: "Financial Services App",
                description: "Developed a secure banking app with biometric authentication and real-time transaction monitoring.",
                metrics: ["99.9% uptime", "Bank-grade security"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Mobile App Development</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert mobile development that delivers apps users love and businesses depend on
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "User-Centric Design", desc: "Apps designed with user experience as the top priority for maximum engagement." },
              { icon: TrendingUp, title: "Performance Optimized", desc: "Fast, responsive apps that work smoothly across all devices and operating systems." },
              { icon: Target, title: "Platform Expertise", desc: "Deep knowledge of iOS and Android guidelines for successful app store approval." },
              { icon: Zap, title: "Agile Development", desc: "Iterative development process with regular updates and continuous client feedback." }
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
            <h2 className="text-4xl font-bold mb-6">Mobile Development Technologies</h2>
            <p className="text-xl text-gray-300">Cutting-edge tools and frameworks for building exceptional mobile apps</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiReact, name: "React Native", desc: "Cross-platform framework for building native mobile apps with JavaScript." },
              { icon: SiFlutter, name: "Flutter", desc: "Google's UI toolkit for building natively compiled applications for mobile and web." },
              { icon: SiSwift, name: "Swift", desc: "Apple's programming language for iOS, iPadOS, macOS, and watchOS development." },
              { icon: SiKotlin, name: "Kotlin", desc: "Modern programming language for Android development with full Java interoperability." },
              { icon: SiAndroid, name: "Android Studio", desc: "Official IDE for Android development with advanced debugging and testing tools." },
              { icon: SiIos, name: "iOS Development", desc: "Native iOS development using Xcode and Swift for optimal performance and features." },
              { icon: SiFirebase, name: "Firebase", desc: "Google's mobile and web development platform with backend services and analytics." },
              { icon: SiXcode, name: "Xcode", desc: "Apple's integrated development environment for creating apps for all Apple platforms." }
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
            <p className="text-xl text-gray-300">Common questions about our mobile app development services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="Should I build a native or cross-platform app?"
              answer="It depends on your requirements. Native apps offer the best performance and platform-specific features, while cross-platform apps are more cost-effective for reaching both iOS and Android users quickly."
            />
            <FAQItem 
              question="How long does mobile app development take?"
              answer="Simple apps take 8-12 weeks, while complex apps with custom features can take 16-24 weeks. We provide detailed timelines during the planning phase based on your specific requirements."
            />
            <FAQItem 
              question="Do you help with app store submission?"
              answer="Yes, we handle the complete app store submission process for both Apple App Store and Google Play Store, including optimization for better discoverability and faster approval."
            />
            <FAQItem 
              question="What's included in ongoing app maintenance?"
              answer="Our maintenance packages include bug fixes, OS compatibility updates, security patches, performance optimization, and feature enhancements based on user feedback and analytics."
            />
            <FAQItem 
              question="Can you integrate with existing backend systems?"
              answer="Absolutely! We can integrate your mobile app with existing APIs, databases, CRM systems, and third-party services to ensure seamless data flow and functionality."
            />
            <FAQItem 
              question="How do you ensure app security?"
              answer="We implement industry best practices including data encryption, secure API communications, authentication protocols, and regular security audits to protect user data and prevent vulnerabilities."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Start Your App Project</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to build a mobile app that users will love? Let's discuss your vision.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get App Development Quote
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