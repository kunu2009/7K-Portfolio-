# Manga Theme Style Guide

## Overview
A comic-book and Japanese manga-inspired layout. Highly active, heavily stylized framing emphasizing action, motion, and intensity.

## Colors
- **Background**: `#FFFFFF` (White page)
- **Lines / Fills**: `black` (Ink)
- **Action Highlight**: `#DC2626` (Red-600, dramatic accent)

## Typography
- **Headings**: Exceptionally dense, italicized, uppercase sans-serifs (`font-black`, `uppercase`, `italic`, `tracking-tighter`). Exclamation marks highly encouraged!
- **Body**: Bold sans-serif text to mimic dialogue or captions.

## UI Elements
- **Panels**: The entire structure is divided into tight, thick-bordered rectangles (`border-[6px] border-black`).
- **Shadows**: Hard offsets representing panel dropshadows (`shadow-[12px_12px_0_0_#000]`).
- **Decorations**:
  - Halftone patterns applied dynamically to backgrounds (`radial-gradient(black 2px, transparent 2px)`).
  - Skewed dialogue boxes (`skew-x-[-15deg]`).
  - Speed lines applied on hover (`repeating-linear-gradient`).

## AI Usage
Import `MangaCover`, `MangaPanelList`, and `MangaActionCard` from `components.tsx`. Avoid soft shadows or round corners entirely—everything must be harsh, geometric ink lines.
