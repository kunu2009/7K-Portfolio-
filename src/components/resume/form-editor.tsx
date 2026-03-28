// Resume Form Editor Component
'use client';

import { useState } from 'react';
import { Plus, X, ChevronDown, ChevronUp } from 'lucide-react';
import type { ResumeData, ExperienceItem, EducationItem, ProjectItem, CertificationItem, LanguageItem } from '@/lib/resume-data';

interface ResumeFormEditorProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export function ResumeFormEditor({ data, onChange }: ResumeFormEditorProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    personal: true,
    summary: true,
    experience: true,
    education: true,
    skills: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Personal Info Handler
  const handlePersonalChange = (field: keyof typeof data.personal, value: string) => {
    onChange({
      ...data,
      personal: { ...data.personal, [field]: value }
    });
  };

  // Summary Handler
  const handleSummaryChange = (value: string) => {
    onChange({ ...data, summary: value });
  };

  // Experience Handlers
  const addExperience = () => {
    const newExp: ExperienceItem = {
      id: `exp_${Date.now()}`,
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      currentlyWorking: false,
      description: ''
    };
    onChange({
      ...data,
      experience: [...data.experience, newExp]
    });
  };

  const updateExperience = (id: string, exp: ExperienceItem) => {
    onChange({
      ...data,
      experience: data.experience.map(e => e.id === id ? exp : e)
    });
  };

  const removeExperience = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter(e => e.id !== id)
    });
  };

  // Skills Handlers
  const addSkill = () => {
    onChange({
      ...data,
      skills: [...data.skills, '']
    });
  };

  const updateSkill = (index: number, value: string) => {
    const newSkills = [...data.skills];
    newSkills[index] = value;
    onChange({ ...data, skills: newSkills });
  };

  const removeSkill = (index: number) => {
    onChange({
      ...data,
      skills: data.skills.filter((_, i) => i !== index)
    });
  };

  // Section Checkbox
  const toggleSectionEnabled = (section: string) => {
    const enabled = data.enabledSections.includes(section as any);
    onChange({
      ...data,
      enabledSections: enabled
        ? data.enabledSections.filter(s => s !== section)
        : [...data.enabledSections, section as any]
    });
  };

  return (
    <div className="space-y-4">
      {/* Personal Information Section */}
      <SectionHeader
        title="👤 Personal Information"
        isExpanded={expandedSections.personal}
        onToggle={() => toggleSection('personal')}
        isRequired
      />
      {expandedSections.personal && (
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800 space-y-3">
          <InputField
            label="Full Name"
            value={data.personal.fullName}
            onChange={(e) => handlePersonalChange('fullName', e.target.value)}
            placeholder="John Doe"
          />
          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="Email"
              type="email"
              value={data.personal.email}
              onChange={(e) => handlePersonalChange('email', e.target.value)}
              placeholder="email@example.com"
            />
            <InputField
              label="Phone"
              value={data.personal.phone}
              onChange={(e) => handlePersonalChange('phone', e.target.value)}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <InputField
            label="Location"
            value={data.personal.location}
            onChange={(e) => handlePersonalChange('location', e.target.value)}
            placeholder="City, State"
          />
          <InputField
            label="Portfolio URL (Optional)"
            value={data.personal.portfolio || ''}
            onChange={(e) => handlePersonalChange('portfolio', e.target.value)}
            placeholder="https://yourportfolio.com"
          />
          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="LinkedIn (Optional)"
              value={data.personal.linkedin || ''}
              onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
              placeholder="linkedin.com/in/yourprofile"
            />
            <InputField
              label="GitHub (Optional)"
              value={data.personal.github || ''}
              onChange={(e) => handlePersonalChange('github', e.target.value)}
              placeholder="github.com/yourprofile"
            />
          </div>
        </div>
      )}

      {/* Summary Section */}
      <SectionHeader
        title="📝 Professional Summary"
        isExpanded={expandedSections.summary}
        onToggle={() => toggleSection('summary')}
        enabled={data.enabledSections.includes('summary')}
        onToggleEnabled={() => toggleSectionEnabled('summary')}
      />
      {expandedSections.summary && data.enabledSections.includes('summary') && (
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800">
          <textarea
            value={data.summary}
            onChange={(e) => handleSummaryChange(e.target.value)}
            placeholder="Brief summary of your professional background and goals..."
            className="w-full h-24 p-2 border border-zinc-300 dark:border-zinc-700 rounded text-sm bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
          />
        </div>
      )}

      {/* Experience Section */}
      <SectionHeader
        title="💼 Experience"
        isExpanded={expandedSections.experience}
        onToggle={() => toggleSection('experience')}
        enabled={data.enabledSections.includes('experience')}
        onToggleEnabled={() => toggleSectionEnabled('experience')}
        count={data.experience.length}
      />
      {expandedSections.experience && data.enabledSections.includes('experience') && (
        <div className="space-y-3">
          {data.experience.map((exp, idx) => (
            <ExperienceForm
              key={exp.id}
              experience={exp}
              onChange={(updated) => updateExperience(exp.id, updated)}
              onRemove={() => removeExperience(exp.id)}
              number={idx + 1}
            />
          ))}
          <button
            onClick={addExperience}
            className="w-full py-2 border-2 border-dashed border-violet-300 dark:border-violet-700 rounded-lg text-violet-600 dark:text-violet-400 font-medium text-sm hover:bg-violet-50 dark:hover:bg-violet-950/50 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Experience
          </button>
        </div>
      )}

      {/* Skills Section */}
      <SectionHeader
        title="🎯 Skills"
        isExpanded={expandedSections.skills}
        onToggle={() => toggleSection('skills')}
        enabled={data.enabledSections.includes('skills')}
        onToggleEnabled={() => toggleSectionEnabled('skills')}
        count={data.skills.length}
      />
      {expandedSections.skills && data.enabledSections.includes('skills') && (
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800 space-y-3">
          <p className="text-xs text-zinc-600 dark:text-zinc-400">Add skills separated by commas or add individually</p>
          {data.skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => updateSkill(idx, e.target.value)}
                placeholder="e.g., React, Node.js, TypeScript"
                className="flex-1 px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded text-sm bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
              <button
                onClick={() => removeSkill(idx)}
                className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            onClick={addSkill}
            className="w-full py-2 border-2 border-dashed border-violet-300 dark:border-violet-700 rounded-lg text-violet-600 dark:text-violet-400 font-medium text-sm hover:bg-violet-50 dark:hover:bg-violet-950/50 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Skill
          </button>
        </div>
      )}
    </div>
  );
}

// Helper Components
interface SectionHeaderProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  enabled?: boolean;
  onToggleEnabled?: () => void;
  isRequired?: boolean;
  count?: number;
}

function SectionHeader({ 
  title, 
  isExpanded, 
  onToggle, 
  enabled = true, 
  onToggleEnabled,
  isRequired = false,
  count
}: SectionHeaderProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg p-3 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
      <button
        onClick={onToggle}
        className="flex items-center gap-3 flex-1"
      >
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
        )}
        <span className="font-medium text-zinc-900 dark:text-white">{title}</span>
        {count !== undefined && (
          <span className="text-xs text-zinc-600 dark:text-zinc-400">({count})</span>
        )}
      </button>
      <div className="flex items-center gap-2">
        {!isRequired && (
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={enabled}
              onChange={onToggleEnabled}
              className="w-4 h-4"
            />
            <span className="text-xs text-zinc-600 dark:text-zinc-400">Show</span>
          </label>
        )}
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

function InputField({ label, value, onChange, placeholder, type = 'text' }: InputFieldProps) {
  return (
    <div>
      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded text-sm bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
      />
    </div>
  );
}

interface ExperienceFormProps {
  experience: ExperienceItem;
  onChange: (exp: ExperienceItem) => void;
  onRemove: () => void;
  number: number;
}

function ExperienceForm({ experience, onChange, onRemove, number }: ExperienceFormProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800 space-y-3">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-sm">Experience {number}</h4>
        <button
          onClick={onRemove}
          className="p-1 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <InputField
        label="Job Title"
        value={experience.jobTitle}
        onChange={(e) => onChange({ ...experience, jobTitle: e.target.value })}
        placeholder="Senior Developer"
      />
      
      <InputField
        label="Company"
        value={experience.company}
        onChange={(e) => onChange({ ...experience, company: e.target.value })}
        placeholder="Company Name"
      />
      
      <InputField
        label="Location"
        value={experience.location}
        onChange={(e) => onChange({ ...experience, location: e.target.value })}
        placeholder="City, State"
      />
      
      <div className="grid grid-cols-2 gap-3">
        <InputField
          label="Start Date"
          type="month"
          value={experience.startDate}
          onChange={(e) => onChange({ ...experience, startDate: e.target.value })}
        />
        <InputField
          label="End Date"
          type="month"
          value={experience.endDate}
          onChange={(e) => onChange({ ...experience, endDate: e.target.value })}
          placeholder={experience.currentlyWorking ? 'N/A' : 'MM/YYYY'}
        />
      </div>
      
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={experience.currentlyWorking}
          onChange={(e) => onChange({ ...experience, currentlyWorking: e.target.checked })}
          className="w-4 h-4"
        />
        <span className="text-sm text-zinc-700 dark:text-zinc-300">Currently working here</span>
      </label>
      
      <div>
        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
          Description/Achievements
        </label>
        <textarea
          value={experience.description}
          onChange={(e) => onChange({ ...experience, description: e.target.value })}
          placeholder="Describe your responsibilities and achievements..."
          className="w-full h-20 p-2 border border-zinc-300 dark:border-zinc-700 rounded text-sm bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
        />
      </div>
    </div>
  );
}
