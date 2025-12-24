/**
 * CONTENT VALIDATION RULES
 * ========================
 * 
 * This file enforces truthfulness across all website content.
 * Works in conjunction with:
 * - docs/# Website Compliance Guidelines (For Cursor) - FCA compliance rules
 * - docs/Motor Finance Rerdress - Verified facts and figures
 * - .cursor/rules/.cursorrules - AI content generation enforcement
 * 
 * GOLDEN RULE: "If we can't prove it, we can't say it."
 * 
 * Before adding any claim, stat, or promise, ask:
 * 1. Do we have documentation to back this up?
 * 2. Can we provide evidence if challenged by regulators?
 * 3. Is this claim current and accurate as of today?
 * 
 * PROHIBITED CONTENT:
 * ❌ Invented statistics ("10K+ clients" without records)
 * ❌ Aspirational numbers ("£2.5M processed" if not true)
 * ❌ Competitor comparisons without data
 * ❌ Success rate claims without proof
 * ❌ Review scores from unlinked sources
 * ❌ Timeline promises we can't consistently meet
 * ❌ MCC-specific average payout amounts without case data
 * ❌ Guarantees of success or compensation
 * ❌ False urgency ("Last chance!", "Don't miss out!")
 * 
 * ALLOWED CONTENT:
 * ✅ "No Win, No Fee" (if actually your policy)
 * ✅ Process explanations (how things work)
 * ✅ Service descriptions (what you offer)
 * ✅ Actual regulatory information (FCA numbers, etc.)
 * ✅ Genuine customer testimonials (with consent)
 * ✅ Factual eligibility criteria
 * ✅ Industry-wide statistics from Motor Finance Redress doc
 * ✅ FCA timeline information (redress scheme May 2026)
 * 
 * GREY AREAS (Verify First):
 * ⚠️  "Thousands helped" - need proof of volume
 * ⚠️  "Industry leading" - need comparative data
 * ⚠️  "Fast processing" - need defined SLAs we meet
 * ⚠️  Star ratings - must link to actual review platform
 */

export const contentRules = {
  /**
   * Verified statistics that we CAN display
   * Each entry must have supporting documentation
   * 
   * SOURCE: docs/Motor Finance Rerdress (verified industry data)
   */
  verifiedStats: {
    // Industry-wide statistics (safe to reference)
    industryAffected: {
      value: "14 million",
      source: "docs/Motor Finance Rerdress, line 26",
      lastVerified: "2025-12-17",
      displayText: "Up to 14 million consumers potentially affected",
      context: "Industry-wide estimate, not MCC-specific"
    },
    eligiblePeriod: {
      value: "2007-2024",
      source: "docs/Motor Finance Rerdress, line 27",
      lastVerified: "2025-12-17",
      displayText: "Finance agreements between 2007-2024",
      context: "Date range for eligible agreements"
    },
    industryAveragePayout: {
      value: "~£700",
      source: "docs/Motor Finance Rerdress, line 28",
      lastVerified: "2025-12-17",
      displayText: "Average estimated payout ~£700 per agreement",
      context: "INDUSTRY AVERAGE, not MCC-specific claims"
    },
    redressLaunch: {
      value: "May 2026",
      source: "docs/Motor Finance Rerdress, line 71",
      lastVerified: "2025-12-17",
      displayText: "FCA redress scheme launches May 2026",
      context: "Official FCA timeline"
    },
    // MCC-specific stats (ONLY add when you have proof)
    // trustpilotRating: {
    //   value: "4.8",
    //   source: "https://uk.trustpilot.com/review/myclaimscentre.co.uk",
    //   lastVerified: "2025-12-17",
    //   displayText: "4.8/5 on Trustpilot"
    // },
  },

  /**
   * Compliance checks for any stat before display
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
   * SOURCE: docs/# Website Compliance Guidelines (For Cursor)
   */
  approvedClaims: {
    noWinNoFee: "No win, no fee",
    regulatedService: "Claims management services",
    eligibilityCheck: "Free eligibility check",
    customerRights: "You can make claims yourself for free",
    expertPartners: "Expert legal partners",
    quickCheck: "Quick eligibility check",
    processHelp: "We assist with the claims process",
  },

  /**
   * Approved CTAs (from Compliance Guidelines)
   * SOURCE: docs/# Website Compliance Guidelines (For Cursor), lines 113-121
   */
  approvedCTAs: [
    "Check my eligibility",
    "Start my claim",
    "Find out if I'm affected",
    "Check Your Claim Free",
    "Check if you're eligible",
  ],

  /**
   * Prohibited CTAs (from Compliance Guidelines)
   * SOURCE: docs/# Website Compliance Guidelines (For Cursor), lines 118-120
   */
  prohibitedCTAs: [
    "Get my money back",
    "Claim my refund",
    "Don't miss out",
    "Get your refund",
    "Claim yours",
  ],

  /**
   * Dangerous phrases that should trigger review
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
    "guaranteed",        // Prohibited (Compliance Guidelines)
    "definitely",        // Prohibited (implies certainty)
    "always",           // Prohibited (overpromise)
    "last chance",      // False urgency (Compliance Guidelines)
    "don't miss",       // False urgency (Compliance Guidelines)
    "claim now",        // False urgency (Compliance Guidelines)
    "lenders are refunding", // Prohibited (implies certainty)
    "get your refund",  // Prohibited CTA
    "owed money",       // Be careful - implies entitlement
  ],

  /**
   * Check if content contains risky claims
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

    // Check for specific payout amounts (regex for £X,XXX patterns)
    const payoutPattern = /£\d+,?\d*/g
    const matches = content.match(payoutPattern)
    if (matches && matches.length > 0) {
      matches.forEach(match => {
        // Exception: £700 is allowed as it's the industry average
        if (match !== "£700") {
          issues.push(`⚠️  Specific payout amount detected: "${match}" - Verify this is industry data, not MCC-specific`)
        }
      })
    }

    return issues
  },

  /**
   * Validate a CTA against approved/prohibited lists
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
 * USAGE EXAMPLE:
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
 */


