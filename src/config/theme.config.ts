/**
 * BRAND SETUP: Theme Configuration
 * =================================
 * Design tokens for your brand's visual identity.
 * 
 * CURSOR AI: When user says "setup brand theme", prompt for:
 * - Primary brand color (used for CTAs and main actions)
 * - Secondary brand color (used for accents and brand elements)
 * - Font preferences (or use default system fonts)
 * - Design aesthetic (modern, classic, playful, professional)
 * 
 * INSTRUCTIONS:
 * 1. Replace {{COLOR_*}} placeholders with your brand colors (hex format)
 * 2. Update font families if you have specific brand fonts
 * 3. Adjust spacing/sizing if needed (defaults are production-tested)
 * 4. Generate gradient variants from your primary color
 * 
 * TIP: Use a color tool to generate lighter/darker shades:
 * - Primary: Your main brand color
 * - Primary Gradient: Lighter and darker shades for depth
 * - Secondary: Complementary or contrast color
 * - Keep text colors high-contrast for accessibility
 */

export const themeConfig = {
  // Colors - Backgrounds
  colors: {
    background: {
      primary: "#FFFFFF",        // Main page background (usually white or off-white)
      secondary: "{{BG_ACCENT}}", // Subtle accent background - use very light tint of primary color
                                   // Example: "#FFF8F4" (peachy), "#F0F9FF" (blue), "#F9FAFB" (gray)
      tertiary: "#F3F4F6",       // Inputs, recessed areas (light gray works universally)
      notification: "{{SECONDARY_COLOR}}", // Top notification bar - use secondary brand color
    },
    
    // Text Colors
    text: {
      primary: "#2D2D2D",        // Headings (dark gray, not pure black for softer look)
      secondary: "#555555",      // Body text, subheaders
      brand: "{{SECONDARY_COLOR}}", // Navigation links, brand text elements
      inverse: "#FFFFFF",        // Text on dark buttons/backgrounds
    },
    
    // Brand & Accents
    primary: "{{PRIMARY_COLOR}}", // Primary CTA color - your main brand color
                                   // Example: "#FFAB4A" (orange), "#3B82F6" (blue), "#10B981" (green)
    
    primaryGradient: {
      start: "{{PRIMARY_LIGHT}}", // Lighter shade of primary (about 10-15% lighter)
      end: "{{PRIMARY_DARK}}",    // Darker shade of primary (about 10-15% darker)
      // Gradients add depth to buttons: linear-gradient(180deg, start 0%, end 100%)
    },
    
    secondary: "{{SECONDARY_COLOR}}", // Secondary brand color for accents, icons, highlights
                                       // Should complement primary (not clash)
    secondaryHover: "{{SECONDARY_DARK}}", // Darker version for hover states
    
    // Semantic Colors (for status/feedback)
    success: "#00B67A",          // Green for success states (Trustpilot green is universal)
    info: "{{SECONDARY_COLOR}}", // Info notifications - use secondary or blue
    
    // Borders
    border: {
      subtle: "#E5E7EB",         // Light gray for subtle borders (universal)
      brand: "{{SECONDARY_COLOR}}", // Brand-colored borders for active states
    },
  },
  
  // Typography
  // CURSOR AI: Ask if user has custom fonts, otherwise use system fonts
  fonts: {
    heading: "{{HEADING_FONT}}", // Example: "'Montserrat', sans-serif" or "system-ui, sans-serif"
    body: "{{BODY_FONT}}",       // Example: "'Inter', system-ui, sans-serif"
    // Default fallback: "'Nunito', 'Varela Round', system-ui, sans-serif"
  },
  
  // Font Sizes (pre-tested scale - adjust only if needed)
  fontSizes: {
    xs: "0.75rem",    // 12px - Fine print, captions
    sm: "0.875rem",   // 14px - Small text, labels
    base: "1rem",     // 16px - Body text (default)
    lg: "1.125rem",   // 18px - Emphasized text
    xl: "1.25rem",    // 20px - Small headings
    "2xl": "1.5rem",  // 24px - H3
    "3xl": "2rem",    // 32px - H2
    "4xl": "2.5rem",  // 40px - H1
    "5xl": "3.25rem", // 52px - Hero headlines
  },
  
  // Font Weights
  fontWeights: {
    normal: 400,      // Body text
    medium: 500,      // Navigation, emphasized text
    bold: 700,        // Headings, buttons, strong emphasis
  },
  
  // Line Heights
  lineHeights: {
    tight: 1.1,       // Headings (tighter for impact)
    normal: 1.5,      // Body text (comfortable reading)
  },
  
  // Spacing Scale (pre-tested, adjust only if brand requires specific spacing)
  spacing: {
    2: "0.5rem",      // 8px - Tight padding
    3: "0.75rem",     // 12px - Compact gaps
    4: "1rem",        // 16px - Default gap
    6: "1.5rem",      // 24px - Button padding, section gaps
    8: "2rem",        // 32px - Comfortable spacing
    12: "3rem",       // 48px - Large section gaps
    20: "5rem",       // 80px - Hero spacing, major sections
  },
  
  // Border Radius (adjust based on brand aesthetic)
  borderRadius: {
    sm: "0.25rem",    // 4px - Subtle rounding
    md: "0.5rem",     // 8px - Moderate rounding (cards, inputs)
    lg: "0.75rem",    // 12px - Soft rounding (buttons)
    xl: "1rem",       // 16px - Pronounced rounding
    // Note: For fully rounded (pill-shaped), use "9999px" in component styles
  },
  
  // Shadows (depth and elevation)
  shadow: {
    none: "none",
    sm: "0 1px 2px rgb(0 0 0 / 0.05)",           // Subtle lift
    md: "0 4px 6px rgb(0 0 0 / 0.1)",            // Cards, modals
    button: "0 4px 14px 0 {{PRIMARY_SHADOW}}",   // Button glow - use rgba of primary color at 0.39 opacity
            // Example: "rgba(255, 171, 74, 0.39)" for orange
  },
}

/**
 * Component Pattern Reference
 * ============================
 * How theme tokens are applied to common components
 * (These are examples - actual implementation in component files)
 * 
 * Primary Button (CTA):
 * - Background: linear-gradient(180deg, primaryGradient.start 0%, primaryGradient.end 100%)
 * - Text: colors.text.inverse (white)
 * - Padding: spacing[3] spacing[6] (0.75rem 1.5rem)
 * - Radius: borderRadius.lg (12px)
 * - Shadow: shadow.button
 * - Weight: fontWeights.bold (700)
 * - On hover: Slight scale or brightness adjustment
 * 
 * Secondary Button:
 * - Background: colors.secondary
 * - Text: colors.text.inverse
 * - Padding: spacing[2] spacing[6] (0.5rem 1.5rem)
 * - Radius: borderRadius.sm (4px)
 * - Weight: fontWeights.medium (500)
 * 
 * Navigation Link:
 * - Color: colors.text.brand
 * - Weight: fontWeights.medium
 * - Hover: Underline
 * 
 * Card:
 * - Background: colors.background.primary
 * - Border: 1px solid colors.border.subtle
 * - Radius: borderRadius.md
 * - Shadow: shadow.sm
 * 
 * Input Field:
 * - Background: colors.background.tertiary
 * - Border: 1px solid colors.border.subtle
 * - Radius: borderRadius.md
 * - Focus: Border changes to colors.border.brand
 */
