import { useRoute } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { ContactPopup } from "@/components/contact-popup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  Globe,
  BarChart3,
  Shield
} from "lucide-react";
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiFlask, 
  SiMongodb, 
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiRedis,
  SiStripe,
  SiFirebase,
  SiExpo,
  SiRedux,
  SiHubspot
} from "react-icons/si";

// Enhanced tech icon mapping with actual tech logos
const techIcons: Record<string, any> = {
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Flask": SiFlask,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Tailwind CSS": SiTailwindcss,
  "D3.js": BarChart3,
  "React Native": SiReact,
  "SEO": Globe,
  "Analytics": BarChart3,
  "Security": Shield,
  "Blockchain": Shield,
  "AWS": Globe,
  "Docker": SiDocker,
  "Redis": SiRedis,
  "Stripe": SiStripe,
  "Firebase": SiFirebase,
  "SQLite": Code,
  "Expo": SiExpo,
  "Redux": SiRedux,
  "Google Ads": BarChart3,
  "HubSpot": SiHubspot,
  "Facebook Ads": BarChart3,
  "Compliance": Shield,
  "Strapi": Code
};

// Static portfolio data for now
const portfolioData: Record<string, any> = {
  "ecommerce-platform": {
    title: "E-commerce Platform Revolution",
    description: "Complete e-commerce transformation with React TypeScript frontend and Flask backend, featuring real-time inventory management and advanced analytics.",
    fullDescription: "This professional e-commerce platform revolutionized our client's online presence with a modern React TypeScript frontend and robust Python Flask backend. The solution includes real-time inventory management, advanced customer analytics, payment processing integration, and a responsive admin dashboard. Built for scalability, the platform now handles 10x more traffic than the previous solution.",
    category: "E-commerce",
    technologies: ["React", "TypeScript", "Flask", "PostgreSQL", "Redis", "Stripe"],
    clientName: "TechVenture Inc",
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"],
    results: ["300% increase in conversion rate", "50% reduction in page load time", "10x traffic capacity improvement"],
    challenges: "Legacy system migration, complex inventory management, real-time synchronization",
    duration: "12 weeks",
    year: "2023"
  },
  "analytics-saas": {
    title: "Analytics SaaS Dashboard",
    description: "professional analytics platform with real-time data visualization, custom reporting, and multi-tenant architecture.",
    fullDescription: "A powerful SaaS analytics platform that transforms raw data into actionable insights. Features include real-time dashboards, custom report generation, advanced data visualization with D3.js, multi-tenant architecture, and professional API for third-party integrations. The platform serves thousands of users with sub-second query performance.",
    category: "SaaS",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Docker", "AWS"],
    clientName: "DataInsights Corp",
    projectUrl: "https://example.com",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"],
    results: ["50% faster data processing", "99.9% uptime achieved", "40% increase in user engagement"],
    challenges: "Big data processing, real-time updates, scalable architecture",
    duration: "16 weeks",
    year: "2023"
  },
  "mobile-experience": {
    title: "Cross-Platform Mobile Experience",
    description: "Feature-rich mobile application with native performance, offline capabilities, and seamless synchronization.",
    fullDescription: "A sophisticated cross-platform mobile application built with React Native, delivering native performance across iOS and Android. Features include offline capabilities, real-time synchronization, push notifications, biometric authentication, and advanced caching strategies. The app has been downloaded over 100k times with a 4.8-star rating.",
    category: "Mobile",
    technologies: ["React Native", "Redux", "Firebase", "SQLite", "Expo"],
    clientName: "MobileFirst Solutions",
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"],
    results: ["100k+ downloads", "4.8/5 app store rating", "30% increase in user retention"],
    challenges: "Offline synchronization, performance optimization, cross-platform consistency",
    duration: "14 weeks",
    year: "2023"
  }
};

export default function PortfolioDetailStatic() {
  const [, params] = useRoute("/portfolio/:slug");
  const slug = params?.slug;
  const portfolioItem = slug ? portfolioData[slug] : null;

  if (!portfolioItem) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/portfolio">Back to Portfolio</a>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const TechIcon = ({ tech }: { tech: string }) => {
    const Icon = techIcons[tech] || Code;
    return <Icon className="w-5 h-5 text-primary" />;
  };

  return (
    <>
      <SEOHead
        title={`${portfolioItem.title} - Case Study | InfiniQode`}
        description={portfolioItem.description}
        keywords={`${portfolioItem.title}, ${portfolioItem.category}, ${portfolioItem.technologies.join(', ')}, case study, portfolio, digital agency`}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="hero-glow top-20 left-20"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="border-accent text-accent font-medium">
                    {portfolioItem.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">Case Study</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {portfolioItem.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {portfolioItem.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {portfolioItem.projectUrl && (
                  <Button size="lg" className="glass-button" data-testid="button-view-live">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                )}
                {portfolioItem.githubUrl && (
                  <Button variant="outline" size="lg" data-testid="button-view-source">
                    <Github className="w-4 h-4 mr-2" />
                    View Source
                  </Button>
                )}
                <ContactPopup 
                  trigger={
                    <Button variant="outline" size="lg" data-testid="button-discuss-project">
                      <Target className="w-4 h-4 mr-2" />
                      Discuss Similar Project
                    </Button>
                  }
                  title="Let's Discuss Your Similar Project"
                  description="Interested in a project like this? Let's talk about how we can help you achieve similar results."
                  defaultService={portfolioItem.category === "Marketing" ? "Digital Marketing" : 
                              portfolioItem.category === "SaaS" ? "SaaS Solutions" : 
                              "Web Development"}
                />
              </div>
            </div>

            <div className="relative">
              <img 
                src={portfolioItem.images[0]} 
                alt={portfolioItem.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
                data-testid="img-project-hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  Project Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">{portfolioItem.fullDescription}</p>
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Code className="w-6 h-6 text-primary" />
                  Technology Stack
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {portfolioItem.technologies.map((tech: string) => (
                    <GlassCard key={tech} className="p-4 text-center hover:scale-105 transition-transform">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center">
                          <TechIcon tech={tech} />
                        </div>
                        <span className="text-sm font-medium">{tech}</span>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* Results & Impact */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Results & Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolioItem.results.map((result: string, index: number) => (
                    <GlassCard key={index} className="p-6">
                      <div className="flex items-center gap-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground">{result}</p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* Challenges Solved */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Challenges Solved
                </h2>
                <GlassCard className="p-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">{portfolioItem.challenges}</p>
                </GlassCard>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold mb-6">Project Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-medium">{portfolioItem.clientName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{portfolioItem.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <Badge className="bg-primary/20 text-primary border-primary mt-1">
                        {portfolioItem.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Key Metrics */}
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
                <div className="space-y-4">
                  {portfolioItem.category === "E-commerce" && (
                    <>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">300%</div>
                        <p className="text-sm text-muted-foreground">Conversion Increase</p>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">50%</div>
                        <p className="text-sm text-muted-foreground">Faster Load Times</p>
                      </div>
                    </>
                  )}
                  {portfolioItem.category === "SaaS" && (
                    <>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                        <p className="text-sm text-muted-foreground">System Uptime</p>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">40%</div>
                        <p className="text-sm text-muted-foreground">User Engagement</p>
                      </div>
                    </>
                  )}
                  {portfolioItem.category === "Mobile" && (
                    <>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">4.8★</div>
                        <p className="text-sm text-muted-foreground">App Store Rating</p>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">100K+</div>
                        <p className="text-sm text-muted-foreground">Downloads</p>
                      </div>
                    </>
                  )}
                </div>
              </GlassCard>

              {/* CTA Card */}
              <GlassCard className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <div className="text-center space-y-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ready for Similar Results?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Let's discuss how we can help you achieve similar success with your project.
                    </p>
                  </div>
                  <ContactPopup 
                    trigger={
                      <Button className="glass-button w-full h-12" data-testid="button-start-project">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Start Your Project
                      </Button>
                    }
                    title="Ready to Start Your Project?"
                    description="Based on this portfolio project, let's discuss how we can create something amazing for your business."
                    defaultService={portfolioItem.category === "Marketing" ? "Digital Marketing" : 
                                portfolioItem.category === "SaaS" ? "SaaS Solutions" : 
                                "Web Development"}
                  />
                  
                  <Separator className="my-4" />
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Free consultation included
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground text-lg">
              How we delivered exceptional results for this project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <GlassCard className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Discovery</h3>
              <p className="text-sm text-muted-foreground">Understanding requirements and goals</p>
            </GlassCard>
            
            <GlassCard className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">Creating user-centered designs</p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Development</h3>
              <p className="text-sm text-muted-foreground">Building with best practices</p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Launch</h3>
              <p className="text-sm text-muted-foreground">Deployment and optimization</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="hero-glow top-0 right-0"></div>
          
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your <span className="gradient-text">Success Story</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join our growing list of satisfied clients who've transformed their business with our solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactPopup 
              trigger={
                <Button size="lg" className="glass-button text-lg px-8 py-6" data-testid="button-get-started">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started Today
                </Button>
              }
              title="Let's Create Your Success Story"
              description="Ready to achieve results like this project? Tell us about your goals and we'll create a custom solution for you."
            />
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" data-testid="button-view-portfolio" asChild>
              <a href="/portfolio">
                View More Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}