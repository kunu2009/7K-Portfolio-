// Resume Builder Page
'use client';

import { useState, useEffect } from 'react';
import { Download, Eye, EyeOff } from 'lucide-react';
import { DEFAULT_RESUME_DATA, RESUME_STORAGE_KEYS, type ResumeData, type ResumeTemplate } from '@/lib/resume-data';
import { TemplateSelector } from '@/components/resume/template-selector';
import { ResumeFormEditor } from '@/components/resume/form-editor';
import { ClassicATSTemplate } from '@/components/resume/templates/classic-ats';
import { ModernATSTemplate } from '@/components/resume/templates/modern-ats';
import { exportResumePDF } from '@/lib/resume-export';

export default function ResumeBuilderPage() {
  const [resumeData, setResumeData] = useState<ResumeData>(DEFAULT_RESUME_DATA);
  const [showPreview, setShowPreview] = useState(true);
  const [templateAccess, setTemplateAccess] = useState<ResumeTemplate[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem(RESUME_STORAGE_KEYS.RESUME_DATA);
    const savedAccess = localStorage.getItem(RESUME_STORAGE_KEYS.TEMPLATE_ACCESS);
    
    if (saved) {
      try {
        setResumeData(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load resume data');
      }
    }
    
    if (savedAccess) {
      try {
        setTemplateAccess(JSON.parse(savedAccess));
      } catch (e) {
        console.error('Failed to load template access');
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(RESUME_STORAGE_KEYS.RESUME_DATA, JSON.stringify(resumeData));
      localStorage.setItem(RESUME_STORAGE_KEYS.TEMPLATE_ACCESS, JSON.stringify(templateAccess));
    }
  }, [resumeData, templateAccess, isMounted]);

  const handleDataChange = (newData: ResumeData) => {
    setResumeData(newData);
  };

  const handleTemplateSelect = (template: ResumeTemplate) => {
    setResumeData(prev => ({
      ...prev,
      templateId: template
    }));
  };

  const handleDownloadPDF = () => {
    const previewElement = document.getElementById('resume-preview');
    if (previewElement) {
      // Check if premium template and has watermark
      const templateInfo = templateAccess.includes(resumeData.templateId);
      const hasWatermark = !templateInfo;
      
      exportResumePDF(
        previewElement,
        `Resume_${resumeData.personal.fullName.replace(/\s+/g, '_')}`,
        hasWatermark
      );
    }
  };

  const renderTemplate = () => {
    const watermark = !templateAccess.includes(resumeData.templateId) ? 'Made with 7K Resume Maker' : undefined;
    
    switch (resumeData.templateId) {
      case 'ats-classic':
        return <ClassicATSTemplate data={resumeData} watermark={watermark} />;
      case 'ats-modern':
      case 'ats-elegant':
        return <ModernATSTemplate data={resumeData} watermark={watermark} />;
      default:
        return <ModernATSTemplate data={resumeData} watermark={watermark} />;
    }
  };

  if (!isMounted) {
    return <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">Resume Builder</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Create a professional resume with 8 customizable templates. Free or Premium with instant unlock.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-zinc-200 dark:border-zinc-800">
          <button className="px-4 py-3 border-b-2 border-violet-600 text-violet-600 font-medium text-sm">
            1️⃣ Choose Template
          </button>
          <button className="px-4 py-3 text-zinc-600 dark:text-zinc-400 font-medium text-sm hover:text-zinc-900 dark:hover:text-white">
            2️⃣ Edit Resume
          </button>
          <button className="px-4 py-3 text-zinc-600 dark:text-zinc-400 font-medium text-sm hover:text-zinc-900 dark:hover:text-white">
            3️⃣ Download
          </button>
        </div>

        {/* Template Selection */}
        <div className="mb-12">
          <TemplateSelector 
            selectedTemplate={resumeData.templateId}
            onSelect={handleTemplateSelect}
            userAccess={templateAccess}
            onUnlock={(template) => {
              // TODO: Show unlock modal
              console.log('Unlock:', template);
            }}
          />
        </div>

        {/* Editor & Preview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Edit Your Resume</h2>
            <ResumeFormEditor 
              data={resumeData}
              onChange={handleDataChange}
            />
          </div>

          {/* Preview */}
          {showPreview && (
            <div>
              <div className="sticky top-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Preview</h2>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"
                  >
                    <EyeOff className="w-5 h-5" />
                  </button>
                </div>

                {/* Download Button */}
                <button
                  onClick={handleDownloadPDF}
                  className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume (PDF)
                </button>

                {/* Preview Area */}
                <div 
                  id="resume-preview"
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-zinc-200"
                >
                  {renderTemplate()}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Toggle Preview Button on Mobile */}
        {!showPreview && (
          <button
            onClick={() => setShowPreview(true)}
            className="fixed bottom-8 right-8 p-4 bg-violet-600 text-white rounded-full shadow-lg hover:bg-violet-700 transition-colors flex items-center gap-2"
          >
            <Eye className="w-5 h-5" />
            Show Preview
          </button>
        )}
      </div>
    </div>
  );
}
