import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { 
  Users, 
  Settings, 
  Layout, 
  FileText, 
  Briefcase, 
  Globe, 
  Mail,
  User,
  LogOut,
  Search,
  Plus,
  Edit,
  Eye,
  Database,
  Shield,
  Palette,
  BookOpen,
  Phone,
  Info,
  Target
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { ProtectedRoute } from '../components/protected-route';
import { ProfileSection } from '../components/admin/ProfileSection';
import { ServicesSection } from '../components/admin/ServicesSection';

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

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  count?: number;
  children?: NavItem[];
}

function AdminDashboardContent() {
  const [, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState('profile');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('admin-token');
    localStorage.removeItem('admin-user');
    setLocation('/login');
  };

  const { data: templates, isLoading } = useQuery({
    queryKey: ['page-templates'],
    queryFn: async () => {
      const response = await fetch('/api/cms/page-templates');
      if (!response.ok) throw new Error('Failed to fetch templates');
      return response.json() as Promise<PageTemplate[]>;
    },
  });

  const navigationItems: NavItem[] = [
    {
      id: 'profile',
      label: 'Profile',
      icon: <User className="w-4 h-4" />,
    },
    {
      id: 'services',
      label: 'Services',
      icon: <Briefcase className="w-4 h-4" />,
      count: templates?.filter(t => t.type === 'service').length || 0,
      children: [
        { id: 'web-development', label: 'Web Development', icon: <Globe className="w-4 h-4" /> },
        { id: 'marketing', label: 'Marketing', icon: <Target className="w-4 h-4" /> },
        { id: 'saas', label: 'SaaS Applications', icon: <Database className="w-4 h-4" /> },
        { id: 'ecommerce', label: 'E-commerce', icon: <Briefcase className="w-4 h-4" /> },
      ]
    },
    {
      id: 'blog',
      label: 'Blog',
      icon: <FileText className="w-4 h-4" />,
      count: templates?.filter(t => t.type === 'blog').length || 0,
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      icon: <Layout className="w-4 h-4" />,
      count: templates?.filter(t => t.type === 'portfolio').length || 0,
    },
    {
      id: 'pages',
      label: 'Pages',
      icon: <BookOpen className="w-4 h-4" />,
      children: [
        { id: 'contact', label: 'Contact Us', icon: <Phone className="w-4 h-4" /> },
        { id: 'about', label: 'About Us', icon: <Info className="w-4 h-4" /> },
      ]
    },
    {
      id: 'seo',
      label: 'SEO Settings',
      icon: <Shield className="w-4 h-4" />,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  const statsCards = [
    {
      title: 'Templates created',
      value: templates?.length || 0,
      icon: <Layout className="w-5 h-5" />,
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      title: 'Active services',
      value: templates?.filter(t => t.type === 'service' && t.isActive).length || 0,
      icon: <Briefcase className="w-5 h-5" />,
      color: 'bg-green-500/10 text-green-400'
    },
    {
      title: 'Blog posts',
      value: templates?.filter(t => t.type === 'blog').length || 0,
      icon: <FileText className="w-5 h-5" />,
      color: 'bg-purple-500/10 text-purple-400'
    },
    {
      title: 'Portfolio items',
      value: templates?.filter(t => t.type === 'portfolio').length || 0,
      icon: <User className="w-5 h-5" />,
      color: 'bg-orange-500/10 text-orange-400'
    },
  ];

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Profile Management</h2>
          <p className="text-gray-400 mt-1">Manage your admin profile and preferences</p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{card.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{card.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${card.color}`}>
                  {card.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-slate-900/30 rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Created new service template</span>
              <span className="text-gray-500 text-sm ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-slate-900/30 rounded-lg">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">Updated blog settings</span>
              <span className="text-gray-500 text-sm ml-auto">1 day ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderServicesSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Service Pages</h2>
          <p className="text-gray-400 mt-1">Manage your service offerings and content</p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="w-4 h-4 mr-2" />
          Create Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Web Development', icon: <Globe className="w-5 h-5" />, color: 'bg-blue-500', count: 3 },
          { name: 'Marketing', icon: <Target className="w-5 h-5" />, color: 'bg-green-500', count: 2 },
          { name: 'SaaS Applications', icon: <Database className="w-5 h-5" />, color: 'bg-purple-500', count: 1 },
          { name: 'E-commerce', icon: <Briefcase className="w-5 h-5" />, color: 'bg-orange-500', count: 1 },
        ].map((service, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${service.color}/20`}>
                  <div className={`text-${service.color.split('-')[1]}-400`}>
                    {service.icon}
                  </div>
                </div>
                <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                  {service.count} pages
                </Badge>
              </div>
              <h3 className="font-semibold text-white mb-2">{service.name}</h3>
              <p className="text-sm text-gray-400 mb-4">Manage content and templates</p>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <Edit className="w-3 h-3 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'services':
        return <ServicesSection />;
      case 'blog':
        return renderBlogSection();
      case 'portfolio':
        return renderPortfolioSection();
      case 'pages':
        return renderPagesSection();
      case 'seo':
        return renderSEOSection();
      case 'settings':
        return renderSettingsSection();
      default:
        return <ProfileSection />;
    }
  };

  const renderBlogSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Blog Management</h2>
          <p className="text-gray-400 mt-1">Create and manage blog posts with template-based content</p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Technical', 'Marketing', 'General'].map((category) => (
          <Card key={category} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <FileText className="w-8 h-8 text-blue-400" />
                <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                  {Math.floor(Math.random() * 10)} posts
                </Badge>
              </div>
              <h3 className="font-semibold text-white mb-2">{category} Blog</h3>
              <p className="text-sm text-gray-400 mb-4">Manage {category.toLowerCase()} content</p>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                  <Edit className="w-3 h-3 mr-1" />
                  Manage
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPortfolioSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Portfolio Management</h2>
          <p className="text-gray-400 mt-1">Showcase your projects with detailed information</p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="w-full h-32 bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                <Layout className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Project {i}</h3>
              <p className="text-sm text-gray-400 mb-4">Description of the project</p>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                  <Edit className="w-3 h-3 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPagesSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Static Pages</h2>
          <p className="text-gray-400 mt-1">Manage Contact Us, About Us, and other static content</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: 'Contact Us', icon: <Phone className="w-6 h-6" />, description: 'Contact form and information' },
          { name: 'About Us', icon: <Info className="w-6 h-6" />, description: 'Company information and team' }
        ].map((page) => (
          <Card key={page.name} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                  <div className="text-blue-400">{page.icon}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{page.name}</h3>
                  <p className="text-sm text-gray-400">{page.description}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                  <Edit className="w-3 h-3 mr-1" />
                  Edit Content
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                  <Eye className="w-3 h-3 mr-1" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSEOSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">SEO Settings</h2>
          <p className="text-gray-400 mt-1">Manage SEO settings for all pages and content types</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Global SEO Settings</CardTitle>
            <CardDescription className="text-gray-400">Default settings for all pages</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-gray-300">Site Title</Label>
              <Input className="bg-slate-900/50 border-slate-600 text-white" placeholder="DigitalCraft Agency" />
            </div>
            <div>
              <Label className="text-gray-300">Site Description</Label>
              <Textarea className="bg-slate-900/50 border-slate-600 text-white" placeholder="Professional digital services..." />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Page-Specific SEO</CardTitle>
            <CardDescription className="text-gray-400">Individual page SEO settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Services', 'Blog', 'Portfolio', 'Contact'].map((page) => (
                <div key={page} className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-white">{page} Pages</span>
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                    <Settings className="w-3 h-3 mr-1" />
                    Configure
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderSettingsSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">System Settings</h2>
          <p className="text-gray-400 mt-1">Configure system preferences and integrations</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-gray-300">Site Maintenance Mode</Label>
              <div className="flex items-center space-x-2 mt-2">
                <input type="checkbox" className="rounded bg-slate-700 border-slate-600" />
                <span className="text-gray-400">Enable maintenance mode</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Integrations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-gray-300">Google Analytics ID</Label>
              <Input className="bg-slate-900/50 border-slate-600 text-white" placeholder="GA-XXXXXXXXX" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-900/50 border-b border-slate-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-white">DC</span>
              </div>
              <span className="font-semibold text-lg">DigitalCraft CMS</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-gray-400 w-64"
              />
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout} className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900/30 border-r border-slate-800 min-h-screen p-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && (
                    <Badge variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                      {item.count}
                    </Badge>
                  )}
                </button>
                
                {item.children && activeSection === item.id && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-slate-800/50 transition-colors"
                      >
                        {child.icon}
                        <span>{child.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
}

export function AdminDashboard() {
  return (
    <ProtectedRoute>
      <AdminDashboardContent />
    </ProtectedRoute>
  );
}