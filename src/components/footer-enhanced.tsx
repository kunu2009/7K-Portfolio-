"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG, NAVIGATION, SOCIAL_LINKS } from "@/lib/constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-3xl font-bold font-headline bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                7K
              </span>
              <span className="text-lg font-medium">Ecosystem</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building the future, one app at a time. A collection of interconnected tools for productivity, learning, and growth.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {link.name === "GitHub" && <Github className="h-5 w-5" />}
                    {link.name === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                    {link.name === "Instagram" && <Instagram className="h-5 w-5" />}
                    {link.name === "Email" && <Mail className="h-5 w-5" />}
                    {link.name === "Phone" && <Phone className="h-5 w-5" />}
                    {link.name === "WhatsApp" && <MessageCircle className="h-5 w-5" />}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Projects</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="https://7-klife-newsss-i4g90c00y-kunu2009s-projects.vercel.app/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                7K Life App
              </Link>
              <Link
                href="https://7-klawprep-i1rd7wyj2-kunu2009s-projects.vercel.app/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                7K LawPrep
              </Link>
              <Link
                href="https://7-k-polyglot.vercel.app/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                7K Polyglot
              </Link>
              <Link
                href="https://7-k-itihaas.vercel.app/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                7K Itihaas
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get notified about new projects and updates.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-background"
              />
              <Button type="submit" className="w-full rounded-full">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Personal Touch Section (Carnegie: Show genuine appreciation) */}
        <div className="mt-10 pt-6 border-t">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <p className="text-base font-medium text-foreground">
              Built with <Heart className="inline h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> by {SITE_CONFIG.author.name}
            </p>
            <p className="text-sm text-muted-foreground italic">
              A 12th-grade student who loves code, chess, and building things that help people.
            </p>
            <p className="text-sm font-medium text-primary">
              Thanks for visiting. Really. 🙏
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
