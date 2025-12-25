import { Metadata } from "next"
import { LegalPageLayout, LegalSection } from "@/components/layout/legal-page-layout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Fee Structure | Website Builder",
  description: "Transparent fee structure for our claims management services. Success fee of up to 30% + VAT, with no upfront costs.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function FeesPage() {
  return (
    <LegalPageLayout
      title="Our Fee Structure"
      lastUpdated="December 18, 2024"
    >
      <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-500 rounded-lg">
        <h3 className="font-bold text-xl mb-3">Important: Our Referral Service is Free</h3>
        <p className="text-gray-700 mb-3">
          <strong>You do not pay any fees to My Website Builder.</strong> Our service is completely free - we assess your eligibility and refer you to specialist solicitors at no cost to you.
        </p>
        <p className="text-gray-700">
          The fees described on this page are charged by the <strong>solicitors we refer you to</strong>, not by us. We receive a referral fee from the solicitor, but this does not come from your compensation and does not increase the solicitor's charges.
        </p>
      </div>

      <LegalSection heading="No Win, No Fee with Your Solicitor">
        <p>
          The solicitors we refer you to operate on a <strong>No Win, No Fee</strong> basis. This means you don't pay your solicitor anything if your claim is unsuccessful. You only pay when they successfully secure compensation for you.
        </p>
        <p>
          This arrangement removes the financial risk from pursuing a claim and ensures everyone's interests are aligned with yours.
        </p>
        <p>
          For full details about how No Win No Fee works, please see our{" "}
          <Link href="/no-win-no-fee" className="text-[#4f46e5] hover:underline font-semibold">
            No Win No Fee Policy
          </Link>.
        </p>
      </LegalSection>

      <LegalSection heading="Solicitor Success Fee">
        <p>
          If your claim is successful, your solicitor will charge a success fee of <strong>up to 30% of the compensation awarded</strong>, plus VAT (Value Added Tax at the current rate).
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
          <h3 className="font-bold text-lg mb-3">Fee Calculation Example</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-blue-200 pb-2">
              <span>Compensation Awarded:</span>
              <span className="font-semibold">£1,000.00</span>
            </div>
            <div className="flex justify-between border-b border-blue-200 pb-2">
              <span>Success Fee (30%):</span>
              <span className="font-semibold">£300.00</span>
            </div>
            <div className="flex justify-between border-b border-blue-200 pb-2">
              <span>VAT (20% on fee):</span>
              <span className="font-semibold">£60.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2">
              <span>You Receive:</span>
              <span className="text-green-600">£640.00</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600">
          The exact percentage will be confirmed in your Client Care Letter and Fee Agreement from your solicitor before you sign. The success fee and VAT are only deducted from compensation you actually receive.
        </p>
        <p className="mt-4 font-semibold">
          <strong>Remember:</strong> This fee is charged by your solicitor, not by My Website Builder. We do not receive any payment from your compensation.
        </p>
      </LegalSection>

      <LegalSection heading="No Upfront Costs">
        <p>
          Neither My Website Builder nor the solicitors we refer you to charge any upfront fees. There are no costs to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Check if you're eligible for a claim with My Website Builder</li>
          <li>Be referred to a solicitor</li>
          <li>Have your solicitor review your case</li>
          <li>Begin the claims process with your solicitor</li>
          <li>Have your solicitor communicate with lenders on your behalf</li>
        </ul>
        <p>
          All solicitor fees are contingent on achieving a successful outcome for you.
        </p>
      </LegalSection>

      <LegalSection heading="Additional Costs">
        <p>
          In most cases, the only fee you'll pay is your solicitor's success fee. However, there may be additional costs in certain circumstances:
        </p>

        <h4 className="font-semibold mt-4 mb-2">After-The-Event (ATE) Insurance</h4>
        <p>
          To protect you from costs if your claim is unsuccessful, your solicitor may arrange After-The-Event insurance. If required, the cost of this insurance will be deducted from your compensation if your claim succeeds. If your claim is unsuccessful, you pay nothing.
        </p>

        <h4 className="font-semibold mt-4 mb-2">Termination Fees</h4>
        <p>
          If you decide to cancel your claim with the solicitor after the initial cooling-off period, termination fees may apply. These will be clearly stated in your solicitor's Client Care Letter. You have a 14-day cooling-off period during which you can cancel without any charges.
        </p>

        <h4 className="font-semibold mt-4 mb-2">Disbursements</h4>
        <p>
          In rare cases, there may be unavoidable third-party costs (such as court fees). If these are necessary, your solicitor will inform you in advance and seek your approval before proceeding.
        </p>
      </LegalSection>

      <LegalSection heading="When Are Fees Paid?">
        <p>
          You don't pay anything until your compensation is received. Once the lender or defendant pays your compensation:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>The full compensation amount is received by your solicitor</li>
          <li>The solicitor deducts their success fee and VAT</li>
          <li>The solicitor deducts any insurance premiums or other agreed costs</li>
          <li>The solicitor transfers the remaining balance to you</li>
        </ol>
        <p>
          Your solicitor will provide you with a clear breakdown of all deductions before transferring your compensation.
        </p>
      </LegalSection>

      <LegalSection heading="No Hidden Charges">
        <p>
          We believe in complete transparency. Our referral service has <strong>no charges to you</strong>. Your solicitor's fees will be clearly explained in their Client Care Letter and Fee Agreement before you sign.
        </p>
        <p>
          If you have any questions about fees at any stage of the process, please don't hesitate to ask us or your solicitor. We're here to make the process as clear and straightforward as possible.
        </p>
      </LegalSection>

      <LegalSection heading="How We Get Paid (Referral Fees)">
        <p>
          My Website Builder receives a referral fee from the solicitor when we successfully introduce a client. This means:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The fee is paid by the solicitor to us (not by you)</li>
          <li>It does not come from your compensation</li>
          <li>It does not increase the solicitor's fees to you</li>
          <li>It is fully disclosed and FCA-compliant</li>
        </ul>
        <p className="mt-4">
          This referral fee arrangement is standard practice and allows us to provide our assessment and matching service to you at no cost.
        </p>
      </LegalSection>

      <LegalSection heading="Regulatory Information">
        <p>
          My Website Builder is a trading style of <strong>SOLVO SOLUTIONS LTD</strong> (Company No. 14760023), authorised and regulated by the Financial Conduct Authority (FCA) for claims management referrals (FRN: 1013195).
        </p>
        <p className="mt-3">
          The solicitors we refer you to are also regulated by the Solicitors Regulation Authority (SRA) and must comply with FCA regulations which cap success fees at 30% plus VAT for financial claims.
        </p>
      </LegalSection>

      {/* Contact Section */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold text-[#2d2d2d] mb-2">
          Questions About Fees?
        </h3>
        <p className="text-gray-700 mb-4">
          If you have any questions about our fee structure, we're happy to explain in detail before you proceed with a claim.
        </p>
        <p className="text-gray-700">
          Email: <a href="mailto:info@myclaimscentre.co.uk" className="text-[#4f46e5] hover:underline">info@myclaimscentre.co.uk</a>
        </p>
      </div>
    </LegalPageLayout>
  )
}


