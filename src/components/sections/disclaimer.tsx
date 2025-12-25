import { Container } from "@/components/ui/container"
import { AlertCircle } from "lucide-react"

/**
 * TEMPLATE DEMO: Disclaimer Component
 * ====================================
 * Generic disclaimer component
 * 
 * BRAND SETUP: Customize for your business type
 * - For claims management: Add FCA compliance text
 * - For legal services: Add law firm disclaimers
 * - For software/SaaS: Add terms of use notice
 * - Or delete if not needed
 */

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
              <h2 className="text-lg font-bold text-gray-900">Template Information</h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Demo Site:</strong> This is a demonstration of the Website Builder template. 
                  All content shown is for example purposes only.
                </p>
                <p>
                  <strong className="text-gray-900">Customization:</strong> Replace this disclaimer component with your own 
                  business-specific disclaimers, legal notices, or regulatory disclosures.
                </p>
                <p>
                  <strong className="text-gray-900">For Regulated Businesses:</strong> If you're in claims management, legal services, 
                  or other regulated industries, ensure you include all required disclosures as per your regulatory body (FCA, SRA, etc.).
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * EXAMPLES FOR DIFFERENT INDUSTRIES:
 * ===================================
 * 
 * Claims Management (UK FCA):
 * - Legal notice (not a law firm)
 * - Customer rights (can claim directly for free)
 * - Fee structure (% of compensation)
 * - FCA authorization number
 * 
 * Legal Services:
 * - Law firm status
 * - Attorney-client relationship notice
 * - Confidentiality statement
 * 
 * SaaS/Software:
 * - Terms of service link
 * - Privacy policy link
 * - License information
 * 
 * Delete Component:
 * - If not needed for your business, simply remove from page imports
 */
