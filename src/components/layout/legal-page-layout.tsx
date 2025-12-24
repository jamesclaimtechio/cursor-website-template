import { Container } from "@/components/ui/container"
import { ReactNode } from "react"

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="bg-white">
      <Container>
        <div className="py-16 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 border-b border-gray-200 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">
              {title}
            </h1>
            <p className="text-sm text-gray-600">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </Container>
    </div>
  )
}

interface LegalSectionProps {
  heading: string
  children: ReactNode
}

export function LegalSection({ heading, children }: LegalSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-[#2d2d2d] mb-4 border-l-4 border-[#4f46e5] pl-4">
        {heading}
      </h2>
      <div className="text-gray-700 space-y-4">
        {children}
      </div>
    </section>
  )
}


