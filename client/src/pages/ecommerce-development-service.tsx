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
  ShoppingCart, 
  CheckCircle, 
  CreditCard, 
  Package, 
  Search, 
  Truck,
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
  Mail
} from "lucide-react";
import { SiShopify, SiWoocommerce, SiStripe, SiPaypal, SiMagento, SiBigcommerce, SiSquare, SiKlarna } from "react-icons/si";

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

export default function EcommerceDevelopmentService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-commerce Development Services",
    "description": "Build powerful online stores that convert visitors into customers with secure payment processing",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "E-commerce Development"
  };

  return (
    <>
      <SEOHead
        title="E-commerce Development Services - Online Store Development"
        description="Build powerful online stores that convert visitors into customers. From custom shopping experiences to secure payment processing and inventory management."
        keywords="ecommerce development, online store, shopping cart, payment integration, Shopify, WooCommerce"
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
                  E-commerce Development<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we create powerful online stores that convert visitors into customers. 
                  Our team specializes in building secure, scalable e-commerce solutions that drive sales 
                  and grow your business. From custom shopping experiences to payment integration 
                  strategies, we deliver results that exceed expectations.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Online Stores",
                  "Payment Integration", 
                  "Inventory Management",
                  "Mobile Commerce"
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
                      Launch Your Store
                    </Button>
                  }
                  title="Ready to Start Your E-commerce Project?"
                  description="Let's discuss your online store needs and create a custom solution that drives sales."
                  defaultService="E-commerce Development"
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
                {/* Large Shopping Cart */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Credit Card Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Package Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Payment Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Delivery Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-green-300/30 to-blue-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
                {/* Small Transparent Cube */}
                <div className="absolute bottom-16 left-20 w-12 h-12 bg-gradient-to-br from-white/10 via-orange-200/20 to-transparent backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transform -rotate-6 hover:rotate-12 transition-transform duration-300"></div>
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
              { icon: Settings, title: "Store Planning", step: "Step 1", desc: "Analyze your products, target market, and business model to design the perfect e-commerce solution that drives sales and customer satisfaction." },
              { icon: ShoppingCart, title: "Platform Development", step: "Step 2", desc: "Build your custom online store with advanced features like inventory management, customer accounts, and seamless shopping experiences." },
              { icon: CreditCard, title: "Payment & Security", step: "Step 3", desc: "Integrate secure payment gateways and implement SSL certificates for safe transactions with comprehensive fraud protection systems." },
              { icon: Globe, title: "Launch & Optimization", step: "Step 4", desc: "Deploy your store and continuously optimize for performance, conversions, and user experience with ongoing support and maintenance." }
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
                What Our E-commerce Development<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive e-commerce development service is designed to help businesses of all
                sizes create powerful online stores that convert visitors into customers. We work closely with your
                team to understand your unique requirements and implement solutions that
                drive real business growth.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "Custom Store Design & Branding",
                  "Payment Gateway Integration", 
                  "Inventory Management System",
                  "Mobile Commerce Optimization"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We build secure, scalable e-commerce solutions with advanced features 
                        that enhance customer experience and maximize sales conversion.
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
                    {/* Shopping Cart Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-green-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <ShoppingCart className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-blue-400 rounded-full shadow-lg"></div>
                      <div className="w-6 h-6 bg-orange-400 rounded-md shadow-lg"></div>
                      <div className="w-10 h-6 bg-purple-400 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">250+</div>
                  <p className="text-purple-100/80 text-sm">Stores Built</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">3.5%</div>
                    <p className="text-xs text-purple-100/60">Avg Conversion</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">$50M+</div>
                  <p className="text-purple-100/80 text-sm">Sales Generated</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">99.9%</div>
                    <p className="text-xs text-purple-100/60">Uptime</p>
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
            <h2 className="text-5xl font-bold text-white">All E-commerce Development Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our e-commerce development services have transformed businesses
              across various industries with powerful online stores.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fashion Retailer", subtitle: "400% Sales Increase with Mobile Commerce", desc: "Custom e-commerce platform with mobile-first design increased online sales by 400% while reducing cart abandonment by 60%." },
              { title: "B2B Wholesale", subtitle: "Automated Bulk Ordering & Pricing", desc: "Built complex wholesale platform with bulk ordering, custom pricing tiers, and automated invoicing for streamlined operations." },
              { title: "Multi-vendor Marketplace", subtitle: "100+ Vendors with Commission Tracking", desc: "Created marketplace connecting 100+ vendors with advanced commission tracking, analytics, and $2M+ monthly transactions." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-green-800/40 to-green-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-green-200">
                          <span>Sales</span>
                          <span>68%</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-green-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-green-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-green-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-green-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-green-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-green-300">400% sales boost with optimized store</div>
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
              Our comprehensive e-commerce development service combines cutting-edge technology with proven business strategies to create online stores that 
              convert visitors into loyal customers. We specialize in building secure, scalable platforms with advanced features like inventory management, 
              multi-payment gateway integration, and mobile-responsive designs. From small boutiques to large enterprise marketplaces, our solutions are 
              tailored to meet your specific business needs while ensuring optimal performance, security, and user experience across all devices.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: ShoppingCart, title: "Custom", subtitle: "Online Stores" },
              { icon: CreditCard, title: "Secure", subtitle: "Payment Processing" },
              { icon: Package, title: "Inventory", subtitle: "Management" },
              { icon: Truck, title: "Order", subtitle: "Fulfillment" }
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
              { icon: SiShopify, name: "Shopify", desc: "Complete e-commerce platform with built-in hosting, themes, and payment processing for quick store setup." },
              { icon: SiWoocommerce, name: "WooCommerce", desc: "Flexible WordPress-based e-commerce solution with extensive customization options and plugins." },
              { icon: SiMagento, name: "Magento", desc: "Enterprise-level e-commerce platform for complex stores with advanced features and scalability." },
              { icon: SiBigcommerce, name: "BigCommerce", desc: "Scalable e-commerce platform with built-in features for growing businesses and global reach." },
              { icon: SiStripe, name: "Stripe", desc: "Modern payment processing with support for cards, wallets, and international payments worldwide." },
              { icon: SiPaypal, name: "PayPal", desc: "Trusted payment gateway with buyer protection and global payment acceptance capabilities." },
              { icon: SiSquare, name: "Square", desc: "Unified payment system connecting online and in-person sales channels for seamless operations." },
              { icon: SiKlarna, name: "Klarna", desc: "Buy now, pay later payment solution to increase conversion rates and average order value significantly." }
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
            <p className="text-xl text-purple-100/90">Common questions about our e-commerce development services</p>
          </div>
          
          <div className="space-y-6">
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
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}