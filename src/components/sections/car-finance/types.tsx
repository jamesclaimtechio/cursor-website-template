import { Container } from "@/components/ui/container"
import { AlertCircle, Scale, FileCheck } from "lucide-react"

/**
 * Car Finance Types Section
 * Explains the two main types of car finance claims
 * Compliance: Uses accurate information from Motor Finance Redress doc
 */
export function CarFinanceTypes() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Two Types of
              <br />
              <span className="text-[#5d2c89]">Car Finance Claims</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* DCA Claims */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#5d2c89] transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#5d2c89]/10 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-7 h-7 text-[#5d2c89]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Discretionary Commission Arrangement Claims
                  </h3>
                  <p className="text-sm text-[#5d2c89] font-semibold">DCA Claims</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>What are DCAs?</strong> Discretionary Commission Arrangements allowed car dealers and brokers to adjust your interest rate to increase their commission. The higher they set your rate, the more they earned.
                </p>
                
                <p>
                  <strong>Why it matters:</strong> This created a clear conflict of interest. Your broker was incentivised to charge you more, not to get you the best deal.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-[#5d2c89]" />
                    Key Facts:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#5d2c89] mt-1">•</span>
                      <span>DCAs were banned by the FCA in January 2021</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5d2c89] mt-1">•</span>
                      <span>Affected agreements from 2007-2021</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5d2c89] mt-1">•</span>
                      <span>Commission was often not disclosed to customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5d2c89] mt-1">•</span>
                      <span>Main focus of the FCA redress scheme (May 2026)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Irresponsible Lending Claims */}
            <div className="bg-[#5d2c89] text-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Irresponsible Lending Claims
                  </h3>
                  <p className="text-sm text-white/80 font-semibold">Affordability Claims</p>
                </div>
              </div>

              <div className="space-y-4 leading-relaxed">
                <p>
                  <strong>What is irresponsible lending?</strong> This occurs when a lender provides finance without conducting proper affordability checks, or when they approve finance they should have known you couldn't afford.
                </p>
                
                <p>
                  <strong>Why it matters:</strong> Lenders have a legal duty to ensure finance is affordable for you. If they failed to do this, you may have a separate claim for compensation.
                </p>

                <div className="bg-white/10 rounded-lg p-4 mt-6 backdrop-blur-sm">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <FileCheck className="w-5 h-5" />
                    You may have been affected if:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff9e36] mt-1">•</span>
                      <span>No affordability checks were carried out</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff9e36] mt-1">•</span>
                      <span>The finance caused you financial difficulty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff9e36] mt-1">•</span>
                      <span>You had to struggle to make payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff9e36] mt-1">•</span>
                      <span>Your income/expenses weren't properly assessed</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm">
                    <strong>Note:</strong> Irresponsible lending claims are separate from DCA claims. You may be eligible for both types of claim on the same agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-2">
              Not sure which type of claim applies to you?
            </p>
            <p className="text-gray-500 mb-6">
              Our eligibility check will help determine what claims you may have.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}


