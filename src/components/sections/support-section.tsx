'use client';

import { useState } from 'react';
import { Heart, Copy, Check, QrCode, Smartphone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

export function SupportSection() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const upiId = '8591247148@fam';
  const yourName = 'Kunal Paresh Chheda';
  
  // UPI Deep Link - automatically opens UPI apps
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(yourName)}&cu=INR`;

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      toast({
        title: 'UPI ID Copied!',
        description: 'You can now paste it in your payment app',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: 'Failed to copy',
        description: 'Please copy manually',
        variant: 'destructive',
      });
    }
  };

  const handleUpiPayment = () => {
    window.location.href = upiLink;
    toast({
      title: 'Opening UPI App...',
      description: 'Please complete the payment in your UPI app',
    });
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Support My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Buy Me a Coffee ☕
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            If you appreciate my work and would like to support my journey, 
            you can send a donation via UPI. Every contribution helps me create more!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* QR Code Card */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <QrCode className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Scan QR Code</h3>
            </div>
            
            <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-4 shadow-inner border border-border/30">
              {/* QR Code Placeholder - You need to add your actual QR code */}
              <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <QrCode className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Save your QR code as:
                  </p>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    public/images/payment-qr.png
                  </code>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center mb-4">
              Open any UPI app and scan this QR code
            </p>

            {/* Quick Pay Button */}
            <Button 
              onClick={handleUpiPayment}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              size="lg"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Pay via UPI App
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* UPI ID Card */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Or Use UPI ID</h3>
              
              <div className="bg-background/80 border border-border rounded-lg p-4 mb-6">
                <p className="text-xs text-muted-foreground mb-2">UPI ID</p>
                <div className="flex items-center justify-between gap-4">
                  <code className="text-lg font-mono font-semibold text-primary">
                    {upiId}
                  </code>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyUpiId}
                    className="shrink-0"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Direct Pay Button */}
              <Button 
                onClick={handleUpiPayment}
                className="w-full mb-6 bg-gradient-to-r from-green-600 to-green-500 hover:opacity-90 transition-opacity text-white"
                size="lg"
              >
                <Smartphone className="w-4 h-4 mr-2" />
                Open UPI App & Pay
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">1.</span>
                  <span>Click the button above to open your UPI app directly</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">2.</span>
                  <span>Or manually open Google Pay, PhonePe, Paytm, etc.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">3.</span>
                  <span>Enter UPI ID: <code className="text-primary">{upiId}</code></span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">4.</span>
                  <span>Enter your desired amount and complete the payment</span>
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm">
              <p className="flex items-center gap-2 text-primary font-medium mb-2">
                <Heart className="w-4 h-4" />
                Thank You! 🙏
              </p>
              <p className="text-muted-foreground">
                Your support means the world to me and motivates me to keep building 
                amazing projects and sharing knowledge with the community.
              </p>
            </div>
          </div>
        </div>

        {/* Popular UPI Apps */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Compatible with all UPI apps
          </p>
          <div className="flex flex-wrap justify-center gap-4 opacity-50">
            <span className="text-xs px-3 py-1 rounded-full bg-card border border-border">Google Pay</span>
            <span className="text-xs px-3 py-1 rounded-full bg-card border border-border">PhonePe</span>
            <span className="text-xs px-3 py-1 rounded-full bg-card border border-border">Paytm</span>
            <span className="text-xs px-3 py-1 rounded-full bg-card border border-border">BHIM</span>
            <span className="text-xs px-3 py-1 rounded-full bg-card border border-border">Amazon Pay</span>
          </div>
        </div>
      </div>
    </section>
  );
}
