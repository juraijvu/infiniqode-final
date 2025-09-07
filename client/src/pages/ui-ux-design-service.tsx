import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Palette, Monitor, Smartphone, Layout } from "lucide-react";
import { SiFigma, SiSketch, SiAdobe, SiFramer, SiInvision, SiZeplin, SiMiro, SiAbstract } from "react-icons/si";

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

export function UIUXDesignService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">User Research</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Wireframing</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Prototyping</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                UI/UX
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Design</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create intuitive, beautiful user experiences that delight users and drive business results through research-driven design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Start Design Project
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Design Portfolio
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-400/30 to-pink-600/30 rounded-2xl flex items-center justify-center">
                    <Palette className="w-16 h-16 text-pink-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Monitor className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <Layout className="w-16 h-16 text-orange-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our UI/UX Design Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Human-centered design approach that puts users first
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research & Discovery",
                description: "Understand users, business goals, and market context through comprehensive research and analysis."
              },
              {
                step: "02", 
                title: "Design & Wireframing",
                description: "Create user flows, wireframes, and design systems that solve user problems effectively."
              },
              {
                step: "03",
                title: "Prototyping & Testing",
                description: "Build interactive prototypes and conduct user testing to validate design decisions."
              },
              {
                step: "04",
                title: "Implementation Support",
                description: "Work with development teams to ensure designs are implemented accurately and effectively."
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
              <h2 className="text-4xl font-bold mb-8">Complete UI/UX Design Services</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">User Research & Strategy</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• User interviews and persona development</li>
                    <li>• Competitive analysis and market research</li>
                    <li>• User journey mapping and flow design</li>
                    <li>• Information architecture planning</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Design & Prototyping</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Wireframing and low-fidelity prototypes</li>
                    <li>• High-fidelity UI design and mockups</li>
                    <li>• Interactive prototypes and animations</li>
                    <li>• Design system and component library</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Testing & Optimization</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Usability testing and user feedback</li>
                    <li>• A/B testing and conversion optimization</li>
                    <li>• Accessibility compliance (WCAG)</li>
                    <li>• Design handoff and developer support</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">150+</div>
                    <div className="text-sm text-gray-300">Design Projects</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">85%</div>
                    <div className="text-sm text-gray-300">User Satisfaction</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">40%</div>
                    <div className="text-sm text-gray-300">Conversion Improvement</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">6-12</div>
                    <div className="text-sm text-gray-300">Weeks Timeline</div>
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
            <h2 className="text-4xl font-bold mb-6">UI/UX Design Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our user experience design projects</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SaaS Platform Redesign",
                description: "Increased user engagement by 300% and reduced support tickets by 50% through intuitive interface redesign.",
                metrics: ["300% engagement increase", "50% fewer support tickets"]
              },
              {
                title: "E-commerce Optimization",
                description: "Boosted conversion rates by 65% through streamlined checkout process and improved product discovery.",
                metrics: ["65% conversion increase", "35% faster checkout"]
              },
              {
                title: "Mobile App Design",
                description: "Achieved 4.8-star app store rating with user-centered design that improved retention by 200%.",
                metrics: ["4.8-star rating", "200% retention improvement"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our UI/UX Design Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              User-centered design that creates meaningful experiences and drives business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "User-Centered Approach", desc: "Every design decision based on real user research and behavioral insights." },
              { icon: TrendingUp, title: "Business Impact", desc: "Designs that not only look great but also drive conversions and business growth." },
              { icon: Target, title: "Data-Driven Design", desc: "Use analytics and testing to validate design decisions and optimize performance." },
              { icon: Zap, title: "Agile Process", desc: "Collaborative, iterative design process with regular feedback and rapid prototyping." }
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
            <h2 className="text-4xl font-bold mb-6">Professional Design Tools</h2>
            <p className="text-xl text-gray-300">Industry-leading tools for creating exceptional user experiences</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiFigma, name: "Figma", desc: "Collaborative design platform for creating and sharing UI/UX designs with teams." },
              { icon: SiSketch, name: "Sketch", desc: "Vector-based design tool for creating beautiful interfaces and design systems." },
              { icon: SiAdobe, name: "Adobe XD", desc: "UX/UI design and prototyping tool for creating interactive design experiences." },
              { icon: SiFramer, name: "Framer", desc: "Advanced prototyping tool for creating high-fidelity interactive prototypes." },
              { icon: SiInvision, name: "InVision", desc: "Digital product design platform for prototyping and collaboration." },
              { icon: SiZeplin, name: "Zeplin", desc: "Design handoff tool that bridges the gap between design and development." },
              { icon: SiMiro, name: "Miro", desc: "Collaborative whiteboard platform for brainstorming and user journey mapping." },
              { icon: SiAbstract, name: "Abstract", desc: "Version control and collaboration platform for design teams and files." }
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
            <p className="text-xl text-gray-300">Common questions about our UI/UX design services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What's the difference between UI and UX design?"
              answer="UX (User Experience) focuses on the overall experience and user journey, while UI (User Interface) focuses on the visual design and interactive elements. Both are essential for creating successful digital products."
            />
            <FAQItem 
              question="How long does a typical UI/UX design project take?"
              answer="Project timelines vary based on complexity. Simple projects take 6-8 weeks, while complex applications can take 12-16 weeks. We provide detailed timelines during the discovery phase."
            />
            <FAQItem 
              question="Do you conduct user research and testing?"
              answer="Yes, user research is fundamental to our process. We conduct user interviews, surveys, usability testing, and A/B testing to ensure designs meet real user needs and business goals."
            />
            <FAQItem 
              question="Can you work with our existing development team?"
              answer="Absolutely! We collaborate closely with development teams, providing detailed design specifications, style guides, and ongoing support during implementation to ensure design fidelity."
            />
            <FAQItem 
              question="Do you provide design systems and style guides?"
              answer="Yes, we create comprehensive design systems including color palettes, typography, component libraries, and usage guidelines to ensure consistency across your digital products."
            />
            <FAQItem 
              question="How do you ensure designs are accessible?"
              answer="We follow WCAG 2.1 guidelines, conduct accessibility audits, and test with assistive technologies to ensure our designs are inclusive and accessible to all users."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Start Design Project</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to create user experiences that drive results? Let's design something amazing.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Schedule Design Consultation
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View Our Design Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}