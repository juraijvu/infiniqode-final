import React, { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import { PageBuilder } from '../components/page-builder/PageBuilder';
import { Loader2 } from 'lucide-react';

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

interface PageSection {
  id: string;
  type: string;
  component: string;
  props: Record<string, any>;
}

export function PageBuilderPage() {
  const [match, params] = useRoute('/admin/page-builder/:templateId?');
  const [template, setTemplate] = useState<PageTemplate | null>(null);
  const [initialSections, setInitialSections] = useState<PageSection[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (params?.templateId) {
      loadTemplate(params.templateId);
    }
  }, [params?.templateId]);

  const loadTemplate = async (templateId: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/cms/page-templates/${templateId}`);
      if (!response.ok) {
        throw new Error('Failed to load template');
      }
      
      const templateData = await response.json();
      setTemplate(templateData);
      
      // Convert template sections to page builder format
      const sections: PageSection[] = templateData.layout.sections.map((section: any, index: number) => ({
        id: `section-${index}-${Date.now()}`,
        type: section.type,
        component: section.component,
        props: section.props || {}
      }));
      
      setInitialSections(sections);
    } catch (error) {
      console.error('Error loading template:', error);
      // You could add error state handling here
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (sections: PageSection[]) => {
    try {
      console.log('Saving page with sections:', sections);
      
      // Convert sections back to template format for saving
      const templateLayout = {
        sections: sections.map(section => ({
          type: section.type,
          component: section.component,
          props: section.props
        }))
      };
      
      // Here you would typically save to your CMS API
      const response = await fetch('/api/cms/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          templateId: params?.templateId,
          layout: templateLayout,
          title: `Page built from ${template?.name || 'template'}`,
          slug: `page-${Date.now()}`,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save page');
      }
      
      console.log('Page saved successfully');
      // You could add success notification here
    } catch (error) {
      console.error('Error saving page:', error);
      // You could add error notification here
    }
  };

  const handlePreview = () => {
    console.log('Opening preview...');
    // Implement preview functionality
  };

  if (!match) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading page builder...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBuilder
        initialSections={initialSections}
        templateId={params?.templateId}
        onSave={handleSave}
        onPreview={handlePreview}
      />
    </div>
  );
}