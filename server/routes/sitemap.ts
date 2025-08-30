import { Router, Request, Response } from 'express';
import { DatabaseStorage } from './storage';

const router = Router();
const storage = new DatabaseStorage();

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
}

// Generate XML sitemap
router.get('/sitemap.xml', async (req: Request, res: Response) => {
  try {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const sitemapEntries: SitemapEntry[] = [];

    // Add static pages
    const staticPages = [
      { path: '/', changefreq: 'daily' as const, priority: '1.0' },
      { path: '/about', changefreq: 'monthly' as const, priority: '0.8' },
      { path: '/services', changefreq: 'weekly' as const, priority: '0.9' },
      { path: '/portfolio', changefreq: 'weekly' as const, priority: '0.8' },
      { path: '/blog', changefreq: 'daily' as const, priority: '0.8' },
      { path: '/contact', changefreq: 'monthly' as const, priority: '0.7' },
    ];

    staticPages.forEach(page => {
      sitemapEntries.push({
        loc: `${baseUrl}${page.path}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: page.changefreq,
        priority: page.priority,
      });
    });

    // Add dynamic service pages
    const services = await storage.getServices();
    services.forEach(service => {
      sitemapEntries.push({
        loc: `${baseUrl}/services/${service.slug}`,
        lastmod: new Date(service.createdAt).toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.8',
      });
    });

    // Add blog posts
    const blogPosts = await storage.getBlogPosts();
    blogPosts.forEach(post => {
      sitemapEntries.push({
        loc: `${baseUrl}/blog/${post.slug}`,
        lastmod: new Date(post.updatedAt).toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.7',
      });
    });

    // Add portfolio projects  
    const portfolioProjects = await storage.getPortfolioProjects();
    portfolioProjects.forEach(project => {
      sitemapEntries.push({
        loc: `${baseUrl}/portfolio/${project.slug}`,
        lastmod: new Date(project.updatedAt).toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.7',
      });
    });

    // Generate XML
    const xml = generateSitemapXML(sitemapEntries);

    res.set('Content-Type', 'application/xml');
    res.send(xml);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
});

// Generate robots.txt
router.get('/robots.txt', async (req: Request, res: Response) => {
  try {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    
    const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Block admin areas
Disallow: /admin/
Disallow: /api/

# Block temporary files
Disallow: /*.pdf$
Disallow: /tmp/
Disallow: /temp/

# Crawl delay
Crawl-delay: 1`;

    res.set('Content-Type', 'text/plain');
    res.send(robotsTxt);
  } catch (error) {
    console.error('Error generating robots.txt:', error);
    res.status(500).send('User-agent: *\nAllow: /');
  }
});

// Get sitemap as JSON for admin interface
router.get('/api/sitemap', async (req: Request, res: Response) => {
  try {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const sitemapData = {
      baseUrl,
      generatedAt: new Date().toISOString(),
      totalUrls: 0,
      sections: {
        static: [],
        services: [],
        blog: [],
        portfolio: [],
      },
    };

    // Static pages
    const staticPages = [
      { path: '/', title: 'Homepage', priority: '1.0' },
      { path: '/about', title: 'About Us', priority: '0.8' },
      { path: '/services', title: 'Services', priority: '0.9' },
      { path: '/portfolio', title: 'Portfolio', priority: '0.8' },
      { path: '/blog', title: 'Blog', priority: '0.8' },
      { path: '/contact', title: 'Contact', priority: '0.7' },
    ];

    sitemapData.sections.static = staticPages.map(page => ({
      url: `${baseUrl}${page.path}`,
      title: page.title,
      priority: page.priority,
      lastmod: new Date().toISOString().split('T')[0],
    }));

    // Services
    const services = await storage.getServices();
    sitemapData.sections.services = services.map(service => ({
      url: `${baseUrl}/services/${service.slug}`,
      title: service.name,
      priority: '0.8',
      lastmod: new Date(service.createdAt).toISOString().split('T')[0],
    }));

    // Blog posts
    const blogPosts = await storage.getBlogPosts();
    sitemapData.sections.blog = blogPosts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      title: post.title,
      priority: '0.7',
      lastmod: new Date(post.updatedAt).toISOString().split('T')[0],
    }));

    // Portfolio
    const portfolioProjects = await storage.getPortfolioProjects();
    sitemapData.sections.portfolio = portfolioProjects.map(project => ({
      url: `${baseUrl}/portfolio/${project.slug}`,
      title: project.title,
      priority: '0.7', 
      lastmod: new Date(project.updatedAt).toISOString().split('T')[0],
    }));

    sitemapData.totalUrls = 
      sitemapData.sections.static.length +
      sitemapData.sections.services.length +
      sitemapData.sections.blog.length +
      sitemapData.sections.portfolio.length;

    res.json(sitemapData);
  } catch (error) {
    console.error('Error getting sitemap data:', error);
    res.status(500).json({ error: 'Failed to get sitemap data' });
  }
});

function generateSitemapXML(entries: SitemapEntry[]): string {
  const urlElements = entries.map(entry => {
    let urlXml = `    <url>
        <loc>${entry.loc}</loc>`;
    
    if (entry.lastmod) {
      urlXml += `
        <lastmod>${entry.lastmod}</lastmod>`;
    }
    
    if (entry.changefreq) {
      urlXml += `
        <changefreq>${entry.changefreq}</changefreq>`;
    }
    
    if (entry.priority) {
      urlXml += `
        <priority>${entry.priority}</priority>`;
    }
    
    urlXml += `
    </url>`;
    
    return urlXml;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

export default router;