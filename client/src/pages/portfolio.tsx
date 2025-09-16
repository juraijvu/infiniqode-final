import { useState } from "react";
import { useLocation } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, Search, Filter } from "lucide-react";

const portfolioItems = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "E-commerce Platform Revolution",
    description: "Complete e-commerce transformation with React TypeScript frontend and Flask backend, featuring real-time inventory management and advanced analytics.",
    fullDescription: "This professional e-commerce platform revolutionized our client's online presence with a modern React TypeScript frontend and robust Python Flask backend. The solution includes real-time inventory management, advanced customer analytics, payment processing integration, and a responsive admin dashboard. Built for scalability, the platform now handles 10x more traffic than the previous solution.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "E-commerce",
    technologies: ["React", "TypeScript", "Flask", "PostgreSQL", "Redis", "Stripe"],
    client: "TechVenture Inc",
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    results: ["300% increase in conversion rate", "50% reduction in page load time", "10x traffic capacity improvement"],
    challenges: "Legacy system migration, complex inventory management, real-time synchronization",
    duration: "12 weeks",
    year: "2023"
  },
  {
    id: "2",
    slug: "analytics-saas",
    title: "Analytics SaaS Dashboard",
    description: "professional analytics platform with real-time data visualization, custom reporting, and multi-tenant architecture.",
    fullDescription: "A powerful SaaS analytics platform that transforms raw data into actionable insights. Features include real-time dashboards, custom report generation, advanced data visualization with D3.js, multi-tenant architecture, and professional API for third-party integrations. The platform serves thousands of users with sub-second query performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "SaaS",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Docker", "AWS"],
    client: "DataInsights Corp",
    projectUrl: "https://example.com",
    results: ["50% faster data processing", "99.9% uptime achieved", "40% increase in user engagement"],
    challenges: "Big data processing, real-time updates, scalable architecture",
    duration: "16 weeks",
    year: "2023"
  },
  {
    id: "3",
    slug: "mobile-experience", 
    title: "Cross-Platform Mobile Experience",
    description: "Feature-rich mobile application with native performance, offline capabilities, and seamless synchronization.",
    fullDescription: "A sophisticated cross-platform mobile application built with React Native, delivering native performance across iOS and Android. Features include offline capabilities, real-time synchronization, push notifications, biometric authentication, and advanced caching strategies. The app has been downloaded over 100k times with a 4.8-star rating.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Mobile",
    technologies: ["React Native", "Redux", "Firebase", "SQLite", "Expo"],
    client: "MobileFirst Solutions",
    results: ["100k+ downloads", "4.8/5 app store rating", "30% increase in user retention"],
    challenges: "Offline synchronization, performance optimization, cross-platform consistency",
    duration: "14 weeks",
    year: "2023"
  },
  {
    id: "4",
    title: "Corporate Website Transformation",
    description: "Modern corporate website with advanced SEO optimization, CMS integration, and conversion-focused design.",
    fullDescription: "Complete corporate website redesign focused on conversion optimization and search engine visibility. Built with Next.js for optimal performance and SEO, featuring a custom CMS, advanced analytics integration, A/B testing capabilities, and responsive design. The new site achieved first-page Google rankings for key terms within 3 months.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Website",
    technologies: ["Next.js", "Tailwind CSS", "Strapi", "SEO", "Google Analytics"],
    client: "Global Enterprises Ltd",
    projectUrl: "https://example.com",
    results: ["400% increase in organic traffic", "60% higher conversion rate", "First-page Google rankings"],
    challenges: "SEO migration, content management, performance optimization",
    duration: "8 weeks",
    year: "2023"
  },
  {
    id: "5",
    title: "Digital Marketing Campaign Success",
    description: "professional digital marketing strategy that increased ROI by 300% through multi-channel optimization.",
    fullDescription: "A professional digital marketing transformation including SEO optimization, PPC campaign management, social media strategy, and conversion rate optimization. The campaign utilized advanced analytics, A/B testing, and customer journey mapping to achieve exceptional results across all digital channels.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Marketing",
    technologies: ["Google Ads", "SEO", "Analytics", "HubSpot", "Facebook Ads"],
    client: "Growth Dynamics",
    results: ["300% ROI increase", "250% traffic growth", "180% lead generation improvement"],
    challenges: "Multi-channel attribution, budget optimization, audience targeting",
    duration: "24 weeks",
    year: "2023"
  },
  {
    id: "6",
    title: "Fintech Security Platform",
    description: "Secure financial technology platform with blockchain integration, compliance features, and advanced security.",
    fullDescription: "A cutting-edge fintech platform with enterprise-grade security, blockchain integration, and full regulatory compliance. Features include multi-factor authentication, encrypted transactions, real-time fraud detection, regulatory reporting, and seamless banking integrations. The platform processes millions in transactions daily with zero security incidents.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Fintech",
    technologies: ["React", "Node.js", "Blockchain", "Security", "Compliance"],
    client: "SecureFinance Pro",
    results: ["Zero security incidents", "99.99% uptime", "Regulatory compliance achieved"],
    challenges: "Security requirements, regulatory compliance, scalable infrastructure",
    duration: "20 weeks",
    year: "2023"
  }
];

const categories = ["All", "E-commerce", "SaaS", "Mobile", "Website", "Marketing", "Fintech"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const selectedProjectData = portfolioItems.find(item => item.id === selectedProject);

  return (
    <>
      <SEOHead
        title="Portfolio"
        description="Explore our portfolio of successful digital projects including e-commerce platforms, SaaS applications, mobile apps, and digital marketing campaigns. See how we've helped businesses achieve their goals."
        keywords="portfolio, case studies, web development projects, SaaS applications, mobile apps, digital marketing results"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="hero-glow top-20 left-20"></div>
        <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-white">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Explore our successful projects and see how we've helped businesses transform their digital presence
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-projects"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "glass-button" : ""}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center gap-2 mb-8">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              Showing {filteredItems.length} of {portfolioItems.length} projects
            </span>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="cursor-pointer"
                onClick={() => setLocation(`/portfolio/${item.slug}`)}
                data-testid={`card-project-${item.slug}`}
              >
                <GlassCard className="glass-project-card overflow-hidden h-full hover:scale-105 transition-transform">
                <div className="relative group">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <Badge variant="secondary" className="bg-white/20 text-white mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-white text-white">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/20 text-white text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {item.technologies.length > 3 && (
                      <Badge variant="secondary" className="bg-primary/20 text-white text-xs">
                        +{item.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">View Details</span>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                </GlassCard>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or category filters
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="glass-button"
                data-testid="button-clear-filters"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProjectData.image} 
                alt={selectedProjectData.title}
                className="w-full h-64 object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedProject(null)}
                data-testid="button-close-modal"
              >
                ×
              </Button>
            </div>
            
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProjectData.title}</h2>
                  <p className="text-muted-foreground">Client: {selectedProjectData.client}</p>
                </div>
                <div className="flex gap-3">
                  {selectedProjectData.projectUrl && (
                    <Button variant="outline" size="sm" data-testid="button-view-project">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                  )}
                  {selectedProjectData.githubUrl && (
                    <Button variant="outline" size="sm" data-testid="button-view-code">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                  <p className="text-muted-foreground mb-6">{selectedProjectData.fullDescription}</p>

                  <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProjectData.results.map((result, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">Challenges Solved</h3>
                  <p className="text-muted-foreground">{selectedProjectData.challenges}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Duration</h4>
                    <p className="text-muted-foreground">{selectedProjectData.duration}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Category</h4>
                    <Badge variant="outline" className="border-accent text-accent">
                      {selectedProjectData.category}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/20 text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
