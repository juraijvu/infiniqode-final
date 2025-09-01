import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { GlassCard } from "./glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export function BlogSection() {
  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  if (isLoading) {
    return (
      <section id="blog" className="py-1.5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Latest Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
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
        </div>
      </section>
    );
  }

  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-1.5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Latest Insights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends in web development and digital marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
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
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/20 text-accent text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </GlassCard>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-2">
          <Link href="/blog">
            <Button className="glass-button px-8 py-4 text-lg" data-testid="button-view-all-posts">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
