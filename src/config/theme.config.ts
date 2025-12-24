/**
 * Theme Configuration
 * 
 * Design tokens extracted from Claims Centre visual identity.
 * 
 * Aesthetic: Friendly, Trustworthy, Soft, Approachable
 * Energy: Calm but action-oriented
 * Voice: Reassuring, clear, benefit-led
 */

export const themeConfig = {
  // Colors - Backgrounds
  colors: {
    background: {
      primary: "#FFFFFF",        // Main page background
      secondary: "#FFF8F4",      // Subtle accent background (blobs, hero shapes)
      tertiary: "#F3F4F6",       // Inputs, recessed areas
      notification: "#5D2C89",   // Top notification bar
    },
    
    // Text Colors
    text: {
      primary: "#2D2D2D",        // Headings
      secondary: "#555555",      // Body text, subheaders
      brand: "#5D2C89",          // Navigation links, brand text
      inverse: "#FFFFFF",        // Text on buttons/notification bar
    },
    
    // Brand & Accents
    primary: "#FFAB4A",          // Primary CTA (Solid fallback)
    primaryGradient: {
      start: "#FFBF66",          // Button Gradient Top
      end: "#FF9E36",            // Button Gradient Bottom
    },
    secondary: "#5D2C89",        // "Login" button, Checkmarks, Brand elements
    secondaryHover: "#451E66",   // Secondary hover state
    
    // Semantic
    success: "#00B67A",          // Trustpilot star, success states
    info: "#5D2C89",             // Brand information
    
    // Borders
    border: {
      subtle: "#E5E7EB",         // Input borders, dividers
      brand: "#5D2C89",          // Active states or brand highlights
    },
  },
  
  // Typography
  fonts: {
    heading: "'Nunito', 'Varela Round', system-ui, sans-serif",
    body: "'Nunito', 'Varela Round', system-ui, sans-serif",
  },
  
  fontSizes: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem",    // 20px
    "2xl": "1.5rem",  // 24px
    "3xl": "2rem",    // 32px
    "4xl": "2.5rem",  // 40px
    "5xl": "3.25rem", // 52px
  },
  
  fontWeights: {
    normal: 400,      // Body text
    medium: 500,      // Navigation
    bold: 700,        // Headings, emphasis
  },
  
  lineHeights: {
    tight: 1.1,       // Headings
    normal: 1.5,      // Body text
  },
  
  // Spacing
  spacing: {
    2: "0.5rem",      // 8px - Button padding Y
    3: "0.75rem",     // 12px - Compact gaps
    4: "1rem",        // 16px - Icon gaps
    6: "1.5rem",      // 24px - Button padding X
    8: "2rem",        // 32px - Nav item spacing
    12: "3rem",       // 48px - Section gaps
    20: "5rem",       // 80px - Hero spacing
  },
  
  // Border Radius (Soft, rounded but not pill-shaped)
  borderRadius: {
    sm: "0.25rem",    // 4px
    md: "0.5rem",     // 8px
    lg: "0.75rem",    // 12px
    xl: "1rem",       // 16px
  },
  
  // Shadows
  shadow: {
    none: "none",
    sm: "0 1px 2px rgb(0 0 0 / 0.05)",
    md: "0 4px 6px rgb(0 0 0 / 0.1)",
    button: "0 4px 14px 0 rgba(255, 171, 74, 0.39)",  // Orange button glow
  },
}

/**
 * Component Patterns Reference
 * 
 * Primary Button (Hero):
 * - Background: linear-gradient(180deg, #FFBF66 0%, #FF9E36 100%)
 * - Text: White
 * - Padding: 0.75rem 2rem
 * - Radius: 0.75rem (12px)
 * - Shadow: 0 4px 14px 0 rgba(255, 171, 74, 0.39)
 * - Weight: 700 (Bold)
 * 
 * Secondary Button (Header "Login"):
 * - Background: #5D2C89
 * - Text: White
 * - Padding: 0.5rem 1.5rem
 * - Radius: 0.25rem (4px)
 * - Weight: 500 (Medium)
 * 
 * Navigation Link:
 * - Color: #5D2C89 (Purple)
 * - Weight: 500 (Medium)
 * - Hover: Underline
 */


