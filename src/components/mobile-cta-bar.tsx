'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';

export function MobileCTABar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const whatsappNumber = '918591247148';
  const phoneNumber = '+918591247148';
  const email = 'kunalvishwakarma2009@gmail.com';

  return (
    <>
      {/* Mobile Only - Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300">
        {isExpanded && (
          <div className="bg-background/95 backdrop-blur-sm border-t border-border p-4 space-y-2">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              onClick={() => setIsExpanded(false)}
            >
              <div className="p-2 rounded-full bg-primary/20">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Call Now</div>
                <div className="text-sm text-muted-foreground">
                  {phoneNumber}
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%20Kunal%2C%20I'm%20interested%20in%20your%20web%20development%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors"
              onClick={() => setIsExpanded(false)}
            >
              <div className="p-2 rounded-full bg-green-500/20">
                <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm text-muted-foreground">
                  Fastest response
                </div>
              </div>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
              onClick={() => setIsExpanded(false)}
            >
              <div className="p-2 rounded-full bg-blue-500/20">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted-foreground">{email}</div>
              </div>
            </a>

            <button
              onClick={() => setIsExpanded(false)}
              className="w-full p-3 rounded-lg border border-border hover:bg-secondary transition-colors font-semibold"
            >
              <X className="inline-block mr-2 h-4 w-4" />
              Close
            </button>
          </div>
        )}

        <div className="grid grid-cols-3 gap-2 p-3 bg-background/95 backdrop-blur-sm border-t border-border">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex flex-col items-center gap-1 p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs font-semibold">Contact</span>
          </button>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20Kunal%2C%20I'm%20interested%20in%20your%20web%20development%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 p-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="flex flex-col items-center gap-1 p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs font-semibold">Call</span>
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button - All Screens */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi%20Kunal%2C%20I'm%20interested%20in%20your%20web%20development%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-in zoom-in duration-300"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
