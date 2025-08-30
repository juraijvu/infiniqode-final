import React from 'react';
import { Type, Image, Grid, Layout, Users, Star, DollarSign } from 'lucide-react';

interface PageSection {
  id: string;
  type: string;
  component: string;
  props: Record<string, any>;
}

interface PreviewComponentProps {
  section: PageSection;
}

export function PreviewComponent({ section }: PreviewComponentProps) {
  const { component, props } = section;

  // Mock preview components - in real app these would be actual component previews
  switch (component) {
    case 'hero-section':
      return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">
              {props.title || 'Hero Title'}
            </h1>
            <p className="text-lg mb-6 opacity-90">
              {props.subtitle || 'Your compelling subtitle goes here'}
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              {props.buttonText || 'Get Started'}
            </button>
          </div>
        </div>
      );

    case 'feature-grid':
      return (
        <div className="p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-8">
            {props.title || 'Our Features'}
          </h2>
          <div className={`grid grid-cols-${props.columns || 3} gap-6`}>
            {(props.features || [
              { title: 'Feature 1', description: 'Description', icon: '⚡' },
              { title: 'Feature 2', description: 'Description', icon: '🔒' },
              { title: 'Feature 3', description: 'Description', icon: '📈' },
            ]).slice(0, 3).map((feature: any, index: number) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'text-block':
      return (
        <div className="p-8">
          <div 
            className={`text-${props.fontSize || 'base'} text-${props.color || 'gray-900'} text-${props.textAlign || 'left'}`}
          >
            {props.content || 'Your text content goes here. This is a preview of how your text will appear on the page.'}
          </div>
        </div>
      );

    case 'image-gallery':
      return (
        <div className="p-8">
          <div className={`grid grid-cols-${props.columns || 2} gap-4`}>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <Image className="text-gray-400" size={32} />
              </div>
            ))}
          </div>
        </div>
      );

    case 'contact-form':
      return (
        <div className="p-8 bg-white rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
            {(props.fields || ['name', 'email', 'message']).map((field: string) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {field}
                </label>
                {field === 'message' ? (
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    rows={3}
                    placeholder={`Enter your ${field}`}
                  />
                ) : (
                  <input 
                    type={field === 'email' ? 'email' : 'text'}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder={`Enter your ${field}`}
                  />
                )}
              </div>
            ))}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              {props.submitText || 'Send Message'}
            </button>
          </div>
        </div>
      );

    case 'cta-section':
      return (
        <div className="p-8 bg-blue-600 text-white rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            {props.title || 'Ready to get started?'}
          </h2>
          <p className="text-lg mb-6 opacity-90">
            {props.description || 'Join thousands of satisfied customers'}
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            {props.buttonText || 'Get Started Now'}
          </button>
        </div>
      );

    case 'testimonial-card':
      return (
        <div className="p-8 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            {Array.from({ length: props.rating || 5 }).map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-current" size={16} />
            ))}
          </div>
          <blockquote className="text-gray-700 mb-4 italic">
            "{props.quote || 'This product has transformed our business completely.'}"
          </blockquote>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <Users size={20} className="text-gray-500" />
            </div>
            <div>
              <p className="font-semibold">{props.author || 'John Doe'}</p>
              <p className="text-sm text-gray-600">{props.company || 'Acme Inc'}</p>
            </div>
          </div>
        </div>
      );

    case 'pricing-table':
      return (
        <div className="p-8">
          <div className="grid grid-cols-3 gap-6">
            {(props.plans || [
              { name: 'Basic', price: '$9/month', features: ['Feature 1', 'Feature 2'] },
              { name: 'Pro', price: '$19/month', features: ['All Basic', 'Feature 3'] },
              { name: 'Enterprise', price: '$39/month', features: ['All Pro', 'Feature 4'] },
            ]).map((plan: any, index: number) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-4">{plan.price}</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return (
        <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="text-center text-gray-500">
            <Layout size={48} className="mx-auto mb-4" />
            <h3 className="text-lg font-medium">{component}</h3>
            <p className="text-sm">Preview not available</p>
          </div>
        </div>
      );
  }
}