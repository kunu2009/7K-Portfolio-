# Punk Zine Style Guide

## Overview
A loud, chaotic, physically tangible layout mimicking punk concert posters, zines, and DIY cut-and-paste design.

## Colors
- **Background**: `#E5E5E5` (Newsprint grey)
- **Primary Text/Borders**: `black`
- **Neon Accents**:
  - Yellow/Green: `#D5FF00`
  - Magenta: `#FF00FF`

## Typography
- **Headings**: Massively oversized, heavily weighted, uppercase overlapping typography.
- **Body**: Bold, high contrast `sans-serif`. 
- **Monospaced**: For mechanical details like badges or system tags.

## UI Elements
- **Borders & Shadows**: `border-4 border-black`, with solid hard-edged shadows (`shadow-[8px_8px_0_0_#000]`).
- **Rotation**: Apply slight rotations to components (`rotate-2`, `-rotate-1`, `-rotate-3`) to emulate loose paper or hand-laid stickers. Keep hover interactions snapping to `rotate-0`.
- **Textures**: Emulated SVG noise filter overlay applied to the background.
- **Accents**: Masking tape (`backdrop-blur bg-black/20`) elements pinned to corners.

## AI Usage
Use `ZineCard`, `ZineManifesto`, and `ZineListBlock` from `components.tsx`. Overuse thick black borders and sharp neon shadows.
