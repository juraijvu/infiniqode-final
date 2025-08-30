import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowLeft, 
  Code2, 
  Terminal, 
  GitBranch, 
  Zap,
  Database,
  Server,
  CheckCircle,
  XCircle,
  User,
  Calendar,
  Clock
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function TechnicalBlog() {
  const { slug } = useParams();
  
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog", slug],
  });

  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading technical article...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <GlassCard className="p-8 text-center max-w-md">
            <h1 className="text-2xl font-bold mb-4">Technical Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The technical article you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/blog">
              <Button className="glass-button" data-testid="button-back-to-blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </GlassCard>
        </div>
        <Footer />
      </>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "DigitalCraft"
    },
    "datePublished": post.publishedAt,
    "proficiencyLevel": "Intermediate"
  };

  return (
    <>
      <SEOHead
        title={`${post.title} - Technical Guide`}
        description={post.excerpt}
        keywords={`${post.tags?.join(', ') || ''}, technical tutorial, development guide`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Header with Syntax-Highlighted Code Block */}
      <section className="relative pt-20 pb-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" data-testid="button-back-to-blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-black mb-4">
                <Code2 className="mr-2 h-4 w-4" />
                Technical
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 mb-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt || '').toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
            
            {/* Code Preview Block */}
            <div className="bg-black/50 rounded-lg p-6 border border-accent/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-accent text-sm font-mono">example.js</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                <code>{`const buildOptimizedAPI = async () => {
  const config = {
    cache: true,
    compression: 'gzip',
    rateLimit: 1000
  };
  
  return await api.initialize(config);
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Terminal Example */}
      <section className="py-12 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold">Try It Yourself</h2>
            </div>
            
            <div className="bg-black rounded-lg p-4 border border-accent/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-400 text-sm font-mono">bash</span>
              </div>
              <div className="font-mono text-sm">
                <div className="text-gray-400">$ npm install optimization-toolkit</div>
                <div className="text-green-400 mt-2">✓ Package installed successfully</div>
                <div className="text-gray-400 mt-2">$ npm run optimize</div>
                <div className="text-blue-400 mt-2">→ Running performance optimization...</div>
                <div className="text-green-400 mt-1">✓ Build time reduced by 40%</div>
                <div className="text-green-400">✓ Bundle size optimized</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Main Content with Architecture Diagrams */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Architecture Overview
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Understanding the system architecture is crucial for implementation. 
                The diagram below shows the complete data flow and component relationships.
              </p>
            </div>
            
            <div className="text-muted-foreground leading-relaxed space-y-6">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* API Documentation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold">Database Integration</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <code className="text-sm bg-muted px-2 py-1 rounded">GET /api/data</code>
                  <Badge variant="outline" className="text-green-600 border-green-600">200</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-sm bg-muted px-2 py-1 rounded">POST /api/data</code>
                  <Badge variant="outline" className="text-green-600 border-green-600">201</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-sm bg-muted px-2 py-1 rounded">PUT /api/data/:id</code>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">200</Badge>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Server className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold">Server Configuration</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Memory Usage:</span>
                  <span className="font-mono">512MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CPU Threads:</span>
                  <span className="font-mono">4 cores</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cache TTL:</span>
                  <span className="font-mono">300s</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Error/Solution Accordion */}
      <section className="py-12 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Common Issues & Solutions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="error1">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span>Build fails with module resolution error</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-sm mb-3">Update your tsconfig.json paths configuration:</p>
                  <pre className="bg-black text-green-400 p-3 rounded text-xs font-mono overflow-x-auto">
{`"paths": {
  "@/*": ["./src/*"],
  "@components/*": ["./src/components/*"]
}`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="error2">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span>Performance degradation with large datasets</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-sm mb-3">Implement pagination and virtual scrolling:</p>
                  <pre className="bg-black text-green-400 p-3 rounded text-xs font-mono overflow-x-auto">
{`const optimizedQuery = useMemo(() => ({
  limit: 50,
  offset: page * 50,
  cache: true
}), [page]);`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Performance Benchmarks */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Performance Benchmarks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6 text-center">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-accent mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Faster Build Time</div>
            </GlassCard>
            
            <GlassCard className="p-6 text-center">
              <Database className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-accent mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Memory Reduction</div>
            </GlassCard>
            
            <GlassCard className="p-6 text-center">
              <Server className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-accent mb-2">3x</div>
              <div className="text-sm text-muted-foreground">Response Speed</div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Tool Integration Badges */}
      <section className="py-12 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Compatible Tools & Technologies</h2>
          
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"].map((tool) => (
              <Badge key={tool} variant="outline" className="text-lg px-4 py-2 border-accent text-accent">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Version Control History */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <GitBranch className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold">Article Updates</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="flex-1">
                <div className="font-semibold">v2.1 - Performance Improvements</div>
                <div className="text-sm text-muted-foreground">Added caching strategies and optimization techniques</div>
              </div>
              <div className="text-sm text-muted-foreground">2 days ago</div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <div className="flex-1">
                <div className="font-semibold">v2.0 - Major Update</div>
                <div className="text-sm text-muted-foreground">Complete rewrite with latest best practices</div>
              </div>
              <div className="text-sm text-muted-foreground">1 week ago</div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <div className="flex-1">
                <div className="font-semibold">v1.0 - Initial Release</div>
                <div className="text-sm text-muted-foreground">First version of the technical guide</div>
              </div>
              <div className="text-sm text-muted-foreground">1 month ago</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}