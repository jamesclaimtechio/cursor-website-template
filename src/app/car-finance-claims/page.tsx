import { Metadata } from "next"
import { CarFinanceHero } from "@/components/sections/car-finance/hero"
import { Disclaimer } from "@/components/sections/disclaimer"
import { Container } from "@/components/ui/container"
import { parseContent } from "@/lib/content-parser"
import { carFinanceClaimsContent } from "@/content/pages/car-finance-claims-content"

export const metadata: Metadata = {
  title: "Car Finance Claims: Check Your Eligibility for Compensation | My Claims Centre",
  description: "Hidden commission on your car finance? Millions of UK consumers could claim compensation for mis-sold PCP, HP, and dealer-arranged finance between 2007-2024. Free eligibility check.",
  keywords: ["car finance claims", "PCP claims", "hidden commission", "mis-sold car finance", "DCA claims", "car finance compensation"],
  openGraph: {
    title: "Car Finance Claims: Check Your Eligibility for Compensation",
    description: "Were you charged hidden commission on car finance? Check if you're eligible to claim compensation. No win, no fee.",
  },
}

export default function CarFinanceClaimsPage() {
  // Parse the rich content with blog variant
  const contentElements = parseContent(carFinanceClaimsContent, { variant: "blog" })
  
  return (
    <>
      {/* Keep the Hero - it's visual and effective */}
      <CarFinanceHero />
      
      {/* Disclaimer */}
      <Disclaimer />
      
      {/* Rich narrative content */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {contentElements}
            </article>
          </div>
        </Container>
      </section>
    </>
  )
}


