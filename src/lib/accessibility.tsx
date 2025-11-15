// Accessibility utilities and enhancements

/**
 * Skip to main content link for keyboard navigation
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}

/**
 * Screen reader only text
 */
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

/**
 * Accessible button with focus visible indicator
 */
export function FocusableButton({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Accessible link with focus visible indicator
 */
export function FocusableLink({
  children,
  className = '',
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * Announce dynamic content to screen readers
 */
export function LiveRegion({
  children,
  politeness = 'polite',
  atomic = true,
}: {
  children: React.ReactNode;
  politeness?: 'polite' | 'assertive' | 'off';
  atomic?: boolean;
}) {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic={atomic}
      className="sr-only"
    >
      {children}
    </div>
  );
}

/**
 * Accessible icon with label
 */
export function AccessibleIcon({
  icon: Icon,
  label,
  decorative = false,
  className = '',
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  decorative?: boolean;
  className?: string;
}) {
  return (
    <>
      <Icon className={className} aria-hidden={decorative ? 'true' : undefined} />
      {!decorative && <ScreenReaderOnly>{label}</ScreenReaderOnly>}
    </>
  );
}

/**
 * Keyboard navigation helper
 */
export function useKeyboardNavigation(
  ref: React.RefObject<HTMLElement>,
  onEscape?: () => void,
  onEnter?: () => void
) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && onEscape) {
      e.preventDefault();
      onEscape();
    }
    if (e.key === 'Enter' && onEnter) {
      e.preventDefault();
      onEnter();
    }
  };

  return { onKeyDown: handleKeyDown };
}

/**
 * Focus trap for modals and overlays
 */
export function useFocusTrap(containerRef: React.RefObject<HTMLElement>) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !containerRef.current) return;

    const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  return { onKeyDown: handleKeyDown };
}

/**
 * Check color contrast ratio
 */
export function getContrastRatio(color1: string, color2: string): number {
  // Simplified contrast ratio calculation
  // In production, use a library like color-contrast
  const getLuminance = (color: string) => {
    // This is a placeholder - implement proper luminance calculation
    return 0.5;
  };

  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * ARIA live region announcer hook
 */
export function useAnnouncer() {
  const announce = (message: string, politeness: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.getElementById('announcer');
    if (announcer) {
      announcer.textContent = message;
      announcer.setAttribute('aria-live', politeness);
    }
  };

  return { announce };
}

/**
 * Global announcer component (add to layout)
 */
export function GlobalAnnouncer() {
  return (
    <div
      id="announcer"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  );
}
