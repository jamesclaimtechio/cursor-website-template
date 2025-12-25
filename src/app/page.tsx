/**
 * BRAND SETUP: Homepage
 * =====================
 * 
 * This is your homepage. Customize the content below or create a content file.
 * 
 * CURSOR AI: When user says "customize homepage":
 * 1. Create src/content/pages/home-content.ts using _TEMPLATE.ts
 * 2. Import and use that content here
 * 3. Or directly edit the props below
 */

import { Hero } from "@/components/sections/hero"
import { Disclaimer } from "@/components/sections/disclaimer"
import { TrustBar } from "@/components/sections/trust-bar"
import { CTA } from "@/components/sections/cta"
import { FAQ } from "@/components/sections/faq"

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Main value proposition */}
      <Hero 
        headline="Welcome to Your New Website"
        subheadline="This is a template. Customize this content in src/app/page.tsx or create a content file."
        cta={{
          label: "Get Started",
          href: "/contact"
        }}
      />
      
      {/* Disclaimer - Required for regulated businesses */}
      <Disclaimer />
      
      {/* Trust Bar - Optional: stats and trust indicators */}
      <TrustBar />
      
      {/* CTA - Conversion section */}
      <CTA 
        headline="Ready to Get Started?"
        description="Customize this template with your brand and content"
        cta={{
          label: "Get Started",
          href: "/contact"
        }}
      />
      
      {/* FAQ - Helpful for SEO and users */}
      <FAQ 
        title="Frequently Asked Questions"
        items={[
          {
            question: "How do I customize this template?",
            answer: "Start by running 'npm run setup' or tell Cursor AI to 'setup new brand'. Update config files in src/config/ with your brand information."
          },
          {
            question: "What's included in this template?",
            answer: "Complete component library, blog system, SEO engine, compliance validation, and comprehensive documentation."
          },
          {
            question: "How long does setup take?",
            answer: "Basic setup takes 15 minutes. Full customization with content takes 2-4 hours."
          },
        ]}
      />
    </>
  )
}

/**
 * CUSTOMIZATION OPTIONS:
 * ======================
 * 
 * Option 1: Direct Props (Quick)
 * - Replace {{PLACEHOLDERS}} above with your content
 * - Good for simple sites
 * 
 * Option 2: Content File (Recommended)
 * - Create src/content/pages/home-content.ts
 * - Import and spread props: <Hero {...homeContent.hero} />
 * - Better for complex sites with lots of content
 * 
 * Option 3: Use More Sections
 * - Import from @/components/sections/
 * - Available: Features, Process, Testimonials, Benefits, etc.
 * - See docs/Section_Library.md for all options
 * 
 * Example with content file:
 * 
 * import { homeContent } from '@/content/pages/home-content'
 * 
 * <Hero {...homeContent.hero} />
 * <Features {...homeContent.features} />
 * <Process {...homeContent.process} />
 */
