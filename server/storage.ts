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
  type InsertTestimonial,
  type PageTemplate,
  type InsertPageTemplate,
  type Page,
  type InsertPage,
  type SeoSettings,
  type InsertSeoSettings,
  type ThemeSettings,
  type InsertThemeSettings,
  type PageBuilderComponent,
  type InsertPageBuilderComponent,
  type SiteSettings,
  type InsertSiteSettings,
  type Integration,
  users,
  services,
  blogPosts,
  portfolioItems,
  contactInquiries,
  testimonials,
  pageTemplates,
  pages,
  seoSettings,
  themeSettings,
  pageBuilderComponents,
  siteSettings,
  integrations
} from "@shared/schema";
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { eq, and, desc } from 'drizzle-orm';

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

  // CMS - Page Templates
  getPageTemplates(): Promise<PageTemplate[]>;
  getPageTemplateById(id: string): Promise<PageTemplate | undefined>;
  createPageTemplate(template: InsertPageTemplate): Promise<PageTemplate>;
  updatePageTemplate(id: string, template: InsertPageTemplate): Promise<PageTemplate | undefined>;
  deletePageTemplate(id: string): Promise<boolean>;

  // CMS - Pages
  getPages(filters?: { status?: string; type?: string }): Promise<Page[]>;
  getPageBySlug(slug: string): Promise<Page | undefined>;
  createPage(page: InsertPage): Promise<Page>;
  updatePage(id: string, page: InsertPage): Promise<Page | undefined>;
  publishPage(id: string): Promise<Page | undefined>;
  deletePage(id: string): Promise<boolean>;

  // CMS - SEO Settings
  getSeoSettings(entityType: string, entityId: string): Promise<SeoSettings | undefined>;
  createOrUpdateSeoSettings(settings: InsertSeoSettings): Promise<SeoSettings>;

  // CMS - Theme Settings
  getThemes(): Promise<ThemeSettings[]>;
  getActiveTheme(): Promise<ThemeSettings | undefined>;
  createTheme(theme: InsertThemeSettings): Promise<ThemeSettings>;
  updateTheme(id: string, theme: InsertThemeSettings): Promise<ThemeSettings | undefined>;
  activateTheme(id: string): Promise<ThemeSettings | undefined>;

  // CMS - Page Builder Components
  getPageBuilderComponents(category?: string): Promise<PageBuilderComponent[]>;
  createPageBuilderComponent(component: InsertPageBuilderComponent): Promise<PageBuilderComponent>;

  // CMS - Site Settings
  getSiteSettings(): Promise<SiteSettings | undefined>;
  createOrUpdateSiteSettings(settings: InsertSiteSettings): Promise<SiteSettings>;

  // SEO - Sitemap
  generateSitemap(): Promise<string>;

  // Integrations
  getIntegrations(): Promise<Integration[]>;
  getIntegrationById(id: string): Promise<Integration | undefined>;
  updateIntegration(id: string, data: Partial<Integration>): Promise<Integration | undefined>;
  testIntegration(id: string): Promise<{ success: boolean; message: string }>;
}

// Initialize database connection
// Handle SSL certificate issues in development
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export class DatabaseStorage implements IStorage {
  constructor() {
    this.seedData();
  }

  private async seedData() {
    try {
      // Check if data already exists
      const existingServices = await db.select().from(services).limit(1);
      if (existingServices.length > 0) return;

      // Seed services
      await db.insert(services).values([
        {
          name: "SaaS Solutions",
          slug: "saas-solutions",
          description: "Custom Software as a Service development with scalable architecture",
          fullDescription: "We specialize in building professional SaaS platforms that grow with your business. Our solutions include user management, subscription billing, multi-tenancy, and enterprise-grade security.",
          features: ["Multi-tenant Architecture", "Subscription Management", "API Development", "Cloud Deployment", "Analytics Dashboard"],
          technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
          pricing: "Starting from $15,000",
          icon: "🚀",
        },
        {
          name: "Web Development",
          slug: "web-development",
          description: "Modern, responsive websites built with the latest technologies",
          fullDescription: "From simple landing pages to complex web applications, we create digital experiences that convert. Our websites are built for performance, accessibility, and search engine optimization.",
          features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "CMS Integration", "E-commerce Solutions"],
          technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
          pricing: "Starting from $5,000",
          icon: "💻",
        },
        {
          name: "Digital Marketing",
          slug: "digital-marketing",
          description: "Data-driven marketing strategies to grow your online presence",
          fullDescription: "professional digital marketing services including SEO, content marketing, social media management, and paid advertising campaigns designed to increase your ROI.",
          features: ["SEO Strategy", "Content Marketing", "Social Media Management", "PPC Campaigns", "Analytics & Reporting"],
          technologies: ["Google Analytics", "SEMrush", "HubSpot", "Facebook Ads", "Google Ads"],
          pricing: "Starting from $2,000/month",
          icon: "📈",
        }
      ]);

      // Seed blog posts
      await db.insert(blogPosts).values([
        {
          title: "The Future of SaaS Development",
          slug: "future-of-saas-development",
          excerpt: "Exploring emerging trends and technologies shaping the Software as a Service landscape",
          content: "<p>SaaS development continues to evolve with new technologies and methodologies...</p>",
          author: "Alex Johnson",
          authorImage: "/images/team/alex.jpg",
          featuredImage: "/images/blog/saas-future.jpg",
          tags: ["SaaS", "Technology", "Development"],
          readTime: 8,
          isPublished: true,
          publishedAt: new Date(),
        },
        {
          title: "Building Scalable Web Applications",
          slug: "building-scalable-web-applications",
          excerpt: "Best practices for creating web applications that can handle growth and high traffic",
          content: "<p>Scalability is crucial for modern web applications...</p>",
          author: "Sarah Chen",
          authorImage: "/images/team/sarah.jpg",
          featuredImage: "/images/blog/scalable-apps.jpg",
          tags: ["Web Development", "Scalability", "Architecture"],
          readTime: 12,
          isPublished: true,
          publishedAt: new Date(),
        }
      ]);

      // Seed portfolio items
      await db.insert(portfolioItems).values([
        {
          title: "EcomerceHub Platform",
          slug: "ecommercehub-platform",
          description: "Multi-vendor marketplace with advanced analytics",
          fullDescription: "A professional e-commerce platform supporting multiple vendors with real-time analytics, inventory management, and automated marketing tools.",
          technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
          category: "SaaS",
          clientName: "RetailTech Inc",
          projectUrl: "https://ecommercehub.example.com",
          images: ["/images/portfolio/ecommercehub-1.jpg", "/images/portfolio/ecommercehub-2.jpg"],
        }
      ]);

      // Seed testimonials
      await db.insert(testimonials).values([
        {
          name: "Michael Rodriguez",
          company: "TechStart Solutions",
          position: "CEO",
          content: "InfiniQode transformed our vision into a powerful SaaS platform. Their expertise and attention to detail exceeded our expectations.",
          rating: 5,
          image: "/images/testimonials/michael.jpg",
        }
      ]);

      // Seed default page builder components
      await db.insert(pageBuilderComponents).values([
        {
          name: "Hero Section",
          category: "hero",
          componentType: "layout",
          defaultProps: {
            title: "Welcome to Our Platform",
            subtitle: "Transform your business with our solutions",
            backgroundImage: "",
            buttonText: "Get Started",
            buttonLink: "#contact"
          },
          schema: {
            title: { type: "string", required: true },
            subtitle: { type: "string", required: false },
            backgroundImage: { type: "image", required: false },
            buttonText: { type: "string", required: true },
            buttonLink: { type: "string", required: true }
          },
        },
        {
          name: "Feature Grid",
          category: "content",
          componentType: "grid",
          defaultProps: {
            title: "Our Features",
            features: [
              { title: "Fast Performance", description: "Lightning fast load times", icon: "⚡" },
              { title: "Secure", description: "Enterprise-grade security", icon: "🔒" },
              { title: "Scalable", description: "Grows with your business", icon: "📈" }
            ]
          },
          schema: {
            title: { type: "string", required: true },
            features: { 
              type: "array", 
              items: {
                title: { type: "string", required: true },
                description: { type: "string", required: true },
                icon: { type: "string", required: false }
              }
            }
          },
        }
      ]);

      // Seed default theme
      await db.insert(themeSettings).values([
        {
          name: "Default Glass Theme",
          isActive: true,
          colors: {
            primary: "#3B82F6",
            secondary: "#8B5CF6",
            accent: "#F59E0B",
            background: "#0F172A",
            surface: "rgba(255, 255, 255, 0.1)",
            text: "#FFFFFF"
          },
          fonts: {
            heading: "Inter",
            body: "Inter",
            sizes: { xs: "12px", sm: "14px", base: "16px", lg: "18px", xl: "20px" }
          },
          spacing: {
            xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "32px", "2xl": "48px"
          },
          borderRadius: {
            sm: "4px", md: "8px", lg: "12px", xl: "16px", "2xl": "24px"
          },
          shadows: {
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          },
          animations: {
            duration: { fast: "0.15s", normal: "0.3s", slow: "0.5s" },
            easing: "cubic-bezier(0.4, 0, 0.2, 1)"
          },
          layout: {
            maxWidth: "1280px",
            containerPadding: "1rem",
            headerHeight: "80px"
          }
        }
      ]);

      console.log("Database seeded successfully");
    } catch (error) {
      console.error("Error seeding database:", error);
    }
  }

  // ========== USER METHODS ==========
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await db.insert(users).values(user).returning();
    return result[0];
  }

  // ========== SERVICE METHODS ==========
  async getServices(): Promise<Service[]> {
    return await db.select().from(services).where(eq(services.isActive, true));
  }

  async getService(id: string): Promise<Service | undefined> {
    const result = await db.select().from(services).where(eq(services.id, id)).limit(1);
    return result[0];
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    const result = await db.select().from(services).where(eq(services.slug, slug)).limit(1);
    return result[0];
  }

  async createService(service: InsertService): Promise<Service> {
    const result = await db.insert(services).values(service).returning();
    return result[0];
  }

  // ========== BLOG POST METHODS ==========
  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts)
      .where(eq(blogPosts.isPublished, true))
      .orderBy(desc(blogPosts.publishedAt));
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
    return result[0];
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
    return result[0];
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const result = await db.insert(blogPosts).values(post).returning();
    return result[0];
  }

  // ========== PORTFOLIO METHODS ==========
  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return await db.select().from(portfolioItems).orderBy(desc(portfolioItems.createdAt));
  }

  async getActivePortfolioItems(): Promise<PortfolioItem[]> {
    return await db.select().from(portfolioItems)
      .where(eq(portfolioItems.isActive, true))
      .orderBy(desc(portfolioItems.createdAt));
  }

  async getPortfolioItem(id: string): Promise<PortfolioItem | undefined> {
    const result = await db.select().from(portfolioItems).where(eq(portfolioItems.id, id)).limit(1);
    return result[0];
  }

  async getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | undefined> {
    const result = await db.select().from(portfolioItems).where(eq(portfolioItems.slug, slug)).limit(1);
    return result[0];
  }

  async createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem> {
    const result = await db.insert(portfolioItems).values(item).returning();
    return result[0];
  }

  // ========== CONTACT INQUIRY METHODS ==========
  async getContactInquiries(): Promise<ContactInquiry[]> {
    return await db.select().from(contactInquiries).orderBy(desc(contactInquiries.createdAt));
  }

  async getContactInquiry(id: string): Promise<ContactInquiry | undefined> {
    const result = await db.select().from(contactInquiries).where(eq(contactInquiries.id, id)).limit(1);
    return result[0];
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const result = await db.insert(contactInquiries).values(inquiry).returning();
    return result[0];
  }

  // ========== TESTIMONIAL METHODS ==========
  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials).orderBy(desc(testimonials.createdAt));
  }

  async getActiveTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials)
      .where(eq(testimonials.isActive, true))
      .orderBy(desc(testimonials.createdAt));
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const result = await db.insert(testimonials).values(testimonial).returning();
    return result[0];
  }

  // ========== CMS PAGE TEMPLATE METHODS ==========
  async getPageTemplates(): Promise<PageTemplate[]> {
    return await db.select().from(pageTemplates)
      .where(eq(pageTemplates.isActive, true))
      .orderBy(desc(pageTemplates.createdAt));
  }

  async getPageTemplateById(id: string): Promise<PageTemplate | undefined> {
    const result = await db.select().from(pageTemplates).where(eq(pageTemplates.id, id)).limit(1);
    return result[0];
  }

  async createPageTemplate(template: InsertPageTemplate): Promise<PageTemplate> {
    const result = await db.insert(pageTemplates).values(template).returning();
    return result[0];
  }

  async updatePageTemplate(id: string, template: InsertPageTemplate): Promise<PageTemplate | undefined> {
    const result = await db.update(pageTemplates)
      .set({ ...template, updatedAt: new Date() })
      .where(eq(pageTemplates.id, id))
      .returning();
    return result[0];
  }

  async deletePageTemplate(id: string): Promise<boolean> {
    const result = await db.delete(pageTemplates).where(eq(pageTemplates.id, id));
    return result.rowCount > 0;
  }

  // ========== CMS PAGE METHODS ==========
  async getPages(filters?: { status?: string; type?: string }): Promise<Page[]> {
    if (filters?.status && filters?.type) {
      return await db.select().from(pages)
        .where(and(eq(pages.status, filters.status), eq(pages.type, filters.type)))
        .orderBy(desc(pages.createdAt));
    } else if (filters?.status) {
      return await db.select().from(pages)
        .where(eq(pages.status, filters.status))
        .orderBy(desc(pages.createdAt));
    } else if (filters?.type) {
      return await db.select().from(pages)
        .where(eq(pages.type, filters.type))
        .orderBy(desc(pages.createdAt));
    }
    
    return await db.select().from(pages).orderBy(desc(pages.createdAt));
  }

  async getPageBySlug(slug: string): Promise<Page | undefined> {
    const result = await db.select().from(pages).where(eq(pages.slug, slug)).limit(1);
    return result[0];
  }

  async createPage(page: InsertPage): Promise<Page> {
    const result = await db.insert(pages).values(page).returning();
    return result[0];
  }

  async updatePage(id: string, page: InsertPage): Promise<Page | undefined> {
    const result = await db.update(pages)
      .set({ ...page, updatedAt: new Date() })
      .where(eq(pages.id, id))
      .returning();
    return result[0];
  }

  async publishPage(id: string): Promise<Page | undefined> {
    const result = await db.update(pages)
      .set({ status: "published", publishedAt: new Date(), updatedAt: new Date() })
      .where(eq(pages.id, id))
      .returning();
    return result[0];
  }

  async deletePage(id: string): Promise<boolean> {
    const result = await db.delete(pages).where(eq(pages.id, id));
    return result.rowCount > 0;
  }

  // ========== SEO SETTINGS METHODS ==========
  async getSeoSettings(entityType: string, entityId: string): Promise<SeoSettings | undefined> {
    let result: SeoSettings[];
    
    switch (entityType) {
      case 'page':
        result = await db.select().from(seoSettings).where(eq(seoSettings.pageId, entityId)).limit(1);
        break;
      case 'service':
        result = await db.select().from(seoSettings).where(eq(seoSettings.serviceId, entityId)).limit(1);
        break;
      case 'blog':
        result = await db.select().from(seoSettings).where(eq(seoSettings.blogPostId, entityId)).limit(1);
        break;
      case 'portfolio':
        result = await db.select().from(seoSettings).where(eq(seoSettings.portfolioItemId, entityId)).limit(1);
        break;
      default:
        return undefined;
    }
    
    return result[0];
  }

  async createOrUpdateSeoSettings(settings: InsertSeoSettings): Promise<SeoSettings> {
    // Try to find existing settings
    let existing: SeoSettings[] = [];
    
    if (settings.pageId) {
      existing = await db.select().from(seoSettings).where(eq(seoSettings.pageId, settings.pageId)).limit(1);
    } else if (settings.serviceId) {
      existing = await db.select().from(seoSettings).where(eq(seoSettings.serviceId, settings.serviceId)).limit(1);
    } else if (settings.blogPostId) {
      existing = await db.select().from(seoSettings).where(eq(seoSettings.blogPostId, settings.blogPostId)).limit(1);
    } else if (settings.portfolioItemId) {
      existing = await db.select().from(seoSettings).where(eq(seoSettings.portfolioItemId, settings.portfolioItemId)).limit(1);
    }
    
    if (existing.length > 0) {
      // Update existing
      const result = await db.update(seoSettings)
        .set({ ...settings, updatedAt: new Date() })
        .where(eq(seoSettings.id, existing[0].id))
        .returning();
      return result[0];
    } else {
      // Create new
      const result = await db.insert(seoSettings).values(settings).returning();
      return result[0];
    }
  }

  // ========== THEME SETTINGS METHODS ==========
  async getThemes(): Promise<ThemeSettings[]> {
    return await db.select().from(themeSettings).orderBy(desc(themeSettings.createdAt));
  }

  async getActiveTheme(): Promise<ThemeSettings | undefined> {
    const result = await db.select().from(themeSettings)
      .where(eq(themeSettings.isActive, true))
      .limit(1);
    return result[0];
  }

  async createTheme(theme: InsertThemeSettings): Promise<ThemeSettings> {
    const result = await db.insert(themeSettings).values(theme).returning();
    return result[0];
  }

  async updateTheme(id: string, theme: InsertThemeSettings): Promise<ThemeSettings | undefined> {
    const result = await db.update(themeSettings)
      .set({ ...theme, updatedAt: new Date() })
      .where(eq(themeSettings.id, id))
      .returning();
    return result[0];
  }

  async activateTheme(id: string): Promise<ThemeSettings | undefined> {
    // Deactivate all themes first
    await db.update(themeSettings).set({ isActive: false });
    
    // Activate the selected theme
    const result = await db.update(themeSettings)
      .set({ isActive: true, updatedAt: new Date() })
      .where(eq(themeSettings.id, id))
      .returning();
    return result[0];
  }

  // ========== PAGE BUILDER COMPONENT METHODS ==========
  async getPageBuilderComponents(category?: string): Promise<PageBuilderComponent[]> {
    if (category) {
      return await db.select().from(pageBuilderComponents)
        .where(and(eq(pageBuilderComponents.isActive, true), eq(pageBuilderComponents.category, category)))
        .orderBy(pageBuilderComponents.name);
    }
    
    return await db.select().from(pageBuilderComponents)
      .where(eq(pageBuilderComponents.isActive, true))
      .orderBy(pageBuilderComponents.name);
  }

  async createPageBuilderComponent(component: InsertPageBuilderComponent): Promise<PageBuilderComponent> {
    const result = await db.insert(pageBuilderComponents).values(component).returning();
    return result[0];
  }

  // ========== SITE SETTINGS METHODS ==========
  async getSiteSettings(): Promise<SiteSettings | undefined> {
    const result = await db.select().from(siteSettings).limit(1);
    return result[0];
  }

  async createOrUpdateSiteSettings(settings: InsertSiteSettings): Promise<SiteSettings> {
    const existing = await this.getSiteSettings();
    
    if (existing) {
      // Update existing
      const result = await db.update(siteSettings)
        .set({ ...settings, updatedAt: new Date() })
        .where(eq(siteSettings.id, existing.id))
        .returning();
      return result[0];
    } else {
      // Create new
      const result = await db.insert(siteSettings).values(settings).returning();
      return result[0];
    }
  }

  // ========== SEO SITEMAP METHODS ==========
  async generateSitemap(): Promise<string> {
    const siteSettings = await this.getSiteSettings();
    const baseUrl = process.env.REPLIT_DOMAINS ? `https://${process.env.REPLIT_DOMAINS.split(',')[0]}` : 'https://localhost:5000';
    
    // Get all published content
    const publishedPages = await db.select().from(pages).where(eq(pages.status, 'published'));
    const publishedBlogPosts = await this.getPublishedBlogPosts();
    const activeServices = await this.getServices();
    const activePortfolioItems = await this.getActivePortfolioItems();
    
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add static pages
    sitemap += `
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

    // Add CMS pages
    for (const page of publishedPages) {
      const seo = await this.getSeoSettings('page', page.id);
      sitemap += `
  <url>
    <loc>${baseUrl}/${page.slug}</loc>
    <lastmod>${page.updatedAt?.toISOString()}</lastmod>
    <changefreq>${seo?.changeFreq || 'monthly'}</changefreq>
    <priority>${(seo?.priority || 5) / 10}</priority>
  </url>`;
    }

    // Add blog posts
    for (const post of publishedBlogPosts) {
      const seo = await this.getSeoSettings('blog', post.id);
      sitemap += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.updatedAt?.toISOString()}</lastmod>
    <changefreq>${seo?.changeFreq || 'monthly'}</changefreq>
    <priority>${(seo?.priority || 7) / 10}</priority>
  </url>`;
    }

    // Add services
    for (const service of activeServices) {
      const seo = await this.getSeoSettings('service', service.id);
      sitemap += `
  <url>
    <loc>${baseUrl}/services/${service.slug}</loc>
    <lastmod>${service.createdAt?.toISOString()}</lastmod>
    <changefreq>${seo?.changeFreq || 'monthly'}</changefreq>
    <priority>${(seo?.priority || 8) / 10}</priority>
  </url>`;
    }

    // Add portfolio items
    for (const item of activePortfolioItems) {
      const seo = await this.getSeoSettings('portfolio', item.id);
      sitemap += `
  <url>
    <loc>${baseUrl}/portfolio/${item.slug}</loc>
    <lastmod>${item.createdAt?.toISOString()}</lastmod>
    <changefreq>${seo?.changeFreq || 'monthly'}</changefreq>
    <priority>${(seo?.priority || 6) / 10}</priority>
  </url>`;
    }

    sitemap += `
</urlset>`;

    return sitemap;
  }

  // Integrations
  async getIntegrations(): Promise<Integration[]> {
    return await db.select().from(integrations)
      .orderBy(desc(integrations.createdAt));
  }

  async getIntegrationById(id: string): Promise<Integration | undefined> {
    const result = await db.select().from(integrations).where(eq(integrations.id, id)).limit(1);
    return result[0];
  }

  async updateIntegration(id: string, data: Partial<Integration>): Promise<Integration | undefined> {
    const result = await db.update(integrations)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(integrations.id, id))
      .returning();
    return result[0];
  }

  async testIntegration(id: string): Promise<{ success: boolean; message: string }> {
    // Here you would implement actual integration testing logic
    // For now, we'll simulate a successful test
    const integration = await this.getIntegrationById(id);
    if (!integration) {
      return { success: false, message: "Integration not found" };
    }
    
    // Update last synced time
    await this.updateIntegration(id, { 
      lastSynced: new Date(),
      status: 'connected'
    });
    
    return { success: true, message: `${integration.name} connection test successful` };
  }
}

export const storage = new DatabaseStorage();