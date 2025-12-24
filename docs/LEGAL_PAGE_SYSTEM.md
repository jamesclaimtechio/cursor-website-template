# 📄 Legal Page System - Extended Markdown

**Created:** December 18, 2024  
**Status:** ✅ Complete and Working  
**Build:** 26 pages compiled successfully

---

## 🎯 Overview

A content-driven system for legal/compliance pages using **extended markdown** with custom block syntax. Similar to the blog system but with specialized design components.

---

## 🏗️ Architecture

```
src/types/legal.ts              → Type definitions
src/components/legal/blocks.tsx → Reusable block components
src/lib/legal-parser.tsx        → Markdown parser with custom blocks
src/lib/legal.ts                → Helper functions
src/content/legal/*.ts          → Content files (markdown)
src/app/legal/[slug]/page.tsx   → Dynamic route
```

---

## 📝 Custom Block Syntax

### InfoBox

```markdown
:::infobox[blue]
This is important information in a blue box.
:::

:::infobox[green]
Success message in a green box.
:::

:::infobox[amber]
Warning in an amber box.
:::
```

**Variants:** `blue`, `green`, `amber`, `gray`, `purple`

---

### Warning Box

```markdown
:::warning
You must exercise these rights within 6 months.
:::

:::warning Important Notice
This is a warning with a custom title.
:::
```

---

### Indent Section (Blue Border)

```markdown
:::indent
This section has the blue left border styling.
Perfect for highlighting key information.
:::
```

---

### Contact Card

```markdown
:::contact
title: My Claims Centre
email: info@myclaimscentre.co.uk
phone: 0800 123 456
address: 123 Example Street, London
:::
```

---

### Company Info Box

```markdown
:::company
:::
```

Automatically displays:
- Trading Name: My Claims Centre
- Legal Entity: SOLVO SOLUTIONS LTD
- Company Number: 14760023
- FCA FRN: 1013195
- Registered Address

---

### Highlight Box (Gradient)

```markdown
:::highlight[blue]
This is a highlighted callout with a gradient background.
:::
```

**Variants:** `blue`, `green`, `amber`, `gray`, `purple`

---

### Example Box

```markdown
:::example Fee Calculation Example
- **Compensation Awarded:** £1,000.00
- **Success Fee (30%):** £300.00
- **VAT (20% on fee):** £60.00
- **You Receive:** £640.00
:::
```

---

### Steps List

```markdown
:::steps
1. First step
2. Second step
3. Third step
:::
```

Renders as numbered steps with circles.

---

### Timeline

```markdown
:::timeline Quick Reference
Successful Referrals: 6 years
Unsuccessful Applications: 2 years
Marketing Data: Until consent withdrawn
:::
```

---

### CTA Box

```markdown
:::cta
title: Ready to Get Started?
description: Check your eligibility today.
buttonText: Check Eligibility
buttonHref: /car-finance-claims
:::
```

---

## 📖 Standard Markdown

Also supports:

- `## Heading 2` - Main section headings (with blue border)
- `### Heading 3` - Subsection headings
- `#### Heading 4` - Minor headings
- `**bold text**` - Bold formatting
- `- bullet points` - Bullet lists
- `1. numbered lists` - Ordered lists

---

## 📁 File Structure

### Content Files

```
src/content/legal/
├── index.ts              → Export all pages
├── privacy.ts            → Privacy Policy
├── terms.ts              → Terms & Conditions
├── fees.ts               → Fee Structure
├── no-win-no-fee.ts      → No Win No Fee Policy
└── complaints.ts         → Complaints Procedure
```

### Example Content File

```typescript
// src/content/legal/example.ts
import { LegalPage } from "@/types/legal"

export const examplePage: LegalPage = {
  slug: "example",
  title: "Example Page",
  lastUpdated: "December 18, 2024",
  metadata: {
    title: "Example Page | My Claims Centre",
    description: "This is an example legal page.",
  },
  content: \`
## Introduction

This is a paragraph of text.

:::infobox[blue]
This is an info box.
:::

## Another Section

- Bullet point 1
- Bullet point 2

:::contact
email: info@myclaimscentre.co.uk
:::
  \`
}
```

---

## 🔗 Adding New Pages

### Step 1: Create Content File

```typescript
// src/content/legal/new-page.ts
import { LegalPage } from "@/types/legal"

export const newPage: LegalPage = {
  slug: "new-page",
  title: "New Page Title",
  lastUpdated: "December 18, 2024",
  metadata: {
    title: "New Page | My Claims Centre",
    description: "Description for SEO.",
  },
  content: \`
## Content here

Your markdown content with custom blocks...
  \`
}
```

### Step 2: Export from Index

```typescript
// src/content/legal/index.ts
export { newPage } from "./new-page"
```

### Step 3: Add to Helper

```typescript
// src/lib/legal.ts
import { newPage } from "@/content/legal/new-page"

const legalPages: LegalPage[] = [
  // ... existing pages
  newPage,
]
```

### Step 4: Build

```bash
npm run build
```

The page will automatically be available at `/legal/new-page`.

---

## 🌐 Routes

| Content File | Route |
|--------------|-------|
| `privacy.ts` | `/legal/privacy` |
| `terms.ts` | `/legal/terms` |
| `fees.ts` | `/legal/fees` |
| `no-win-no-fee.ts` | `/legal/no-win-no-fee` |
| `complaints.ts` | `/legal/complaints` |

---

## 🎨 Block Components

All blocks are in `src/components/legal/blocks.tsx`:

| Component | Block Syntax | Description |
|-----------|--------------|-------------|
| `InfoBox` | `:::infobox[variant]` | Colored info box |
| `WarningBox` | `:::warning` | Amber warning box |
| `IndentSection` | `:::indent` | Blue left-border section |
| `ContactCard` | `:::contact` | Email/phone/address card |
| `HighlightBox` | `:::highlight[variant]` | Gradient callout |
| `ExampleBox` | `:::example` | Example/calculation box |
| `StepsList` | `:::steps` | Numbered process steps |
| `CTABox` | `:::cta` | Call-to-action section |
| `CompanyInfoBox` | `:::company` | Company/regulatory info |
| `Timeline` | `:::timeline` | Timeline/deadlines grid |

---

## 🔧 Customization

### Adding New Block Types

1. Add component to `src/components/legal/blocks.tsx`
2. Add parsing logic to `src/lib/legal-parser.tsx`
3. Update types in `src/types/legal.ts`

### Example: Custom Block

```typescript
// blocks.tsx
export function CustomBox({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="bg-custom p-6 rounded-lg my-6">
      {title && <h4 className="font-bold mb-2">{title}</h4>}
      <div>{children}</div>
    </div>
  )
}

// legal-parser.tsx (in the switch statement)
case "custom":
  elements.push(
    <CustomBox key={blockKey} title={inlineTitle}>
      {renderBlockContent(blockContent)}
    </CustomBox>
  )
  break
```

Then use in content:

```markdown
:::custom My Custom Title
Content here
:::
```

---

## 📊 Comparison: Old vs New

### Old Approach (TSX Components)

```tsx
// src/app/privacy/page.tsx
<LegalPageLayout title="Privacy Policy" lastUpdated="...">
  <LegalSection heading="Introduction">
    <p>Content here...</p>
  </LegalSection>
  <div className="bg-blue-50 p-6 rounded-lg">
    <p>Info box content...</p>
  </div>
</LegalPageLayout>
```

**Pros:** Full control  
**Cons:** Verbose, hard to maintain, not reusable

### New Approach (Extended Markdown)

```typescript
// src/content/legal/privacy.ts
content: \`
## Introduction

Content here...

:::infobox[blue]
Info box content...
:::
\`
```

**Pros:** Concise, maintainable, reusable, consistent  
**Cons:** Limited to defined blocks (by design)

---

## 🚀 Migration Guide

To migrate existing pages to the new system:

1. Create content file in `src/content/legal/`
2. Convert TSX to markdown with custom blocks
3. Add to `src/lib/legal.ts` array
4. Test at `/legal/[slug]`
5. Optionally redirect old routes

---

## 🔄 Keeping Old Pages

Currently, both systems coexist:

- `/privacy` → Old TSX page
- `/legal/privacy` → New markdown page

You can:
1. Keep both (useful for A/B testing)
2. Redirect old to new
3. Delete old pages once satisfied

---

## 📋 Quick Reference

### Available Blocks

```markdown
:::infobox[blue|green|amber|gray|purple]
:::warning [optional title]
:::indent
:::contact
:::company
:::highlight[blue|green|amber|gray|purple]
:::example [optional title]
:::steps
:::timeline [optional title]
:::cta
```

### Standard Markdown

```markdown
## Heading 2 (main sections)
### Heading 3 (subsections)
#### Heading 4 (minor)

**bold text**

- bullet list

1. numbered list
```

---

## ✅ Checklist for New Pages

- [ ] Create content file in `src/content/legal/`
- [ ] Set `slug`, `title`, `lastUpdated`
- [ ] Set `metadata.title` and `metadata.description`
- [ ] Write content with markdown and blocks
- [ ] Export from `src/content/legal/index.ts`
- [ ] Add to array in `src/lib/legal.ts`
- [ ] Run `npm run build` to verify
- [ ] Test in browser at `/legal/[slug]`

---

## 🎉 Benefits

1. **Consistency** - All legal pages use same design language
2. **Maintainability** - Content separate from presentation
3. **Reusability** - Block components shared across pages
4. **Familiar Pattern** - Same as your blog system
5. **Type Safety** - TypeScript ensures correct structure
6. **SEO Ready** - Metadata properly configured
7. **Static Generation** - Fast page loads

---

**Happy writing!** 📝


