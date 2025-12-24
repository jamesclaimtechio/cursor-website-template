/**
 * SEO Content Engine - Type Definitions
 * =====================================
 * Central types for keyword research, content briefs, and validation
 * 
 * This system works alongside content-rules.config.ts (compliance)
 * to ensure content is both SEO-optimized AND compliant.
 */

export interface KeywordData {
  keyword: string
  searchVolume: number          // Monthly searches (UK)
  difficulty: 1 | 2 | 3 | 4 | 5 // 1=easy, 5=very hard
  intent: "informational" | "navigational" | "commercial" | "transactional"
  priority: 1 | 2 | 3           // 1=highest priority
  targetedBy?: string           // Slug of post targeting this keyword
  relatedKeywords: string[]     // Semantic variations
  serp: {
    hasFeaturedSnippet: boolean
    snippetType?: "paragraph" | "list" | "table"
    peopleAlsoAsk: string[]     // Questions from SERP PAA box
    topCompetitors: Array<{
      domain: string
      url: string
      strength: "weak" | "moderate" | "strong"
      contentGaps?: string[]    // What they're missing
    }>
  }
  lastResearched: string        // YYYY-MM-DD
  notes?: string                // Internal notes about this keyword
}

export interface ContentBrief {
  title: string
  slug: string
  primaryKeyword: string
  secondaryKeywords: string[]
  searchIntent: "informational" | "commercial" | "navigational" | "transactional"
  targetAudience: string
  
  // SERP-driven requirements
  requiredSections: Array<{
    heading: string
    purpose: string             // Why this section is needed
    targetKeyword?: string      // If targeting specific related keyword
    minWords?: number           // Minimum length for this section
  }>
  
  // Competitive analysis
  competitorGaps: string[]      // What competitors are missing
  opportunities: string[]       // Featured snippet, PAA, local pack, etc.
  
  // Compliance & sourcing
  complianceNotes: string[]     // Must reference Motor Finance Redress, etc.
  requiredSources: string[]     // Which docs to cite
  prohibitedClaims: string[]    // Specific things NOT to say
  
  // Internal optimization
  internalLinks: Array<{
    toSlug: string
    suggestedAnchor: string
    context: string             // Where/why to place it
    relationship: "pillar" | "related" | "supporting"
  }>
  
  // Targets
  targetWordCount: { min: number; max: number }
  targetReadingLevel: string    // "8th grade", "general audience", etc.
  estimatedTime: string         // "5 min read", "10 min read"
  
  // Metadata
  createdDate: string
  lastUpdated: string
  createdBy: string
}

export interface TopicCluster {
  name: string
  description: string
  pillarPage: {
    slug: string
    keyword: string
    title: string
    status: "published" | "draft" | "planned"
  }
  clusters: Array<{
    name: string                // Subtopic name (e.g., "Lender-Specific Claims")
    description: string
    content: Array<{
      slug: string
      keyword: string
      title: string
      relationship: "subtopic" | "related" | "comparison" | "how-to" | "lender-specific"
      status: "published" | "draft" | "planned"
    }>
  }>
}

export interface SEOValidation {
  valid: boolean
  score: number                 // 0-100
  grade: "A" | "B" | "C" | "D" | "F"
  errors: Array<{
    severity: "critical" | "error"
    message: string
    field?: string
  }>
  warnings: Array<{
    severity: "warning"
    message: string
    field?: string
  }>
  recommendations: Array<{
    severity: "info"
    message: string
    impact: "high" | "medium" | "low"
  }>
  breakdown: {
    metadata: number            // Score 0-100
    content: number             // Score 0-100
    linking: number             // Score 0-100
    compliance: number          // Score 0-100
    readability: number         // Score 0-100
  }
}

export interface KeywordAnalysis {
  keyword: string
  foundInTitle: boolean
  foundInDescription: boolean
  foundInH1: boolean
  foundInContent: boolean
  occurrences: number
  density: number               // Percentage
  naturalUsage: boolean         // Not stuffed
  relatedKeywordsUsed: string[] // Which related keywords were found
}

export interface ContentMetrics {
  wordCount: number
  paragraphCount: number
  sentenceCount: number
  averageSentenceLength: number
  averageParagraphLength: number
  readingTime: string           // "5 min"
  readingLevel: string          // "8th grade"
  headingStructure: {
    h1Count: number
    h2Count: number
    h3Count: number
    h4Count: number
    properHierarchy: boolean
  }
  linkAnalysis: {
    internalLinks: number
    externalLinks: number
    totalLinks: number
    brokenLinks: number
  }
}

/**
 * Helper type for search intent classification
 */
export type SearchIntent = {
  primary: "informational" | "navigational" | "commercial" | "transactional"
  secondary?: string[]
  signals: string[]             // What indicates this intent
}

/**
 * Helper type for content optimization
 */
export interface ContentOptimization {
  keyword: string
  currentScore: number
  potentialScore: number
  optimizations: Array<{
    type: "metadata" | "content" | "structure" | "links"
    action: string
    impact: "high" | "medium" | "low"
    effort: "low" | "medium" | "high"
  }>
}


