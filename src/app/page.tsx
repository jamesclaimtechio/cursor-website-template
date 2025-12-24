import { Hero } from "@/components/sections/hero"
import { Disclaimer } from "@/components/sections/disclaimer"
import { TrustBar } from "@/components/sections/trust-bar"
import { ContentRichSection } from "@/components/sections/content-rich-section"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"
import { FAQ } from "@/components/sections/faq"
import { 
  homeExplainerContent, 
  homeHowWeHelpContent, 
  homeEligibilityQuickCheck,
  homeSuccessStoriesContent 
} from "@/content/pages/home-content-sections"

export default function HomePage() {
  return (
    <>
      {/* Visual Hero - Keep as is */}
      <Hero />
      
      {/* Disclaimer - Required */}
      <Disclaimer />
      
      {/* Trust Bar - Visual element */}
      <TrustBar />
      
      {/* Content-Rich Explainer - Why this matters */}
      <ContentRichSection 
        content={homeExplainerContent} 
        variant="blog"
        bgColor="white"
      />
      
      {/* Content-Rich: How We Help */}
      <ContentRichSection 
        content={homeHowWeHelpContent} 
        variant="blog"
        bgColor="gray"
      />
      
      {/* Content-Rich: Quick Eligibility Check */}
      <ContentRichSection 
        content={homeEligibilityQuickCheck} 
        variant="blog"
        bgColor="gradient"
      />
      
      {/* Content-Rich: Success Stories */}
      <ContentRichSection 
        content={homeSuccessStoriesContent} 
        variant="blog"
        bgColor="white"
      />
      
      {/* Testimonials - Visual social proof */}
      <Testimonials />
      
      {/* CTA - Important conversion element */}
      <CTA />
      
      {/* FAQ - Helpful for SEO and users */}
      <FAQ />
    </>
  )
}


