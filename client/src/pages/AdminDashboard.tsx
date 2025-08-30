import React from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Plus, Edit, Eye, Layout, FileText, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface PageTemplate {
  id: string;
  name: string;
  slug: string;
  type: string;
  category: string;
  layout: {
    sections: Array<{
      type: string;
      component: string;
      props: Record<string, any>;
    }>;
  };
  isDefault: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const getTemplateIcon = (type: string, category: string) => {
  if (type === 'service') return <Briefcase className="w-4 h-4" />;
  if (type === 'blog') return <FileText className="w-4 h-4" />;
  if (type === 'portfolio') return <Layout className="w-4 h-4" />;
  return <Layout className="w-4 h-4" />;
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'saas': 'bg-blue-100 text-blue-800',
    'marketing': 'bg-green-100 text-green-800',
    'webdev': 'bg-purple-100 text-purple-800',
    'technical': 'bg-orange-100 text-orange-800',
    'showcase': 'bg-pink-100 text-pink-800',
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

export function AdminDashboard() {
  const { data: templates, isLoading, error } = useQuery({
    queryKey: ['page-templates'],
    queryFn: async () => {
      const response = await fetch('/api/cms/page-templates');
      if (!response.ok) {
        throw new Error('Failed to fetch templates');
      }
      return response.json() as Promise<PageTemplate[]>;
    },
  });

  const templatesByType = templates?.reduce((acc, template) => {
    if (!acc[template.type]) {
      acc[template.type] = [];
    }
    acc[template.type].push(template);
    return acc;
  }, {} as Record<string, PageTemplate[]>) || {};

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading templates...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading templates</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">CMS Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Manage your website content and pages</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Site
                </Button>
              </Link>
              <Link href="/admin/page-builder">
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  New Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Layout className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">{templates?.length || 0}</p>
                  <p className="text-gray-600">Templates</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">
                    {templatesByType.service?.length || 0}
                  </p>
                  <p className="text-gray-600">Service Pages</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">
                    {templatesByType.blog?.length || 0}
                  </p>
                  <p className="text-gray-600">Blog Templates</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Layout className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">
                    {templatesByType.portfolio?.length || 0}
                  </p>
                  <p className="text-gray-600">Portfolio</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Templates by Category */}
        {Object.entries(templatesByType).map(([type, typeTemplates]) => (
          <div key={type} className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
              {type} Templates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {typeTemplates.map((template) => (
                <Card key={template.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getTemplateIcon(template.type, template.category)}
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                      </div>
                      <Badge 
                        className={getCategoryColor(template.category)}
                        variant="secondary"
                      >
                        {template.category}
                      </Badge>
                    </div>
                    <CardDescription>
                      {template.layout.sections.length} sections • {template.type} template
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {template.layout.sections.slice(0, 3).map((section, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {section.component}
                          </Badge>
                        ))}
                        {template.layout.sections.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{template.layout.sections.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Link 
                          href={`/admin/page-builder/${template.id}`}
                          className="flex-1"
                        >
                          <Button size="sm" className="w-full">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Page
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Empty State */}
        {!templates || templates.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Layout className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No templates found
              </h3>
              <p className="text-gray-600 mb-4">
                Get started by creating your first page template.
              </p>
              <Link href="/admin/page-builder">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Template
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : null}
      </div>
    </div>
  );
}