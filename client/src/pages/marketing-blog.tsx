import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { 
  ArrowLeft, 
  TrendingUp, 
  Target, 
  BarChart3,
  Calculator,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  DollarSign,
  Download,
  Play,
  Pause,
  User,
  Calendar,
  Clock
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function MarketingBlog() {
  const { slug } = useParams();
  const [roiInvestment, setRoiInvestment] = useState([5000]);
  const [isPlaying, setIsPlaying] = useState(false);
  
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
            <p className="text-muted-foreground">Loading marketing insights...</p>
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
            <h1 className="text-2xl font-bold mb-4">Marketing Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The marketing article you're looking for doesn't exist or has been moved.
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

  const calculateROI = (investment: number) => {
    const roi = (investment * 2.5 - investment) / investment * 100;
    return Math.round(roi);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
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
    "articleSection": "Marketing"
  };

  return (
    <>
      <SEOHead
        title={`${post.title} - Marketing Insights`}
        description={post.excerpt}
        keywords={`${post.tags.join(', ')}, marketing, ROI, growth, conversion`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Header with ROI Metric Badge */}
      <section className="relative pt-20 pb-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 hover:bg-white/10" data-testid="button-back-to-blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-green-600 text-white px-4 py-2">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  250% ROI Achieved
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Marketing
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-6 mb-6 text-muted-foreground">
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
            
            {/* Growth Chart Visual */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Campaign Performance</h3>
                <Badge className="bg-green-100 text-green-800">Live Data</Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-1">250%</div>
                  <div className="text-sm text-muted-foreground">ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-1">45%</div>
                  <div className="text-sm text-muted-foreground">Conv. Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-1">180%</div>
                  <div className="text-sm text-muted-foreground">Traffic Up</div>
                </div>
              </div>
              
              <div className="h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-end justify-around p-4">
                {[20, 35, 45, 60, 80, 95, 100].map((height, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-t from-green-500 to-blue-500 rounded-t"
                    style={{ height: `${height}%`, width: '12px' }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator Widget */}
      <section className="py-12 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold">ROI Calculator</h2>
              <Badge variant="secondary">Interactive Tool</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold mb-3">Marketing Investment</label>
                <div className="space-y-4">
                  <Slider
                    value={roiInvestment}
                    onValueChange={setRoiInvestment}
                    max={50000}
                    min={1000}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$1K</span>
                    <span className="font-bold text-primary">${roiInvestment[0].toLocaleString()}</span>
                    <span>$50K</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  {calculateROI(roiInvestment[0])}%
                </div>
                <div className="text-lg text-muted-foreground mb-4">Expected ROI</div>
                <div className="text-2xl font-semibold text-green-600">
                  +${(roiInvestment[0] * 1.5).toLocaleString()} profit
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Main Content with Before/After Comparison */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-muted-foreground leading-relaxed space-y-6">
              {post.content.split('\n').slice(0, 2).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Before/After Comparison Sliders */}
          <GlassCard className="p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Campaign Transformation</h3>
            
            <Tabs defaultValue="before" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="before" className="flex items-center gap-2">
                  <ArrowDownRight className="h-4 w-4 text-red-500" />
                  Before Optimization
                </TabsTrigger>
                <TabsTrigger value="after" className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                  After Optimization
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="before" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 text-center border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-2">2.1%</div>
                    <div className="text-sm text-muted-foreground">Conversion Rate</div>
                  </Card>
                  <Card className="p-6 text-center border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-2">$12</div>
                    <div className="text-sm text-muted-foreground">Cost Per Lead</div>
                  </Card>
                  <Card className="p-6 text-center border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-2">180%</div>
                    <div className="text-sm text-muted-foreground">ROI</div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="after" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 text-center border-green-200">
                    <div className="text-3xl font-bold text-green-500 mb-2">8.7%</div>
                    <div className="text-sm text-muted-foreground">Conversion Rate</div>
                  </Card>
                  <Card className="p-6 text-center border-green-200">
                    <div className="text-3xl font-bold text-green-500 mb-2">$4.20</div>
                    <div className="text-sm text-muted-foreground">Cost Per Lead</div>
                  </Card>
                  <Card className="p-6 text-center border-green-200">
                    <div className="text-3xl font-bold text-green-500 mb-2">450%</div>
                    <div className="text-sm text-muted-foreground">ROI</div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </GlassCard>

          {/* Continue Main Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-muted-foreground leading-relaxed space-y-6">
              {post.content.split('\n').slice(2).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Funnel Visualization */}
      <section className="py-12 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Conversion Funnel Analysis</h2>
          
          <div className="space-y-6">
            {[
              { stage: "Website Visitors", count: 10000, percentage: 100, color: "bg-blue-500" },
              { stage: "Engaged Users", count: 3500, percentage: 35, color: "bg-green-500" },
              { stage: "Qualified Leads", count: 875, percentage: 8.75, color: "bg-yellow-500" },
              { stage: "Sales Qualified", count: 350, percentage: 3.5, color: "bg-orange-500" },
              { stage: "Customers", count: 140, percentage: 1.4, color: "bg-red-500" }
            ].map((stage, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{stage.stage}</h3>
                  <div className="text-sm text-muted-foreground">
                    {stage.count.toLocaleString()} ({stage.percentage}%)
                  </div>
                </div>
                <div className="w-full bg-muted rounded-lg h-12 overflow-hidden">
                  <div 
                    className={`${stage.color} h-full transition-all duration-1000 flex items-center justify-center text-white font-semibold`}
                    style={{ width: `${stage.percentage}%`, minWidth: '120px' }}
                  >
                    {stage.count.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Metrics */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Proven Results</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Campaigns Optimized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$2.5M</div>
              <div className="text-sm text-muted-foreground">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">340%</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* A/B Test Result Toggles */}
      <section className="py-12 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">A/B Test Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Landing Page Headlines</h3>
                <Badge className="bg-green-100 text-green-800">Winner</Badge>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Version B: "Get Results Now"</span>
                  <span className="font-bold text-green-600">+43% CVR</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">Version A: "Learn More Today"</span>
                  <span className="text-gray-600">Baseline</span>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Call-to-Action Buttons</h3>
                <Badge className="bg-blue-100 text-blue-800">Testing</Badge>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Orange Button</span>
                  <span className="font-bold text-blue-600">+28% Clicks</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">Green Button</span>
                  <span className="text-gray-600">Control</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Case Study Teaser Cards */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-8">
              <Badge className="bg-primary/20 text-primary mb-4">E-commerce</Badge>
              <h3 className="text-2xl font-bold mb-4">300% Revenue Increase</h3>
              <p className="text-muted-foreground mb-6">
                How we transformed an online retailer's marketing strategy and tripled their monthly revenue 
                through targeted campaigns and conversion optimization.
              </p>
              <Button variant="outline" className="w-full" data-testid="button-read-case-study-1">
                Read Full Case Study
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </GlassCard>
            
            <GlassCard className="p-8">
              <Badge className="bg-accent/20 text-accent mb-4">SaaS</Badge>
              <h3 className="text-2xl font-bold mb-4">50% Cost Reduction</h3>
              <p className="text-muted-foreground mb-6">
                Discover how we cut acquisition costs in half while doubling the lead quality for a 
                growing SaaS platform through strategic campaign optimization.
              </p>
              <Button variant="outline" className="w-full" data-testid="button-read-case-study-2">
                Read Full Case Study
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Downloadable Report CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Download className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Get the Complete Marketing Guide</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download our comprehensive 50-page marketing optimization guide with actionable strategies, 
            templates, and case studies you can implement immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="glass-button px-8 py-4" data-testid="button-download-guide">
              <Download className="mr-2 h-5 w-5" />
              Download Free Guide
            </Button>
            <div className="text-sm text-muted-foreground">
              ✓ No email required • ✓ Instant download • ✓ 50+ pages of insights
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}