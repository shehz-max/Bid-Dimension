# BID DIMENSIONS — DESIGN SYSTEM SPECIFICATION
## End-to-End Engineering, Design & Construction Solutions
### Adapted from Swiss Precision + Dark Futurist Templates | BD Navy Palette

---

## 1. COLOR SYSTEM

### Primary Palette (Derived from BD Logo)

| Token | HEX | RGB | Usage |
|-------|-----|-----|-------|
| `bd-navy-deep` | `#0B1B2E` | rgb(11,27,46) | Hero backgrounds, nav, footer, dark sections |
| `bd-navy` | `#1A3A5C` | rgb(26,58,92) | Primary buttons, headings, borders, accents |
| `bd-blue` | `#4A8AB8` | rgb(74,138,184) | Highlights, links, gradient endpoints, icons |
| `bd-sky` | `#6BA3C9` | rgb(107,163,201) | Hover states, micro-animations, glow effects |
| `bd-surface-light` | `#F4F7FA` | rgb(244,247,250) | Light sections, cards, content areas |
| `bd-white` | `#FFFFFF` | rgb(255,255,255) | Pure white sections, card backgrounds |
| `bd-charcoal` | `#1A1A1A` | rgb(26,26,26) | Body text on light backgrounds |
| `bd-gray` | `#64748B` | rgb(100,116,139) | Secondary text on light backgrounds |
| `bd-text-light` | `#E8EEF4` | rgb(232,238,244) | Body text on dark backgrounds |
| `bd-text-muted` | `#8A9BB0` | rgb(138,155,176) | Muted text on dark backgrounds |
| `bd-border-subtle` | `rgba(74,138,184,0.12)` | — | Card borders on light, dividers |
| `bd-border-dark` | `rgba(74,138,184,0.20)` | — | Card borders on dark |
| `bd-glow` | `rgba(74,138,184,0.15)` | — | Hover glows, focus rings |

### Gradient Definitions

```css
/* Hero background — deep to navy sweep */
--gradient-hero: linear-gradient(160deg, #0B1B2E 0%, #1A3A5C 55%, #0B1B2E 100%);

/* Blueprint glow — subtle bottom wash */
--gradient-glow: linear-gradient(180deg, transparent 0%, rgba(74,138,184,0.06) 100%);

/* Accent button — blue sweep */
--gradient-accent: linear-gradient(135deg, #4A8AB8 0%, #6BA3C9 100%);

/* Card hover — navy to blue */
--gradient-card-hover: linear-gradient(135deg, rgba(26,58,92,0.8), rgba(74,138,184,0.4));
```

### Section Rhythm (Dark/Light Alternation)

| Section Order | Background | Text Color | Border/Accent |
|--------------|------------|------------|---------------|
| Hero | `#0B1B2E` dark | `#E8EEF4` light | Blueprint grid overlay |
| Services Preview | `#FFFFFF` white | `#1A1A1A` charcoal | `#4A8AB8` blue accents |
| Process | `#0B1B2E` dark | `#E8EEF4` light | SVG line animations |
| Stats | `#F4F7FA` light | `#1A1A1A` charcoal | `#1A3A5C` navy numbers |
| Testimonials | `#FFFFFF` white | `#1A1A1A` charcoal | Glassmorphism cards |
| CTA / Footer | `#0B1B2E` dark | `#E8EEF4` light | `#4A8AB8` glow |

---

## 2. TYPOGRAPHY SYSTEM

### Font Families

| Role | Font | Weights | Fallback |
|------|------|---------|----------|
| Display / H1-H2 | Space Grotesk | 700, 800 | Montserrat, Inter |
| Body / UI | Inter | 400, 500, 600 | DM Sans, system-ui |
| Labels / Numbers | JetBrains Mono | 500 | SF Mono, monospace |

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Transform |
|---------|----------------|---------------|--------|-------------|----------------|-----------|
| H1 Hero | 72-88px | 40-48px | 700 | 1.05 | -0.02em | none |
| H2 Section | 48-56px | 32-36px | 700 | 1.1 | -0.01em | none |
| H3 Card | 24-28px | 20-22px | 600 | 1.2 | 0 | none |
| H4 Subhead | 18-20px | 16-18px | 600 | 1.3 | 0.01em | none |
| Body Large | 18px | 16px | 400 | 1.7 | 0 | none |
| Body | 16px | 15px | 400 | 1.6 | 0 | none |
| Caption | 14px | 13px | 400 | 1.5 | 0.01em | none |
| Label | 12px | 11px | 500 | 1.4 | 0.12em | uppercase |
| Mono Label | 13px | 12px | 500 | 1.4 | 0.08em | uppercase |
| Stat Number | 64px | 40px | 700 | 1.0 | -0.02em | none |

**H1 Rule:** Only ONE per page. Must include primary keyword + brand context.
**Label Rule:** Uppercase, tracked, used for section overlines ("OUR SERVICES", "THE PROCESS").

---

## 3. SPACING SYSTEM

### Base 8px Grid

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Tight gaps |
| `space-3` | 12px | Small padding |
| `space-4` | 16px | Element gaps |
| `space-5` | 20px | Component internal |
| `space-6` | 24px | Card padding |
| `space-8` | 32px | Section internal |
| `space-10` | 40px | Large gaps |
| `space-12` | 48px | Section padding |
| `space-16` | 64px | Major section internal |
| `space-20` | 80px | Section separation |
| `space-24` | 96px | Hero section padding |
| `space-32` | 128px | Extra large breaks |

### Container Widths

| Breakpoint | Max Width | Horizontal Padding |
|------------|-----------|-------------------|
| Mobile (<640px) | 100% | 20px |
| Tablet (640-1024px) | 100% | 32px |
| Desktop (1024-1280px) | 960px | 40px |
| Large (1280-1536px) | 1200px | 48px |
| XL (1536px+) | 1280px | 64px |

---

## 4. BORDER RADIUS & SHAPES

| Token | Value | Usage |
|-------|-------|-------|
| `radius-0` | 0px | Buttons, cards, inputs — sharp corners for precision feel |
| `radius-sm` | 2px | Small elements, tags |
| `radius-md` | 4px | Images, small cards |
| `radius-lg` | 8px | Large cards, modals |

**Rule:** Bid Dimensions uses predominantly 0px (sharp) corners. This signals technical precision and brutalist confidence. Only images and small utility elements get 4-8px rounding.

---

## 5. SHADOWS & EFFECTS

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-none` | none | Default flat design |
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` | Subtle elevation |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Cards on light |
| `shadow-glow-blue` | `0 0 24px rgba(74,138,184,0.15)` | Hover glow on dark |
| `shadow-glow-white` | `0 0 20px rgba(255,255,255,0.06)` | Dark theme hover |

### Glassmorphism (Dark Sections Only)

```css
.glass-dark {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(74, 138, 184, 0.12);
}
```

---

## 6. BACKGROUND TEXTURES & PATTERNS

### Blueprint Grid Overlay (Dark Sections)

```css
.blueprint-grid {
  background-image:
    linear-gradient(rgba(74,138,184,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(74,138,184,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}
```

- Applied at 4% opacity on dark navy backgrounds
- Creates "technical drawing" texture without clutter
- NOT applied on light sections

### Technical Line Accents

- Horizontal dividers with dimension markers: `——— 1200mm ———`
- Small circle + cross markers at section corners (like drafting registration marks)
- Faint geometric shapes (circles, rectangles with dimension lines) as decorative background elements at 3% opacity

### Noise Texture

```css
.noise-overlay {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
}
```

- 3% opacity noise on dark sections
- Adds physical paper/print texture

---

## 7. ANIMATION SYSTEM

### Easing Functions

| Name | Value | Usage |
|------|-------|-------|
| `ease-smooth` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary reveal animations |
| `ease-out-expo` | `cubic-bezier(0.19, 1, 0.22, 1)` | Dramatic entrances |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Button hovers, playful |
| `ease-default` | `ease-out` | Standard transitions |

### Duration Tokens

| Name | Value | Usage |
|------|-------|-------|
| `dur-instant` | 150ms | Micro-interactions |
| `dur-fast` | 300ms | Hover states, focus |
| `dur-medium` | 500ms | Card reveals |
| `dur-slow` | 800ms | Hero text reveals |
| `dur-ambient` | 5000ms | Continuous floating |
| `dur-draw` | 2000ms | SVG stroke draw |

### Hero Animations

| Animation | Trigger | Duration | Easing | Description |
|-----------|---------|----------|--------|-------------|
| **Blueprint Draw** | Page load | 2000ms | ease-smooth | SVG path lines draw from center outward using stroke-dashoffset |
| **Hero Text Reveal** | Page load | 800ms | ease-smooth | Stagger: H1 → Subhead → CTA (200ms between each). translateY(30px)→0, opacity 0→1 |
| **Hero Image Parallax** | Scroll | continuous | linear | Isometric technical drawing moves at 0.3x scroll speed |
| **Grid Pulse** | Continuous | 4000ms | ease-in-out | Blueprint grid lines pulse opacity 0.03 → 0.06 |

### Scroll Animations

| Animation | Trigger | Description |
|-----------|---------|-------------|
| **FadeInUp** | IntersectionObserver (threshold 0.2) | opacity 0→1, translateY(30px)→0. Stagger 150ms between siblings |
| **Service Card Draw** | Scroll into view | Card border draws clockwise via SVG stroke |
| **Counter Roll** | Scroll into view | Stats count up from 0 over 2000ms |
| **Image Reveal** | Scroll into view | Images reveal via clip-path or mask, not just fade |
| **Parallax Blueprint** | Scroll | Background CAD drawings move at 0.2x-0.3x scroll speed |

### Micro-Interactions

| Element | Hover Effect | Duration |
|---------|-------------|----------|
| Primary Button | translateY(-3px), shadow-glow-blue, border brightens | 300ms |
| Secondary Button | Background fills from left (pseudo-element width 0→100%) | 300ms |
| Nav Link | Underline draws from left (scaleX 0→1, transform-origin left) | 250ms |
| Service Card | translateY(-4px), border brightens, inner glow | 300ms |
| Image Card | Scale 1.02, subtle shadow increase | 400ms |

### Loading State

- **Blueprint Loader:** Simple floor plan outline draws itself in center (SVG stroke-dashoffset), then fades to reveal site
- Duration: 1500ms total
- Color: `#4A8AB8` on `#0B1B2E`

---

## 8. RESPONSIVE BREAKPOINTS

| Name | Width | Key Changes |
|------|-------|-------------|
| `sm` | < 640px | Single column, stacked layout, hamburger nav, sticky mobile CTA |
| `md` | 640-1024px | 2-column grids, simplified nav, reduced typography scale (70%) |
| `lg` | 1024-1280px | Full layout, horizontal nav, 3-column grids, full animations |
| `xl` | 1280px+ | Max container width, generous whitespace, all effects active |

---

## 9. ACCESSIBILITY RULES

- All text on dark backgrounds: minimum 7:1 contrast ratio (AAA)
- All text on light backgrounds: minimum 4.5:1 contrast ratio (AA)
- Focus states: 2px solid `#4A8AB8` outline, offset 2px
- `prefers-reduced-motion`: Disable parallax, grid pulse, and floating animations. Keep fade-ins.
- Touch targets: minimum 44px × 44px on mobile
- Form labels: always visible, never placeholder-only
