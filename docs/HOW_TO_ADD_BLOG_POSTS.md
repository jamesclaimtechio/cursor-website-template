# How to Add Blog Posts - Quick Guide

## ✅ Blog System is Ready!

Your blog is live at:
- **Blog Listing:** `/car-finance-claims/blog`
- **Individual Posts:** `/car-finance-claims/[slug]`

---

## 🚀 Adding a New Blog Post (3 Easy Steps)

### Step 1: Create the Blog Post File

1. Go to: `content/blog/`
2. Create a new file: `your-post-slug.ts`
3. Copy this template:

```typescript
import { BlogPost } from "@/types/blog"

export const yourPostName: BlogPost = {
  slug: "your-post-slug", // Must match filename
  title: "Your Post Title Here",
  excerpt: "A 1-2 sentence summary (50-160 characters ideal)",
  content: `
Write your content here using markdown-style formatting.

## Main Heading

Regular paragraphs go here. Just write naturally.

### Subheading

More content here.

- Bullet point 1
- Bullet point 2
- Bullet point 3

Continue writing...
`,
  author: {
    name: "My Claims Centre",
    role: "Claims Specialists",
  },
  publishedAt: "2025-12-17", // YYYY-MM-DD format
  category: "car-finance-claims", // See categories below
  tags: ["tag1", "tag2", "tag3"], // 3-5 tags
  featured: false, // Set true for homepage
  image: {
    src: "/images/blog/your-image.jpg", // Path to image
    alt: "SEO-optimized alt text with keywords", // 80-100 chars ideal
    width: 1200, // Recommended
    height: 630, // Recommended
  },
  seo: {
    title: "SEO Title (50-60 chars)",
    description: "SEO description (150-160 chars)",
    keywords: ["keyword1", "keyword2", "keyword3"],
  },
  compliance: {
    verified: true, // MUST be true to show
    verifiedBy: "Compliance Team",
    verifiedDate: "2025-12-17",
    sources: [
      "Motor Finance Redress doc - line X",
      "Compliance Guidelines - section Y",
    ],
  },
}
```

### Step 2: Register the Post

Open: `src/lib/blog.ts`

Add your import and add to array:

```typescript
// Add import at top
import { yourPostName } from "@/content/blog/your-post-slug"

// Add to allPosts array
const allPosts: BlogPost[] = [
  whatAreCarFinanceClaims,
  understandingDCAs,
  fcaRedressScheme2026,
  yourPostName, // ← Add here
]
```

### Step 3: That's It!

Your post is now live at:
- `/car-finance-claims/your-post-slug`
- Listed at `/car-finance-claims/blog`

---

## 📋 Field Guide

### **Categories** (Pick One)
```typescript
category: "car-finance-claims"    // General car finance info
category: "dca-claims"            // Specific to DCAs
category: "irresponsible-lending" // Affordability issues
category: "fca-news"              // FCA updates
category: "consumer-rights"       // Rights & legal
category: "guides"                // How-to guides
```

### **Compliance Fields** (Required!)

```typescript
compliance: {
  verified: true,  // MUST be true or post won't show
  verifiedBy: "Compliance Team",
  verifiedDate: "2025-12-17",
  sources: [
    // List where you got your facts
    "Motor Finance Redress doc - line 26",
    "Compliance Guidelines - page 3",
  ],
}
```

**⚠️ Important**: Only `verified: true` posts appear on the site. This ensures compliance.

---

## ✅ Content Rules (Keep It Compliant)

### ✅ DO:
- Use facts from Motor Finance Redress doc
- Use approved CTAs ("Check My Eligibility")
- Reference verified statistics (14M affected, May 2026, etc.)
- Include compliance sources
- Write educational content
- Explain processes clearly

### ❌ DON'T:
- Make up statistics or amounts
- Use prohibited CTAs ("Get Your Refund")
- Guarantee outcomes ("You will get £X")
- Create fake testimonials
- Use false urgency ("Last chance!")
- Promise specific payouts

---

## 🎯 Quick Examples

### Example 1: Educational Post
```typescript
{
  slug: "how-to-check-if-you-had-dca",
  title: "How to Check If You Had a DCA on Your Car Finance",
  category: "guides",
  tags: ["dcas", "how-to", "checking"],
  // ... rest of fields
}
```

### Example 2: News Update
```typescript
{
  slug: "fca-announces-new-timeline",
  title: "FCA Announces Updated Timeline for Redress Scheme",
  category: "fca-news",
  tags: ["fca", "news", "redress scheme"],
  // ... rest of fields
}
```

### Example 3: Lender-Specific
```typescript
{
  slug: "claiming-against-black-horse",
  title: "How to Claim Against Black Horse Finance",
  category: "car-finance-claims",
  tags: ["black horse", "claims", "lenders"],
  // ... rest of fields
}
```

---

## 📊 Content Formatting

### Headings
```markdown
## Main Heading (H2)
### Subheading (H3)
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2
- Bullet point 3
```

### Paragraphs
Just write normally. Leave blank lines between paragraphs.

### Bold Text
```markdown
**This will be bold**
```

---

## 🔍 SEO Optimization

### Good SEO Title:
```
"What Are DCAs? Complete Guide 2025"  ✅ (48 chars)
```

### Bad SEO Title:
```
"DCAs" ❌ (too short)
"Discretionary Commission Arrangements Explained In Detail For UK Consumers" ❌ (too long)
```

### Good Meta Description:
```
"Learn about Discretionary Commission Arrangements in car finance. Find out if you were affected by DCAs from 2007-2021 and how to claim compensation." ✅ (155 chars)
```

---

## 🧪 Testing Your Post

### Before Publishing:

1. **Check Compliance:**
   ```typescript
   import { validateBlogPost } from '@/lib/blog'
   const issues = validateBlogPost(yourPost)
   // Should return empty array []
   ```

2. **Preview Locally:**
   - Start dev server: `npm run dev`
   - Visit: `http://localhost:3000/car-finance-claims/blog`
   - Click your post

3. **Check For:**
   - [ ] Title displays correctly
   - [ ] Excerpt is compelling
   - [ ] Content formats nicely
   - [ ] Tags show up
   - [ ] Related posts appear
   - [ ] Compliance sources visible

---

## 💡 Content Ideas

### Topic Suggestions:

1. **Lender-Specific Guides**
   - "Claiming Against MotoNovo Finance"
   - "Black Horse DCA Claims Guide"
   - "Santander Car Finance Claims"

2. **Process Guides**
   - "What Happens After You Submit a Claim?"
   - "How Long Does a Car Finance Claim Take?"
   - "Understanding the Financial Ombudsman Process"

3. **Legal Updates**
   - "Supreme Court Ruling Explained"
   - "FCA Consultation Results"
   - "New DCA Claim Deadline Announced"

4. **Educational**
   - "What is PCP Finance?"
   - "Hire Purchase vs Personal Contract Purchase"
   - "Understanding APR and Interest Rates"

5. **Case Studies** (Only if verified!)
   - "How the Redress Scheme Will Work"
   - "Understanding Commission Calculations"
   - "What Evidence Do I Need For My Claim?"

---

## 🚨 Compliance Checklist

Before publishing ANY blog post:

- [ ] All facts from Motor Finance Redress doc
- [ ] All stats have sources
- [ ] No unverified claims
- [ ] No specific payout amounts (unless industry average)
- [ ] No guarantees of success
- [ ] Approved CTAs only
- [ ] Compliance fields filled out
- [ ] `verified: true` is set
- [ ] Sources documented

---

## 📂 File Structure

```
content/blog/
├── what-are-car-finance-claims.ts ✅
├── understanding-dcas.ts ✅
├── fca-redress-scheme-2026.ts ✅
└── your-new-post.ts ← Add here

src/lib/
└── blog.ts ← Register here

src/app/car-finance-claims/
├── blog/
│   └── page.tsx (listing)
└── [slug]/
    └── page.tsx (individual post)
```

---

## 🎉 You're Ready!

To add a new post:
1. Create file in `content/blog/`
2. Register in `src/lib/blog.ts`
3. Done! It's live.

**Pro Tip**: Use existing posts as templates. Copy, modify, publish!

---

## 🆘 Troubleshooting

### "My post doesn't appear!"
- Check `compliance.verified` is `true`
- Check slug matches filename
- Check post is registered in `blog.ts`

### "Content looks weird!"
- Use `## ` for headings (with space after ##)
- Leave blank lines between paragraphs
- Use `-` for bullet points (with space after dash)

### "Is this compliant?"
- Check Motor Finance Redress doc for facts
- Check Compliance Guidelines for language
- Run `validateBlogPost()` function
- When in doubt, ask!

---

**Need help? Check existing posts as examples! They're all compliant and ready to copy.** 🚀


