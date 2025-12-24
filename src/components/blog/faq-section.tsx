"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

// Individual FAQ accordion item - can be used standalone
export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#5d2c89] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="px-6 pb-5 border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed pt-4">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}


