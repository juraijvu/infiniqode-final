import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, Share2, BookOpen, ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogPost() {
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
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
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
      "name": "DigitalCraft",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digitalcraft.agency/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "image": post.featuredImage
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogImage={post.featuredImage}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8" data-testid="button-back-to-blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/20 text-accent">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  {post.authorImage && (
                    <img 
                      src={post.authorImage} 
                      alt={post.author}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                  )}
                  <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-sm text-muted-foreground">Author</div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.publishedAt!).toLocaleDateString()}
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime} min read
                </div>
              </div>
              
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black" data-testid="button-share">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
          
          {post.featuredImage && (
            <div className="relative rounded-2xl overflow-hidden mb-12">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <GlassCard className="p-8">
                <div className="prose prose-lg prose-invert max-w-none">
                  {/* Article content would be rendered here with proper HTML/Markdown parsing */}
                  <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
                    {post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </GlassCard>

              {/* Article Footer */}
              <div className="mt-8">
                <GlassCard className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-2">Was this article helpful?</h3>
                      <p className="text-sm text-muted-foreground">
                        Let us know if you found this content useful
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" data-testid="button-helpful-yes">
                        👍 Yes
                      </Button>
                      <Button variant="outline" size="sm" data-testid="button-helpful-no">
                        👎 No
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8 sticky top-24">
                {/* Table of Contents */}
                <GlassCard className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#introduction" className="block text-muted-foreground hover:text-accent transition-colors">
                      Introduction
                    </a>
                    <a href="#key-concepts" className="block text-muted-foreground hover:text-accent transition-colors">
                      Key Concepts
                    </a>
                    <a href="#implementation" className="block text-muted-foreground hover:text-accent transition-colors">
                      Implementation
                    </a>
                    <a href="#best-practices" className="block text-muted-foreground hover:text-accent transition-colors">
                      Best Practices
                    </a>
                    <a href="#conclusion" className="block text-muted-foreground hover:text-accent transition-colors">
                      Conclusion
                    </a>
                  </nav>
                </GlassCard>

                {/* Share */}
                <GlassCard className="p-6">
                  <h3 className="font-semibold mb-4">Share this article</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start" data-testid="button-share-twitter">
                      Share on Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" data-testid="button-share-linkedin">
                      Share on LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" data-testid="button-copy-link">
                      Copy Link
                    </Button>
                  </div>
                </GlassCard>

                {/* Author Bio */}
                <GlassCard className="p-6">
                  <h3 className="font-semibold mb-4">About the Author</h3>
                  <div className="flex items-start space-x-3 mb-4">
                    {post.authorImage && (
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        className="w-12 h-12 rounded-full"
                      />
                    )}
                    <div>
                      <div className="font-medium">{post.author}</div>
                      <div className="text-sm text-muted-foreground">
                        Senior Developer at DigitalCraft
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Expert in modern web development with over 8 years of experience 
                    building scalable applications.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-muted/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 gradient-text">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <GlassCard className="overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer">
                    {relatedPost.featuredImage && (
                      <img 
                        src={relatedPost.featuredImage} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <span>{new Date(relatedPost.publishedAt!).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{relatedPost.readTime} min read</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 hover:text-accent transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-accent font-medium text-sm">Read More</span>
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <GlassCard className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Enjoyed this article?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for more insights and tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                data-testid="input-newsletter-email"
              />
              <Button className="glass-button" data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </>
  );
}
