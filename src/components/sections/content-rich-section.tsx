/**
 * Content-Rich Section Component
 * ===============================
 * Reusable component for rendering narrative-driven content
 * using the content parser system
 * 
 * Usage:
 * <ContentRichSection 
 *   content={yourContentString} 
 *   variant="blog" 
 *   bgColor="white" 
 * />
 */

import { Container } from "@/components/ui/container"
import { parseContent } from "@/lib/content-parser"

interface ContentRichSectionProps {
  content: string
  variant?: "legal" | "blog"
  bgColor?: "white" | "gray" | "gradient"
  className?: string
  containerClassName?: string
}

const bgColorStyles = {
  white: "bg-white",
  gray: "bg-gray-50",
  gradient: "bg-gradient-to-br from-gray-50 to-white",
}

export function ContentRichSection({ 
  content, 
  variant = "blog", 
  bgColor = "white",
  className = "",
  containerClassName = ""
}: ContentRichSectionProps) {
  const contentElements = parseContent(content, { variant })
  
  return (
    <section className={`py-16 md:py-20 ${bgColorStyles[bgColor]} ${className}`}>
      <Container className={containerClassName}>
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {contentElements}
          </article>
        </div>
      </Container>
    </section>
  )
}


