import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Code, Database, Globe, Shield } from "lucide-react";
import { SiNodedotjs, SiPython, SiRuby, SiGo, SiRust, SiPostgresql, SiMongodb, SiRedis } from "react-icons/si";

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

export function APIDevelopmentService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">REST APIs</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">GraphQL</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Microservices</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                API
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Development</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build robust, scalable APIs that power modern applications with secure, high-performance backend services and seamless integrations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Build Custom APIs
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View API Examples
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Code className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Database className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <Globe className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <Shield className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our API Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Systematic approach to building APIs that scale and perform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "API Design",
                description: "Design RESTful or GraphQL APIs with clear documentation, consistent structure, and optimal performance."
              },
              {
                step: "02", 
                title: "Development",
                description: "Build secure, scalable APIs using best practices for authentication, validation, and error handling."
              },
              {
                step: "03",
                title: "Testing & Documentation",
                description: "Comprehensive testing suite and detailed API documentation for seamless integration."
              },
              {
                step: "04",
                title: "Deployment & Monitoring",
                description: "Deploy to production with monitoring, logging, and performance optimization for reliability."
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
              <h2 className="text-4xl font-bold mb-8">Complete API Development Solution</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">API Architecture</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• RESTful API design and development</li>
                    <li>• GraphQL API implementation</li>
                    <li>• Microservices architecture</li>
                    <li>• Third-party API integrations</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Security & Performance</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Authentication and authorization</li>
                    <li>• Rate limiting and throttling</li>
                    <li>• Data validation and sanitization</li>
                    <li>• Caching and optimization</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Documentation & Testing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Interactive API documentation</li>
                    <li>• Comprehensive test suites</li>
                    <li>• Performance monitoring</li>
                    <li>• Version management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">100+</div>
                    <div className="text-sm text-gray-300">APIs Developed</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime Achieved</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">50ms</div>
                    <div className="text-sm text-gray-300">Avg. Response Time</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">24/7</div>
                    <div className="text-sm text-gray-300">Monitoring & Support</div>
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
            <h2 className="text-4xl font-bold mb-6">API Development Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our API development projects</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform APIs",
                description: "Built scalable APIs for a major e-commerce platform handling 10M+ requests daily with 99.99% uptime.",
                metrics: ["10M+ daily requests", "99.99% uptime"]
              },
              {
                title: "FinTech Integration Hub",
                description: "Developed secure payment APIs for a fintech startup, processing $50M+ in transactions monthly.",
                metrics: ["$50M+ monthly transactions", "Bank-grade security"]
              },
              {
                title: "IoT Data Processing",
                description: "Created real-time APIs for IoT platform processing sensor data from 100K+ devices globally.",
                metrics: ["100K+ connected devices", "Real-time processing"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our API Development</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert API development that powers modern applications with reliability and scale
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Developers", desc: "Senior backend developers with extensive API development experience." },
              { icon: TrendingUp, title: "Scalable Architecture", desc: "APIs designed to handle growth from thousands to millions of requests." },
              { icon: Target, title: "Security First", desc: "Built-in security measures including authentication, encryption, and validation." },
              { icon: Zap, title: "High Performance", desc: "Optimized for speed with caching, efficient queries, and minimal latency." }
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
            <h2 className="text-4xl font-bold mb-6">API Development Technologies</h2>
            <p className="text-xl text-gray-300">Modern backend technologies for building robust APIs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiNodedotjs, name: "Node.js", desc: "JavaScript runtime for building fast, scalable network applications and APIs." },
              { icon: SiPython, name: "Python", desc: "Versatile language with frameworks like Django and FastAPI for API development." },
              { icon: SiRuby, name: "Ruby on Rails", desc: "Full-stack web framework with convention over configuration for rapid API development." },
              { icon: SiGo, name: "Go (Golang)", desc: "High-performance language designed for building efficient, concurrent backend services." },
              { icon: SiRust, name: "Rust", desc: "Systems programming language offering memory safety and high performance for APIs." },
              { icon: SiPostgresql, name: "PostgreSQL", desc: "Advanced relational database with JSON support and excellent performance." },
              { icon: SiMongodb, name: "MongoDB", desc: "NoSQL database perfect for document-based data and flexible schema requirements." },
              { icon: SiRedis, name: "Redis", desc: "In-memory data structure store used for caching and real-time applications." }
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
            <p className="text-xl text-gray-300">Common questions about our API development services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What type of APIs do you develop?"
              answer="We develop RESTful APIs, GraphQL APIs, WebSocket APIs for real-time communication, and webhook systems. We also create microservices architectures and integrate with third-party APIs."
            />
            <FAQItem 
              question="How do you ensure API security?"
              answer="We implement multiple security layers including OAuth 2.0, JWT tokens, API key management, rate limiting, input validation, SQL injection prevention, and HTTPS encryption for all communications."
            />
            <FAQItem 
              question="Do you provide API documentation?"
              answer="Yes, we create comprehensive API documentation using tools like Swagger/OpenAPI, including interactive examples, request/response schemas, and integration guides for developers."
            />
            <FAQItem 
              question="Can you integrate with existing systems?"
              answer="Absolutely! We specialize in integrating APIs with existing databases, CRM systems, payment gateways, third-party services, and legacy applications while ensuring data consistency."
            />
            <FAQItem 
              question="How do you handle API versioning?"
              answer="We implement proper versioning strategies using URL versioning, header versioning, or content negotiation to ensure backward compatibility while allowing for API evolution and updates."
            />
            <FAQItem 
              question="What about API performance and scalability?"
              answer="We optimize APIs with database indexing, query optimization, caching strategies, load balancing, and horizontal scaling to handle high traffic loads and ensure fast response times."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Build Custom APIs</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to build powerful APIs that scale? Let's create backend solutions that drive your applications.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get API Development Quote
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Technical Discussion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}