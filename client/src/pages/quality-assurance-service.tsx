import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Bug, CheckCircle, TestTube, Monitor } from "lucide-react";
import { SiSelenium, SiCypress, SiPlaywright, SiJest, SiMocha, SiPostman, SiJira, SiTestinglibrary } from "react-icons/si";

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

export function QualityAssuranceService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Test Automation</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Manual Testing</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Performance Testing</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Quality
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Assurance</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ensure flawless software delivery with comprehensive testing strategies that catch bugs early and maintain high-quality user experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Improve Software Quality
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Testing Examples
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-400/30 to-red-600/30 rounded-2xl flex items-center justify-center">
                    <Bug className="w-16 h-16 text-red-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <TestTube className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <Monitor className="w-16 h-16 text-orange-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Quality Assurance Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive testing approach that ensures quality at every stage of development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Test Planning",
                description: "Define test strategy, scope, and objectives based on requirements and risk assessment."
              },
              {
                step: "02", 
                title: "Test Design",
                description: "Create comprehensive test cases, scenarios, and automation scripts for thorough coverage."
              },
              {
                step: "03",
                title: "Test Execution",
                description: "Execute manual and automated tests across multiple environments and devices."
              },
              {
                step: "04",
                title: "Reporting & Analysis",
                description: "Provide detailed reports with bug tracking, metrics, and recommendations for improvement."
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
              <h2 className="text-4xl font-bold mb-8">Comprehensive Testing Services</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Functional Testing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Unit testing and integration testing</li>
                    <li>• User acceptance testing (UAT)</li>
                    <li>• Regression and smoke testing</li>
                    <li>• API and database testing</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Performance & Load Testing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Load and stress testing</li>
                    <li>• Performance optimization</li>
                    <li>• Scalability testing</li>
                    <li>• Memory and resource usage analysis</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Security & Compatibility</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Security vulnerability testing</li>
                    <li>• Cross-browser compatibility</li>
                    <li>• Mobile device testing</li>
                    <li>• Accessibility testing (WCAG)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-sm text-gray-300">Bug Detection Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">70%</div>
                    <div className="text-sm text-gray-300">Faster Testing</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">85%</div>
                    <div className="text-sm text-gray-300">Test Automation</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">500+</div>
                    <div className="text-sm text-gray-300">Projects Tested</div>
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
            <h2 className="text-4xl font-bold mb-6">Quality Assurance Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our comprehensive testing implementations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform Testing",
                description: "Comprehensive testing for major e-commerce platform, reducing production bugs by 90% and improving user satisfaction.",
                metrics: ["90% fewer production bugs", "25% faster releases"]
              },
              {
                title: "Mobile Banking App QA",
                description: "Rigorous security and functional testing for banking app, ensuring 100% compliance and zero security incidents.",
                metrics: ["100% regulatory compliance", "Zero security incidents"]
              },
              {
                title: "SaaS Application Testing",
                description: "Automated testing suite for SaaS platform, reducing testing time by 80% while maintaining 99.9% quality standards.",
                metrics: ["80% faster testing", "99.9% quality score"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our QA Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional quality assurance that ensures your software meets the highest standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert QA Engineers", desc: "Certified testing professionals with expertise across multiple industries and technologies." },
              { icon: TrendingUp, title: "Proven Methodologies", desc: "Industry-standard testing approaches that ensure comprehensive coverage and quality." },
              { icon: Target, title: "Risk-Based Testing", desc: "Focus testing efforts on high-risk areas to maximize impact and efficiency." },
              { icon: Zap, title: "Fast Turnaround", desc: "Efficient testing processes that don't slow down your development cycles." }
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
            <h2 className="text-4xl font-bold mb-6">Testing Tools & Frameworks</h2>
            <p className="text-xl text-gray-300">Industry-leading testing tools for comprehensive quality assurance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiSelenium, name: "Selenium", desc: "Popular open-source framework for automating web browser testing across platforms." },
              { icon: SiCypress, name: "Cypress", desc: "Modern end-to-end testing framework for web applications with real-time browser testing." },
              { icon: SiPlaywright, name: "Playwright", desc: "Microsoft's cross-browser automation library for reliable end-to-end testing." },
              { icon: SiJest, name: "Jest", desc: "JavaScript testing framework with built-in test runner, assertion library, and mocking." },
              { icon: SiMocha, name: "Mocha", desc: "Flexible JavaScript test framework for Node.js and browser testing with various assertion libraries." },
              { icon: SiPostman, name: "Postman", desc: "API testing platform for testing REST and GraphQL APIs with automated test suites." },
              { icon: SiJira, name: "Jira", desc: "Issue tracking and project management tool for managing bugs and test cases." },
              { icon: SiTestinglibrary, name: "Testing Library", desc: "Simple and complete testing utilities for React, Angular, and Vue applications." }
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
            <p className="text-xl text-gray-300">Common questions about our quality assurance services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What types of testing do you provide?"
              answer="We provide comprehensive testing including functional, performance, security, usability, compatibility, API testing, and test automation. We cover manual and automated testing approaches."
            />
            <FAQItem 
              question="How do you ensure test coverage?"
              answer="We use risk-based testing approaches, requirement traceability matrices, and code coverage analysis to ensure comprehensive test coverage of critical functionality and edge cases."
            />
            <FAQItem 
              question="Can you integrate with our development process?"
              answer="Yes, we integrate seamlessly with CI/CD pipelines, development workflows, and project management tools. We support Agile, DevOps, and traditional development methodologies."
            />
            <FAQItem 
              question="Do you provide test automation services?"
              answer="Absolutely! We specialize in test automation using modern frameworks like Selenium, Cypress, and Playwright. We can automate regression tests, API tests, and performance tests."
            />
            <FAQItem 
              question="How do you handle different environments and devices?"
              answer="We test across multiple environments, browsers, operating systems, and devices. We maintain device labs and use cloud testing platforms for comprehensive compatibility testing."
            />
            <FAQItem 
              question="What deliverables do you provide?"
              answer="We provide test plans, test cases, automation scripts, detailed bug reports, test execution reports, and recommendations for quality improvement and process optimization."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Improve Software Quality</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to ensure flawless software delivery? Let's implement comprehensive testing strategies.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get QA Strategy Consultation
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View Testing Examples
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}