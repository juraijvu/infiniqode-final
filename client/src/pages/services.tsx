import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { ContactPopup } from "@/components/contact-popup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Rocket } from "lucide-react";
import type { Service } from "@shared/schema";

export default function Services() {
{/*   const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  }); */}

  return (
    <>
      <SEOHead
        title="Our Services"
        description="professional digital services including web development, SaaS development, digital marketing, mobile development, and SEO optimization. Transform your business with our expert solutions."
        keywords="web development, SaaS development, digital marketing, mobile apps, SEO, React TypeScript, Python Flask"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="hero-glow top-20 left-20"></div>
        <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            professional digital solutions to transform your business and drive real results
          </p>
          <ContactPopup 
            trigger={
              <Button className="glass-button px-8 py-4 text-lg" data-testid="button-get-started">
                <Rocket className="mr-2 h-5 w-5" />
                Get Started Today
              </Button>
            }
            title="Ready to Transform Your Business?"
            description="Let's discuss your digital transformation goals and create a solution that drives real results."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
         {/*  {isLoading ? ( 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[...Array(4)].map((_, i) => (
                <GlassCard key={i} className="p-8 animate-pulse">
                  <div className="w-16 h-16 bg-muted rounded-lg mb-6"></div>
                  <div className="h-8 bg-muted rounded mb-4"></div>
                  <div className="h-24 bg-muted rounded mb-6"></div>
                  <div className="h-6 bg-muted rounded mb-4"></div>
                  <div className="space-y-2 mb-8">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="h-4 bg-muted rounded"></div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="h-4 bg-muted rounded w-3/4"></div>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
         ) : (  */} 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/*  {services.map((service, index) => (*/} 
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Web Development Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">Infiniqode stands out as a leading provider of digital services
                    , specializing in cutting-edge web development services that blend creativity with technical excellence. 
                    Our process ensures your website is not just visually stunning but also optimized for speed, security, 
                    and search engines. With years of experience in full-stack development, 
                    we help businesses like yours convert visitors into loyal customers.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/web-development">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Web Development Services`}
                      description={`Interested in our web development services? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Web Development Services"
                    />
                  </div>
                </GlassCard>

                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Mobile App Development Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we create native and cross-platform mobile 
                    applications that engage users and drive business growth. Our team delivers apps that perform flawlessly 
                    across all devices. From innovative concept to successful App Store deployment, we turn your 
                    vision into reality with cutting-edge mobile solutions.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/mobile-app-development">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Mobile App Development Services`}
                      description={`Interested in our mobile app development services? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Mobile App Development Services"
                    />
                  </div>
                </GlassCard>
                
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">API Development Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we build robust, scalable APIs that power 
                    modern applications with secure, high-performance backend services. Our team creates seamless integrations 
                    and microservices architectures. From REST APIs to GraphQL endpoints, 
                    we deliver backend solutions that scale with your business.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/api-development">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for API Development Services`}
                      description={`Interested in our API development services? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="API Development Services"
                    />
                  </div>
                </GlassCard>
                  <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">SaaS Solutions Development</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we believe in the transformative power of 
                    scalable software solutions. Our team of experts is dedicated to helping businesses like yours thrive in 
                    the cloud-first digital landscape. From MVP development to enterprise-grade platforms solutions, 
                    we are committed to delivering results that exceed expectations.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/saas-solutions">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for SaaS Solutions Development`}
                      description={`Interested in our SaaS solutions development ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="SaaS Solutions Development"
                    />
                  </div>
                </GlassCard>
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">E-commerce Development Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we create powerful online stores that convert 
                    visitors into customers. Our team specializes in building secure, scalable e-commerce solutions that drive
                     sales and grow your business. From custom shopping experiences to payment 
                    integration strategies, we deliver results that exceed expectations.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/ecommerce-development">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for E-commerce Development Services`}
                      description={`Interested in our E-commerce development services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="E-commerce Development Services"
                    />
                  </div>
                </GlassCard>
                                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Blockchain Development Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we build decentralized applications, 
                    smart contracts, and blockchain solutions that revolutionize industries with transparency and security. 
                    Our team creates Web3 applications that empower users. From DeFi platforms to NFT marketplaces,
                     we deliver blockchain solutions that shape the future of digital interaction.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/blockchain-development">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Blockchain Development Services`}
                      description={`Interested in our Blockchain development services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Blockchain Development Services"
                    />
                  </div>
                </GlassCard>
                  <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">AI & Machine Learning Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we harness the power of artificial intelligence
                     to transform business operations and unlock new possibilities. Our team creates intelligent solutions that 
                    learn, adapt, and evolve. 
                    From predictive analytics to automated decision-making systems, we deliver AI that drives real business value.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/ai-machine-learning">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for AI & Machine Learning Services`}
                      description={`Interested in our AI & Machine Learning services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="AI & Machine Learning Services"
                    />
                  </div>
                </GlassCard>
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Data Analytics Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we transform raw data into actionable insights 
                    that drive strategic business decisions and competitive advantages. Our team creates powerful analytics
                     solutions that reveal hidden opportunities. From business intelligence to predictive modeling,
                     we deliver data analytics that accelerate your business growth.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/data-analytics">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Data Analytics Services`}
                      description={`Interested in our Data Analytics services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Data Analytics Services"
                    />
                  </div>
                </GlassCard>
                                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Cloud Migration Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">Seamlessly migrate your infrastructure to the
                     cloud with minimal downtime,
                     enhanced security, and improved scalability.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/cloud-migration">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Cloud Migration Services`}
                      description={`Interested in our Cloud Migration services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Cloud Migration Services"
                    />
                  </div>
                </GlassCard>
                 <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">DevOps Automation Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">Streamline development workflows with automated 
                    CI/CD pipelines, infrastructure as
                     code, and monitoring solutions that accelerate delivery.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/devops-automation">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for DevOps Automation Services`}
                      description={`Interested in our DevOps Automation services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="DevOps Automation Services"
                    />
                  </div>
                </GlassCard>
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Cybersecurity Solutions</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we protect your business from cyber threats with
                     professional security solutions that safeguard your data, systems, and reputation. Our team provides advanced 
                     threat detection and prevention. From security audits to compliance frameworks, 
                    we deliver cybersecurity solutions that keep your business secure.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/cybersecurity">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Cybersecurity Solutions`}
                      description={`Interested in our Cybersecurity solutions ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Cybersecurity solutions"
                    />
                  </div>
                </GlassCard>
                          <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Quality Assurance</h2>
                  <p className="text-muted-foreground mb-6 text-lg">Ensure flawless software delivery with professional 
                    testing strategies that catch 
                    bugs early and maintain high-quality user experiences.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/quality-assurance">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Quality Assurance`}
                      description={`Interested in our Quality Assurance ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Quality Assurance"
                    />
                  </div>
                </GlassCard>
                                  <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Digital Marketing Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we believe in the transformative power of 
                    data-driven marketing solutions. Our team of experts is dedicated to helping businesses like yours thrive 
                    in the competitive digital landscape. From strategic SEO optimization to performance-driven advertising campaigns, 
                    we are committed to delivering results that exceed expectations.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/digital-marketing">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Digital Marketing Services`}
                      description={`Interested in our Digital Marketing services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Digital Marketing services"
                    />
                  </div>
                </GlassCard>
                  
                    <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">SEO Optimization Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we boost your search engine rankings and 
                    drive organic traffic with professional SEO strategies that deliver measurable results. Our team creates 
                    data-driven optimization campaigns. From technical SEO to content strategy, we deliver 
                    search engine optimization that increases your online visibility.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/seo-optimization">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for SEO Optimization Services`}
                      description={`Interested in our SEO Optimization services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="SEO Optimization services"
                    />
                  </div>
                </GlassCard>
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Content Marketing Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we create compelling content that engages 
                    your audience, builds trust, and drives conversions across all marketing channels. Our team crafts strategic
                     content that resonates with your audience. From blog writing to video production, we deliver content marketing that 
                    amplifies your brand and drives measurable results.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/content-marketing">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Content Marketing Services`}
                      description={`Interested in our Content Marketing services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Content Marketing services"
                    />
                  </div>
                </GlassCard>
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Email Marketing Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we build lasting relationships and 
                    drive revenue through strategic email marketing campaigns. Our team creates personalized experiences 
                    that convert subscribers into loyal customers. From automation workflows to advanced 
                    segmentation strategies, we deliver results that exceed expectations.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/email-marketing">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Email Marketing Services`}
                      description={`Interested in our Email Marketing services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Email Marketing services"
                    />
                  </div>
                </GlassCard>
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Social Media Management Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we build engaged communities and drive 
                    meaningful interactions across all social platforms with professional social media management services. 
                    Our team creates authentic social experiences. From content creation to community management, we deliver 
                    social media 
                    strategies that build brand loyalty and drive conversions.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/social-media-management">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Social Media Management Services`}
                      description={`Interested in our social media management services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Social Media Management services"
                    />
                  </div>
                </GlassCard>
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Paid Advertising Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we drive immediate traffic and conversions 
                    with strategic paid advertising campaigns across Google, Facebook, LinkedIn, and more. Our team creates 
                    high-performing ad campaigns that deliver results. From PPC management to social advertising, we deliver 
                    paid advertising solutions that maximize ROI and accelerate growth.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/paid-advertising">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Paid Advertising Services`}
                      description={`Interested in our Paid Advertising services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Paid Advertising services"
                    />
                  </div>
                </GlassCard>
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Marketing Automation Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we scale your marketing efforts with 
                    intelligent automation that nurtures leads, personalizes experiences, and drives conversions on autopilot.
                     Our team creates sophisticated marketing workflows. From lead nurturing to personalization, 
                    we deliver automation solutions that maximize efficiency and ROI.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/marketing-automation">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Marketing Automation Services`}
                      description={`Interested in our Marketing Automation services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Marketing Automation services"
                    />
                  </div>
                </GlassCard>
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">UI/UX Design Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we create intuitive, beautiful user 
                    experiences that delight users and drive business results through research-driven design. Our team 
                    crafts digital experiences that users love. From user research to interactive prototypes, we deliver design 
                    solutions that enhance usability and increase conversions.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/ui-ux-design">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for UI/UX Design Services`}
                      description={`Interested in our UI/UX Design services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="UI/UX Design services"
                    />
                  </div>
                </GlassCard>
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Brand Identity Design Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we create memorable brand identities 
                    that resonate with your audience and drive business growth. Our team crafts distinctive visual identities 
                    that tell your story. From logo design to complete brand guidelines, we deliver brand identity solutions 
                    that establish strong market presence and authentic connections.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/brand-identity">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Brand Identity Design Services`}
                      description={`Interested in our Brand Identity Design services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Brand Identity Design services"
                    />
                  </div>
                </GlassCard>
                <GlassCard className="p-8 hover:scale-105 transition-all duration-300">
                  {/*<div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <span className="text-3xl" role="img" aria-label={service.name}>{service.icon}</span>
                  </div>*/}
                  
                  <h2 className="text-3xl font-bold mb-4">Business Consulting Services</h2>
                  <p className="text-muted-foreground mb-6 text-lg">At INFINIQODE, we provide strategic business consulting that 
                    transforms operations, accelerates growth, and drives sustainable competitive advantages. Our team delivers 
                    expert guidance for business transformation. From strategy development to process optimization, 
                    we deliver consulting solutions that drive measurable business results.</p>
                  
                 {/* {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}  */}

                {/*<div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}  

              {/*  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>*/}  

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/business-consulting">
                      <Button className="glass-button flex-1" >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <ContactPopup 
                      trigger={
                        <Button variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white flex-1 transition-all duration-300" >
                          Get Quote
                        </Button>
                      }
                      title={`Get a Quote for Business Consulting Services`}
                      description={`Interested in our Business Consulting services ? Let's discuss your project requirements and provide a tailored quote.`}
                      defaultService="Business Consulting services"
                    />
                  </div>
                </GlassCard>
             {/* ))} */}
            </div>
        {/*  )} */}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we deliver exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation."
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Our team develops a professional strategy and project roadmap tailored to your specific needs and objectives."
              },
              {
                step: "03",
                title: "Development",
                description: "We build your solution using cutting-edge technologies and best practices, with regular updates and feedback loops."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "After thorough testing, we launch your project and provide ongoing support and maintenance to ensure continued success."
              }
            ].map((phase, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
