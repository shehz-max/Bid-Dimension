# BID DIMENSIONS — COMPONENT SPECIFICATION
## Reusable Component Library | Next.js 14 + Tailwind + Framer Motion

---

## ATOMS

### Button

**Variants:**

| Variant | Background | Text | Border | Hover | Usage |
|---------|-----------|------|--------|-------|-------|
| `primary` | `#1A3A5C` | `#FFFFFF` | none | translateY(-3px), shadow-glow-blue, bg lightens to `#4A8AB8` | Main CTAs |
| `secondary` | transparent | `#1A3A5C` | 1px `#1A3A5C` | bg fills from left with `#1A3A5C`, text turns white | Secondary actions |
| `ghost` | transparent | `#4A8AB8` | none | underline draws from left, text brightens | Text links |
| `outline-light` | transparent | `#E8EEF4` | 1px `rgba(232,238,244,0.3)` | border brightens to `#E8EEF4`, shadow-glow-white | Dark bg CTAs |

**Props:**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  href?: string; // if provided, renders as <a>
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}
```

**Sizes:**
- `sm`: px-4 py-2, text-sm
- `md`: px-6 py-3, text-base (default)
- `lg`: px-8 py-4, text-lg

**Rules:**
- All buttons: 0px border-radius (sharp corners)
- Minimum touch target: 44px height
- Focus: 2px `#4A8AB8` outline, offset 2px
- Disabled: opacity 0.4, no hover effects

---

### Input

**Variants:**

| Variant | Background | Border | Text | Focus |
|---------|-----------|--------|------|-------|
| `default` | transparent | bottom 1px `#E2E8F0` | `#1A1A1A` | bottom border `#4A8AB8`, label floats up |
| `dark` | `rgba(255,255,255,0.03)` | 1px `rgba(74,138,184,0.2)` | `#E8EEF4` | border `#4A8AB8`, glow |

**Props:**
```typescript
interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'textarea';
  placeholder?: string;
  required?: boolean;
  variant?: 'default' | 'dark';
  error?: string;
}
```

**Rules:**
- Label always visible above input (never placeholder-only)
- Error message: 12px, `#DC2626` red, appears below input
- Textarea: min-height 120px

---

### Badge

**Variants:**

| Variant | Background | Text | Usage |
|---------|-----------|------|-------|
| `default` | `#F4F7FA` | `#1A3A5C` | General tags |
| `accent` | `#1A3A5C` | `#FFFFFF` | Featured, important |
| `outline` | transparent | `#4A8AB8` | 1px `#4A8AB8` border | Categories |

**Props:**
```typescript
interface BadgeProps {
  variant?: 'default' | 'accent' | 'outline';
  children: React.ReactNode;
}
```

---

### Icon

**System:** Lucide React icons only. No custom SVGs unless specified.

**Default size:** 24px
**Stroke width:** 1.5px
**Color:** Inherits from parent text color

**Required icons:**
- Navigation: Menu, X, ChevronDown
- Services: HardHat, Ruler, PenTool, Wrench, Building2
- Process: Search, BarChart3, Landmark, Grid3X3, FileText, ShieldCheck
- UI: ArrowRight, ArrowUpRight, Phone, Mail, MapPin, Clock, Upload, Check

---

## MOLECULES

### ServiceCard

**Used on:** Homepage services preview, related services

**Layout:**
```
[Card — 0px radius, 1px border, white bg]
  [Icon — 48px, #4A8AB8, top-left]
  [Spacer: 24px]
  [Title — H3, 24px, #1A1A1A]
  [Spacer: 12px]
  [Description — 16px, #64748B, 1-2 lines max]
  [Spacer: 24px]
  [Link — "Explore →", #4A8AB8, underline draw on hover]
```

**Props:**
```typescript
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}
```

**Hover:** translateY(-4px), border color transitions to `#4A8AB8`, shadow-md appears.
**Animation:** FadeInUp on scroll, stagger 150ms.

---

### ProcessStep

**Used on:** Homepage process timeline, service pages

**Layout:**
```
[Step Node]
  [Number — JetBrains Mono, 13px, uppercase, #4A8AB8]
  [Title — H4, 20px, bold]
  [Description — 14px, #64748B, max 2 lines]
```

**Variants:**
- `horizontal`: For homepage timeline (desktop: inline row, mobile: vertical)
- `vertical`: For service pages (alternating left/right on desktop)

**Props:**
```typescript
interface ProcessStepProps {
  number: string; // "01", "02", etc.
  title: string;
  description: string;
  variant: 'horizontal' | 'vertical';
  isLast?: boolean;
}
```

**Animation:** On scroll, the connecting line draws itself (SVG stroke), then each node fades in with 200ms stagger.

---

### TestimonialCard

**Used on:** Homepage testimonials section

**Layout:**
```
[Card — white bg, 0px radius, subtle shadow]
  [Quote — 18px, italic, #1A1A1A, leading-relaxed]
  [Spacer: 24px]
  [Divider — 1px #E2E8F0, 40px width]
  [Spacer: 16px]
  [Avatar — 48px circle, object-cover]
  [Name — 16px, 600, #1A1A1A]
  [Role/Company — 14px, #64748B]
```

**Props:**
```typescript
interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string; // optional, fallback to initials
}
```

**Rules:** No carousel. Static grid of 3 cards. Carousels hide content and reduce trust in B2B.

---

### StatCounter

**Used on:** Homepage stats bar

**Layout:**
```
[Stat Item — centered]
  [Number — Space Grotesk, 64px, #1A3A5C, tabular-nums]
  [Label — Inter, 14px, #64748B, uppercase, tracked]
```

**Props:**
```typescript
interface StatCounterProps {
  value: number;
  suffix?: string; // "+", "%", "h"
  label: string;
  duration?: number; // ms, default 2000
}
```

**Animation:** Count-up from 0 on scroll into view. Uses IntersectionObserver. `tabular-nums` to prevent layout shift during count.

---

### FAQItem

**Used on:** Service pages FAQ sections

**Layout:**
```
[Accordion Item — full width]
  [Question Row — clickable, py-5, border-bottom 1px #E2E8F0]
    [Question Text — 16px, 600, #1A1A1A]
    [Icon — ChevronDown, rotates 180deg on open]
  [Answer Panel — max-height 0 → auto, 300ms ease]
    [Answer Text — 16px, #64748B, py-4, max-width 90%]
```

**Props:**
```typescript
interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}
```

**Animation:** Chevron rotates 180deg, panel expands with max-height transition.
**Schema:** Parent container must include FAQPage structured data.

---

### FileDropzone

**Used on:** Contact page quote form (Step 3)

**Layout:**
```
[Dropzone — dashed border 2px #4A8AB8, rounded-lg (exception: 8px radius here for UX), centered]
  [Icon — Upload, 48px, #4A8AB8]
  [Text — "Drag & drop your plans here"]
  [Subtext — "or click to browse"]
  [Accepted formats — "PDF, DWG, RVT, PNG, JPG up to 50MB"]
```

**States:**
- `idle`: Dashed border, blue
- `dragover`: Solid border, bg `rgba(74,138,184,0.05)`, scale 1.01
- `uploading`: Progress bar, file name list
- `error`: Red border, error message

**Props:**
```typescript
interface FileDropzoneProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
  acceptedTypes?: string[];
}
```

---

## ORGANISMS

### Navigation

**Layout:**
```
[Header — fixed top, z-50, full width]
  [Container — max-width 1280px, centered, h-20]
    [Left — Logo (SVG, height 40px)]
    [Center — Nav Links (hidden on mobile)]
      "Services" (dropdown on hover)
      "Process" (scrolls to homepage section or #process)
      "Projects" (v2 link)
      "About" (v2 link)
      "Contact" → /contact
    [Right — CTA Button "Get a Quote" + Phone "(747) 223-7815"]
    [Mobile — Hamburger icon]
```

**Behavior:**
- Transparent on hero → solid `#0B1B2E` with `backdrop-blur-md` after 80px scroll
- Transition: background 300ms ease
- Services dropdown: Glassmorphism panel, 0px radius, links to 3 service pages
- Mobile: Full-screen overlay, `#0B1B2E` bg, large links (32px), phone CTA at bottom

**Props:**
```typescript
interface NavigationProps {
  transparent?: boolean; // force transparent (homepage)
}
```

---

### Hero

**Used on:** Homepage, all service pages, contact page

**Variants:**

#### Homepage Hero (100vh)
```
[Section — 100vh, flex items-center, relative, overflow-hidden]
  [Background — #0B1B2E + blueprint-grid + noise-overlay]
  [Content — max-width 1280px, grid 55/45]
    [Left — text content, z-10]
      [Label — mono, uppercase, #4A8AB8]
      [H1 — Space Grotesk, 72-88px, #E8EEF4]
      [Subhead — Inter, 18px, #8A9BB0, max-w-lg]
      [CTA Group — flex gap-4 mt-8]
    [Right — hero image, z-0]
      [Isometric wireframe image — parallax 0.3x]
      [SVG blueprint lines — draw animation on load]
  [Bottom — scroll indicator, centered, bounce animation]
```

#### Page Hero (50-60vh)
```
[Section — 50-60vh, centered text]
  [Background — #0B1B2E + blueprint-grid]
  [Breadcrumb — mono, 12px, #8A9BB0]
  [H1 — Space Grotesk, 56-64px, #E8EEF4]
  [Subhead — Inter, 18px, #8A9BB0, max-w-xl]
  [CTA — primary button]
```

**Props:**
```typescript
interface HeroProps {
  variant: 'homepage' | 'page';
  label?: string;
  headline: string;
  subheadline?: string;
  cta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  image?: string; // for homepage variant
  breadcrumb?: { label: string; href: string }[];
}
```

**Animation:**
- Label: fadeInUp, 0ms delay
- H1: fadeInUp, 200ms delay
- Subhead: fadeInUp, 400ms delay
- CTAs: fadeInUp, 600ms delay
- SVG lines: stroke-draw, 2000ms, ease-smooth

---

### ServicesGrid

**Used on:** Homepage

**Layout:**
```
[Section — py-24, bg-white]
  [Container — max-width 1280px]
    [Section Header — centered]
      [Label — mono, uppercase, #4A8AB8]
      [H2 — Space Grotesk, 48px, #1A1A1A]
    [Grid — 3 columns desktop, 1 column mobile, gap-8]
      [ServiceCard × 3]
```

**Props:**
```typescript
interface ServicesGridProps {
  services: ServiceCardProps[];
}
```

---

### ProcessTimeline

**Used on:** Homepage (horizontal), Service pages (vertical)

**Layout (Homepage — Horizontal):**
```
[Section — py-24, bg-#0B1B2E, blueprint-grid]
  [Container — max-width 1280px]
    [Section Header — centered, light text]
    [Timeline — flex row desktop, flex col mobile]
      [SVG Line — horizontal, draws on scroll]
      [ProcessStep × 6 — connected by line nodes]
```

**Layout (Service Page — Vertical):**
```
[Section — py-24, bg-white]
  [Container — max-width 960px]
    [Section Header]
    [Timeline — vertical line center]
      [ProcessStep × 6 — alternating left/right on desktop]
```

**Props:**
```typescript
interface ProcessTimelineProps {
  variant: 'horizontal' | 'vertical';
  steps: { number: string; title: string; description: string }[];
}
```

**Animation:**
- Horizontal: Line draws left-to-right on scroll. Each node lights up (opacity 0.3 → 1) as line reaches it.
- Vertical: Line draws top-to-bottom. Nodes fade in with stagger.

---

### QuoteForm

**Used on:** Contact page

**Layout:**
```
[Form Container — max-width 640px]
  [Progress Bar — 4 steps, horizontal, shows current step]
  [Step Content — animated fade/slide between steps]
    [Step 1: Service & Project Type — radio cards]
    [Step 2: Project Details — inputs]
    [Step 3: File Upload — FileDropzone]
    [Step 4: Contact Info — inputs + submit]
  [Navigation — Back / Next or Submit]
```

**Props:**
```typescript
interface QuoteFormProps {
  onSubmit: (data: QuoteFormData) => void;
}

interface QuoteFormData {
  serviceType: string;
  projectType: string;
  location: string;
  squareFootage?: number;
  description?: string;
  files: File[];
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  preferredContact: 'email' | 'phone';
  timeline: string;
}
```

**Validation:** Zod schema
**Step transitions:** Framer Motion AnimatePresence, slide left/right
**Submit:** POST to API route `/api/quote`

---

### Footer

**Layout:**
```
[Footer — bg-#0B1B2E, pt-20 pb-8]
  [Container — max-width 1280px]
    [Top Grid — 4 columns desktop, 2 tablet, 1 mobile]
      [Col 1: Logo + tagline + address]
      [Col 2: Services links]
      [Col 3: Company links]
      [Col 4: Contact info + social icons]
    [Divider — 1px rgba(74,138,184,0.12)]
    [Bottom Bar — flex between]
      [Left: Copyright]
      [Right: Social icons (LinkedIn, Instagram) + Back to top]
```

**Props:**
```typescript
interface FooterProps {
  // Static content, no props needed
}
```

---

## TEMPLATES

### MarketingLayout

**Used on:** All pages

**Structure:**
```
[Root]
  [Navigation]
  [Main]
    {children}
  [Footer]
```

**Props:**
```typescript
interface MarketingLayoutProps {
  children: React.ReactNode;
  transparentNav?: boolean; // true for homepage
}
```

**SEO:**
- Metadata via Next.js `export const metadata`
- Structured data via `<StructuredData />` component
- Canonical URL via `alternates.canonical`

---

## ANIMATION COMPONENTS

### FadeInUp

**Wrapper component using IntersectionObserver + Framer Motion.**

```typescript
interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number; // ms
  duration?: number; // ms, default 800
  y?: number; // px offset, default 30
}
```

**Behavior:**
- Hidden state: opacity 0, translateY(30px)
- Visible state: opacity 1, translateY(0)
- Trigger: IntersectionObserver, threshold 0.2, once: true
- Uses `cubic-bezier(0.16, 1, 0.3, 1)`

---

### StaggerContainer

**Parent wrapper that staggers children animations.**

```typescript
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number; // ms, default 150
}
```

**Behavior:** Each direct child gets an incremental delay (0, 150ms, 300ms, etc.)

---

### BlueprintDraw

**SVG stroke-draw animation for decorative lines.**

```typescript
interface BlueprintDrawProps {
  path: string; // SVG path data
  duration?: number; // ms, default 2000
  color?: string; // default #4A8AB8
  strokeWidth?: number; // default 1
}
```

**Behavior:**
- stroke-dasharray = path length
- stroke-dashoffset = path length → 0
- Trigger: on mount (hero) or on scroll into view

---

## HOOKS

### useScrollAnimation

```typescript
function useScrollAnimation(options?: {
  threshold?: number; // default 0.2
  once?: boolean; // default true
}): RefObject<HTMLElement>
```

Returns a ref. Attach to container. Children with `.animate-on-scroll` class will fade in up with stagger.

---

### useCountUp

```typescript
function useCountUp(end: number, options?: {
  duration?: number; // default 2000
  suffix?: string;
}): { value: number; ref: RefObject<HTMLElement> }
```

Returns current animated value and ref. Animation triggers when ref enters viewport.

---

## TECHNICAL STACK

| Technology | Purpose |
|------------|---------|
| Next.js 14 (App Router) | Framework, static generation, SEO |
| React 18 | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations, page transitions, AnimatePresence |
| Lucide React | Icons |
| React Hook Form | Form handling |
| Zod | Form validation |
| shadcn/ui (optional) | Base primitives if needed |

**NOT using:**
- Zustand (no global state needed)
- Three.js / WebGL (no 3D hero)
- Swiper (no carousels — static grids only)
- GSAP (Framer Motion handles everything)
