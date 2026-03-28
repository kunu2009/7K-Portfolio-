import Link from "next/link";
import Image from "next/image";
import { Home, Search, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
      </div>
      
      {/* Floating decorative images */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
        <Image src="/images/decorations/buff-cat.png" alt="" width={80} height={80} className="animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 hidden lg:block">
        <Image src="/images/decorations/duck-character.png" alt="" width={70} height={70} className="animate-bounce" style={{ animationDuration: '4s' }} />
      </div>
      <div className="absolute top-1/3 right-20 opacity-8 hidden xl:block">
        <Image src="/images/decorations/math-cat.jpeg" alt="" width={60} height={60} className="rounded-full" />
      </div>
      
      <div className="max-w-2xl w-full text-center space-y-6 relative z-10">
        {/* Stan Mascot */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Image
              src="/images/stan-mascot.png"
              alt="Stan AI Mascot"
              width={180}
              height={180}
              className="drop-shadow-2xl animate-bounce"
              style={{ animationDuration: '3s' }}
            />
            {/* Speech bubble */}
            <div className="absolute -right-4 top-0 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-lg border border-primary/20">
              <p className="text-sm font-medium text-foreground whitespace-nowrap">
                Oops! Lost? 🤔
              </p>
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-b border-r border-primary/20" />
            </div>
          </div>
        </div>

        {/* 404 Number with gradient */}
        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          404
        </h1>

        {/* Error Message */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto">
            This page wandered off into the digital void. But don&apos;t worry, Stan is here to help!
          </p>
        </div>

        {/* Fun Message with Stan */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-5 max-w-md mx-auto">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground text-left text-sm">
              <span className="font-semibold text-foreground">Stan says:</span> While you&apos;re here, 
              check out my dev journey or explore the 7K Ecosystem with 24+ amazing apps!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <Link 
            href="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <Link 
            href="/journey"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Search className="mr-2 h-4 w-4" />
            Dev Journey
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3">
            Quick links:
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link 
              href="/#about" 
              className="text-primary hover:text-accent transition-colors"
            >
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/apps" 
              className="text-primary hover:text-accent transition-colors"
            >
              Apps
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/creations" 
              className="text-primary hover:text-accent transition-colors"
            >
              Creations
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/#contact" 
              className="text-primary hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
