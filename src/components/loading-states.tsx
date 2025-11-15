export function SkeletonLoader({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-secondary/50 rounded-lg ${className}`}
      aria-label="Loading..."
      role="status"
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
      <SkeletonLoader className="h-48 rounded-xl" />
      <SkeletonLoader className="h-6 w-3/4" />
      <SkeletonLoader className="h-4 w-full" />
      <SkeletonLoader className="h-4 w-5/6" />
      <div className="flex gap-2">
        <SkeletonLoader className="h-8 w-20" />
        <SkeletonLoader className="h-8 w-24" />
      </div>
    </div>
  );
}

export function BlogPostSkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonLoader className="h-8 w-1/4" />
      <SkeletonLoader className="h-12 w-3/4" />
      <div className="flex gap-4">
        <SkeletonLoader className="h-4 w-24" />
        <SkeletonLoader className="h-4 w-32" />
      </div>
      <SkeletonLoader className="h-64" />
      <SkeletonLoader className="h-4 w-full" />
      <SkeletonLoader className="h-4 w-full" />
      <SkeletonLoader className="h-4 w-5/6" />
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
      <div className="flex items-center gap-3">
        <SkeletonLoader className="h-12 w-12 rounded-xl" />
        <SkeletonLoader className="h-6 w-32" />
      </div>
      <SkeletonLoader className="h-4 w-full" />
      <SkeletonLoader className="h-4 w-4/5" />
      <div className="space-y-2">
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-full" />
      </div>
      <SkeletonLoader className="h-10 w-full rounded-xl" />
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-3">
      <div className="flex items-center gap-3">
        <SkeletonLoader className="h-12 w-12 rounded-full" />
        <div className="flex-1 space-y-2">
          <SkeletonLoader className="h-5 w-3/4" />
          <SkeletonLoader className="h-3 w-1/2" />
        </div>
      </div>
      <SkeletonLoader className="h-4 w-full" />
      <SkeletonLoader className="h-4 w-5/6" />
      <div className="flex gap-2">
        <SkeletonLoader className="h-6 w-16 rounded-full" />
        <SkeletonLoader className="h-6 w-20 rounded-full" />
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SkeletonLoader className="h-4 w-24" />
        <SkeletonLoader className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <SkeletonLoader className="h-4 w-24" />
        <SkeletonLoader className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <SkeletonLoader className="h-4 w-24" />
        <SkeletonLoader className="h-32 w-full rounded-lg" />
      </div>
      <SkeletonLoader className="h-12 w-full rounded-xl" />
    </div>
  );
}

export function LoadingSpinner({
  size = 'md',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div
      className={`animate-spin rounded-full border-primary border-t-transparent ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" className="mx-auto" />
        <p className="text-lg text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

export function ButtonLoader() {
  return (
    <div className="flex items-center gap-2">
      <LoadingSpinner size="sm" />
      <span>Loading...</span>
    </div>
  );
}
