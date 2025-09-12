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
  Link as LinkIcon, 
  CheckCircle, 
  Shield, 
  Coins, 
  Search, 
  FileText,
  Users,
  Zap,
  Settings,
  Globe,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Phone,
  MessageCircle,
  MapPin,
  Lock
} from "lucide-react";
import { SiEthereum, SiBitcoin, SiSolana, SiPolygon, SiChainlink, SiTether, SiHyperledger, SiMetamask } from "react-icons/si";

// FAQ Item Component with improved accessibility
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-700/15 backdrop-blur-xs border border-purple-400/30 group hover:bg-purple-500/25 transition-all duration-300">
      <button 
        className="flex items-start justify-between cursor-pointer w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <p className="text-white font-medium leading-relaxed pr-4">{question}</p>
        <div className="w-8 h-8 bg-purple-500/40 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/60 transition-all duration-300">
          <span className={`text-white text-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
        </div>
      </button>
      <div 
        id={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className={`mt-4 text-purple-100/70 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {answer}
      </div>
    </div>
  );
}

export default function BlockchainDevelopmentService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Blockchain Development Services",
    "description": "Build decentralized applications, smart contracts, and blockchain solutions that revolutionize industries",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "Blockchain Development"
  };

  return (
    <>
      <SEOHead
        title="Blockchain Development Services - Smart Contracts & DApps"
        description="Build decentralized applications, smart contracts, and blockchain solutions that revolutionize industries with transparency, security, and decentralization."
        keywords="blockchain development, smart contracts, DeFi, NFT development, Web3, Ethereum, decentralized applications"
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
                  Blockchain Development<br />
                  <span className="text-purple-300">Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl">
                  At INFINIQODE, we build decentralized applications, smart contracts, and blockchain 
                  solutions that revolutionize industries with transparency and security. Our team 
                  creates Web3 applications that empower users. From DeFi platforms to NFT marketplaces, 
                  we deliver blockchain solutions that shape the future of digital interaction.
                </p>
              </div>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Smart Contracts",
                  "DeFi Solutions", 
                  "NFT Platforms",
                  "Web3 Integration"
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
                      Build on Blockchain
                    </Button>
                  }
                  title="Ready to Start Your Blockchain Project?"
                  description="Let's discuss your blockchain needs and create decentralized solutions that innovate."
                  defaultService="Blockchain Development"
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
                {/* Large Blockchain Cube */}
                <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 opacity-80"></div>
                
                {/* Shield Diamond */}
                <div className="absolute top-32 left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-45 shadow-xl hover:rotate-12 transition-transform duration-300 opacity-90"></div>
                
                {/* Coin Hexagon */}
                <div className="absolute top-8 left-16 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-2xl transform rotate-6 hover:-rotate-6 transition-transform duration-300 opacity-75"></div>
                
                {/* Link Cube */}
                <div className="absolute bottom-24 right-16 w-18 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl transform -rotate-12 hover:rotate-3 transition-transform duration-300 opacity-85"></div>
                
                {/* Smart Contract Square */}
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-md shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-300 opacity-70"></div>
                
                {/* Large Glass Prism */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 via-yellow-300/30 to-purple-400/40 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                
                {/* Small Transparent Cube */}
                <div className="absolute bottom-16 left-20 w-12 h-12 bg-gradient-to-br from-white/10 via-blue-200/20 to-transparent backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transform -rotate-6 hover:rotate-12 transition-transform duration-300"></div>
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
              { icon: Settings, title: "Architecture & Planning", step: "Step 1", desc: "Design blockchain architecture, select optimal networks, and plan smart contract interactions for scalable solutions." },
              { icon: Shield, title: "Smart Contract Development", step: "Step 2", desc: "Build secure, audited smart contracts with comprehensive testing and optimization for gas efficiency." },
              { icon: LinkIcon, title: "DApp Integration", step: "Step 3", desc: "Develop intuitive frontend interfaces and integrate Web3 functionality for seamless user experience." },
              { icon: Globe, title: "Deployment & Security", step: "Step 4", desc: "Deploy to mainnet with security audits, monitoring systems, and ongoing maintenance for reliability." }
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
                What Our Blockchain Development<br />
                Service Includes
              </h2>
              
              <p className="text-lg text-purple-100/90 leading-relaxed">
                Our comprehensive blockchain development service is designed to help businesses of all
                sizes leverage decentralized technology for innovation. We work closely with your
                team to understand your unique vision and implement solutions that
                deliver transparency, security, and decentralized value creation.
              </p>
              
              {/* Service Features */}
              <div className="space-y-6">
                {[
                  "Smart Contract Development & Auditing",
                  "DeFi & NFT Platform Creation", 
                  "Web3 Integration & Wallet Connection",
                  "Blockchain Consulting & Architecture"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item}</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        We create blockchain solutions that are secure, scalable, and user-friendly with 
                        comprehensive auditing and optimized performance for real-world adoption.
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
                    {/* Blockchain Mock */}
                    <div className="w-32 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-xl mx-auto flex items-center justify-center border border-yellow-300/30">
                      <div className="w-24 h-14 bg-white/20 rounded-sm flex items-center justify-center">
                        <LinkIcon className="icon-white text-xl md:text-2xl" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-blue-400 rounded-full shadow-lg"></div>
                      <div className="w-6 h-6 bg-green-400 rounded-md shadow-lg"></div>
                      <div className="w-10 h-6 bg-purple-400 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">100+</div>
                  <p className="text-purple-100/80 text-sm">Smart Contracts</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">0</div>
                    <p className="text-xs text-purple-100/60">Security Issues</p>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-white mb-1">$50M+</div>
                  <p className="text-purple-100/80 text-sm">Value Secured</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="text-xl font-bold text-purple-200">15+</div>
                    <p className="text-xs text-purple-100/60">Networks</p>
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
            <h2 className="text-5xl font-bold text-white">All Blockchain Development Usecase</h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Discover how our blockchain development services have revolutionized businesses
              across various industries with decentralized solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "DeFi Trading Platform", subtitle: "$10M+ TVL with Advanced Features", desc: "Built a comprehensive DeFi platform with yield farming, liquidity pools, and governance features securing $10M+ TVL with zero security incidents." },
              { title: "NFT Marketplace", subtitle: "10K+ Unique Collectors & Artists", desc: "Created a user-friendly NFT marketplace with lazy minting, royalty distribution, and social features serving 10K+ active users daily." },
              { title: "Supply Chain Transparency", subtitle: "End-to-End Product Tracking", desc: "Developed blockchain solution for supply chain transparency tracking products from origin to consumer with immutable audit trails." }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full rounded-2xl md:rounded-3xl glass-card shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="h-48 bg-gradient-to-br from-yellow-800/40 to-yellow-900/60 p-4 relative">
                    <div className="bg-black/40 rounded-lg h-full p-4 backdrop-blur-sm">
                      {/* Mock Dashboard Content */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-yellow-200">
                          <span>TVL</span>
                          <span>$10M+</span>
                        </div>
                        <div className="h-20 bg-gradient-to-r from-yellow-500/30 to-green-500/30 rounded relative">
                          {/* Mock Chart Bars */}
                          <div className="absolute bottom-0 left-2 w-1 bg-yellow-400 rounded-t" style={{ height: '60%' }}></div>
                          <div className="absolute bottom-0 left-6 w-1 bg-yellow-400 rounded-t" style={{ height: '80%' }}></div>
                          <div className="absolute bottom-0 left-10 w-1 bg-yellow-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="absolute bottom-0 left-14 w-1 bg-yellow-400 rounded-t" style={{ height: '90%' }}></div>
                          <div className="absolute bottom-0 left-18 w-1 bg-yellow-400 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                        <div className="text-xs text-yellow-300">$10M+ TVL with zero security incidents</div>
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
              Our comprehensive blockchain development service combines cutting-edge decentralized technology with practical business applications to create 
              solutions that drive innovation and transparency. We specialize in developing smart contracts, DeFi protocols, NFT platforms, and Web3 
              applications across multiple blockchain networks including Ethereum, Polygon, and Solana. From tokenomics design to security auditing, 
              our blockchain solutions are built with rigorous testing, comprehensive documentation, and ongoing support to ensure reliability and scalability 
              in the decentralized ecosystem.
            </p>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: LinkIcon, title: "Smart", subtitle: "Contracts" },
              { icon: Coins, title: "DeFi", subtitle: "Protocols" },
              { icon: Shield, title: "Security", subtitle: "Auditing" },
              { icon: Lock, title: "Web3", subtitle: "Integration" }
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
              { icon: SiEthereum, name: "Ethereum", desc: "Leading blockchain platform for smart contracts and decentralized applications with robust ecosystem." },
              { icon: SiBitcoin, name: "Bitcoin", desc: "Original cryptocurrency network for secure, peer-to-peer digital transactions and value storage." },
              { icon: SiSolana, name: "Solana", desc: "High-performance blockchain offering fast, low-cost transactions for scalable applications." },
              { icon: SiPolygon, name: "Polygon", desc: "Layer 2 scaling solution for Ethereum providing faster and cheaper transactions." },
              { icon: SiChainlink, name: "Chainlink", desc: "Decentralized oracle network connecting smart contracts with real-world data feeds." },
              { icon: SiTether, name: "Stablecoins", desc: "Digital currencies pegged to stable assets for reliable value exchange in DeFi ecosystems." },
              { icon: SiHyperledger, name: "Hyperledger", desc: "Enterprise-grade blockchain framework for building scalable business applications." },
              { icon: SiMetamask, name: "Web3 Wallets", desc: "Integration with popular crypto wallets for seamless user authentication and transactions." }
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
            <p className="text-xl text-purple-100/90">Common questions about our blockchain development services</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="Which blockchain networks do you develop on?"
              answer="We develop on major networks including Ethereum, Polygon, Solana, Binance Smart Chain, and Hyperledger. We help you choose the best network based on your specific requirements for speed, cost, and functionality."
            />
            <FAQItem 
              question="How do you ensure smart contract security?"
              answer="We follow industry best practices including comprehensive testing, formal verification, security audits by third-party firms, and gas optimization. All contracts undergo rigorous peer review before deployment."
            />
            <FAQItem 
              question="What's the typical timeline for blockchain projects?"
              answer="Simple smart contracts take 4-8 weeks, while complex DeFi platforms or NFT marketplaces can take 12-24 weeks. Timeline depends on features, security requirements, and integration complexity."
            />
            <FAQItem 
              question="Do you provide ongoing support after deployment?"
              answer="Yes, we offer comprehensive post-deployment support including monitoring, updates, security patches, feature enhancements, and assistance with network upgrades or migrations."
            />
            <FAQItem 
              question="Can you integrate with existing business systems?"
              answer="Absolutely! We specialize in creating blockchain solutions that integrate seamlessly with existing databases, APIs, and business processes through hybrid architectures and custom middleware."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}