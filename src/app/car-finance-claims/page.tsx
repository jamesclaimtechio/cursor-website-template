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
import { Services } from "@/components/sections/services"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Features | Website Builder",
  description: "Discover all the features included in the Website Builder template. SEO optimization, blog system, compliance tools, and more.",
  keywords: ["website features", "template features", "nextjs components"],
  openGraph: {
    title: "Features | Website Builder",
    description: "Discover all the features included in the Website Builder template.",
  },
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Services />
      
      {/* Additional Content Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Build Amazing Websites
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              From initial setup to deployment, our template includes all the tools and documentation you need.
            </p>
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
