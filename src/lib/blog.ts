/**
 * Blog Management Library
 * ========================
 * Handles blog post retrieval, filtering, and compliance checking
 * 
 * BRAND SETUP: As you create blog posts, import and register them here
 * 
 * CURSOR AI: When user creates a new blog post:
 * 1. Add import at top: import { postName } from "@/content/blog/post-slug"
 * 2. Add to allPosts array below
 * 3. Post will automatically appear on blog listing page
 */

import { BlogPost, BlogCategory } from "@/types/blog"

// ============================================================================
// BLOG POST REGISTRY
// ============================================================================
// 
// CURSOR AI: Import new blog posts here as they're created
// 
// Example:
// import { yourPostName } from "@/content/blog/your-post-slug"
// 
// Then add to allPosts array below

// TEMPLATE DEMO: Example blog posts showing template features
import { gettingStartedWithTemplate } from "@/content/blog/getting-started-with-template"
import { customizingYourDesign } from "@/content/blog/customizing-your-design"
import { seoOptimizationGuide } from "@/content/blog/seo-optimization-guide"

const allPosts: BlogPost[] = [
  gettingStartedWithTemplate,
  customizingYourDesign,
  seoOptimizationGuide,
  // BRAND SETUP: Replace these example posts with your actual content
  // Or keep them as documentation for users
]

/**
 * Get all published blog posts, sorted by date (newest first)
 * Only returns posts where compliance.verified === true
 */
export function getAllPosts(): BlogPost[] {
  return allPosts
    .filter(post => post.compliance.verified) // Only show verified posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find(post => post.slug === slug && post.compliance.verified)
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return allPosts
    .filter(post => post.category === category && post.compliance.verified)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return allPosts
    .filter(post => post.featured && post.compliance.verified)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

/**
 * Get related posts (same category, excluding current post)
 */
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  return allPosts
    .filter(post => 
      post.slug !== currentSlug && 
      post.category === currentPost.category &&
      post.compliance.verified
    )
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

/**
 * Get posts with pagination
 */
export function getPaginatedPosts(page: number = 1, perPage: number = 9) {
  const posts = getAllPosts()
  const start = (page - 1) * perPage
  const end = start + perPage

  return {
    posts: posts.slice(start, end),
    total: posts.length,
    page,
    perPage,
    totalPages: Math.ceil(posts.length / perPage),
  }
}

/**
 * Search posts by title or content
 */
export function searchPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase()
  return allPosts
    .filter(post => 
      post.compliance.verified &&
      (post.title.toLowerCase().includes(lowerQuery) ||
       post.excerpt.toLowerCase().includes(lowerQuery) ||
       post.content.toLowerCase().includes(lowerQuery))
    )
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

/**
 * Validate blog post compliance
 * Returns array of compliance issues (empty if compliant)
 */
export function validateBlogPost(post: BlogPost): string[] {
  const issues: string[] = []

  // Check compliance verification
  if (!post.compliance.verified) {
    issues.push("Post not marked as compliance-verified")
  }

  if (!post.compliance.verifiedBy) {
    issues.push("No verifier specified")
  }

  if (!post.compliance.sources || post.compliance.sources.length === 0) {
    issues.push("No compliance sources documented")
  }

  // Check required fields
  if (!post.title || post.title.length < 10) {
    issues.push("Title too short (min 10 characters)")
  }

  if (!post.excerpt || post.excerpt.length < 50) {
    issues.push("Excerpt too short (min 50 characters)")
  }

  if (!post.content || post.content.length < 200) {
    issues.push("Content too short (min 200 characters)")
  }

  // Check featured image (REQUIRED for SEO)
  if (!post.image || !post.image.src) {
    issues.push("Featured image is required for SEO")
  }

  if (post.image && !post.image.alt) {
    issues.push("Image alt text is required for SEO and accessibility")
  }

  if (post.image && post.image.alt && post.image.alt.length < 10) {
    issues.push("Image alt text too short (min 10 characters for SEO)")
  }

  // Check SEO
  if (!post.seo.title || post.seo.title.length > 60) {
    issues.push("SEO title must be between 1-60 characters")
  }

  if (!post.seo.description || post.seo.description.length > 160) {
    issues.push("SEO description must be between 1-160 characters")
  }

  return issues
}

// ============================================================================
// SEO SYSTEM INTEGRATION
// ============================================================================

/**
 * Validate SEO compliance for a post
 * Returns detailed SEO score and recommendations
 */
export function validatePostSEO(slug: string) {
  const post = allPosts.find(p => p.slug === slug)
  if (!post) return null
  
  try {
    const { validateSEOCompliance } = require("@/seo")
    return validateSEOCompliance(post)
  } catch (error) {
    console.error("SEO validation error:", error)
    return null
  }
}

/**
 * Check if post is ready to publish (SEO score 70+)
 */
export function checkPublishReady(slug: string): boolean {
  const post = allPosts.find(p => p.slug === slug)
  if (!post) return false
  
  try {
    const { isPublishReady } = require("@/seo")
    return isPublishReady(post)
  } catch (error) {
    console.error("SEO check error:", error)
    return post.compliance.verified // Fall back to compliance check only
  }
}

/**
 * Get SEO summary for all posts (development helper)
 */
export function getSEOSummary() {
  try {
    const { validateSEOCompliance } = require("@/seo")
    
    return allPosts.map(post => {
      const validation = validateSEOCompliance(post)
      return {
        slug: post.slug,
        title: post.title,
        score: validation.score,
        grade: validation.grade,
        valid: validation.valid,
        published: post.compliance.verified
      }
    }).sort((a, b) => b.score - a.score)
  } catch (error) {
    console.error("SEO summary error:", error)
    return []
  }
}

/**
 * USAGE INSTRUCTIONS:
 * ===================
 * 
 * 1. Create a new blog post file in src/content/blog/
 * 2. Import it at the top of this file
 * 3. Add to the allPosts array
 * 4. Post automatically appears on blog listing
 * 
 * Example:
 * 
 * // At top of file:
 * import { myFirstPost } from "@/content/blog/my-first-post"
 * 
 * // In allPosts array:
 * const allPosts: BlogPost[] = [
 *   myFirstPost,
 * ]
 * 
 * See docs/HOW_TO_ADD_BLOG_POSTS.md for complete guide
 */

