/**
 * Blog Post Type Definitions
 * ===========================
 * Ensures all blog posts have required compliance fields
 */

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
  }
  publishedAt: string
  updatedAt?: string
  category: BlogCategory
  tags: string[]
  featured: boolean
  // Featured Image - REQUIRED for SEO
  image: {
    src: string // Path to image (e.g., "/images/blog/car-finance-claims.jpg")
    alt: string // SEO-optimized alt text with keywords
    width?: number // Optional: for optimization
    height?: number // Optional: for optimization
  }
  seo: {
    title: string
    description: string
    keywords?: string[]
  }
  // Compliance tracking
  compliance: {
    verified: boolean
    verifiedBy: string
    verifiedDate: string
    sources: string[] // References to Motor Finance Redress, etc.
  }
  // FAQ Schema for SEO (optional)
  faqs?: FAQ[]
}

export interface FAQ {
  question: string
  answer: string
}

export type BlogCategory = 
  | "car-finance-claims"
  | "dca-claims"
  | "irresponsible-lending"
  | "fca-news"
  | "consumer-rights"
  | "guides"

export interface BlogListingPage {
  posts: BlogPost[]
  total: number
  page: number
  perPage: number
  totalPages: number
}


