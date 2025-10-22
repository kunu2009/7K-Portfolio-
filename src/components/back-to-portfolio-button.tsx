"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

interface BackToPortfolioButtonProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  variant?: "default" | "ghost" | "outline";
  label?: string;
}

export function BackToPortfolioButton({
  position = "top-left",
  variant = "outline",
  label = "Back to Portfolio"
}: BackToPortfolioButtonProps) {
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  return (
    <Link href="/#showcase" className={`fixed ${positionClasses[position]} z-40`}>
      <Button variant={variant} className="gap-2 bg-background/95 backdrop-blur-sm shadow-lg">
        <ArrowLeft className="h-4 w-4" />
        {label}
      </Button>
    </Link>
  );
}
