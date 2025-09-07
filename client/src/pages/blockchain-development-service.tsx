import React, { useState } from "react";
import { Plus, X, Users, TrendingUp, Target, Zap, Link, Shield, Coins, FileText } from "lucide-react";
import { SiEthereum, SiBitcoin, SiSolana, SiPolygon, SiChainlink, SiTether, SiHyperledger, SiMetamask } from "react-icons/si";

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

export function BlockchainDevelopmentService() {
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
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">Smart Contracts</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">DeFi Solutions</span>
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm">NFT Platforms</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Blockchain
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"> Development</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build decentralized applications, smart contracts, and blockchain solutions that revolutionize industries with transparency and security.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Build on Blockchain
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Blockchain Projects
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 rounded-2xl flex items-center justify-center">
                    <Link className="w-16 h-16 text-yellow-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center">
                    <Shield className="w-16 h-16 text-blue-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl flex items-center justify-center">
                    <Coins className="w-16 h-16 text-green-300" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                    <FileText className="w-16 h-16 text-purple-300" />
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
            <h2 className="text-4xl font-bold mb-6">Our Blockchain Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Systematic approach to building secure, scalable blockchain solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Blockchain Strategy",
                description: "Define use cases, choose optimal blockchain networks, and design architecture for your specific needs."
              },
              {
                step: "02", 
                title: "Smart Contract Development",
                description: "Build secure, efficient smart contracts with comprehensive testing and security audits."
              },
              {
                step: "03",
                title: "DApp Development",
                description: "Create user-friendly decentralized applications with seamless blockchain integration."
              },
              {
                step: "04",
                title: "Deployment & Maintenance",
                description: "Deploy to mainnet with ongoing monitoring, updates, and optimization for performance."
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
              <h2 className="text-4xl font-bold mb-8">Complete Blockchain Development</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Smart Contracts & DeFi</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• ERC-20/ERC-721 token development</li>
                    <li>• DeFi protocols and yield farming</li>
                    <li>• Automated market makers (AMM)</li>
                    <li>• Lending and borrowing platforms</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">NFT & Digital Assets</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• NFT marketplace development</li>
                    <li>• Digital collectibles platforms</li>
                    <li>• Royalty and licensing systems</li>
                    <li>• Fractionalized ownership solutions</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Enterprise Blockchain</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Supply chain transparency solutions</li>
                    <li>• Digital identity and verification</li>
                    <li>• Cross-chain interoperability</li>
                    <li>• Enterprise integration services</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">50+</div>
                    <div className="text-sm text-gray-300">Blockchain Projects</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">$50M+</div>
                    <div className="text-sm text-gray-300">Value Secured</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-sm text-gray-300">Security Score</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">10+</div>
                    <div className="text-sm text-gray-300">Blockchain Networks</div>
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
            <h2 className="text-4xl font-bold mb-6">Blockchain Development Success Stories</h2>
            <p className="text-xl text-gray-300">Real-world blockchain solutions changing industries</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "DeFi Lending Platform",
                description: "Built a decentralized lending protocol with $10M+ total value locked and automated liquidation mechanisms.",
                metrics: ["$10M+ TVL", "99.99% uptime"]
              },
              {
                title: "NFT Marketplace",
                description: "Created a gas-efficient NFT marketplace with royalty distribution and cross-chain compatibility.",
                metrics: ["50K+ NFTs traded", "Layer 2 integration"]
              },
              {
                title: "Supply Chain Tracking",
                description: "Developed blockchain solution for pharmaceutical supply chain with immutable tracking and verification.",
                metrics: ["100% traceability", "Regulatory compliance"]
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
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Blockchain Development</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert blockchain development with security, scalability, and innovation at the forefront
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Blockchain Experts", desc: "Certified blockchain developers with deep expertise across multiple networks." },
              { icon: TrendingUp, title: "Scalable Solutions", desc: "Built for growth with layer 2 solutions and cross-chain compatibility." },
              { icon: Target, title: "Security First", desc: "Comprehensive security audits and best practices to protect digital assets." },
              { icon: Zap, title: "Gas Optimization", desc: "Efficient smart contracts designed to minimize transaction costs." }
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
            <h2 className="text-4xl font-bold mb-6">Blockchain Networks & Technologies</h2>
            <p className="text-xl text-gray-300">Multi-chain development across leading blockchain platforms</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: SiEthereum, name: "Ethereum", desc: "Leading smart contract platform with extensive DeFi and NFT ecosystem." },
              { icon: SiBitcoin, name: "Bitcoin", desc: "Original blockchain for secure peer-to-peer transactions and store of value." },
              { icon: SiSolana, name: "Solana", desc: "High-performance blockchain with fast transactions and low fees." },
              { icon: SiPolygon, name: "Polygon", desc: "Layer 2 scaling solution for Ethereum with faster and cheaper transactions." },
              { icon: SiChainlink, name: "Chainlink", desc: "Decentralized oracle network for connecting smart contracts to real-world data." },
              { icon: SiTether, name: "Stablecoin Integration", desc: "Integration with stable cryptocurrencies for price-stable transactions." },
              { icon: SiHyperledger, name: "Hyperledger", desc: "Enterprise-grade blockchain framework for business applications." },
              { icon: SiMetamask, name: "Wallet Integration", desc: "Integration with popular crypto wallets for seamless user experience." }
            ].map((blockchain, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300">
                  <blockchain.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{blockchain.name}</h3>
                <p className="text-sm text-gray-300">{blockchain.desc}</p>
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
            <p className="text-xl text-gray-300">Common questions about our blockchain development services</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="Which blockchain platform should I choose for my project?"
              answer="The choice depends on your specific needs: Ethereum for established DeFi/NFT ecosystems, Solana for high-performance applications, Polygon for cost-effective scaling, or enterprise networks like Hyperledger for business use cases."
            />
            <FAQItem 
              question="How do you ensure smart contract security?"
              answer="We follow security best practices including comprehensive testing, formal verification, third-party audits, bug bounty programs, and continuous monitoring to protect against vulnerabilities and exploits."
            />
            <FAQItem 
              question="What are the costs involved in blockchain development?"
              answer="Costs vary based on complexity, blockchain network, and features required. We provide detailed estimates including development, deployment, gas fees, and ongoing maintenance costs."
            />
            <FAQItem 
              question="Can you help with tokenomics and token distribution?"
              answer="Yes, we assist with token economics design, distribution strategies, vesting schedules, governance mechanisms, and regulatory compliance for token launches."
            />
            <FAQItem 
              question="Do you provide ongoing support after deployment?"
              answer="Absolutely! We offer ongoing support including monitoring, updates, gas optimization, security patches, and feature enhancements to ensure your blockchain solution remains secure and efficient."
            />
            <FAQItem 
              question="How long does blockchain development take?"
              answer="Timeline depends on complexity: simple smart contracts take 2-4 weeks, while comprehensive DApps with custom features can take 8-16 weeks. We provide detailed project timelines during planning."
            />
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Build on Blockchain</h3>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Ready to revolutionize your industry with blockchain? Let's build the future together.</p>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                Get Blockchain Consultation
              </button>
              <button className="w-full px-6 py-3 border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View Blockchain Projects
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}