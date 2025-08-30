import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '../ui/button';
<parameter name="content">import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Save, Eye, Globe, Share2, Search, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface SEOSettings {
  id?: string;
  pageId: string;
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  schemaMarkup?: Record<string, any>;
  canonicalUrl?: string;
  robots?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface SEOManagerProps {
  pageId?: string;
  onClose?: () => void;
}

export function SEOManager({ pageId = 'homepage', onClose }: SEOManagerProps) {
  const queryClient = useQueryClient();
  
  // Form state
  const [formData, setFormData] = useState<SEOSettings>({
    pageId,
    title: '',
    description: '',
    keywords: [],
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    twitterCard: 'summary_large_image',
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: '',
    schemaMarkup: {},
    canonicalUrl: '',
    robots: 'index, follow'
  });

  // Fetch existing SEO settings
  const { data: seoSettings, isLoading } = useQuery({
    queryKey: ['seo-settings', pageId],
    queryFn: async () => {
      const response = await fetch(`/api/cms/seo-settings/${pageId}`);
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Failed to fetch SEO settings');
      }
      return response.json() as Promise<SEOSettings>;
    },
  });

  // Update form when data loads
  React.useEffect(() => {
    if (seoSettings) {
      setFormData(seoSettings);
    }
  }, [seoSettings]);

  // Save mutation
  const saveMutation = useMutation({
    mutationFn: async (data: SEOSettings) => {
      const method = seoSettings ? 'PUT' : 'POST';
      const url = seoSettings 
        ? `/api/cms/seo-settings/${seoSettings.id}` 
        : '/api/cms/seo-settings';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Failed to save SEO settings');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['seo-settings'] });
    },
  });

  const handleInputChange = (field: keyof SEOSettings, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleKeywordChange = (value: string) => {
    const keywords = value.split(',').map(k => k.trim()).filter(Boolean);
    handleInputChange('keywords', keywords);
  };

  const handleSchemaChange = (value: string) => {
    try {
      const parsed = JSON.parse(value);
      handleInputChange('schemaMarkup', parsed);
    } catch (error) {
      // Invalid JSON, keep previous value
    }
  };

  const handleSave = () => {
    saveMutation.mutate(formData);
  };

  const handlePreview = () => {
    // Open preview in new tab
    window.open(`/?seo-preview=true&pageId=${pageId}`, '_blank');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading SEO settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">SEO Manager</h1>
          <p className="text-gray-600">Optimize your page for search engines and social media</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button 
            onClick={handleSave}
            disabled={saveMutation.isPending}
          >
            <Save className="w-4 h-4 mr-2" />
            {saveMutation.isPending ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic" className="flex items-center">
            <Search className="w-4 h-4 mr-2" />
            Basic SEO
          </TabsTrigger>
          <TabsTrigger value="social" className="flex items-center">
            <Share2 className="w-4 h-4 mr-2" />
            Social Media
          </TabsTrigger>
          <TabsTrigger value="schema" className="flex items-center">
            <Globe className="w-4 h-4 mr-2" />
            Schema
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Advanced
          </TabsTrigger>
        </TabsList>

        {/* Basic SEO Tab */}
        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Basic SEO Settings</CardTitle>
              <CardDescription>
                Configure essential SEO elements for search engine optimization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Page Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter page title (50-60 characters recommended)"
                />
                <p className="text-xs text-gray-500">
                  {formData.title.length}/60 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Meta Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Enter meta description (150-160 characters recommended)"
                  rows={3}
                />
                <p className="text-xs text-gray-500">
                  {formData.description.length}/160 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input
                  id="keywords"
                  value={formData.keywords.join(', ')}
                  onChange={(e) => handleKeywordChange(e.target.value)}
                  placeholder="Enter keywords separated by commas"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.keywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="canonical">Canonical URL</Label>
                <Input
                  id="canonical"
                  value={formData.canonicalUrl || ''}
                  onChange={(e) => handleInputChange('canonicalUrl', e.target.value)}
                  placeholder="https://example.com/page"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="robots">Robots Meta Tag</Label>
                <Select
                  value={formData.robots || 'index, follow'}
                  onValueChange={(value) => handleInputChange('robots', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="index, follow">Index, Follow</SelectItem>
                    <SelectItem value="index, nofollow">Index, No Follow</SelectItem>
                    <SelectItem value="noindex, follow">No Index, Follow</SelectItem>
                    <SelectItem value="noindex, nofollow">No Index, No Follow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Social Media Tab */}
        <TabsContent value="social" className="space-y-6">
          {/* Open Graph */}
          <Card>
            <CardHeader>
              <CardTitle>Open Graph (Facebook)</CardTitle>
              <CardDescription>
                Configure how your page appears when shared on Facebook and other platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="og-title">OG Title</Label>
                <Input
                  id="og-title"
                  value={formData.ogTitle || ''}
                  onChange={(e) => handleInputChange('ogTitle', e.target.value)}
                  placeholder="Enter Open Graph title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="og-description">OG Description</Label>
                <Textarea
                  id="og-description"
                  value={formData.ogDescription || ''}
                  onChange={(e) => handleInputChange('ogDescription', e.target.value)}
                  placeholder="Enter Open Graph description"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="og-image">OG Image URL</Label>
                <Input
                  id="og-image"
                  value={formData.ogImage || ''}
                  onChange={(e) => handleInputChange('ogImage', e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
                <p className="text-xs text-gray-500">
                  Recommended size: 1200×630 pixels
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Twitter Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Twitter Cards</CardTitle>
              <CardDescription>
                Configure how your page appears when shared on Twitter
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="twitter-card">Card Type</Label>
                <Select
                  value={formData.twitterCard || 'summary_large_image'}
                  onValueChange={(value) => handleInputChange('twitterCard', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="summary">Summary</SelectItem>
                    <SelectItem value="summary_large_image">Summary Large Image</SelectItem>
                    <SelectItem value="app">App</SelectItem>
                    <SelectItem value="player">Player</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter-title">Twitter Title</Label>
                <Input
                  id="twitter-title"
                  value={formData.twitterTitle || ''}
                  onChange={(e) => handleInputChange('twitterTitle', e.target.value)}
                  placeholder="Enter Twitter title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter-description">Twitter Description</Label>
                <Textarea
                  id="twitter-description"
                  value={formData.twitterDescription || ''}
                  onChange={(e) => handleInputChange('twitterDescription', e.target.value)}
                  placeholder="Enter Twitter description"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter-image">Twitter Image URL</Label>
                <Input
                  id="twitter-image"
                  value={formData.twitterImage || ''}
                  onChange={(e) => handleInputChange('twitterImage', e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
                <p className="text-xs text-gray-500">
                  Recommended size: 1200×628 pixels for large image cards
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Schema Tab */}
        <TabsContent value="schema">
          <Card>
            <CardHeader>
              <CardTitle>Schema Markup (JSON-LD)</CardTitle>
              <CardDescription>
                Add structured data to help search engines understand your content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="schema">Schema JSON-LD</Label>
                <Textarea
                  id="schema"
                  value={JSON.stringify(formData.schemaMarkup || {}, null, 2)}
                  onChange={(e) => handleSchemaChange(e.target.value)}
                  placeholder="Enter JSON-LD schema markup"
                  rows={15}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-gray-500">
                  Enter valid JSON-LD structured data. Use{' '}
                  <a 
                    href="https://schema.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    schema.org
                  </a>{' '}
                  for reference.
                </p>
              </div>

              {/* Schema Templates */}
              <div className="mt-6">
                <Label className="text-base font-medium">Quick Templates</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const organizationSchema = {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Your Organization",
                        "url": "https://yoursite.com",
                        "logo": "https://yoursite.com/logo.png"
                      };
                      handleInputChange('schemaMarkup', organizationSchema);
                    }}
                  >
                    Organization
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const articleSchema = {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Article Title",
                        "author": {
                          "@type": "Person",
                          "name": "Author Name"
                        },
                        "datePublished": new Date().toISOString().split('T')[0]
                      };
                      handleInputChange('schemaMarkup', articleSchema);
                    }}
                  >
                    Article
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const serviceSchema = {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Your Service",
                        "provider": {
                          "@type": "Organization",
                          "name": "Your Company"
                        }
                      };
                      handleInputChange('schemaMarkup', serviceSchema);
                    }}
                  >
                    Service
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const productSchema = {
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Product Name",
                        "description": "Product description"
                      };
                      handleInputChange('schemaMarkup', productSchema);
                    }}
                  >
                    Product
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Tab */}
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Advanced SEO Settings</CardTitle>
              <CardDescription>
                Additional SEO configurations and technical settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-medium text-blue-900 mb-2">SEO Score</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-blue-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${Math.min(
                          (formData.title.length > 0 ? 25 : 0) +
                          (formData.description.length > 0 ? 25 : 0) +
                          (formData.keywords.length > 0 ? 25 : 0) +
                          (formData.canonicalUrl ? 25 : 0), 
                          100
                        )}%` 
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-blue-900">
                    {Math.min(
                      (formData.title.length > 0 ? 25 : 0) +
                      (formData.description.length > 0 ? 25 : 0) +
                      (formData.keywords.length > 0 ? 25 : 0) +
                      (formData.canonicalUrl ? 25 : 0), 
                      100
                    )}%
                  </span>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Page Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Label className="text-gray-600">Page ID</Label>
                    <p className="font-mono">{formData.pageId}</p>
                  </div>
                  {seoSettings?.createdAt && (
                    <div>
                      <Label className="text-gray-600">Created</Label>
                      <p>{new Date(seoSettings.createdAt).toLocaleDateString()}</p>
                    </div>
                  )}
                  {seoSettings?.updatedAt && (
                    <div>
                      <Label className="text-gray-600">Last Updated</Label>
                      <p>{new Date(seoSettings.updatedAt).toLocaleDateString()}</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Save Status */}
      {saveMutation.isSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">SEO settings saved successfully!</p>
        </div>
      )}

      {saveMutation.isError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">Failed to save SEO settings. Please try again.</p>
        </div>
      )}
    </div>
  );
}