import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, ShoppingCart, CreditCard, Package, Truck } from "lucide-react";
import { SiShopify, SiWoocommerce, SiMagento, SiBigcommerce, SiStripe, SiPaypal, SiSquare, SiKlarna } from "react-icons/si";

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

export function EcommerceDevelopmentService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Online Stores</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Payment Integration</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Mobile Commerce</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                E-commerce
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Development</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build powerful online stores that convert visitors into customers. From custom shopping experiences to secure payment processing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Launch Your Store
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Store Examples
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <ShoppingCart className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <CreditCard className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-2xl flex items-center justify-center">
                    <Package className="w-16 h-16 text-orange-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <Truck className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our E-commerce Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to conversion - building online stores that drive sales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Store Planning",
                description: "Analyze your products, target market, and business model to design the perfect e-commerce solution."
              },
              {
                step: "02", 
                title: "Platform Development",
                description: "Build your custom online store with advanced features like inventory management and customer accounts."
              },
              {
                step: "03",
                title: "Payment & Security",
                description: "Integrate secure payment gateways and implement SSL certificates for safe transactions."
              },
              {
                step: "04",
                title: "Launch & Optimization",
                description: "Deploy your store and continuously optimize for performance, conversions, and user experience."
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
              <h2 className="text-4xl font-bold mb-8">Complete E-commerce Solution</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Store Development</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Custom store design and branding</li>
                    <li>• Product catalog management</li>
                    <li>• Shopping cart and checkout</li>
                    <li>• Mobile-responsive design</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Payment & Security</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Multiple payment gateway integration</li>
                    <li>• SSL certificate and PCI compliance</li>
                    <li>• Fraud protection systems</li>
                    <li>• Secure customer data handling</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Management Features</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Inventory tracking and alerts</li>
                    <li>• Order management system</li>
                    <li>• Customer relationship tools</li>
                    <li>• Analytics and reporting dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">250+</div>
                    <div className="text-sm text-gray-300">Stores Built</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">$50M+</div>
                    <div className="text-sm text-gray-300">Sales Generated</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime Guarantee</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">3.5%</div>
                    <div className="text-sm text-gray-300">Avg. Conversion Rate</div>
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
            <h2 className="text-4xl font-bold mb-6">E-commerce Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from our e-commerce development projects</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fashion Retailer Growth",
                description: "Increased online sales by 400% with a custom e-commerce platform optimized for mobile shopping.",
                metrics: ["400% sales increase", "2.8s average page load time"]
              },
              {
                title: "B2B Wholesale Platform",
                description: "Built a complex wholesale platform with bulk ordering, custom pricing, and automated invoicing.",
                metrics: ["60% faster order processing", "90% customer satisfaction"]
              },
              {
                title: "Multi-vendor Marketplace",
                description: "Created a marketplace connecting 100+ vendors with advanced commission tracking and analytics.",
                metrics: ["100+ active vendors", "$2M+ monthly transactions"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our E-commerce Development</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional e-commerce solutions that drive sales and grow your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "User-Focused Design", desc: "Intuitive shopping experiences that guide customers from browse to purchase." },
              { icon: TrendingUp, title: "Conversion Optimized", desc: "Every element designed to maximize sales and reduce cart abandonment." },
              { icon: Target, title: "SEO Ready", desc: "Built-in SEO optimization to help your products rank higher in search results." },
              { icon: Zap, title: "Fast Performance", desc: "Optimized for speed to ensure quick loading times and better user experience." }
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
            <h2 className="text-4xl font-bold mb-6">E-commerce Platforms & Payment Solutions</h2>
            <p className="text-xl text-gray-300">Powerful platforms and secure payment systems for your online store</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiShopify, name: "Shopify", desc: "Complete e-commerce platform with built-in hosting, themes, and payment processing." },
              { icon: SiWoocommerce, name: "WooCommerce", desc: "Flexible WordPress-based e-commerce solution with extensive customization options." },
              { icon: SiMagento, name: "Magento", desc: "Enterprise-level e-commerce platform for complex stores with advanced features." },
              { icon: SiBigcommerce, name: "BigCommerce", desc: "Scalable e-commerce platform with built-in features for growing businesses." },
              { icon: SiStripe, name: "Stripe", desc: "Modern payment processing with support for cards, wallets, and international payments." },
              { icon: SiPaypal, name: "PayPal", desc: "Trusted payment gateway with buyer protection and global payment acceptance." },
              { icon: SiSquare, name: "Square", desc: "Unified payment system connecting online and in-person sales channels." },
              { icon: SiKlarna, name: "Klarna", desc: "Buy now, pay later payment solution to increase conversion rates and average order value." }
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
            <p className="text-xl text-gray-300">Common questions about our e-commerce development services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="How long does it take to build an e-commerce store?"
              answer="Typically 4-8 weeks depending on complexity, number of products, and custom features required. Simple stores can be completed in 2-3 weeks, while complex multi-vendor platforms may take 10-12 weeks."
            />
            <FAQItem 
              question="Which e-commerce platform is best for my business?"
              answer="It depends on your needs. Shopify is great for quick setup, WooCommerce for WordPress users, Magento for large catalogs, and custom development for unique requirements. We'll recommend the best fit."
            />
            <FAQItem 
              question="Do you provide ongoing maintenance and support?"
              answer="Yes, we offer comprehensive maintenance packages including security updates, backups, performance optimization, and 24/7 technical support to keep your store running smoothly."
            />
            <FAQItem 
              question="Can you integrate with my existing inventory system?"
              answer="Absolutely! We can integrate with most inventory management systems, accounting software, and ERP solutions to streamline your operations and reduce manual work."
            />
            <FAQItem 
              question="How do you ensure my store is secure?"
              answer="We implement SSL certificates, PCI compliance, secure payment gateways, regular security audits, and follow e-commerce security best practices to protect customer data and transactions."
            />
            <FAQItem 
              question="What's included in the development cost?"
              answer="Our packages include store design, development, payment integration, security setup, mobile optimization, basic SEO, and training. Additional features like custom integrations are quoted separately."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Launch Your Store</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to start selling online? Let's build an e-commerce store that converts.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get Store Development Quote
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View Our E-commerce Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}