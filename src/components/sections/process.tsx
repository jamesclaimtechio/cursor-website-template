import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Download, Settings, Rocket } from "lucide-react"

/**
 * TEMPLATE DEMO: Process Component
 * =================================
 * Shows demo process for "Website Builder"
 * 
 * BRAND SETUP: Replace with your actual process steps
 */

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Clone the Template",
      description: "Download the template from GitHub and install dependencies. Takes less than 5 minutes to get started.",
      icon: Download,
    },
    {
      number: "02",
      title: "Customize Your Brand",
      description: "Run the setup script or use Cursor AI to configure your brand identity, colors, and content.",
      icon: Settings,
    },
    {
      number: "03",
      title: "Deploy & Launch",
      description: "Build and deploy to Vercel, Railway, or your preferred host. Your website goes live in minutes.",
      icon: Rocket,
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
                  className="flex gap-6 items-start group"
                >
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5d2c89] to-[#451e66] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#5d2c89] hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-[#5d2c89]/10 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-[#5d2c89]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#5d2c89] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button size="lg" className="px-12 text-lg">
              Start Building Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * BRAND SETUP:
 * ============
 * Current steps demonstrate "Website Builder" template setup
 * 
 * To customize:
 * 1. Replace steps array with your process
 * 2. Update icons (from lucide-react)
 * 3. Adjust number of steps (3-5 works best)
 * 4. Or make this component accept props for full reusability
 */
