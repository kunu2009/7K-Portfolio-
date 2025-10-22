'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
          <div className="max-w-2xl w-full text-center space-y-8">
            <h1 className="font-headline text-6xl font-bold text-foreground">
              Something went wrong!
            </h1>
            <p className="text-lg text-muted-foreground">
              An unexpected error occurred. Please try again.
            </p>
            <Button onClick={() => reset()} size="lg">
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
