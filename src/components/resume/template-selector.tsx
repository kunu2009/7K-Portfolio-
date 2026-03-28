// Resume Template Selector Component
'use client';

import { useState } from 'react';
import { Lock, Check } from 'lucide-react';
import { RESUME_TEMPLATES, type ResumeTemplate } from '@/lib/resume-data';
import { TEMPLATE_PRICING } from '@/lib/resume-access';
import type { TemplateInfo } from '@/lib/resume-data';

interface TemplateSelectorProps {
  selectedTemplate: ResumeTemplate;
  onSelect: (template: ResumeTemplate) => void;
  userAccess?: ResumeTemplate[];
  onUnlock?: (template: TemplateInfo) => void;
}

export function TemplateSelector({ 
  selectedTemplate, 
  onSelect, 
  userAccess = [],
  onUnlock 
}: TemplateSelectorProps) {
  const [hoveredTemplate, setHoveredTemplate] = useState<ResumeTemplate | null>(null);

  // Group templates by category
  const atsFriendly = RESUME_TEMPLATES.filter(t => t.category === 'ATS-Friendly');
  const creative = RESUME_TEMPLATES.filter(t => t.category === 'Modern/Creative');

  const isTemplateAccessible = (template: ResumeTemplate): boolean => {
    const info = RESUME_TEMPLATES.find(t => t.id === template);
    if (!info?.isPremium) return true;
    return userAccess.includes(template);
  };

  const TemplateCard = ({ template }: { template: TemplateInfo }) => {
    const isSelected = selectedTemplate === template.id;
    const hasAccess = isTemplateAccessible(template.id);
    const price = TEMPLATE_PRICING[template.id];

    return (
      <div
        key={template.id}
        onMouseEnter={() => setHoveredTemplate(template.id)}
        onMouseLeave={() => setHoveredTemplate(null)}
        className="relative"
      >
        <button
          onClick={() => {
            if (hasAccess || !template.isPremium) {
              onSelect(template.id);
            }
          }}
          disabled={template.isPremium && !hasAccess}
          className={`w-full p-4 rounded-lg border-2 transition-all ${
            isSelected
              ? 'border-violet-600 bg-violet-50 dark:bg-violet-950/30'
              : 'border-zinc-200 dark:border-zinc-800 hover:border-violet-300 dark:hover:border-violet-700'
          } ${template.isPremium && !hasAccess ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <div className="text-left flex-1">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-white">
                {template.name}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{template.category}</p>
            </div>
            {isSelected && (
              <Check className="w-5 h-5 text-violet-600" />
            )}
          </div>

          {/* Description */}
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3 text-left">
            {template.description}
          </p>

          {/* Preview */}
          <div className="w-full h-32 bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700 rounded mb-3 flex items-center justify-center">
            <p className="text-xs text-zinc-400 text-center px-2">{template.preview}</p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {template.isPremium ? (
              <div className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                  ₹{price}
                </span>
              </div>
            ) : (
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Free Template
              </span>
            )}
            
            {hasAccess && template.isPremium && (
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                ✓ Unlocked
              </span>
            )}
          </div>
        </button>

        {/* Unlock Button on Hover */}
        {template.isPremium && !hasAccess && hoveredTemplate === template.id && (
          <button
            onClick={() => onUnlock?.(template)}
            className="absolute inset-0 rounded-lg bg-black/60 flex items-center justify-center text-white font-medium text-sm hover:bg-black/70 transition-colors"
          >
            Unlock (₹{price})
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* ATS-Friendly Section */}
      <div>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
          📋 ATS-Friendly Templates
          <span className="text-xs font-normal text-zinc-600 dark:text-zinc-400">
            (Optimized for recruitment systems)
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {atsFriendly.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>

      {/* Modern/Creative Section */}
      <div>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
          ✨ Modern & Creative Templates
          <span className="text-xs font-normal text-zinc-600 dark:text-zinc-400">
            (Stand out designs)
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {creative.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </div>
  );
}
