import React, { useState } from 'react';
import { Save, Eye, Undo, Redo, Download, Upload, Settings, Home } from 'lucide-react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Badge } from '../ui/badge';

interface PageBuilderToolbarProps {
  onSave?: () => void;
  onPreview?: () => void;
  hasUnsavedChanges?: boolean;
  templateId?: string;
}

export function PageBuilderToolbar({
  onSave,
  onPreview,
  hasUnsavedChanges = false,
  templateId,
}: PageBuilderToolbarProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const handleSave = async () => {
    if (!onSave) return;
    
    setIsSaving(true);
    try {
      await onSave();
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreview = () => {
    setPreviewMode(!previewMode);
    onPreview?.();
  };

  const handleExport = () => {
    // Export page data as JSON
    console.log('Exporting page...');
  };

  const handleImport = () => {
    // Import page data from JSON
    console.log('Importing page...');
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      {/* Left side - Main actions */}
      <div className="flex items-center space-x-4">
        {/* Back to dashboard */}
        <Button variant="ghost" size="sm">
          <Home size={16} className="mr-2" />
          Dashboard
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Save */}
        <Button
          onClick={handleSave}
          disabled={isSaving || !hasUnsavedChanges}
          size="sm"
          className="relative"
        >
          <Save size={16} className="mr-2" />
          {isSaving ? 'Saving...' : 'Save'}
          {hasUnsavedChanges && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 w-2 h-2 p-0 border border-white"
            />
          )}
        </Button>

        {/* Preview */}
        <Button
          variant={previewMode ? 'default' : 'outline'}
          onClick={handlePreview}
          size="sm"
        >
          <Eye size={16} className="mr-2" />
          {previewMode ? 'Edit Mode' : 'Preview'}
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* History actions */}
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm" disabled>
            <Undo size={16} />
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <Redo size={16} />
          </Button>
        </div>
      </div>

      {/* Center - Page info */}
      <div className="flex items-center space-x-4">
        {templateId && (
          <div className="text-sm text-gray-600">
            Template: <span className="font-medium">{templateId}</span>
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm text-gray-600">Auto-save enabled</span>
        </div>
      </div>

      {/* Right side - Additional actions */}
      <div className="flex items-center space-x-2">
        {/* Import/Export */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Download size={16} className="mr-2" />
              Export
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Export Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleExport}>
              <Download size={16} className="mr-2" />
              Export as JSON
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download size={16} className="mr-2" />
              Export as HTML
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleImport}>
              <Upload size={16} className="mr-2" />
              Import from JSON
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Settings */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Settings size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Page Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              SEO Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              Page Properties
            </DropdownMenuItem>
            <DropdownMenuItem>
              Theme Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Keyboard Shortcuts
            </DropdownMenuItem>
            <DropdownMenuItem>
              Builder Preferences
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}