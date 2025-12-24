import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Check, ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5d2c89]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff9e36]/5 rounded-full blur-3xl" />
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#5d2c89]/10 rounded-3xl rotate-12 hidden lg:block" />
      <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-[#ff9e36]/10 rounded-2xl -rotate-12 hidden lg:block" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#5d2c89]/5 rounded-full hidden md:block" />
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-[#ff9e36]/5 rounded-lg rotate-45 hidden md:block" />
      
      {/* Camera lens effects */}
      <div className="absolute top-40 right-40 w-64 h-64 hidden xl:block">
        <div className="absolute inset-0 rounded-full border border-[#5d2c89]/10" />
        <div className="absolute inset-8 rounded-full border border-[#5d2c89]/10" />
        <div className="absolute inset-16 rounded-full border border-[#5d2c89]/10" />
      </div>
      <div className="absolute bottom-20 left-32 w-48 h-48 hidden xl:block">
        <div className="absolute inset-0 rounded-full border border-[#ff9e36]/10" />
        <div className="absolute inset-6 rounded-full border border-[#ff9e36]/10" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge - Removed unverified "Average claim" stat */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
            <span className="text-sm font-medium text-gray-700">Free Eligibility Check</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
            Car finance claims
            <br />
            made <span className="text-[#5d2c89]">simple</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Mis-sold car finance? Hidden commissions? Check if you could claim compensation. No win, no fee.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-10 py-6 shadow-lg">
              Check Your Claim Free
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-10 py-6"
            >
              How it works
            </Button>
          </div>

          {/* Trust badges - Removed unverified claims stat */}
          <div className="flex flex-wrap gap-6 justify-center pt-8 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#5d2c89] flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm">2-min check</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#5d2c89] flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm">No win, no fee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#5d2c89] flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm">Expert solicitor partners</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


