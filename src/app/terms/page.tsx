import { Metadata } from "next"
import { LegalPageLayout, LegalSection } from "@/components/layout/legal-page-layout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions | Website Builder",
  description: "Terms and conditions for using Website Builder template. Read about usage rights, obligations, and license agreement.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      lastUpdated="December 18, 2024"
    >
      <LegalSection heading="1. Introduction">
        <p>
          These Terms and Conditions ("Terms") govern the relationship between you ("Client", "you", or "your") and My Claims Centre, a trading style of <strong>SOLVO SOLUTIONS LTD</strong> (Company No. 14760023) ("we", "us", or "our") regarding the provision of referral services to connect you with specialist solicitors.
        </p>
        <p>
          By engaging our services, you agree to be bound by these Terms. Please read them carefully before proceeding.
        </p>
        <p>
          <strong>Important:</strong> We are <strong>not a law firm</strong> and do not provide legal services or advice. We are authorised and regulated by the Financial Conduct Authority (FCA) for claims management referrals (FRN: 1013195). Our role is to assess your eligibility and refer you to qualified solicitors who will handle your claim.
        </p>
      </LegalSection>

      <LegalSection heading="2. Our Services">
        <h3 className="font-semibold mt-4 mb-2">What We Do</h3>
        <p>We provide referral services to connect you with specialist solicitors. Our services include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Assessing your eligibility for car finance claims</li>
          <li>Gathering initial information about your case</li>
          <li>Matching you with an appropriate solicitor from our panel</li>
          <li>Referring you to the selected solicitor</li>
          <li>Following up to ensure you receive quality service</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">What We Don't Do</h3>
        <p>We are <strong>not a law firm</strong> and do not provide:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Legal advice or services</li>
          <li>Claims management or handling</li>
          <li>Direct communication with lenders on your behalf</li>
          <li>Court representation</li>
          <li>Financial advice or recommendations</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">What Your Solicitor Does</h3>
        <p>Once referred, your solicitor will:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide all legal advice and services</li>
          <li>Handle all communication with lenders</li>
          <li>Gather and review all necessary documentation</li>
          <li>Pursue your compensation claim</li>
          <li>Represent you in court if necessary</li>
          <li>Manage your claim through to conclusion</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. Your Agreement with Us">
        <h3 className="font-semibold mt-4 mb-2">Formation of Contract</h3>
        <p>
          A contract between you and Claims Centre is formed when:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>You complete and submit our claim eligibility form</li>
          <li>We assess your eligibility and accept your case</li>
          <li>You sign and return our Client Agreement</li>
        </ol>

        <h3 className="font-semibold mt-4 mb-2">Cooling-Off Period</h3>
        <p>
          You have a <strong>14-day cooling-off period</strong> from the date you sign the Client Agreement. During this time, you can cancel without giving any reason and without incurring any charges.
        </p>
        <p>
          To exercise your right to cancel, contact us in writing at: info@myclaimscentre.co.uk
        </p>
      </LegalSection>

      <LegalSection heading="4. Your Obligations">
        <p>As our client, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Provide Accurate Information:</strong> Supply truthful, complete, and accurate information about your claim</li>
          <li><strong>Timely Responses:</strong> Respond promptly to our requests for information or documentation</li>
          <li><strong>Document Provision:</strong> Provide all relevant documents relating to your claim</li>
          <li><strong>Keep Us Informed:</strong> Notify us immediately of any changes to your contact details or circumstances</li>
          <li><strong>Cooperation:</strong> Cooperate with us, instructed solicitors, and any experts we engage</li>
          <li><strong>Exclusive Instruction:</strong> Not instruct any other claims management company or pursue the same claim independently while we are acting for you</li>
          <li><strong>Follow Advice:</strong> Follow reasonable advice and instructions we or our instructed solicitors provide</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Consequences of Non-Compliance</h3>
        <p>
          If you fail to meet these obligations, we may be unable to continue with your claim. We reserve the right to terminate our services if you:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide false or misleading information</li>
          <li>Fail to respond to communications for an unreasonable period</li>
          <li>Act in a way that makes it impossible to continue the claim</li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Our Obligations">
        <p>We will:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Act in Your Best Interests:</strong> Assess your eligibility fairly and refer you to appropriate solicitors</li>
          <li><strong>Quality Panel:</strong> Only refer you to qualified, experienced solicitors who specialize in car finance claims</li>
          <li><strong>Maintain Confidentiality:</strong> Keep your information confidential in accordance with our <Link href="/privacy" className="text-[#4f46e5] hover:underline">Privacy Policy</Link></li>
          <li><strong>Be Transparent:</strong> Clearly explain our referral process and the solicitor's role</li>
          <li><strong>Comply with Regulations:</strong> Adhere to FCA rules and regulations for referral activities</li>
          <li><strong>Provide Quality Service:</strong> Deliver our referral services with reasonable care and skill</li>
          <li><strong>Follow Up:</strong> Check that you are satisfied with the service provided by the referred solicitor</li>
        </ul>
        <p className="mt-4">
          <strong>Please note:</strong> Once referred, your solicitor becomes responsible for handling your claim. We do not control how solicitors conduct cases, but we monitor service quality and can address concerns if they arise.
        </p>
      </LegalSection>

      <LegalSection heading="6. Fees and Payment">
        <h3 className="font-semibold mb-2">No Fees to My Claims Centre</h3>
        <p>
          <strong>You do not pay any fees to My Claims Centre.</strong> Our referral service is completely free to you. We receive a referral fee from the solicitor we introduce you to - this does not come from your compensation.
        </p>

        <h3 className="font-semibold mt-4 mb-2">Solicitor Fees</h3>
        <p>
          Your solicitor will charge fees for their legal services. Typically, solicitors work on a <strong>No Win, No Fee</strong> basis:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You pay <strong>nothing upfront</strong> to the solicitor</li>
          <li>You only pay the solicitor if your claim is <strong>successful</strong></li>
          <li>The success fee is typically <strong>up to 30% of compensation awarded plus VAT</strong></li>
        </ul>
        <p className="mt-4">
          <strong>Important:</strong> The solicitor's fee agreement is between you and the solicitor. Your solicitor will provide you with a detailed Client Care Letter and Fee Agreement explaining their charges before you proceed.
        </p>
        <p>
          For more information about how No Win No Fee works with solicitors, please see our{" "}
          <Link href="/no-win-no-fee" className="text-[#4f46e5] hover:underline font-semibold">No Win No Fee Policy</Link> and{" "}
          <Link href="/fees" className="text-[#4f46e5] hover:underline font-semibold">Fee Information</Link>.
        </p>

        <h3 className="font-semibold mt-4 mb-2">How Referral Fees Work</h3>
        <p>
          When we refer you to a solicitor, we receive a referral fee from that solicitor if you proceed with them. This fee:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Is paid by the solicitor to us (not by you)</li>
          <li>Does not increase your solicitor's fees</li>
          <li>Does not reduce your compensation</li>
          <li>Is fully disclosed and FCA-compliant</li>
        </ul>
      </LegalSection>

      <LegalSection heading="7. The Claims Process">
        <h3 className="font-semibold mt-4 mb-2">Typical Timeline</h3>
        <p>
          Claims timelines vary depending on complexity and the defendant's response. Typical claims may take:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Simple claims:</strong> 3-6 months</li>
          <li><strong>Complex claims:</strong> 6-18 months</li>
          <li><strong>Litigated claims:</strong> 18 months or longer</li>
        </ul>
        <p className="text-sm italic mt-2">
          These are estimates only. We will keep you informed of progress throughout.
        </p>

        <h3 className="font-semibold mt-4 mb-2">Settlement</h3>
        <p>
          We will advise you on any settlement offers received. The decision to accept or reject an offer is ultimately yours. However, we recommend following our professional advice based on our experience.
        </p>
      </LegalSection>

      <LegalSection heading="8. No Guarantee of Success">
        <p>
          <strong>Important:</strong> We cannot guarantee that your claim will be successful or predict the amount of compensation you may receive.
        </p>
        <p>
          While we will pursue your claim diligently, outcomes depend on various factors including:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>The strength of evidence available</li>
          <li>The defendant's response and defense</li>
          <li>Legal and regulatory developments</li>
          <li>Court decisions (if litigation is required)</li>
        </ul>
        <p>
          We will only take on claims we believe have reasonable prospects of success, but we cannot provide guarantees.
        </p>
      </LegalSection>

      <LegalSection heading="9. Cancellation and Termination">
        <h3 className="font-semibold mt-4 mb-2">Your Right to Cancel</h3>
        <p>You may terminate this agreement at any time by giving us written notice. However:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>During the 14-day cooling-off period: No charges apply</li>
          <li>After the cooling-off period: Termination fees may apply as set out in your Client Agreement</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Our Right to Terminate</h3>
        <p>We may terminate this agreement if:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You breach these Terms</li>
          <li>You fail to cooperate or provide necessary information</li>
          <li>We determine your claim no longer has reasonable prospects of success</li>
          <li>You act in a manner that makes it impossible to continue</li>
          <li>Continuing would breach our regulatory obligations</li>
        </ul>
        <p>
          We will provide written notice of termination and, where possible, give you an opportunity to remedy any breach before terminating.
        </p>
      </LegalSection>

      <LegalSection heading="10. Limitation of Liability">
        <p>
          To the extent permitted by law:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>We are not liable for any delays or failures caused by circumstances beyond our reasonable control</li>
          <li>We are not liable for decisions made by courts, tribunals, or the Financial Ombudsman Service</li>
          <li>We are not liable for the actions or omissions of third parties (including instructed solicitors), except where we have been negligent in their selection</li>
          <li>Our liability for any claim arising from our services is limited to the amount of fees you have paid to us in relation to that claim</li>
        </ul>

        <p className="mt-4">
          <strong>Nothing in these Terms excludes or limits our liability for:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Death or personal injury caused by our negligence</li>
          <li>Fraud or fraudulent misrepresentation</li>
          <li>Any other liability that cannot be excluded by law</li>
        </ul>
      </LegalSection>

      <LegalSection heading="11. Complaints">
        <p>
          We are committed to providing excellent service. If you are unhappy with any aspect of our service, please let us know.
        </p>
        <p>
          Our full complaints procedure is available on our{" "}
          <Link href="/complaints" className="text-[#4f46e5] hover:underline font-semibold">Complaints page</Link>.
        </p>
        <p>
          If we cannot resolve your complaint, you may refer it to the Financial Ombudsman Service.
        </p>
      </LegalSection>

      <LegalSection heading="12. Data Protection">
        <p>
          We will process your personal data in accordance with UK data protection laws. For full details, please see our{" "}
          <Link href="/privacy" className="text-[#4f46e5] hover:underline font-semibold">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection heading="13. Third-Party Rights">
        <p>
          These Terms are between you and Claims Centre. No third party has any right to enforce any provision of these Terms.
        </p>
      </LegalSection>

      <LegalSection heading="14. Changes to Terms">
        <p>
          We may update these Terms from time to time to reflect changes in our practices, services, or legal requirements. We will notify you of any significant changes.
        </p>
        <p>
          Changes will not affect claims already in progress unless required by law or regulation.
        </p>
      </LegalSection>

      <LegalSection heading="15. Governing Law">
        <p>
          These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </LegalSection>

      <LegalSection heading="16. Severability">
        <p>
          If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
        </p>
      </LegalSection>

      {/* Contact Section */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold text-[#2d2d2d] mb-2">
          Questions About These Terms?
        </h3>
        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms and Conditions, please contact us:
        </p>
        <p className="text-gray-700">
          Email: <a href="mailto:info@myclaimscentre.co.uk" className="text-[#4f46e5] hover:underline">info@myclaimscentre.co.uk</a>
        </p>
      </div>
    </LegalPageLayout>
  )
}


