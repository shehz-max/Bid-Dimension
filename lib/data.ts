export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: 'Structural' | 'Architectural' | 'MEP' | 'Estimation';
  buildingType: 'Commercial' | 'Residential' | 'Industrial' | 'Multi-Family';
  sqft: string;
  location: string;
  turnaround: string;
  peStamp: boolean;
  image: string;
  summary: string;
  highlights: string[];
  deliverables: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  keywords: string[];
}

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'proj-1',
    slug: 'commercial-mixed-use-tower',
    title: 'Mid-Rise Commercial Mixed-Use Tower',
    category: 'Structural',
    buildingType: 'Commercial',
    sqft: '42,000 sq ft',
    location: 'Los Angeles, CA',
    turnaround: '48 Hours',
    peStamp: true,
    image: '/images/hero-finished-commercial.webp',
    summary:
      'Complete PE-stamped structural framing, lateral seismic analysis, and deep foundation pier engineering for a 6-story commercial development.',
    highlights: [
      'A992 Structural Steel I-Beam Framing',
      'Seismic Moment Frame Connection Specs',
      '100% City Plan Check Approval on 1st Submittal',
    ],
    deliverables: [
      'S-1.0 Foundation & Deep Pier Plan',
      'S-2.0 Superstructure Framing Layout',
      'S-3.0 Structural Steel Connection Schedules',
      'FEA Lateral Seismic Load Calculations',
    ],
  },
  {
    id: 'proj-2',
    slug: 'custom-modern-residential-residence',
    title: 'Custom Modern Hillside Residence',
    category: 'Architectural',
    buildingType: 'Residential',
    sqft: '5,800 sq ft',
    location: 'Austin, TX',
    turnaround: '36 Hours',
    peStamp: true,
    image: '/images/hero-finished-residential.webp',
    summary:
      'Full architectural permit set, Revit 3D BIM coordination, and structural retaining wall calculations for a steep-grade luxury custom home.',
    highlights: [
      'Cantilevered Deck & Retaining Wall Engineering',
      'Revit 3D BIM & Energy Code Integration',
      'Permit Set Approved in 14 Days',
    ],
    deliverables: [
      'A-1.0 Dimensioned Architectural Floor Plans',
      'A-2.0 Building Elevations & Wall Sections',
      'S-1.0 Foundation Footing & Wall Details',
      'Title 24 Energy Calculation Set',
    ],
  },
  {
    id: 'proj-3',
    slug: 'industrial-mep-retrofit-facility',
    title: 'Industrial Logistics Facility MEP Retrofit',
    category: 'MEP',
    buildingType: 'Industrial',
    sqft: '85,000 sq ft',
    location: 'Miami, FL',
    turnaround: '72 Hours',
    peStamp: true,
    image: '/images/mep-coordination.webp',
    summary:
      'Coordinated HVAC ductwork, high-capacity electrical single-line diagrams, and fire sprinkler protection for a distribution hub.',
    highlights: [
      '3D Revit MEP Clash Detection Model',
      '480V Electrical Service SLD & Panel Schedules',
      'Zero Field Interference During Installation',
    ],
    deliverables: [
      'M-1.0 HVAC Ductwork & Air Distribution Layout',
      'E-1.0 Electrical Single-Line Diagram (SLD)',
      'P-1.0 Domestic Water & DWV Piping Riser',
      'Certified MEP Engineering Calculation Book',
    ],
  },
  {
    id: 'proj-4',
    slug: 'multi-family-residential-complex',
    title: '3-Story Multi-Family Housing Complex',
    category: 'Estimation',
    buildingType: 'Multi-Family',
    sqft: '28,500 sq ft',
    location: 'Phoenix, AZ',
    turnaround: '24 Hours',
    peStamp: true,
    image: '/images/hero-steel.webp',
    summary:
      'Detailed material quantity takeoff, structural steel estimation, and timber framing cost analysis for a multi-family developer.',
    highlights: [
      'RSMeans & PlanSwift Automated Takeoff',
      '99.4% Accuracy Against Contractor Bids',
      'Sub-24 Hour Turnaround',
    ],
    deliverables: [
      'Itemized Quantity Takeoff Summary (XLS)',
      'Structural Steel Tonnage Breakdown',
      'Concrete & Rebar Volume Estimates',
      'Material Cost Comparison Matrix',
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-prepare-drawings-for-city-permit-approval',
    title: 'How to Prepare Construction Drawings for 100% City Permit Approval',
    excerpt:
      'Learn the essential steps, plan check checklists, and coordination techniques required to pass municipal building department reviews on your first submittal.',
    category: 'Permit Guidelines',
    readTime: '6 min read',
    publishedAt: 'August 12, 2026',
    author: {
      name: 'PE Engineering Team',
      role: 'Senior Structural Engineers',
      avatar: '/images/logo-dark-bg.png',
    },
    keywords: [
      'city permit approval',
      'permit ready drawings',
      'building plan check',
      'PE stamped plans',
    ],
    content: `
Passing municipal city plan checks on your first submittal saves thousands of dollars in project delays. Building departments look for exact structural calculations, clear dimensioned floor plans, and code compliance references.

### 1. Ensure Full Discipline Coordination
One of the most common causes of city plan check rejections is uncoordinated drawings — where architectural wall locations do not line up with structural framing beams or MEP HVAC ductwork.

Before submitting:
- Cross-reference architectural floor plans with structural framing layouts.
- Verify that load paths transfer cleanly from roof joists down to foundation footings.
- Include General Structural Notes (GSN) specifying building code editions (e.g. IBC 2024 / CBC 2025).

### 2. Verify PE Stamp & Signature Requirements
Most jurisdictions require structural calculations and drawings to bear the seal and signature of a licensed Professional Engineer (PE). Ensure your engineer's stamp includes:
- Active state registration number.
- Expiration date.
- Digital or wet signature depending on local building department guidelines.

### 3. Include Energy Compliance & Title 24 Forms
For both residential and commercial projects, building departments demand certified energy compliance forms alongside your drawing package. Omitting Title 24 or local energy calculations will stall plan check review.
    `,
  },
  {
    slug: 'understanding-pe-stamp-requirements-for-commercial-builds',
    title: 'Understanding PE Stamp Requirements for Commercial & Residential Builds',
    excerpt:
      'When is a Professional Engineer (PE) stamp legally required? Explore state regulations, structural wall removals, and commercial permit laws.',
    category: 'Engineering Standards',
    readTime: '8 min read',
    publishedAt: 'August 10, 2026',
    author: {
      name: 'PE Engineering Team',
      role: 'Licensed Structural Engineers',
      avatar: '/images/logo-dark-bg.png',
    },
    keywords: [
      'PE stamp requirements',
      'licensed structural engineer',
      'commercial building permit',
      'load bearing wall removal',
    ],
    content: `
A Professional Engineer (PE) stamp signifies that building plans and structural calculations have been developed under the direct supervision of a licensed engineer who assumes legal responsibility for structural safety.

### When is a PE Stamp Required?
1. **Commercial New Construction & Tenant Improvements**: Almost all commercial jurisdictions legally mandate PE-stamped structural and MEP drawings.
2. **Structural Wall Removals**: Removing interior walls in residential homes to create open-concept spaces requires a structural engineer to size replacement steel I-beams or engineered timber headers.
3. **Retaining Walls & Steep Slopes**: Retaining walls over 4 feet tall or built on hillside slopes require geotechnical evaluation and PE footing design.
4. **Seismic Retrofits & Moment Frames**: Soft-story residential or commercial retrofits demand licensed lateral force analysis.

### Benefits of Working With Licensed PEs
Beyond city compliance, PE-stamped drawings protect general contractors and building owners against structural settlement, foundation failure, and expensive field re-engineering.
    `,
  },
  {
    slug: 'mep-3d-clash-detection-vs-field-revisions',
    title: 'MEP 3D Clash Detection vs. Costly Field Revisions',
    excerpt:
      'Discover how 3D Revit BIM clash detection eliminates 90% of job site conflicts between HVAC ducts, electrical conduits, and steel framing.',
    category: 'BIM & Technology',
    readTime: '5 min read',
    publishedAt: 'August 08, 2026',
    author: {
      name: 'MEP Technical Team',
      role: 'BIM & System Specialists',
      avatar: '/images/logo-dark-bg.png',
    },
    keywords: [
      'MEP clash detection',
      'Revit 3D BIM',
      'HVAC duct coordination',
      'field change orders',
    ],
    content: `
Building utility systems (HVAC, electrical power, plumbing, and fire protection) account for up to 40% of total commercial construction costs. When ductwork collides with structural steel beams in the field, framing halts and expensive change orders mount.

### What is Automated 3D Clash Detection?
Using Autodesk Revit MEP 3D software, engineers construct a digital twin of the building prior to groundbreaking. Automated algorithms run spatial collision checks:
- **Hard Clashes**: An HVAC main duct physically intersecting a steel beam flange.
- **Soft Clashes**: Insufficient clearance surrounding electrical main switchboards required by the National Electrical Code (NEC).

### The ROI of Early Coordination
Resolving spatial clashes in 3D CAD costs a fraction of field revisions. Contractors receive coordinated single-line drawings and 3D models, ensuring smooth, collision-free trades installation on the job site.
    `,
  },
];
