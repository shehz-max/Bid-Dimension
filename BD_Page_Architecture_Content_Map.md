# BID DIMENSIONS — PAGE ARCHITECTURE & CONTENT MAP
## 5-Page Website | v1 Launch Scope
### End-to-End Engineering, Design & Construction Solutions

---

## HOMEPAGE — "The Blueprint Studio"
**Goal:** First impression = premium engineering firm. Not congested. Spacious. Let visuals breathe.

### Design Principle: MAXIMUM WHITESPACE
- Large section padding (120-160px vertical)
- Minimal text per section — headlines + 1-2 lines max
- Let animations and visuals carry the weight
- No walls of text on the homepage

---

### Section 1: Navigation (Sticky)
- **Left:** BD Logo (SVG, navy on light / white on dark)
- **Center:** Links — Services (dropdown), Process, Projects, About, Contact
- **Right:** Primary CTA "Get a Quote" + Phone number "(747) 223-7815"
- **Behavior:** Transparent on hero → solid `#0B1B2E` with blur backdrop on scroll
- **Mobile:** Hamburger → full-screen overlay menu with blueprint grid background

---

### Section 2: Hero (100vh, NOT CONGESTED)
- **Background:** `#0B1B2E` with blueprint grid overlay + subtle noise texture
- **Left side (55%):**
  - Label: "END-TO-END ENGINEERING & DESIGN" (mono, uppercase, tracked, `#4A8AB8`)
  - H1: "Engineering That Carries the Weight" (Space Grotesk, 72-88px, `#E8EEF4`)
  - Subhead: "Licensed structural engineering, multidisciplinary design, and permit-ready documentation for projects that stand the test of time." (Inter, 18px, `#8A9BB0`, max-width 520px)
  - CTA Group:
    - Primary: "Get a Free Quote" (white text, navy bg, sharp corners)
    - Secondary: "View Our Work" (text link with arrow, underline draw animation)
- **Right side (45%):**
  - Isometric 3D wireframe building render (AI-generated via anno banana)
  - SVG blueprint lines draw themselves around it on load
  - Subtle parallax on scroll (0.3x speed)
- **Bottom:** Scroll indicator — thin line with "Scroll" text, subtle bounce

**Content volume: MINIMAL. One headline. One sentence. Two buttons. One hero image.**

---

### Section 3: Services Preview (3 Pillars)
- **Background:** `#FFFFFF`
- **Layout:** Section label + H2 + 3 large cards in a row
- **Label:** "WHAT WE DO" (mono, uppercase, `#4A8AB8`)
- **H2:** "Innovation in Every Dimension" (Space Grotesk, 48px)
- **Cards (3):**
  1. **Structural Engineering** — Icon: structural beam/wrench. Title. One-line description: "Calculations, foundation design, and PE-stamped drawings." Link: "Explore →"
  2. **Architectural Design** — Icon: blueprint/compass. Title. One-line description: "Concept to permit-ready construction documents." Link: "Explore →"
  3. **MEP Engineering** — Icon: gear/pipe. Title. One-line description: "Mechanical, electrical, and plumbing systems design." Link: "Explore →"
- **Card style:** White bg, 1px `#E2E8F0` border, 0px radius. Hover: translateY(-4px), border brightens to `#4A8AB8`.

**Content volume: 3 cards. 3 titles. 3 one-liners. No paragraphs.**

---

### Section 4: The Process (6 Steps, Visual Timeline)
- **Background:** `#0B1B2E` with blueprint grid
- **Layout:** Section label + H2 + horizontal timeline (desktop) / vertical stack (mobile)
- **Label:** "OUR PROCESS" (mono, uppercase, `#4A8AB8`)
- **H2:** "From Concept to Permit in Six Steps" (Space Grotesk, 48px, `#E8EEF4`)
- **Steps:**
  1. Project Evaluation
  2. Structural Analysis
  3. Foundation Planning
  4. Structural Framing
  5. Construction Documentation
  6. Quality Assurance
- **Visual:** Each step is a node on a horizontal line. On scroll, the line draws itself left-to-right, nodes light up sequentially. Each node: number (mono) + title + 4-word description.

**Content volume: 6 nodes. 6 titles. 6 four-word descriptions. Let the animation tell the story.**

---

### Section 5: Trust Bar / Stats
- **Background:** `#F4F7FA`
- **Layout:** 4 stats in a horizontal row, centered
- **Stats:**
  - "25+" / "Years of Experience"
  - "500+" / "Projects Delivered"
  - "48h" / "Average Turnaround"
  - "99%" / "Client Satisfaction"
- **Animation:** Count-up on scroll into view. Numbers roll from 0.
- **Style:** Large number (Space Grotesk, 64px, `#1A3A5C`) + small label (Inter, 14px, `#64748B`)

**Content volume: 4 numbers. 4 labels. Zero paragraphs.**

---

### Section 6: Software & Certifications
- **Background:** `#FFFFFF`
- **Layout:** Section label + H2 + logo grid + certification badges
- **Label:** "TRUSTED TECHNOLOGY" (mono, uppercase, `#4A8AB8`)
- **H2:** "Built on Industry-Standard Tools" (Space Grotesk, 48px)
- **Software logos:** AutoCAD, Revit, Tekla, PlanSwift, RSMeans, Trimble — displayed as grayscale text badges (not official logos unless cleared), hover turns blue
- **Certifications:** PE Stamp, AACE, ASPE — displayed as badge pills
- **Style:** Clean grid, generous gaps (48px), minimal

---

### Section 7: Testimonials
- **Background:** `#F4F7FA`
- **Layout:** Section label + H2 + 3 testimonial cards
- **Label:** "CLIENT WORDS" (mono, uppercase, `#4A8AB8`)
- **H2:** "Trusted by Contractors, Architects & Developers" (Space Grotesk, 48px)
- **Cards (3):**
  - Quote text (18px, italic, `#1A1A1A`)
  - Name + Company + Role
  - Small avatar circle
- **Card style:** White bg, 0px radius, subtle shadow. No carousel — static grid is better for B2B trust.

**Content volume: 3 quotes. 3 attributions. No bios.**

---

### Section 8: CTA Banner
- **Background:** `#0B1B2E` with blueprint grid + gradient glow at bottom
- **Layout:** Centered text, single CTA
- **H2:** "Ready to Start Your Project?" (Space Grotesk, 48px, `#E8EEF4`)
- **Body:** "Get a free quote in 24 hours. Upload your plans and let's build something that lasts." (Inter, 16px, `#8A9BB0`, max-width 480px, centered)
- **CTA:** "Get Your Free Quote" (large primary button, white text, navy bg, sharp corners)
- **Secondary:** "Or call us at (747) 223-7815" (text link, underline on hover)

---

### Section 9: Footer
- **Background:** `#0B1B2E`
- **Layout:** 4 columns
  - Col 1: BD Logo + tagline "End-to-End Engineering & Design" + address
  - Col 2: Services (Structural, Architectural, MEP, Estimation)
  - Col 3: Company (About, Process, Projects, Contact)
  - Col 4: Contact (Phone, Email, Hours)
- **Bottom bar:** Copyright + social icons (LinkedIn, Instagram) + "Back to top"

---

## PAGE 2: STRUCTURAL ENGINEERING
**URL:** `/services/structural-engineering`
**Goal:** Rank for "structural engineering [location]" + convert visitors to quote requests.

### Section 1: Page Hero (60vh, NOT full height — save scroll for content)
- **Background:** `#0B1B2E` with blueprint grid
- **H1:** "Structural Engineering Services" (must include keyword)
- **Subhead:** "PE-stamped calculations, foundation design, and framing plans that keep your project standing."
- **Breadcrumb:** Home > Services > Structural Engineering
- **CTA:** "Request a Structural Quote"

### Section 2: The Cost of Getting It Wrong
- **Background:** `#FFFFFF`
- **Layout:** Two-column (text left, visual right)
- **Left:** H2 "The Cost of Getting It Wrong" + 2 short paragraphs from Web.docx (condensed — max 80 words total)
- **Right:** Technical drawing image (AI-generated: cracked foundation vs. proper foundation, blueprint style)

### Section 3: Who We Work With
- **Background:** `#F4F7FA`
- **Layout:** 4 audience cards in a row
- **Audiences:** Architects, General Contractors, Developers, Property Owners
- **Each card:** Icon + Title + 1-sentence description

### Section 4: Our Engineering Process (6 Steps)
- **Background:** `#0B1B2E`
- **Layout:** Vertical timeline with alternating left/right content
- **Steps:**
  1. Project Evaluation — Analyze architectural drawings, codes, geotechnical data
  2. Structural Analysis — Load analysis for safe, efficient systems
  3. Foundation Planning — Soil-based foundation selection
  4. Structural Framing — Beams, columns, joists, girders
  5. Construction Documentation — Drawings, details, schedules
  6. Quality Assurance — Final review and permit package
- **Each step:** Number (mono) + Title + 2-line description. No walls of text.

### Section 5: Project Deliverables
- **Background:** `#FFFFFF`
- **Layout:** H2 + grid of deliverable items
- **Items:** Structural Design Calculations, Foundation Plans, Framing Plans, Reinforced Concrete Details, Steel Connection Details, Timber Framing Details, Beam & Column Schedules, Structural Sections, General Notes, Engineering Reports
- **Style:** Icon + title pills, 2-column grid, minimal

### Section 6: FAQ
- **Background:** `#F4F7FA`
- **Layout:** Accordion, 5-6 questions
- **Schema:** FAQPage structured data
- **Questions:**
  - What is included in structural engineering services?
  - Do you provide PE-stamped drawings?
  - How long does structural engineering take?
  - What software do you use?
  - Can you work with my architect?

### Section 7: CTA
- **Background:** `#0B1B2E`
- **H2:** "Get Structural Engineering You Can Trust"
- **CTA:** "Upload Your Plans for a Free Quote"

---

## PAGE 3: ARCHITECTURAL DESIGN
**URL:** `/services/architectural-design`
**Goal:** Rank for "architectural design services" + convert.

### Structure mirrors Structural Engineering page:
1. Page Hero (60vh)
2. What We Deliver (2-column, concept → permit)
3. Who We Work With (Developers, Homeowners, Contractors, Investors)
4. Our Design Process (6 steps: Consultation → Concept → Design Development → Coordination → Construction Docs → Final Review)
5. Project Deliverables (Floor Plans, Site Plans, Elevations, Sections, Schedules, Permit Sets)
6. FAQ (5-6 questions)
7. CTA

**Content pulled from Web.docx Architectural Design section.**

---

## PAGE 4: MEP ENGINEERING
**URL:** `/services/mep-engineering`
**Goal:** Rank for "MEP engineering" + convert.

### Structure:
1. Page Hero (60vh)
2. What is MEP Engineering (2-column, brief explanation)
3. Project Deliverables (HVAC Plans, Electrical Plans, Plumbing Plans, Panel Schedules, MEP Coordination Drawings)
4. Design Technology (Revit MEP, AutoCAD MEP, TRACE 700, DIALux)
5. Service-Specific Q&A (Accordion, 4-5 questions)
6. CTA

**Content pulled from Web.docx MEP Engineering section.**

---

## PAGE 5: CONTACT / GET A QUOTE
**URL:** `/contact`
**Goal:** Capture leads. Primary conversion page.

### Section 1: Page Hero (50vh)
- **Background:** `#0B1B2E` with blueprint grid
- **H1:** "Get Your Free Quote"
- **Subhead:** "Upload your plans and receive a detailed estimate within 24–48 hours."
- **Breadcrumb:** Home > Contact

### Section 2: Contact Info + Form (Two-column)
- **Left column:**
  - Phone: (747) 223-7815 (click-to-call)
  - Email: info@biddimensions.us
  - Hours: Mon–Fri, 9am–6pm PST
  - Response time badge: "24–48h Turnaround"
- **Right column: Multi-Step Quote Form**

#### Step 1: What Do You Need?
- Service type: Structural Engineering / Architectural Design / MEP Engineering / Cost Estimation / Multiple Services
- Project type: New Construction / Renovation / Addition / Other

#### Step 2: Tell Us About Your Project
- Project location (text input)
- Project size / approximate square footage (number input)
- Brief description (textarea, optional)

#### Step 3: Upload Your Plans
- File dropzone: "Drag & drop your plans here, or click to browse"
- Accepted: PDF, DWG, Revit (.rvt), Images (.png, .jpg)
- Max file size: 50MB
- Multiple files allowed

#### Step 4: Your Details
- Full Name (required)
- Email (required)
- Phone (required)
- Company / Organization (optional)
- Preferred contact method: Email / Phone
- Timeline: ASAP / 1-2 weeks / 1 month / Flexible
- Submit button: "Get My Free Quote"

### Section 3: What Happens Next
- **Background:** `#F4F7FA`
- **Layout:** 3-step visual: "1. We Review → 2. We Quote → 3. We Deliver"
- **Purpose:** Reduces anxiety after form submission

### Section 4: Map / Location
- **Background:** `#FFFFFF`
- Embedded map (if applicable) or service area text

---

## CONTENT VOLUME RULE (Homepage Only)

| Section | Max Words | Max Elements |
|---------|-----------|--------------|
| Hero | 25 words | 1 H1, 1 sentence, 2 buttons |
| Services Preview | 15 words total | 3 cards, 3 one-liners |
| Process | 30 words total | 6 steps, 6 micro-descriptions |
| Stats | 8 words total | 4 numbers, 4 labels |
| Software | 10 words total | Logo grid, no paragraphs |
| Testimonials | 60 words total | 3 quotes |
| CTA Banner | 20 words | 1 H2, 1 sentence, 1 button |

**Total homepage body copy: ~150 words. Let design, animation, and whitespace do the work.**

---

## AI-GENERATED ASSET REQUIREMENTS (via anno banana)

| Asset | Placement | Description Prompt |
|-------|-----------|-------------------|
| Hero Isometric Building | Homepage Hero | "Isometric 3D wireframe of a modern commercial building showing structural steel frame, foundation, and MEP systems. Dark navy background #0B1B2E. White and light blue #4A8AB8 wireframe lines. Technical, precise, engineering visualization style. No text." |
| Structural Detail | Structural page | "Technical blueprint detail of a steel beam connection. Dark background. White and blue lines. Engineering drawing style." |
| Architectural Render | Architectural page | "Architectural elevation drawing of a modern residential building. Clean lines. Blueprint aesthetic on dark background." |
| MEP Diagram | MEP page | "MEP coordination drawing showing HVAC ducts, electrical conduits, and plumbing pipes in a building section. Technical, clean, dark background with blue lines." |
| Process Illustration 1-6 | Process timeline | "Minimal technical icons representing: evaluation, analysis, foundation, framing, documentation, review. Blueprint line style." |
| Before/After Foundation | Structural "Cost of Wrong" | "Split image: left side shows cracked, failing foundation sketch. Right side shows proper engineered foundation. Blueprint technical drawing style." |

---

## NAVIGATION STRUCTURE

```
[LOGO]          Services ▼    Process    Projects    About    Contact          [Get a Quote]  (747) 223-7815
                 ├── Structural Engineering
                 ├── Architectural Design
                 ├── MEP Engineering
                 └── Estimation Services

Mobile: Hamburger → Full-screen overlay with large links + phone CTA at bottom
```

---

## URL ARCHITECTURE

| Page | URL | Canonical |
|------|-----|-----------|
| Homepage | `/` | `https://biddimensions.us/` |
| Structural Engineering | `/services/structural-engineering` | `https://biddimensions.us/services/structural-engineering` |
| Architectural Design | `/services/architectural-design` | `https://biddimensions.us/services/architectural-design` |
| MEP Engineering | `/services/mep-engineering` | `https://biddimensions.us/services/mep-engineering` |
| Contact / Quote | `/contact` | `https://biddimensions.us/contact` |
