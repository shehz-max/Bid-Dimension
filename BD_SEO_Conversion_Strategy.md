# BID DIMENSIONS — SEO & CONVERSION STRATEGY
## B2B Lead Generation Focus | Local SEO | Service Schema

---

## 1. META DATA TEMPLATES (Per Page)

| Page | Title (Max 60 chars) | Description (Max 160 chars) |
|------|---------------------|----------------------------|
| Homepage | "Bid Dimensions | Engineering & Design Services" | "Full-service structural engineering, architectural design, and MEP services. PE-stamped drawings, 24-48h turnaround. Get your free quote today." |
| Structural | "Structural Engineering | Bid Dimensions" | "Licensed structural engineering with PE-stamped drawings. Foundation design, framing plans, and calculations. Upload your plans for a free quote." |
| Architectural | "Architectural Design Services | Bid Dimensions" | "From concept to permit-ready construction documents. Residential, commercial, and industrial architectural design. Book a consultation." |
| MEP | "MEP Engineering Services | Bid Dimensions" | "Mechanical, electrical, and plumbing engineering. HVAC, power, lighting, and plumbing plans. Coordinated, code-compliant MEP design." |
| Contact | "Get a Free Quote | Bid Dimensions" | "Upload your plans and receive a detailed engineering quote within 24-48 hours. Structural, architectural, and MEP services." |

### OG Image Specs (All Pages)
- Dimensions: 1200×630px
- Format: PNG (text clarity)
- Design: BD Logo + navy gradient background + page title text + blueprint line accent
- Must include: Brand logo visible, primary color matches `#1A3A5C`

---

## 2. HEADING HIERARCHY (Enforced Per Page)

### Homepage
```
H1: "Engineering That Carries the Weight" (only H1 on page)
  H2: "Innovation in Every Dimension"
    H3: "Structural Engineering"
    H3: "Architectural Design"
    H3: "MEP Engineering"
  H2: "From Concept to Permit in Six Steps"
    H3: "Project Evaluation"
    H3: "Structural Analysis"
    H3: "Foundation Planning"
    H3: "Structural Framing"
    H3: "Construction Documentation"
    H3: "Quality Assurance"
  H2: "Trusted by Contractors, Architects & Developers"
  H2: "Ready to Start Your Project?"
```

### Structural Engineering Page
```
H1: "Structural Engineering Services" (only H1)
  H2: "The Cost of Getting It Wrong"
  H2: "Who We Work With"
    H3: "Architects"
    H3: "General Contractors"
    H3: "Developers"
    H3: "Property Owners"
  H2: "Our Engineering Process"
    H3: "1. Project Evaluation"
    H3: "2. Structural Analysis"
    H3: "3. Foundation Planning"
    H3: "4. Structural Framing"
    H3: "5. Construction Documentation"
    H3: "6. Quality Assurance"
  H2: "Project Deliverables"
  H2: "Frequently Asked Questions"
  H2: "Get Structural Engineering You Can Trust"
```

### Contact Page
```
H1: "Get Your Free Quote" (only H1)
  H2: "What Happens Next"
```

**Rule:** No H1 duplication across pages. No skipping from H1 to H3. Every H2 must follow an H1 or another H2.

---

## 3. SCHEMA MARKUP (Structured Data)

### Organization Schema (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bid Dimensions",
  "url": "https://biddimensions.us",
  "logo": "https://biddimensions.us/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-747-223-7815",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://linkedin.com/company/biddimensions",
    "https://instagram.com/biddimensions"
  ]
}
```

### LocalBusiness Schema (Homepage + Contact)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Bid Dimensions",
  "image": "https://biddimensions.us/hero-image.jpg",
  "@id": "https://biddimensions.us",
  "url": "https://biddimensions.us",
  "telephone": "+1-747-223-7815",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  }
}
```

### Service Schema (Service Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Structural Engineering",
  "description": "Licensed structural engineering with PE-stamped drawings...",
  "provider": {
    "@type": "Organization",
    "name": "Bid Dimensions"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
}
```

### FAQPage Schema (Service Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in structural engineering services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our structural engineering services include..."
      }
    }
  ]
}
```

### BreadcrumbList Schema (All Pages Except Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://biddimensions.us/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://biddimensions.us/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Structural Engineering",
      "item": "https://biddimensions.us/services/structural-engineering"
    }
  ]
}
```

---

## 4. CONVERSION FUNNEL

### The Quote Request Funnel

```
AWARENESS
├── Organic Search: "structural engineering services"
├── Google Maps: Local pack listing
├── Referral: "My contractor recommended Bid Dimensions"
└── Direct: Previous client returning
         │
         ▼
HOMEPAGE (Trust + Direction)
├── Hero CTA: "Get a Free Quote" → /contact
├── Service Cards: Click to service page
└── Process Section: Builds credibility
         │
         ▼
SERVICE PAGE (Education + Qualification)
├── Process Timeline: Shows methodology
├── Deliverables: Sets expectations
├── FAQ: Handles objections
└── CTA: "Upload Your Plans for a Free Quote" → /contact
         │
         ▼
CONTACT PAGE (Conversion)
├── Multi-step form: Progressive disclosure
├── File upload: "Upload Your Plans" (core differentiator)
├── Contact info: Phone as fallback
└── "What Happens Next": Reduces anxiety
         │
         ▼
THANK YOU PAGE (Confirmation)
├── Confirmation message
├── Timeline expectation: "24-48 hours"
├── Phone number for urgent questions
└── Related services cross-sell
```

### CTA Hierarchy

| Type | Copy | Placement | Visual |
|------|------|-----------|--------|
| **Primary** | "Get a Free Quote" | Hero, sticky nav, section ends, footer | Navy bg, white text, sharp corners, lift on hover |
| **Secondary** | "View Our Work" / "Learn More" | Hero, service cards | Text link, underline draw, arrow icon |
| **Emergency** | "Call (747) 223-7815" | Mobile sticky bottom, contact page | Text link, click-to-call |
| **Tertiary** | "Read FAQ" / "See Process" | Service pages | Ghost button, minimal |

---

## 5. CORE WEB VITALS TARGETS

| Metric | Target | Why |
|--------|--------|-----|
| **LCP** | < 1.8s | Hero image optimized, no 3D WebGL, SVG animations are lightweight |
| **INP** | < 150ms | CSS animations only, no heavy JS scroll handlers, IntersectionObserver for reveals |
| **CLS** | < 0.05 | All images have dimensions, fonts use swap, no dynamic content injection above fold |
| **TTFB** | < 600ms | Next.js 14 static generation, minimal server logic |
| **FCP** | < 1.2s | Inline critical CSS, preloaded hero image, font-display: swap |

### Performance Budget

| Resource | Budget | Rationale |
|----------|--------|-----------|
| Hero image | < 150KB WebP | Isometric wireframe, dark = smaller file |
| Font payload | < 80KB (3 fonts) | Space Grotesk + Inter + JetBrains Mono, subsets |
| CSS (critical) | < 30KB | Tailwind purge, minimal custom CSS |
| JS (initial) | < 60KB | No Three.js, no Zustand, Framer Motion tree-shaken |
| Total page weight | < 1MB | Static site, no heavy dependencies |

---

## 6. ANALYTICS EVENTS

### CTA Tracking

| Event | Parameters | Pages |
|-------|-----------|-------|
| `cta_click` | `cta_id`, `cta_text`, `cta_position`, `page_path` | All |
| `nav_click` | `link_text`, `link_url` | All |
| `service_card_click` | `service_name`, `position` | Homepage |
| `process_step_view` | `step_number`, `step_name` | Homepage, Service pages |

### Form Tracking

| Event | Parameters | Trigger |
|-------|-----------|---------|
| `form_start` | `form_id`, `page_path` | First interaction with quote form |
| `form_step` | `step_number`, `step_name` | Moving between steps |
| `form_submit` | `service_type`, `project_type`, `file_count` | Successful submission |
| `form_abandon` | `last_step`, `time_spent` | Leaving page before submit |

### Engagement Tracking

| Event | Parameters | Trigger |
|-------|-----------|---------|
| `scroll_depth` | `depth_percent` | 25%, 50%, 75%, 90% |
| `accordion_open` | `question_text` | FAQ accordion expand |
| `file_upload` | `file_count`, `total_size` | Files dropped in dropzone |
| `phone_click` | `location` | Click-to-call initiated |

---

## 7. INTERNAL LINKING STRATEGY

### Homepage Links
- Logo → Home
- Services dropdown → Structural, Architectural, MEP
- Process → scrolls to process section
- Projects → (v2) portfolio page
- About → (v2) about page
- Contact → /contact
- Hero CTA → /contact
- Service cards → respective service pages
- Footer → all top-level pages

### Service Page Links
- Breadcrumb → Home > Services > [Service]
- "Related Services" section at bottom: links to other 2 service pages
- CTA → /contact
- FAQ accordion → no links, but FAQ schema for rich snippets

### Contact Page Links
- Phone → click-to-call
- Email → mailto link
- Service pages → linked in sidebar

---

## 8. IMAGE SEO

### Alt Text Templates

| Page | Image | Alt Text |
|------|-------|----------|
| Homepage | Hero isometric | "3D wireframe structural model of a commercial building — Bid Dimensions engineering visualization" |
| Homepage | Service icons | "Structural engineering icon — Bid Dimensions" |
| Structural | Detail drawing | "Steel beam connection detail drawing — Bid Dimensions structural engineering" |
| Architectural | Elevation | "Architectural elevation drawing of modern building — Bid Dimensions" |
| MEP | Coordination drawing | "MEP coordination drawing showing HVAC and electrical systems — Bid Dimensions" |
| All | BD Logo | "Bid Dimensions logo — engineering and design services" |

### Image Specs

| Image Type | Format | Dimensions | Loading |
|------------|--------|------------|---------|
| Hero | WebP | 1200×800 | eager (above fold) |
| Service card | WebP | 600×400 | lazy |
| Process icon | SVG | 48×48 | eager (inline) |
| OG Image | PNG | 1200×630 | N/A |
| Logo | SVG | scalable | eager |

---

## 9. ROBOTS & SITEMAP

### robots.txt
```
User-agent: *
Allow: /
Disallow: /thank-you
Disallow: /admin

Sitemap: https://biddimensions.us/sitemap.xml
```

### XML Sitemap Pages
- `/` — Homepage (priority 1.0)
- `/services/structural-engineering` (priority 0.9)
- `/services/architectural-design` (priority 0.9)
- `/services/mep-engineering` (priority 0.9)
- `/contact` (priority 0.8)

---

## 10. ACCESSIBILITY REQUIREMENTS

- WCAG AA minimum, AAA where possible
- Color contrast: 7:1 on dark backgrounds, 4.5:1 on light
- Focus rings: 2px solid `#4A8AB8`, offset 2px
- `prefers-reduced-motion`: Disable parallax, grid pulse, continuous animations
- All form fields: Associated labels, error messages, ARIA attributes
- Skip-to-content link on all pages
- Semantic HTML: nav, main, section, article, aside used correctly
