"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How much does it cost?",
      answer: "Nothing upfront. We only charge a fee if your claim is successful (typically 25% + VAT of any compensation received).",
    },
    {
      question: "How long does it take?",
      answer: "Typical claims take 8-12 weeks to process, though complex cases may take longer depending on the lender's response.",
    },
    {
      question: "What if my claim is unsuccessful?",
      answer: "You pay nothing. It's completely risk-free on a no win, no fee basis.",
    },
    {
      question: "Do I need proof?",
      answer: "Not initially. We'll help you gather evidence and build your case from the information you provide.",
    },
    {
      question: "Can I claim for old agreements?",
      answer: "Yes, you may be able to claim for finance agreements from the past 6 years, subject to eligibility.",
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
              Everything you need to know about car finance claims
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
                  <span className="font-bold text-gray-900 text-lg pr-8 group-hover:text-[#5d2c89] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-[#5d2c89]/10 flex items-center justify-center text-[#5d2c89] text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? "−" : "+"}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="text-lg text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}


