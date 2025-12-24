import { Container } from "@/components/ui/container"
import { AlertCircle } from "lucide-react"

export function Disclaimer() {
  return (
    <section className="py-12 bg-amber-50 border-y border-amber-100">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <h2 className="text-lg font-bold text-gray-900">Important Information</h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Legal Notice:</strong> My Claims Centre does not give legal advice. 
                  My Claims Centre acts as a leads generator and obtains a fee from third parties in exchange for our clients' claims.
                </p>
                <p>
                  <strong className="text-gray-900">Your Rights:</strong> You do not need to use a claims management company to make a claim for compensation. 
                  It is possible for the customer to present the claim themselves for free, either to the person against whom they wish to complain 
                  or to the relevant Financial Ombudsman Service (FOS) or the statutory compensation scheme (FSCS).
                </p>
                <p>
                  <strong className="text-gray-900">Fees:</strong> The No Win No Fee Success Fee will be up to 36% (including VAT). 
                  There is also a termination fee should you cancel within the 14 day cooling off period. 
                  We charge no fee for our service; we receive a success fee from our partners if you choose to go ahead with your case. 
                  Please review all contracts before signing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


