/**
 * Image Assets Configuration
 * 
 * Centralized catalog of all images for easy reference throughout the app.
 * All paths are relative to /public directory.
 */

export const images = {
  // Logo
  logo: {
    src: "/images/logo.png",
    alt: "Claims Centre Logo",
    width: 640,
    height: 240,
  },
  
  // Fox Mascot - Hero Images (Main featured images)
  mascot: {
    hero: {
      refundCheck: {
        src: "/images/mascot/fox-hero-refund-check.jpeg",
        alt: "Friendly fox mascot holding a refund check",
        width: 1024,
        height: 1024,
        usage: "Homepage hero, refund success pages",
      },
      calculator: {
        src: "/images/mascot/fox-hero-calculator.jpeg",
        alt: "Fox mascot with calculator - calculating your refund",
        width: 1024,
        height: 1024,
        usage: "How it works section, calculator pages",
      },
      dealership: {
        src: "/images/mascot/fox-hero-dealership.jpeg",
        alt: "Fox mascot at car dealership with Vauxhall",
        width: 1024,
        height: 1024,
        usage: "Car finance claims, dealership-related content",
      },
      showroom: {
        src: "/images/mascot/fox-hero-showroom.png",
        alt: "Fox mascot in professional car showroom",
        width: 1024,
        height: 1024,
        usage: "About page, professional services section",
      },
    },
    
    // Call-to-Action Images
    cta: {
      refundSign: {
        src: "/images/mascot/fox-cta-refund-sign.png",
        alt: "Fox holding REFUND sign",
        width: 1024,
        height: 1024,
        usage: "CTA sections, conversion points",
      },
    },
    
    // Success/Celebration Images
    success: {
      money: {
        src: "/images/mascot/fox-success-money.png",
        alt: "Excited fox celebrating with money",
        width: 1024,
        height: 1024,
        usage: "Success pages, testimonials, results",
      },
    },
    
    // Contextual/Activity Images
    activities: {
      driving: {
        src: "/images/mascot/fox-driving.png",
        alt: "Fox driving a car",
        width: 1024,
        height: 1024,
        usage: "Car-related claims, driving context",
      },
    },
    
    // Additional Poses (for flexibility)
    poses: {
      pose10: {
        src: "/images/mascot/fox-pose-10.png",
        alt: "Fox mascot pose 10",
        width: 1024,
        height: 1024,
      },
      pose12: {
        src: "/images/mascot/fox-pose-12.png",
        alt: "Fox mascot pose 12",
        width: 1024,
        height: 1024,
      },
      pose42: {
        src: "/images/mascot/fox-pose-42.png",
        alt: "Fox mascot pose 42",
        width: 1024,
        height: 1024,
      },
      pose43: {
        src: "/images/mascot/fox-pose-43.png",
        alt: "Fox mascot pose 43",
        width: 1024,
        height: 1024,
      },
      pose59: {
        src: "/images/mascot/fox-pose-59.png",
        alt: "Fox mascot pose 59",
        width: 1024,
        height: 1024,
      },
      pose62: {
        src: "/images/mascot/fox-pose-62.png",
        alt: "Fox mascot pose 62",
        width: 1024,
        height: 1024,
      },
      pose63: {
        src: "/images/mascot/fox-pose-63.png",
        alt: "Fox mascot pose 63",
        width: 1024,
        height: 1024,
      },
      pose64: {
        src: "/images/mascot/fox-pose-64.png",
        alt: "Fox mascot pose 64",
        width: 1024,
        height: 1024,
      },
    },
    
    // Additional Design Variations
    designs: {
      design14: {
        src: "/images/mascot/Untitled-design-14.png",
        alt: "Fox mascot design variation 14",
        width: 1024,
        height: 1024,
      },
      design17: {
        src: "/images/mascot/Untitled-design-17.png",
        alt: "Fox mascot design variation 17",
        width: 1024,
        height: 1024,
      },
      design19: {
        src: "/images/mascot/Untitled-design-19.png",
        alt: "Fox mascot design variation 19",
        width: 1024,
        height: 1024,
      },
      design20: {
        src: "/images/mascot/Untitled-design-20.png",
        alt: "Fox mascot design variation 20",
        width: 1024,
        height: 1024,
      },
      design22: {
        src: "/images/mascot/Untitled-design-22.png",
        alt: "Fox mascot design variation 22",
        width: 1024,
        height: 1024,
      },
      design25: {
        src: "/images/mascot/Untitled-design-25.png",
        alt: "Fox mascot design variation 25",
        width: 1024,
        height: 1024,
      },
    },
  },
}

/**
 * Helper function to get image props for Next.js Image component
 * 
 * @example
 * import { getImageProps } from '@/config/images.config'
 * 
 * <Image {...getImageProps(images.mascot.hero.refundCheck)} />
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
 */
export const commonImages = {
  // Most used hero image
  defaultHero: images.mascot.hero.refundCheck,
  
  // Best for CTAs
  ctaImage: images.mascot.cta.refundSign,
  
  // Success/results pages
  successImage: images.mascot.success.money,
  
  // Professional/about section
  professionalImage: images.mascot.hero.showroom,
  
  // Car-related content
  carImage: images.mascot.hero.dealership,
}


