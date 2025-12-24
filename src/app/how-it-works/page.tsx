import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { parseContent } from "@/lib/content-parser"
import { howItWorksContent } from "@/content/pages/how-it-works-content"

export const metadata: Metadata = {
  title: "How It Works: Car Finance Claims Process Explained | My Claims Centre",
  description: "Step-by-step guide to making a car finance claim. From eligibility check to receiving compensation—transparent, straightforward, no win no fee.",
  openGraph: {
    title: "How It Works: Car Finance Claims Process Explained",
    description: "Understand the car finance claims process. From eligibility check to compensation—transparent and simple.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HowItWorksPage() {
  // Parse the content with blog variant for clean headings
  const contentElements = parseContent(howItWorksContent, { variant: "blog" })
  
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
              How Our Car Finance
              <br />
              <span className="text-[#5d2c89]">Claims Process</span> Works
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No jargon, no hidden steps. Here's exactly what happens when you check your eligibility and make a claim.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {contentElements}
            </article>
          </div>
        </Container>
      </section>
    </div>
  )
}


