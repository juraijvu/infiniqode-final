import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Palette, Eye, Layers, Award } from "lucide-react";
import { SiAdobe, SiFigma, SiSketch, SiCanva, SiIllustrator, SiPhotoshop, SiXd, SiInvision } from "react-icons/si";

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

export function BrandIdentityService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Brand Strategy</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Logo Design</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Visual Identity</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Brand Identity
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Design</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create a memorable brand identity that resonates with your audience and drives business growth. From logo design to complete brand guidelines.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Start Your Brand Journey
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Our Portfolio
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <Palette className="w-16 h-16 text-purple-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Eye className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Layers className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <Award className="w-16 h-16 text-orange-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Brand Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A strategic approach to creating brand identities that make lasting impressions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Brand Discovery",
                description: "Deep dive into your business values, target audience, and competitive landscape to define your brand essence."
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Create a comprehensive brand strategy including positioning, messaging, and visual direction."
              },
              {
                step: "03",
                title: "Design Creation",
                description: "Design your logo, color palette, typography, and all visual elements that represent your brand."
              },
              {
                step: "04",
                title: "Brand Guidelines",
                description: "Deliver complete brand guidelines ensuring consistent application across all touchpoints."
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
              <h2 className="text-4xl font-bold mb-8">What's Included in Brand Identity Design</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Complete Logo Package</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Primary logo design with variations</li>
                    <li>• Horizontal and vertical layouts</li>
                    <li>• Monochrome and color versions</li>
                    <li>• High-resolution files in multiple formats</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Brand Style Guide</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Color palette with hex codes</li>
                    <li>• Typography specifications</li>
                    <li>• Logo usage guidelines</li>
                    <li>• Brand voice and tone guidelines</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Marketing Assets</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Business card design</li>
                    <li>• Letterhead template</li>
                    <li>• Social media profile graphics</li>
                    <li>• Email signature design</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">100+</div>
                    <div className="text-sm text-gray-300">Brands Created</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">98%</div>
                    <div className="text-sm text-gray-300">Client Satisfaction</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">7-14</div>
                    <div className="text-sm text-gray-300">Days Delivery</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">3</div>
                    <div className="text-sm text-gray-300">Revisions Included</div>
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
            <h2 className="text-4xl font-bold mb-6">Perfect For Every Business</h2>
            <p className="text-xl text-gray-300">Brand identity solutions for various industries and business types</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Startups & New Businesses",
                description: "Launch with a strong brand foundation that attracts investors and customers from day one.",
                metrics: ["85% faster market recognition", "67% increase in funding success"]
              },
              {
                title: "Established Companies",
                description: "Rebrand to stay relevant and competitive in evolving markets with modern identity systems.",
                metrics: ["43% improvement in customer loyalty", "52% increase in brand recall"]
              },
              {
                title: "Professional Services",
                description: "Build trust and credibility with sophisticated brand identity that reflects your expertise.",
                metrics: ["78% more qualified leads", "61% higher client retention"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Brand Identity Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We create brand identities that don't just look good—they work strategically to grow your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Strategic Approach", desc: "Every design decision is backed by research and strategy to ensure maximum impact." },
              { icon: TrendingUp, title: "Results-Driven", desc: "Focus on creating brands that drive business growth and customer engagement." },
              { icon: Target, title: "Audience-Focused", desc: "Design specifically for your target audience to maximize resonance and connection." },
              { icon: Zap, title: "Fast Delivery", desc: "Efficient process that delivers high-quality results within your timeline." }
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
            <p className="text-xl text-gray-300">Industry-leading software for creating stunning brand identities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiAdobe, name: "Adobe Creative Suite", desc: "Complete creative toolkit for professional brand design and asset creation." },
              { icon: SiFigma, name: "Figma", desc: "Collaborative design platform for creating and sharing brand concepts with clients." },
              { icon: SiSketch, name: "Sketch", desc: "Vector-based design tool perfect for creating scalable logo and brand assets." },
              { icon: SiCanva, name: "Canva", desc: "User-friendly design platform for creating marketing materials and brand assets." },
              { icon: SiIllustrator, name: "Illustrator", desc: "Industry standard for vector graphics and logo design with precision and flexibility." },
              { icon: SiPhotoshop, name: "Photoshop", desc: "Photo editing and digital design tool for complex brand asset creation." },
              { icon: SiXd, name: "Adobe XD", desc: "UX/UI design platform for creating brand guidelines and digital experiences." },
              { icon: SiInvision, name: "InVision", desc: "Prototyping and collaboration tool for presenting brand concepts to stakeholders." }
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
            <p className="text-xl text-gray-300">Everything you need to know about our brand identity services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="How long does the brand identity design process take?"
              answer="Typically 7-14 business days from project start to final delivery. This includes discovery, strategy development, design creation, and revisions. Rush delivery options are available for urgent projects."
            />
            <FAQItem 
              question="What file formats will I receive for my logo?"
              answer="You'll receive your logo in all essential formats: AI, EPS, PDF, PNG (transparent), JPG, and SVG. We provide high-resolution files suitable for both print and digital use."
            />
            <FAQItem 
              question="How many revision rounds are included?"
              answer="We include 3 rounds of revisions in our standard package. Most clients find this sufficient, but additional revisions can be purchased if needed."
            />
            <FAQItem 
              question="Do you provide trademark services?"
              answer="While we design your logo and brand identity, we don't provide legal trademark services. We recommend consulting with an intellectual property attorney for trademark registration."
            />
            <FAQItem 
              question="Can you work within our existing brand guidelines?"
              answer="Absolutely! We can enhance existing brands or create complementary designs that align with your current brand standards while improving overall cohesion."
            />
            <FAQItem 
              question="What makes a successful brand identity?"
              answer="A successful brand identity combines strategic positioning, memorable visual design, consistent application, and authentic connection with your target audience. It should be distinctive, scalable, and timeless."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Start Your Brand Journey</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to create a brand identity that drives results? Let's discuss your project.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Schedule a Strategy Call
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Get a Project Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}