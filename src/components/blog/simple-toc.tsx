"use client"

import { useEffect, useState, useRef } from "react"
import { List, ArrowUp } from "lucide-react"

interface TOCItem {
  id: string
  text: string
  level: number
}

interface SimpleTOCProps {
  content: string
  hasFaqs?: boolean
}

export function SimpleTOC({ content, hasFaqs = false }: SimpleTOCProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const navRef = useRef<HTMLElement>(null)
  const activeItemRef = useRef<HTMLButtonElement>(null)

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
      
      // If no heading is above threshold, clear active
      if (headings.length > 0) {
        setActiveId("")
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  // Auto-scroll the nav to keep active item visible
  useEffect(() => {
    if (activeId && navRef.current && activeItemRef.current) {
      const nav = navRef.current
      const activeButton = activeItemRef.current
      
      // Calculate if button is out of view
      const navRect = nav.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()
      
      const isAboveView = buttonRect.top < navRect.top
      const isBelowView = buttonRect.bottom > navRect.bottom
      
      if (isAboveView || isBelowView) {
        // Scroll to center the active item in the nav
        const scrollTop = activeButton.offsetTop - (nav.clientHeight / 2) + (activeButton.clientHeight / 2)
        nav.scrollTo({ top: scrollTop, behavior: 'smooth' })
      }
    }
  }, [activeId])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const top = element.offsetTop - 120
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (headings.length === 0) return null

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-hidden h-[calc(100vh-8rem)] flex flex-col">
      {/* Header - Fixed at top */}
      <div className="flex-shrink-0 px-5 py-4 border-b-2 border-gray-200 bg-gray-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#5d2c89] flex items-center justify-center">
            <List className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Quick Links</h3>
        </div>
      </div>
      
      {/* Navigation Links - Grows to fill space, scrolls if needed */}
      <nav ref={navRef} className="flex-1 overflow-y-auto px-5 py-4">
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                ref={activeId === heading.id ? activeItemRef : null}
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
                  block py-2 border-l-2 pl-3 transition-all rounded-r
                  ${activeId === heading.id 
                    ? 'border-[#5d2c89] bg-[#5d2c89]/5' 
                    : 'border-gray-200 hover:border-[#5d2c89]/50 hover:bg-gray-50'
                  }
                `}>
                  {heading.text}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* CTA Footer - Fixed at bottom */}
      <div className="flex-shrink-0 p-5 border-t-2 border-gray-200 bg-gradient-to-br from-[#5d2c89] to-[#451e66]">
        <div className="text-center text-white mb-3">
          <p className="text-sm font-semibold mb-1">Ready to claim?</p>
          <p className="text-xs text-white/80">Check eligibility in 2 mins</p>
        </div>
        <button
          onClick={scrollToTop}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#5d2c89] rounded-lg hover:bg-gray-100 transition-all font-bold text-sm shadow-md hover:shadow-lg mb-2"
        >
          Check My Eligibility
        </button>
        <button
          onClick={scrollToTop}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all font-medium text-xs"
        >
          <ArrowUp className="w-3 h-3" />
          Back to Top
        </button>
      </div>
    </div>
  )
}


