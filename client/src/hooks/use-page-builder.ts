import { useState, useEffect } from 'react';

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  componentType: string;
  defaultProps: Record<string, any>;
  preview?: string;
  icon: React.ReactNode;
}

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

interface UsePageBuilderReturn {
  components: ComponentItem[];
  templates: PageTemplate[];
  isLoading: boolean;
  error: string | null;
  fetchTemplates: () => Promise<void>;
  fetchComponents: () => Promise<void>;
}

export function usePageBuilder(): UsePageBuilderReturn {
  const [components, setComponents] = useState<ComponentItem[]>([]);
  const [templates, setTemplates] = useState<PageTemplate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTemplates = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/cms/page-templates');
      if (!response.ok) {
        throw new Error('Failed to fetch templates');
      }
      const data = await response.json();
      setTemplates(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch templates');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchComponents = async () => {
    try {
      setIsLoading(true);
      // In a real app, this would fetch from an API
      // For now, we'll use empty array as components are mocked in ComponentPalette
      setComponents([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch components');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([fetchTemplates(), fetchComponents()]);
    };
    
    loadData();
  }, []);

  return {
    components,
    templates,
    isLoading,
    error,
    fetchTemplates,
    fetchComponents,
  };
}