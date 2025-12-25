/**
 * BRAND SETUP: How It Works Page
 * ===============================
 * 
 * Explain your process to potential customers.
 * 
 * CURSOR AI: When user says "customize how it works":
 * 1. Ask about their process (3-5 steps)
 * 2. Create content or update directly below
 * 3. Use Process component for step-by-step display
 */

import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "How It Works | {{BRAND_NAME}}",
  description: "{{PROCESS_DESCRIPTION}}",
  openGraph: {
    title: "How It Works",
    description: "{{PROCESS_DESCRIPTION}}",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5d2c89]/5 rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm">
                Transparent Process
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              How Our
              <br />
              <span className="text-[#5d2c89]">Process</span> Works
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No jargon, no hidden steps. Here's exactly what happens from start to finish.
            </p>
          </div>
        </Container>
      </section>

      {/* Process Steps */}
      <Process 
        title="Simple 3-Step Process"
        subtitle="Get started in minutes"
        steps={[
          {
            title: "Step 1: Check Eligibility",
            description: "Quick online form to see if you qualify. Takes 2 minutes.",
          },
          {
            title: "Step 2: We Handle Everything",
            description: "Our team manages your case from start to finish.",
          },
          {
            title: "Step 3: Receive Your Outcome",
            description: "Get your result. No win, no fee - you only pay if successful.",
          },
        ]}
      />

      {/* CTA */}
      <CTA 
        headline="Ready to Get Started?"
        description="Find out if you're eligible in just 2 minutes"
        cta={{
          label: "Check Eligibility",
          href: "/contact"
        }}
        background="primary"
      />
    </div>
  )
}

/**
 * BRAND SETUP:
 * ============
 * 
 * Replace all {{PLACEHOLDERS}} with your actual process:
 * - Describe your 3-5 step process
 * - Use clear, simple language
 * - Focus on benefits at each step
 * 
 * Or create a content file:
 * - Copy src/content/pages/_TEMPLATE.ts
 * - Name it how-it-works-content.ts
 * - Import and use here
 */
