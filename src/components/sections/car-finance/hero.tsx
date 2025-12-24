import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Check, ChevronRight } from "lucide-react"
import Image from "next/image"

/**
 * Car Finance Hero Section
 * Compliance: Uses approved CTAs, no unverified claims
 */
export function CarFinanceHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5d2c89]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff9e36]/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm">
                2007-2024 Finance Agreements
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Quick and easy
              <br />
              <span className="text-[#5d2c89]">Car Finance Claims</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Were you charged hidden commission on your car finance? You may be eligible to claim compensation.
            </p>

            {/* Trust indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5d2c89] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-gray-700">No win, no fee guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5d2c89] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-gray-700">Expert solicitor partners</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5d2c89] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-gray-700">Simple eligibility check</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button size="lg" className="text-lg px-10 py-6 shadow-lg">
                Check My Eligibility
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Mobile mockup placeholder - you can replace with actual image */}
              <div className="bg-gradient-to-br from-[#5d2c89] to-[#8b4db3] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-2 pt-4">
                    <div className="h-12 bg-[#5d2c89]/10 rounded-lg"></div>
                    <div className="h-12 bg-[#5d2c89]/10 rounded-lg"></div>
                  </div>
                  <div className="h-12 bg-[#ff9e36] rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


