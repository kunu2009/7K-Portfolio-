# Collage Theme Style Guide

## Overview
A brutalist, graphic design-inspired layout emphasizing tight grids, uppercase typography, and high contrast.

## Colors
- **Background**: `#050505` (Deep Black)
- **Text (Light)**: `#f4f4f0` (Off-white)
- **Accent (Red)**: `#dc2626` (Tailwind red-600)
- **Accent (Light bg)**: `#e6e4d9` (Paper white)
- **Card Background**: `#111111` to `#151515`

## Typography
- **Headings**: `sans-serif`, `font-black`, `uppercase`, `tracking-tighter`. Use tight line-height (`leading-[0.85]`).
- **Body**: `sans-serif`, `font-medium`, `text-[#888]`.
- **Labels**: `text-[10px]`, `tracking-widest`, `uppercase`.

## UI Elements
- **Cards**: `rounded-2xl`, with thin borders (`border-[#1a1a1a]` or `#333`). Hover states highlight the border to red or lighten the background.
- **Grids**: Asymmetric layout using CSS Grid bounding boxes. Use explicit row/col spans to create a masonry-like graphic poster feel.
- **Buttons / Tags**: Pill or rounded-rect tags with thick borders.

## AI Usage
When generating new components for this theme, use the `components.tsx` exports directly (e.g., `CollageCard`, `CollageTag`). Keep styling consistent with the uppercase brutality and high-contact red/black accents.
