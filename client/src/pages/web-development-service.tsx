import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { ContactPopup } from "@/components/contact-popup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Code, 
  CheckCircle, 
  Smartphone, 
  Database, 
  Search, 
  Palette,
  Users,
  Zap,
  Settings,
  Globe,
  ArrowRight,
  Shield,
  Star,
  TrendingUp,
  Target
} from "lucide-react";
import { SiReact, SiNodedotjs, SiPostgresql, SiTailwindcss } from "react-icons/si";

export default function WebDevelopmentService() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional responsive websites and web applications built with modern technologies",
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": "Web Development"
  };

  return (
    <>
      <SEOHead
        title="Web Development Services - Professional Website Development"
        description="Professional responsive websites and web applications built with modern technologies. Mobile-first design, SEO-friendly, and optimized for performance."
        keywords="web development, responsive design, mobile-first, SEO optimization, custom websites"
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section - Clean & Strategic */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/10 overflow-hidden">
        {/* Clean Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-12">
            {/* Strategic Title */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
                Web Development<br />
                Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
                At DigitalCraft, we believe in the transformative power of digital solutions. Our team  
                of experts is dedicated to helping businesses like yours thrive in the fast-paced 
                digital landscape. From captivating web design to data-driven development 
                strategies, we are committed to delivering results that exceed expectations.
              </p>
            </div>
            
            {/* Strategic Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto py-16">
              {[
                { icon: Database, title: "Backend Development", desc: "Scalable server architecture" },
                { icon: Palette, title: "Frontend Design", desc: "User-centered interfaces" },
                { icon: Globe, title: "Web Applications", desc: "Full-stack solutions" },
                { icon: Smartphone, title: "Mobile Optimization", desc: "Responsive experiences" }
              ].map((feature, index) => (
                <div key={index} className="group text-center space-y-4">
                  {/* Glass Icon Container */}
                  <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl backdrop-blur-xl border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <feature.icon className="text-primary text-2xl md:text-3xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <ContactPopup 
                trigger={
                  <Button className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-2xl" data-testid="button-start-project">
                    Get Started
                  </Button>
                }
                title="Ready to Start Your Web Development Project?"
                description="Let's discuss your web development needs and create a custom solution that drives results."
                defaultService="Web Development"
              />
              <Button variant="outline" className="px-12 py-6 text-lg font-semibold border-2 border-primary/30 text-primary hover:bg-primary/10" data-testid="button-schedule-call">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Process Section */}
      <section className="py-32 relative bg-gradient-to-b from-background/95 via-muted/5 to-background/95">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background/80 to-accent/5 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Settings, title: "Build Strategy Consulting", step: "Step 1", desc: "Strategic planning and technical consultation to define project requirements and architecture." },
              { icon: Palette, title: "Design Interactive Layouts", step: "Step 2", desc: "User-centered design process creating intuitive and engaging user experiences." },
              { icon: Code, title: "Development Web Application", step: "Step 3", desc: "Full-stack development using modern technologies and best practices." },
              { icon: Globe, title: "Deployment & Launching", step: "Step 4", desc: "Seamless deployment with testing, optimization, and performance monitoring." }
            ].map((item, index) => (
              <div key={index} className="group">
                {/* Glass Card */}
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-xl border border-white/10 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  
                  <div className="relative z-10 text-center space-y-6">
                    {/* Strategic Icon */}
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl border border-white/20">
                      <item.icon className="text-white text-3xl" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground leading-tight">{item.title}</h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    
                    {/* Step Badge */}
                    <div className="pt-4">
                      <Badge className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30 font-semibold">
                        {item.step}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Service Includes Section */}
      <section className="py-32 relative bg-gradient-to-br from-background/98 via-muted/8 to-background/98">
        {/* Clean Glass Background */}
        <div className="absolute inset-0 backdrop-blur-sm border-y border-white/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-background/60 to-accent/8"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Strategic Content */}
            <div className="space-y-10">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
                What Our Web Development Integration<br />
                Service Includes
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our comprehensive web development service is designed to help businesses of all
                sizes harness the power of modern technology. We work closely with your
                team to understand your unique challenges and implement web solutions that
                drive real business value.
              </p>
              
              {/* Strategic Features */}
              <div className="space-y-8">
                {[
                  { title: "Needs Assessment & Strategy", desc: "We analyze your business processes and identify opportunities where technology can create the most impact.", icon: Target },
                  { title: "Custom Development & Implementation", desc: "Tailored solutions built with modern frameworks and cutting-edge technologies for optimal performance.", icon: Code },
                  { title: "Testing & Quality Assurance", desc: "Comprehensive testing protocols ensuring reliability, security, and exceptional user experience.", icon: Shield },
                  { title: "Deployment & Maintenance", desc: "Seamless deployment with ongoing support, monitoring, and optimization for continuous improvement.", icon: TrendingUp }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-background/60 to-muted/10 backdrop-blur-sm border border-white/10 hover:border-primary/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Strategic Stats & Visual */}
            <div className="space-y-8">
              {/* Image Placeholder */}
              <div className="relative h-64 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto">
                      <Globe className="text-white text-3xl" />
                    </div>
                    <p className="text-muted-foreground font-medium">Web Development Showcase</p>
                  </div>
                </div>
              </div>
              
              {/* Strategic Statistics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-background/80 to-primary/5 backdrop-blur-xl border border-white/10 shadow-xl">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">70%+</div>
                  <p className="text-muted-foreground mb-4">Search Popularity</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="text-2xl font-bold text-primary">4.5x</div>
                    <p className="text-sm text-muted-foreground">Interactive</p>
                  </div>
                </div>
                
                <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-background/80 to-accent/5 backdrop-blur-xl border border-white/10 shadow-xl">
                  <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3">100%</div>
                  <p className="text-muted-foreground mb-4">User Oriented App</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="text-2xl font-bold text-accent">5x</div>
                    <p className="text-sm text-muted-foreground">Higher Intent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 bg-gradient-to-b from-background/95 via-muted/8 to-background/95 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-background/70 to-primary/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">All Web Development Usecase</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our web development services have transformed businesses
              across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-background/90 to-muted/20 backdrop-blur-xl border border-white/10 shadow-2xl group-hover:shadow-3xl transition-all duration-300 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">Leads Productivity</h3>
                    <p className="text-primary font-semibold">
                      Leads Generation and Quality of Leads
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Using modern web technologies to create conversion-focused
                      websites, increasing lead generation by 45% while
                      improving user engagement and retention.
                    </p>
                  </div>
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300">
                    View Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-32 relative bg-gradient-to-br from-background/98 via-muted/6 to-background/98">
        <div className="absolute inset-0 backdrop-blur-sm border-y border-white/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/6 via-background/70 to-primary/6"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Service Details:</h2>
          
          {/* Strategic Content Layout */}
          <div className="space-y-12">
            <div className="p-10 rounded-3xl bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-xl border border-white/10 shadow-2xl">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge
                technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web
                development service combines cutting-edge technology with sleek aesthetics to
              </p>
            </div>
            
            <div className="p-10 rounded-3xl bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-xl border border-white/10 shadow-2xl">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge
                technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web
                development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek
                aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to Our premium web development service combines
                cutting-edge technology with sleek aesthetics to Our premium web development service combines cutting-edge technology with sleek aesthetics to
              </p>
            </div>
          </div>
          
          {/* Strategic Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { icon: Palette, title: "Custom", subtitle: "Responsive Design" },
              { icon: Users, title: "Interactive", subtitle: "Unique Design" },
              { icon: Smartphone, title: "User Friendly", subtitle: "Design Element" },
              { icon: Zap, title: "New", subtitle: "Generation Theme" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto shadow-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32 bg-gradient-to-b from-background/95 via-muted/6 to-background/95">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Technologies We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: SiReact, name: "Frontend Development" },
              { icon: SiNodedotjs, name: "Backend Development" },
              { icon: SiPostgresql, name: "Database Design" },
              { icon: SiTailwindcss, name: "Styling Framework" }
            ].map((tech, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto shadow-2xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="text-white text-4xl" />
                </div>
                <span className="text-lg font-semibold text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pricing Section */}
      <section className="py-32 relative bg-gradient-to-br from-background/98 via-muted/8 to-background/98">
        <div className="absolute inset-0 backdrop-blur-sm border-y border-white/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background/80 to-accent/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-20">
          <div className="text-center space-y-8">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Our Web Development Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our web development services have transformed businesses across various industries.
            </p>
            <Badge className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 text-lg font-semibold shadow-xl">
              Most Popular
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="group">
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-background/90 to-muted/20 backdrop-blur-xl border border-white/10 shadow-2xl group-hover:shadow-3xl transition-all duration-300 space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Starter</h3>
                  <p className="text-muted-foreground">Perfect for small projects and startups</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">INR 4,500</div>
                    <p className="text-muted-foreground">/Project</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Frontend Development & Design",
                    "Responsive layouts for up to 5 key pages",
                    "Basic functionality implementation",
                    "Design System",
                    "User Testing",
                    "Basic Prototype"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <ContactPopup 
                  trigger={
                    <Button className="w-full bg-gradient-to-r from-background to-muted border border-primary/30 text-primary hover:bg-primary/10" data-testid="button-select-starter">
                      Get Started
                    </Button>
                  }
                  title="Get Started with Starter Plan"
                  description="Ready to begin your web development project with our Starter plan? Let's discuss your specific requirements."
                  defaultService="Web Development"
                />
              </div>
            </div>

            {/* Professional Package */}
            <div className="group transform scale-105">
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-background/90 to-primary/10 backdrop-blur-xl border-2 border-primary/30 shadow-3xl space-y-8 relative">
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 font-semibold">
                  Most Popular
                </Badge>
                
                <div className="text-center space-y-4 pt-4">
                  <h3 className="text-2xl font-bold text-foreground">Professional</h3>
                  <p className="text-muted-foreground">Perfect for Mid Range projects and Ecommerce</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">INR 10,500</div>
                    <p className="text-muted-foreground">/Project</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Frontend & Backend Development",
                    "Wireframes for up to 5 key screens",
                    "UI Design for up to 5 screens",
                    "Basic Prototype",
                    "Basic Prototype",
                    "Basic Prototype"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <ContactPopup 
                  trigger={
                    <Button className="w-full bg-gradient-to-r from-primary to-accent text-white shadow-xl hover:shadow-2xl" data-testid="button-select-professional">
                      Get Started
                    </Button>
                  }
                  title="Get Started with Professional Plan"
                  description="Ready to begin your web development project with our Professional plan? Let's discuss your specific requirements."
                  defaultService="Web Development"
                />
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="group">
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-background/90 to-muted/20 backdrop-blur-xl border border-white/10 shadow-2xl group-hover:shadow-3xl transition-all duration-300 space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Enterprise</h3>
                  <p className="text-muted-foreground">Perfect for Big projects and Professional Enterprises</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">INR 21,500</div>
                    <p className="text-muted-foreground">/Project</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Frontend & Backend Development",
                    "Wireframes for up to 5 key screens",
                    "UI Design for up to 5 screens",
                    "Basic Prototype",
                    "Basic Prototype",
                    "Basic Prototype"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <ContactPopup 
                  trigger={
                    <Button className="w-full bg-gradient-to-r from-background to-muted border border-primary/30 text-primary hover:bg-primary/10" data-testid="button-select-enterprise">
                      Get Started
                    </Button>
                  }
                  title="Get Started with Enterprise Plan"
                  description="Ready to begin your web development project with our Enterprise plan? Let's discuss your specific requirements."
                  defaultService="Web Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}