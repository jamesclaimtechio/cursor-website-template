/**
 * BRAND SETUP: Image Assets Configuration
 * ========================================
 * Centralized catalog of all brand images for easy reference throughout the app.
 * All paths are relative to /public directory.
 * 
 * CURSOR AI: This file is optional but recommended for:
 * - Brands with multiple mascot/character images
 * - Sites with reusable image sets
 * - Teams needing centralized image management
 * 
 * For simple sites, you can just reference images directly in components.
 * 
 * INSTRUCTIONS:
 * 1. Upload all brand images to /public/images/
 * 2. Organize into logical folders (logos/, mascot/, blog/, etc.)
 * 3. Update paths below to match your structure
 * 4. Add usage notes to help team members pick the right image
 * 5. Delete sections you don't need (e.g., mascot if no character)
 */

export const images = {
  // Logo (Required)
  logo: {
    src: "{{LOGO_PATH}}", // e.g., "/images/logo.png"
    alt: "{{BRAND_NAME}} Logo",
    width: 640, // Adjust to your logo dimensions
    height: 240,
  },
  
  // Logo variations (if you have light/dark versions)
  logoVariations: {
    light: {
      src: "{{LOGO_LIGHT_PATH}}", // For dark backgrounds
      alt: "{{BRAND_NAME}} Logo",
      width: 640,
      height: 240,
    },
    dark: {
      src: "{{LOGO_DARK_PATH}}", // For light backgrounds
      alt: "{{BRAND_NAME}} Logo",
      width: 640,
      height: 240,
    },
  },
  
  // Mascot/Character Images (Optional - delete if not using)
  // If your brand has a character/mascot, organize by usage context
  mascot: {
    hero: {
      primary: {
        src: "{{MASCOT_HERO_PATH}}",
        alt: "{{MASCOT_DESCRIPTION}}",
        width: 1024,
        height: 1024,
        usage: "Homepage hero, main sections",
      },
      // Add more hero variations as needed
    },
    
    cta: {
      primary: {
        src: "{{MASCOT_CTA_PATH}}",
        alt: "{{MASCOT_DESCRIPTION}}",
        width: 1024,
        height: 1024,
        usage: "Call-to-action sections",
      },
    },
    
    success: {
      primary: {
        src: "{{MASCOT_SUCCESS_PATH}}",
        alt: "{{MASCOT_DESCRIPTION}}",
        width: 1024,
        height: 1024,
        usage: "Success pages, confirmation screens",
      },
    },
  },
  
  // Team Photos (Optional - for About page)
  team: {
    // Example structure:
    // ceo: {
    //   src: "/images/team/john-smith.jpg",
    //   alt: "John Smith, CEO",
    //   width: 400,
    //   height: 400,
    // },
  },
  
  // Service/Feature Images (Optional)
  features: {
    // Example structure:
    // service1: {
    //   src: "/images/features/consultation.jpg",
    //   alt: "Expert consultation service",
    //   width: 800,
    //   height: 600,
    // },
  },
  
  // Blog default image (fallback when blog post doesn't have specific image)
  blog: {
    default: {
      src: "{{BLOG_DEFAULT_IMAGE}}", // e.g., "/images/blog/default.jpg"
      alt: "{{BRAND_NAME}} Blog",
      width: 1200,
      height: 630,
    },
  },
}

/**
 * Helper function to get image props for Next.js Image component
 * 
 * @example
 * import { getImageProps, images } from '@/config/images.config'
 * 
 * <Image {...getImageProps(images.logo)} />
 */
export function getImageProps(imageConfig: {
  src: string
  alt: string
  width: number
  height: number
}) {
  return {
    src: imageConfig.src,
    alt: imageConfig.alt,
    width: imageConfig.width,
    height: imageConfig.height,
  }
}

/**
 * Quick reference shortcuts for commonly used images
 * Update these based on your most frequently used images
 */
export const commonImages = {
  // Primary hero image
  defaultHero: images.mascot?.hero?.primary || images.logo,
  
  // CTA image
  ctaImage: images.mascot?.cta?.primary || images.logo,
  
  // Success/confirmation image
  successImage: images.mascot?.success?.primary || images.logo,
  
  // Default blog image
  blogDefault: images.blog.default,
}

/**
 * Image Organization Tips:
 * ========================
 * 
 * Folder Structure (in /public/images/):
 * 
 * /images/
 *   /logos/          - Logo variations (light, dark, icon-only)
 *   /mascot/         - Character/mascot images (if applicable)
 *   /team/           - Team member photos
 *   /blog/           - Blog post featured images
 *   /features/       - Service/feature illustrations
 *   /og/             - Open Graph social sharing images
 *   /icons/          - Custom icons (if not using icon library)
 * 
 * Naming Conventions:
 * - Use kebab-case: "hero-image-primary.jpg"
 * - Include size/variant in name: "logo-dark-640x240.png"
 * - For blog posts, match slug: "post-slug-name.jpg"
 * 
 * Image Optimization:
 * - Use WebP format when possible (better compression)
 * - Provide 2x versions for retina displays
 * - Keep file sizes under 200KB for web
 * - Hero images: 1920x1080px max
 * - Blog featured: 1200x630px (optimal for social sharing)
 * - Logos: SVG preferred, or PNG with transparency
 * 
 * See docs/IMAGE_GUIDE.md for complete image guidelines
 */
