'use client';

import { useState } from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';

export default function SaasPreview1() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ⚡ TaskFlow
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 transition-all">
            Start Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300">
            🎉 New: AI-Powered Task Assistant
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Manage your team's
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              work effortlessly
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            TaskFlow helps teams collaborate, organize projects, and deliver results faster. Join thousands of teams already using TaskFlow.
          </p>

          {/* CTA Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-slate-800 text-white px-6 py-4 rounded-lg border border-slate-700 focus:border-blue-500 outline-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 transition-all flex items-center gap-2"
            >
              Start Free <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {submitted && (
            <p className="text-green-400 text-sm mb-8">✓ Check your email for setup instructions!</p>
          )}

          <p className="text-sm text-slate-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>

      {/* Social Proof */}
      <div className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-700">
        <p className="text-center text-slate-400 mb-8">Trusted by teams at:</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {['TechCorp', 'StartupX', 'AgencyHub', 'CloudPro', 'DevTeam'].map((company, idx) => (
            <div key={idx} className="text-slate-400 font-semibold text-sm opacity-60">
              {company}
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Everything you need to manage projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '📋',
              title: 'Task Management',
              desc: 'Organize tasks with boards, lists, and timelines. Drag-and-drop interface for easy workflow.'
            },
            {
              icon: '👥',
              title: 'Team Collaboration',
              desc: 'Real-time comments, mentions, and file sharing. Keep everyone on the same page.'
            },
            {
              icon: '📊',
              title: 'Analytics & Reports',
              desc: 'Track progress with visual reports. Get insights on team productivity and project health.'
            },
            {
              icon: '🔔',
              title: 'Smart Notifications',
              desc: 'Never miss important updates. Customizable alerts for tasks, deadlines, and mentions.'
            },
            {
              icon: '🔗',
              title: 'Integrations',
              desc: 'Connect with 500+ apps. Slack, GitHub, Jira, Google Workspace, and more.'
            },
            {
              icon: '🔒',
              title: 'Enterprise Security',
              desc: 'SOC 2 compliant. Encryption, SSO, audit logs, and advanced permissions.'
            }
          ].map((feature, idx) => (
            <div key={idx} className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-700">
        <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-slate-400 mb-16">Choose the perfect plan for your team</p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Starter',
              price: '₹0',
              billing: 'Forever free',
              users: '1-3 users',
              features: [
                '5 projects',
                'Basic task management',
                'File uploads (100MB)',
                'Email support'
              ]
            },
            {
              name: 'Professional',
              price: '₹999',
              billing: '/month per user',
              users: '4-50 users',
              features: [
                'Unlimited projects',
                'Advanced views',
                'File uploads (10GB)',
                'Priority support',
                'Custom workflows',
                'API access'
              ],
              popular: true
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              billing: 'Contact us',
              users: 'Unlimited users',
              features: [
                'Everything in Pro',
                'SSO & SAML',
                'Audit logs',
                'Dedicated support',
                'Custom integrations',
                'SLA guarantee'
              ]
            }
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg border transition-all ${
                plan.popular
                  ? 'border-blue-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10 ring-2 ring-blue-500/50 scale-105'
                  : 'border-slate-700 bg-slate-800/50'
              }`}
            >
              <div className="p-8">
                {plan.popular && (
                  <div className="inline-block mb-4 px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-1">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.billing}</p>

                <button
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="max-w-2xl mx-auto px-4 py-24 border-t border-slate-700">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            { q: 'Can I upgrade or downgrade anytime?', a: 'Yes! You can change your plan at any time. Changes take effect at the next billing cycle.' },
            { q: 'Is there a free trial?', a: 'Yes! All plans include a 14-day free trial. No credit card required.' },
            { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, UPI, and bank transfers.' },
            { q: 'Can I export my data?', a: 'Absolutely! You can export all your data anytime in CSV or JSON format.' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h3 className="font-bold mb-2 text-blue-400">{item.q}</h3>
              <p className="text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your workflow?</h2>
        <p className="text-blue-100 mb-8">Join thousands of teams already using TaskFlow</p>
        <a
          href="https://wa.me/918591247148?text=Hi%20Kunal%2C%20I'm%20interested%20in%20the%20SaaS%20landing%20page%20template"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
        >
          💬 Get This Template
        </a>
      </div>
    </div>
  );
}
