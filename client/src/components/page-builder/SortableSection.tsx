import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Copy, Trash2, Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import { PreviewComponent } from './PreviewComponent';

interface PageSection {
  id: string;
  type: string;
  component: string;
  props: Record<string, any>;
}

interface SortableSectionProps {
  section: PageSection;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
}

export function SortableSection({
  section,
  index,
  isSelected,
  onSelect,
  onDelete,
  onDuplicate,
}: SortableSectionProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: section.id,
    data: {
      type: 'section',
      section,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group rounded-lg border-2 transition-all duration-200 ${
        isSelected
          ? 'border-blue-500 shadow-lg shadow-blue-500/10'
          : 'border-gray-200 hover:border-gray-300'
      } ${isDragging ? 'z-50' : ''}`}
    >
      {/* Section Controls */}
      <div
        className={`absolute top-2 right-2 z-10 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
          isSelected ? 'opacity-100' : ''
        }`}
      >
        <div className="bg-white rounded-md shadow-sm border border-gray-200 flex items-center">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={onDuplicate}
          >
            <Copy size={14} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
            onClick={onDelete}
          >
            <Trash2 size={14} />
          </Button>
          <div
            className="h-8 w-8 flex items-center justify-center cursor-grab active:cursor-grabbing text-gray-500 hover:text-gray-700"
            {...attributes}
            {...listeners}
          >
            <GripVertical size={14} />
          </div>
        </div>
      </div>

      {/* Section Label */}
      <div
        className={`absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
          isSelected ? 'opacity-100' : ''
        }`}
      >
        <div className="bg-white rounded-md shadow-sm border border-gray-200 px-2 py-1">
          <span className="text-xs font-medium text-gray-700">
            {section.component}
          </span>
        </div>
      </div>

      {/* Section Content */}
      <div
        className="cursor-pointer"
        onClick={onSelect}
      >
        <PreviewComponent section={section} />
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute inset-0 pointer-events-none border-2 border-blue-500 rounded-lg">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Selected: {section.component}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}