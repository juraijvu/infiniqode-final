import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactInquirySchema,
  insertBlogPostSchema,
  insertServiceSchema,
  insertPortfolioItemSchema,
  insertTestimonialSchema,
  insertPageTemplateSchema,
  insertPageSchema,
  insertSeoSettingsSchema,
  insertThemeSettingsSchema,
  insertPageBuilderComponentSchema,
  insertSiteSettingsSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Services API
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  app.get("/api/services/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const service = await storage.getServiceBySlug(slug);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch service" });
    }
  });

  app.post("/api/services", async (req, res) => {
    try {
      const validatedData = insertServiceSchema.parse(req.body);
      const service = await storage.createService(validatedData);
      res.status(201).json(service);
    } catch (error) {
      res.status(400).json({ error: "Invalid service data" });
    }
  });

  // Blog Posts API
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      if (!post || !post.isPublished) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: "Invalid blog post data" });
    }
  });

  // Portfolio API
  app.get("/api/portfolio", async (req, res) => {
    try {
      const items = await storage.getActivePortfolioItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio items" });
    }
  });

  app.get("/api/portfolio/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const item = await storage.getPortfolioItemBySlug(slug);
      if (!item || !item.isActive) {
        return res.status(404).json({ error: "Portfolio item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio item" });
    }
  });

  app.post("/api/portfolio", async (req, res) => {
    try {
      const validatedData = insertPortfolioItemSchema.parse(req.body);
      const item = await storage.createPortfolioItem(validatedData);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: "Invalid portfolio item data" });
    }
  });

  // Contact API
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.status(201).json({ message: "Contact inquiry submitted successfully", id: inquiry.id });
    } catch (error) {
      res.status(400).json({ error: "Invalid contact data" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact inquiries" });
    }
  });

  // Testimonials API
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getActiveTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error) {
      res.status(400).json({ error: "Invalid testimonial data" });
    }
  });

  // ========== CMS API ENDPOINTS ==========
  
  // Page Templates API
  app.get("/api/cms/page-templates", async (req, res) => {
    try {
      const templates = await storage.getPageTemplates();
      res.json(templates);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch page templates" });
    }
  });

  app.get("/api/cms/page-templates/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const template = await storage.getPageTemplateById(id);
      if (!template) {
        return res.status(404).json({ error: "Page template not found" });
      }
      res.json(template);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch page template" });
    }
  });

  app.post("/api/cms/page-templates", async (req, res) => {
    try {
      const validatedData = insertPageTemplateSchema.parse(req.body);
      const template = await storage.createPageTemplate(validatedData);
      res.status(201).json(template);
    } catch (error) {
      res.status(400).json({ error: "Invalid page template data" });
    }
  });

  app.put("/api/cms/page-templates/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertPageTemplateSchema.parse(req.body);
      const template = await storage.updatePageTemplate(id, validatedData);
      if (!template) {
        return res.status(404).json({ error: "Page template not found" });
      }
      res.json(template);
    } catch (error) {
      res.status(400).json({ error: "Invalid page template data" });
    }
  });

  app.delete("/api/cms/page-templates/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const success = await storage.deletePageTemplate(id);
      if (!success) {
        return res.status(404).json({ error: "Page template not found" });
      }
      res.json({ message: "Page template deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete page template" });
    }
  });

  // Pages API  
  app.get("/api/cms/pages", async (req, res) => {
    try {
      const { status, type } = req.query;
      const pages = await storage.getPages({ 
        status: status as string, 
        type: type as string 
      });
      res.json(pages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch pages" });
    }
  });

  app.get("/api/cms/pages/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const page = await storage.getPageBySlug(slug);
      if (!page) {
        return res.status(404).json({ error: "Page not found" });
      }
      res.json(page);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch page" });
    }
  });

  app.post("/api/cms/pages", async (req, res) => {
    try {
      const validatedData = insertPageSchema.parse(req.body);
      const page = await storage.createPage(validatedData);
      res.status(201).json(page);
    } catch (error) {
      res.status(400).json({ error: "Invalid page data" });
    }
  });

  app.put("/api/cms/pages/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertPageSchema.parse(req.body);
      const page = await storage.updatePage(id, validatedData);
      if (!page) {
        return res.status(404).json({ error: "Page not found" });
      }
      res.json(page);
    } catch (error) {
      res.status(400).json({ error: "Invalid page data" });
    }
  });

  app.post("/api/cms/pages/:id/publish", async (req, res) => {
    try {
      const { id } = req.params;
      const page = await storage.publishPage(id);
      if (!page) {
        return res.status(404).json({ error: "Page not found" });
      }
      res.json(page);
    } catch (error) {
      res.status(500).json({ error: "Failed to publish page" });
    }
  });

  app.delete("/api/cms/pages/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const success = await storage.deletePage(id);
      if (!success) {
        return res.status(404).json({ error: "Page not found" });
      }
      res.json({ message: "Page deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete page" });
    }
  });

  // SEO Settings API
  app.get("/api/cms/seo/:entityType/:entityId", async (req, res) => {
    try {
      const { entityType, entityId } = req.params;
      const seoSettings = await storage.getSeoSettings(entityType, entityId);
      res.json(seoSettings || {});
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch SEO settings" });
    }
  });

  app.post("/api/cms/seo", async (req, res) => {
    try {
      const validatedData = insertSeoSettingsSchema.parse(req.body);
      const seoSettings = await storage.createOrUpdateSeoSettings(validatedData);
      res.status(201).json(seoSettings);
    } catch (error) {
      res.status(400).json({ error: "Invalid SEO settings data" });
    }
  });

  // Theme Settings API
  app.get("/api/cms/themes", async (req, res) => {
    try {
      const themes = await storage.getThemes();
      res.json(themes);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch themes" });
    }
  });

  app.get("/api/cms/themes/active", async (req, res) => {
    try {
      const theme = await storage.getActiveTheme();
      res.json(theme || {});
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch active theme" });
    }
  });

  app.post("/api/cms/themes", async (req, res) => {
    try {
      const validatedData = insertThemeSettingsSchema.parse(req.body);
      const theme = await storage.createTheme(validatedData);
      res.status(201).json(theme);
    } catch (error) {
      res.status(400).json({ error: "Invalid theme data" });
    }
  });

  app.put("/api/cms/themes/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertThemeSettingsSchema.parse(req.body);
      const theme = await storage.updateTheme(id, validatedData);
      if (!theme) {
        return res.status(404).json({ error: "Theme not found" });
      }
      res.json(theme);
    } catch (error) {
      res.status(400).json({ error: "Invalid theme data" });
    }
  });

  app.post("/api/cms/themes/:id/activate", async (req, res) => {
    try {
      const { id } = req.params;
      const theme = await storage.activateTheme(id);
      if (!theme) {
        return res.status(404).json({ error: "Theme not found" });
      }
      res.json(theme);
    } catch (error) {
      res.status(500).json({ error: "Failed to activate theme" });
    }
  });

  // Page Builder Components API
  app.get("/api/cms/components", async (req, res) => {
    try {
      const { category } = req.query;
      const components = await storage.getPageBuilderComponents(category as string);
      res.json(components);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch components" });
    }
  });

  app.post("/api/cms/components", async (req, res) => {
    try {
      const validatedData = insertPageBuilderComponentSchema.parse(req.body);
      const component = await storage.createPageBuilderComponent(validatedData);
      res.status(201).json(component);
    } catch (error) {
      res.status(400).json({ error: "Invalid component data" });
    }
  });

  // Site Settings API
  app.get("/api/cms/site-settings", async (req, res) => {
    try {
      const settings = await storage.getSiteSettings();
      res.json(settings || {});
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch site settings" });
    }
  });

  app.post("/api/cms/site-settings", async (req, res) => {
    try {
      const validatedData = insertSiteSettingsSchema.parse(req.body);
      const settings = await storage.createOrUpdateSiteSettings(validatedData);
      res.status(201).json(settings);
    } catch (error) {
      res.status(400).json({ error: "Invalid site settings data" });
    }
  });

  // Generate Sitemap
  app.get("/sitemap.xml", async (req, res) => {
    try {
      const sitemap = await storage.generateSitemap();
      res.set('Content-Type', 'text/xml');
      res.send(sitemap);
    } catch (error) {
      res.status(500).json({ error: "Failed to generate sitemap" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
