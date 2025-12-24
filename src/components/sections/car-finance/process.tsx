import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { FileText, Search, CheckCircle } from "lucide-react"

/**
 * Car Finance Process Section
 * Shows the ACTUAL 3-step process (not the fake 6 steps)
 * Compliance: Matches user's described process exactly
 */
export function CarFinanceProcess() {
  const steps = [
    {
      number: "01",
      title: "Share Basic Details",
      description: "Tell us about your car finance agreement. We just need simple information to check if you're eligible to claim.",
      icon: FileText,
    },
    {
      number: "02",
      title: "We Find Your Agreements",
      description: "We use a soft credit check to locate your finance agreements and gather the information needed. This doesn't affect your credit score.",
      icon: Search,
    },
    {
      number: "03",
      title: "We Do The Rest",
      description: "Our team handles everything—submitting your claim, dealing with lenders, and keeping you updated throughout. You just wait for the outcome.",
      icon: CheckCircle,
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm">
                How it works
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              3 Simple Steps to
              <br />
              <span className="text-[#5d2c89]">Set Up Your Claim</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started is straightforward. We handle the complexity so you don't have to.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="relative flex gap-6 bg-white p-8 rounded-xl border border-gray-200 hover:border-[#5d2c89] hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-[#ff9e36] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  <div className="flex-shrink-0 mt-2">
                    <div className="w-16 h-16 rounded-xl bg-[#5d2c89] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-12 py-6">
              Check My Eligibility
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              No win, no fee • Free eligibility check • Expert legal partners
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}


