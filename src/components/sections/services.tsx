import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AlertCircle, TrendingUp, DollarSign, Shield } from "lucide-react"

export function Services() {
  const reasons = [
    {
      title: "Hidden Commission",
      icon: DollarSign,
      description: "Dealers may have earned undisclosed commission on your car loan. This could form the basis of a claim.",
    },
    {
      title: "Unfair Pressure",
      icon: AlertCircle,
      description: "If you weren't informed about alternative options or better rates, you may be eligible to claim.",
    },
    {
      title: "Unaffordable Loans",
      icon: TrendingUp,
      description: "If you were sold unaffordable finance, you may be eligible to claim compensation.",
    },
    {
      title: "Mis-sold Add-ons",
      icon: Shield,
      description: "Unwanted add-ons like PPI, GAP insurance, or warranties? These could be eligible for claims.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Check if you qualify
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            You could be owed compensation
            <br />
            from your <span className="text-[#5d2c89]">car finance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            If you bought a car on finance between 2007-2024, you may be eligible to claim
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-[#5d2c89] hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#5d2c89]/10 mb-6">
                  <Icon className="w-6 h-6 text-[#5d2c89]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA below cards */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Sound familiar? Check if you're eligible to claim.
          </p>
          <Button size="lg" className="text-lg px-12 py-6">
            Check My Eligibility
          </Button>
        </div>
      </Container>
    </section>
  )
}


