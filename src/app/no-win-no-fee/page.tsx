import { Metadata } from "next"
import { LegalPageLayout, LegalSection } from "@/components/layout/legal-page-layout"

export const metadata: Metadata = {
  title: "No Win No Fee Policy | Claims Centre",
  description: "Understand our No Win No Fee arrangement. You only pay if your claim is successful - no upfront costs or hidden charges.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function NoWinNoFeePage() {
  return (
    <LegalPageLayout
      title="No Win, No Fee Policy"
      lastUpdated="December 18, 2024"
    >
      <LegalSection heading="What is No Win No Fee?">
        <p>
          A No Win No Fee arrangement means you only pay if your claim is successful; otherwise, there's no cost. It serves as the contract between you and your lawyer under these terms and commonly referred to as a conditional fee agreement.
        </p>
      </LegalSection>

      <LegalSection heading="Costs of No Win No Fee">
        <p>
          If your claim is successful, your Solicitor will take a percentage of up to 30% as a success fee from the compensation awarded for a successful claim. Details of what percentage your solicitor will charge will be made clear on your agreement before you sign.
        </p>
        <p>
          You can also be charged termination fees, if you cancel your claim outside of the initial cancelation period. Details of these fees will be clear on the agreement with your solicitor.
        </p>
      </LegalSection>

      <LegalSection heading="How Does No Win No Fee Work?">
        <p>
          Opting for a solicitor may involve securing 'after the event' insurance on your behalf, covering expenses like court fees. In successful claims, the insurance cost is typically deducted from your final compensation.
        </p>
        
        <p className="font-semibold">
          If your claim is successful, your solicitor will typically make the following deductions from the compensation awarded to you:
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>A "success fee" for securing a successful claim.</li>
          <li>The opposing party may usually be required to contribute to your legal expenses, but any deficit may also be deducted from your compensation.</li>
          <li>The cost of the premium for any legal protection insurance that might have been necessary to safeguard your risk-free claim.</li>
        </ul>

        <p>
          The remainder, which will usually constitute the majority of the compensation granted, will be retained by you. The deductions outlined above will only be made once your compensation is received. There are no upfront expenses or undisclosed charges.
        </p>

        <p>
          Your solicitor will provide a comprehensive explanation of these details at the outset, so you are aware of what to anticipate in the event of a successful claim.
        </p>
      </LegalSection>

      <LegalSection heading="Legal Protection Insurance">
        <p>
          When initiating the claim, your "no win no fee" solicitor may need to secure a specialized legal protection insurance policy for you. This policy covers costs in the event of an unsuccessful claim and ensures that the process remains risk-free. This insurance is always in place as a precaution.
        </p>

        <p>
          This will be done if you lack an existing legal protection policy that offers adequate coverage. Such coverage is sometimes included in home or motor insurance or as a benefit of certain credit cards. It's a simple matter to verify, and your "no win no fee" solicitor will confirm this when commencing work on your claim.
        </p>
      </LegalSection>

      <LegalSection heading="Why Choose No Win No Fee?">
        <p>
          As you don't need to make any payments in the event of a loss, "no win no fee" arrangements eliminate the financial risk associated with pursuing a financial claim. Notably, this approach guarantees equitable access to justice for cases involving financial disputes resulting from undisclosed commissions.
        </p>
      </LegalSection>

      <LegalSection heading="Conditions for No Win No Fee Claims">
        <p>
          However, pursuing a compensation claim on "no win no fee" terms is contingent on your solicitor:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Agreeing to handle your claim under these terms initially.</li>
          <li>Ensuring that suitable legal protection insurance is in place, which means you won't be required to pay if the claim is unsuccessful.</li>
          <li>Determining that your claim has a consistently good probability of success, usually 50% or higher.</li>
          <li>Adhering to the terms of the insurance policy at all times.</li>
        </ul>

        <p>
          In some cases, "no win no fee" terms might not be feasible, although this is rare. If such a situation arises, your solicitor will promptly inform you and provide an explanation of the available options for your next steps.
        </p>
      </LegalSection>

      {/* Contact Section */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold text-[#2d2d2d] mb-2">
          Questions About Our No Win No Fee Policy?
        </h3>
        <p className="text-gray-700 mb-4">
          If you have any questions about our No Win No Fee arrangement, please don't hesitate to contact us.
        </p>
        <p className="text-gray-700">
          Email: <a href="mailto:info@myclaimscentre.co.uk" className="text-[#4f46e5] hover:underline">info@myclaimscentre.co.uk</a>
        </p>
      </div>
    </LegalPageLayout>
  )
}


