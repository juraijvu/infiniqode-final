import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Rocket } from "lucide-react";
import type { Service } from "@shared/schema";

export default function Services() {
  const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  return (
    <>
      <SEOHead
        title="Our Services"
        description="Comprehensive digital services including web development, SaaS development, digital marketing, mobile development, and SEO optimization. Transform your business with our expert solutions."
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
            Comprehensive digital solutions to transform your business and drive real results
          </p>
          <Link href="/contact">
            <Button className="glass-button px-8 py-4 text-lg" data-testid="button-get-started">
              <Rocket className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {isLoading ? (
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <GlassCard key={service.id} className="p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
                  <p className="text-muted-foreground mb-6 text-lg">{service.fullDescription}</p>
                  
                  {service.pricing && (
                    <div className="mb-6">
                      <Badge variant="secondary" className="bg-primary/20 text-accent text-lg px-4 py-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-lg">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/services/${service.slug}`}>
                      <Button className="glass-button flex-1" data-testid={`button-learn-more-${service.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black flex-1" data-testid={`button-get-quote-${service.slug}`}>
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
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
                description: "Our team develops a comprehensive strategy and project roadmap tailored to your specific needs and objectives."
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
