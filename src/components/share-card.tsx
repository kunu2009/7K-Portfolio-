"use client";

/**
 * Share Cards Component
 * Beautiful share buttons with dynamic OG preview
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Link,
  Check,
  Mail,
  MessageCircle,
  QrCode,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ShareCardProps {
  url: string;
  title: string;
  description?: string;
  image?: string;
  type?: "default" | "app" | "blog" | "service";
  tags?: string[];
  className?: string;
  variant?: "button" | "inline" | "floating";
}

const SHARE_PLATFORMS = [
  {
    name: "Twitter",
    icon: Twitter,
    color: "#1DA1F2",
    getUrl: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "#1877F2",
    getUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "#0A66C2",
    getUrl: (url: string, title: string, description?: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "#25D366",
    getUrl: (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`,
  },
  {
    name: "Email",
    icon: Mail,
    color: "#EA4335",
    getUrl: (url: string, title: string, description?: string) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description || ""}\n\n${url}`)}`,
  },
];

export function ShareCard({
  url,
  title,
  description,
  image,
  type = "default",
  tags = [],
  className,
  variant = "button",
}: ShareCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // Generate OG image URL
  const ogImageUrl = `/api/og?${new URLSearchParams({
    title,
    ...(description && { description }),
    type,
    ...(image && { image }),
    ...(tags.length > 0 && { tags: tags.join(",") }),
  }).toString()}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        // User cancelled or error
        console.log("Share cancelled");
      }
    } else {
      setIsOpen(true);
    }
  };

  const handlePlatformShare = (platform: typeof SHARE_PLATFORMS[0]) => {
    const shareUrl = platform.getUrl(url, title, description);
    window.open(shareUrl, "_blank", "width=600,height=400");
    setIsOpen(false);
  };

  // Generate QR code URL (using a free service)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;

  return (
    <div className={cn("relative", className)}>
      {/* Trigger Button */}
      {variant === "button" && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleNativeShare}
          className="gap-2"
        >
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      )}

      {variant === "floating" && (
        <Button
          size="icon"
          className="fixed bottom-20 right-4 z-40 rounded-full shadow-lg"
          onClick={handleNativeShare}
        >
          <Share2 className="w-4 h-4" />
        </Button>
      )}

      {variant === "inline" && (
        <div className="flex items-center gap-2">
          {SHARE_PLATFORMS.slice(0, 4).map((platform) => (
            <Button
              key={platform.name}
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => handlePlatformShare(platform)}
              title={`Share on ${platform.name}`}
            >
              <platform.icon className="w-4 h-4" />
            </Button>
          ))}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={handleCopyLink}
            title="Copy link"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Link className="w-4 h-4" />
            )}
          </Button>
        </div>
      )}

      {/* Share Modal */}
      <AnimatePresence>
        {isOpen && variant !== "inline" && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[400px] bg-background rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold">Share</h3>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Preview Card */}
              <div className="p-4 bg-muted/50 border-b">
                <div className="rounded-lg overflow-hidden bg-background shadow-sm">
                  <img
                    src={ogImageUrl}
                    alt="Share preview"
                    className="w-full aspect-[1200/630] object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Preview of how your share will look
                </p>
              </div>

              {/* Share Platforms */}
              <div className="p-4">
                <div className="grid grid-cols-5 gap-3 mb-4">
                  {SHARE_PLATFORMS.map((platform) => (
                    <button
                      key={platform.name}
                      onClick={() => handlePlatformShare(platform)}
                      className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: platform.color }}
                      >
                        <platform.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs">{platform.name}</span>
                    </button>
                  ))}
                </div>

                {/* Copy Link & QR */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 gap-2"
                    onClick={handleCopyLink}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Link className="w-4 h-4" />
                        Copy Link
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowQR(!showQR)}
                    title="Show QR Code"
                  >
                    <QrCode className="w-4 h-4" />
                  </Button>
                </div>

                {/* QR Code */}
                <AnimatePresence>
                  {showQR && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 flex flex-col items-center"
                    >
                      <img
                        src={qrCodeUrl}
                        alt="QR Code"
                        className="w-40 h-40 rounded-lg bg-white p-2"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Scan to open on another device
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * ShareButton - Simple share trigger
 */
export function ShareButton({ url, title, description, className }: ShareCardProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: description, url });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      // Fallback - copy to clipboard
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleShare}
      className={className}
      title="Share"
    >
      <Share2 className="w-4 h-4" />
    </Button>
  );
}

export default ShareCard;
