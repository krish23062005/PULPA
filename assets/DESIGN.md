---
name: PULPA High-Energy Neo-Brutalist System
colors:
  surface: '#fdf7ff'
  surface-dim: '#dfd6f1'
  surface-bright: '#fdf7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f1ff'
  surface-container: '#f3eaff'
  surface-container-high: '#eee4ff'
  surface-container-highest: '#e8def9'
  on-surface: '#1e192c'
  on-surface-variant: '#5a3f48'
  inverse-surface: '#332d42'
  inverse-on-surface: '#f5eeff'
  outline: '#8e6f78'
  outline-variant: '#e2bdc7'
  surface-tint: '#b90066'
  primary: '#b40063'
  on-primary: '#ffffff'
  primary-container: '#e1037d'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb0c9'
  secondary: '#695f00'
  on-secondary: '#ffffff'
  secondary-container: '#f6e200'
  on-secondary-container: '#6d6400'
  tertiary: '#1947e9'
  on-tertiary: '#ffffff'
  tertiary-container: '#4165ff'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e3'
  primary-fixed-dim: '#ffb0c9'
  on-primary-fixed: '#3e001e'
  on-primary-fixed-variant: '#8e004c'
  secondary-fixed: '#fae500'
  secondary-fixed-dim: '#dbc900'
  on-secondary-fixed: '#1f1c00'
  on-secondary-fixed-variant: '#4f4800'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b9c3ff'
  on-tertiary-fixed: '#001257'
  on-tertiary-fixed-variant: '#0033c1'
  background: '#fdf7ff'
  on-background: '#1e192c'
  surface-variant: '#e8def9'
typography:
  display-lg:
    fontFamily: Anton
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Anton
    fontSize: 42px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
  accent-script:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 100%
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  grid_columns: '12'
  gutter: 24px
  margin_desktop: 48px
  margin_mobile: 20px
  stack_sm: 8px
  stack_md: 16px
  stack_lg: 32px
---

## Brand & Style

The design system is built on a high-energy, **Neo-Brutalist** foundation designed to disrupt the often-sterile cold-pressed juice market. It prioritizes raw impact, tactile interaction, and a "fresh-squeezed" digital energy.

The aesthetic utilizes aggressive high-contrast elements, thick "ink-trap" borders, and a vibrant, clash-tolerant color palette. It evokes an emotional response of vitality, urgency, and playfulness. The interface should feel "thick" and physical, moving away from delicate minimalism toward a bold, structured maximalism that mimics high-end street-culture stickers and zines.

## Colors

This design system utilizes a "Vibrant Chaos" color logic. The **Main Background** is never static; it is a dynamic gradient of Hot Pink (#FF2E93) layered with large, low-opacity blurred orbs of Purple, Orange, and Yellow to create a sense of liquid movement.

**Borders and Primary Text** must always use the Dark Navy (#161124) for maximum legibility and "ink-heavy" impact. **Accent colors** (Yellow, Royal Blue, Mint) are used interchangeably for functional elements like buttons and tags to create a rhythmic, non-repetitive UI. **Card Backgrounds** use desaturated pastels to ensure that the heavy black text remains the focal point without competing with the background orbs.

## Typography

Typography is the primary structural element of the design system. 

- **Display Text:** Use **Anton** for all major headlines. It must be tightly kerned (negative letter spacing) to create a "block" of text effect. Use all-caps for maximum impact.
- **Body Text:** **Hanken Grotesk** provides a clean, modern contrast to the heavy headers, ensuring nutritional information and product descriptions remain legible.
- **Accent/Emphasis:** Use **Bricolage Grotesque** (or a similar characterful font) for handwritten-style callouts, crossed-out prices, or "stamped" annotations.
- **Technical Info:** **Space Mono** is used for small labels, prices, and utility links to lean into the Neo-Brutalist technical aesthetic.

## Layout & Spacing

The layout follows a **Strict Grid / Loose Content** philosophy. While elements are aligned to a 12-column fluid grid, individual components (like stickers or accent text) should feel "tossed" onto the page, often breaking the grid or overlapping borders.

- **Desktop:** 12 columns with 24px gutters. Use wide margins (48px) to let the background gradient breathe.
- **Mobile:** 4 columns with 20px margins. 
- **Stacking:** Elements are tightly packed to maintain energy. Vertical rhythm should use 8px increments, but components often utilize "Hard Offsets"—where an element is pushed 4px or 8px off its shadow axis.

## Elevation & Depth

This design system rejects ambient, soft shadows in favor of **Hard Drop Shadows**. 

1.  **Shadow Character:** Shadows are 100% opaque or high-contrast Dark Navy (#161124).
2.  **Offset:** Use a 4px or 8px horizontal and vertical offset (no blur) to create a "sticker" or "cut-out" effect.
3.  **Interaction:** On hover, buttons and cards should "press down"—translating +2px or +4px toward the shadow while the shadow shrinks, simulating a physical click.
4.  **Layers:** Use 2px borders for smaller elements (chips, inputs) and 4px borders for major containers (cards, hero sections).

## Shapes

The shape language is a mix of **Hard Geometry** and **Organic Pills**.

- **Containers & Cards:** Use `rounded-lg` (16px) or `rounded-xl` (24px) corners to suggest a premium feel while maintaining the structural integrity of the thick borders.
- **Interactive Elements:** Buttons, navigation links, and tags are **fully pill-shaped**. This contrast between rectangular cards and pill-shaped actions is a signature of this design system.
- **Graphics:** Circular "sticker" graphics should be used for badges (e.g., "100% Organic"). These should occasionally feature "scalloped" or "zigzag" edges to mimic physical juice bottle seals.

## Components

- **Pill Buttons:** High-contrast background (Yellow or Mint), 2px Dark Navy border, and a 4px hard shadow. Text is all-caps Space Mono.
- **Product Cards:** Pastel background, 4px Dark Navy border. Images should be high-resolution cutouts (no background) placed on top of the pastel surface.
- **Marquee Banners:** Continuous scrolling text banners using Anton. Use a Solid Dark Navy background with Vibrant Yellow text to separate content sections.
- **Input Fields:** Thick 2px borders, sharp corners, and a pastel peach background when focused.
- **Stickers:** Floating circular badges with rotated text. These should overlap the edges of product cards or hero sections.
- **Footer:** Solid Dark Navy (#1A162B) with all text and icons in white or Neon Mint. The footer acts as the "weight" at the bottom of the vibrant, fluid page.