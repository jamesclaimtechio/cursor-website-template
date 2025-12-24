/**
 * CONTENT ANALYZER
 * =================
 * 
 * Analyzes content metrics: word count, readability, structure, etc.
 */

import { ContentMetrics } from "@/seo/types/seo"

/**
 * Analyze content and return detailed metrics
 */
export function analyzeContent(content: string): ContentMetrics {
  // Clean content (remove markdown syntax for accurate counts)
  const cleanContent = removeMarkdownSyntax(content)
  
  // Word count
  const words = cleanContent.split(/\s+/).filter(w => w.length > 0)
  const wordCount = words.length
  
  // Paragraph analysis
  const paragraphs = content
    .split('\n\n')
    .filter(p => p.trim().length > 0 && !p.trim().startsWith('#'))
  const paragraphCount = paragraphs.length
  
  const paragraphWordCounts = paragraphs.map(p => 
    removeMarkdownSyntax(p).split(/\s+/).filter(w => w.length > 0).length
  )
  const averageParagraphLength = paragraphWordCounts.length > 0
    ? paragraphWordCounts.reduce((a, b) => a + b, 0) / paragraphWordCounts.length
    : 0
  
  // Sentence analysis
  const sentences = cleanContent.split(/[.!?]+/).filter(s => s.trim().length > 0)
  const sentenceCount = sentences.length
  const averageSentenceLength = sentenceCount > 0 ? wordCount / sentenceCount : 0
  
  // Reading time (average 200-250 words per minute)
  const readingTimeMinutes = Math.ceil(wordCount / 225)
  const readingTime = `${readingTimeMinutes} min read`
  
  // Heading structure
  const headingStructure = analyzeHeadingStructure(content)
  
  // Link analysis
  const linkAnalysis = analyzeLinkStructure(content)
  
  // Reading level (simplified Flesch-Kincaid estimation)
  const readingLevel = estimateReadingLevel(averageSentenceLength, wordCount)
  
  return {
    wordCount,
    paragraphCount,
    sentenceCount,
    averageSentenceLength,
    averageParagraphLength,
    readingTime,
    readingLevel,
    headingStructure,
    linkAnalysis,
  }
}

/**
 * Analyze heading structure
 */
function analyzeHeadingStructure(content: string): ContentMetrics['headingStructure'] {
  const lines = content.split('\n')
  
  let h1Count = 0
  let h2Count = 0
  let h3Count = 0
  let h4Count = 0
  let properHierarchy = true
  let lastLevel = 0
  
  lines.forEach(line => {
    const trimmed = line.trim()
    
    if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) {
      h1Count++
      if (lastLevel > 0 && 1 - lastLevel > 1) properHierarchy = false
      lastLevel = 1
    } else if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
      h2Count++
      if (lastLevel > 0 && 2 - lastLevel > 1) properHierarchy = false
      lastLevel = 2
    } else if (trimmed.startsWith('### ') && !trimmed.startsWith('#### ')) {
      h3Count++
      if (lastLevel > 0 && 3 - lastLevel > 1) properHierarchy = false
      lastLevel = 3
    } else if (trimmed.startsWith('#### ')) {
      h4Count++
      if (lastLevel > 0 && 4 - lastLevel > 1) properHierarchy = false
      lastLevel = 4
    }
  })
  
  return {
    h1Count,
    h2Count,
    h3Count,
    h4Count,
    properHierarchy,
  }
}

/**
 * Analyze link structure
 */
function analyzeLinkStructure(content: string): ContentMetrics['linkAnalysis'] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const links: string[] = []
  let match
  
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[2])
  }
  
  const internalLinks = links.filter(link => 
    link.startsWith('/') || link.startsWith('#') || !link.includes('://')
  ).length
  
  const externalLinks = links.length - internalLinks
  
  return {
    internalLinks,
    externalLinks,
    totalLinks: links.length,
    brokenLinks: 0, // Would need to actually check URLs
  }
}

/**
 * Remove markdown syntax for clean text analysis
 */
function removeMarkdownSyntax(content: string): string {
  return content
    // Remove headers
    .replace(/^#+\s+/gm, '')
    // Remove bold/italic
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove images
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    // Remove blockquotes
    .replace(/^>\s+/gm, '')
    // Remove HTML tags
    .replace(/<[^>]+>/g, '')
    // Remove special markdown blocks (:::")
    .replace(/:::[\s\S]*?:::/g, '')
    .trim()
}

/**
 * Estimate reading level using simplified Flesch-Kincaid
 * This is a rough estimation
 */
function estimateReadingLevel(averageSentenceLength: number, totalWords: number): string {
  // Simplified: longer sentences = higher grade level
  // Real Flesch-Kincaid also factors syllables per word
  
  if (averageSentenceLength < 10) return "5th-6th grade"
  if (averageSentenceLength < 14) return "7th-8th grade"
  if (averageSentenceLength < 18) return "9th-10th grade"
  if (averageSentenceLength < 22) return "11th-12th grade"
  return "College level"
}

/**
 * Get keyword positions in content
 */
export function getKeywordPositions(content: string, keyword: string): number[] {
  const lowerContent = content.toLowerCase()
  const lowerKeyword = keyword.toLowerCase()
  const positions: number[] = []
  
  let index = lowerContent.indexOf(lowerKeyword)
  while (index !== -1) {
    positions.push(index)
    index = lowerContent.indexOf(lowerKeyword, index + 1)
  }
  
  return positions
}

/**
 * Check if keyword appears in first paragraph
 */
export function isKeywordInFirstParagraph(content: string, keyword: string): boolean {
  const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0)
  if (paragraphs.length === 0) return false
  
  const firstParagraph = paragraphs[0].toLowerCase()
  return firstParagraph.includes(keyword.toLowerCase())
}

/**
 * Extract all headings from content
 */
export function extractHeadings(content: string): Array<{ level: number; text: string }> {
  const lines = content.split('\n')
  const headings: Array<{ level: number; text: string }> = []
  
  lines.forEach(line => {
    const trimmed = line.trim()
    if (trimmed.startsWith('#')) {
      const match = trimmed.match(/^(#+)\s+(.+)/)
      if (match) {
        headings.push({
          level: match[1].length,
          text: match[2].trim()
        })
      }
    }
  })
  
  return headings
}

/**
 * Check content formatting (lists, bold text, etc.)
 */
export function analyzeFormatting(content: string): {
  hasBulletLists: boolean
  hasNumberedLists: boolean
  hasBoldText: boolean
  hasItalicText: boolean
  hasCodeBlocks: boolean
  listCount: number
} {
  return {
    hasBulletLists: /^[-*+]\s+/m.test(content),
    hasNumberedLists: /^\d+\.\s+/m.test(content),
    hasBoldText: /(\*\*|__)[^*_]+\1/.test(content),
    hasItalicText: /(\*|_)[^*_]+\1/.test(content),
    hasCodeBlocks: /```/.test(content),
    listCount: (content.match(/^[-*+]\s+/gm) || []).length + (content.match(/^\d+\.\s+/gm) || []).length,
  }
}

/**
 * Get content summary for quick overview
 */
export function getContentSummary(metrics: ContentMetrics): string {
  return `
Content Summary:
- ${metrics.wordCount} words (${metrics.readingTime})
- ${metrics.headingStructure.h1Count} H1, ${metrics.headingStructure.h2Count} H2s, ${metrics.headingStructure.h3Count} H3s
- ${metrics.linkAnalysis.internalLinks} internal links, ${metrics.linkAnalysis.externalLinks} external links
- ${metrics.sentenceCount} sentences (avg ${metrics.averageSentenceLength.toFixed(1)} words/sentence)
- Reading level: ${metrics.readingLevel}
`.trim()
}


