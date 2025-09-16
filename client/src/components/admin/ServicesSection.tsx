import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { 
  Globe, 
  Target, 
  Database, 
  ShoppingCart, 
  Plus, 
  Edit, 
  Eye, 
  Trash2,
  Settings,
  FileText,
  Image as ImageIcon,
  Save,
  X
} from 'lucide-react';

interface ServiceTemplate {
  id: string;
  name: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pricing: {
    basic: { price: string; features: string[] };
    premium: { price: string; features: string[] };
    enterprise: { price: string; features: string[] };
  };
  heroImage: string;
  status: 'draft' | 'published';
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

const serviceCategories = [
  {
    id: 'webdev',
    name: 'Web Development',
    icon: <Globe className="w-5 h-5" />,
    color: 'bg-blue-500',
    description: 'Custom websites and web applications'
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    icon: <Target className="w-5 h-5" />,
    color: 'bg-green-500',
    description: 'SEO, content marketing, and growth strategies'
  },
  {
    id: 'saas',
    name: 'SaaS Applications',
    icon: <Database className="w-5 h-5" />,
    color: 'bg-purple-500',
    description: 'Cloud-based software solutions'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: <ShoppingCart className="w-5 h-5" />,
    color: 'bg-orange-500',
    description: 'Online stores and payment integration'
  }
];

// Mock service data
const mockServices: ServiceTemplate[] = [
  {
    id: 'web-1',
    name: 'Custom Website Development',
    slug: 'custom-website-development',
    category: 'webdev',
    title: 'Custom Website Development',
    subtitle: 'Professional websites tailored to your business needs',
    description: 'We create stunning, responsive websites that convert visitors into customers.',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Content Management'],
    pricing: {
      basic: { price: '$2,999', features: ['5 Pages', 'Basic SEO', 'Mobile Responsive'] },
      premium: { price: '$4,999', features: ['10 Pages', 'Advanced SEO', 'CMS Integration'] },
      enterprise: { price: '$9,999', features: ['Unlimited Pages', 'Custom Features', 'Priority Support'] }
    },
    heroImage: '/images/web-development.jpg',
    status: 'published',
    seo: {
      metaTitle: 'Custom Website Development Services',
      metaDescription: 'Professional website development services for businesses.',
      keywords: ['website development', 'web design', 'responsive design']
    }
  },
  {
    id: 'marketing-1',
    name: 'SEO & Content Marketing',
    slug: 'seo-content-marketing',
    category: 'marketing',
    title: 'SEO & Content Marketing',
    subtitle: 'Boost your online visibility and drive organic traffic',
    description: 'professional SEO and content strategies to grow your business online.',
    features: ['Keyword Research', 'Content Strategy', 'Link Building', 'Analytics Reporting'],
    pricing: {
      basic: { price: '$999/mo', features: ['5 Blog Posts', 'Basic SEO', 'Monthly Reports'] },
      premium: { price: '$1,999/mo', features: ['10 Blog Posts', 'Advanced SEO', 'Weekly Reports'] },
      enterprise: { price: '$3,999/mo', features: ['Unlimited Content', 'Full SEO Suite', 'Daily Monitoring'] }
    },
    heroImage: '/images/digital-marketing.jpg',
    status: 'published',
    seo: {
      metaTitle: 'SEO & Content Marketing Services',
      metaDescription: 'Professional SEO and content marketing to grow your business.',
      keywords: ['SEO', 'content marketing', 'digital marketing']
    }
  }
];

export function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [editingService, setEditingService] = useState<ServiceTemplate | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateService = (category: string) => {
    const newService: ServiceTemplate = {
      id: `new-${Date.now()}`,
      name: '',
      slug: '',
      category,
      title: '',
      subtitle: '',
      description: '',
      features: [],
      pricing: {
        basic: { price: '', features: [] },
        premium: { price: '', features: [] },
        enterprise: { price: '', features: [] }
      },
      heroImage: '',
      status: 'draft',
      seo: {
        metaTitle: '',
        metaDescription: '',
        keywords: []
      }
    };
    setEditingService(newService);
    setIsCreating(true);
  };

  const handleSaveService = () => {
    if (editingService) {
      // Here you would call the API to save the service
      console.log('Saving service:', editingService);
      setEditingService(null);
      setIsCreating(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingService(null);
    setIsCreating(false);
  };

  const renderServiceEditor = () => {
    if (!editingService) return null;

    return (
      <Card className="bg-slate-800/50 border-slate-700 mb-6">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span>{isCreating ? 'Create New Service' : 'Edit Service'}</span>
            <div className="flex space-x-2">
              <Button onClick={handleSaveService} size="sm" className="bg-green-500 hover:bg-green-600">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button onClick={handleCancelEdit} size="sm" variant="outline" className="border-slate-600">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-gray-300">Service Name</Label>
              <Input
                value={editingService.name}
                onChange={(e) => setEditingService({...editingService, name: e.target.value})}
                className="bg-slate-900/50 border-slate-600 text-white"
                placeholder="Enter service name"
              />
            </div>
            <div>
              <Label className="text-gray-300">URL Slug</Label>
              <Input
                value={editingService.slug}
                onChange={(e) => setEditingService({...editingService, slug: e.target.value})}
                className="bg-slate-900/50 border-slate-600 text-white"
                placeholder="url-friendly-name"
              />
            </div>
          </div>
          
          <div>
            <Label className="text-gray-300">Title</Label>
            <Input
              value={editingService.title}
              onChange={(e) => setEditingService({...editingService, title: e.target.value})}
              className="bg-slate-900/50 border-slate-600 text-white"
              placeholder="Page title"
            />
          </div>
          
          <div>
            <Label className="text-gray-300">Subtitle</Label>
            <Input
              value={editingService.subtitle}
              onChange={(e) => setEditingService({...editingService, subtitle: e.target.value})}
              className="bg-slate-900/50 border-slate-600 text-white"
              placeholder="Brief description"
            />
          </div>
          
          <div>
            <Label className="text-gray-300">Description</Label>
            <Textarea
              value={editingService.description}
              onChange={(e) => setEditingService({...editingService, description: e.target.value})}
              className="bg-slate-900/50 border-slate-600 text-white"
              placeholder="Detailed service description"
              rows={4}
            />
          </div>

          {/* SEO Section */}
          <Card className="bg-slate-900/30 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white text-sm">SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-gray-300">Meta Title</Label>
                <Input
                  value={editingService.seo.metaTitle}
                  onChange={(e) => setEditingService({
                    ...editingService, 
                    seo: {...editingService.seo, metaTitle: e.target.value}
                  })}
                  className="bg-slate-800/50 border-slate-600 text-white"
                  placeholder="SEO title"
                />
              </div>
              <div>
                <Label className="text-gray-300">Meta Description</Label>
                <Textarea
                  value={editingService.seo.metaDescription}
                  onChange={(e) => setEditingService({
                    ...editingService, 
                    seo: {...editingService.seo, metaDescription: e.target.value}
                  })}
                  className="bg-slate-800/50 border-slate-600 text-white"
                  placeholder="SEO description"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    );
  };

  const renderCategoryServices = (category: any) => {
    const categoryServices = mockServices.filter(service => service.category === category.id);
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{category.name}</h3>
          <Button 
            onClick={() => handleCreateService(category.id)}
            size="sm" 
            className="bg-green-500 hover:bg-green-600"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Service
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {categoryServices.map((service) => (
            <Card key={service.id} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-white mb-1">{service.name}</h4>
                    <p className="text-sm text-gray-400">{service.subtitle}</p>
                  </div>
                  <Badge 
                    variant={service.status === 'published' ? 'default' : 'secondary'}
                    className={service.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}
                  >
                    {service.status}
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-2 mt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    onClick={() => setEditingService(service)}
                  >
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="border-red-600 text-red-400 hover:bg-red-900/20">
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Service Management</h2>
          <p className="text-gray-400 mt-1">Manage your service offerings across all categories</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-slate-600 text-slate-300">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Service Editor */}
      {renderServiceEditor()}

      {/* Service Categories Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {serviceCategories.map((category) => {
          const serviceCount = mockServices.filter(s => s.category === category.id).length;
          return (
            <Card 
              key={category.id} 
              className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors cursor-pointer ${
                selectedCategory === category.id ? 'border-green-500' : ''
              }`}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${category.color}/20`}>
                    <div className={`text-${category.color.split('-')[1]}-400`}>
                      {category.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                    {serviceCount} services
                  </Badge>
                </div>
                <h3 className="font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-sm text-gray-400">{category.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Category Details */}
      {selectedCategory && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            {renderCategoryServices(serviceCategories.find(c => c.id === selectedCategory))}
          </CardContent>
        </Card>
      )}

      {/* All Services List */}
      {!selectedCategory && (
        <div className="space-y-6">
          {serviceCategories.map((category) => (
            <Card key={category.id} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                {renderCategoryServices(category)}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}