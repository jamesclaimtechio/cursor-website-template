# Section Library

<aside>
📋

**Reference Doc:** Complete specifications for all section components. Use when building or extending sections.

</aside>

# Section Library

## Overview

All sections inherit from a base interface and use theme tokens for consistent styling.

```tsx
interface BaseSectionProps {
  id?: string                              // Anchor link target
  className?: string                       // Additional classes
  background?: 'default' | 'muted' | 'primary'  // Background style
}
```

---

## 1. Hero Section

**File:** `src/components/sections/Hero.tsx`

**Purpose:** Primary page header with headline, supporting text, and call-to-action.

### Props

```tsx
interface HeroProps extends BaseSectionProps {
  headline: string           // H1, max 60 chars, required
  subheadline: string        // Supporting text, max 160 chars, required
  cta: {
    label: string            // Button text, required
    href: string             // Link destination, required
  }
  secondaryCta?: {
    label: string
    href: string
  }
  image?: {
    src: string
    alt: string              // Required for accessibility
  }
  // Layout is LOCKED - always centered. No variants allowed.
}
```

### Usage

```tsx
<Hero
  headline="Build Websites Without Code"
  subheadline="The AI-powered framework that turns your ideas into professional websites in minutes."
  cta= label: "Get Started Free", href: "/signup" 
  secondaryCta= label: "See Examples", href: "/examples" 
/>
```

### Visual Structure

```
┌─────────────────────────────────────────────┐
│                                             │
│            [Headline - H1]                  │
│         [Subheadline - p]                   │
│                                             │
│     [Primary CTA]  [Secondary CTA]          │
│                                             │
│              [Optional Image]               │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 2. Features Section

**File:** `src/components/sections/Features.tsx`

**Purpose:** Display key features, benefits, or services in a grid.

### Props

```tsx
interface FeaturesProps extends BaseSectionProps {
  title: string              // H2, required
  subtitle?: string          // Supporting text
  features: {
    icon?: string            // Lucide icon name (e.g., "Zap", "Shield")
    title: string            // H3, required
    description: string      // 2-3 sentences, required
    link?: {
      label: string
      href: string
    }
  }[]
  // Always displays in 3-column grid - LOCKED for consistency
}
```

### Usage

```tsx
<Features
  title="Why Choose Us"
  subtitle="Everything you need to build a successful website"
  features={[
    {
      icon: "Zap",
      title: "Lightning Fast",
      description: "Built on Next.js for blazing performance and great SEO."
    },
    {
      icon: "Shield",
      title: "Secure by Default",
      description: "Enterprise-grade security with automatic HTTPS."
    },
    {
      icon: "Palette",
      title: "Fully Customizable",
      description: "Match your brand perfectly with our theming system."
    }
  ]}
/>
```

### Visual Structure

```
┌─────────────────────────────────────────────┐
│              [Title - H2]                   │
│             [Subtitle - p]                  │
│                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │  Icon   │  │  Icon   │  │  Icon   │     │
│  │  Title  │  │  Title  │  │  Title  │     │
│  │  Desc   │  │  Desc   │  │  Desc   │     │
│  │  Link?  │  │  Link?  │  │  Link?  │     │
│  └─────────┘  └─────────┘  └─────────┘     │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 3. CTA Section

**File:** `src/components/sections/CTA.tsx`

**Purpose:** Conversion-focused call-to-action block.

### Props

```tsx
interface CTAProps extends BaseSectionProps {
  headline: string           // H2, required
  description?: string       // 1-2 sentences
  cta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
}
```

### Usage

```tsx
<CTA
  headline="Ready to Get Started?"
  description="Join thousands of businesses already using our platform."
  cta= label: "Start Free Trial", href: "/signup" 
  background="primary"
/>
```

---

## 4. FAQ Section

**File:** `src/components/sections/FAQ.tsx`

**Purpose:** Frequently asked questions with accordion UI. Auto-generates FAQPage schema.

### Props

```tsx
interface FAQProps extends BaseSectionProps {
  title: string              // H2, required
  subtitle?: string
  items: {
    question: string         // Required
    answer: string           // Required, supports markdown
  }[]
}
```

### Usage

```tsx
<FAQ
  title="Frequently Asked Questions"
  items={[
    {
      question: "How long does setup take?",
      answer: "Most users complete setup in under 10 minutes."
    },
    {
      question: "Can I use my own domain?",
      answer: "Yes! Connect any custom domain in your dashboard."
    }
  ]}
/>
```

### Schema Output

Automatically generates:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

---

## 5. Testimonials Section

**File:** `src/components/sections/Testimonials.tsx`

**Purpose:** Social proof through customer quotes.

### Props

```tsx
interface TestimonialsProps extends BaseSectionProps {
  title: string              // H2, required
  testimonials: {
    quote: string            // Required
    author: string           // Required
    role?: string            // e.g., "CEO"
    company?: string         // e.g., "Acme Corp"
    avatar?: string          // Image URL
    rating?: 1 | 2 | 3 | 4 | 5
  }[]
  // Always displays in grid layout - LOCKED for consistency
}
```

### Usage

```tsx
<Testimonials
  title="What Our Customers Say"
  testimonials={[
    {
      quote: "This saved us weeks of development time.",
      author: "Jane Smith",
      role: "CTO",
      company: "TechCorp",
      rating: 5
    }
  ]}
/>
```

---

## 6. Process Section

**File:** `src/components/sections/Process.tsx`

**Purpose:** Show step-by-step process or "how it works".

### Props

```tsx
interface ProcessProps extends BaseSectionProps {
  title: string              // H2, required
  subtitle?: string
  steps: {
    number?: number          // Auto-increments if omitted
    title: string            // Required
    description: string      // Required
    icon?: string            // Lucide icon name
  }[]
}
```

### Usage

```tsx
<Process
  title="How It Works"
  subtitle="Get started in three simple steps"
  steps={[
    {
      title: "Clone the Repo",
      description: "Download the framework from GitHub."
    },
    {
      title: "Configure Your Brand",
      description: "Answer a few questions to set up your theme."
    },
    {
      title: "Add Content & Ship",
      description: "Use our AI assistant to build your pages."
    }
  ]}
/>
```

---

## 7. Team Section

**File:** `src/components/sections/Team.tsx`

**Purpose:** Display team members with photos and bios.

### Props

```tsx
interface TeamProps extends BaseSectionProps {
  title: string              // H2, required
  subtitle?: string
  members: {
    name: string             // Required
    role: string             // Required
    bio?: string             // Short bio
    image?: string           // Photo URL
    social?: {
      linkedin?: string
      twitter?: string
      email?: string
    }
  }[]
}
```

---

## 8. Footer

**File:** `src/components/sections/Footer.tsx`

**Purpose:** Site footer with navigation, social links, legal.

### Props

```tsx
interface FooterProps {
  showNewsletter?: boolean   // Show email signup
  columns?: {
    title: string
    links: {
      label: string
      href: string
    }[]
  }[]
  // Automatically pulls from siteConfig:
  // - Logo
  // - Social links
  // - Copyright
}
```

---

## Adding New Sections

**⚠️ Requires Override Permission**

If a new section is needed:

1. User must explicitly request: `override component-lock`
2. New section MUST:
    - Extend `BaseSectionProps`
    - Use only theme tokens for styling
    - Follow existing naming conventions
    - Include TypeScript interface
    - Be added to this documentation
3. Log in `docs/overrides.log`