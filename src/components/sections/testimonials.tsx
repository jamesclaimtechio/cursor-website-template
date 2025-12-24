import { Container } from "@/components/ui/container"
import { Shield, Users, FileCheck } from "lucide-react"

/**
 * Testimonials Section - COMPLIANCE NOTE
 * =====================================
 * This section previously contained fabricated reviews with specific amounts.
 * Replaced with factual trust indicators based on our actual service offering.
 * 
 * DO NOT add testimonials unless:
 * 1. They are verified and documented
 * 2. Customer has given written consent
 * 3. No specific payout amounts are mentioned
 * 4. They accurately reflect typical experience
 */

export function Testimonials() {
  const trustIndicators = [
    {
      icon: Shield,
      title: "No Win, No Fee Guarantee",
      description: "You only pay if your claim is successful. Our fee is capped at 30% + VAT of any compensation received, with no upfront costs or hidden charges.",
    },
    {
      icon: Users,
      title: "Expert Claims Team",
      description: "Our specialists understand motor finance claims and work with FCA-regulated partners to handle your case professionally.",
    },
    {
      icon: FileCheck,
      title: "Clear Process",
      description: "We handle the complexity—from finding your agreements to dealing with lenders. You stay informed at every stage with no confusing jargon.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm">
                What you can expect
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              How we help with
              <br />
              <span className="text-[#5d2c89]">your claim</span>
            </h2>
          </div>

          <div className="space-y-6">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#5d2c89] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-[#5d2c89] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {indicator.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {indicator.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}


