import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Zap, Palette, Shield, Code } from "lucide-react"

/**
 * TEMPLATE DEMO: Services/Features Component
 * ===========================================
 * Shows demo features for "Website Builder"
 * 
 * BRAND SETUP: Replace with your actual services/features
 */

export function Services() {
  const features = [
    {
      title: "Lightning Fast",
      icon: Zap,
      description: "Built on Next.js 14 for blazing performance. Your visitors will love the speed.",
    },
    {
      title: "Fully Customizable",
      icon: Palette,
      description: "Match your brand perfectly with our flexible theming system. Colors, fonts, everything.",
    },
    {
      title: "SEO Optimized",
      icon: Shield,
      description: "Built-in SEO best practices, keyword research system, and content validation.",
    },
    {
      title: "No Code Needed",
      icon: Code,
      description: "Set up in minutes with Cursor AI guidance. No technical knowledge required.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Why Choose This Template
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Everything you need
            <br />
            to build <span className="text-[#5d2c89]">professional websites</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete solution for creating beautiful, functional websites in record time
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#5d2c89] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5d2c89] to-[#451e66] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5d2c89] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-10">
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  )
}

/**
 * BRAND SETUP:
 * ============
 * Current content showcases "Website Builder" template features
 * 
 * To customize for your business:
 * 1. Replace features array with your services
 * 2. Update icons (from lucide-react)
 * 3. Adjust grid layout if needed (2-col, 3-col, 4-col)
 * 4. Update heading to match your offering
 */
