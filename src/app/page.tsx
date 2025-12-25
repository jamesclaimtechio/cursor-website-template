/**
 * TEMPLATE DEMO: Homepage
 * ========================
 * Showcases "Website Builder" - a working demo of the template
 * 
 * BRAND SETUP: Customize sections for your business
 */

import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"
import { FAQ } from "@/components/sections/faq"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Trust Bar */}
      <TrustBar />
      
      {/* Features/Services */}
      <Services />
      
      {/* Process/How It Works */}
      <Process />
      
      {/* CTA */}
      <CTA />
      
      {/* FAQ */}
      <FAQ />
    </>
  )
}

/**
 * CUSTOMIZATION:
 * ==============
 * 
 * This page shows all main sections in action.
 * 
 * To customize:
 * 1. Edit the component files directly (in src/components/sections/)
 * 2. Or create content files and pass as props
 * 3. Add/remove sections as needed
 * 4. Reorder sections by changing the order here
 * 
 * Available sections (see docs/Section_Library.md):
 * - Hero
 * - TrustBar
 * - Services/Features
 * - Process/Steps
 * - Benefits
 * - Testimonials
 * - CTA
 * - FAQ
 */
