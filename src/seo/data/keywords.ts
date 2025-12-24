import { KeywordData } from "@/seo/types/seo"

/**
 * KEYWORD RESEARCH DATABASE
 * =========================
 * 
 * Central repository of keyword research for content planning.
 * 
 * MAINTENANCE NOTES:
 * - Update search volumes quarterly (Jan, Apr, Jul, Oct)
 * - Research date must be within 90 days for Priority 1 keywords
 * - When creating new content, mark keyword as targetedBy: "slug"
 * - Add new keywords as opportunities are discovered
 * 
 * RESEARCH SOURCES:
 * - Google Keyword Planner (https://ads.google.com/home/tools/keyword-planner/)
 * - Google Search Console (actual impressions data)
 * - Google Trends for seasonal patterns
 * - "People Also Ask" from actual SERPs
 * - Competitor analysis (what they rank for)
 * 
 * KEYWORD DIFFICULTY SCALE:
 * 1 = Easy       (Low competition, long-tail, under 1K volume)
 * 2 = Moderate   (Some competition, 1K-5K volume)
 * 3 = Medium     (Competitive, 5K-15K volume)
 * 4 = Hard       (Very competitive, 15K-30K volume)
 * 5 = Very Hard  (Extremely competitive, 30K+ volume, dominated by authorities)
 * 
 * SEARCH INTENT:
 * - informational: User wants to learn ("what is", "how to", "guide")
 * - navigational: User looking for specific brand/page ("black horse claims")
 * - commercial: User researching options ("best claims company", "black horse vs santander")
 * - transactional: User ready to act ("check my eligibility", "start my claim")
 */

export const keywordDatabase: KeywordData[] = [
  // ============================================================================
  // PILLAR CONTENT (Priority 1) - Foundation topics
  // ============================================================================
  
  {
    keyword: "car finance claims",
    searchVolume: 18100,
    difficulty: 4,
    intent: "commercial",
    priority: 1,
    targetedBy: "car-finance-compensation-guide",
    relatedKeywords: [
      "motor finance claims",
      "pcp claims",
      "car loan claims",
      "vehicle finance claims",
      "car finance refund"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "How much compensation can I get for car finance claims?",
        "What is a DCA in car finance?",
        "How long do car finance claims take?",
        "Can I claim for old car finance?",
        "Are car finance claims legitimate?"
      ],
      topCompetitors: [
        {
          domain: "moneysavingexpert.com",
          url: "https://www.moneysavingexpert.com/reclaim/car-finance-commission-claims/",
          strength: "strong",
          contentGaps: ["Doesn't explain FCA scheme timeline", "Limited lender-specific info"]
        },
        {
          domain: "which.co.uk",
          url: "https://www.which.co.uk/consumer-rights/regulation/car-finance-commission",
          strength: "strong",
          contentGaps: ["No practical how-to guide", "Missing recent updates"]
        },
        {
          domain: "claimants.co.uk",
          url: "various",
          strength: "moderate",
          contentGaps: ["Generic content", "Lacks authority signals"]
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "Main pillar keyword. High volume, competitive. Focus on comprehensive guide."
  },

  {
    keyword: "what is a dca car finance",
    searchVolume: 3600,
    difficulty: 2,
    intent: "informational",
    priority: 1,
    targetedBy: "understanding-dcas",
    relatedKeywords: [
      "discretionary commission arrangement",
      "dca explained",
      "car finance commission",
      "what does dca stand for",
      "dca meaning car finance"
    ],
    serp: {
      hasFeaturedSnippet: true,
      snippetType: "paragraph",
      peopleAlsoAsk: [
        "What does DCA stand for in car finance?",
        "Are DCAs illegal?",
        "When were DCAs banned?",
        "How do I know if I had a DCA?",
        "Why are DCAs bad?"
      ],
      topCompetitors: [
        {
          domain: "fca.org.uk",
          url: "https://www.fca.org.uk/",
          strength: "strong",
          contentGaps: ["Too technical", "Not consumer-friendly"]
        },
        {
          domain: "moneysavingexpert.com",
          url: "various",
          strength: "moderate",
          contentGaps: ["Brief explanation only", "No detailed examples"]
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "Featured snippet opportunity! Focus on clear, simple explanation with examples."
  },

  {
    keyword: "fca redress scheme",
    searchVolume: 2900,
    difficulty: 3,
    intent: "informational",
    priority: 1,
    targetedBy: "fca-redress-scheme-2026",
    relatedKeywords: [
      "fca car finance redress",
      "motor finance redress scheme",
      "fca compensation scheme 2026",
      "car finance compensation scheme"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "When does the FCA redress scheme start?",
        "Who is eligible for FCA redress?",
        "How much will the FCA scheme pay out?",
        "How do I apply for FCA redress?",
        "What is the deadline for FCA claims?"
      ],
      topCompetitors: [
        {
          domain: "fca.org.uk",
          url: "https://www.fca.org.uk/news/press-releases/",
          strength: "strong",
          contentGaps: ["Official but complex", "No consumer guide"]
        },
        {
          domain: "bbc.co.uk",
          url: "various news articles",
          strength: "strong",
          contentGaps: ["News only", "Not comprehensive"]
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "Timely, high interest. May 2026 launch is key differentiator."
  },

  // ============================================================================
  // FCA NEWS & ANNOUNCEMENTS (Priority 1) - Timely content
  // ============================================================================

  {
    keyword: "fca december 2025 car finance",
    searchVolume: 800, // Estimated current spike
    difficulty: 1, // Very low - breaking news
    intent: "informational",
    priority: 1, // High priority - timely
    targetedBy: "fca-december-2025-car-finance-update",
    relatedKeywords: [
      "fca consultation closed december 2025",
      "fca latest announcement car finance",
      "motor finance consultation closed",
      "fca car finance update december"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "What did the FCA announce in December 2025?",
        "Can I claim car finance in December 2025?",
        "What happens after FCA consultation closes?",
        "When will FCA publish final car finance rules?"
      ],
      topCompetitors: [
        {
          domain: "fca.org.uk",
          url: "official announcements",
          strength: "strong",
          contentGaps: ["Official but technical", "No consumer-friendly explanation"]
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "🔥 NEWS KEYWORD - Very timely, spiking now. Zero competition from CMCs. First mover advantage. Update monthly as new FCA announcements happen."
  },

  // ============================================================================
  // LENDER-SPECIFIC CONTENT (Priority 2) - High commercial intent
  // ============================================================================

  {
    keyword: "black horse finance claims",
    searchVolume: 2400,
    difficulty: 3,
    intent: "commercial",
    priority: 2,
    targetedBy: "black-horse-refund",
    relatedKeywords: [
      "black horse refund",
      "claim against black horse",
      "black horse dca claims",
      "black horse motor finance claims"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "How do I claim against Black Horse?",
        "Is Black Horse paying out for DCAs?",
        "How long does a Black Horse claim take?",
        "Can I claim against Black Horse myself?"
      ],
      topCompetitors: [
        {
          domain: "blackhorse.co.uk",
          url: "official site",
          strength: "strong"
        },
        {
          domain: "resolver.co.uk",
          url: "various",
          strength: "moderate",
          contentGaps: ["Generic template", "No specific guidance"]
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "Popular lender. Already have content, optimize for conversions."
  },

  {
    keyword: "close brothers motor finance claims",
    searchVolume: 1900,
    difficulty: 3,
    intent: "commercial",
    priority: 2,
    targetedBy: "close-brothers-motor-finance-claims",
    relatedKeywords: [
      "close brothers claims",
      "close brothers refund",
      "close brothers dca",
      "claim against close brothers"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "How do I claim from Close Brothers?",
        "Are Close Brothers paying out?",
        "What percentage did Close Brothers charge?",
        "How long do Close Brothers claims take?"
      ],
      topCompetitors: [
        {
          domain: "closebrothers.com",
          url: "official site",
          strength: "strong"
        },
        {
          domain: "financial-ombudsman.org.uk",
          url: "various",
          strength: "strong"
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "High-profile lender after Supreme Court case. Good opportunity."
  },

  {
    keyword: "santander car finance claims",
    searchVolume: 1600,
    difficulty: 3,
    intent: "commercial",
    priority: 2,
    targetedBy: "santander-car-finance-claims",
    relatedKeywords: [
      "santander motor finance claims",
      "santander pcp claims",
      "claim against santander"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "Can I claim against Santander car finance?",
        "How do I make a Santander car finance claim?",
        "Is Santander paying DCA claims?"
      ],
      topCompetitors: [
        {
          domain: "santander.co.uk",
          url: "official site",
          strength: "strong"
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "Major bank lender. Created today."
  },

  {
    keyword: "moneybarn claims",
    searchVolume: 880,
    difficulty: 2,
    intent: "commercial",
    priority: 2,
    relatedKeywords: [
      "moneybarn refund",
      "moneybarn finance claims",
      "claim against moneybarn"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "Can I claim against Moneybarn?",
        "How do I complain to Moneybarn?",
        "Is Moneybarn FCA regulated?"
      ],
      topCompetitors: [
        {
          domain: "moneybarn.com",
          url: "official site",
          strength: "strong"
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "PLANNED - Lower volume but less competitive. Sub-prime specialist."
  },

  // ============================================================================
  // PROCESS & TIMELINE CONTENT (Priority 2) - Featured snippet opportunities
  // ============================================================================

  {
    keyword: "how long do car finance claims take",
    searchVolume: 880,
    difficulty: 2,
    intent: "informational",
    priority: 2,
    targetedBy: "how-long-do-car-finance-claims-take",
    relatedKeywords: [
      "car finance claim timeline",
      "when will i get my car finance refund",
      "car finance claim process time"
    ],
    serp: {
      hasFeaturedSnippet: true,
      snippetType: "paragraph",
      peopleAlsoAsk: [
        "How long does the Financial Ombudsman take?",
        "Can I speed up my car finance claim?",
        "What happens after I submit my claim?",
        "When will I hear back about my claim?"
      ],
      topCompetitors: [
        {
          domain: "financial-ombudsman.org.uk",
          url: "various",
          strength: "strong"
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "Featured snippet opportunity! Created today. Universal question."
  },

  {
    keyword: "car finance compensation calculator",
    searchVolume: 1300,
    difficulty: 3,
    intent: "transactional",
    priority: 2,
    relatedKeywords: [
      "how much is my car finance claim worth",
      "calculate car finance claim",
      "car finance refund calculator"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "How is car finance compensation calculated?",
        "What is the average car finance payout?",
        "How much will I get back from car finance?"
      ],
      topCompetitors: [
        {
          domain: "moneysavingexpert.com",
          url: "various",
          strength: "strong",
          contentGaps: ["No interactive calculator"]
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "PLANNED - Tool opportunity. Must be compliant (no guaranteed amounts)."
  },

  {
    keyword: "pcp claims explained",
    searchVolume: 720,
    difficulty: 2,
    intent: "informational",
    priority: 3,
    relatedKeywords: [
      "what is a pcp claim",
      "pcp finance claims",
      "personal contract purchase claims"
    ],
    serp: {
      hasFeaturedSnippet: true,
      snippetType: "paragraph",
      peopleAlsoAsk: [
        "What is PCP finance?",
        "Can I claim on PCP finance?",
        "What's the difference between PCP and HP?",
        "Are PCP claims the same as DCA claims?"
      ],
      topCompetitors: [
        {
          domain: "moneysavingexpert.com",
          url: "various",
          strength: "strong"
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "PLANNED - Educational content, good for authority building. Featured snippet opportunity."
  },

  {
    keyword: "hire purchase claims",
    searchVolume: 590,
    difficulty: 2,
    intent: "informational",
    priority: 3,
    relatedKeywords: [
      "hp finance claims",
      "hire purchase compensation",
      "hp vs pcp claims"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "What is hire purchase?",
        "Can I claim on hire purchase?",
        "What's the difference between HP and PCP?"
      ],
      topCompetitors: [
        {
          domain: "moneysavingexpert.com",
          url: "various",
          strength: "strong"
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "PLANNED - Pair with PCP article for comprehensive coverage"
  },

  // ============================================================================
  // SUPPORTING CONTENT (Priority 3) - Authority & trust building
  // ============================================================================

  {
    keyword: "financial ombudsman car finance",
    searchVolume: 480,
    difficulty: 2,
    intent: "informational",
    priority: 3,
    relatedKeywords: [
      "complain to financial ombudsman",
      "fos car finance claims",
      "how to escalate car finance claim"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "How do I complain to the Financial Ombudsman?",
        "How long does the FOS take?",
        "Can the Ombudsman make lenders pay?",
        "Is the Financial Ombudsman free?"
      ],
      topCompetitors: [
        {
          domain: "financial-ombudsman.org.uk",
          url: "official site",
          strength: "strong"
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "PLANNED - Important process content. Positions us as helpful experts."
  },

  {
    keyword: "no win no fee car finance claims",
    searchVolume: 390,
    difficulty: 2,
    intent: "commercial",
    priority: 3,
    targetedBy: "no-win-no-fee",
    relatedKeywords: [
      "free car finance claims",
      "car finance claims cost",
      "claims management fees"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "Do I have to pay for car finance claims?",
        "What does no win no fee mean?",
        "How much do claims companies charge?",
        "Can I claim for free myself?"
      ],
      topCompetitors: [
        {
          domain: "citizensadvice.org.uk",
          url: "various",
          strength: "strong"
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "Already have legal page. Could expand to blog post."
  },

  // ============================================================================
  // PCP-SPECIFIC KEYWORDS (High Priority Expansion - Created Today!)
  // ============================================================================
  
  {
    keyword: "pcp claims",
    searchVolume: 50000, // Estimated mid-range of 10K-100K
    difficulty: 5,
    intent: "commercial",
    priority: 1,
    targetedBy: "pcp-claims",
    relatedKeywords: [
      "pcpclaims",
      "pcp car finance claims",
      "pcp finance claims",
      "personal contract purchase claims"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "What is a PCP claim?",
        "Can I claim on PCP finance?",
        "How much can I get from a PCP claim?",
        "Are PCP claims the same as car finance claims?",
        "How long do PCP claims take?"
      ],
      topCompetitors: [
        {
          domain: "various CMCs",
          url: "multiple",
          strength: "strong",
          contentGaps: ["Lack of PCP-specific detail", "Generic claims info"]
        }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "🚀 HUGE opportunity - 10K-100K volume. Main PCP pillar. Created today."
  },

  {
    keyword: "pcp car finance claims",
    searchVolume: 5500,
    difficulty: 4,
    intent: "commercial",
    priority: 1,
    targetedBy: "pcp-car-finance-claims",
    relatedKeywords: [
      "car pcp claims",
      "pcp finance claims",
      "car finance pcp claim"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "What are PCP car finance claims?",
        "Can I claim on my PCP car finance?",
        "How do PCP claims work?",
        "What is PCP mis-selling?"
      ],
      topCompetitors: [
        { domain: "various", url: "", strength: "strong" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "Strong volume, clearer intent. Created today."
  },

  {
    keyword: "mis sold car finance claim",
    searchVolume: 5500,
    difficulty: 4,
    intent: "commercial",
    priority: 1,
    targetedBy: "mis-sold-car-finance-claim",
    relatedKeywords: [
      "missold car finance claim",
      "mis sold pcp claim",
      "mis sold motor finance",
      "claim mis sold car finance"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "How do I know if my car finance was mis-sold?",
        "Can I claim for mis-sold car finance?",
        "What is mis-selling in car finance?",
        "How much compensation for mis-sold finance?"
      ],
      topCompetitors: [
        { domain: "various", url: "", strength: "strong" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "🚀 +900% TREND GROWTH! High priority. Created today."
  },

  {
    keyword: "pcp claim check",
    searchVolume: 5500,
    difficulty: 3,
    intent: "transactional",
    priority: 2,
    targetedBy: "pcp-claim-check",
    relatedKeywords: [
      "pcp check claim",
      "check pcp claim",
      "mis sold pcp check"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "How do I check if I can claim PCP?",
        "How do I check my PCP eligibility?",
        "Can I check if my PCP was mis-sold?"
      ],
      topCompetitors: [
        { domain: "various", url: "", strength: "moderate" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "Transactional intent - good for tool/checker page. Created today."
  },

  {
    keyword: "pcp mis sold",
    searchVolume: 550,
    difficulty: 3,
    intent: "informational",
    priority: 2,
    relatedKeywords: [
      "missold pcp",
      "pcp misselling",
      "pcp missold",
      "mis selling pcp"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "What does mis-sold PCP mean?",
        "How was PCP mis-sold?",
        "What are signs of PCP mis-selling?",
        "Can I claim if my PCP was mis-sold?"
      ],
      topCompetitors: [
        { domain: "various", url: "", strength: "moderate" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "PLANNED - Educational content opportunity."
  },

  {
    keyword: "pcp commission claims",
    searchVolume: 550,
    difficulty: 3,
    intent: "commercial",
    priority: 2,
    targetedBy: "pcp-commission-claims",
    relatedKeywords: [
      "pcp compensation claims",
      "pcp finance mis sold"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "What is PCP commission?",
        "Can I claim PCP commission back?",
        "How much commission was on my PCP?"
      ],
      topCompetitors: [
        { domain: "various", url: "", strength: "moderate" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "🚀 +900% TREND GROWTH! Links PCP to commission. Created today."
  },

  {
    keyword: "black horse pcp claim",
    searchVolume: 550,
    difficulty: 2,
    intent: "commercial",
    priority: 2,
    relatedKeywords: [
      "blackhorse pcp claims",
      "black horse pcp finance claim"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "Can I claim against Black Horse for PCP?",
        "How do I make a Black Horse PCP claim?",
        "Is Black Horse paying PCP claims?"
      ],
      topCompetitors: [
        { domain: "blackhorse.co.uk", url: "", strength: "strong" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "PLANNED - Combines lender + finance type. Lower competition, good opportunity."
  },

  {
    keyword: "bmw pcp claim",
    searchVolume: 550,
    difficulty: 2,
    intent: "commercial",
    priority: 3,
    // targetedBy: "bmw-car-finance-claims", // TODO: Create this post
    relatedKeywords: [
      "audi pcp claim",
      "mercedes pcp claim",
      "pcp claims bmw",
      "bmw select claims",
      "bmw financial services claims"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "Can I claim on BMW PCP finance?",
        "How do I claim against BMW finance?",
        "Who provided BMW PCP finance?"
      ],
      topCompetitors: [
        { domain: "various", url: "", strength: "moderate" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "Brand-specific PCP claims. You created today. Premium brand series."
  },

  {
    keyword: "mercedes car finance claims",
    searchVolume: 550,
    difficulty: 2,
    intent: "commercial",
    priority: 3,
    // targetedBy: "mercedes-car-finance-claims", // TODO: Create this post
    relatedKeywords: [
      "mercedes pcp claim",
      "mercedes finance compensation",
      "mercedes-benz financial services claims",
      "mercedes hp claims",
      "luxury car finance claims"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "Can I claim on Mercedes car finance?",
        "How do I claim against Mercedes-Benz Financial Services?",
        "Who financed Mercedes cars?",
        "Are Mercedes PCP claims valid?"
      ],
      topCompetitors: [
        { domain: "various", url: "", strength: "moderate" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "You created today. Premium brand series."
  },

  {
    keyword: "audi pcp claim",
    searchVolume: 550,
    difficulty: 2,
    intent: "commercial",
    priority: 3,
    // targetedBy: "audi-car-finance-claims", // TODO: Create this post
    relatedKeywords: [
      "audi solutions claims",
      "audi finance claims",
      "audi compensation",
      "vwfs claims",
      "audi car finance claims"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "Can I claim on Audi PCP finance?",
        "How do I claim against Audi finance?",
        "Who provided Audi PCP finance?",
        "Are Audi Solutions claims valid?"
      ],
      topCompetitors: [
        { domain: "various", url: "", strength: "moderate" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "You created today. Completes German premium trinity."
  },

  {
    keyword: "bmw vs mercedes vs audi finance claims",
    searchVolume: 320,
    difficulty: 2,
    intent: "commercial",
    priority: 2,
    // targetedBy: "bmw-vs-mercedes-vs-audi-finance-claims", // TODO: Create this post
    relatedKeywords: [
      "bmw vs mercedes claims",
      "audi vs bmw finance",
      "german car finance claims",
      "premium car claims comparison",
      "which premium brand pays most"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "Which German car has most finance claims?",
        "Do BMW claims pay more than Mercedes?",
        "Which premium brand settles fastest?",
        "Can I claim on multiple German cars?"
      ],
      topCompetitors: [
        { domain: "various", url: "", strength: "weak" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "You created today. HUB CONTENT - Comparison linking to all three German premium posts."
  },

  {
    keyword: "money saving expert pcp claim",
    searchVolume: 550,
    difficulty: 2,
    intent: "informational",
    priority: 3,
    relatedKeywords: [
      "mse pcp claim",
      "martin lewis pcp claim"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "What does Martin Lewis say about PCP claims?",
        "Are PCP claims on Money Saving Expert?",
        "Is MSE covering PCP claims?"
      ],
      topCompetitors: [
        { domain: "moneysavingexpert.com", url: "", strength: "strong" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "PLANNED - Informational, cite MSE validation."
  },

  {
    keyword: "pcp hp claim",
    searchVolume: 550,
    difficulty: 3,
    intent: "informational",
    priority: 2,
    relatedKeywords: [
      "pcp and hp claims",
      "hp vs pcp claims"
    ],
    serp: {
      hasFeaturedSnippet: false,
      peopleAlsoAsk: [
        "What's the difference between PCP and HP claims?",
        "Can I claim on both PCP and HP?",
        "Are HP and PCP claims the same?"
      ],
      topCompetitors: [
        { domain: "various", url: "", strength: "moderate" }
      ]
    },
    lastResearched: "2025-12-18",
    notes: "PLANNED - Comparison content opportunity."
  },
]

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Find keyword data by keyword string (exact or related match)
 */
export function getKeywordData(keyword: string): KeywordData | undefined {
  const normalized = keyword.toLowerCase().trim()
  return keywordDatabase.find(k => 
    k.keyword.toLowerCase() === normalized ||
    k.relatedKeywords.some(r => r.toLowerCase() === normalized)
  )
}

/**
 * Get all untargeted keywords (no content created yet)
 * Sorted by priority, then search volume
 */
export function getUntargetedKeywords(): KeywordData[] {
  return keywordDatabase
    .filter(k => !k.targetedBy)
    .sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority // Lower number = higher priority
      }
      return b.searchVolume - a.searchVolume // Higher volume first
    })
}

/**
 * Get high-priority content opportunities (Priority 1-2, not yet targeted)
 */
export function getContentOpportunities(): KeywordData[] {
  return keywordDatabase
    .filter(k => !k.targetedBy && k.priority <= 2)
    .sort((a, b) => b.searchVolume - a.searchVolume)
}

/**
 * Get featured snippet opportunities
 */
export function getFeaturedSnippetOpportunities(): KeywordData[] {
  return keywordDatabase
    .filter(k => k.serp.hasFeaturedSnippet && !k.targetedBy)
    .sort((a, b) => a.difficulty - b.difficulty) // Easiest first
}

/**
 * Get keywords by lender
 */
export function getLenderKeywords(): KeywordData[] {
  return keywordDatabase.filter(k => 
    k.keyword.includes("black horse") ||
    k.keyword.includes("santander") ||
    k.keyword.includes("close brothers") ||
    k.keyword.includes("moneybarn") ||
    k.keyword.includes("moto novo")
  )
}

/**
 * Get all People Also Ask questions across all keywords
 */
export function getAllPAAQuestions(): string[] {
  const questions = new Set<string>()
  keywordDatabase.forEach(k => {
    k.serp.peopleAlsoAsk.forEach(q => questions.add(q))
  })
  return Array.from(questions).sort()
}

/**
 * Find which keyword a slug is targeting
 */
export function getKeywordBySlug(slug: string): KeywordData | undefined {
  return keywordDatabase.find(k => k.targetedBy === slug)
}

/**
 * Get related keywords for internal linking suggestions
 */
export function getRelatedKeywords(keyword: string, limit: number = 5): KeywordData[] {
  const targetKeyword = getKeywordData(keyword)
  if (!targetKeyword) return []

  // Find keywords with overlapping related keywords or similar intent
  return keywordDatabase
    .filter(k => 
      k.keyword !== targetKeyword.keyword &&
      k.targetedBy && // Only include published content
      (
        k.intent === targetKeyword.intent || // Same intent
        k.relatedKeywords.some(r => 
          targetKeyword.relatedKeywords.includes(r)
        ) // Overlapping keywords
      )
    )
    .slice(0, limit)
}

/**
 * Get keyword statistics
 */
export function getKeywordStats() {
  const total = keywordDatabase.length
  const targeted = keywordDatabase.filter(k => k.targetedBy).length
  const untargeted = total - targeted
  const priority1 = keywordDatabase.filter(k => k.priority === 1).length
  const priority2 = keywordDatabase.filter(k => k.priority === 2).length
  const priority3 = keywordDatabase.filter(k => k.priority === 3).length
  const totalVolume = keywordDatabase.reduce((sum, k) => sum + k.searchVolume, 0)
  const targetedVolume = keywordDatabase
    .filter(k => k.targetedBy)
    .reduce((sum, k) => sum + k.searchVolume, 0)

  return {
    total,
    targeted,
    untargeted,
    priority1,
    priority2,
    priority3,
    totalVolume,
    targetedVolume,
    untargetedVolume: totalVolume - targetedVolume,
    coveragePercent: ((targeted / total) * 100).toFixed(1)
  }
}


