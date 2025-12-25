/**
 * BRAND SETUP: SEO Configuration
 * ===============================
 * Default SEO settings for your website
 * 
 * CURSOR AI: When user says "setup SEO defaults", prompt for:
 * - Brand name
 * - Core value proposition (for default title)
 * - Business description (1-2 sentences)
 * - Target location/locale
 * - Twitter handle (if applicable)
 * 
 * INSTRUCTIONS:
 * 1. Replace {{PLACEHOLDERS}} with your brand information
 * 2. Keep descriptions under 160 characters for optimal display
 * 3. Ensure default OG image exists at /public/og-image.jpg (1200x630px recommended)
 * 4. Update locale if not targeting UK (en_GB)
 */

export const seoConfig = {
  // Title template - %s is replaced with page-specific title
  titleTemplate: "%s | Website Builder",
  
  // Default title
  defaultTitle: "Website Builder - Build Professional Websites in Minutes",
  
  // Default meta description
  defaultDescription: "Website Builder is a production-ready Next.js template for creating professional websites quickly. Includes components, blog system, SEO engine, and Cursor AI guidance.",
  
  // Open Graph settings (for social media sharing)
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Website Builder",
    defaultImage: "/og-image.jpg",
  },
  
  // Twitter Card settings
  twitter: {
    card: "summary_large_image",
    site: "",
  },
}

/**
 * SEO Best Practices Reminder:
 * =============================
 * 
 * Page Titles:
 * - Keep under 60 characters
 * - Put important keywords first
 * - Include brand name (via titleTemplate)
 * - Make each page title unique
 * 
 * Meta Descriptions:
 * - 150-160 characters optimal
 * - Include target keyword naturally
 * - Add call-to-action
 * - Make compelling (affects click-through rate)
 * 
 * Open Graph Images:
 * - 1200x630px recommended
 * - Include minimal text (overlays)
 * - Use high-contrast, clear visuals
 * - Test how it looks in social previews
 * 
 * See docs/SEO_CONTENT_ENGINE.md for complete SEO guidance
 */
