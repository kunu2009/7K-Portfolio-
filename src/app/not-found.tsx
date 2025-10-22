import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Number with gradient */}
        <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          404
        </h1>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Fun Message */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Fun fact:</span> While you&apos;re here, 
            did you know the 7K Ecosystem has over 8 apps in development? 
            Explore them on the homepage!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <Link 
            href="/#projects"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Search className="mr-2 h-5 w-5" />
            Explore Projects
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Here are some helpful links:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/#about" 
              className="text-primary hover:text-accent transition-colors"
            >
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/#ecosystem" 
              className="text-primary hover:text-accent transition-colors"
            >
              7K Ecosystem
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/#projects" 
              className="text-primary hover:text-accent transition-colors"
            >
              Projects
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
