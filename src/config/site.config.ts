/**
 * Site Configuration
 * 
 * Contains business information, contact details, and navigation structure.
 * Based on: Claims Centre (myclaimscentre.co.uk)
 */

export const siteConfig = {
  // Basic Info
  name: "My Claims Centre",
  legalEntity: "SOLVO SOLUTIONS LTD",
  companyNumber: "14760023",
  fcaNumber: "1013195",
  tagline: "We make your refund stress free",
  description: "My Claims Centre helps you get the refunds you deserve with a simple, stress-free process. We connect you with expert solicitors who handle everything for you.",
  
  // Contact
  email: "info@myclaimscentre.co.uk",
  phone: "", // To be confirmed
  address: "Office 116 Regents Pavilion, Moulton Park Industrial Estate, Northampton, England, NN3 6BJ",
  
  // Social
  social: {
    twitter: "",
    linkedin: "",
    instagram: "",
    facebook: "",
  },
  
  // Branding
  logo: {
    src: "/images/black writing logo.png",
    alt: "My Claims Centre Logo",
    width: 640,
    height: 240,
  },
  // Light version for dark backgrounds (footer)
  logoLight: {
    src: "/images/logo.png",
    alt: "My Claims Centre Logo",
    width: 640,
    height: 240,
  },
  
  // Navigation
  navigation: [
    { label: "Home", href: "/" },
    { label: "Car Finance Claims", href: "/car-finance-claims" },
    { label: "Blog", href: "/car-finance-claims/blog" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}


