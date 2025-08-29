import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Clock, User, ArrowRight, Filter } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  // Get all unique tags from posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  // Filter posts based on search and tag
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  // Get featured post (latest post)
  const featuredPost = posts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      <SEOHead
        title="Blog"
        description="Stay updated with the latest insights on web development, digital marketing, and technology trends. Expert tips and in-depth articles from the DigitalCraft team."
        keywords="blog, web development, digital marketing, React, TypeScript, Python, Flask, SEO, tech insights"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="hero-glow top-20 left-20"></div>
        <div className="hero-glow bottom-20 right-20 animation-delay-2s"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Stay updated with the latest insights on web development, digital marketing, and technology trends
          </p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Link href="/blog/technical">
              <GlassCard className="glass-blog-card p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer" data-testid="card-technical-blog">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical</h3>
                <p className="text-muted-foreground text-sm">Code examples, tutorials, and technical insights</p>
              </GlassCard>
            </Link>
            
            <Link href="/blog/general">
              <GlassCard className="glass-blog-card p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer" data-testid="card-general-blog">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">General</h3>
                <p className="text-muted-foreground text-sm">Industry insights and thought leadership</p>
              </GlassCard>
            </Link>
            
            <Link href="/blog/marketing">
              <GlassCard className="glass-blog-card p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer" data-testid="card-marketing-blog">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Marketing</h3>
                <p className="text-muted-foreground text-sm">Growth strategies and marketing insights</p>
              </GlassCard>
            </Link>
            
            <Link href="/blog/news">
              <GlassCard className="glass-blog-card p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer" data-testid="card-news-blog">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">News</h3>
                <p className="text-muted-foreground text-sm">Latest industry news and updates</p>
              </GlassCard>
            </Link>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-blog"
              />
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                className={selectedTag === null ? "glass-button" : ""}
                onClick={() => setSelectedTag(null)}
                data-testid="filter-all-tags"
              >
                All Topics
              </Button>
              {allTags.slice(0, 5).map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className={selectedTag === tag ? "glass-button" : ""}
                  onClick={() => setSelectedTag(tag)}
                  data-testid={`filter-tag-${tag.toLowerCase()}`}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center gap-2 mb-8">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              Showing {filteredPosts.length} of {posts.length} articles
            </span>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !searchTerm && !selectedTag && (
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Featured Article</h2>
            <Link href={`/blog/${featuredPost.slug}`}>
              <GlassCard className="overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {featuredPost.featuredImage && (
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={featuredPost.featuredImage} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <span>{new Date(featuredPost.publishedAt!).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{featuredPost.readTime} min read</span>
                      <span className="mx-2">•</span>
                      <User className="w-3 h-3 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/20 text-accent">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-accent font-medium">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <GlassCard key={i} className="overflow-hidden animate-pulse">
                  <div className="w-full h-48 bg-muted"></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm mb-3">
                      <div className="h-3 bg-muted rounded w-20 mr-2"></div>
                      <div className="h-3 bg-muted rounded w-16"></div>
                    </div>
                    <div className="h-6 bg-muted rounded mb-3"></div>
                    <div className="h-16 bg-muted rounded mb-4"></div>
                    <div className="flex items-center justify-between">
                      <div className="h-4 bg-muted rounded w-20"></div>
                      <div className="h-4 bg-muted rounded w-4"></div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          ) : (
            <>
              {!searchTerm && !selectedTag && <h2 className="text-3xl font-bold mb-8 gradient-text">Latest Articles</h2>}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(searchTerm || selectedTag ? filteredPosts : otherPosts).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <article className="group">
                      <GlassCard className="overflow-hidden transition-all duration-300 hover:scale-105">
                        {post.featuredImage && (
                          <img 
                            src={post.featuredImage} 
                            alt={post.title}
                            className="w-full h-48 object-cover"
                          />
                        )}
                        <div className="p-6">
                          <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <span>{new Date(post.publishedAt!).toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{post.readTime} min read</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              {post.authorImage && (
                                <img 
                                  src={post.authorImage} 
                                  alt={post.author}
                                  className="w-8 h-8 rounded-full mr-3"
                                />
                              )}
                              <span className="text-sm font-medium">{post.author}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-primary/20 text-accent text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-accent font-medium">Read More</span>
                            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </GlassCard>
                    </article>
                  </Link>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search terms or category filters
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedTag(null);
                    }}
                    className="glass-button"
                    data-testid="button-clear-filters"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <GlassCard className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest articles and insights delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button className="glass-button" data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time
            </p>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </>
  );
}
