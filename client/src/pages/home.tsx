import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Rocket, Calendar, Download } from "lucide-react";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DigitalCraft",
    "url": "https://digitalcraft.agency",
    "logo": "https://digitalcraft.agency/logo.png",
    "description": "Premium digital agency specializing in React TypeScript development, Python Flask backends, and cutting-edge digital marketing solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://linkedin.com/company/digitalcraft",
      "https://twitter.com/digitalcraft",
      "https://github.com/digitalcraft"
    ]
  };

  return (
    <>
      <SEOHead
        title="Home"
        description="DigitalCraft is a premium digital agency specializing in React TypeScript development, Python Flask backends, and cutting-edge digital marketing solutions. Transform your business with our world-class solutions."
        keywords="digital agency, web development, digital marketing, React TypeScript, Python Flask, SaaS development, SEO optimization"
        structuredData={structuredData}
      />
      <Navigation />
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <GlassCard className="p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div data-testid="stat-projects">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">150+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div data-testid="stat-satisfaction">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div data-testid="stat-experience">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div data-testid="stat-support">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <ServicesSection />

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About DigitalCraft</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're a team of passionate developers, designers, and digital strategists 
                who believe in crafting exceptional digital experiences that drive real business results.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Award-Winning Solutions</h3>
                    <p className="text-muted-foreground">
                      Our work has been recognized by industry leaders and has helped 
                      businesses achieve their digital transformation goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our diverse team of specialists brings years of experience 
                      in cutting-edge technologies and proven methodologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                    <p className="text-muted-foreground">
                      We stay ahead of the curve by adopting the latest technologies 
                      and best practices to deliver future-proof solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern digital agency team collaborating" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <GlassCard className="p-16 text-center relative overflow-hidden">
            <div className="hero-glow top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have revolutionized their digital presence with our expertise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button className="glass-button px-8 py-4 text-lg" data-testid="button-schedule-consultation">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-black px-8 py-4 text-lg"
                    data-testid="button-download-portfolio"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </>
  );
}
