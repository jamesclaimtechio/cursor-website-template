import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { FileText, Search, CheckCircle } from "lucide-react"

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Share Basic Details",
      description: "Tell us about your car finance agreement. Simple form with basic information to check your eligibility.",
      icon: FileText,
    },
    {
      number: "02",
      title: "We Find Your Agreements",
      description: "We use a soft credit check to locate your finance agreements and gather the information needed for your claim.",
      icon: Search,
    },
    {
      number: "03",
      title: "We Do The Rest",
      description: "Our team handles everything—submitting your claim, dealing with lenders, and keeping you updated. You just wait for the outcome.",
      icon: CheckCircle,
    },
  ]

  return (
    <section className="py-24 bg-white">
      
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm">
                Simple process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Get started in
              <br />
              <span className="text-[#5d2c89]">3 simple steps</span>
            </h2>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div 
                  key={index}
                  className="relative flex gap-6 bg-white p-8 rounded-xl border border-gray-200 hover:border-[#5d2c89] hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-[#5d2c89] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#5d2c89] mb-2">STEP {step.number}</div>
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
            <Button size="lg" className="text-lg px-12">
              Check My Eligibility
            </Button>
            <p className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-4">
              <span>No win, no fee</span>
              <span>•</span>
              <span>Free eligibility check</span>
              <span>•</span>
              <span>Expert legal partners</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}


