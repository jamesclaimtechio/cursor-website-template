# Compliance Enforcement System

## 🎯 Overview

This project uses a **multi-layered compliance system** to ensure all content is factual, compliant with FCA regulations, and can be substantiated.

---

## 📚 The Three Pillars

### 1. **Compliance Guidelines** (The Rules)
**File:** `docs/# Website Compliance Guidelines (For Cursor)`

**Purpose:** Defines what content is allowed/prohibited per FCA regulations

**Contains:**
- ✅ Approved CTAs ("Check my eligibility")
- ❌ Prohibited CTAs ("Get my refund")
- ✅ Approved headlines
- ❌ Prohibited headlines
- Fee transparency requirements
- Disclosure requirements
- Copy tone guidelines

**When to use:** Before writing ANY marketing copy, headlines, or CTAs

---

### 2. **Motor Finance Facts** (The Truth)
**File:** `docs/Motor Finance Rerdress`

**Purpose:** Single source of truth for all factual claims and statistics

**Contains:**
- Verified industry data (14M affected, £700 average)
- Timeline of events (2007-2024 eligible period)
- FCA redress scheme information (May 2026 launch)
- What actually happened (DCAs, commission scandal)

**When to use:** Before stating ANY statistic, figure, or date

---

### 3. **Content Validation Config** (The Enforcer)
**File:** `src/config/content-rules.config.ts`

**Purpose:** Runtime validation and programmatic checks

**Contains:**
- `verifiedStats` - Stats we CAN use (with sources)
- `approvedClaims` - Safe policy-based messaging
- `approvedCTAs` - Whitelisted call-to-actions
- `prohibitedCTAs` - Blacklisted phrases
- `flaggedPhrases` - Triggers for review
- `auditContent()` - Scans text for violations
- `validateCTA()` - Checks CTAs against rules
- `validateStat()` - Verifies stat has evidence

**When to use:** During development, before deploying new content

---

## 🔄 How They Work Together

```
┌─────────────────────────────────────────────────────┐
│  1. Cursor AI reads Compliance Guidelines           │
│     └─ Learns approved/prohibited patterns          │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  2. Cursor AI reads Motor Finance Redress           │
│     └─ Gets verified facts and figures              │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  3. Cursor AI drafts content using ONLY:            │
│     • Approved CTAs from Guidelines                 │
│     • Verified stats from Motor Finance doc         │
│     • Policy-based claims (no win no fee)           │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  4. Content Validation Config validates:            │
│     • auditContent() scans for flagged phrases      │
│     • validateCTA() checks against whitelist        │
│     • validateStat() ensures evidence exists        │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  5. If PASS: Content ships                          │
│     If FAIL: Cursor stops and asks for approval     │
└─────────────────────────────────────────────────────┘
```

---

## 🚦 Content Approval Flow

### ✅ Approved Content Path
```
User: "Add a CTA to the hero"
  ↓
AI: Reads Compliance Guidelines
  ↓
AI: Selects "Check my eligibility" (approved CTA)
  ↓
AI: Adds to component
  ↓
✅ SHIPS (no issues)
```

### ❌ Blocked Content Path
```
User: "Add a CTA saying 'Get your refund now'"
  ↓
AI: Reads Compliance Guidelines
  ↓
AI: Detects "Get your refund" in prohibited list
  ↓
AI: STOPS and explains violation
  ↓
AI: Suggests compliant alternative
  ↓
AI: Waits for user approval before proceeding
```

---

## 🛡️ Protection Layers

### Layer 1: Cursor Rules (Prevention)
**Location:** `.cursor/rules/.cursorrules`

**Effect:** AI automatically checks compliance docs BEFORE generating content

**Prevents:**
- Unverified stats from being written
- Prohibited CTAs from being used
- False urgency language
- Guarantees of success

### Layer 2: Config Validation (Detection)
**Location:** `src/config/content-rules.config.ts`

**Effect:** Runtime functions to validate content

**Usage Example:**
```typescript
import { contentRules } from '@/config/content-rules.config'

// Before using any CTA:
const result = contentRules.validateCTA("Get my money back")
// Returns: { valid: false, reason: "Prohibited CTA", suggestion: "Check my eligibility" }

// Before publishing any page:
const issues = contentRules.auditContent("Get your £3,500 refund now!")
// Returns: ["❌ PROHIBITED CTA: 'Get your refund'", "⚠️  Specific payout amount: £3,500"]
```

### Layer 3: Human Review (Final Check)
**When AI flags content:**
- Explains which rule is violated
- Cites specific line from compliance docs
- Suggests compliant alternative
- Waits for explicit approval

---

## 📋 Quick Reference

### Can I say...?

| Statement | ✅/❌ | Why? | Source |
|-----------|-------|------|--------|
| "Up to 14 million consumers affected" | ✅ | Verified industry stat | Motor Finance Redress, line 26 |
| "We've helped 10,000+ clients" | ❌ | Unverified MCC-specific claim | No documentation |
| "No win, no fee" | ✅ | Policy-based claim | If true for your service |
| "Average claim: £3,500" | ❌ | Can't substantiate MCC payouts | Compliance Guidelines |
| "Industry average ~£700" | ✅ | Verified industry data | Motor Finance Redress, line 28 |
| "Get your refund now" | ❌ | Prohibited CTA | Compliance Guidelines, line 118 |
| "Check if you're eligible" | ✅ | Approved CTA | Compliance Guidelines, line 114 |
| "Redress scheme launches May 2026" | ✅ | Verified FCA timeline | Motor Finance Redress, line 71 |
| "Guaranteed compensation" | ❌ | No guarantees allowed | Compliance Guidelines, line 39 |

---

## 🔧 How to Use This System

### For Content Writers:
1. Before writing copy, scan `Compliance Guidelines` for approved phrases
2. For any stat/figure, check `Motor Finance Redress` doc
3. After drafting, run through `content-rules.config.ts` mentally

### For Developers:
```typescript
// Import validation functions
import { contentRules } from '@/config/content-rules.config'

// Before using a stat:
const stat = {
  value: "10K+",
  claim: "Happy clients",
  evidence: "", // No evidence!
}

if (contentRules.validateStat(stat)) {
  // OK to use
} else {
  // DO NOT USE
}

// Before using a CTA:
const ctaCheck = contentRules.validateCTA("Get my money back")
if (!ctaCheck.valid) {
  console.error(ctaCheck.reason)
  console.log("Use this instead:", ctaCheck.suggestion)
}

// Audit entire page content:
const pageContent = "Get your £3,500 refund! Last chance!"
const issues = contentRules.auditContent(pageContent)
issues.forEach(issue => console.warn(issue))
```

### For Cursor AI:
- Automatically reads both compliance docs before generating content
- Cross-references every claim against `Motor Finance Redress`
- Validates CTAs against `Compliance Guidelines`
- Flags violations before writing code
- Suggests compliant alternatives

---

## 🎯 The Golden Rule

> **"If we can't prove it, we can't say it."**

**Before adding ANY claim:**
1. ❓ Is it documented in `Motor Finance Redress`?
2. ❓ Is it on the approved list in `Compliance Guidelines`?
3. ❓ Is it a policy-based claim (no win no fee, free check)?
4. ❓ Can we provide evidence if challenged?

**If "No" to all → DO NOT USE IT**

---

## 📊 Compliance Checklist

Before launching any page:

- [ ] All stats verified against `Motor Finance Redress`
- [ ] All CTAs checked against `Compliance Guidelines` approved list
- [ ] No prohibited phrases (run `auditContent()`)
- [ ] Disclaimer section present (if conversion page)
- [ ] Fee disclosure present (if engagement point)
- [ ] No guarantees of success
- [ ] No false urgency
- [ ] Clear about CMC status (not a law firm)
- [ ] FCA authorization in footer

---

## 🚨 Red Flags (Stop Immediately If You See These)

| Red Flag | Action |
|----------|--------|
| Specific MCC payout amounts | STOP - Can't substantiate |
| "10,000+ clients" (or any volume claim) | STOP - No records |
| "Guaranteed refund" | STOP - Prohibited |
| "Last chance" / "Don't miss out" | STOP - False urgency |
| "Get your money back" | STOP - Prohibited CTA |
| Trustpilot rating without link | STOP - Unverified |

---

## 📞 When in Doubt

If you're unsure whether content is compliant:

1. **Check the docs first:**
   - Compliance Guidelines (the rules)
   - Motor Finance Redress (the facts)

2. **Run validation:**
   ```typescript
   contentRules.auditContent(yourContent)
   ```

3. **Ask yourself:**
   - Can I prove this?
   - Is this on the prohibited list?
   - Am I making promises I can't keep?

4. **If still uncertain:**
   - Use only policy-based claims (no win no fee)
   - Avoid specific numbers/stats
   - Focus on process explanations

---

**Remember:** These rules exist to protect both the business and consumers. Compliance is not optional.


