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

    // Seed blog posts
    const blogPosts = [
      {
        id: randomUUID(),
        title: "The Future of React TypeScript Development",
        slug: "future-react-typescript-development",
        excerpt: "Explore the latest features and best practices for building scalable applications with React and TypeScript.",
        content: "React TypeScript development continues to evolve rapidly, bringing new possibilities for building scalable, maintainable applications...",
        author: "Sarah Chen",
        authorImage: "https://images.unsplash.com/photo-1494790108755-2616b112371c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["React", "TypeScript", "Web Development"],
        readTime: 5,
        isPublished: true,
        publishedAt: new Date("2023-12-15"),
        createdAt: new Date("2023-12-15"),
        updatedAt: new Date("2023-12-15"),
      },
      {
        id: randomUUID(),
        title: "Advanced SEO Strategies for 2024",
        slug: "advanced-seo-strategies-2024",
        excerpt: "Discover the latest SEO techniques that will help your website rank higher on Google and Bing.",
        content: "Search engine optimization continues to evolve, with new algorithms and ranking factors emerging regularly...",
        author: "Emma Wilson",
        authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["SEO", "Digital Marketing", "Search Engines"],
        readTime: 7,
        isPublished: true,
        publishedAt: new Date("2023-12-12"),
        createdAt: new Date("2023-12-12"),
        updatedAt: new Date("2023-12-12"),
      },
      {
        id: randomUUID(),
        title: "Building Scalable APIs with Python Flask",
        slug: "building-scalable-apis-python-flask",
        excerpt: "Learn how to create robust, scalable backend systems using Python Flask and SQL databases.",
        content: "Flask provides an excellent foundation for building scalable APIs. In this comprehensive guide, we'll explore best practices...",
        author: "Marcus Rivera",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        featuredImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Python", "Flask", "Backend Development"],
        readTime: 6,
        isPublished: true,
        publishedAt: new Date("2023-12-10"),
        createdAt: new Date("2023-12-10"),
        updatedAt: new Date("2023-12-10"),
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
      createdAt: new Date() 
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
      updatedAt: new Date()
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
      createdAt: new Date() 
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
      createdAt: new Date() 
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
      createdAt: new Date() 
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
