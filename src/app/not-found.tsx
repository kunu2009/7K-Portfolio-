import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Number with gradient */}
        <h1 className="font-headline text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
          404
        </h1>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Fun Message */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Fun fact:</span> While you're here, 
            did you know the 7K Ecosystem has over 8 apps in development? 
            Explore them on the homepage!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8"
          >
            <Link href="/#projects">
              <Search className="mr-2 h-5 w-5" />
              Explore Projects
            </Link>
          </Button>
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
