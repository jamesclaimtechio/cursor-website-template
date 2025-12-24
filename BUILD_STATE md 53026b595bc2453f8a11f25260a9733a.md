# BUILD_STATE.md

<aside>
📋

**Purpose:** This document defines the complete file structure, schemas, and component specs for the Website Content Framework. Use this as the source of truth when building in Cursor.

</aside>

---

## 🔄 Agent Workflow

The framework operates through a three-stage workflow controlled by `project.state.ts`:

```
┌─────────────────────────────────────────────────┐
│  1. SETUP AGENT                                 │
│  Mode: "setup"                                  │
│                                                 │
│  • Collect business info (name, tagline)       │
│  • Configure contact & social links            │
│  • Set brand colors & typography               │
│  • Define navigation structure                 │
│                                                 │
│  Writes to:                                     │
│  ├─ site.config.ts                             │
│  ├─ theme.config.ts                            │
│  └─ project.state.ts (mode: "build")           │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  2. CONTENT WIZARD                              │
│  Mode: "build"                                  │
│  Trigger: "add page" or content request        │
│                                                 │
│  • Identify page type (Landing, About, etc.)   │
│  • Collect content for each section            │
│  • Gather SEO metadata                         │
│  • Show preview for approval                   │
│  • Get explicit "yes" before building          │
│                                                 │
│  Output: Approved content plan                 │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  3. PAGE BUILDER                                │
│  Mode: "build"                                  │
│  Trigger: Content approved                     │
│                                                 │
│  • Create page file in src/app/                │
│  • Generate metadata (SEO)                     │
│  • Assemble sections (Hero, Features, etc.)   │
│  • Add schema markup (JSON-LD)                 │
│  • ONLY use pre-built section components      │
│                                                 │
│  Output: Working page at /route                │
└─────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
website-framework/
├── .cursor/
│   └── rules/                    # Cursor-specific rules
│       └── .cursorrules          # Main rules file with Task Router
├── docs/
│   └── agents/                   # Agent instruction files
│       ├── setup-agent.md        # Onboarding flow instructions
│       ├── content-wizard.md     # Content planning instructions  
│       └── page-builder.md       # Page assembly instructions
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Homepage (Landing template)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog index
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Blog post template
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   │   ├── sections/             # Section components
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Team.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                   # Base UI components (shadcn)
│   │   └── layout/               # Layout components
│   │       ├── Header.tsx
│   │       ├── Navigation.tsx
│   │       └── Container.tsx
│   ├── config/
│   │   ├── project.state.ts      # Track setup/build mode & completion
│   │   ├── site.config.ts        # Site-level config
│   │   ├── theme.config.ts       # Design tokens
│   │   └── seo.config.ts         # SEO defaults
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   └── styles/
│       └── globals.css           # Global styles + Tailwind
├── public/
│   ├── images/
│   └── fonts/
├── content/                      # Content files (optional)
│   └── pages/
├── tailwind.config.ts
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Config Schemas

### project.state.ts

**Purpose:** Tracks setup progress and controls AI agent behavior.

```tsx
export const projectState = {
  version: string;           // "1.0.0" - Framework version
  mode: "setup" | "build";   // Current operational mode
  setupComplete: boolean;    // Has initial setup been completed?
  siteConfigured: boolean;   // Is site.config.ts populated?
  themeConfigured: boolean;  // Is theme.config.ts populated?
  lastUpdated: string;       // ISO timestamp of last change
}
```

**Default State (Initial):**

```tsx
export const projectState = {
  version: "1.0.0",
  mode: "setup",
  setupComplete: false,
  siteConfigured: false,
  themeConfigured: false,
  lastUpdated: new Date().toISOString(),
}
```

**After Setup Complete:**

```tsx
export const projectState = {
  version: "1.0.0",
  mode: "build",
  setupComplete: true,
  siteConfigured: true,
  themeConfigured: true,
  lastUpdated: "2025-12-17T10:30:00Z",
}
```

---

### site.config.ts

```tsx
export const siteConfig = {
  // Basic Info
  name: string;              // "Acme Corp"
  tagline: string;           // "We build amazing things"
  description: string;       // Meta description default
  
  // Contact
  email: string;
  phone?: string;
  address?: string;
  
  // Social
  social: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
  
  // Branding
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  
  // Navigation
  navigation: {
    label: string;
    href: string;
  }[];
}
```

### theme.config.ts

```tsx
export const themeConfig = {
  // Colors (CSS custom properties)
  colors: {
    primary: string;         // "#2563eb" - Main brand color
    secondary: string;       // "#64748b" - Secondary actions
    accent: string;          // "#f59e0b" - Highlights
    background: string;      // "#ffffff" - Page background
    foreground: string;      // "#0f172a" - Main text
    muted: string;           // "#f1f5f9" - Muted backgrounds
    mutedForeground: string; // "#64748b" - Muted text
    border: string;          // "#e2e8f0" - Border color
  };
  
  // Typography
  fonts: {
    heading: string;         // "Inter" or Google Font name
    body: string;            // "Inter"
  };
  
  // Spacing & Layout
  borderRadius: string;      // "0.5rem" | "0.75rem" | "1rem"
  
  // Effects
  shadow: {
    sm: string;
    md: string;
    lg: string;
  };
}
```

### seo.config.ts

```tsx
export const seoConfig = {
  titleTemplate: string;     // "%s | Acme Corp"
  defaultTitle: string;      // "Acme Corp - We build amazing things"
  defaultDescription: string;
  
  openGraph: {
    type: string;            // "website"
    locale: string;          // "en_US"
    siteName: string;
    defaultImage: string;    // "/og-image.jpg"
  };
  
  twitter: {
    card: string;            // "summary_large_image"
    site?: string;           // "@acmecorp"
  };
}
```

---

## 🎨 Section Component Specs

Each section component follows a consistent pattern:

### Base Props Pattern

```tsx
interface BaseSectionProps {
  id?: string;               // For anchor links
  className?: string;        // Additional classes
  background?: 'default' | 'muted' | 'primary';
}
```

### Hero Section

```tsx
interface HeroProps extends BaseSectionProps {
  headline: string;          // H1, max 60 chars
  subheadline: string;       // Supporting text, max 160 chars
  cta: {
    label: string;           // Button text
    href: string;            // Link destination
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  // Layout is LOCKED per template - no variants allowed
}
```

### Features Section

```tsx
interface FeaturesProps extends BaseSectionProps {
  title: string;             // H2
  subtitle?: string;
  features: {
    icon?: string;           // Lucide icon name
    title: string;           // H3
    description: string;     // 2-3 sentences
    link?: {
      label: string;
      href: string;
    };
  }[];
  // Always displays in 3-column grid - LOCKED for consistency
}
```

### CTA Section

```tsx
interface CTAProps extends BaseSectionProps {
  headline: string;          // H2
  description?: string;      // 1-2 sentences
  cta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}
```

### FAQ Section

```tsx
interface FAQProps extends BaseSectionProps {
  title: string;             // H2
  subtitle?: string;
  items: {
    question: string;
    answer: string;
  }[];
  // Auto-generates FAQPage schema
}
```

### Testimonials Section

```tsx
interface TestimonialsProps extends BaseSectionProps {
  title: string;             // H2
  testimonials: {
    quote: string;
    author: string;
    role?: string;
    company?: string;
    avatar?: string;
    rating?: 1 | 2 | 3 | 4 | 5;
  }[];
  // Always displays in grid layout - LOCKED for consistency
}
```

### Process Section

```tsx
interface ProcessProps extends BaseSectionProps {
  title: string;             // H2
  subtitle?: string;
  steps: {
    number?: number;         // Auto-increments if omitted
    title: string;
    description: string;
    icon?: string;
  }[];
}
```

### Team Section

```tsx
interface TeamProps extends BaseSectionProps {
  title: string;             // H2
  subtitle?: string;
  members: {
    name: string;
    role: string;
    bio?: string;
    image?: string;
    social?: {
      linkedin?: string;
      twitter?: string;
    };
  }[];
}
```

### Footer

```tsx
interface FooterProps {
  // Pulls from siteConfig automatically
  showNewsletter?: boolean;
  columns?: {
    title: string;
    links: {
      label: string;
      href: string;
    }[];
  }[];
}
```

---

## 📄 Default Pages & Routes

These pages are created during initial setup with navigation configured in `site.config.ts`:

| Route       | File Path                          | Template    | Purpose                           |
|-------------|------------------------------------|-------------|-----------------------------------|
| `/`         | `src/app/page.tsx`                 | Landing     | Homepage/main conversion page     |
| `/about`    | `src/app/about/page.tsx`           | About       | Company story & team              |
| `/services` | `src/app/services/page.tsx`        | Services    | Service offerings overview        |
| `/blog`     | `src/app/blog/page.tsx`            | Blog Index  | List of blog posts                |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx`  | Blog Post   | Individual article (dynamic)      |
| `/contact`  | `src/app/contact/page.tsx`         | Contact     | Contact form & info               |

**Notes:**
- All routes auto-generate from folder structure (Next.js App Router)
- Blog uses `[slug]` for dynamic routes (one template, many posts)
- Additional pages can be added via Content Wizard

---

## 📄 Page Template Specs

### Landing Page

**Route:** `/`

**Required Sections:** Hero, Features, CTA

**Optional Sections:** Testimonials, Process, FAQ

**Schema:** Organization or LocalBusiness

### About Page

**Route:** `/about`

**Required Sections:** Hero (story variant), Team

**Optional Sections:** Process (timeline), CTA

**Schema:** AboutPage

### Services Page

**Route:** `/services`

**Required Sections:** Hero, Features (as services)

**Optional Sections:** Process, Testimonials, FAQ, CTA

**Schema:** Service

### Blog Post

**Route:** `/blog/[slug]`

**Required Elements:** Title, Meta, Body content, Author

**Optional Elements:** Related posts, CTA

**Schema:** Article

### Contact Page

**Route:** `/contact`

**Required Elements:** Contact info, Form

**Optional Sections:** FAQ, Map

**Schema:** ContactPage

---

## 🔒 Enforcement Rules

### Template Lock (ONE Template Per Page Type)

Each page type has **exactly ONE template structure**. All instances of that page type MUST follow the same layout.

| Page Type | Fixed Template | No Variations Allowed |
| --- | --- | --- |
| **Blog Post** | Title → Meta → Hero Image → Body → Author → Related | All blog posts identical structure |
| **Service Page** | Hero → Features → Process → Testimonials → CTA | All services identical structure |
| **Landing Page** | Hero → Features → Social Proof → CTA | One homepage template |
| **About Page** | Hero → Story → Team → CTA | One about template |
| **Contact Page** | Hero → Form → FAQ → Map | One contact template |

```tsx
// ❌ WRONG - Blog post with different structure
// Blog A: Hero → Body → CTA
// Blog B: Body → Author → Related → CTA

// ✅ CORRECT - All blogs use same structure
// Blog A: Title → Hero Image → Body → Author → Related
// Blog B: Title → Hero Image → Body → Author → Related
// Blog C: Title → Hero Image → Body → Author → Related
```

**Why:** Consistency builds trust. Visitors learn your site's patterns. SEO benefits from predictable structure.

---

### Section Design Lock (Identical Rendering)

Each section component renders **exactly the same way** every time it's used. Only the **content** changes — never the design, layout, or structure.

| Section | Locked Design | What Changes |
| --- | --- | --- |
| **Hero** | Centered layout, fixed spacing, button style | Headline, subheadline, CTA text |
| **Features** | 3-column grid, icon above title, card style | Titles, descriptions, icons |
| **CTA** | Full-width, primary background, centered | Headline, button text, link |
| **FAQ** | Accordion style, consistent spacing | Questions and answers |
| **Testimonials** | Grid layout, quote card style | Quotes, author info |
| **Process** | Numbered steps, vertical flow | Step titles and descriptions |
| **Footer** | Fixed column layout, link style | Link labels, social links |

```tsx
// ❌ WRONG - Features with different layouts
// Page A: <Features columns={3} />
// Page B: <Features columns={2} />

// ✅ CORRECT - All Features use locked config
// Page A: <Features /> → always 3 columns
// Page B: <Features /> → always 3 columns
```

**Implementation:** Remove layout variant props from components. Hard-code design decisions.

```tsx
// Section components should NOT expose layout options
interface FeaturesProps {
  title: string;
  features: Feature[];
  // ❌ NO: columns?: 2 | 3 | 4
  // ❌ NO: layout?: 'grid' | 'list'
}
```

**Why:** A visitor should never notice they're on a "different" page. Every Features section feels like the same Features section. Every CTA looks like the same CTA. This creates a cohesive, professional feel

---

### Design Token Inheritance

All components MUST use theme variables, never hardcoded values:

```tsx
// ❌ WRONG
<div className="bg-blue-500 text-white">

// ✅ CORRECT  
<div className="bg-primary text-primary-foreground">
```

### Component Usage

Pages MUST be assembled from section components only:

```tsx
// ❌ WRONG - Custom markup
export default function Page() {
  return (
    <div className="hero-thing">
      <h1>Custom Hero</h1>
    </div>
  )
}

// ✅ CORRECT - Section components
export default function Page() {
  return (
    <>
      <Hero headline="..." subheadline="..." cta={...} />
      <Features title="..." features={[...]} />
      <CTA headline="..." cta={...} />
    </>
  )
}
```

### SEO Requirements

Every page MUST have:

- Unique `<title>` (50-60 chars)
- Unique `<meta name="description">` (150-160 chars)
- One `<h1>` tag only
- Proper heading hierarchy (H1 → H2 → H3)
- Schema markup matching page type

---

## 🔗 Related Docs

- 
    
    [.cursorrules Template](BUILD_STATE%20md/cursorrules%20Template%201894b6d0403d4b2d9f6aa6231bc5efd8.md)
    
- 
    
    [Setup Agent](BUILD_STATE%20md/Setup%20Agent%2054b9401ff54c4e75b7f02fb940c5c8fd.md)
    
- 
    
    [Content Wizard](BUILD_STATE%20md/Content%20Wizard%20ce2ec71e236d483aba3fbc5dbe2d67eb.md)
    
- 
    
    [Page Builder](BUILD_STATE%20md/Page%20Builder%20ad25f5cdffae4090b416b884bfece9af.md)
    
- 
    
    [Section Library](BUILD_STATE%20md/Section%20Library%20b4101602d5424da994f2a18f5dfc0b89.md)