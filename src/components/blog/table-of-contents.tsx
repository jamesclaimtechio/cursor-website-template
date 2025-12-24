"use client"

import { useEffect, useState } from "react"
import { List, ChevronDown, ChevronUp, ArrowUp } from "lucide-react"

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Extract headings from content
    const lines = content.split('\n')
    const items: TOCItem[] = []
    
    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        const text = line.replace('## ', '').trim()
        const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
        items.push({ id, text, level: 2 })
      } else if (line.startsWith('### ')) {
        const text = line.replace('### ', '').trim()
        const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
        items.push({ id, text, level: 3 })
      }
    })
    
    setHeadings(items)
  }, [content])

  useEffect(() => {
    // Track scroll position and highlight active section
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean)
      
      // Find the heading that's currently in view
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveId(headings[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const top = element.offsetTop - 120 // Offset for fixed header (80px) + padding
      window.scrollTo({ top, behavior: 'smooth' })
      setIsOpen(false) // Close mobile menu after click
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (headings.length === 0) return null

  return (
    <>
      {/* Desktop: Sticky Sidebar (Floats on Scroll) */}
      <div className="hidden lg:block sticky top-28 max-h-[calc(100vh-8rem)]">
        <div className="overflow-y-auto">
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-[#5d2c89]/30 transition-all">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b-2 border-gray-200">
              <div className="w-8 h-8 rounded-lg bg-[#5d2c89]/10 flex items-center justify-center">
                <List className="w-4 h-4 text-[#5d2c89]" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">On This Page</h3>
            </div>
            
            <nav>
              <ul className="space-y-1">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <button
                      onClick={() => scrollToHeading(heading.id)}
                      className={`
                        text-left w-full text-sm transition-all duration-200
                        ${heading.level === 3 ? 'pl-4' : ''}
                        ${activeId === heading.id 
                          ? 'text-[#5d2c89] font-semibold' 
                          : 'text-gray-600 hover:text-[#5d2c89]'
                        }
                      `}
                    >
                      <span className={`
                        block py-2 border-l-3 pl-3 transition-all rounded-r
                        ${activeId === heading.id 
                          ? 'border-[#5d2c89] bg-[#5d2c89]/5' 
                          : 'border-gray-200 hover:border-[#5d2c89] hover:bg-gray-50'
                        }
                      `}>
                        {heading.text}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Back to Top Button */}
            <div className="mt-6 pt-4 border-t-2 border-gray-200">
              <button
                onClick={scrollToTop}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#5d2c89] text-white rounded-lg hover:bg-[#451e66] transition-all font-medium text-sm shadow-md hover:shadow-lg"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Collapsible at Top */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-gray-50 rounded-xl p-4 border border-gray-200 flex items-center justify-between hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-2">
            <List className="w-5 h-5 text-[#5d2c89]" />
            <span className="font-bold text-gray-900">Table of Contents</span>
          </div>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>
        
        {isOpen && (
          <div className="mt-2 bg-gray-50 rounded-xl p-4 border border-gray-200">
            <nav>
              <ul className="space-y-2">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <button
                      onClick={() => scrollToHeading(heading.id)}
                      className={`
                        text-left w-full text-sm transition-colors duration-200
                        ${heading.level === 3 ? 'pl-4' : ''}
                        ${activeId === heading.id 
                          ? 'text-[#5d2c89] font-semibold' 
                          : 'text-gray-600 hover:text-[#5d2c89]'
                        }
                      `}
                    >
                      <span className={`
                        block py-1 border-l-2 pl-3 transition-all
                        ${activeId === heading.id 
                          ? 'border-[#5d2c89]' 
                          : 'border-transparent'
                        }
                      `}>
                        {heading.text}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Back to Top - Mobile */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={scrollToTop}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#5d2c89] text-white rounded-lg hover:bg-[#451e66] transition-all font-medium text-sm"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}


