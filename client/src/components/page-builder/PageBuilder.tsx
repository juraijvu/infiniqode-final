import React, { useState, useCallback } from 'react';
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { ComponentPalette } from './ComponentPalette';
import { PageCanvas } from './PageCanvas';
import { PropertyPanel } from './PropertyPanel';
import { PageBuilderToolbar } from './PageBuilderToolbar';
import { usePageBuilder } from '../../hooks/use-page-builder';

interface PageSection {
  id: string;
  type: string;
  component: string;
  props: Record<string, any>;
}

interface PageBuilderProps {
  initialSections?: PageSection[];
  templateId?: string;
  onSave?: (sections: PageSection[]) => void;
  onPreview?: () => void;
}

export function PageBuilder({ 
  initialSections = [], 
  templateId, 
  onSave, 
  onPreview 
}: PageBuilderProps) {
  const [sections, setSections] = useState<PageSection[]>(initialSections);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedComponent, setDraggedComponent] = useState<string | null>(null);

  const { components, isLoading } = usePageBuilder();

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setIsDragging(true);
    setDraggedComponent(event.active.id as string);
  }, []);

  const handleDragOver = useCallback((event: DragOverEvent) => {
    // Handle drag over logic for visual feedback
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    setIsDragging(false);
    setDraggedComponent(null);

    const { active, over } = event;

    if (!over) return;

    // Handle dropping a new component from palette
    if (active.data.current?.type === 'component' && over.data.current?.type === 'canvas') {
      const newSection: PageSection = {
        id: `section-${Date.now()}`,
        type: active.data.current.category,
        component: active.id as string,
        props: active.data.current.defaultProps || {}
      };

      const dropIndex = over.data.current.index || sections.length;
      const newSections = [...sections];
      newSections.splice(dropIndex, 0, newSection);
      setSections(newSections);
      setSelectedSection(newSection.id);
      return;
    }

    // Handle reordering existing sections
    if (active.data.current?.type === 'section' && over.data.current?.type === 'section') {
      const activeIndex = sections.findIndex(s => s.id === active.id);
      const overIndex = sections.findIndex(s => s.id === over.id);

      if (activeIndex !== overIndex) {
        const newSections = [...sections];
        const [removed] = newSections.splice(activeIndex, 1);
        newSections.splice(overIndex, 0, removed);
        setSections(newSections);
      }
    }
  }, [sections]);

  const handleSectionSelect = useCallback((sectionId: string) => {
    setSelectedSection(sectionId);
  }, []);

  const handleSectionUpdate = useCallback((sectionId: string, newProps: Record<string, any>) => {
    setSections(prev => prev.map(section => 
      section.id === sectionId 
        ? { ...section, props: { ...section.props, ...newProps } }
        : section
    ));
  }, []);

  const handleSectionDelete = useCallback((sectionId: string) => {
    setSections(prev => prev.filter(section => section.id !== sectionId));
    if (selectedSection === sectionId) {
      setSelectedSection(null);
    }
  }, [selectedSection]);

  const handleSectionDuplicate = useCallback((sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      const duplicatedSection: PageSection = {
        ...section,
        id: `section-${Date.now()}`,
      };
      const index = sections.findIndex(s => s.id === sectionId);
      const newSections = [...sections];
      newSections.splice(index + 1, 0, duplicatedSection);
      setSections(newSections);
    }
  }, [sections]);

  const handleSave = useCallback(() => {
    onSave?.(sections);
  }, [sections, onSave]);

  const selectedSectionData = selectedSection 
    ? sections.find(s => s.id === selectedSection)
    : null;

  return (
    <div className="h-screen flex bg-gray-50">
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {/* Component Palette */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Components</h2>
            <p className="text-sm text-gray-600">Drag components to build your page</p>
          </div>
          <ComponentPalette 
            components={components} 
            isLoading={isLoading}
            searchable
          />
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <PageBuilderToolbar
            onSave={handleSave}
            onPreview={onPreview}
            hasUnsavedChanges={sections.length > initialSections.length}
            templateId={templateId}
          />

          {/* Canvas */}
          <div className="flex-1 overflow-auto">
            <SortableContext 
              items={sections.map(s => s.id)} 
              strategy={verticalListSortingStrategy}
            >
              <PageCanvas
                sections={sections}
                selectedSection={selectedSection}
                onSectionSelect={handleSectionSelect}
                onSectionDelete={handleSectionDelete}
                onSectionDuplicate={handleSectionDuplicate}
                isDragging={isDragging}
                draggedComponent={draggedComponent}
              />
            </SortableContext>
          </div>
        </div>

        {/* Property Panel */}
        {selectedSectionData && (
          <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Properties</h2>
              <p className="text-sm text-gray-600">
                {selectedSectionData.component}
              </p>
            </div>
            <PropertyPanel
              section={selectedSectionData}
              onUpdate={(props) => handleSectionUpdate(selectedSectionData.id, props)}
            />
          </div>
        )}
      </DndContext>
    </div>
  );
}