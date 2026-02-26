"use client";

/**
 * Features Initializer
 * Client-side component that initializes lightweight visitor memory features
 */

import { useEffect } from "react";
import {
  getVisitorProfile,
  updateVisitorProfile,
  getTimeGreeting,
} from "@/lib/visitor-memory";

export function FeaturesInitializer() {
  useEffect(() => {
    // Initialize visitor profile
    const profile = getVisitorProfile();
    
    // Update visit count
    updateVisitorProfile(p => ({ visitCount: p.visitCount + 1 }));

    // Log welcome message based on time and visit count
    const greeting = getTimeGreeting();

    if (profile.visitCount <= 1) {
      console.log(
        "%c🤖 Welcome to 7K Apps!",
        "font-size: 20px; color: #3b82f6; font-weight: bold;"
      );
    } else {
      console.log(
        `%c🤖 ${greeting}`,
        "font-size: 16px; color: #3b82f6; font-weight: bold;"
      );
    }

    // Console art
    console.log(`
%c
   ███████╗██╗  ██╗     █████╗ ██████╗ ██████╗ ███████╗
   ╚════██║██║ ██╔╝    ██╔══██╗██╔══██╗██╔══██╗██╔════╝
       ██╔╝█████╔╝     ███████║██████╔╝██████╔╝███████╗
      ██╔╝ ██╔═██╗     ██╔══██║██╔═══╝ ██╔═══╝ ╚════██║
      ██║  ██║  ██╗    ██║  ██║██║     ██║     ███████║
      ╚═╝  ╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝
    `, "color: #3b82f6");
  }, []);

  return null;
}

export default FeaturesInitializer;
