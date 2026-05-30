# Ethereal Theme Style Guide

## Overview
A deep, atmospheric, space-like template. Relies on abstract background circles forming deep horizon lines, heavy glassmorphism, and elegant serif typography.

## Colors
- **Background Layers**: `#0A0D14` transitioning to `#0F1622`, `#151E2E`, `#1B273A`.
- **Text (Primary)**: `#FFFFFF`
- **Text (Muted/Secondary)**: `#E0E6ED`, `#8E9DBE`

## Typography
- **Primary Typeface**: `serif`
- **Headings**: Thin/Light weights (`font-light`, `font-normal`), elegantly tracked out (`tracking-wide`).
- **Micro-copy / Accents**: Technical uppercase tracking (`text-xs uppercase tracking-[0.4em]`).

## UI Elements
- **Glass Cards**: Extremely subtle top and left inset borders mimicking natural lighting (`border-t border-l border-white/10`).
- **Shadows**: Deep, soft ambient shadows mimicking moonlight bouncing (`shadow-[20px_20px_50px_rgba(0,0,0,0.4)]`).
- **Glows**: Components that signify action glow on hover via `drop-shadow` on text/icons (`group-hover:drop-shadow-[0_0_10px_white]`).

## AI Usage
Use `EtherealCard`, `EtherealHero`, and `EtherealTag` from `components.tsx`. Avoid bold colors entirely; rely purely on light-blues, greys, and deep navy spacing.
