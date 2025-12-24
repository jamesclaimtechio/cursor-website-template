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
  // Format: "Page Title | Brand Name"
  titleTemplate: "%s | {{BRAND_NAME}}",
  
  // Default title (used when no specific title is set)
  // Should include brand name and core value proposition
  // Keep under 60 characters for optimal Google display
  defaultTitle: "{{BRAND_NAME}} - {{VALUE_PROPOSITION}}",
  // Example: "My Claims Centre - We make your refund stress free"
  // Example: "Legal Services Pro - Expert Legal Help When You Need It"
  
  // Default meta description
  // Used when no page-specific description is provided
  // Keep between 150-160 characters
  // Should summarize what you do and include a call-to-action
  defaultDescription: "{{BRAND_DESCRIPTION}}",
  // Example: "My Claims Centre helps you get the refunds you deserve with a simple, stress-free process. Our friendly team handles everything for you."
  // Example: "Professional legal services for individuals and businesses. Fast, affordable, and expert guidance. Get your free consultation today."
  
  // Open Graph settings (for social media sharing)
  openGraph: {
    type: "website", // Keep as "website" for most sites
    locale: "{{LOCALE}}", // e.g., "en_GB" (UK), "en_US" (US), "en_AU" (Australia)
    siteName: "{{BRAND_NAME}}", // Your brand name (used in social shares)
    defaultImage: "/og-image.jpg", // Path to default Open Graph image (1200x630px)
                                    // Upload to /public/og-image.jpg before deploying
  },
  
  // Twitter Card settings (for Twitter/X sharing)
  twitter: {
    card: "summary_large_image", // Shows large image preview on Twitter
    site: "{{TWITTER_HANDLE}}", // e.g., "@yourbrand" or leave empty if no Twitter
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
