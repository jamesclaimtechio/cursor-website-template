"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { useState } from "react"

/**
 * TEMPLATE DEMO: FAQ Component
 * ============================
 * Shows demo FAQ content for "Website Builder"
 * 
 * BRAND SETUP: Replace with your actual FAQs
 */

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How quickly can I launch my website?",
      answer: "Most users have a fully functional website running within 2-4 hours. Setup takes 10-15 minutes, then add your content and deploy!",
    },
    {
      question: "Do I need coding knowledge?",
      answer: "No! The template is designed for non-technical users. Cursor AI guides you through setup, and all components are ready to use.",
    },
    {
      question: "Can I customize the design?",
      answer: "Absolutely. Change colors, fonts, and layouts through simple config files. The design system makes it easy to match your brand.",
    },
    {
      question: "What's included in the template?",
      answer: "20+ reusable components, blog system, SEO engine, compliance validation, comprehensive documentation, and Cursor AI guidance throughout.",
    },
    {
      question: "Is this suitable for my industry?",
      answer: "Yes! The template works for claims management, legal services, consulting, agencies, and any professional service business.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Common questions
              <br />
              <span className="text-[#5d2c89]">answered</span>
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about this template
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:border-[#5d2c89] hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-[#5d2c89] transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-400 group-hover:text-[#5d2c89] transition-colors flex-shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <Button variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * BRAND SETUP:
 * ============
 * Current demo FAQs are about Website Builder template
 * 
 * To customize:
 * 1. Replace the faqs array with your questions
 * 2. Update the section title/description
 * 3. Or pass FAQs as props for full reusability
 */
