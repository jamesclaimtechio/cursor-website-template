/**
 * Legal Page Template Component
 * ==============================
 * Renders legal pages from markdown content with custom block syntax
 */

import { Container } from "@/components/ui/container"
import { LegalPage } from "@/types/legal"
import { parseLegalContent, extractHeadings } from "@/lib/content-parser"

interface LegalPageTemplateProps {
  page: LegalPage
}

export function LegalPageTemplate({ page }: LegalPageTemplateProps) {
  const content = parseLegalContent(page.content)
  const headings = extractHeadings(page.content)

  return (
    <div className="bg-white">
      <Container>
        <div className="py-16 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 border-b border-gray-200 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">
              {page.title}
            </h1>
            <p className="text-sm text-gray-600">
              Last Updated: {page.lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {content}
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * Legal Page with Sidebar (Table of Contents)
 * For longer pages that benefit from navigation
 */
interface LegalPageWithSidebarProps {
  page: LegalPage
  showTOC?: boolean
}

export function LegalPageWithSidebar({ page, showTOC = true }: LegalPageWithSidebarProps) {
  const content = parseLegalContent(page.content)
  const headings = extractHeadings(page.content)

  return (
    <div className="bg-white">
      <Container>
        <div className="py-16">
          {/* Header */}
          <div className="mb-12 border-b border-gray-200 pb-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">
              {page.title}
            </h1>
            <p className="text-sm text-gray-600">
              Last Updated: {page.lastUpdated}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-4xl">
              <div className="prose prose-lg max-w-none">
                {content}
              </div>
            </div>

            {/* Sidebar - Table of Contents */}
            {showTOC && headings.length > 2 && (
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-28">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                    On This Page
                  </h4>
                  <nav className="space-y-2">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm transition-colors hover:text-[#4f46e5] ${
                          heading.level === 2 
                            ? "text-gray-700 font-medium" 
                            : "text-gray-500 pl-3"
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}


