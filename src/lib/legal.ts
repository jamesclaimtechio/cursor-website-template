/**
 * Legal Page Utilities
 * ====================
 * Helper functions for working with legal/compliance pages
 */

import { LegalPage } from "@/types/legal"

// Import all legal page content
import { privacyPage } from "@/content/legal/privacy"
import { termsPage } from "@/content/legal/terms"
import { feesPage } from "@/content/legal/fees"
import { noWinNoFeePage } from "@/content/legal/no-win-no-fee"
import { complaintsPage } from "@/content/legal/complaints"

/**
 * All legal pages
 */
const legalPages: LegalPage[] = [
  privacyPage,
  termsPage,
  feesPage,
  noWinNoFeePage,
  complaintsPage,
]

/**
 * Get all legal pages
 */
export function getAllLegalPages(): LegalPage[] {
  return legalPages
}

/**
 * Get all legal page slugs (for static generation)
 */
export function getAllLegalSlugs(): string[] {
  return legalPages.map((page) => page.slug)
}

/**
 * Get a legal page by slug
 */
export function getLegalPageBySlug(slug: string): LegalPage | undefined {
  return legalPages.find((page) => page.slug === slug)
}


