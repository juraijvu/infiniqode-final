import { useState } from "react";
import { Link } from "wouter";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    id: "1",
    title: "Modern E-commerce Solution",
    description: "Full-stack e-commerce platform with React TypeScript frontend and Python Flask backend",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "E-commerce",
    technologies: ["React", "TypeScript", "Flask"],
    slug: "modern-ecommerce-solution"
  },
  {
    id: "2",
    title: "Analytics SaaS Platform",
    description: "Comprehensive analytics dashboard with real-time data visualization and reporting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "SaaS",
    technologies: ["React", "D3.js", "SQL"],
    slug: "analytics-saas-platform"
  },
  {
    id: "3",
    title: "Cross-Platform Mobile App",
    description: "Feature-rich mobile application with native performance and intuitive design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Mobile",
    technologies: ["React Native", "Redux", "API"],
    slug: "cross-platform-mobile-app"
  },
  {
    id: "4",
    title: "Corporate Website Redesign",
    description: "Modern corporate website with advanced SEO optimization and conversion focus",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Website",
    technologies: ["Next.js", "SEO", "CMS"],
    slug: "corporate-website-redesign"
  },
  {
    id: "5",
    title: "Digital Marketing Success",
    description: "Comprehensive digital marketing campaign that increased ROI by 300%",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Marketing",
    technologies: ["SEO", "PPC", "Analytics"],
    slug: "digital-marketing-success"
  },
  {
    id: "6",
    title: "Fintech Application",
    description: "Secure financial technology platform with advanced security and compliance features",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Fintech",
    technologies: ["Security", "Blockchain", "API"],
    slug: "fintech-application"
  }
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "E-commerce", "SaaS", "Mobile", "Website", "Marketing", "Fintech"];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-1.5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Our Portfolio" 
          subtitle="Explore our latest projects and see how we've helped businesses achieve their digital goals"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "glass" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item relative group cursor-pointer">
              <GlassCard className="overflow-hidden" hover>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/20 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="text-center mt-2">
          <Link href="/portfolio">
            <Button variant="glass" size="lg" data-testid="button-view-all-projects">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
