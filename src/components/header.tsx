
"use client";

import React from "react";
import Link from "next/link";
import { Menu, Settings, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/story#about", label: "About" },
  { href: "/story#philosophy", label: "Philosophy" },
  { href: "/story#ecosystem", label: "Ecosystem" },
  { href: "/story#recommendations", label: "For You"},
  { href: "/story#projects", label: "Projects" },
  { href: "/story#writing", label: "Writing" },
  { href: "/story#journey", label: "Journey" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-xl border-b" : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold font-headline text-primary">7K</span>
          <span className="text-xl font-bold font-headline">Ecosystem</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Button key={item.href} variant="link" asChild>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-3"
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>
           <Button variant="ghost" size="icon" asChild>
              <Link href="/settings">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-background p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center p-4 border-b justify-between">
                   <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                      <span className="text-lg font-bold font-headline text-primary">7K</span>
                      <span className="font-bold font-headline">Ecosystem</span>
                   </Link>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="text-lg font-medium text-foreground hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                   <Link
                      href="/settings"
                      onClick={closeMobileMenu}
                      className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary"
                    >
                      <Settings className="h-5 w-5" />
                      Settings
                    </Link>
                    <Link
                      href="/"
                      onClick={closeMobileMenu}
                      className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary"
                    >
                      <Home className="h-5 w-5" />
                      Home
                    </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
