/**
 * PAGE CONTENT TEMPLATE
 * =====================
 * Template for page-specific content configurations
 * 
 * CURSOR AI: When user says "create content for [page name]":
 * 1. Copy this template
 * 2. Customize sections for the specific page
 * 3. Use components from src/components/sections/
 * 4. Follow brand voice from site.config.ts
 * 
 * INSTRUCTIONS:
 * 1. Replace all {{PLACEHOLDERS}}
 * 2. Delete unused section templates
 * 3. Import this in your page component
 */

export const pageContent = {
  // Page Metadata
  meta: {
    title: "{{PAGE_TITLE}}", // e.g., "How It Works"
    description: "{{PAGE_DESCRIPTION}}", // 150-160 chars
    slug: "/{{page-slug}}", // e.g., "/how-it-works"
  },
  
  // Hero Section
  hero: {
    headline: "{{HERO_HEADLINE}}", // Main H1 - clear value proposition
    subheadline: "{{HERO_SUBHEADLINE}}", // Supporting text explaining benefit
    cta: {
      label: "{{CTA_TEXT}}", // e.g., "Get Started", "Learn More"
      href: "{{CTA_LINK}}", // e.g., "/contact", "/signup"
    },
    secondaryCta: {
      label: "{{SECONDARY_CTA}}", // Optional
      href: "{{SECONDARY_LINK}}",
    },
    image: {
      src: "{{HERO_IMAGE_PATH}}", // Optional - from images.config.ts
      alt: "{{IMAGE_ALT_TEXT}}",
    },
  },
  
  // Features/Benefits Section
  features: {
    title: "{{FEATURES_TITLE}}", // e.g., "Why Choose Us"
    subtitle: "{{FEATURES_SUBTITLE}}", // Optional supporting text
    items: [
      {
        icon: "{{ICON_NAME}}", // Lucide icon name (optional)
        title: "{{FEATURE_1_TITLE}}",
        description: "{{FEATURE_1_DESCRIPTION}}", // 2-3 sentences
      },
      {
        icon: "{{ICON_NAME}}",
        title: "{{FEATURE_2_TITLE}}",
        description: "{{FEATURE_2_DESCRIPTION}}",
      },
      {
        icon: "{{ICON_NAME}}",
        title: "{{FEATURE_3_TITLE}}",
        description: "{{FEATURE_3_DESCRIPTION}}",
      },
      // Add 3-6 features total
    ],
  },
  
  // Process/Steps Section
  process: {
    title: "{{PROCESS_TITLE}}", // e.g., "How It Works"
    subtitle: "{{PROCESS_SUBTITLE}}",
    steps: [
      {
        title: "{{STEP_1_TITLE}}",
        description: "{{STEP_1_DESCRIPTION}}",
        icon: "{{ICON_NAME}}", // Optional
      },
      {
        title: "{{STEP_2_TITLE}}",
        description: "{{STEP_2_DESCRIPTION}}",
        icon: "{{ICON_NAME}}",
      },
      {
        title: "{{STEP_3_TITLE}}",
        description: "{{STEP_3_DESCRIPTION}}",
        icon: "{{ICON_NAME}}",
      },
      // Add 3-5 steps
    ],
  },
  
  // FAQ Section
  faq: {
    title: "{{FAQ_TITLE}}", // e.g., "Frequently Asked Questions"
    subtitle: "{{FAQ_SUBTITLE}}", // Optional
    items: [
      {
        question: "{{QUESTION_1}}",
        answer: "{{ANSWER_1}}", // Can include markdown
      },
      {
        question: "{{QUESTION_2}}",
        answer: "{{ANSWER_2}}",
      },
      // Add 5-10 FAQs
    ],
  },
  
  // CTA Section
  cta: {
    headline: "{{CTA_HEADLINE}}", // e.g., "Ready to Get Started?"
    description: "{{CTA_DESCRIPTION}}", // Optional supporting text
    cta: {
      label: "{{CTA_BUTTON_TEXT}}",
      href: "{{CTA_LINK}}",
    },
    background: "primary", // "default" | "muted" | "primary"
  },
}

/**
 * USAGE IN PAGE COMPONENT:
 * =========================
 * 
 * import { pageContent } from '@/content/pages/your-page-content'
 * 
 * export default function YourPage() {
 *   return (
 *     <>
 *       <Hero {...pageContent.hero} />
 *       <Features {...pageContent.features} />
 *       <Process {...pageContent.process} />
 *       <FAQ {...pageContent.faq} />
 *       <CTA {...pageContent.cta} />
 *     </>
 *   )
 * }
 * 
 * See docs/Section_Library.md for all available sections and their props
 */

