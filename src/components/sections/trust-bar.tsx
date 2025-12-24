import { Container } from "@/components/ui/container"
import { Shield, Clock, CheckCircle } from "lucide-react"

/**
 * TrustBar - Policy-based trust signals only
 * No unverified statistics. Only factual service promises.
 */
export function TrustBar() {
  const trustSignals = [
    {
      icon: Shield,
      label: "No Win, No Fee",
      description: "You only pay if we succeed",
    },
    {
      icon: Clock,
      label: "Quick Eligibility Check",
      description: "Find out in minutes",
    },
    {
      icon: CheckCircle,
      label: "Expert Legal Partners",
      description: "Specialist solicitor network",
    },
  ]

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustSignals.map((signal, index) => {
            const Icon = signal.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#5d2c89]/10 mb-4">
                  <Icon className="w-7 h-7 text-[#5d2c89]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {signal.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {signal.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}


