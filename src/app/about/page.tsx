import { Metadata } from "next"
import { LegalPageLayout, LegalSection } from "@/components/layout/legal-page-layout"

export const metadata: Metadata = {
  title: "About Us | Website Builder",
  description: "Learn about Website Builder - a production-ready Next.js template for professional businesses. Built with Cursor AI guidance.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <LegalPageLayout
      title="About Website Builder"
      lastUpdated="December 24, 2025"
    >
      <LegalSection heading="What is Website Builder?">
        <p>
          Website Builder is a production-ready Next.js template designed for rapid website deployment. 
          Whether you're building a business website, professional services site, or any other type of website, 
          this template provides everything you need out of the box.
        </p>
        <p>
          Built with modern technologies including Next.js 14, TypeScript, and Tailwind CSS, the template 
          includes 20+ reusable components, a complete blog system, SEO optimization tools, and comprehensive documentation.
        </p>
      </LegalSection>

      <LegalSection heading="Key Features">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Component Library:</strong> 20+ pre-built sections including Hero, Features, CTA, FAQ, and more</li>
          <li><strong>Blog System:</strong> Complete blog with auto-generated table of contents and SEO optimization</li>
          <li><strong>SEO Engine:</strong> Built-in keyword research framework and content validation</li>
          <li><strong>Cursor AI Guidance:</strong> Smart prompts and documentation optimized for AI-assisted development</li>
          <li><strong>Responsive Design:</strong> Mobile-first approach that works on all devices</li>
          <li><strong>Type Safety:</strong> Full TypeScript implementation for better developer experience</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Who Is This For?">
        <p>
          This template is perfect for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Businesses needing a professional website quickly</li>
          <li>Agencies building sites for multiple clients</li>
          <li>Startups wanting to launch fast</li>
          <li>Developers seeking a solid foundation</li>
          <li>Non-technical users with Cursor AI assistance</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Technology Stack">
        <div className="bg-gray-50 p-6 rounded-lg space-y-2">
          <p>
            <strong>Framework:</strong> Next.js 14 (App Router)
          </p>
          <p>
            <strong>Language:</strong> TypeScript 5+
          </p>
          <p>
            <strong>Styling:</strong> Tailwind CSS 3.4
          </p>
          <p>
            <strong>UI Icons:</strong> Lucide React
          </p>
          <p>
            <strong>Deployment:</strong> Vercel, Railway, or any Node.js host
          </p>
        </div>
      </LegalSection>

      <LegalSection heading="Open Source & Customization">
        <p>
          This template is designed to be fully customizable. You have complete control over:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Colors, fonts, and design tokens</li>
          <li>Content and page structure</li>
          <li>Components and sections</li>
          <li>Navigation and site structure</li>
          <li>SEO and metadata</li>
        </ul>
        <p className="mt-4">
          All code is well-documented and includes Cursor AI guidance to help you customize every aspect.
        </p>
      </LegalSection>

      {/* Contact Section */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold text-[#2d2d2d] mb-2">
          Get in Touch
        </h3>
        <p className="text-gray-700 mb-4">
          Have questions about the template or need help getting started?
        </p>
        <p className="text-gray-700">
          Email: <a href="mailto:hello@websitebuilder.com" className="text-[#4f46e5] hover:underline">hello@websitebuilder.com</a>
        </p>
      </div>
    </LegalPageLayout>
  )
}
