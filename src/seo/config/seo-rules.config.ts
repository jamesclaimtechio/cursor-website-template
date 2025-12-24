/**
 * SEO VALIDATION RULES
 * ====================
 * 
 * This file defines SEO best practices and validation rules.
 * Works alongside content-rules.config.ts (compliance focus).
 * 
 * FOCUS AREAS:
 * - Metadata optimization (title, description)
 * - Content structure (headings, length, readability)
 * - Link requirements (internal, external)
 * - SERP feature targeting (snippets, PAA, FAQ schema)
 * - Image optimization
 */

export const seoRules = {
  // ============================================================================
  // METADATA REQUIREMENTS
  // ============================================================================
  metadata: {
    title: {
      minLength: 50,
      maxLength: 60,
      optimalLength: 55,
      mustIncludeKeyword: true,
      keywordPosition: "first-8-words", // Keyword should appear in first 8 words
      mustIncludeBrand: false,          // Template adds "| Claims Centre"
      forbiddenPatterns: [
        /\bclick here\b/i,
        /\bfree money\b/i,
        /\bguaranteed\b/i,
        /\b!!+\b/,                      // Multiple exclamation marks
      ],
      warnings: [
        /\d{4}/,                        // Year in title (may become outdated)
      ]
    },
    description: {
      minLength: 150,
      maxLength: 160,
      optimalLength: 155,
      mustIncludeKeyword: true,
      mustIncludeCTA: true,
      ctaExamples: [
        "Check if you're eligible",
        "Find out if you're affected",
        "Learn more about",
      ],
      forbiddenPatterns: [
        /\bguaranteed\b/i,
        /\bget your refund\b/i,
        /\bclaim now\b/i,
      ]
    },
    keywords: {
      minCount: 3,
      maxCount: 8,
      mustIncludePrimary: true,
      mustIncludeRelated: true,
    }
  },

  // ============================================================================
  // CONTENT REQUIREMENTS
  // ============================================================================
  content: {
    wordCount: {
      minimum: 1000,
      recommended: 1500,
      maximum: 3000,
      byDifficulty: {
        1: { min: 800, recommended: 1200 },   // Easy keywords
        2: { min: 1000, recommended: 1500 },  // Moderate
        3: { min: 1500, recommended: 2000 },  // Medium
        4: { min: 2000, recommended: 2500 },  // Hard
        5: { min: 2500, recommended: 3000 },  // Very hard
      }
    },
    
    headingStructure: {
      requireH1: true,
      maxH1Count: 1,
      h1MustIncludeKeyword: true,
      requireH2s: true,
      minH2Count: 3,
      maxH2Count: 10,
      recommendedH2Count: 5,
      minH3Count: 0,
      noSkippedLevels: true,              // H1 → H3 forbidden
      paaQuestionsAsHeadings: true,       // Include PAA questions as H2/H3
    },
    
    keywordOptimization: {
      density: {
        min: 0.5,   // 0.5% minimum
        max: 2.5,   // 2.5% maximum (avoid keyword stuffing)
        optimal: 1.5,
      },
      placement: {
        inFirstParagraph: true,
        inH1: true,
        inH2s: "at least one",
        inConclusion: true,
      },
      checkVariations: true,              // Count semantic variations
      naturalLanguage: true,              // Must read naturally, not stuffed
    },
    
    readability: {
      targetGradeLevel: 8,                // 8th grade (age 13-14)
      maxGradeLevel: 10,                  // Don't exceed 10th grade
      averageSentenceLength: {
        min: 10,
        max: 25,
        optimal: 15,
      },
      averageParagraphLength: {
        min: 40,      // words
        max: 150,
        optimal: 80,
      },
      maxParagraphSentences: 5,
      transitionWords: {
        minCount: 10,  // Number of transition words/phrases
        examples: [
          "however", "therefore", "for example", "additionally",
          "moreover", "in contrast", "as a result", "specifically"
        ]
      }
    },

    formatting: {
      requireBulletLists: true,
      minListCount: 2,
      requireBoldText: true,               // For emphasis on key points
      avoidAllCaps: true,                  // NEVER USE ALL CAPS
      requireWhitespace: true,             // Good spacing between sections
    }
  },

  // ============================================================================
  // LINK REQUIREMENTS
  // ============================================================================
  linking: {
    internal: {
      min: 3,
      max: 10,
      optimal: 5,
      requireDofollow: true,
      requireContextual: true,            // No "click here" anchors
      anchorTextRules: {
        useKeywords: true,
        avoidGeneric: true,               // Avoid "click here", "read more"
        matchTargetPage: true,            // Anchor should match target page topic
      },
      linkToRelated: true,                // Link to related blog posts
      linkToPillar: true,                 // Link to pillar content
      linkToService: true,                // Link to service/conversion pages
    },
    external: {
      min: 1,                             // At least 1 authoritative source
      max: 5,
      requireAuthority: true,
      requireRelevant: true,
      allowedDomains: [
        // Government & regulatory
        "fca.org.uk",
        "gov.uk",
        "financial-ombudsman.org.uk",
        
        // Consumer protection
        "citizensadvice.org.uk",
        "moneyhelper.org.uk",
        
        // Trusted financial resources
        "moneysavingexpert.com",
        "which.co.uk",
        
        // News (for citations only)
        "bbc.co.uk",
        "theguardian.com",
        "ft.com",
      ],
      forbiddenDomains: [
        "wikipedia.org",                  // Not authoritative for financial advice
        "reddit.com",                     // User-generated content
        "quora.com",
        "yahoo.answers.com",
      ],
      requireNofollow: false,             // We trust these domains
      checkBrokenLinks: true,
    }
  },

  // ============================================================================
  // SERP FEATURE OPTIMIZATION
  // ============================================================================
  serpFeatures: {
    featuredSnippet: {
      enabled: true,
      preferredFormats: ["paragraph", "list", "table"],
      paragraphSnippet: {
        optimalLength: { min: 40, max: 60 }, // Words
        includeDefinition: true,
        answerQuestion: true,
      },
      listSnippet: {
        optimalItems: { min: 4, max: 8 },
        useNumberedSteps: true,
      },
      tableSnippet: {
        useHTMLTable: true,
        include2to3Columns: true,
      },
      placement: "near-top",              // Featured snippet content near top of article
    },
    
    peopleAlsoAsk: {
      enabled: true,
      minQuestions: 3,                    // Include at least 3 PAA questions
      maxQuestions: 8,
      formatAsHeadings: true,             // Questions as H2 or H3
      answerLength: { min: 40, max: 100 }, // Words per answer
      includeInFAQ: true,                 // Also add to FAQ section
    },
    
    faq: {
      enabled: true,
      minItems: 5,
      maxItems: 15,
      optimalItems: 8,
      requireSchema: true,                // Add FAQ schema markup
      answerLength: { min: 40, max: 150 },
      usePAAQuestions: true,              // Include PAA questions from SERP
    },

    sitelinks: {
      enabled: true,
      requireClearSections: true,
      useJumpLinks: true,                 // Table of contents
    }
  },

  // ============================================================================
  // IMAGE REQUIREMENTS
  // ============================================================================
  images: {
    featuredImage: {
      required: true,
      minWidth: 1200,
      minHeight: 630,
      aspectRatio: ["16:9", "1.91:1"],   // OG image standard
      maxFileSizeKB: 500,
      formats: ["jpg", "jpeg", "png", "webp"],
      preferredFormat: "webp",
      alt: {
        required: true,
        minLength: 80,
        maxLength: 125,
        includeKeyword: true,
        beDescriptive: true,              // Describe what's in image
      }
    },
    
    contentImages: {
      required: false,
      minCount: 0,                        // Text-heavy content may not need images
      recommendedCount: 2,
      maxCount: 10,
      requireAlt: true,
      requireCaption: false,
      maxFileSizeKB: 200,
      lazyLoad: true,
    }
  },

  // ============================================================================
  // SCHEMA MARKUP
  // ============================================================================
  schema: {
    article: {
      required: true,
      type: "BlogPosting",
      requirePublishDate: true,
      requireAuthor: true,
      requireImage: true,
    },
    
    faq: {
      required: false,                    // Only if FAQ section exists
      requireMinQuestions: 5,
    },
    
    breadcrumb: {
      required: true,
    },

    organization: {
      required: true,                     // On all pages
    }
  },

  // ============================================================================
  // TECHNICAL SEO
  // ============================================================================
  technical: {
    canonicalUrl: {
      required: true,
      mustBeAbsolute: true,
    },
    
    openGraph: {
      required: true,
      requireTitle: true,
      requireDescription: true,
      requireImage: true,
      requireUrl: true,
      requireType: true,
    },
    
    twitter: {
      required: true,
      requireCard: true,
      requireTitle: true,
      requireDescription: true,
      requireImage: true,
    },

    robots: {
      index: true,
      follow: true,
    }
  }
}

// ============================================================================
// SCORING WEIGHTS (How much each area contributes to overall SEO score)
// ============================================================================
export const seoScoreWeights = {
  metadata: 25,       // 25% of total score
  content: 30,        // 30% of total score
  linking: 15,        // 15% of total score
  compliance: 20,     // 20% of total score (from content-rules.config)
  readability: 10,    // 10% of total score
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Calculate grade from score
 */
export function getGradeFromScore(score: number): "A" | "B" | "C" | "D" | "F" {
  if (score >= 90) return "A"
  if (score >= 80) return "B"
  if (score >= 70) return "C"
  if (score >= 60) return "D"
  return "F"
}

/**
 * Get word count target for keyword difficulty
 */
export function getWordCountTarget(difficulty: 1 | 2 | 3 | 4 | 5): { min: number; recommended: number } {
  return seoRules.content.wordCount.byDifficulty[difficulty]
}

/**
 * Check if domain is allowed for external links
 */
export function isAllowedExternalDomain(url: string): boolean {
  try {
    const domain = new URL(url).hostname.replace('www.', '')
    return seoRules.linking.external.allowedDomains.some(allowed => 
      domain === allowed || domain.endsWith('.' + allowed)
    )
  } catch {
    return false
  }
}

/**
 * Check if domain is forbidden for external links
 */
export function isForbiddenExternalDomain(url: string): boolean {
  try {
    const domain = new URL(url).hostname.replace('www.', '')
    return seoRules.linking.external.forbiddenDomains.some(forbidden => 
      domain === forbidden || domain.endsWith('.' + forbidden)
    )
  } catch {
    return false
  }
}


