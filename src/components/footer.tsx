import { Button } from "@/components/ui/button";
import { Github, Send, Youtube, BookText } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://telegram.org",
    icon: Send,
    label: "Telegram",
  },
  {
    href: "https://youtube.com",
    icon: Youtube,
    label: "YouTube",
  },
  {
    href: "#",
    icon: BookText,
    label: "Blog",
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 7K Ecosystem. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button key={link.label} variant="ghost" size="icon" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
