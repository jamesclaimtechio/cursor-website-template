/**
 * BRAND SETUP: Content Validation Rules
 * ======================================
 * 
 * This file enforces truthfulness across all website content.
 * Works in conjunction with:
 * - docs/# Website Compliance Guidelines (For Cursor) - Regulatory compliance rules
 * - Industry documentation - Verified facts and figures
 * - .cursor/rules/.cursorrules - AI content generation enforcement
 * 
 * GOLDEN RULE: "If we can't prove it, we can't say it."
 * 
 * Before adding any claim, stat, or promise, ask:
 * 1. Do we have documentation to back this up?
 * 2. Can we provide evidence if challenged by regulators?
 * 3. Is this claim current and accurate as of today?
 * 
 * CURSOR AI: When user adds content with statistics:
 * 1. Ask for source documentation
 * 2. Verify stat is added to verifiedStats below
 * 3. Run validateStat() before allowing use
 * 4. Ensure compliance with industry regulations
 * 
 * PROHIBITED CONTENT:
 * ❌ Invented statistics ("10K+ clients" without records)
 * ❌ Aspirational numbers ("£2.5M processed" if not true)
 * ❌ Competitor comparisons without data
 * ❌ Success rate claims without proof
 * ❌ Review scores from unlinked sources
 * ❌ Timeline promises you can't consistently meet
 * ❌ Brand-specific average payout amounts without case data
 * ❌ Guarantees of success or outcomes
 * ❌ False urgency ("Last chance!", "Don't miss out!")
 * 
 * ALLOWED CONTENT:
 * ✅ "No Win, No Fee" (if actually your policy)
 * ✅ Process explanations (how things work)
 * ✅ Service descriptions (what you offer)
 * ✅ Actual regulatory information (authorization numbers, etc.)
 * ✅ Genuine customer testimonials (with consent)
 * ✅ Factual eligibility criteria
 * ✅ Industry-wide statistics from verified sources
 * ✅ Official regulatory timeline information
 * 
 * GREY AREAS (Verify First):
 * ⚠️  "Thousands helped" - need proof of volume
 * ⚠️  "Industry leading" - need comparative data
 * ⚠️  "Fast processing" - need defined SLAs you meet
 * ⚠️  Star ratings - must link to actual review platform
 */

export const contentRules = {
  /**
   * Verified statistics that you CAN display
   * ========================================
   * Each entry MUST have supporting documentation
   * 
   * CURSOR AI: When user wants to add a stat, follow this template:
   * 
   * statName: {
   *   value: "actual value",
   *   source: "Document name, page/line number",
   *   lastVerified: "YYYY-MM-DD",
   *   displayText: "How to display this stat in content",
   *   context: "Industry-wide or brand-specific? Additional context"
   * }
   * 
   * BRAND SETUP: Replace examples below with YOUR verified statistics
   */
  verifiedStats: {
    // EXAMPLE TEMPLATE - DELETE AND REPLACE WITH YOUR STATS
    // 
    // Industry-wide statistics (if applicable to your niche):
    // industryStatExample: {
    //   value: "14 million",
    //   source: "Industry Report 2024, page 26",
    //   lastVerified: "2025-12-17",
    //   displayText: "Up to 14 million consumers potentially affected",
    //   context: "Industry-wide estimate, not brand-specific"
    // },
    // 
    // Timeline/date statistics:
    // relevantPeriod: {
    //   value: "2007-2024",
    //   source: "Regulatory Guidance Document, section 5",
    //   lastVerified: "2025-12-17",
    //   displayText: "Agreements between 2007-2024",
    //   context: "Date range for eligible cases"
    // },
    // 
    // Regulatory/official dates:
    // officialDeadline: {
    //   value: "May 2026",
    //   source: "Regulatory Authority Announcement",
    //   lastVerified: "2025-12-17",
    //   displayText: "New scheme launches May 2026",
    //   context: "Official regulatory timeline"
    // },
    // 
    // Brand-specific stats (ONLY add when you have proof):
    // trustpilotRating: {
    //   value: "4.8",
    //   source: "https://uk.trustpilot.com/review/yourbrand.co.uk",
    //   lastVerified: "2025-12-17",
    //   displayText: "4.8/5 on Trustpilot",
    //   context: "Current rating as of last verification"
    // },
    // 
    // clientsHelped: {
    //   value: "10,000+",
    //   source: "Internal CRM data, verified by Finance Team",
    //   lastVerified: "2025-12-17",
    //   displayText: "Over 10,000 clients helped",
    //   context: "Cumulative clients since inception"
    // },
  },

  /**
   * Compliance checks for any stat before display
   * ==============================================
   * This function validates that a stat has evidence before being used
   */
  validateStat: (stat: {
    value: string | number
    claim: string
    evidence?: string
    verifiedDate?: string
  }): boolean => {
    // Must have evidence
    if (!stat.evidence || stat.evidence.trim() === "") {
      console.error(`❌ BLOCKED: "${stat.claim}" - No evidence provided`)
      return false
    }

    // Must have recent verification (within 90 days for dynamic stats)
    if (stat.verifiedDate) {
      const verified = new Date(stat.verifiedDate)
      const daysSince = (Date.now() - verified.getTime()) / (1000 * 60 * 60 * 24)
      
      if (daysSince > 90) {
        console.warn(`⚠️  WARNING: "${stat.claim}" - Last verified ${daysSince.toFixed(0)} days ago. Please update.`)
      }
    }

    return true
  },

  /**
   * Approved messaging (evergreen, policy-based claims)
   * ===================================================
   * These are safe claims about your SERVICE, not about outcomes
   * 
   * BRAND SETUP: Update these to match your actual policies
   */
  approvedClaims: {
    noWinNoFee: "No win, no fee", // Only if this is actually your policy!
    regulatedService: "Claims management services", // Or your service type
    eligibilityCheck: "Free eligibility check",
    customerRights: "You can make claims yourself for free", // Important disclaimer
    expertPartners: "Expert legal partners",
    quickCheck: "Quick eligibility check",
    processHelp: "We assist with the claims process",
  },

  /**
   * Approved CTAs (Call-to-Action buttons/links)
   * =============================================
   * These are compliant CTAs that don't overpromise
   * 
   * SOURCE: Based on FCA/regulatory guidance
   */
  approvedCTAs: [
    "Check my eligibility",
    "Start my claim",
    "Find out if I'm affected",
    "Check Your Claim Free",
    "Check if you're eligible",
    "See if I qualify",
    "Get started",
    "Learn more",
    "Contact us",
  ],

  /**
   * Prohibited CTAs
   * ===============
   * These create false expectations or pressure
   */
  prohibitedCTAs: [
    "Get my money back",      // Implies guaranteed outcome
    "Claim my refund",        // Implies you already have one
    "Don't miss out",         // False urgency
    "Get your refund",        // Implies guaranteed outcome
    "Claim yours",            // Implies entitlement
    "Last chance",            // False urgency
    "Claim now or lose out",  // Pressure tactic
  ],

  /**
   * Dangerous phrases that should trigger review
   * ============================================
   * These may be prohibited or require verification
   */
  flaggedPhrases: [
    "average claim",      // Only allowed if citing industry data with source
    "typical payout",     // Prohibited without industry data
    "success rate",       // Prohibited without documentation
    "thousands of",       // Prohibited without proof
    "millions in",        // Prohibited unless citing industry-wide stat
    "number one",         // Prohibited without comparative data
    "best in",           // Prohibited without evidence
    "guaranteed",        // Prohibited (implies certainty)
    "definitely",        // Prohibited (implies certainty)
    "always",           // Prohibited (overpromise)
    "last chance",      // False urgency
    "don't miss",       // False urgency
    "claim now",        // False urgency (unless contextually appropriate)
    "lenders are refunding", // Prohibited (implies certainty)
    "get your refund",  // Prohibited CTA
    "owed money",       // Be careful - implies entitlement
  ],

  /**
   * Content audit function
   * ======================
   * Scans text for risky claims
   */
  auditContent: (content: string): string[] => {
    const issues: string[] = []
    const lowerContent = content.toLowerCase()

    // Check for flagged phrases
    contentRules.flaggedPhrases.forEach(phrase => {
      if (lowerContent.includes(phrase)) {
        issues.push(`⚠️  Found potentially unverified claim: "${phrase}"`)
      }
    })

    // Check for prohibited CTAs
    contentRules.prohibitedCTAs.forEach(cta => {
      if (lowerContent.includes(cta.toLowerCase())) {
        issues.push(`❌ PROHIBITED CTA: "${cta}" - Use approved CTA instead`)
      }
    })

    // Check for specific payout amounts (regex for £X,XXX or $X,XXX patterns)
    const payoutPattern = /[£$]\d+,?\d*/g
    const matches = content.match(payoutPattern)
    if (matches && matches.length > 0) {
      matches.forEach(match => {
        issues.push(`⚠️  Specific payout amount detected: "${match}" - Verify this is industry data, not brand-specific`)
      })
    }

    return issues
  },

  /**
   * Validate a CTA against approved/prohibited lists
   * ================================================
   */
  validateCTA: (cta: string): { valid: boolean; reason?: string; suggestion?: string } => {
    const lowerCTA = cta.toLowerCase()

    // Check if prohibited
    const isProhibited = contentRules.prohibitedCTAs.some(
      prohibited => lowerCTA.includes(prohibited.toLowerCase())
    )
    if (isProhibited) {
      return {
        valid: false,
        reason: "This CTA is explicitly prohibited in Compliance Guidelines",
        suggestion: contentRules.approvedCTAs[0] // Suggest first approved CTA
      }
    }

    // Check if approved
    const isApproved = contentRules.approvedCTAs.some(
      approved => lowerCTA.includes(approved.toLowerCase())
    )
    if (isApproved) {
      return { valid: true }
    }

    // Not explicitly approved - flag for review
    return {
      valid: false,
      reason: "This CTA is not on the approved list",
      suggestion: "Use one of the pre-approved CTAs from the Compliance Guidelines"
    }
  },
}

/**
 * USAGE EXAMPLES:
 * ===============
 * 
 * Before adding a stat to any component:
 * 
 * const myStat = {
 *   value: "4.8",
 *   claim: "Trustpilot Rating",
 *   evidence: "https://uk.trustpilot.com/review/...",
 *   verifiedDate: "2024-01-15"
 * }
 * 
 * if (contentRules.validateStat(myStat)) {
 *   // OK to display
 * } else {
 *   // DO NOT DISPLAY - no evidence
 * }
 * 
 * 
 * Before publishing a page:
 * 
 * const issues = contentRules.auditContent(pageContent)
 * if (issues.length > 0) {
 *   console.log("Content issues found:", issues)
 *   // Fix before publishing
 * }
 * 
 * 
 * Before using a CTA:
 * 
 * const ctaCheck = contentRules.validateCTA("Get my money back")
 * if (!ctaCheck.valid) {
 *   console.error(ctaCheck.reason)
 *   console.log("Use this instead:", ctaCheck.suggestion)
 * }
 */
