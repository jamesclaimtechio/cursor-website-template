/**
 * Legal Page Type Definitions
 * ============================
 * Content-driven system for legal/compliance pages
 * Supports extended markdown with custom block syntax
 * 
 * Custom Block Syntax:
 * 
 * :::infobox[blue]
 * Content here
 * :::
 * 
 * :::warning
 * Warning content
 * :::
 * 
 * :::indent
 * Indented section with blue border
 * :::
 * 
 * :::contact
 * email: info@example.com
 * phone: 0800 123 456
 * :::
 * 
 * :::highlight[green]
 * Highlighted content
 * :::
 */

export interface LegalPage {
  slug: string
  title: string
  lastUpdated: string
  content: string // Markdown with custom block syntax
  metadata: {
    title: string // SEO title
    description: string // SEO description
    noIndex?: boolean // Optional: prevent indexing
  }
}

/**
 * Block types supported in legal pages
 */
export type BlockType = 
  | "infobox"     // Blue/yellow/green info box
  | "warning"     // Amber warning box
  | "indent"      // Blue left-border section (like LegalSection)
  | "contact"     // Contact card with email/phone
  | "highlight"   // Highlighted callout box
  | "example"     // Example calculation box (for fees)
  | "steps"       // Numbered steps list

/**
 * Block variant colors
 */
export type BlockVariant = "blue" | "green" | "amber" | "gray" | "purple"

/**
 * Parsed block from markdown
 */
export interface ParsedBlock {
  type: BlockType
  variant?: BlockVariant
  content: string
  props?: Record<string, string> // For contact blocks: email, phone, etc.
}

/**
 * Section heading from markdown
 */
export interface LegalHeading {
  id: string
  text: string
  level: 2 | 3
}

/**
 * Get all legal page slugs for static generation
 */
export type LegalPageSlug = 
  | "privacy"
  | "terms"
  | "fees"
  | "no-win-no-fee"
  | "complaints"
  | "about"
  | "how-it-works"
  | "contact"


