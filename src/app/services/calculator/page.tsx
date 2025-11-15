'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Mail } from 'lucide-react';
import Link from 'next/link';

type ProjectType = 'website' | 'ecommerce' | 'app' | 'design';
type Feature = {
  id: string;
  name: string;
  price: number;
};

const projectTypes: { id: ProjectType; name: string; basePrice: number }[] = [
  { id: 'website', name: '🌐 Business Website', basePrice: 8000 },
  { id: 'ecommerce', name: '🛒 E-commerce Store', basePrice: 15000 },
  { id: 'app', name: '📱 Web Application', basePrice: 20000 },
  { id: 'design', name: '🎨 Design Only', basePrice: 5000 },
];

const features: Feature[] = [
  { id: 'blog', name: 'Blog System', price: 2000 },
  { id: 'gallery', name: 'Image Gallery', price: 1500 },
  { id: 'contact', name: 'Advanced Contact Form', price: 500 },
  { id: 'booking', name: 'Booking/Appointment System', price: 3000 },
  { id: 'payment', name: 'Payment Gateway', price: 2000 },
  { id: 'admin', name: 'Admin Panel', price: 5000 },
  { id: 'auth', name: 'User Authentication', price: 3000 },
  { id: 'api', name: 'API Integration', price: 2500 },
  { id: 'seo', name: 'Advanced SEO', price: 1500 },
  { id: 'analytics', name: 'Analytics Dashboard', price: 2000 },
];

export default function CalculatorPage() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<ProjectType | null>(null);
  const [pageCount, setPageCount] = useState(5);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const calculateTotal = () => {
    if (!projectType) return 0;

    const basePrice =
      projectTypes.find((pt) => pt.id === projectType)?.basePrice || 0;
    const pageCost = (pageCount - 5) * 500; // ₹500 per page after 5
    const featuresCost = selectedFeatures.reduce((total, featureId) => {
      const feature = features.find((f) => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);

    return basePrice + Math.max(0, pageCost) + featuresCost;
  };

  const handleNext = () => {
    if (step === 1 && projectType) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) setShowResults(true);
  };

  const handleBack = () => {
    if (showResults) setShowResults(false);
    else if (step > 1) setStep(step - 1);
  };

  const total = calculateTotal();
  const variance = Math.round(total * 0.15); // ±15% variance

  return (
    <main className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {!showResults ? (
          <>
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">
                  Step {step} of 3
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round((step / 3) * 100)}% complete
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              {/* Step 1: Project Type */}
              {step === 1 && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-3xl font-bold mb-4">
                    What type of project do you need?
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Select the option that best describes your project
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setProjectType(type.id)}
                        className={`p-6 rounded-xl border-2 text-left transition-all hover:scale-105 ${
                          projectType === type.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="text-2xl mb-2">{type.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Starting from ₹{type.basePrice.toLocaleString()}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Page Count */}
              {step === 2 && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-3xl font-bold mb-4">
                    How many pages do you need?
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Drag the slider or enter a number
                  </p>
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-muted-foreground">Pages:</span>
                      <span className="text-4xl font-bold text-primary">
                        {pageCount}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={pageCount}
                      onChange={(e) => setPageCount(Number(e.target.value))}
                      className="w-full h-3 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>1</span>
                      <span>20</span>
                    </div>
                  </div>
                  {pageCount > 5 && (
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-sm">
                      💡 Additional pages cost ₹500 each after the first 5
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Features */}
              {step === 3 && (
                <div className="animate-in fade-in duration-500">
                  <h2 className="text-3xl font-bold mb-4">
                    What features do you need?
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Select all that apply
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {features.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all hover:scale-105 ${
                          selectedFeatures.includes(feature.id)
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="font-semibold mb-1">
                              {feature.name}
                            </div>
                            <div className="text-sm text-primary font-medium">
                              +₹{feature.price.toLocaleString()}
                            </div>
                          </div>
                          {selectedFeatures.includes(feature.id) && (
                            <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-4 mt-8">
                {(step > 1 || showResults) && (
                  <button
                    onClick={handleBack}
                    className="px-6 py-3 rounded-xl border border-border hover:bg-secondary transition-colors"
                  >
                    <ArrowLeft className="inline-block mr-2 h-4 w-4" />
                    Back
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={step === 1 && !projectType}
                  className="flex-1 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {step === 3 ? 'See Results' : 'Next'}
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Results */
          <div className="animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Your Project Estimate</h2>
              <p className="text-xl text-muted-foreground">
                Based on your selections, here's what your project would cost
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-primary mb-2">
                  ₹{total.toLocaleString()}
                </div>
                <div className="text-muted-foreground">
                  ± ₹{variance.toLocaleString()} (depending on complexity)
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-lg mb-4">Breakdown:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                    <span>Base Project ({projectTypes.find(pt => pt.id === projectType)?.name})</span>
                    <span className="font-semibold">
                      ₹{projectTypes.find(pt => pt.id === projectType)?.basePrice.toLocaleString()}
                    </span>
                  </div>
                  {pageCount > 5 && (
                    <div className="flex justify-between p-3 rounded-lg bg-secondary/50">
                      <span>{pageCount - 5} Additional Pages</span>
                      <span className="font-semibold">
                        ₹{((pageCount - 5) * 500).toLocaleString()}
                      </span>
                    </div>
                  )}
                  {selectedFeatures.map((featureId) => {
                    const feature = features.find((f) => f.id === featureId);
                    return feature ? (
                      <div key={featureId} className="flex justify-between p-3 rounded-lg bg-secondary/50">
                        <span>{feature.name}</span>
                        <span className="font-semibold">
                          ₹{feature.price.toLocaleString()}
                        </span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="flex-1 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center font-semibold"
                >
                  Get Accurate Quote
                </Link>
                <button
                  onClick={() => {
                    setStep(1);
                    setShowResults(false);
                  }}
                  className="flex-1 px-6 py-3 rounded-xl border border-border hover:bg-secondary transition-colors font-semibold"
                >
                  Start Over
                </button>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>💡 This is an estimate. Final price may vary based on specific requirements.</p>
              <p className="mt-2">All packages include responsive design, basic SEO, and support.</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
