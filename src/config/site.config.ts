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
  name: "Website Builder", // Your brand name
  legalEntity: "Website Builder Inc", // Your legal entity name
  companyNumber: "12345678", // Your company registration number
  tagline: "Build professional websites in minutes", // Your tagline
  description: "Website Builder helps you create beautiful, functional websites without coding. Professional templates with AI-guided setup.", // 1-2 sentence description
  
  // Regulatory Authorization (optional - delete if not applicable)
  // Leave empty string "" if not regulated
  fcaNumber: "", // e.g., "1013195" for FCA, or "" if not applicable
  
  // Contact Information
  email: "hello@websitebuilder.com", // Your contact email
  phone: "", // Your phone or leave empty
  address: "123 Tech Street, San Francisco, CA 94105", // Your business address
  
  // Social Media Links (optional - leave empty strings if not used)
  social: {
    twitter: "", // e.g., "https://twitter.com/yourbrand"
    linkedin: "", // e.g., "https://linkedin.com/company/yourbrand"
    instagram: "", // e.g., "https://instagram.com/yourbrand"
    facebook: "", // e.g., "https://facebook.com/yourbrand"
  },
  
  // Brand Logos
  // Upload your logos to /public/images/ first, then update paths here
  logo: {
    src: "/images/mascot/Black Template Logo.png", // Dark logo for light backgrounds
    alt: "Website Builder Logo",
    width: 640,
    height: 240,
  },
  // Light version for dark backgrounds (footer, dark mode, etc.)
  logoLight: {
    src: "/images/mascot/White Template Logo.png", // Light logo for dark backgrounds
    alt: "Website Builder Logo",
    width: 640,
    height: 240,
  },
  
  // Site Navigation
  navigation: [
    { label: "Home", href: "/" },
    { label: "Features", href: "/car-finance-claims" },
    { label: "Blog", href: "/car-finance-claims/blog" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}
