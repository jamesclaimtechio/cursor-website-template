import { Container } from "@/components/ui/container"
import { BadgeCheck, Target, Smile, Clock, TrendingUp, Eye } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: BadgeCheck,
      title: "No Win, No Fee",
      description: "You only pay if your claim is successful. No upfront costs, no hidden fees. Fee capped at 30% + VAT.",
    },
    {
      icon: Target,
      title: "Expert Team",
      description: "Experienced claims specialists who understand motor finance claims and work with FCA-regulated partners.",
    },
    {
      icon: Smile,
      title: "Stress-Free Process",
      description: "We handle everything from finding your agreements to dealing with lenders. You just provide basic details.",
    },
    {
      icon: Clock,
      title: "Redress Scheme 2026",
      description: "The FCA redress scheme launches May 2026. Get your claim in early to be at the front of the queue.",
    },
    {
      icon: TrendingUp,
      title: "Soft Credit Check",
      description: "We use a soft credit check to locate your finance agreements without affecting your credit score.",
    },
    {
      icon: Eye,
      title: "Transparent Service",
      description: "Clear communication at every stage. No confusing terms. You're in control throughout.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Why choose us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why choose
            <br />
            <span className="text-[#5d2c89]">Claims Centre</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#5d2c89] hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#5d2c89]/10 mb-6">
                  <Icon className="w-6 h-6 text-[#5d2c89]" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}


