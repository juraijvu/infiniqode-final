import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Rocket, Users, Clock, Shield } from "lucide-react";
import type { Service } from "@shared/schema";

export default function ServiceDetail() {
  const { slug } = useParams();
  
  const { data: service, isLoading, error } = useQuery<Service>({
    queryKey: ["/api/services", slug],
  });

  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading service details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !service) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <GlassCard className="p-8 text-center max-w-md">
            <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The service you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/services">
              <Button className="glass-button" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
          </GlassCard>
        </div>
        <Footer />
      </>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.fullDescription,
    "provider": {
      "@type": "Organization",
      "name": "DigitalCraft",
      "url": "https://digitalcraft.agency"
    },
    "areaServed": "Worldwide",
    "serviceType": service.name
  };

  return (
    <>
      <SEOHead
        title={service.name}
        description={service.fullDescription}
        keywords={`${service.name.toLowerCase()}, ${service.technologies.join(', ')}, digital agency`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
        <div className="hero-glow top-20 left-20"></div>
        <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className={`${service.icon} text-white text-3xl`}></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {service.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {service.fullDescription}
          </p>
          {service.pricing && (
            <Badge variant="secondary" className="bg-primary/20 text-accent text-xl px-6 py-3 mb-8">
              {service.pricing}
            </Badge>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="glass-button px-8 py-4 text-lg" data-testid="button-get-quote">
                <Rocket className="mr-2 h-5 w-5" />
                Get Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black px-8 py-4 text-lg" data-testid="button-view-all-services">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Features */}
            <div className="lg:col-span-2">
              <GlassCard className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Technologies */}
              <GlassCard className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Technologies We Use</h2>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-accent text-accent text-lg px-4 py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </GlassCard>

              {/* Process */}
              <GlassCard className="p-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Our Process</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Requirements Analysis",
                      description: "We dive deep into your business needs and technical requirements to create a comprehensive project scope."
                    },
                    {
                      step: "2",
                      title: "Design & Planning",
                      description: "Our team creates detailed wireframes, mockups, and technical architecture plans for your approval."
                    },
                    {
                      step: "3",
                      title: "Development",
                      description: "We build your solution using agile methodologies with regular check-ins and progress updates."
                    },
                    {
                      step: "4",
                      title: "Testing & Launch",
                      description: "Comprehensive testing followed by deployment and post-launch support to ensure everything runs smoothly."
                    }
                  ].map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/10">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{phase.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold mb-4">Service Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>2-8 weeks delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span>Dedicated team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span>Quality guaranteed</span>
                  </div>
                </div>
              </GlassCard>

              {/* CTA */}
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your project requirements and how we can help you achieve your goals.
                </p>
                <Link href="/contact">
                  <Button className="glass-button w-full mb-3" data-testid="button-start-project">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black w-full" data-testid="button-view-portfolio">
                    View Portfolio
                  </Button>
                </Link>
              </GlassCard>

              {/* Related Services */}
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold mb-4">Related Services</h3>
                <div className="space-y-3">
                  <Link href="/services/web-development">
                    <a className="block p-3 rounded-lg hover:bg-muted/20 transition-colors">
                      Web Development
                    </a>
                  </Link>
                  <Link href="/services/digital-marketing">
                    <a className="block p-3 rounded-lg hover:bg-muted/20 transition-colors">
                      Digital Marketing
                    </a>
                  </Link>
                  <Link href="/services/saas-development">
                    <a className="block p-3 rounded-lg hover:bg-muted/20 transition-colors">
                      SaaS Development
                    </a>
                  </Link>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our {service.name.toLowerCase()} service
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does the project take?",
                answer: "Project timelines vary based on complexity and scope. Most projects are completed within 2-8 weeks, with regular milestones and updates throughout the process."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance to ensure your solution continues to perform optimally."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely. We specialize in integrating with existing systems and can work with your current infrastructure to ensure seamless compatibility."
              },
              {
                question: "What makes your approach different?",
                answer: "We combine cutting-edge technology with proven methodologies, focusing on scalability, performance, and user experience to deliver solutions that drive real business results."
              }
            ].map((faq, index) => (
              <GlassCard key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
