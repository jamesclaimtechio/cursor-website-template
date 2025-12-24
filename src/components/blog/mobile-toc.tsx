"use client"

import { useEffect, useState } from "react"
import { List, ChevronDown, ChevronUp } from "lucide-react"

interface TOCItem {
  id: string
  text: string
  level: number
}

interface MobileTOCProps {
  content: string
  hasFaqs?: boolean
}

export function MobileTOC({ content, hasFaqs = false }: MobileTOCProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)

  // Extract headings from content (runs once)
  useEffect(() => {
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
    
    // Add FAQs as final heading if present
    if (hasFaqs) {
      items.push({ id: 'faqs-section', text: 'FAQs', level: 2 })
    }
    
    setHeadings(items)
  }, [content, hasFaqs])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean)
      
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveId(headings[i].id)
            return
          }
        }
      }
      
      // If no heading is above threshold, use first heading
      if (headings.length > 0 && !activeId) {
        setActiveId(headings[0].id)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings, activeId])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const top = element.offsetTop - 140 // Extra offset for mobile sticky bar
      window.scrollTo({ top, behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  // Get active heading text
  const activeHeading = headings.find(h => h.id === activeId)
  const displayText = activeHeading?.text || headings[0]?.text || "Quick Links"

  if (headings.length === 0) return null

  return (
    <div className="lg:hidden sticky top-24 z-30 -mx-4 px-4 mb-6">
      <div className="bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-hidden">
        {/* Header - Tap to expand */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-[#5d2c89] flex items-center justify-center flex-shrink-0">
              <List className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-600 truncate">
              {displayText}
            </span>
          </div>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
          )}
        </button>

        {/* Expandable List */}
        {isOpen && (
          <nav className="px-4 py-3 border-t border-gray-200 max-h-[50vh] overflow-y-auto">
            <ul className="space-y-1">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={`
                      text-left w-full text-sm py-2 px-3 rounded-lg transition-all
                      ${heading.level === 3 ? 'pl-6' : ''}
                      ${activeId === heading.id 
                        ? 'bg-[#5d2c89]/10 text-[#5d2c89] font-semibold' 
                        : 'text-gray-600 hover:bg-gray-100'
                      }
                    `}
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}


