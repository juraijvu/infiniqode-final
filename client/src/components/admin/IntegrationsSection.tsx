import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Facebook, 
  Globe, 
  Search, 
  BarChart3, 
  Eye, 
  Link, 
  Code, 
  Settings,
  Save,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Zap
} from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  status: 'connected' | 'disconnected' | 'error';
  category: 'analytics' | 'social' | 'seo' | 'search';
  fields: Array<{
    key: string;
    label: string;
    type: 'text' | 'textarea' | 'password' | 'url';
    placeholder: string;
    required?: boolean;
  }>;
}

const integrations: Integration[] = [
  {
    id: 'google-tag-manager',
    name: 'Google Tag Manager',
    description: 'Manage all your marketing tags in one place',
    icon: <BarChart3 className="w-5 h-5" />,
    status: 'disconnected',
    category: 'analytics',
    fields: [
      { key: 'gtm_id', label: 'GTM Container ID', type: 'text', placeholder: 'GTM-XXXXXXX', required: true },
      { key: 'gtm_auth', label: 'GTM Auth (Optional)', type: 'text', placeholder: 'Authentication token' }
    ]
  },
  {
    id: 'google-search-console',
    name: 'Google Search Console',
    description: 'Monitor your site\'s presence in Google search results',
    icon: <Search className="w-5 h-5" />,
    status: 'disconnected',
    category: 'search',
    fields: [
      { key: 'gsc_site_url', label: 'Site URL', type: 'url', placeholder: 'https://your-domain.com', required: true },
      { key: 'gsc_verification', label: 'HTML Verification Tag', type: 'text', placeholder: 'google-site-verification=...' }
    ]
  },
  {
    id: 'google-api',
    name: 'Google API',
    description: 'Access Google services and APIs',
    icon: <Globe className="w-5 h-5" />,
    status: 'disconnected',
    category: 'analytics',
    fields: [
      { key: 'google_api_key', label: 'API Key', type: 'password', placeholder: 'Your Google API key', required: true },
      { key: 'google_client_id', label: 'Client ID', type: 'text', placeholder: 'OAuth Client ID' },
      { key: 'google_client_secret', label: 'Client Secret', type: 'password', placeholder: 'OAuth Client Secret' }
    ]
  },
  {
    id: 'bing-webmaster',
    name: 'Bing Webmaster Tools',
    description: 'Monitor your site\'s performance on Bing',
    icon: <Search className="w-5 h-5" />,
    status: 'disconnected',
    category: 'search',
    fields: [
      { key: 'bing_site_url', label: 'Site URL', type: 'url', placeholder: 'https://your-domain.com', required: true },
      { key: 'bing_verification', label: 'Meta Verification Tag', type: 'text', placeholder: 'msvalidate.01=...' }
    ]
  },
  {
    id: 'microsoft-clarity',
    name: 'Microsoft Clarity',
    description: 'Free user behavior analytics',
    icon: <Eye className="w-5 h-5" />,
    status: 'disconnected',
    category: 'analytics',
    fields: [
      { key: 'clarity_id', label: 'Clarity Project ID', type: 'text', placeholder: 'Your Clarity project ID', required: true }
    ]
  },
  {
    id: 'facebook-pixel',
    name: 'Facebook Pixel',
    description: 'Track conversions and optimize ads',
    icon: <Facebook className="w-5 h-5" />,
    status: 'disconnected',
    category: 'social',
    fields: [
      { key: 'fb_pixel_id', label: 'Pixel ID', type: 'text', placeholder: 'Your Facebook Pixel ID', required: true },
      { key: 'fb_access_token', label: 'Access Token (Optional)', type: 'password', placeholder: 'Facebook access token' }
    ]
  },
  {
    id: 'linkedin-insight',
    name: 'LinkedIn Insight Tag',
    description: 'Track LinkedIn ad performance',
    icon: <Link className="w-5 h-5" />,
    status: 'disconnected',
    category: 'social',
    fields: [
      { key: 'linkedin_partner_id', label: 'Partner ID', type: 'text', placeholder: 'Your LinkedIn Partner ID', required: true }
    ]
  },
  {
    id: 'index-now',
    name: 'IndexNow API',
    description: 'Instantly notify search engines of content changes',
    icon: <Zap className="w-5 h-5" />,
    status: 'disconnected',
    category: 'seo',
    fields: [
      { key: 'indexnow_key', label: 'API Key', type: 'text', placeholder: 'Your IndexNow API key', required: true },
      { key: 'indexnow_host', label: 'Host', type: 'url', placeholder: 'https://your-domain.com', required: true }
    ]
  }
];

export function IntegrationsSection() {
  const [activeTab, setActiveTab] = useState('analytics');
  const [configData, setConfigData] = useState<Record<string, Record<string, string>>>({});
  const [sitemapSettings, setSitemapSettings] = useState({
    enabled: true,
    frequency: 'weekly',
    priority: 0.8,
    includeImages: true,
    includeLastMod: true
  });

  const [schemaSettings, setSchemaSettings] = useState({
    organization: {
      enabled: true,
      name: 'DigitalCraft Agency',
      url: 'https://digitalcraft.com',
      logo: 'https://digitalcraft.com/logo.png',
      description: 'Professional digital marketing and web development services'
    },
    website: {
      enabled: true,
      searchAction: true,
      siteNavigation: true
    },
    breadcrumbs: {
      enabled: true,
      showOnAllPages: true
    }
  });

  const handleConfigChange = (integrationId: string, field: string, value: string) => {
    setConfigData(prev => ({
      ...prev,
      [integrationId]: {
        ...prev[integrationId],
        [field]: value
      }
    }));
  };

  const handleSaveIntegration = (integrationId: string) => {
    // Here you would save to the backend
    console.log('Saving integration:', integrationId, configData[integrationId]);
    // Show success message
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      connected: 'bg-green-500/20 text-green-400 border-green-500/30',
      disconnected: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      error: 'bg-red-500/20 text-red-400 border-red-500/30'
    };
    
    return (
      <Badge className={colors[status as keyof typeof colors] || colors.disconnected}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status}</span>
      </Badge>
    );
  };

  const renderIntegrationCard = (integration: Integration) => (
    <Card key={integration.id} className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <div className="text-blue-400">{integration.icon}</div>
            </div>
            <div>
              <CardTitle className="text-white text-sm">{integration.name}</CardTitle>
              <CardDescription className="text-gray-400 text-xs">
                {integration.description}
              </CardDescription>
            </div>
          </div>
          {getStatusBadge(integration.status)}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {integration.fields.map((field) => (
          <div key={field.key}>
            <Label className="text-gray-300 text-xs">{field.label}</Label>
            {field.type === 'textarea' ? (
              <Textarea
                value={configData[integration.id]?.[field.key] || ''}
                onChange={(e) => handleConfigChange(integration.id, field.key, e.target.value)}
                placeholder={field.placeholder}
                className="bg-slate-900/50 border-slate-600 text-white text-sm"
                rows={2}
              />
            ) : (
              <Input
                type={field.type}
                value={configData[integration.id]?.[field.key] || ''}
                onChange={(e) => handleConfigChange(integration.id, field.key, e.target.value)}
                placeholder={field.placeholder}
                className="bg-slate-900/50 border-slate-600 text-white text-sm"
              />
            )}
          </div>
        ))}
        <div className="flex justify-between items-center pt-2">
          <Button
            variant="outline"
            size="sm"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Docs
          </Button>
          <Button
            onClick={() => handleSaveIntegration(integration.id)}
            size="sm"
            className="bg-green-500 hover:bg-green-600"
          >
            <Save className="w-3 h-3 mr-1" />
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const categories = [
    { id: 'analytics', label: 'Analytics', count: integrations.filter(i => i.category === 'analytics').length },
    { id: 'social', label: 'Social Media', count: integrations.filter(i => i.category === 'social').length },
    { id: 'search', label: 'Search Engines', count: integrations.filter(i => i.category === 'search').length },
    { id: 'seo', label: 'SEO Tools', count: integrations.filter(i => i.category === 'seo').length }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Marketing Integrations</h2>
          <p className="text-gray-400 mt-1">Connect your marketing and analytics tools</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-slate-600 text-slate-300">
            <Settings className="w-4 h-4 mr-2" />
            Bulk Actions
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-slate-800/50">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
            >
              {category.label} ({category.count})
            </TabsTrigger>
          ))}
          <TabsTrigger 
            value="advanced"
            className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
          >
            Advanced
          </TabsTrigger>
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {integrations
                .filter(integration => integration.category === category.id)
                .map(renderIntegrationCard)}
            </div>
          </TabsContent>
        ))}

        <TabsContent value="advanced" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sitemap Settings */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Sitemap Configuration
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Configure automatic sitemap generation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-gray-300">Enable Sitemap</Label>
                  <Switch
                    checked={sitemapSettings.enabled}
                    onCheckedChange={(checked) => 
                      setSitemapSettings(prev => ({ ...prev, enabled: checked }))
                    }
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Update Frequency</Label>
                  <select 
                    value={sitemapSettings.frequency}
                    onChange={(e) => setSitemapSettings(prev => ({ ...prev, frequency: e.target.value }))}
                    className="w-full mt-1 bg-slate-900/50 border border-slate-600 rounded-md px-3 py-2 text-white"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-gray-300">Include Images</Label>
                  <Switch
                    checked={sitemapSettings.includeImages}
                    onCheckedChange={(checked) => 
                      setSitemapSettings(prev => ({ ...prev, includeImages: checked }))
                    }
                  />
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  <Save className="w-4 h-4 mr-2" />
                  Save Sitemap Settings
                </Button>
              </CardContent>
            </Card>

            {/* Schema Markup */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Schema Markup
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Configure structured data for better SEO
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-gray-300">Organization Schema</Label>
                  <Switch
                    checked={schemaSettings.organization.enabled}
                    onCheckedChange={(checked) => 
                      setSchemaSettings(prev => ({ 
                        ...prev, 
                        organization: { ...prev.organization, enabled: checked }
                      }))
                    }
                  />
                </div>
                {schemaSettings.organization.enabled && (
                  <div className="space-y-3 pl-4 border-l-2 border-slate-600">
                    <div>
                      <Label className="text-gray-300 text-xs">Organization Name</Label>
                      <Input
                        value={schemaSettings.organization.name}
                        onChange={(e) => setSchemaSettings(prev => ({
                          ...prev,
                          organization: { ...prev.organization, name: e.target.value }
                        }))}
                        className="bg-slate-900/50 border-slate-600 text-white text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300 text-xs">Organization URL</Label>
                      <Input
                        value={schemaSettings.organization.url}
                        onChange={(e) => setSchemaSettings(prev => ({
                          ...prev,
                          organization: { ...prev.organization, url: e.target.value }
                        }))}
                        className="bg-slate-900/50 border-slate-600 text-white text-sm"
                      />
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <Label className="text-gray-300">Breadcrumb Schema</Label>
                  <Switch
                    checked={schemaSettings.breadcrumbs.enabled}
                    onCheckedChange={(checked) => 
                      setSchemaSettings(prev => ({ 
                        ...prev, 
                        breadcrumbs: { ...prev.breadcrumbs, enabled: checked }
                      }))
                    }
                  />
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  <Save className="w-4 h-4 mr-2" />
                  Save Schema Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}