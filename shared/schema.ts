import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean, json, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  role: text("role").notNull().default("user"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const services = pgTable("services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  fullDescription: text("full_description").notNull(),
  features: text("features").array().notNull(),
  technologies: text("technologies").array().notNull(),
  pricing: text("pricing"),
  icon: text("icon").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  authorImage: text("author_image"),
  featuredImage: text("featured_image"),
  tags: text("tags").array().notNull(),
  readTime: integer("read_time").notNull(),
  isPublished: boolean("is_published").notNull().default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const portfolioItems = pgTable("portfolio_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  fullDescription: text("full_description").notNull(),
  technologies: text("technologies").array().notNull(),
  category: text("category").notNull(),
  clientName: text("client_name"),
  projectUrl: text("project_url"),
  githubUrl: text("github_url"),
  images: text("images").array().notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactInquiries = pgTable("contact_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  service: text("service").notNull(),
  budget: text("budget"),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull(),
  image: text("image"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// CMS System Tables
export const pageTemplates = pgTable("page_templates", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  type: text("type").notNull(), // 'service', 'blog', 'portfolio', 'custom'
  category: text("category"), // 'saas', 'marketing', 'webdev' for services
  layout: json("layout").notNull(), // Page structure and components
  isDefault: boolean("is_default").notNull().default(false),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const pages = pgTable("pages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  type: text("type").notNull(), // 'service', 'blog', 'portfolio', 'landing', 'about', 'contact'
  templateId: varchar("template_id").references(() => pageTemplates.id),
  content: json("content").notNull(), // Page content structure
  status: text("status").notNull().default("draft"), // 'draft', 'published', 'archived'
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const seoSettings = pgTable("seo_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  pageId: varchar("page_id").references(() => pages.id),
  serviceId: varchar("service_id").references(() => services.id),
  blogPostId: varchar("blog_post_id").references(() => blogPosts.id),
  portfolioItemId: varchar("portfolio_item_id").references(() => portfolioItems.id),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords").array(),
  ogTitle: text("og_title"),
  ogDescription: text("og_description"),
  ogImage: text("og_image"),
  ogType: text("og_type").default("website"),
  twitterCard: text("twitter_card").default("summary_large_image"),
  twitterTitle: text("twitter_title"),
  twitterDescription: text("twitter_description"),
  twitterImage: text("twitter_image"),
  canonicalUrl: text("canonical_url"),
  robotsMeta: text("robots_meta").default("index,follow"),
  schemaMarkup: json("schema_markup"), // JSON-LD structured data
  priority: integer("priority").default(5), // 1-10 for sitemap priority
  changeFreq: text("change_freq").default("monthly"), // sitemap change frequency
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const themeSettings = pgTable("theme_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  isActive: boolean("is_active").notNull().default(false),
  colors: json("colors").notNull(), // Color palette
  fonts: json("fonts").notNull(), // Font settings
  spacing: json("spacing").notNull(), // Spacing configuration
  borderRadius: json("border_radius").notNull(), // Border radius settings
  shadows: json("shadows").notNull(), // Shadow effects
  animations: json("animations").notNull(), // Animation preferences
  layout: json("layout").notNull(), // Layout settings
  customCss: text("custom_css"), // Custom CSS overrides
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const pageBuilderComponents = pgTable("page_builder_components", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  category: text("category").notNull(), // 'header', 'hero', 'content', 'cta', 'footer'
  componentType: text("component_type").notNull(), // 'text', 'image', 'button', 'form', 'grid'
  defaultProps: json("default_props").notNull(), // Default component properties
  schema: json("schema").notNull(), // Component property schema for validation
  preview: text("preview"), // Preview image URL
  isCustom: boolean("is_custom").notNull().default(false), // User-created vs system components
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Marketing and Analytics Integrations
export const integrations = pgTable("integrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  type: text("type").notNull(), // 'analytics', 'social', 'search', 'seo'
  provider: text("provider").notNull(), // 'google', 'facebook', 'microsoft', etc.
  config: json("config").notNull(), // Integration-specific configuration
  isEnabled: boolean("is_enabled").notNull().default(false),
  status: text("status").notNull().default("disconnected"), // 'connected', 'disconnected', 'error'
  lastSynced: timestamp("last_synced"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const siteSettings = pgTable("site_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  siteName: text("site_name").notNull(),
  tagline: text("tagline"),
  description: text("description"),
  logo: text("logo"),
  favicon: text("favicon"),
  contactEmail: text("contact_email"),
  contactPhone: text("contact_phone"),
  address: json("address"), // Physical address object
  socialMedia: json("social_media"), // Social media links
  analytics: json("analytics"), // Google Analytics, etc.
  tracking: json("tracking"), // Tracking codes
  maintenanceMode: boolean("maintenance_mode").notNull().default(false),
  defaultSeoSettings: json("default_seo_settings"), // Site-wide SEO defaults
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
});

export const insertServiceSchema = createInsertSchema(services).pick({
  name: true,
  slug: true,
  description: true,
  fullDescription: true,
  features: true,
  technologies: true,
  pricing: true,
  icon: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  slug: true,
  excerpt: true,
  content: true,
  author: true,
  authorImage: true,
  featuredImage: true,
  tags: true,
  readTime: true,
});

export const insertPortfolioItemSchema = createInsertSchema(portfolioItems).pick({
  title: true,
  slug: true,
  description: true,
  fullDescription: true,
  technologies: true,
  category: true,
  clientName: true,
  projectUrl: true,
  githubUrl: true,
  images: true,
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).pick({
  firstName: true,
  lastName: true,
  email: true,
  service: true,
  budget: true,
  message: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).pick({
  name: true,
  company: true,
  position: true,
  content: true,
  rating: true,
  image: true,
});

// CMS Insert schemas
export const insertPageTemplateSchema = createInsertSchema(pageTemplates).pick({
  name: true,
  slug: true,
  type: true,
  category: true,
  layout: true,
});

export const insertPageSchema = createInsertSchema(pages).pick({
  title: true,
  slug: true,
  type: true,
  templateId: true,
  content: true,
});

export const insertSeoSettingsSchema = createInsertSchema(seoSettings).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertThemeSettingsSchema = createInsertSchema(themeSettings).pick({
  name: true,
  colors: true,
  fonts: true,
  spacing: true,
  borderRadius: true,
  shadows: true,
  animations: true,
  layout: true,
  customCss: true,
});

export const insertPageBuilderComponentSchema = createInsertSchema(pageBuilderComponents).pick({
  name: true,
  category: true,
  componentType: true,
  defaultProps: true,
  schema: true,
  preview: true,
});

export const insertSiteSettingsSchema = createInsertSchema(siteSettings).pick({
  siteName: true,
  tagline: true,
  description: true,
  logo: true,
  favicon: true,
  contactEmail: true,
  contactPhone: true,
  address: true,
  socialMedia: true,
  analytics: true,
  tracking: true,
  defaultSeoSettings: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;
export type PortfolioItem = typeof portfolioItems.$inferSelect;

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

// CMS Types
export type InsertPageTemplate = z.infer<typeof insertPageTemplateSchema>;
export type PageTemplate = typeof pageTemplates.$inferSelect;

export type InsertPage = z.infer<typeof insertPageSchema>;
export type Page = typeof pages.$inferSelect;

export type InsertSeoSettings = z.infer<typeof insertSeoSettingsSchema>;
export type SeoSettings = typeof seoSettings.$inferSelect;

export type InsertThemeSettings = z.infer<typeof insertThemeSettingsSchema>;
export type ThemeSettings = typeof themeSettings.$inferSelect;

export type InsertPageBuilderComponent = z.infer<typeof insertPageBuilderComponentSchema>;
export type PageBuilderComponent = typeof pageBuilderComponents.$inferSelect;

export type InsertSiteSettings = z.infer<typeof insertSiteSettingsSchema>;
export type SiteSettings = typeof siteSettings.$inferSelect;

export type Integration = typeof integrations.$inferSelect;
