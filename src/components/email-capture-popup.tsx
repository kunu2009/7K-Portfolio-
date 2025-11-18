"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function EmailCapturePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("emailPopupShown");
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !isSubmitted) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("emailPopupShown", "true");
      }
    };

    // Show after 30 seconds if not already shown
    const timer = setTimeout(() => {
      if (!hasShown && !isSubmitted) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("emailPopupShown", "true");
      }
    }, 30000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown, isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store lead data in localStorage (you can connect to email service later)
    const lead = {
      name,
      email,
      timestamp: new Date().toISOString(),
      source: "exit-intent-popup"
    };
    
    const existingLeads = JSON.parse(localStorage.getItem("emailLeads") || "[]");
    existingLeads.push(lead);
    localStorage.setItem("emailLeads", JSON.stringify(existingLeads));

    // TODO: Connect to your email service (ConvertKit, Mailchimp, etc.)
    // Example:
    // await fetch('/api/subscribe', {
    //   method: 'POST',
    //   body: JSON.stringify({ name, email })
    // });

    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <Card className="relative w-full max-w-md bg-background border-2 border-primary/20 shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>

              <CardContent className="pt-8 pb-8 px-6">
                {!isSubmitted ? (
                  <>
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Download className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Heading */}
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Sparkles className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary uppercase tracking-wide">
                          Free Resource
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Wait! Before You Go...
                      </h2>
                      <p className="text-muted-foreground">
                        Get your <span className="text-primary font-semibold">FREE Website Planning Checklist</span> to ensure your project succeeds from day one.
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6 space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span>10-point checklist to plan your website</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span>Avoid costly mistakes before development</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span>Budget estimation guide included</span>
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="h-11"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-11"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full h-11 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-base font-semibold"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Get Free Checklist
                      </Button>
                    </form>

                    {/* Privacy note */}
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      No spam, ever. Unsubscribe anytime. 🔒
                    </p>
                  </>
                ) : (
                  <>
                    {/* Success state */}
                    <div className="text-center py-4">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                          <Mail className="h-8 w-8 text-green-500" />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-3">
                        Check Your Email! 📧
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        We've sent the <span className="font-semibold">Website Planning Checklist</span> to <span className="text-primary">{email}</span>
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4 mb-6 text-sm text-left">
                        <p className="font-semibold mb-2">What's next?</p>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>✓ Check your inbox (and spam folder)</li>
                          <li>✓ Download the checklist</li>
                          <li>✓ Ready to start? Message us on WhatsApp!</li>
                        </ul>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          onClick={handleClose}
                          variant="outline"
                          className="flex-1"
                        >
                          Close
                        </Button>
                        <a 
                          href="https://wa.me/918591247148?text=Hi%20Kunal!%20I%20just%20downloaded%20your%20Website%20Planning%20Checklist.%20I'd%20like%20to%20discuss%20my%20project!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button className="w-full bg-gradient-to-r from-primary to-accent">
                            Message on WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
