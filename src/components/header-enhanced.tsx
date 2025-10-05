"use client";

import React from "react";
import Link from "next/link";
import { Menu, Mail, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="text-2xl md:text-3xl font-bold font-headline bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent transition-transform group-hover:scale-105">
              7K
            </span>
          </div>
          <span className="hidden sm:inline text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            Ecosystem
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAVIGATION.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              asChild
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            asChild
            className="rounded-full"
          >
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Resume
            </a>
          </Button>
          <Button size="sm" asChild className="rounded-full">
            <Link href="/#contact">
              <Mail className="h-4 w-4 mr-2" />
              Hire Me
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={closeMobileMenu}
                  >
                    <span className="text-2xl font-bold font-headline bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                      7K
                    </span>
                    <span className="text-lg font-medium">Ecosystem</span>
                  </Link>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-2 py-6">
                  {NAVIGATION.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 px-3 py-3 text-base font-medium rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="mt-auto pt-6 border-t space-y-3">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="w-full rounded-full"
                  >
                    <a href="/resume.pdf" download onClick={closeMobileMenu}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="w-full rounded-full"
                  >
                    <Link href="/#contact" onClick={closeMobileMenu}>
                      <Mail className="h-4 w-4 mr-2" />
                      Get In Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
