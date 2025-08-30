import { 
  type User, 
  type InsertUser,
  type Service,
  type InsertService,
  type BlogPost,
  type InsertBlogPost,
  type PortfolioItem,
  type InsertPortfolioItem,
  type ContactInquiry,
  type InsertContactInquiry,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Services
  getServices(): Promise<Service[]>;
  getService(id: string): Promise<Service | undefined>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;

  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;

  // Portfolio Items
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getActivePortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItem(id: string): Promise<PortfolioItem | undefined>;
  getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | undefined>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;

  // Contact Inquiries
  getContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: string): Promise<ContactInquiry | undefined>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getActiveTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private services: Map<string, Service>;
  private blogPosts: Map<string, BlogPost>;
  private portfolioItems: Map<string, PortfolioItem>;
  private contactInquiries: Map<string, ContactInquiry>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.users = new Map();
    this.services = new Map();
    this.blogPosts = new Map();
    this.portfolioItems = new Map();
    this.contactInquiries = new Map();
    this.testimonials = new Map();
    
    this.seedData();
  }

  private seedData() {
    // Seed services
    const services = [
      {
        id: randomUUID(),
        name: "Web Development",
        slug: "web-development",
        description: "Custom React TypeScript applications with modern architecture, responsive design, and optimal performance.",
        fullDescription: "Our web development service delivers cutting-edge React TypeScript applications built with modern architecture principles. We focus on creating responsive, performant, and scalable web solutions that provide exceptional user experiences across all devices.",
        features: ["React TypeScript Apps", "Responsive Design", "Performance Optimization", "SEO Ready"],
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        pricing: "Starting at $15,000",
        icon: "fas fa-code",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Backend Development",
        slug: "backend-development",
        description: "Robust Python Flask APIs with SQL databases, scalable architecture, and comprehensive documentation.",
        fullDescription: "Our backend development expertise ensures your applications have solid foundations. We build robust Python Flask APIs with carefully designed SQL databases, implementing scalable architecture patterns and providing comprehensive documentation for long-term maintainability.",
        features: ["Python Flask APIs", "SQL Database Design", "Authentication & Security", "API Documentation"],
        technologies: ["Python", "Flask", "PostgreSQL", "Redis"],
        pricing: "Starting at $12,000",
        icon: "fas fa-server",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Digital Marketing",
        slug: "digital-marketing",
        description: "Data-driven marketing strategies, SEO optimization, and comprehensive analytics to grow your business.",
        fullDescription: "Transform your digital presence with our comprehensive marketing strategies. We combine data-driven approaches with creative excellence to deliver measurable results across all digital channels, from SEO and content marketing to social media and paid advertising.",
        features: ["SEO & SEM", "Social Media Marketing", "Analytics & Reporting", "Content Strategy"],
        technologies: ["Google Analytics", "SEMrush", "HubSpot", "Google Ads"],
        pricing: "Starting at $5,000/month",
        icon: "fas fa-chart-line",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "SaaS Development",
        slug: "saas-development",
        description: "Complete SaaS applications with subscription management, user dashboards, and scalable infrastructure.",
        fullDescription: "Build your software-as-a-service platform with our end-to-end SaaS development service. We handle everything from multi-tenant architecture and subscription management to user dashboards and payment integration, ensuring your SaaS is ready to scale.",
        features: ["Multi-tenant Architecture", "Subscription Management", "User Dashboards", "Payment Integration"],
        technologies: ["React", "Node.js", "Stripe", "Docker"],
        pricing: "Starting at $25,000",
        icon: "fas fa-cloud",
        isActive: true,
        createdAt: new Date(),
      }
    ];

    services.forEach(service => {
      this.services.set(service.id, service);
    });

    // Seed blog posts with diverse categories
    const blogPosts = [
      // Technical Blog Posts
      {
        id: randomUUID(),
        title: "The Future of React TypeScript Development",
        slug: "future-react-typescript-development",
        excerpt: "Explore the latest features and best practices for building scalable applications with React and TypeScript.",
        content: "React TypeScript development continues to evolve rapidly, bringing new possibilities for building scalable, maintainable applications. This comprehensive guide covers the latest patterns, performance optimizations, and architectural decisions that will shape the future of React development.\n\nKey topics include: Advanced TypeScript patterns in React, performance optimization with React 18 features, state management evolution, and modern build tools that are transforming the development experience. We'll also explore how AI-powered development tools are changing the way we write and maintain React applications.",
        author: "Sarah Chen",
        authorImage: "https://images.unsplash.com/photo-1494790108755-2616b112371c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["React", "TypeScript", "Web Development", "Technical"],
        readTime: 5,
        isPublished: true,
        publishedAt: new Date("2024-12-15"),
        createdAt: new Date("2024-12-15"),
        updatedAt: new Date("2024-12-15"),
      },
      {
        id: randomUUID(),
        title: "Building Scalable APIs with Python Flask",
        slug: "building-scalable-apis-python-flask",
        excerpt: "Learn how to create robust, scalable backend systems using Python Flask and SQL databases.",
        content: "Flask provides an excellent foundation for building scalable APIs. In this comprehensive guide, we'll explore best practices for creating enterprise-grade backend systems that can handle millions of requests.\n\nThis deep-dive covers: Database optimization strategies, caching implementations, security patterns, monitoring and logging, containerization with Docker, and deployment strategies. We'll also examine real-world case studies of Flask applications scaling from startup to enterprise levels.",
        author: "Marcus Rivera",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Python", "Flask", "Backend Development", "Technical"],
        readTime: 8,
        isPublished: true,
        publishedAt: new Date("2024-12-10"),
        createdAt: new Date("2024-12-10"),
        updatedAt: new Date("2024-12-10"),
      },
      {
        id: randomUUID(),
        title: "Microservices Architecture: A Complete Guide",
        slug: "microservices-architecture-complete-guide",
        excerpt: "Master the art of designing and implementing microservices that scale with modern DevOps practices.",
        content: "Microservices architecture has revolutionized how we build and deploy applications. This comprehensive guide covers everything from design principles to production deployment strategies.\n\nWe'll explore: Service decomposition strategies, inter-service communication patterns, data management in distributed systems, testing strategies for microservices, monitoring and observability, and handling failures gracefully. Real examples from successful microservices implementations showcase practical solutions to common challenges.",
        author: "Dr. Alex Thompson",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Microservices", "Architecture", "DevOps", "Technical"],
        readTime: 12,
        isPublished: true,
        publishedAt: new Date("2024-12-12"),
        createdAt: new Date("2024-12-12"),
        updatedAt: new Date("2024-12-12"),
      },

      // Marketing Blog Posts
      {
        id: randomUUID(),
        title: "Advanced SEO Strategies for 2024",
        slug: "advanced-seo-strategies-2024",
        excerpt: "Discover the latest SEO techniques that will help your website rank higher on Google and Bing.",
        content: "Search engine optimization continues to evolve, with new algorithms and ranking factors emerging regularly. This comprehensive guide reveals the most effective SEO strategies for 2024 and beyond.\n\nKey strategies include: Core Web Vitals optimization, E-A-T (Expertise, Authoritativeness, Trustworthiness) implementation, AI-powered content optimization, local SEO tactics, and voice search optimization. We'll also cover the latest Google algorithm updates and how to future-proof your SEO strategy.",
        author: "Emma Wilson",
        authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["SEO", "Digital Marketing", "Search Engines", "Marketing"],
        readTime: 7,
        isPublished: true,
        publishedAt: new Date("2024-12-08"),
        createdAt: new Date("2024-12-08"),
        updatedAt: new Date("2024-12-08"),
      },
      {
        id: randomUUID(),
        title: "Social Media Marketing Trends That Drive Results",
        slug: "social-media-marketing-trends-2024",
        excerpt: "Leverage the power of social media with proven strategies that increase engagement and drive conversions.",
        content: "Social media marketing has evolved far beyond simple posting. Today's successful brands use sophisticated strategies that combine creativity with data-driven insights to achieve measurable results.\n\nThis guide covers: Platform-specific content strategies, influencer partnership models, social commerce implementation, community building techniques, and analytics that matter. We'll examine successful campaigns from leading brands and provide actionable templates you can implement immediately.",
        author: "Jessica Martinez",
        authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Social Media", "Marketing", "Digital Strategy", "Marketing"],
        readTime: 6,
        isPublished: true,
        publishedAt: new Date("2024-12-05"),
        createdAt: new Date("2024-12-05"),
        updatedAt: new Date("2024-12-05"),
      },
      {
        id: randomUUID(),
        title: "Email Marketing Automation: Complete Playbook",
        slug: "email-marketing-automation-playbook",
        excerpt: "Build powerful email sequences that nurture leads and drive sales with advanced automation strategies.",
        content: "Email marketing remains one of the highest ROI channels when done correctly. This comprehensive playbook reveals how to create automated email sequences that convert prospects into loyal customers.\n\nTopics covered: Segmentation strategies that increase relevance, behavioral trigger setup, personalization at scale, A/B testing methodologies, deliverability optimization, and integration with other marketing channels. Includes ready-to-use templates and workflows for different business types.",
        author: "Michael Chang",
        authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Email Marketing", "Automation", "Lead Generation", "Marketing"],
        readTime: 9,
        isPublished: true,
        publishedAt: new Date("2024-12-03"),
        createdAt: new Date("2024-12-03"),
        updatedAt: new Date("2024-12-03"),
      },

      // News Blog Posts
      {
        id: randomUUID(),
        title: "AI Revolution: How Machine Learning is Transforming Business",
        slug: "ai-revolution-transforming-business-2024",
        excerpt: "Explore how artificial intelligence and machine learning are reshaping industries and creating new opportunities.",
        content: "The AI revolution is no longer a future concept—it's happening now. From small startups to Fortune 500 companies, businesses are leveraging artificial intelligence to gain competitive advantages and drive innovation.\n\nThis analysis covers: Current AI adoption trends across industries, practical implementation strategies, ROI measurement frameworks, ethical considerations, and future predictions. We'll examine real case studies of successful AI implementations and discuss what this means for the future of work and business strategy.",
        author: "Dr. Patricia Kim",
        authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["AI", "Machine Learning", "Business", "News"],
        readTime: 8,
        isPublished: true,
        publishedAt: new Date("2024-12-14"),
        createdAt: new Date("2024-12-14"),
        updatedAt: new Date("2024-12-14"),
      },
      {
        id: randomUUID(),
        title: "Cybersecurity Threats: What Businesses Need to Know",
        slug: "cybersecurity-threats-business-guide-2024",
        excerpt: "Stay ahead of evolving cyber threats with comprehensive security strategies and best practices.",
        content: "Cybersecurity threats continue to evolve, targeting businesses of all sizes with increasingly sophisticated attacks. This essential guide provides actionable insights for protecting your organization in 2024.\n\nKey areas covered: Latest threat landscape analysis, zero-trust security implementation, employee training strategies, incident response planning, and regulatory compliance requirements. We'll also explore emerging security technologies and provide a practical security assessment framework.",
        author: "Robert Johnson",
        authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Cybersecurity", "Business Security", "Risk Management", "News"],
        readTime: 7,
        isPublished: true,
        publishedAt: new Date("2024-12-11"),
        createdAt: new Date("2024-12-11"),
        updatedAt: new Date("2024-12-11"),
      },
      {
        id: randomUUID(),
        title: "Remote Work Technology Trends Shaping the Future",
        slug: "remote-work-technology-trends-2024",
        excerpt: "Discover the latest technologies and tools that are making remote work more productive and collaborative.",
        content: "Remote work has permanently changed how businesses operate. This comprehensive analysis explores the technology trends that are shaping the future of distributed teams and hybrid work environments.\n\nTrends analyzed: Virtual reality collaboration platforms, AI-powered productivity tools, advanced video conferencing solutions, digital workspace platforms, and cybersecurity for remote teams. We'll also examine productivity metrics and employee satisfaction data from leading remote-first companies.",
        author: "Amanda Foster",
        authorImage: "https://images.unsplash.com/photo-1494790108755-2616b112371c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Remote Work", "Technology", "Collaboration", "News"],
        readTime: 6,
        isPublished: true,
        publishedAt: new Date("2024-12-09"),
        createdAt: new Date("2024-12-09"),
        updatedAt: new Date("2024-12-09"),
      },

      // General Blog Posts
      {
        id: randomUUID(),
        title: "Digital Transformation: A CEO's Guide to Success",
        slug: "digital-transformation-ceo-guide",
        excerpt: "Navigate the complexities of digital transformation with proven strategies from industry leaders.",
        content: "Digital transformation is no longer optional—it's essential for business survival and growth. This executive guide provides practical frameworks and strategies for leading successful digital transformation initiatives.\n\nThis comprehensive guide covers: Strategic planning methodologies, change management best practices, technology selection frameworks, ROI measurement strategies, and common pitfalls to avoid. Features insights from CEOs who have successfully led digital transformations across various industries.",
        author: "David Chen",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Digital Transformation", "Leadership", "Strategy", "General"],
        readTime: 10,
        isPublished: true,
        publishedAt: new Date("2024-12-13"),
        createdAt: new Date("2024-12-13"),
        updatedAt: new Date("2024-12-13"),
      },
      {
        id: randomUUID(),
        title: "Building High-Performance Teams in the Digital Age",
        slug: "building-high-performance-teams-digital-age",
        excerpt: "Learn how to create and manage teams that thrive in today's fast-paced digital environment.",
        content: "High-performance teams are the backbone of successful organizations. This guide explores how to build, manage, and motivate teams that consistently deliver exceptional results in the digital age.\n\nKey topics include: Team formation strategies, communication frameworks, performance measurement systems, remote team management, conflict resolution techniques, and creating psychological safety. Includes practical tools and templates for team leaders and managers.",
        author: "Rachel Green",
        authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Team Building", "Management", "Leadership", "General"],
        readTime: 8,
        isPublished: true,
        publishedAt: new Date("2024-12-07"),
        createdAt: new Date("2024-12-07"),
        updatedAt: new Date("2024-12-07"),
      },
      {
        id: randomUUID(),
        title: "Customer Experience Excellence in the Digital Era",
        slug: "customer-experience-excellence-digital-era",
        excerpt: "Create exceptional customer experiences that drive loyalty and growth in an increasingly digital world.",
        content: "Customer experience has become the primary differentiator in today's competitive marketplace. This comprehensive guide reveals how to create exceptional experiences that turn customers into advocates.\n\nTopics covered: Customer journey mapping, omnichannel experience design, personalization strategies, feedback collection and analysis, customer success frameworks, and measuring experience impact on business results. Features case studies from companies known for exceptional customer experience.",
        author: "Lisa Park",
        authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Customer Experience", "Digital Strategy", "Business Growth", "General"],
        readTime: 9,
        isPublished: true,
        publishedAt: new Date("2024-12-06"),
        createdAt: new Date("2024-12-06"),
        updatedAt: new Date("2024-12-06"),
      }
    ];

    blogPosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });

    // Seed testimonials
    const testimonials = [
      {
        id: randomUUID(),
        name: "John Mitchell",
        company: "TechVenture Inc",
        position: "CEO",
        content: "DigitalCraft transformed our e-commerce platform completely. The React TypeScript frontend is blazing fast and the Flask backend handles our traffic perfectly.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Lisa Rodriguez",
        company: "StartupHub",
        position: "Founder",
        content: "Their digital marketing expertise increased our online presence by 400%. The SEO optimization work was particularly impressive.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "David Park",
        company: "Enterprise Solutions",
        position: "CTO",
        content: "The SaaS platform they built for us is exactly what we envisioned. The architecture is solid and scales beautifully with our growth.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        isActive: true,
        createdAt: new Date(),
      }
    ];

    testimonials.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id, 
      role: "user", 
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }

  // Service methods
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values()).filter(service => service.isActive);
  }

  async getService(id: string): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    return Array.from(this.services.values()).find(service => service.slug === slug);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = randomUUID();
    const service: Service = { 
      ...insertService, 
      id, 
      isActive: true, 
      createdAt: new Date(),
      pricing: insertService.pricing ?? null
    };
    this.services.set(id, service);
    return service;
  }

  // Blog post methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).filter(post => post.isPublished);
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { 
      ...insertPost, 
      id, 
      isPublished: false,
      publishedAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      authorImage: insertPost.authorImage ?? null,
      featuredImage: insertPost.featuredImage ?? null
    };
    this.blogPosts.set(id, post);
    return post;
  }

  // Portfolio methods
  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values());
  }

  async getActivePortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values()).filter(item => item.isActive);
  }

  async getPortfolioItem(id: string): Promise<PortfolioItem | undefined> {
    return this.portfolioItems.get(id);
  }

  async getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | undefined> {
    return Array.from(this.portfolioItems.values()).find(item => item.slug === slug);
  }

  async createPortfolioItem(insertItem: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = randomUUID();
    const item: PortfolioItem = { 
      ...insertItem, 
      id, 
      isActive: true, 
      createdAt: new Date(),
      clientName: insertItem.clientName ?? null,
      projectUrl: insertItem.projectUrl ?? null,
      githubUrl: insertItem.githubUrl ?? null
    };
    this.portfolioItems.set(id, item);
    return item;
  }

  // Contact inquiry methods
  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async getContactInquiry(id: string): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = { 
      ...insertInquiry, 
      id, 
      status: "new", 
      createdAt: new Date(),
      budget: insertInquiry.budget ?? null
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getActiveTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(testimonial => testimonial.isActive);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id, 
      isActive: true, 
      createdAt: new Date(),
      image: insertTestimonial.image ?? null
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
