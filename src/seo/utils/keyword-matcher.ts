/**
 * KEYWORD MATCHER
 * ================
 * 
 * Utilities for matching content to keywords and suggesting optimizations
 */

import { KeywordData } from "@/seo/types/seo"
import { keywordDatabase, getKeywordData } from "@/seo/data/keywords"

/**
 * Find best matching keyword for a piece of content
 */
export function findBestKeyword(title: string, content?: string): KeywordData | undefined {
  const lowerTitle = title.toLowerCase()
  
  // Try exact match first
  let bestMatch = keywordDatabase.find(k => 
    lowerTitle.includes(k.keyword.toLowerCase())
  )
  
  if (bestMatch) return bestMatch
  
  // Try related keywords
  bestMatch = keywordDatabase.find(k => 
    k.relatedKeywords.some(related => lowerTitle.includes(related.toLowerCase()))
  )
  
  if (bestMatch) return bestMatch
  
  // If content provided, check content too
  if (content) {
    const lowerContent = content.toLowerCase().substring(0, 500) // First 500 chars
    
    bestMatch = keywordDatabase.find(k => 
      lowerContent.includes(k.keyword.toLowerCase())
    )
  }
  
  return bestMatch
}

/**
 * Suggest keywords for new content based on topic
 */
export function suggestKeywords(topic: string, limit: number = 5): KeywordData[] {
  const lowerTopic = topic.toLowerCase()
  
  // Score keywords by relevance
  const scored = keywordDatabase.map(keyword => {
    let score = 0
    
    // Exact keyword match
    if (keyword.keyword.toLowerCase().includes(lowerTopic)) {
      score += 10
    }
    
    // Related keyword match
    if (keyword.relatedKeywords.some(r => r.toLowerCase().includes(lowerTopic))) {
      score += 5
    }
    
    // Prioritize untargeted keywords
    if (!keyword.targetedBy) {
      score += 3
    }
    
    // Prioritize high-priority keywords
    score += (4 - keyword.priority) // Priority 1 = +3, Priority 2 = +2, etc.
    
    // Bonus for featured snippet opportunities
    if (keyword.serp.hasFeaturedSnippet) {
      score += 2
    }
    
    return { keyword, score }
  })
  
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.keyword)
}

/**
 * Get content gaps - keywords we should target but haven't yet
 */
export function getContentGaps(options?: {
  priority?: 1 | 2 | 3
  minSearchVolume?: number
  hasFeaturedSnippet?: boolean
}): KeywordData[] {
  return keywordDatabase.filter(keyword => {
    // Must not be targeted yet
    if (keyword.targetedBy) return false
    
    // Apply filters
    if (options?.priority && keyword.priority !== options.priority) return false
    if (options?.minSearchVolume && keyword.searchVolume < options.minSearchVolume) return false
    if (options?.hasFeaturedSnippet && !keyword.serp.hasFeaturedSnippet) return false
    
    return true
  }).sort((a, b) => {
    // Sort by priority first, then search volume
    if (a.priority !== b.priority) {
      return a.priority - b.priority
    }
    return b.searchVolume - a.searchVolume
  })
}

/**
 * Get quick wins - easy keywords with good volume not yet targeted
 */
export function getQuickWins(limit: number = 10): KeywordData[] {
  return keywordDatabase
    .filter(k => !k.targetedBy && k.difficulty <= 2 && k.searchVolume >= 500)
    .sort((a, b) => b.searchVolume - a.searchVolume)
    .slice(0, limit)
}

/**
 * Get lender opportunities - lender-specific keywords not yet targeted
 */
export function getLenderOpportunities(): Array<{
  lender: string
  keywords: KeywordData[]
}> {
  const lenders = [
    "black horse",
    "santander",
    "close brothers",
    "moneybarn",
    "moto novo",
    "barclays",
    "hsbc"
  ]
  
  return lenders.map(lender => ({
    lender,
    keywords: keywordDatabase.filter(k => 
      !k.targetedBy && k.keyword.toLowerCase().includes(lender)
    )
  })).filter(l => l.keywords.length > 0)
}

/**
 * Calculate keyword difficulty score (custom algorithm)
 */
export function calculateKeywordDifficulty(keyword: KeywordData): {
  score: number
  factors: string[]
} {
  const factors: string[] = []
  let score = keyword.difficulty * 20 // Base score from difficulty rating
  
  // Search volume increases difficulty
  if (keyword.searchVolume > 10000) {
    score += 20
    factors.push("High search volume")
  } else if (keyword.searchVolume > 5000) {
    score += 10
    factors.push("Moderate search volume")
  }
  
  // Strong competitors increase difficulty
  const strongCompetitors = keyword.serp.topCompetitors.filter(c => c.strength === "strong").length
  if (strongCompetitors > 2) {
    score += 15
    factors.push(`${strongCompetitors} strong competitors`)
  } else if (strongCompetitors > 0) {
    score += 5
    factors.push(`${strongCompetitors} strong competitor(s)`)
  }
  
  // Featured snippet opportunity reduces difficulty (easier to win)
  if (keyword.serp.hasFeaturedSnippet) {
    score -= 10
    factors.push("Featured snippet opportunity")
  }
  
  return {
    score: Math.min(100, Math.max(0, score)),
    factors
  }
}

/**
 * Get keyword strategy recommendation
 */
export function getKeywordStrategy(keyword: KeywordData): {
  approach: string
  targetWordCount: { min: number; max: number }
  contentType: string
  tips: string[]
} {
  const tips: string[] = []
  let approach = ""
  let contentType = ""
  let wordCount = { min: 1500, max: 2000 }
  
  // Determine approach based on intent
  switch (keyword.intent) {
    case "informational":
      approach = "Educational & comprehensive"
      contentType = "Guide or explainer article"
      tips.push("Answer 'What', 'Why', and 'How' questions")
      tips.push("Include definitions and examples")
      break
    case "commercial":
      approach = "Solution-focused with soft CTA"
      contentType = "Service page or comparison guide"
      tips.push("Highlight benefits and process")
      tips.push("Include trust signals (compliance, expertise)")
      break
    case "transactional":
      approach = "Direct and conversion-focused"
      contentType = "Landing page or tool page"
      tips.push("Clear value proposition")
      tips.push("Strong, compliant CTA")
      break
    case "navigational":
      approach = "Brand/topic-specific and authoritative"
      contentType = "Lender-specific guide"
      tips.push("Specific to that brand/lender")
      tips.push("Include process details")
      break
  }
  
  // Adjust word count based on difficulty
  if (keyword.difficulty >= 4) {
    wordCount = { min: 2000, max: 2500 }
    tips.push("Comprehensive coverage needed for competitive keyword")
  } else if (keyword.difficulty <= 2) {
    wordCount = { min: 1000, max: 1500 }
    tips.push("Concise, focused content can rank well")
  }
  
  // Featured snippet strategy
  if (keyword.serp.hasFeaturedSnippet) {
    tips.push(`Target featured snippet with ${keyword.serp.snippetType || 'paragraph'} format`)
    tips.push("Include concise answer (40-60 words) near top")
  }
  
  // PAA strategy
  if (keyword.serp.peopleAlsoAsk.length > 0) {
    tips.push(`Include ${keyword.serp.peopleAlsoAsk.length} PAA questions as H2/H3 headings`)
  }
  
  return {
    approach,
    targetWordCount: wordCount,
    contentType,
    tips
  }
}

/**
 * Check if keyword is already targeted
 */
export function isKeywordTargeted(keyword: string): boolean {
  const keywordData = getKeywordData(keyword)
  return keywordData ? !!keywordData.targetedBy : false
}

/**
 * Get keyword clustering suggestions (related keywords to target together)
 */
export function getKeywordCluster(primaryKeyword: string): KeywordData[] {
  const primary = getKeywordData(primaryKeyword)
  if (!primary) return []
  
  // Find keywords with overlapping related keywords or same intent
  return keywordDatabase.filter(k => {
    if (k.keyword === primary.keyword) return false
    if (k.targetedBy) return false // Already targeted
    
    // Same intent
    if (k.intent === primary.intent) {
      // Check for keyword overlap
      const hasOverlap = k.relatedKeywords.some(related => 
        primary.relatedKeywords.includes(related) ||
        primary.keyword.toLowerCase().includes(related.toLowerCase()) ||
        related.toLowerCase().includes(primary.keyword.toLowerCase())
      )
      return hasOverlap
    }
    
    return false
  }).slice(0, 5)
}


