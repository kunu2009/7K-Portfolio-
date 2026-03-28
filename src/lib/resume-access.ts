// Resume Premium Access Database Types & Utilities

import type { ResumeTemplate } from './resume-data';

/**
 * Pending payment request awaiting admin approval
 */
export type PendingTemplateAccess = {
  id: string;
  email: string;
  phone: string;
  templates: ResumeTemplate[];
  accessCode: string;
  paymentScreenshot?: string; // FamPay screenshot
  paymentDetails?: {
    amount: number;
    timestamp: string;
    transactionId?: string;
  };
  status: 'pending' | 'verified' | 'rejected';
  requestedAt: string;
  verifiedAt?: string;
  rejectedAt?: string;
  rejectionReason?: string;
  notes?: string;
};

/**
 * Approved template access
 */
export type ApprovedTemplateAccess = {
  id: string;
  email: string;
  phone: string;
  templates: ResumeTemplate[];
  accessCode: string;
  grantedAt: string;
  expiresAt?: string;
  notes?: string;
};

// Pricing for premium templates
export const TEMPLATE_PRICING: Record<ResumeTemplate, number | null> = {
  'ats-classic': null, // Free
  'ats-modern': null, // Free
  'ats-minimal': null, // Free
  'ats-elegant': 299, // ₹299
  'creative-bold': 299,
  'creative-minimalist': 399, // ₹399
  'creative-colorful': 399,
  'creative-geometric': 499, // ₹499
};

/**
 * Bundle pricing
 */
export const TEMPLATE_BUNDLES = [
  {
    id: 'all-premium',
    name: 'All Premium Templates',
    templates: ['ats-elegant', 'creative-bold', 'creative-minimalist', 'creative-colorful', 'creative-geometric'] as ResumeTemplate[],
    price: 999, // ₹999 (save ₹195)
    description: 'Unlock all 5 premium resume templates'
  }
];

/**
 * Calculate total price for multiple templates
 */
export function calculateBundlePrice(templates: ResumeTemplate[]): number {
  return templates.reduce((total, template) => {
    return total + (TEMPLATE_PRICING[template] || 0);
  }, 0);
}

/**
 * Get list of templates for a bundle
 */
export function getBundleTemplates(bundleId: string): ResumeTemplate[] {
  const bundle = TEMPLATE_BUNDLES.find(b => b.id === bundleId);
  return bundle?.templates || [];
}

/**
 * Create pending access request
 */
export async function createPendingAccess(
  email: string,
  phone: string,
  templates: ResumeTemplate[],
  paymentScreenshot?: File
): Promise<PendingTemplateAccess> {
  const accessCode = `7K-${Math.random().toString(36).substring(2, 9).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
  
  // In a real app, this would upload to a database
  const request: PendingTemplateAccess = {
    id: `req_${Date.now()}`,
    email,
    phone,
    templates,
    accessCode,
    status: 'pending',
    requestedAt: new Date().toISOString(),
    paymentDetails: {
      amount: calculateBundlePrice(templates),
      timestamp: new Date().toISOString(),
    }
  };

  // TODO: Upload to Firebase/DB
  console.log('Pending access request:', request);

  return request;
}

/**
 * Verify access code and grant template access
 */
export async function verifyAndGrantAccess(
  email: string,
  accessCode: string
): Promise<ApprovedTemplateAccess | null> {
  // TODO: Query database for verified access code
  // This would check against approved requests
  console.log('Verifying access code:', accessCode);
  return null;
}

/**
 * Check if user has access to a template
 */
export async function checkTemplateAccess(
  email: string,
  template: ResumeTemplate
): Promise<boolean> {
  // TODO: Query database for user's approved templates
  return false;
}

/**
 * Get user's all approved templates
 */
export async function getUserApprovedTemplates(email: string): Promise<ResumeTemplate[]> {
  // TODO: Query database
  return [];
}

/**
 * FamPay QR Code URL
 */
export const FAMPAY_QR_URL = 'https://p.famapp.in/kunalchheda7k'; // Replace with actual QR

/**
 * Instructions for payment
 */
export const PAYMENT_INSTRUCTIONS = {
  title: 'Unlock Premium Templates',
  steps: [
    '1. Scan the FamPay QR code',
    '2. Complete payment',
    '3. You\'ll receive an access code',
    '4. Share your email & access code with us',
    '5. We\'ll verify and grant instant access'
  ],
  contact: {
    whatsapp: 'https://wa.me/918591247148?text=Hi%20Kunal!%20I%20want%20to%20unlock%20premium%20resume%20templates',
    email: 'contact@7k.com'
  }
};

/**
 * Mock function - In production, integrate with actual payment system
 */
export async function mockProcessPayment(
  templates: ResumeTemplate[],
  email: string,
  phone: string
): Promise<{ accessCode: string; message: string }> {
  const accessCode = `7K-${Math.random().toString(36).substring(2, 9).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
  
  return {
    accessCode,
    message: `Payment recorded. Please share this code and your email (${email}) via WhatsApp to verify access.`
  };
}
