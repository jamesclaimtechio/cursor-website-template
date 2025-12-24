import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

/**
 * Car Finance Lenders Section
 * Shows major lenders that consumers can claim against
 * Compliance: Listing actual lenders is factual and compliant
 */
export function CarFinanceLenders() {
  const majorLenders = [
    { name: "Black Horse", color: "bg-gray-900" },
    { name: "MotoNovo", color: "bg-[#5d2c89]" },
    { name: "MoneyBarn", color: "bg-[#ff9e36]" },
    { name: "Close Brothers", color: "bg-gray-700" },
  ]

  const additionalLenders = [
    "Santander Consumer Finance",
    "Barclays Partner Finance",
    "FirstRand Bank (Aldermore)",
    "Secure Trust Bank",
    "Creation Consumer Finance",
    "Hitachi Capital",
    "BMW Financial Services",
    "Mercedes-Benz Financial Services",
    "Volkswagen Financial Services",
    "PSA Finance",
    "Toyota Financial Services",
    "And many more...",
  ]

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                Affected lenders
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Which Lenders Can You
              <br />
              <span className="text-[#5d2c89]">Claim Against?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              If you had car finance with any of these lenders between 2007-2024, you may be eligible to claim.
            </p>
          </div>

          {/* Major Lenders Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {majorLenders.map((lender, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-[#5d2c89] hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${lender.color} rounded-full mx-auto mb-4`}></div>
                  <h3 className="text-lg font-bold text-gray-900">{lender.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Lenders List */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              + Many More Lenders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalLenders.map((lender, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <div className="w-2 h-2 rounded-full bg-[#5d2c89] flex-shrink-0"></div>
                  <span className="text-sm font-medium">{lender}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Not sure if your lender is covered? Check your eligibility now.
            </p>
            <Button size="lg" className="text-lg px-12 py-6">
              Check My Eligibility
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}


