"use client";

/**
 * Live Preview Component
 * Embeds live app previews with loading states and fallbacks
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Maximize2, Minimize2, RefreshCw, X, Smartphone, Monitor, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getDeviceCapabilities } from "@/lib/performance";

interface LivePreviewProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  defaultDevice?: "mobile" | "tablet" | "desktop";
  showDeviceToggle?: boolean;
  height?: string | number;
}

type DeviceType = "mobile" | "tablet" | "desktop";

const DEVICE_SIZES: Record<DeviceType, { width: number; height: number }> = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 800 },
};

export function LivePreview({
  url,
  title,
  description,
  className,
  defaultDevice = "mobile",
  showDeviceToggle = true,
  height = 500,
}: LivePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [device, setDevice] = useState<DeviceType>(defaultDevice);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const caps = getDeviceCapabilities();

  // Lazy load iframe when in view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleRefresh = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      setHasError(false);
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const deviceSize = DEVICE_SIZES[device];

  // Don't render on low-end devices to save resources
  if (caps.isLowEnd) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "relative rounded-xl border bg-muted/50 overflow-hidden",
          className
        )}
        style={{ height }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <Monitor className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="font-semibold mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
          )}
          <Button asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Live Preview
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Normal View */}
      <div
        ref={containerRef}
        className={cn(
          "relative rounded-xl border bg-background overflow-hidden",
          isFullscreen && "hidden",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
          <div className="flex items-center gap-3">
            {/* Traffic lights */}
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm font-medium truncate max-w-[200px]">{title}</span>
          </div>

          <div className="flex items-center gap-1">
            {/* Device Toggle */}
            {showDeviceToggle && (
              <div className="flex border rounded-lg p-0.5 mr-2">
                <Button
                  variant={device === "mobile" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => setDevice("mobile")}
                  title="Mobile"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant={device === "tablet" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => setDevice("tablet")}
                  title="Tablet"
                >
                  <Tablet className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant={device === "desktop" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => setDevice("desktop")}
                  title="Desktop"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </Button>
              </div>
            )}

            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleRefresh} title="Refresh">
              <RefreshCw className="w-3.5 h-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleFullscreen} title="Fullscreen">
              <Maximize2 className="w-3.5 h-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" asChild title="Open in new tab">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Preview Area */}
        <div
          className="relative bg-muted/30 flex items-center justify-center overflow-hidden"
          style={{ height }}
        >
          {/* Loading State */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-background z-10"
              >
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-3" />
                <span className="text-sm text-muted-foreground">Loading preview...</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background z-10">
              <p className="text-muted-foreground mb-4">Failed to load preview</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleRefresh}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Retry
                </Button>
                <Button size="sm" asChild>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Directly
                  </a>
                </Button>
              </div>
            </div>
          )}

          {/* Device Frame */}
          <div
            className={cn(
              "relative bg-background rounded-lg shadow-2xl transition-all duration-300",
              device === "mobile" && "border-4 border-gray-800 rounded-3xl",
              device === "tablet" && "border-8 border-gray-700 rounded-2xl",
              device === "desktop" && "border border-gray-600 rounded-lg"
            )}
            style={{
              width: device === "desktop" ? "100%" : Math.min(deviceSize.width, 600),
              height: device === "desktop" ? "100%" : Math.min(deviceSize.height * 0.7, Number(height) - 20),
              maxHeight: "100%",
            }}
          >
            {/* Notch for mobile */}
            {device === "mobile" && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-xl z-10" />
            )}

            {/* iframe */}
            {isInView && (
              <iframe
                ref={iframeRef}
                src={url}
                title={title}
                className="w-full h-full bg-white"
                style={{ borderRadius: device === "mobile" ? "1.5rem" : device === "tablet" ? "0.5rem" : "0.25rem" }}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <div className="flex items-center gap-3">
                <span className="font-medium">{title}</span>
                <span className="text-sm text-muted-foreground truncate">{url}</span>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" onClick={handleRefresh}>
                  <RefreshCw className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" onClick={handleFullscreen}>
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleFullscreen}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Full iframe */}
            <iframe
              src={url}
              title={title}
              className="w-full h-[calc(100vh-49px)]"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * LivePreviewCard - Card with preview for app showcases
 */
interface LivePreviewCardProps {
  url: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  className?: string;
}

export function LivePreviewCard({
  url,
  title,
  description,
  image,
  tags,
  className,
}: LivePreviewCardProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <motion.div
      className={cn(
        "rounded-xl border bg-card overflow-hidden",
        className
      )}
      whileHover={{ y: -5 }}
    >
      {/* Image/Preview Toggle */}
      <div className="relative aspect-video bg-muted">
        {showPreview ? (
          <LivePreview
            url={url}
            title={title}
            height="100%"
            showDeviceToggle={false}
            defaultDevice="mobile"
          />
        ) : (
          <>
            {image && (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            )}
            <Button
              className="absolute bottom-4 right-4"
              size="sm"
              onClick={() => setShowPreview(true)}
            >
              <Monitor className="w-4 h-4 mr-2" />
              Live Preview
            </Button>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-muted rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default LivePreview;
