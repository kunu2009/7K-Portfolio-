'use client';

import { useState, useEffect } from 'react';
import { Heart, Copy, Check, QrCode, Smartphone, ExternalLink, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { portfolioSections } from '@/lib/sections-data';
import { MOCK_CONTRIBUTORS, type Contributor } from '@/lib/contributors-data';

export function SupportSection() {
  const { support } = portfolioSections;
  
  // Don't render if disabled
  if (!support.enabled) return null;
  
  const [copied, setCopied] = useState(false);
  const [amount, setAmount] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [contributors, setContributors] = useState<Contributor[]>(MOCK_CONTRIBUTORS);
  const { toast } = useToast();
  
  const upiId = '8591247148@fam';
  const yourName = 'Kunal Paresh Chheda';

  // Load contributors (in production, this will fetch from database)
  useEffect(() => {
    // TODO: Replace with actual database call when ready
    // getContributors().then(setContributors);
    setContributors(MOCK_CONTRIBUTORS);
  }, []);
  
  // Generate QR code URL dynamically
  useEffect(() => {
    const amt = amount || '0';
    // Using UPI deep link format that generates QR code
    const upiString = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(yourName)}&am=${amt}&cu=INR`;
    
    // Generate QR code using API (free service) with better character encoding
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&charset-source=UTF-8&charset-target=UTF-8&data=${encodeURIComponent(upiString)}`;
    setQrCodeUrl(qrUrl);
  }, [amount]);

  // UPI Deep Link - automatically opens UPI apps
  const getUpiLink = (amt?: string) => {
    const finalAmount = amt || amount || '';
    return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(yourName)}${finalAmount ? `&am=${finalAmount}` : ''}&cu=INR`;
  };

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
    const link = getUpiLink();
    window.location.href = link;
    toast({
      title: 'Opening UPI App...',
      description: amount ? (
        <>Amount: <span className="font-mono">₹{amount}</span></>
      ) : (
        'Please enter amount in your UPI app'
      ),
    });
  };

  const quickAmount = (amt: number) => {
    const currentAmount = amount ? parseInt(amount) : 0;
    const newAmount = currentAmount + amt;
    setAmount(newAmount.toString());
  };

  const resetAmount = () => {
    setAmount('');
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">{support.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {support.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {support.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-md md:max-w-4xl mx-auto">
          {/* QR Code Card */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto md:mx-0 w-full">
            <div className="flex items-center gap-2 mb-6">
              <QrCode className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Scan QR Code</h3>
            </div>
            
            {/* Amount Input */}
            <div className="mb-4">
              <label className="text-sm text-muted-foreground mb-2 block">
                Enter Amount (Click buttons to add up)
              </label>
              <div className="flex gap-2 mb-2">
                <Input
                  type="number"
                  placeholder="Enter amount (₹)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 font-mono"
                />
                <Button
                  size="sm"
                  variant="outline"
                  onClick={resetAmount}
                  className="text-xs"
                  disabled={!amount}
                >
                  Reset
                </Button>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => quickAmount(50)}
                  className="text-xs font-mono"
                >
                  +₹50
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => quickAmount(100)}
                  className="text-xs font-mono"
                >
                  +₹100
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => quickAmount(500)}
                  className="text-xs font-mono"
                >
                  +₹500
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => quickAmount(1000)}
                  className="text-xs font-mono"
                >
                  +₹1000
                </Button>
              </div>
            </div>
            
            {/* Dynamic QR Code */}
            <div className="relative aspect-square bg-white rounded-xl p-4 mb-4 shadow-inner border border-border/30">
              {qrCodeUrl ? (
                <img 
                  src={qrCodeUrl} 
                  alt="UPI QR Code" 
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Enter amount to generate QR code
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground text-center mb-4">
              {amount ? (
                <>
                  Scan to pay <span className="font-semibold font-mono">₹{amount}</span>
                </>
              ) : (
                'Open any UPI app and scan this QR code'
              )}
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

        {/* Contributors Section */}
        {contributors.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary mb-4">
                <Trophy className="w-4 h-4" />
                <span className="text-sm font-medium">Amazing Supporters</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Thank You to Our Contributors! 🙏
              </h3>
              <p className="text-muted-foreground">
                These wonderful people have supported the journey
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contributors.map((contributor, index) => (
                <div 
                  key={contributor.id || index}
                  className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                      {contributor.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{contributor.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {new Date(contributor.date).toLocaleDateString('en-IN', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    <span className="text-2xl font-bold text-primary font-mono">
                      ₹{contributor.amount}
                    </span>
                  </div>
                  {contributor.message && (
                    <p className="text-sm text-muted-foreground italic">
                      &quot;{contributor.message}&quot;
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                <span>
                  <strong className="text-primary">{contributors.length}</strong> supporter{contributors.length !== 1 ? 's' : ''} • 
                  <strong className="text-primary ml-1 font-mono">
                    ₹{contributors.reduce((sum, c) => sum + c.amount, 0)}
                  </strong> raised
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
