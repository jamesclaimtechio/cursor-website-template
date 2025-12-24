import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Check } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 bg-[#5d2c89]">
      <Container>
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              Free Eligibility Check
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to check if
            <br />
            you're eligible?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            See if you could be affected by hidden commission on car finance agreements between 2007-2024.
          </p>

          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-white text-[#5d2c89] hover:bg-gray-100 text-lg px-12 py-6"
            >
              Check My Eligibility
            </Button>

            <div className="flex flex-wrap gap-6 justify-center text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>No win, no fee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Free eligibility check</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Expert legal partners</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


