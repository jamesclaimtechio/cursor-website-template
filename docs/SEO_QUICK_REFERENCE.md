# SEO Content Engine - Quick Reference

**One-page cheat sheet for creating SEO-optimized content**

---

## 🎯 Before You Write

```typescript
import { getKeywordData, getUntargetedKeywords } from "@/seo"

// Find your keyword
const keyword = getKeywordData("black horse finance claims")

// OR see what's untargeted
const opportunities = getUntargetedKeywords()
```

**Note these:**
- Primary keyword (exact phrase)
- Search volume (guides ambition)
- Difficulty (1-5, guides word count)
- Intent (informational/commercial)
- PAA questions (use as H2 headings)
- Target word count

---

## 📝 Content Structure Template

```markdown
# [Primary Keyword]: [Compelling Extension]
(Example: "Black Horse Finance Claims: Complete Guide 2025")

[Intro paragraph - include primary keyword in first 50 words]

## [PAA Question 1 as H2]
[Answer in 40-100 words]

## [PAA Question 2 as H2]
[Answer in 40-100 words]

## [How to/Process Section]
### Step 1: [Action]
### Step 2: [Action]
### Step 3: [Action]

## [PAA Question 3 as H2]
[Answer]

## [Additional Value Section]
[More detail, examples, tips]

## Frequently Asked Questions
[All PAA questions + answers]

## Related Resources
[3-5 internal links to cluster content]
```

---

## ✅ SEO Checklist (Copy This)

**Metadata:**
- [ ] SEO title: 50-60 chars, includes keyword
- [ ] SEO description: 150-160 chars, includes keyword + CTA
- [ ] Keywords array: 3-8 keywords

**Structure:**
- [ ] Exactly 1 H1 (with primary keyword)
- [ ] 3-7 H2 sections (some from PAA)
- [ ] Proper hierarchy (no H1 → H3 jumps)
- [ ] Target word count met (based on difficulty)

**Content:**
- [ ] Keyword in first paragraph
- [ ] Keyword in 1-2 H2 headings
- [ ] Keyword density 1-2% (5-10 natural occurrences)
- [ ] 2+ bullet lists
- [ ] Bold text for emphasis

**Linking:**
- [ ] 3-5 internal links (check topic-clusters.ts)
- [ ] 1-2 external links (fca.org.uk, gov.uk, etc.)
- [ ] Descriptive anchor text (no "click here")

**Compliance:**
- [ ] No prohibited CTAs ("Get your refund", "Claim now")
- [ ] All claims sourced (Motor Finance Redress)
- [ ] No guarantees or "average payout" claims
- [ ] compliance.verified = true
- [ ] Sources documented

**SEO Extras:**
- [ ] Featured image with keyword-rich alt text
- [ ] FAQ section with PAA questions
- [ ] Reading time: 5-10 min (1,000-2,000 words)

---

## 📊 Word Count Targets

| Difficulty | Min | Recommended |
|------------|-----|-------------|
| 1-2 (Easy) | 1,000 | 1,200-1,500 |
| 3 (Medium) | 1,500 | 1,800-2,000 |
| 4-5 (Hard) | 2,000 | 2,200-2,500 |

---

## 🔗 Internal Linking Strategy

Always link to:
1. **Pillar page** (if this is supporting content)
2. **Related lender posts** (if lender-specific)
3. **Related process posts** (eligibility, how-to)
4. **FCA/regulatory posts** (for credibility)
5. **Service pages** (soft CTA)

Example anchors:
- ✅ "Learn more about [car finance claims](/car-finance-claims)"
- ✅ "Understanding [what DCAs are](/understanding-dcas)"
- ❌ "Click [here](/link)" ← Never use

---

## 🚫 Compliance Quick Hits

**DON'T say:**
- "You will get £700"
- "Guaranteed refund"
- "Get your money back"
- "Claim now before it's too late"
- "Average payout is £700" (unless citing industry data)

**DO say:**
- "Check if you're eligible"
- "Find out if you're affected"
- "The industry average is estimated at £700"
- "No win, no fee" (with link to policy)

---

## 🎯 SEO Metadata Formula

**Title:**
```
[Primary Keyword]: [Value Prop/Year]
"Black Horse Finance Claims: Complete Guide 2025"
```

**Description:**
```
[What it is] [Who it's for] [Key benefit] [CTA]
"Find out if you're eligible for Black Horse finance compensation. Learn about DCAs, the claims process, and timelines. Check your eligibility today."
```

---

## 🔍 Quick File Locations

- **Keywords:** `src/seo/data/keywords.ts`
- **Topic Clusters:** `src/seo/data/topic-clusters.ts`
- **SEO Rules:** `src/seo/config/seo-rules.config.ts`
- **Compliance Rules:** `src/config/content-rules.config.ts`
- **Validate:** `src/seo/utils/content-validator.ts`

---

## 💻 Code Snippets

**Find keyword:**
```typescript
import { getKeywordData } from "@/seo"
const keyword = getKeywordData("your keyword")
```

**Check if keyword is targeted:**
```typescript
import { isKeywordTargeted } from "@/seo"
const targeted = isKeywordTargeted("santander claims")
```

**Get internal link suggestions:**
```typescript
import { getInternalLinkingSuggestions } from "@/seo"
const links = getInternalLinkingSuggestions("your-slug")
```

**Validate post:**
```typescript
import { validateSEOCompliance } from "@/seo"
const result = validateSEOCompliance(yourPost)
console.log(`Score: ${result.score}/100 (${result.grade})`)
```

---

## 🚀 After Publishing

1. **Update keywords.ts:**
   ```typescript
   targetedBy: "your-post-slug"
   ```

2. **Update topic-clusters.ts:**
   ```typescript
   status: "published"
   ```

3. **Track performance:**
   - Google Search Console (impressions, clicks, position)
   - Update quarterly

---

## 🆘 Common Issues

| Issue | Fix |
|-------|-----|
| Score < 70 | Check breakdown, fix lowest scoring area |
| "Keyword not found" | Add to keywords.ts with research data |
| "Compliance error" | Check content-rules.config for violations |
| "Too short" | Add more content, hit target word count |
| "No internal links" | Add 3-5 links to related posts |

---

## 📞 Need Help?

1. Read [SEO_CONTENT_ENGINE.md](./SEO_CONTENT_ENGINE.md) (full docs)
2. Check code comments in `src/seo/` files
3. Review existing high-scoring posts as examples
4. Check `.cursorrules` for workflow

---

**Remember:** Every piece of content should:
1. Target a real keyword from keywords.ts
2. Meet word count target for difficulty
3. Include PAA questions as sections
4. Link to 3-5 related posts
5. Be fully compliant
6. Score 70+ on SEO validation

🎉 **Now go create some SEO gold!**


