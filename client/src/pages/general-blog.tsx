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
  BookOpen, 
  User, 
  Calendar, 
  Clock,
  Share2,
  MessageCircle,
  Heart,
  ArrowRight,
  Mail
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function GeneralBlog() {
  const { slug } = useParams();
  
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog", slug],
  });

  const { data: allPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading article...</p>
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
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been moved.
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

  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && p.tags?.some(tag => post.tags?.includes(tag)))
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "InfiniQode"
    },
    "datePublished": post.publishedAt,
    "image": post.featuredImage
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={`${post.tags?.join(', ') || ''}, blog, insights`}
        ogImage={post.featuredImage || undefined}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Full-Width Hero Image */}
      <section className="relative pt-20">
        <div className="relative h-96 bg-gradient-to-r from-primary/20 to-accent/20 overflow-hidden">
          {post.featuredImage && (
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-full object-cover opacity-80"
            />
          )}
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="absolute bottom-8 left-0 right-0">
            <div className="w-[95%] mx-auto px-3">
              <Link href="/blog">
                <Button variant="ghost" className="mb-4 text-white hover:bg-white/10" data-testid="button-back-to-blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
              
              <Badge className="bg-primary/90 text-white mb-4">
                <BookOpen className="mr-2 h-4 w-4" />
                General
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Article Meta & Drop-Cap Content */}
      <section className="py-12">
        <div className="w-[95%] mx-auto px-3">
          {/* Author Byline */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-muted">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              {post.authorImage ? (
                <img src={post.authorImage} alt={post.author} className="w-full h-full rounded-full object-cover" />
              ) : (
                <User className="h-8 w-8 text-white" />
              )}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">{post.author}</div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt || '').toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" data-testid="button-share">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" data-testid="button-like">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Drop-Cap First Paragraph */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
              <span className="float-left text-7xl font-serif leading-none mr-3 mt-2 text-primary">
                {post.excerpt.charAt(0)}
              </span>
              {post.excerpt.substring(1)}
            </p>
            
            {/* Auto-Generated Table of Contents */}
            <div className="bg-muted/20 rounded-lg p-6 mb-12 border-l-4 border-primary">
              <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#introduction" className="text-primary hover:underline">1. Introduction</a></li>
                <li><a href="#main-concepts" className="text-primary hover:underline">2. Main Concepts</a></li>
                <li><a href="#practical-applications" className="text-primary hover:underline">3. Practical Applications</a></li>
                <li><a href="#conclusion" className="text-primary hover:underline">4. Conclusion</a></li>
              </ul>
            </div>

            {/* Main Content with Serif Typography */}
            <div className="space-y-8 font-serif text-lg leading-relaxed text-foreground/90">
              {post.content.split('\n\n').map((paragraph, index) => (
                <div key={index}>
                  {index === 1 && (
                    /* Pull-Quote Sidebar */
                    <div className="float-right w-80 ml-8 mb-6 p-6 bg-accent/10 border-l-4 border-accent">
                      <blockquote className="text-xl font-medium italic text-accent">
                        "Understanding the fundamentals is crucial for long-term success in any endeavor."
                      </blockquote>
                      <cite className="text-sm text-muted-foreground mt-2 block">— Industry Expert</cite>
                    </div>
                  )}
                  <p className="mb-6">{paragraph}</p>
                  
                  {index === 2 && (
                    /* Newsletter Signup Inline */
                    <GlassCard className="p-8 my-12 text-center bg-primary/5">
                      <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                      <p className="text-muted-foreground mb-6">
                        Get the latest insights delivered to your inbox
                      </p>
                      <div className="flex max-w-md mx-auto gap-3">
                        <input 
                          type="email" 
                          placeholder="Enter your email" 
                          className="flex-1 px-4 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                          data-testid="input-newsletter-email"
                        />
                        <Button className="glass-button" data-testid="button-subscribe">
                          Subscribe
                        </Button>
                      </div>
                    </GlassCard>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Reading Carousel */}
      <section className="py-16 bg-muted/5">
        <div className="w-[95%] mx-auto px-3">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Reading</h2>
          
          {relatedPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <GlassCard className="p-6 h-full hover:scale-105 transition-transform cursor-pointer">
                    {relatedPost.featuredImage && (
                      <img 
                        src={relatedPost.featuredImage} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {relatedPost.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Author Signature Block */}
      <section className="py-16">
        <div className="w-[95%] mx-auto px-3">
          <Separator className="mb-12" />
          
          <GlassCard className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                {post.authorImage ? (
                  <img src={post.authorImage} alt={post.author} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <User className="h-10 w-10 text-white" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">About {post.author}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A passionate writer and industry expert with years of experience in digital innovation. 
                  Dedicated to sharing insights that help businesses and individuals navigate the ever-evolving 
                  digital landscape with confidence and clarity.
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" data-testid="button-follow-author">
                    Follow {post.author}
                  </Button>
                  <Button variant="ghost" size="sm" data-testid="button-more-posts">
                    More Posts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-muted/5">
        <div className="w-[95%] mx-auto px-3">
          <div className="flex items-center gap-3 mb-8">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Join the Discussion</h2>
          </div>
          
          <GlassCard className="p-8 text-center">
            <p className="text-muted-foreground mb-6">
              We'd love to hear your thoughts on this article. Share your insights and engage with our community.
            </p>
            <Button className="glass-button" data-testid="button-leave-comment">
              Leave a Comment
            </Button>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </>
  );
}