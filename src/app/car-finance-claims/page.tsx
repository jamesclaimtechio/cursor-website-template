/**
 * BRAND SETUP: Service/Product Page Example
 * ==========================================
 * 
 * This is an example service page. Customize or delete based on your business.
 * 
 * CURSOR AI: When user wants to customize this page:
 * 1. Create content file in src/content/pages/
 * 2. Import and use here
 * 3. Or delete if not needed for their business
 */

import { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { Disclaimer } from "@/components/sections/disclaimer"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Services | Website Builder",
  description: "Build professional websites with our Next.js template. No coding required.",
  keywords: ["website builder", "website template", "nextjs"],
  openGraph: {
    title: "Services | Website Builder",
    description: "Build professional websites with our Next.js template.",
  },
}

export default function ServicePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Disclaimer */}
      <Disclaimer />
      
      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Service Page Template</h2>
              <p>This is an example service page. Customize this content based on your business.</p>
              
              <h3>How to Customize</h3>
              <p>
                Option 1: Edit this file directly and replace the placeholder content.<br/>
                Option 2: Create a content file in src/content/pages/ and import it.<br/>
                Option 3: Delete this page if not needed for your business.
              </p>
              
              <p>See <code>src/content/pages/_TEMPLATE.ts</code> for content structure guidance.</p>
            </article>
          </div>
        </Container>
      </section>
    </>
  )
}

/**
 * CUSTOMIZATION:
 * ==============
 * 
 * Option 1: Delete this page if not needed
 * Option 2: Rename folder to match your service
 * Option 3: Create content file and import
 * 
 * See src/content/pages/_TEMPLATE.ts for content structure
 */
