import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Check } from "lucide-react"

/**
 * TEMPLATE DEMO: CTA Component
 * =============================
 * Generic call-to-action section
 * 
 * BRAND SETUP: Customize the content for your business
 */

export function CTA() {
  return (
    <section className="py-24 bg-[#5d2c89]">
      <Container>
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              Get Started Today
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to build your
            <br />
            professional website?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join businesses using our template to create beautiful, functional websites in hours instead of weeks.
          </p>

          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-white text-[#5d2c89] hover:bg-gray-100 text-lg px-12 py-6"
            >
              Start Building Free
            </Button>

            <div className="flex flex-wrap gap-6 justify-center text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Setup in 10 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Cursor AI guidance</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * USAGE:
 * ======
 * This component is currently hardcoded with demo content.
 * 
 * To make it reusable, you can:
 * 1. Keep as-is and edit content for your brand
 * 2. Add props to make it dynamic
 * 3. Create multiple CTA variants for different pages
 */
