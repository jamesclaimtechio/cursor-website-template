# SEO Content Engine

**Research-backed, compliance-safe content system for high-quality SEO content at scale.**

---

## Quick Start

```typescript
// Import what you need
import { 
  getKeywordData,
  validateSEOCompliance,
  getInternalLinkingSuggestions
} from "@/seo"

// 1. Research keyword
const keyword = getKeywordData("black horse finance claims")
console.log(keyword.serp.peopleAlsoAsk) // Questions to include

// 2. Create content (with Cursor's help)
// Tell Cursor: "Create post about [keyword]"

// 3. Validate before publishing
const validation = validateSEOCompliance(yourBlogPost)
console.log(`Score: ${validation.score}/100`)

// 4. Check if ready to publish
if (validation.score >= 70) {
  console.log("✅ Ready to publish!")
}
```

---

## System Structure

```
src/seo/
├── types/seo.ts                    # TypeScript interfaces
├── data/
│   ├── keywords.ts                 # 20+ researched keywords
│   └── topic-clusters.ts           # Content hierarchy
├── config/
│   └── seo-rules.config.ts         # Validation rules
├── utils/
│   ├── content-validator.ts        # Main validator
│   ├── content-analyzer.ts         # Metrics analysis
│   └── keyword-matcher.ts          # Keyword utilities
└── index.ts                        # Central exports
```

---

## What It Does

### 1. Keyword Research Database (`data/keywords.ts`)
- 20+ pre-researched keywords with search volume, difficulty, intent
- "People Also Ask" questions from SERPs
- Competitor analysis
- Related keyword suggestions

### 2. Content Validation (`utils/content-validator.ts`)
- Automated SEO scoring (0-100)
- Checks metadata, content quality, linking, compliance, readability
- Identifies specific issues with recommendations
- Ensures publish-readiness (70+ score)

### 3. Topic Clusters (`data/topic-clusters.ts`)
- Content hierarchy (pillar → supporting content)
- Internal linking strategy
- Authority building roadmap

### 4. Keyword Matching (`utils/keyword-matcher.ts`)
- Find best keyword for content
- Suggest related keywords
- Identify content gaps
- Quick win opportunities

---

## Common Use Cases

### Find Content Opportunities
```typescript
import { getUntargetedKeywords, getQuickWins } from "@/seo"

// See what keywords need content
const gaps = getUntargetedKeywords()
console.log(`${gaps.length} content opportunities`)

// Get easy wins (low difficulty, good volume)
const quickWins = getQuickWins(10)
```

### Get Keyword Strategy
```typescript
import { getKeywordData, getKeywordStrategy } from "@/seo"

const keyword = getKeywordData("santander claims")
const strategy = getKeywordStrategy(keyword)

console.log(`Approach: ${strategy.approach}`)
console.log(`Word count: ${strategy.targetWordCount.min}-${strategy.targetWordCount.max}`)
console.log(`Tips:`, strategy.tips)
```

### Validate Content
```typescript
import { validateSEOCompliance, getValidationSummary } from "@/seo"

const validation = validateSEOCompliance(blogPost)
console.log(getValidationSummary(validation))

// Output:
// SEO Score: 87/100 (B)
// ✅ Ready to publish
// 
// Breakdown:
//   Metadata: 90/100
//   Content: 85/100
//   ...
```

### Get Internal Link Suggestions
```typescript
import { getInternalLinkingSuggestions } from "@/seo"

const suggestions = getInternalLinkingSuggestions("black-horse-refund")
suggestions.forEach(link => {
  console.log(`Link to: ${link.title}`)
  console.log(`Reason: ${link.reason}`)
})
```

---

## Key Exports

### Data
- `keywordDatabase` - All researched keywords
- `topicClusters` - Content hierarchy

### Functions: Keyword Research
- `getKeywordData(keyword)` - Get research for specific keyword
- `getUntargetedKeywords()` - Keywords without content
- `getQuickWins(limit)` - Easy keyword opportunities
- `getFeaturedSnippetOpportunities()` - Featured snippet targets
- `getKeywordStats()` - Coverage statistics

### Functions: Content Validation
- `validateSEOCompliance(post)` - Full SEO validation
- `isPublishReady(post)` - Quick check (score 70+)
- `analyzeKeyword(content, keyword)` - Keyword usage analysis
- `analyzeContent(content)` - Content metrics
- `getValidationSummary(validation)` - Human-readable summary

### Functions: Content Strategy
- `findBestKeyword(title, content)` - Match content to keyword
- `getKeywordStrategy(keyword)` - Content approach recommendations
- `getContentGaps(options)` - Identify missing content
- `findClusterBySlug(slug)` - Find content's cluster
- `getInternalLinkingSuggestions(slug)` - Linking recommendations

### Functions: Topic Clusters
- `getClusterContent(clusterName)` - All content in cluster
- `getPillarPageForContent(slug)` - Find pillar page
- `getRelatedContent(slug, limit)` - Related posts
- `getClusterStats()` - Cluster coverage stats

---

## Scoring System

**SEO Score Breakdown:**
- Metadata (25%): Title, description, keywords
- Content (30%): Length, structure, keyword usage
- Linking (15%): Internal & external links
- Compliance (20%): FCA rules, verified claims
- Readability (10%): Sentence length, grade level

**Grading:**
- 90-100 (A): Excellent, publish immediately
- 80-89 (B): Very good, minor tweaks possible
- 70-79 (C): Good enough to publish
- 60-69 (D): Needs work
- 0-59 (F): Not ready

**Publish threshold: 70+**

---

## Workflow

### 1. Research
```typescript
import { getKeywordData } from "@/seo"
const keyword = getKeywordData("your topic")
// Note: volume, difficulty, PAA questions, word count target
```

### 2. Create
Tell Cursor: "Create blog post about [keyword]"
- Cursor reads keyword data
- Generates SEO-optimized content
- Includes PAA questions
- Adds internal links
- Ensures compliance

### 3. Validate
```typescript
import { validateSEOCompliance } from "@/seo"
const validation = validateSEOCompliance(post)
// Fix errors if score < 70
```

### 4. Publish
- Mark keyword as targeted in `keywords.ts`
- Update status in `topic-clusters.ts`
- Track performance in Search Console

---

## Integration with Blog System

The SEO system is integrated with `src/lib/blog.ts`:

```typescript
import { validatePostSEO, checkPublishReady, getSEOSummary } from "@/lib/blog"

// Validate specific post
const validation = validatePostSEO("post-slug")

// Check if ready to publish
const ready = checkPublishReady("post-slug")

// Get SEO scores for all posts
const summary = getSEOSummary()
```

---

## Maintenance

### Quarterly (Every 3 months)
- [ ] Update search volumes in `keywords.ts`
- [ ] Refresh PAA questions from SERPs
- [ ] Update competitor analysis
- [ ] Set `lastResearched` dates

### When Adding Keywords
1. Research (volume, difficulty, SERP features)
2. Add to `keywords.ts` with all fields
3. Add to appropriate topic cluster
4. Set `lastResearched` to today

### When Publishing Content
1. Validate with `validateSEOCompliance()`
2. Ensure score is 70+
3. Mark keyword as `targetedBy: "slug"` in `keywords.ts`
4. Update status to "published" in `topic-clusters.ts`

---

## Documentation

- **Full Guide:** `/docs/SEO_CONTENT_ENGINE.md` (300+ lines, comprehensive)
- **Quick Reference:** `/docs/SEO_QUICK_REFERENCE.md` (one-page cheat sheet)
- **Setup Guide:** `/docs/SEO_SETUP_COMPLETE.md` (what you just built)

---

## Examples

### Example 1: Finding Content to Write
```typescript
import { getContentOpportunities } from "@/seo"

const opportunities = getContentOpportunities()
opportunities.forEach(k => {
  console.log(`${k.keyword} - ${k.searchVolume}/mo - Priority ${k.priority}`)
})
```

### Example 2: Creating Optimized Content
```
User → Cursor: "Create blog post about Santander car finance claims"

Cursor:
1. Reads keywords.ts → "santander car finance claims"
2. Notes: 1,600 volume, difficulty 3, commercial intent
3. Sees PAA questions to include
4. Generates 1,800 word post
5. Includes all PAA questions as H2 sections
6. Adds 5 internal links from topic-clusters.ts
7. Ensures compliance
8. Validates: Score 85/100 ✅
```

### Example 3: Validating All Posts
```typescript
import { getAllPosts } from "@/lib/blog"
import { validateSEOCompliance } from "@/seo"

getAllPosts().forEach(post => {
  const validation = validateSEOCompliance(post)
  console.log(`${post.slug}: ${validation.score}/100 (${validation.grade})`)
  
  if (validation.score < 70) {
    console.log("Issues:", validation.errors)
  }
})
```

---

## Pro Tips

1. **Always target a keyword** - Don't write without checking `keywords.ts` first
2. **Include PAA questions** - They're featured snippet gold
3. **Hit word count targets** - Based on keyword difficulty
4. **Link strategically** - Use topic clusters for internal linking
5. **Validate before publishing** - Fix issues before they go live
6. **Track performance** - Update keyword data quarterly

---

## Support

**Questions?**
- Check `/docs/SEO_CONTENT_ENGINE.md` for detailed guide
- Review code comments in this folder
- Check `.cursorrules` for workflow

**Need to modify?**
- Keywords: Edit `data/keywords.ts`
- Rules: Edit `config/seo-rules.config.ts`
- Clusters: Edit `data/topic-clusters.ts`
- Validation logic: Edit `utils/content-validator.ts`

---

**Built for:** Research-backed, compliant, high-ranking content at scale  
**Maintained by:** Your team, quarterly updates  
**Integrated with:** Blog system, compliance rules, Cursor AI  

🚀 **Ready to create SEO gold!**


