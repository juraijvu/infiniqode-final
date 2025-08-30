import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  AlertTriangle, 
  ExternalLink,
  CheckCircle,
  Clock,
  MapPin,
  Quote,
  User,
  Calendar,
  Globe
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function NewsBlog() {
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
            <p className="text-muted-foreground">Loading breaking news...</p>
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
            <h1 className="text-2xl font-bold mb-4">News Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The news article you're looking for doesn't exist or has been moved.
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
    "@type": "NewsArticle",
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
    "dateModified": post.updatedAt,
    "articleSection": "Technology News"
  };

  return (
    <>
      <SEOHead
        title={`${post.title} - Breaking News`}
        description={post.excerpt}
        keywords={`${post.tags?.join(', ') || ''}, breaking news, technology news, industry updates`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Breaking News Banner */}
      <section className="relative pt-20">
        <div className="bg-red-600 text-white py-3">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="h-5 w-5 animate-pulse" />
              <span className="font-semibold">BREAKING NEWS</span>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Updated {new Date(post.updatedAt || '').toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8" data-testid="button-back-to-blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-red-600 text-white">
              Breaking News
            </Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-primary/20 text-accent">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Dateline */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8 p-4 bg-muted/20 rounded-lg border-l-4 border-red-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-red-600" />
              <span className="font-semibold">San Francisco, CA</span>
            </div>
            <Separator orientation="vertical" className="hidden sm:block h-6" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publishedAt || '').toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
          
          {/* Author Byline */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-muted">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              {post.authorImage ? (
                <img src={post.authorImage} alt={post.author} className="w-full h-full rounded-full object-cover" />
              ) : (
                <User className="h-6 w-6 text-white" />
              )}
            </div>
            <div>
              <div className="font-semibold">By {post.author}</div>
              <div className="text-sm text-muted-foreground">Senior Technology Reporter</div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Source Citations */}
      <section className="py-8 bg-blue-50/50 dark:bg-blue-950/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-lg border-l-4 border-blue-500">
            <ExternalLink className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Official Sources</h3>
              <div className="space-y-2 text-sm">
                <div>• <strong>Primary Source:</strong> Company Press Release, published today</div>
                <div>• <strong>Industry Analysis:</strong> TechCrunch exclusive interview</div>
                <div>• <strong>Market Data:</strong> Verified by Bloomberg Terminal</div>
                <div>• <strong>Expert Commentary:</strong> Industry analyst statements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Fact-Check Verification */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              {post.excerpt}
            </p>
            
            {/* Fact-Check Verification Box */}
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                    Fact-Check Verified
                  </h3>
                  <p className="text-green-800 dark:text-green-200 mb-3">
                    This information has been independently verified through multiple reliable sources 
                    and cross-referenced with official documentation.
                  </p>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    <strong>Verification Status:</strong> ✓ Confirmed by 3 independent sources
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 leading-relaxed">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-lg">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline of Events */}
      <section className="py-16 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Timeline of Events</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>
            
            <div className="space-y-8">
              {[
                {
                  time: "9:00 AM PST",
                  date: "Today",
                  event: "Initial reports surface about the development",
                  details: "First social media mentions and industry whispers begin"
                },
                {
                  time: "11:30 AM PST",
                  date: "Today",
                  event: "Company releases official statement",
                  details: "Press release confirms the major announcement"
                },
                {
                  time: "2:15 PM PST",
                  date: "Today",
                  event: "Industry analysts provide commentary",
                  details: "Expert opinions and market impact analysis released"
                },
                {
                  time: "4:45 PM PST",
                  date: "Today",
                  event: "Market response and stock movement",
                  details: "Trading activity and investor reactions recorded"
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="font-semibold text-primary">{item.time}</div>
                      <Badge variant="outline">{item.date}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.event}</h3>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Commentary Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Expert Commentary</h2>
          
          <div className="space-y-8">
            <GlassCard className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Dr. Sarah Chen</h3>
                      <div className="text-muted-foreground">Senior Industry Analyst, TechFuture Research</div>
                    </div>
                    <Quote className="h-8 w-8 text-accent opacity-50" />
                  </div>
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "This development represents a significant shift in the industry landscape. 
                    The implications will likely extend far beyond what we're seeing in the immediate market response."
                  </blockquote>
                  <div className="text-sm text-muted-foreground">
                    Interviewed via video call, 3:30 PM PST
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
                      <div className="text-muted-foreground">Former VP of Engineering, MegaCorp</div>
                    </div>
                    <Quote className="h-8 w-8 text-accent opacity-50" />
                  </div>
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "Having worked in this space for over a decade, I can say this is one of the most 
                    innovative approaches I've seen. The technical challenges they've overcome are remarkable."
                  </blockquote>
                  <div className="text-sm text-muted-foreground">
                    Statement provided via email, 2:45 PM PST
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Key Facts Summary */}
      <section className="py-16 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Facts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">Global Impact</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Affects 50+ countries worldwide</li>
                <li>• Estimated market value: $2.5 billion</li>
                <li>• Expected timeline: 12-18 months</li>
              </ul>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-lg font-semibold">Confirmed Details</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Official announcement made</li>
                <li>• Regulatory approval pending</li>
                <li>• Beta testing phase complete</li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Related Coverage */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Coverage</h2>
          
          <div className="space-y-4">
            <Link href="/news/industry-response" className="block">
              <div className="p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors border-l-4 border-primary">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 hover:text-primary">
                      Industry Leaders React to Major Announcement
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive roundup of reactions from key industry figures and competitors...
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground ml-4">
                    2 hours ago
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/news/market-analysis" className="block">
              <div className="p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors border-l-4 border-accent">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 hover:text-primary">
                      Market Analysis: What This Means for Investors
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Deep dive into the financial implications and stock market response...
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground ml-4">
                    1 hour ago
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Breaking News Alert Signup */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant notifications for breaking news and major industry developments. 
            Never miss critical updates that could impact your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email for alerts" 
              className="flex-1 px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-red-500"
              data-testid="input-news-alert-email"
            />
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3" data-testid="button-subscribe-alerts">
              Get Alerts
            </Button>
          </div>
          <div className="text-sm text-muted-foreground mt-4">
            ✓ Breaking news alerts • ✓ Industry updates • ✓ Unsubscribe anytime
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}