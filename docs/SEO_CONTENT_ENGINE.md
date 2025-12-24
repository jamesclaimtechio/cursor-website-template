# SEO Content Engine Documentation

**Complete guide to research-backed, compliant content creation**

---

## 📚 Table of Contents

1. [What Is This?](#what-is-this)
2. [System Architecture](#system-architecture)
3. [Quick Start](#quick-start)
4. [Keyword Research Database](#keyword-research-database)
5. [Content Validation](#content-validation)
6. [Topic Clusters](#topic-clusters)
7. [Creating Content with SEO](#creating-content-with-seo)
8. [Maintenance & Updates](#maintenance--updates)
9. [CLI Commands](#cli-commands)
10. [Troubleshooting](#troubleshooting)

---

## What Is This?

The **SEO Content Engine** is a comprehensive system that combines:

- ✅ **Keyword research data** - What people are actually searching for
- ✅ **Search intent mapping** - What type of content searchers expect
- ✅ **Competitor analysis** - What's ranking now and what gaps exist
- ✅ **Content validation** - Automated SEO + compliance checks
- ✅ **Topic clusters** - Content hierarchy for authority building
- ✅ **Internal linking** - Automated suggestions for linking strategy

**It ensures every piece of content is:**
1. Targeting real search demand
2. Optimized for search engines
3. Fully compliant with FCA regulations
4. Part of a cohesive content strategy

---

## System Architecture

```
src/seo/
├── types/seo.ts                    # TypeScript interfaces
├── data/
│   ├── keywords.ts                 # 20+ researched keywords with SERP data
│   └── topic-clusters.ts           # Content hierarchy & linking strategy
├── config/
│   └── seo-rules.config.ts         # SEO validation rules
├── utils/
│   ├── content-validator.ts        # Main validation engine
│   ├── content-analyzer.ts         # Content metrics analysis
│   └── keyword-matcher.ts          # Keyword matching & suggestions
└── index.ts                        # Central exports
```

**How it works together:**

1. **Research Phase**: Keyword data in `keywords.ts` guides what to write
2. **Planning Phase**: Topic clusters in `topic-clusters.ts` show how content connects
3. **Creation Phase**: Cursor reads keyword data + SEO rules to generate optimized content
4. **Validation Phase**: `content-validator.ts` scores content before publishing
5. **Publishing Phase**: Only content scoring 70+ publishes

---

## Quick Start

### Step 1: Find a Keyword to Target

```typescript
import { getUntargetedKeywords, getQuickWins } from "@/seo"

// Get all keywords we haven't targeted yet
const untargeted = getUntargetedKeywords()
console.log(`${untargeted.length} content opportunities`)

// Get easy wins (low difficulty, good volume)
const quickWins = getQuickWins()
console.log("Quick win keywords:", quickWins)
```

### Step 2: Research the Keyword

```typescript
import { getKeywordData, getKeywordStrategy } from "@/seo"

const keyword = getKeywordData("black horse finance claims")

console.log(`Keyword: ${keyword.keyword}`)
console.log(`Search Volume: ${keyword.searchVolume}/month`)
console.log(`Difficulty: ${keyword.difficulty}/5`)
console.log(`Intent: ${keyword.intent}`)
console.log(`People Also Ask:`, keyword.serp.peopleAlsoAsk)

// Get content strategy
const strategy = getKeywordStrategy(keyword)
console.log(`Approach: ${strategy.approach}`)
console.log(`Word count: ${strategy.targetWordCount.min}-${strategy.targetWordCount.max}`)
console.log(`Tips:`, strategy.tips)
```

### Step 3: Create Content (with Cursor)

Tell Cursor:
```
Create a blog post about [keyword]. 
Use the SEO system to guide structure and optimization.
```

Cursor will:
1. Read keyword data from `keywords.ts`
2. Note search intent, PAA questions, word count targets
3. Generate content following SEO rules
4. Include internal links from topic clusters
5. Ensure compliance

### Step 4: Validate Before Publishing

```typescript
import { validateSEOCompliance, getValidationSummary } from "@/seo"

const validation = validateSEOCompliance(yourBlogPost)

console.log(getValidationSummary(validation))
// Output:
// SEO Score: 87/100 (B)
// Status: ✅ Ready to publish
// Breakdown:
//   Metadata: 90/100
//   Content: 85/100
//   Linking: 80/100
//   Compliance: 95/100
//   Readability: 85/100
```

---

## Keyword Research Database

Located at: `src/seo/data/keywords.ts`

### Structure

Each keyword includes:

```typescript
{
  keyword: "car finance claims",        // Primary keyword
  searchVolume: 18100,                  // Monthly searches (UK)
  difficulty: 4,                        // 1=easy, 5=very hard
  intent: "commercial",                 // User's search intent
  priority: 1,                          // 1=highest priority
  targetedBy: "slug-of-post",           // Which post targets this (or undefined)
  relatedKeywords: [...],               // Semantic variations
  serp: {
    hasFeaturedSnippet: false,
    peopleAlsoAsk: [...],               // Questions from SERP
    topCompetitors: [...]               // Who's ranking now
  },
  lastResearched: "2025-12-18"
}
```

### Helper Functions

```typescript
// Find keyword by string
const keyword = getKeywordData("black horse claims")

// Get untargeted keywords (content opportunities)
const opportunities = getUntargetedKeywords()

// Get featured snippet opportunities
const snippetOps = getFeaturedSnippetOpportunities()

// Get quick wins (easy, good volume, untargeted)
const quickWins = getQuickWins(10)

// Get statistics
const stats = getKeywordStats()
console.log(`Targeting ${stats.targeted}/${stats.total} keywords (${stats.coveragePercent}%)`)
```

### Maintenance

**Update quarterly:**
- Search volumes (Google Keyword Planner)
- People Also Ask questions (check actual SERPs)
- Competitor analysis (who's ranking now)
- Set `lastResearched` date

**When creating content:**
- Mark keyword as `targetedBy: "your-slug"`
- This prevents duplicate targeting

---

## Content Validation

Located at: `src/seo/utils/content-validator.ts`

### What It Checks

**Metadata (25% of score):**
- Title length (50-60 chars)
- Description length (150-160 chars)
- Keyword in title & description
- No forbidden patterns
- Call-to-action in description

**Content Quality (30% of score):**
- Word count (1000+ minimum, 1500+ recommended)
- Heading structure (exactly 1 H1, 3+ H2s)
- Keyword density (0.5% - 2.5%)
- Keyword placement (H1, first paragraph)
- Proper heading hierarchy

**Linking (15% of score):**
- Internal links (3-10)
- External links (1-5 authoritative sources)
- No generic anchor text ("click here")
- Contextual, keyword-rich anchors

**Compliance (20% of score):**
- `compliance.verified = true`
- No prohibited CTAs
- No unverified claims
- Sources documented

**Readability (10% of score):**
- Average sentence length (10-25 words)
- Average paragraph length (40-150 words)
- Reading level (target: 8th grade)

### Usage

```typescript
import { validateSEOCompliance, isPublishReady } from "@/seo"

// Full validation
const validation = validateSEOCompliance(blogPost)

if (!validation.valid) {
  console.error("Errors:", validation.errors)
  console.warn("Warnings:", validation.warnings)
}

// Quick check
if (isPublishReady(blogPost)) {
  console.log("✅ Ready to publish!")
} else {
  console.log("❌ Needs fixes before publishing")
}
```

### Scoring

- **90-100 (A)**: Excellent, publish immediately
- **80-89 (B)**: Very good, minor optimizations possible
- **70-79 (C)**: Good enough, but could improve
- **60-69 (D)**: Needs work, address warnings
- **0-59 (F)**: Not ready, fix errors first

**Publish threshold: 70+**

---

## Topic Clusters

Located at: `src/seo/data/topic-clusters.ts`

### What Are Topic Clusters?

A **topic cluster** is a content strategy where:
- **1 Pillar Page** = Comprehensive guide on core topic
- **10-20 Supporting Pages** = Deep dives into subtopics
- **All link together** = Creates topical authority

**Example:**

```
Pillar: "Car Finance Claims: Complete Guide"
  ├─ Understanding: "What Are DCAs?"
  ├─ Understanding: "PCP vs HP Claims"
  ├─ Process: "How to Make a Claim"
  ├─ Lender: "Black Horse Claims"
  ├─ Lender: "Santander Claims"
  └─ Legal: "Your Consumer Rights"
```

### Benefits

1. **SEO**: Search engines understand your expertise
2. **User Experience**: Keeps readers engaged
3. **Internal Linking**: Distributes authority
4. **Content Planning**: Clear roadmap for what to write

### Usage

```typescript
import { 
  findClusterBySlug, 
  getPillarPageForContent,
  getInternalLinkingSuggestions 
} from "@/seo"

// Find which cluster your content belongs to
const cluster = findClusterBySlug("black-horse-refund")

// Get pillar page to link to
const pillar = getPillarPageForContent("black-horse-refund")
console.log(`Link to pillar: ${pillar.title}`)

// Get internal linking suggestions
const suggestions = getInternalLinkingSuggestions("black-horse-refund")
suggestions.forEach(link => {
  console.log(`Link to: ${link.title}`)
  console.log(`Reason: ${link.reason}`)
})
```

---

## Creating Content with SEO

### Workflow with Cursor

**1. Choose a keyword:**

```
You: "What content opportunities do we have?"

Cursor: [Runs getContentOpportunities()]
"Here are your top 5 untargeted keywords:
1. Santander car finance claims (1,600 searches/mo, Priority 2)
2. How long do claims take (880 searches/mo, Priority 2)
..."
```

**2. Research the keyword:**

```
You: "Create a blog post about 'santander car finance claims'"

Cursor: [Reads keyword data, sees:]
- Search volume: 1,600/month
- Difficulty: 3/5 (medium)
- Intent: Commercial
- PAA questions: 4 questions to include
- Target word count: 1,500-2,000 words
- Competitors: Santander.co.uk, generic claims sites
```

**3. Cursor generates content:**

Following this structure:
- H1: Includes exact keyword "Santander Car Finance Claims"
- Intro: Keyword in first paragraph
- H2 sections: Include PAA questions
- Word count: 1,800 words (middle of target range)
- Internal links: 5 links to related posts
- External link: 1 link to FCA or gov.uk
- FAQ: All 4 PAA questions answered
- Compliance: All claims sourced from Motor Finance Redress doc

**4. Validate:**

```typescript
const validation = validateSEOCompliance(newPost)
// Score: 85/100 (B)
// ✅ Ready to publish
```

**5. Publish & update:**

```typescript
// In keywords.ts, mark as targeted:
targetedBy: "santander-car-finance-claims"
```

### Content Templates by Intent

**Informational ("what is", "how to"):**
- Word count: 1,000-1,500
- Structure: Definition → Explanation → Examples → FAQs
- CTA: Soft ("Learn more", "Check if you're affected")

**Commercial ("best", "vs", lender-specific):**
- Word count: 1,500-2,000
- Structure: Overview → Benefits → Process → Comparison → CTA
- CTA: Medium ("Check your eligibility", "Start your claim")

**Transactional ("check", "start", "calculator"):**
- Word count: 800-1,200
- Structure: Value prop → How it works → Form/Tool → Trust signals
- CTA: Strong ("Check now", "Start your claim")

---

## Maintenance & Updates

### Quarterly Tasks (Every 3 months)

**Keyword Research:**
- [ ] Update search volumes in `keywords.ts`
- [ ] Check for new PAA questions
- [ ] Update competitor analysis
- [ ] Add newly discovered keywords
- [ ] Update `lastResearched` dates

**Content Performance:**
- [ ] Review Google Search Console data
- [ ] Identify underperforming content (impressions but no clicks)
- [ ] Identify high-impression keywords we rank for but don't target
- [ ] Refresh low-performing content

**Topic Clusters:**
- [ ] Mark new content as "published" in `topic-clusters.ts`
- [ ] Identify cluster gaps (missing supporting content)
- [ ] Update internal linking as new content publishes

### When Adding Keywords

1. Research the keyword (volume, difficulty, SERP features)
2. Add to `keywords.ts` with all fields filled
3. Place in appropriate priority tier
4. Add to `topic-clusters.ts` if part of existing cluster
5. Set `lastResearched` to today's date

### When Publishing Content

1. Validate with `validateSEOCompliance()`
2. Ensure score is 70+ (C or better)
3. Fix any critical errors
4. Mark keyword as `targetedBy: "your-slug"` in `keywords.ts`
5. Update `topic-clusters.ts` status to "published"

---

## CLI Commands

### Useful One-Liners

**Check keyword stats:**
```bash
npm run dev
# Then in your app, import and log:
import { getKeywordStats } from "@/seo"
console.log(getKeywordStats())
```

**Find content opportunities:**
```typescript
import { getContentOpportunities } from "@/seo"
console.table(getContentOpportunities())
```

**Validate all blog posts:**
```typescript
import { allPosts } from "@/lib/blog"
import { validateSEOCompliance } from "@/seo"

allPosts.forEach(post => {
  const validation = validateSEOCompliance(post)
  console.log(`${post.slug}: ${validation.score}/100 (${validation.grade})`)
})
```

**Find untargeted high-volume keywords:**
```typescript
import { getUntargetedKeywords } from "@/seo"
const untargeted = getUntargetedKeywords()
  .filter(k => k.searchVolume > 1000)
console.table(untargeted)
```

---

## Troubleshooting

### "My content scores low (< 70)"

**Check the breakdown:**
```typescript
const validation = validateSEOCompliance(post)
console.log(validation.breakdown)
// Shows which area is dragging score down
```

**Common issues:**

| Low Score Area | Likely Issue | Fix |
|---|---|---|
| Metadata | Title/description wrong length | Adjust to 50-60 chars (title), 150-160 (description) |
| Content | Too short or missing keyword | Add more content, use keyword naturally |
| Linking | Not enough internal links | Add 3-5 links to related posts |
| Compliance | Unverified claims | Check content-rules.config, add sources |
| Readability | Long sentences | Break up sentences, aim for 15-20 words avg |

### "I can't find my keyword in keywords.ts"

**Add it:**

1. Research it (Google Keyword Planner, Google Search)
2. Add entry to `keywords.ts`:

```typescript
{
  keyword: "your new keyword",
  searchVolume: 500,  // From research
  difficulty: 2,
  intent: "informational",
  priority: 3,
  relatedKeywords: ["variation 1", "variation 2"],
  serp: {
    hasFeaturedSnippet: false,
    peopleAlsoAsk: ["question 1", "question 2"],
    topCompetitors: [{ domain: "competitor.com", url: "", strength: "moderate" }]
  },
  lastResearched: "2025-12-18"
}
```

### "Validation says keyword not found in title"

**Your title doesn't include the exact keyword.**

**Fix:**
- Title: "How to Get a Refund from Black Horse" ❌
- Better: "Black Horse Finance Claims: How to Get Your Refund" ✅

### "Content has compliance errors"

**Check `content-rules.config.ts` for prohibited phrases.**

**Common violations:**
- "Guaranteed refund" → Change to "Check if you're eligible"
- "Get your £700 back" → Change to "Average industry payout is £700"
- "Claim now before deadline" → Change to "Check your eligibility today"

---

## Next Steps

### Level 1: Start Using It ✅
- [x] System is set up
- [ ] Create 1-2 posts using SEO system
- [ ] Validate existing posts
- [ ] Fix any low-scoring content

### Level 2: Expand Keyword Database
- [ ] Research 20 more keywords
- [ ] Add to `keywords.ts`
- [ ] Plan content calendar around priority keywords

### Level 3: Automate More
- [ ] Build CLI tool: `npm run seo:research [keyword]`
- [ ] Auto-update search volumes from GSC
- [ ] Content performance dashboard

### Level 4: Advanced Features
- [ ] AI-powered content brief generation
- [ ] Automated competitor analysis
- [ ] Real-time SERP monitoring
- [ ] Content refresh recommendations

---

## Support

**Questions?**
- Check this doc first
- Check code comments in `src/seo/` files
- Check `content-rules.config.ts` for compliance rules
- Check `.cursorrules` for content creation workflow

**Need to update the system?**
- Keywords: Edit `src/seo/data/keywords.ts`
- Rules: Edit `src/seo/config/seo-rules.config.ts`
- Clusters: Edit `src/seo/data/topic-clusters.ts`

---

🎉 **You now have a complete SEO content engine!**

Every piece of content you create will be research-backed, optimized, and compliant.


