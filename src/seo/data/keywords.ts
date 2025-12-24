import { KeywordData } from "@/seo/types/seo"

/**
 * KEYWORD RESEARCH DATABASE
 * =========================
 * 
 * BRAND SETUP: Replace this template with YOUR keyword research
 * 
 * CURSOR AI: When user says "add keyword research":
 * 1. Ask for their industry/niche
 * 2. Request their keyword list with volumes
 * 3. For each keyword, gather: volume, difficulty, intent, SERP data
 * 4. Follow the structure below
 * 5. Organize by priority (Pillar → Cluster → Long-tail)
 * 
 * HOW TO GATHER KEYWORD DATA:
 * ===========================
 * 
 * Tools to use:
 * - Google Keyword Planner (free with Google Ads account)
 * - Google Search Console (if site already exists)
 * - Ahrefs, SEMrush, or Moz (paid tools)
 * - Google Trends for seasonal patterns
 * - "People Also Ask" from actual Google searches
 * 
 * For each keyword, capture:
 * 1. Monthly search volume
 * 2. Competition level (1-5 scale)
 * 3. Search intent (informational/navigational/commercial/transactional)
 * 4. Related questions (from "People Also Ask")
 * 5. Related searches (from bottom of Google results)
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
 * - navigational: User looking for specific brand/page
 * - commercial: User researching options ("best", "vs", "review")
 * - transactional: User ready to act ("buy", "get", "start")
 */

export const keywordDatabase: KeywordData[] = [
  // ============================================================================
  // EXAMPLE TEMPLATE - DELETE AND REPLACE WITH YOUR KEYWORDS
  // ============================================================================
  
  // PILLAR CONTENT (Priority 1) - Your main topic
  // {
  //   keyword: "{{YOUR_MAIN_KEYWORD}}", // e.g., "legal services", "home insurance claims"
  //   searchVolume: 10000, // Monthly searches
  //   difficulty: 4, // 1-5 scale
  //   intent: "commercial", // informational | navigational | commercial | transactional
  //   priority: 1, // 1 = Pillar, 2 = Cluster, 3 = Long-tail
  //   targetedBy: null, // null until you create content, then add slug
  //   relatedKeywords: [
  //     "{{RELATED_TERM_1}}",
  //     "{{RELATED_TERM_2}}",
  //     "{{RELATED_TERM_3}}",
  //   ],
  //   serp: {
  //     peopleAlsoAsk: [
  //       "{{QUESTION_1}}?",
  //       "{{QUESTION_2}}?",
  //       "{{QUESTION_3}}?",
  //     ],
  //     relatedSearches: [
  //       "{{related search 1}}",
  //       "{{related search 2}}",
  //     ],
  //     topRankingTypes: ["blog", "landing-page"], // What types of pages rank?
  //     features: ["featured-snippet", "people-also-ask"], // SERP features present
  //   },
  //   researchDate: "2025-12-24",
  //   notes: "Main pillar keyword - create comprehensive guide",
  // },
  
  // CLUSTER CONTENT (Priority 2) - Supporting topics
  // {
  //   keyword: "{{CLUSTER_KEYWORD}}",
  //   searchVolume: 5000,
  //   difficulty: 3,
  //   intent: "informational",
  //   priority: 2,
  //   targetedBy: null,
  //   relatedKeywords: [],
  //   serp: {
  //     peopleAlsoAsk: [],
  //     relatedSearches: [],
  //     topRankingTypes: ["blog"],
  //     features: [],
  //   },
  //   researchDate: "2025-12-24",
  //   notes: "Supports main pillar - internal link opportunity",
  // },
  
  // LONG-TAIL CONTENT (Priority 3) - Specific queries
  // {
  //   keyword: "{{LONG_TAIL_KEYWORD}}",
  //   searchVolume: 500,
  //   difficulty: 1,
  //   intent: "informational",
  //   priority: 3,
  //   targetedBy: null,
  //   relatedKeywords: [],
  //   serp: {
  //     peopleAlsoAsk: [],
  //     relatedSearches: [],
  //     topRankingTypes: ["blog"],
  //     features: [],
  //   },
  //   researchDate: "2025-12-24",
  //   notes: "Easy win - low competition, specific question",
  // },
  
  // Add 20-50 keywords covering your niche
  // Organize by priority: Pillar → Cluster → Long-tail
]

/**
 * HELPER FUNCTIONS
 * ================
 * These utility functions help you work with the keyword database
 * Keep these - they're generic and work with any keyword set
 */

export function getKeywordBySlug(slug: string): KeywordData | undefined {
  return keywordDatabase.find(k => k.targetedBy === slug)
}

export function getUntargetedKeywords(): KeywordData[] {
  return keywordDatabase.filter(k => !k.targetedBy)
}

export function getKeywordsByPriority(priority: 1 | 2 | 3): KeywordData[] {
  return keywordDatabase.filter(k => k.priority === priority)
}

export function getKeywordsByIntent(intent: KeywordData['intent']): KeywordData[] {
  return keywordDatabase.filter(k => k.intent === intent)
}

export function getQuickWins(): KeywordData[] {
  return keywordDatabase.filter(k => 
    k.difficulty <= 2 && 
    k.searchVolume >= 100 &&
    !k.targetedBy
  )
}

export function getContentGaps(): KeywordData[] {
  return keywordDatabase.filter(k => 
    k.priority === 1 && 
    !k.targetedBy
  )
}

/**
 * USAGE EXAMPLE (After adding your keywords):
 * ============================================
 * 
 * import { keywordDatabase, getQuickWins, getContentGaps } from '@/seo/data/keywords'
 * 
 * // Find easy content opportunities
 * const quickWins = getQuickWins()
 * console.log(`${quickWins.length} quick win opportunities`)
 * 
 * // Find untargeted pillar topics
 * const gaps = getContentGaps()
 * console.log(`${gaps.length} important topics not yet covered`)
 * 
 * // Get all informational keywords
 * const infoKeywords = getKeywordsByIntent('informational')
 * 
 * See docs/SEO_CONTENT_ENGINE.md for complete usage guide
 */

