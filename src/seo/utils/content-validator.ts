/**
 * CONTENT VALIDATOR
 * ==================
 * 
 * Validates blog posts against SEO and compliance rules.
 * Combines SEO best practices with compliance requirements.
 */

import { BlogPost } from "@/types/blog"
import { SEOValidation, KeywordAnalysis } from "@/seo/types/seo"
import { seoRules, seoScoreWeights, getGradeFromScore } from "@/seo/config/seo-rules.config"
import { contentRules } from "@/config/content-rules.config"
import { getKeywordData } from "@/seo/data/keywords"
import { analyzeContent } from "./content-analyzer"

/**
 * Main validation function - validates a blog post against all SEO & compliance rules
 */
export function validateSEOCompliance(post: BlogPost): SEOValidation {
  const errors: SEOValidation['errors'] = []
  const warnings: SEOValidation['warnings'] = []
  const recommendations: SEOValidation['recommendations'] = []
  
  // Get keyword data if exists
  const keywordData = getKeywordData(post.seo.title)
  const targetKeyword = keywordData?.keyword || post.seo.keywords?.[0] || ""
  
  // Analyze content metrics
  const contentMetrics = analyzeContent(post.content)
  
  // Calculate sub-scores
  const metadataScore = validateMetadata(post, targetKeyword, errors, warnings)
  const contentScore = validateContentQuality(post, targetKeyword, contentMetrics, errors, warnings, recommendations)
  const linkingScore = validateLinking(post, errors, warnings, recommendations)
  const complianceScore = validateCompliance(post, errors, warnings)
  const readabilityScore = validateReadability(contentMetrics, warnings, recommendations)
  
  // Calculate weighted total score
  const totalScore = Math.round(
    (metadataScore * seoScoreWeights.metadata +
     contentScore * seoScoreWeights.content +
     linkingScore * seoScoreWeights.linking +
     complianceScore * seoScoreWeights.compliance +
     readabilityScore * seoScoreWeights.readability) / 100
  )
  
  const grade = getGradeFromScore(totalScore)
  const valid = errors.length === 0
  
  return {
    valid,
    score: totalScore,
    grade,
    errors,
    warnings,
    recommendations,
    breakdown: {
      metadata: Math.round(metadataScore),
      content: Math.round(contentScore),
      linking: Math.round(linkingScore),
      compliance: Math.round(complianceScore),
      readability: Math.round(readabilityScore),
    }
  }
}

/**
 * Validate metadata (title, description, keywords)
 */
function validateMetadata(
  post: BlogPost,
  targetKeyword: string,
  errors: SEOValidation['errors'],
  warnings: SEOValidation['warnings']
): number {
  let score = 100
  const { title, description, keywords } = post.seo
  
  // Title validation
  if (title.length < seoRules.metadata.title.minLength) {
    errors.push({
      severity: "error",
      message: `SEO title too short: ${title.length} chars (minimum: ${seoRules.metadata.title.minLength})`,
      field: "seo.title"
    })
    score -= 15
  }
  
  if (title.length > seoRules.metadata.title.maxLength) {
    errors.push({
      severity: "error",
      message: `SEO title too long: ${title.length} chars (maximum: ${seoRules.metadata.title.maxLength})`,
      field: "seo.title"
    })
    score -= 15
  }
  
  if (targetKeyword && !title.toLowerCase().includes(targetKeyword.toLowerCase())) {
    warnings.push({
      severity: "warning",
      message: `Title doesn't include target keyword: "${targetKeyword}"`,
      field: "seo.title"
    })
    score -= 10
  }
  
  // Check forbidden patterns in title
  seoRules.metadata.title.forbiddenPatterns.forEach(pattern => {
    if (pattern.test(title)) {
      errors.push({
        severity: "error",
        message: `Title contains forbidden pattern: ${pattern}`,
        field: "seo.title"
      })
      score -= 10
    }
  })
  
  // Description validation
  if (description.length < seoRules.metadata.description.minLength) {
    errors.push({
      severity: "error",
      message: `Meta description too short: ${description.length} chars (minimum: ${seoRules.metadata.description.minLength})`,
      field: "seo.description"
    })
    score -= 15
  }
  
  if (description.length > seoRules.metadata.description.maxLength) {
    errors.push({
      severity: "error",
      message: `Meta description too long: ${description.length} chars (maximum: ${seoRules.metadata.description.maxLength})`,
      field: "seo.description"
    })
    score -= 15
  }
  
  if (targetKeyword && !description.toLowerCase().includes(targetKeyword.toLowerCase())) {
    warnings.push({
      severity: "warning",
      message: `Description doesn't include target keyword: "${targetKeyword}"`,
      field: "seo.description"
    })
    score -= 10
  }
  
  // Check for CTA in description
  const hasCTA = seoRules.metadata.description.ctaExamples.some(cta => 
    description.toLowerCase().includes(cta.toLowerCase())
  )
  if (!hasCTA) {
    warnings.push({
      severity: "warning",
      message: "Description should include a call-to-action",
      field: "seo.description"
    })
    score -= 5
  }
  
  // Keywords validation
  if (!keywords || keywords.length < seoRules.metadata.keywords.minCount) {
    warnings.push({
      severity: "warning",
      message: `Should have at least ${seoRules.metadata.keywords.minCount} keywords`,
      field: "seo.keywords"
    })
    score -= 5
  }
  
  return Math.max(0, score)
}

/**
 * Validate content quality (length, structure, keyword usage)
 */
function validateContentQuality(
  post: BlogPost,
  targetKeyword: string,
  metrics: ReturnType<typeof analyzeContent>,
  errors: SEOValidation['errors'],
  warnings: SEOValidation['warnings'],
  recommendations: SEOValidation['recommendations']
): number {
  let score = 100
  
  // Word count validation
  if (metrics.wordCount < seoRules.content.wordCount.minimum) {
    errors.push({
      severity: "error",
      message: `Content too short: ${metrics.wordCount} words (minimum: ${seoRules.content.wordCount.minimum})`,
      field: "content"
    })
    score -= 20
  } else if (metrics.wordCount < seoRules.content.wordCount.recommended) {
    warnings.push({
      severity: "warning",
      message: `Content below recommended length: ${metrics.wordCount} words (recommended: ${seoRules.content.wordCount.recommended})`,
      field: "content"
    })
    score -= 10
  }
  
  if (metrics.wordCount > seoRules.content.wordCount.maximum) {
    warnings.push({
      severity: "warning",
      message: `Content very long: ${metrics.wordCount} words (maximum: ${seoRules.content.wordCount.maximum}). Consider splitting into multiple posts.`,
      field: "content"
    })
    score -= 5
  }
  
  // Heading structure validation
  if (metrics.headingStructure.h1Count === 0) {
    errors.push({
      severity: "critical",
      message: "Content must have exactly one H1 heading",
      field: "content"
    })
    score -= 25
  } else if (metrics.headingStructure.h1Count > 1) {
    errors.push({
      severity: "error",
      message: `Content has ${metrics.headingStructure.h1Count} H1 headings (should have exactly 1)`,
      field: "content"
    })
    score -= 15
  }
  
  if (metrics.headingStructure.h2Count < seoRules.content.headingStructure.minH2Count) {
    warnings.push({
      severity: "warning",
      message: `Content has ${metrics.headingStructure.h2Count} H2 headings (minimum: ${seoRules.content.headingStructure.minH2Count})`,
      field: "content"
    })
    score -= 10
  }
  
  if (!metrics.headingStructure.properHierarchy) {
    errors.push({
      severity: "error",
      message: "Heading hierarchy is incorrect (e.g., H1 → H3 without H2)",
      field: "content"
    })
    score -= 10
  }
  
  // Keyword analysis
  if (targetKeyword) {
    const keywordAnalysis = analyzeKeyword(post.content, targetKeyword)
    
    if (keywordAnalysis.density < seoRules.content.keywordOptimization.density.min) {
      warnings.push({
        severity: "warning",
        message: `Keyword density too low: ${keywordAnalysis.density.toFixed(2)}% (minimum: ${seoRules.content.keywordOptimization.density.min}%)`,
        field: "content"
      })
      score -= 10
    } else if (keywordAnalysis.density > seoRules.content.keywordOptimization.density.max) {
      errors.push({
        severity: "error",
        message: `Keyword density too high: ${keywordAnalysis.density.toFixed(2)}% (maximum: ${seoRules.content.keywordOptimization.density.max}%). Risk of keyword stuffing!`,
        field: "content"
      })
      score -= 15
    }
    
    if (!keywordAnalysis.foundInH1) {
      warnings.push({
        severity: "warning",
        message: "Target keyword not found in H1 heading",
        field: "content"
      })
      score -= 10
    }
    
    if (keywordAnalysis.occurrences === 0) {
      errors.push({
        severity: "error",
        message: "Target keyword not found in content",
        field: "content"
      })
      score -= 20
    }
  }
  
  // Readability checks
  if (metrics.averageSentenceLength > seoRules.content.readability.averageSentenceLength.max) {
    recommendations.push({
      severity: "info",
      message: `Average sentence length is ${metrics.averageSentenceLength.toFixed(1)} words. Consider breaking up long sentences for better readability.`,
      impact: "medium"
    })
    score -= 5
  }
  
  return Math.max(0, score)
}

/**
 * Validate internal and external linking
 */
function validateLinking(
  post: BlogPost,
  errors: SEOValidation['errors'],
  warnings: SEOValidation['warnings'],
  recommendations: SEOValidation['recommendations']
): number {
  let score = 100
  
  // Extract links from content
  const internalLinks = extractLinks(post.content, 'internal')
  const externalLinks = extractLinks(post.content, 'external')
  
  // Internal link validation
  if (internalLinks.length < seoRules.linking.internal.min) {
    warnings.push({
      severity: "warning",
      message: `Only ${internalLinks.length} internal links (minimum: ${seoRules.linking.internal.min})`,
      field: "content"
    })
    score -= 15
  }
  
  if (internalLinks.length > seoRules.linking.internal.max) {
    warnings.push({
      severity: "warning",
      message: `${internalLinks.length} internal links (maximum: ${seoRules.linking.internal.max}). Too many links can dilute link equity.`,
      field: "content"
    })
    score -= 5
  }
  
  // External link validation
  if (externalLinks.length < seoRules.linking.external.min) {
    recommendations.push({
      severity: "info",
      message: "Consider adding at least one authoritative external source (e.g., FCA, gov.uk)",
      impact: "medium"
    })
    score -= 10
  }
  
  // Check for generic anchor text
  const genericAnchors = ['click here', 'read more', 'here', 'this']
  const hasGenericAnchors = genericAnchors.some(anchor => 
    post.content.toLowerCase().includes(`[${anchor}]`) ||
    post.content.toLowerCase().includes(`>${anchor}<`)
  )
  
  if (hasGenericAnchors) {
    warnings.push({
      severity: "warning",
      message: "Avoid generic anchor text like 'click here' or 'read more'. Use descriptive, keyword-rich anchors.",
      field: "content"
    })
    score -= 10
  }
  
  return Math.max(0, score)
}

/**
 * Validate compliance using existing content rules
 */
function validateCompliance(
  post: BlogPost,
  errors: SEOValidation['errors'],
  warnings: SEOValidation['warnings']
): number {
  let score = 100
  
  // Check if post is marked as compliance verified
  if (!post.compliance?.verified) {
    errors.push({
      severity: "critical",
      message: "Post is not marked as compliance verified. Set compliance.verified to true after review.",
      field: "compliance.verified"
    })
    score -= 50
  }
  
  // Run content audit from content-rules.config
  const complianceIssues = contentRules.auditContent(post.content)
  
  complianceIssues.forEach(issue => {
    if (issue.startsWith('❌')) {
      errors.push({
        severity: "critical",
        message: issue,
        field: "content"
      })
      score -= 15
    } else if (issue.startsWith('⚠️')) {
      warnings.push({
        severity: "warning",
        message: issue,
        field: "content"
      })
      score -= 5
    }
  })
  
  // Check compliance fields
  if (!post.compliance?.sources || post.compliance.sources.length === 0) {
    warnings.push({
      severity: "warning",
      message: "No compliance sources documented. Add references to Motor Finance Redress or other verified sources.",
      field: "compliance.sources"
    })
    score -= 10
  }
  
  return Math.max(0, score)
}

/**
 * Validate readability metrics
 */
function validateReadability(
  metrics: ReturnType<typeof analyzeContent>,
  warnings: SEOValidation['warnings'],
  recommendations: SEOValidation['recommendations']
): number {
  let score = 100
  
  if (metrics.averageSentenceLength > 25) {
    recommendations.push({
      severity: "info",
      message: "Sentences are quite long on average. Consider shorter, punchier sentences for better readability.",
      impact: "medium"
    })
    score -= 10
  }
  
  if (metrics.averageParagraphLength > 150) {
    recommendations.push({
      severity: "info",
      message: "Paragraphs are quite long on average. Break them up for easier reading.",
      impact: "low"
    })
    score -= 5
  }
  
  return Math.max(0, score)
}

/**
 * Analyze keyword usage in content
 */
export function analyzeKeyword(content: string, keyword: string): KeywordAnalysis {
  const lowerContent = content.toLowerCase()
  const lowerKeyword = keyword.toLowerCase()
  
  // Count exact matches
  const regex = new RegExp(lowerKeyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi')
  const matches = content.match(regex)
  const occurrences = matches ? matches.length : 0
  
  // Calculate density
  const wordCount = content.split(/\s+/).length
  const density = (occurrences / wordCount) * 100
  
  // Check placements
  const foundInTitle = lowerContent.includes(lowerKeyword)
  const foundInH1 = /^#\s+.*/.test(content) && content.split('\n').find(line => line.startsWith('# '))?.toLowerCase().includes(lowerKeyword) || false
  
  return {
    keyword,
    foundInTitle,
    foundInDescription: true, // Would need description parameter
    foundInH1,
    foundInContent: occurrences > 0,
    occurrences,
    density,
    naturalUsage: density >= 0.5 && density <= 2.5,
    relatedKeywordsUsed: [], // Would need to check for related keywords
  }
}

/**
 * Extract links from content
 */
function extractLinks(content: string, type: 'internal' | 'external'): string[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const links: string[] = []
  let match
  
  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[2]
    const isInternal = url.startsWith('/') || url.startsWith('#') || !url.includes('://')
    
    if ((type === 'internal' && isInternal) || (type === 'external' && !isInternal)) {
      links.push(url)
    }
  }
  
  return links
}

/**
 * Quick validation check - returns boolean for publish readiness
 */
export function isPublishReady(post: BlogPost): boolean {
  const validation = validateSEOCompliance(post)
  return validation.valid && validation.score >= 70
}

/**
 * Get validation summary for console/logging
 */
export function getValidationSummary(validation: SEOValidation): string {
  const lines = [
    `SEO Score: ${validation.score}/100 (${validation.grade})`,
    `Status: ${validation.valid ? '✅ Ready to publish' : '❌ Needs fixes'}`,
    '',
    'Breakdown:',
    `  Metadata: ${validation.breakdown.metadata}/100`,
    `  Content: ${validation.breakdown.content}/100`,
    `  Linking: ${validation.breakdown.linking}/100`,
    `  Compliance: ${validation.breakdown.compliance}/100`,
    `  Readability: ${validation.breakdown.readability}/100`,
  ]
  
  if (validation.errors.length > 0) {
    lines.push('')
    lines.push(`Errors (${validation.errors.length}):`)
    validation.errors.forEach(err => {
      lines.push(`  ❌ ${err.message}`)
    })
  }
  
  if (validation.warnings.length > 0) {
    lines.push('')
    lines.push(`Warnings (${validation.warnings.length}):`)
    validation.warnings.forEach(warn => {
      lines.push(`  ⚠️  ${warn.message}`)
    })
  }
  
  return lines.join('\n')
}


