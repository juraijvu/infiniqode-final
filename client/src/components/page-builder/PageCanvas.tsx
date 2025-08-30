import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableSection } from './SortableSection';

interface PageSection {
  id: string;
  type: string;
  component: string;
  props: Record<string, any>;
}

interface PageCanvasProps {
  sections: PageSection[];
  selectedSection: string | null;
  onSectionSelect: (sectionId: string) => void;
  onSectionDelete: (sectionId: string) => void;
  onSectionDuplicate: (sectionId: string) => void;
  isDragging: boolean;
  draggedComponent: string | null;
}

export function PageCanvas({
  sections,
  selectedSection,
  onSectionSelect,
  onSectionDelete,
  onSectionDuplicate,
  isDragging,
  draggedComponent,
}: PageCanvasProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'canvas',
    data: {
      type: 'canvas',
      index: sections.length,
    },
  });

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div
        ref={setNodeRef}
        className={`min-h-screen bg-white rounded-lg shadow-sm border border-gray-200 ${
          isDragging ? 'border-blue-300 bg-blue-50/30' : ''
        } ${isOver ? 'border-blue-500 bg-blue-50' : ''}`}
      >
        {sections.length === 0 ? (
          <div className="flex items-center justify-center h-96 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Start Building Your Page
              </h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                Drag components from the palette on the left to start building your page.
                You can rearrange sections by dragging them up and down.
              </p>
            </div>
          </div>
        ) : (
          <SortableContext items={sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-4 p-4">
              {sections.map((section, index) => (
                <SortableSection
                  key={section.id}
                  section={section}
                  index={index}
                  isSelected={selectedSection === section.id}
                  onSelect={() => onSectionSelect(section.id)}
                  onDelete={() => onSectionDelete(section.id)}
                  onDuplicate={() => onSectionDuplicate(section.id)}
                />
              ))}
            </div>
          </SortableContext>
        )}

        {/* Drop zones between sections */}
        {sections.length > 0 && isDragging && draggedComponent && (
          <div className="absolute inset-0 pointer-events-none">
            {sections.map((_, index) => (
              <DropZone key={`dropzone-${index}`} index={index} />
            ))}
            <DropZone index={sections.length} />
          </div>
        )}
      </div>
    </div>
  );
}

interface DropZoneProps {
  index: number;
}

function DropZone({ index }: DropZoneProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `dropzone-${index}`,
    data: {
      type: 'canvas',
      index,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={`absolute left-4 right-4 h-2 rounded-full transition-all duration-200 ${
        isOver
          ? 'bg-blue-500 shadow-lg shadow-blue-500/25'
          : 'bg-gray-300 opacity-50'
      }`}
      style={{
        top: `${(index / (10 + 1)) * 100}%`,
        transform: 'translateY(-50%)',
      }}
    />
  );
}