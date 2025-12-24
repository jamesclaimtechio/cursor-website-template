import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AlertCircle, DollarSign, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"

/**
 * Car Finance Explainer Section
 * Explains what car finance claims are and why people may be eligible
 * Compliance: Uses verified information from Motor Finance Redress doc
 */
export function CarFinanceExplainer() {
  const reasons = [
    {
      icon: DollarSign,
      title: "Hidden Commission",
      description: "Between 2007-2024, car dealers may have received undisclosed commission on your finance agreement through Discretionary Commission Arrangements (DCAs).",
    },
    {
      icon: AlertCircle,
      title: "Lack of Disclosure",
      description: "If you weren't informed about the commission structure or given the opportunity to negotiate, you may be eligible to claim.",
    },
    {
      icon: TrendingUp,
      title: "Inflated Interest Rates",
      description: "DCAs allowed brokers to increase your interest rate to earn higher commission—creating a conflict of interest.",
    },
    {
      icon: Shield,
      title: "Irresponsible Lending",
      description: "If you were sold unaffordable finance without proper affordability checks, this may form a separate claim.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                What are Car Finance Claims?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              What are Car Finance
              <br />
              <span className="text-[#5d2c89]">Claims?</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Car finance claims relate to hidden commission arrangements where dealers and brokers earned money from your finance agreement without properly disclosing it to you.
              </p>
              <p>
                The FCA found that <strong>millions of UK consumers</strong> who purchased vehicles using finance between 2007 and 2024 may have been overcharged due to these arrangements.
              </p>
              <p>
                A <strong>redress scheme launches in May 2026</strong> to compensate affected consumers. Getting your claim in early helps ensure you're at the front of the queue.
              </p>
            </div>

            <div>
              <Button size="lg" className="text-lg px-10 py-6">
                Check My Eligibility
              </Button>
            </div>
          </div>

          {/* Right Column: Fox mascot placeholder or reasons grid */}
          <div className="space-y-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#5d2c89] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#5d2c89]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#5d2c89]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
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


