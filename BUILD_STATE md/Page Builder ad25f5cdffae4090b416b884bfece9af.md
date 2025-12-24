# Page Builder

<aside>
📋

**Agent Doc:** This file tells Cursor how to assemble pages from approved content. Copy to `/docs/agents/page-builder.md`

</aside>

# Page Builder

## Purpose

Assemble approved content into pages using ONLY pre-built section components. Enforce design consistency. Generate proper SEO markup.

---

## Trigger

Activated when:

- Content Wizard has approved content
- OR user types `build` with a content plan ready

---

## Pre-Build Checklist

Before writing any code, verify:

- [ ]  Content has been explicitly approved by user
- [ ]  All required section data is present
- [ ]  SEO fields (title, description) are set
- [ ]  Page route/slug is determined

If any missing, return to Content Wizard.

---

## Build Process

### Step 1: Create Page File

Determine route and create file:

```tsx
// For /about page:
// Create: src/app/about/page.tsx

// For blog post with slug "my-first-post":
// Create: src/app/blog/my-first-post/page.tsx
// OR use dynamic route if [slug] exists
```

### Step 2: Generate Metadata

**Always import and use seo.config.ts for consistent formatting:**

```tsx
import { Metadata } from 'next'
import { seoConfig } from '@/config/seo.config'

export const metadata: Metadata = {
  // Use titleTemplate for consistent formatting
  title: '[Approved Title]', // Will be formatted as "[Approved Title] | Site Name"
  description: '[Approved Description]',
  
  // OpenGraph from config
  openGraph: {
    title: '[Approved Title]',
    description: '[Approved Description]',
    type: seoConfig.openGraph.type,
    locale: seoConfig.openGraph.locale,
    siteName: seoConfig.openGraph.siteName,
    images: [seoConfig.openGraph.defaultImage],
  },
  
  // Twitter card from config
  twitter: {
    card: seoConfig.twitter.card,
    site: seoConfig.twitter.site,
  },
}
```

**Example for About Page:**

```tsx
export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission, values, and the team behind Acme Corp.',
  openGraph: {
    title: 'About Us',
    description: 'Learn about our mission, values, and the team behind Acme Corp.',
    type: 'website',
    url: 'https://acmecorp.com/about',
  },
}
```

### Step 3: Assemble Sections

Import ONLY from `@/components/sections`:

```tsx
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { CTA } from '@/components/sections/CTA'
import { FAQ } from '@/components/sections/FAQ'
import { Testimonials } from '@/components/sections/Testimonials'
```

**NEVER create inline JSX for section-level content.**

### Step 4: Build Page Component

```tsx
export default function PageName() {
  return (
    <>
      <Hero 
        headline="[From approved content]"
        subheadline="[From approved content]"
        cta=
          label: "[From approved content]",
          href: "[From approved content]"
        
      />
      
      <Features
        title="[From approved content]"
        features={[
          {
            title: "[Feature 1]",
            description: "[Description 1]",
            icon: "[Suggested icon]"
          },
          // ... more features
        ]}
      />
      
      <CTA
        headline="[From approved content]"
        cta=
          label: "[From approved content]",
          href: "[From approved content]"
        
        background="primary"
      />
    </>
  )
}
```

### Step 5: Generate Schema Markup

**For Next.js App Router, add schema as a Script component:**

```tsx
import Script from 'next/script'

export default function PageName() {
  // Define schema based on page type
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization", // or "FAQPage", "Article", etc.
    // ... schema properties
  }
  
  return (
    <>
      {/* Schema markup */}
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
      
      {/* Page sections */}
      <Hero {...} />
      <Features {...} />
    </>
  )
}
```

**Schema Templates by Page Type:**

**Landing/Home Page (Organization):**
```tsx
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "logo": siteConfig.logo.src,
  "contactPoint": {
    "@type": "ContactPoint",
    "email": siteConfig.email,
    "telephone": siteConfig.phone,
    "contactType": "Customer Service"
  },
  "sameAs": [
    siteConfig.social.twitter,
    siteConfig.social.linkedin,
    siteConfig.social.facebook,
  ].filter(Boolean)
}
```

**FAQ Page:**
```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
}
```

**Blog Post (Article):**
```tsx
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": heroImage,
  "datePublished": publishDate,
  "dateModified": modifiedDate,
  "author": {
    "@type": "Person",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": siteConfig.name,
    "logo": {
      "@type": "ImageObject",
      "url": siteConfig.logo.src
    }
  }
}
```

**Service Page:**
```tsx
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": serviceDescription,
  "provider": {
    "@type": "Organization",
    "name": siteConfig.name
  },
  "areaServed": "Worldwide",
  "serviceType": serviceCategory
}
```

---

## Section Background Patterns

Alternate backgrounds for visual rhythm:

```tsx
<Hero background="default" />        // White/light
<Features background="muted" />      // Gray/subtle
<Testimonials background="default" />
<CTA background="primary" />         // Brand color
```

---

## Component Prop Reference

Always check BUILD_STATE.md for exact prop interfaces. Quick reference:

| Section | Required Props | Optional Props |
| --- | --- | --- |
| Hero | headline, subheadline, cta | secondaryCta, image |
| Features | title, features[] | subtitle |
| CTA | headline, cta | description, secondaryCta, background |
| FAQ | title, items[] | subtitle |
| Testimonials | title, testimonials[] | — |
| Process | title, steps[] | subtitle |
| Team | title, members[] | subtitle |

**Note:** Layout variants (columns, layout, style) are LOCKED. All instances of a section render identically.

---

## Post-Build

After page is created:

```
✅ Page built successfully!

**Created:** src/app/[route]/page.tsx
**URL:** /[route]

**Sections used:**
- Hero
- Features  
- CTA

**SEO:**
- Title: [title]
- Description: [description]
- Schema: [type]

You can view the page at http://localhost:3000/[route]

What would you like to do next?
- Add another page
- Edit this page's content
- Move to a different page
```

---

## Error Handling

**If section component doesn't exist:**

```
⚠️ The content requires a [SectionName] component that doesn't exist in the framework.

Options:
1. Remove this section and use available alternatives
2. Request an override to create a custom component (not recommended)

Which would you prefer?
```

**If content doesn't fit component props:**

```
⚠️ The content doesn't quite fit the [Section] component structure.

Issue: [specific problem]

I can:
1. Adjust the content to fit
2. Split into multiple sections
3. Go back to Content Wizard to restructure

What works best?
```

---

## Forbidden Actions

❌ Creating `<div>` or `<section>` tags with custom layouts

❌ Using Tailwind classes not derived from theme tokens

❌ Hardcoding colors, fonts, or spacing

❌ Skipping metadata generation

❌ Building without approved content

❌ Modifying existing section components