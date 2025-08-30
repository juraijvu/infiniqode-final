import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { Separator } from '../ui/separator';

interface PageSection {
  id: string;
  type: string;
  component: string;
  props: Record<string, any>;
}

interface PropertyPanelProps {
  section: PageSection;
  onUpdate: (props: Record<string, any>) => void;
}

type PropertyField = {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'boolean' | 'select' | 'color' | 'slider';
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
};

// Property configurations for different components
const getPropertyFields = (component: string): PropertyField[] => {
  switch (component) {
    case 'hero-section':
      return [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
        { key: 'buttonText', label: 'Button Text', type: 'text' },
        { key: 'backgroundImage', label: 'Background Image URL', type: 'text' },
        { 
          key: 'backgroundStyle', 
          label: 'Background Style', 
          type: 'select',
          options: [
            { value: 'gradient', label: 'Gradient' },
            { value: 'image', label: 'Image' },
            { value: 'solid', label: 'Solid Color' }
          ]
        },
        {
          key: 'ctaStyle',
          label: 'Button Style',
          type: 'select',
          options: [
            { value: 'primary', label: 'Primary' },
            { value: 'secondary', label: 'Secondary' },
            { value: 'outline', label: 'Outline' }
          ]
        }
      ];

    case 'feature-grid':
      return [
        { key: 'title', label: 'Section Title', type: 'text' },
        { 
          key: 'columns', 
          label: 'Columns', 
          type: 'slider',
          min: 1,
          max: 4,
          step: 1
        },
        { key: 'showIcons', label: 'Show Icons', type: 'boolean' },
        {
          key: 'layout',
          label: 'Layout Style',
          type: 'select',
          options: [
            { value: 'cards', label: 'Cards' },
            { value: 'minimal', label: 'Minimal' },
            { value: 'bordered', label: 'Bordered' }
          ]
        }
      ];

    case 'text-block':
      return [
        { key: 'content', label: 'Content', type: 'textarea' },
        {
          key: 'fontSize',
          label: 'Font Size',
          type: 'select',
          options: [
            { value: 'sm', label: 'Small' },
            { value: 'base', label: 'Base' },
            { value: 'lg', label: 'Large' },
            { value: 'xl', label: 'Extra Large' }
          ]
        },
        {
          key: 'textAlign',
          label: 'Text Alignment',
          type: 'select',
          options: [
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
            { value: 'right', label: 'Right' }
          ]
        },
        {
          key: 'color',
          label: 'Text Color',
          type: 'select',
          options: [
            { value: 'gray-900', label: 'Dark Gray' },
            { value: 'gray-600', label: 'Medium Gray' },
            { value: 'blue-600', label: 'Blue' },
            { value: 'green-600', label: 'Green' }
          ]
        }
      ];

    case 'contact-form':
      return [
        { key: 'submitText', label: 'Submit Button Text', type: 'text' },
        {
          key: 'style',
          label: 'Form Style',
          type: 'select',
          options: [
            { value: 'default', label: 'Default' },
            { value: 'inline', label: 'Inline' },
            { value: 'card', label: 'Card' }
          ]
        },
        { key: 'showCalendar', label: 'Show Calendar Booking', type: 'boolean' }
      ];

    case 'cta-section':
      return [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'buttonText', label: 'Button Text', type: 'text' },
        {
          key: 'style',
          label: 'Section Style',
          type: 'select',
          options: [
            { value: 'centered', label: 'Centered' },
            { value: 'left', label: 'Left Aligned' },
            { value: 'banner', label: 'Banner' }
          ]
        }
      ];

    case 'testimonial-card':
      return [
        { key: 'quote', label: 'Quote', type: 'textarea' },
        { key: 'author', label: 'Author Name', type: 'text' },
        { key: 'company', label: 'Company', type: 'text' },
        { key: 'avatar', label: 'Avatar URL', type: 'text' },
        { 
          key: 'rating', 
          label: 'Rating', 
          type: 'slider',
          min: 1,
          max: 5,
          step: 1
        }
      ];

    case 'image-gallery':
      return [
        { 
          key: 'columns', 
          label: 'Columns', 
          type: 'slider',
          min: 1,
          max: 4,
          step: 1
        },
        { key: 'showCaptions', label: 'Show Captions', type: 'boolean' },
        { key: 'lightbox', label: 'Enable Lightbox', type: 'boolean' },
        {
          key: 'layout',
          label: 'Layout',
          type: 'select',
          options: [
            { value: 'grid', label: 'Grid' },
            { value: 'masonry', label: 'Masonry' },
            { value: 'carousel', label: 'Carousel' }
          ]
        }
      ];

    default:
      return [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' }
      ];
  }
};

export function PropertyPanel({ section, onUpdate }: PropertyPanelProps) {
  const propertyFields = getPropertyFields(section.component);

  const handleValueChange = (key: string, value: any) => {
    onUpdate({ [key]: value });
  };

  const renderField = (field: PropertyField) => {
    const value = section.props[field.key];

    switch (field.type) {
      case 'text':
        return (
          <Input
            value={value || ''}
            onChange={(e) => handleValueChange(field.key, e.target.value)}
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
        );

      case 'textarea':
        return (
          <Textarea
            value={value || ''}
            onChange={(e) => handleValueChange(field.key, e.target.value)}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            rows={3}
          />
        );

      case 'number':
        return (
          <Input
            type="number"
            value={value || 0}
            onChange={(e) => handleValueChange(field.key, parseInt(e.target.value) || 0)}
            min={field.min}
            max={field.max}
          />
        );

      case 'boolean':
        return (
          <Switch
            checked={value || false}
            onCheckedChange={(checked) => handleValueChange(field.key, checked)}
          />
        );

      case 'select':
        return (
          <Select
            value={value || ''}
            onValueChange={(selectedValue) => handleValueChange(field.key, selectedValue)}
          >
            <SelectTrigger>
              <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'slider':
        return (
          <div className="space-y-2">
            <Slider
              value={[value || field.min || 0]}
              onValueChange={([newValue]) => handleValueChange(field.key, newValue)}
              min={field.min || 0}
              max={field.max || 100}
              step={field.step || 1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{field.min || 0}</span>
              <span className="font-medium">{value || field.min || 0}</span>
              <span>{field.max || 100}</span>
            </div>
          </div>
        );

      case 'color':
        return (
          <Input
            type="color"
            value={value || '#000000'}
            onChange={(e) => handleValueChange(field.key, e.target.value)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 space-y-6">
        {/* Component Info */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Component Type</h3>
          <p className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
            {section.component}
          </p>
        </div>

        <Separator />

        {/* Properties */}
        <div className="space-y-4">
          {propertyFields.map((field) => (
            <div key={field.key} className="space-y-2">
              <Label htmlFor={field.key} className="text-sm font-medium text-gray-700">
                {field.label}
              </Label>
              {renderField(field)}
            </div>
          ))}
        </div>

        {/* Advanced Properties */}
        <Separator />
        
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Advanced</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Custom CSS Classes</Label>
              <Input
                value={section.props.className || ''}
                onChange={(e) => handleValueChange('className', e.target.value)}
                placeholder="Enter custom CSS classes"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Custom ID</Label>
              <Input
                value={section.props.id || ''}
                onChange={(e) => handleValueChange('id', e.target.value)}
                placeholder="Enter custom ID"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <Separator />
        
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full">
            Reset to Default
          </Button>
        </div>
      </div>
    </div>
  );
}