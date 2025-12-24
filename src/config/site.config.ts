/**
 * BRAND SETUP: Site Configuration
 * ================================
 * This file contains your brand identity and contact information.
 * 
 * CURSOR AI: When user says "setup new brand", read this file and prompt for:
 * - Brand name
 * - Company legal name and registration number
 * - FCA/regulatory authorization number (if applicable)
 * - Contact information (email, phone, address)
 * - Logo file paths (after user uploads logos)
 * - Navigation structure
 * 
 * INSTRUCTIONS:
 * 1. Replace all {{PLACEHOLDERS}} with actual brand values
 * 2. Update navigation items to match your site structure
 * 3. Add social media links if applicable
 * 4. Ensure logo files are uploaded to /public/images/ before updating paths
 */

export const siteConfig = {
  // Basic Brand Identity
  name: "{{BRAND_NAME}}", // e.g., "My Claims Centre"
  legalEntity: "{{COMPANY_LEGAL_NAME}}", // e.g., "SOLVO SOLUTIONS LTD"
  companyNumber: "{{COMPANY_NUMBER}}", // e.g., "14760023"
  tagline: "{{BRAND_TAGLINE}}", // e.g., "We make your refund stress free"
  description: "{{BRAND_DESCRIPTION}}", // 1-2 sentence description of your service
  
  // Regulatory Authorization (UK Claims Management Companies / Financial Services)
  // Leave empty string "" if not FCA regulated
  fcaNumber: "{{FCA_NUMBER}}", // e.g., "1013195" or ""
  
  // Contact Information
  email: "{{CONTACT_EMAIL}}", // e.g., "info@yourbrand.com"
  phone: "{{CONTACT_PHONE}}", // e.g., "0800 123 4567" or "" if not available
  address: "{{BUSINESS_ADDRESS}}", // Full business address for legal/footer display
  
  // Social Media Links (optional - leave empty strings if not used)
  social: {
    twitter: "{{TWITTER_URL}}", // e.g., "https://twitter.com/yourbrand" or ""
    linkedin: "{{LINKEDIN_URL}}", // e.g., "https://linkedin.com/company/yourbrand" or ""
    instagram: "{{INSTAGRAM_URL}}", // e.g., "https://instagram.com/yourbrand" or ""
    facebook: "{{FACEBOOK_URL}}", // e.g., "https://facebook.com/yourbrand" or ""
  },
  
  // Brand Logos
  // Upload your logos to /public/images/ first, then update paths here
  logo: {
    src: "{{LOGO_PATH}}", // e.g., "/images/logo-dark.png" - Dark logo for light backgrounds
    alt: "{{BRAND_NAME}} Logo",
    width: 640, // Adjust based on your logo dimensions
    height: 240,
  },
  // Light version for dark backgrounds (footer, dark mode, etc.)
  logoLight: {
    src: "{{LOGO_LIGHT_PATH}}", // e.g., "/images/logo-light.png" - Light logo for dark backgrounds
    alt: "{{BRAND_NAME}} Logo",
    width: 640,
    height: 240,
  },
  
  // Site Navigation
  // CURSOR AI: Ask user what pages they want in their navigation
  // Common structures:
  // - Claims/Services sites: Home, Services, How It Works, Blog, About, Contact
  // - Professional services: Home, Services, Case Studies, About, Contact
  // - Generic: Home, About, Services, Blog, Contact
  navigation: [
    { label: "Home", href: "/" },
    { label: "{{SERVICE_NAME}}", href: "/{{service-slug}}" }, // e.g., "Car Finance Claims" → "/car-finance-claims"
    { label: "Blog", href: "/{{service-slug}}/blog" }, // Or "/blog" for top-level
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}
