import React, { useState, useMemo } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Search, Grid, Type, Image, Square, Layout, Users } from 'lucide-react';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  componentType: string;
  defaultProps: Record<string, any>;
  preview?: string;
  icon: React.ReactNode;
}

interface ComponentPaletteProps {
  components: ComponentItem[];
  isLoading: boolean;
  searchable?: boolean;
}

function DraggableComponent({ component }: { component: ComponentItem }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id: component.id,
    data: {
      type: 'component',
      category: component.category,
      defaultProps: component.defaultProps,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-3 bg-white border border-gray-200 rounded-lg cursor-grab hover:border-blue-300 hover:shadow-sm transition-all duration-200 active:cursor-grabbing"
    >
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
          {component.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {component.name}
          </p>
          <p className="text-xs text-gray-500 capitalize">
            {component.componentType}
          </p>
        </div>
      </div>
      {component.preview && (
        <div className="mt-2">
          <img 
            src={component.preview} 
            alt={component.name}
            className="w-full h-16 object-cover rounded border border-gray-100"
          />
        </div>
      )}
    </div>
  );
}

const getIconForComponentType = (type: string): React.ReactNode => {
  const iconMap: Record<string, React.ReactNode> = {
    'text': <Type size={16} />,
    'image': <Image size={16} />,
    'button': <Square size={16} />,
    'grid': <Grid size={16} />,
    'layout': <Layout size={16} />,
    'form': <Users size={16} />,
  };
  return iconMap[type] || <Layout size={16} />;
};

// Mock data for components - In real app, this would come from the API
const mockComponents: ComponentItem[] = [
  {
    id: 'hero-section',
    name: 'Hero Section',
    category: 'hero',
    componentType: 'layout',
    defaultProps: {
      title: 'Welcome to Our Platform',
      subtitle: 'Transform your business with our solutions',
      buttonText: 'Get Started',
      backgroundImage: ''
    },
    icon: getIconForComponentType('layout')
  },
  {
    id: 'feature-grid',
    name: 'Feature Grid',
    category: 'content',
    componentType: 'grid',
    defaultProps: {
      title: 'Our Features',
      columns: 3,
      features: [
        { title: 'Fast Performance', description: 'Lightning fast load times', icon: '⚡' },
        { title: 'Secure', description: 'Enterprise-grade security', icon: '🔒' },
        { title: 'Scalable', description: 'Grows with your business', icon: '📈' }
      ]
    },
    icon: getIconForComponentType('grid')
  },
  {
    id: 'text-block',
    name: 'Text Block',
    category: 'content',
    componentType: 'text',
    defaultProps: {
      content: 'Your content goes here...',
      fontSize: 'base',
      textAlign: 'left',
      color: 'gray-900'
    },
    icon: getIconForComponentType('text')
  },
  {
    id: 'image-gallery',
    name: 'Image Gallery',
    category: 'media',
    componentType: 'image',
    defaultProps: {
      images: [],
      columns: 2,
      showCaptions: true,
      lightbox: true
    },
    icon: getIconForComponentType('image')
  },
  {
    id: 'contact-form',
    name: 'Contact Form',
    category: 'forms',
    componentType: 'form',
    defaultProps: {
      fields: ['name', 'email', 'message'],
      submitText: 'Send Message',
      style: 'default'
    },
    icon: getIconForComponentType('form')
  },
  {
    id: 'cta-section',
    name: 'Call to Action',
    category: 'cta',
    componentType: 'button',
    defaultProps: {
      title: 'Ready to get started?',
      description: 'Join thousands of satisfied customers',
      buttonText: 'Get Started Now',
      style: 'primary'
    },
    icon: getIconForComponentType('button')
  },
  {
    id: 'testimonial-card',
    name: 'Testimonial',
    category: 'social-proof',
    componentType: 'layout',
    defaultProps: {
      quote: 'This product has transformed our business completely.',
      author: 'John Doe',
      company: 'Acme Inc',
      avatar: '',
      rating: 5
    },
    icon: getIconForComponentType('layout')
  },
  {
    id: 'pricing-table',
    name: 'Pricing Table',
    category: 'pricing',
    componentType: 'grid',
    defaultProps: {
      plans: [
        {
          name: 'Basic',
          price: '$9/month',
          features: ['Feature 1', 'Feature 2', 'Feature 3']
        }
      ],
      highlight: 'pro'
    },
    icon: getIconForComponentType('grid')
  }
];

export function ComponentPalette({ components, isLoading, searchable = true }: ComponentPaletteProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Use mock data for now - replace with actual components when API is ready
  const allComponents = components.length > 0 ? components : mockComponents;

  const filteredComponents = useMemo(() => {
    if (!searchQuery) return allComponents;
    
    return allComponents.filter(component =>
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.componentType.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allComponents, searchQuery]);

  const componentsByCategory = useMemo(() => {
    const categories: Record<string, ComponentItem[]> = {};
    
    filteredComponents.forEach(component => {
      if (!categories[component.category]) {
        categories[component.category] = [];
      }
      categories[component.category].push(component);
    });
    
    return categories;
  }, [filteredComponents]);

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-600">Loading components...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {searchable && (
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 mx-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="px-4 space-y-6">
            {Object.entries(componentsByCategory).map(([category, categoryComponents]) => (
              <div key={category} className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700 capitalize px-1">
                  {category.replace('-', ' ')}
                </h3>
                <div className="grid gap-2">
                  {categoryComponents.map(component => (
                    <DraggableComponent key={component.id} component={component} />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="layout" className="px-4">
            <div className="grid gap-2">
              {filteredComponents
                .filter(c => ['hero', 'layout'].includes(c.category))
                .map(component => (
                  <DraggableComponent key={component.id} component={component} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="px-4">
            <div className="grid gap-2">
              {filteredComponents
                .filter(c => ['content', 'media', 'social-proof'].includes(c.category))
                .map(component => (
                  <DraggableComponent key={component.id} component={component} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}