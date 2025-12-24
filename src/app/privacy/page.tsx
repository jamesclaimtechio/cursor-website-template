import { Metadata } from "next"
import { LegalPageLayout, LegalSection } from "@/components/layout/legal-page-layout"

export const metadata: Metadata = {
  title: "Privacy Policy | Claims Centre",
  description: "Our privacy policy explains how we collect, use, and protect your personal data in compliance with GDPR and UK data protection laws.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="December 18, 2024"
    >
      <LegalSection heading="Introduction">
        <p>
          At My Claims Centre, a trading style of <strong>SOLVO SOLUTIONS LTD</strong> (Company No. 14760023) ("we", "us", or "our"), we are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our referral services or visit our website.
        </p>
        <p>
          We are authorised and regulated by the Financial Conduct Authority (FCA) for claims management referrals (FRN: 1013195). As the data controller, we are responsible for ensuring your personal data is processed in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
        <p className="mt-3">
          Our registered office is: Office 116 Regents Pavilion, Moulton Park Industrial Estate, Northampton, England, NN3 6BJ.
        </p>
      </LegalSection>

      <LegalSection heading="Information We Collect">
        <h3 className="font-semibold mt-4 mb-2">Personal Information</h3>
        <p>We may collect and process the following personal data:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Identity Information:</strong> Name, date of birth, title</li>
          <li><strong>Contact Information:</strong> Email address, telephone number, postal address</li>
          <li><strong>Financial Information:</strong> Details of your car finance agreement, loan numbers, payment history, compensation received</li>
          <li><strong>Technical Information:</strong> IP address, browser type, device information, cookies</li>
          <li><strong>Usage Information:</strong> How you use our website and services</li>
          <li><strong>Marketing Preferences:</strong> Your preferences for receiving marketing communications</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Sensitive Information</h3>
        <p>
          In some cases, we may need to process special categories of personal data, such as information about your health if it's relevant to your claim. We will only process such data with your explicit consent or where necessary for legal claims.
        </p>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <p>We use your personal data for the following purposes:</p>
        
        <h3 className="font-semibold mt-4 mb-2">1. Providing Referral Services</h3>
        <p><strong>Legal Basis:</strong> Performance of a contract / Legitimate interests</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Assessing your eligibility for a car finance claim</li>
          <li>Matching you with appropriate solicitors from our panel</li>
          <li>Referring you to selected solicitors</li>
          <li>Following up to ensure quality service</li>
          <li>Sharing your information with the referred solicitor</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">2. Legal Obligations</h3>
        <p><strong>Legal Basis:</strong> Compliance with legal obligations</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Complying with FCA regulations</li>
          <li>Meeting anti-money laundering requirements</li>
          <li>Responding to court orders or regulatory requests</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">3. Service Improvement</h3>
        <p><strong>Legal Basis:</strong> Legitimate interests</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Improving our website and services</li>
          <li>Analyzing usage patterns</li>
          <li>Training our staff</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">4. Marketing</h3>
        <p><strong>Legal Basis:</strong> Consent or legitimate interests</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sending you information about our services</li>
          <li>Informing you about related claims you may be eligible for</li>
        </ul>
        <p className="text-sm italic">
          You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.
        </p>
      </LegalSection>

      <LegalSection heading="Who We Share Your Information With">
        <p>We may share your personal data with the following parties:</p>

        <h3 className="font-semibold mt-4 mb-2">Essential Service Providers</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Solicitors and Legal Representatives:</strong> We share your information with the solicitor we refer you to, who will then handle your claim, provide legal advice, and communicate with lenders</li>
          <li><strong>Other Professional Advisers:</strong> If necessary for assessing your eligibility</li>
        </ul>
        <div className="mt-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm">
            <strong>Important:</strong> Once we refer you to a solicitor, they become the data controller for the processing of your personal data in relation to your claim. They will provide you with their own privacy notice explaining how they process your data.
          </p>
        </div>

        <h3 className="font-semibold mt-4 mb-2">Support Service Providers</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>IT Service Providers:</strong> For secure data storage and processing</li>
          <li><strong>Payment Processors:</strong> To transfer compensation to you</li>
          <li><strong>Insurance Providers:</strong> For After-The-Event insurance where applicable</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Regulatory Bodies</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Financial Conduct Authority:</strong> For regulatory compliance and reporting</li>
          <li><strong>Information Commissioner's Office:</strong> If required by data protection law</li>
        </ul>

        <p className="mt-4">
          We ensure all third parties respect the security of your data and treat it in accordance with the law. We only allow them to process your data for specified purposes and in accordance with our instructions.
        </p>
      </LegalSection>

      <LegalSection heading="Data Security">
        <p>
          We have implemented appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Encrypted data transmission (SSL/TLS)</li>
          <li>Secure servers with restricted access</li>
          <li>Regular security audits and updates</li>
          <li>Staff training on data protection</li>
          <li>Access controls and authentication procedures</li>
        </ul>
      </LegalSection>

      <LegalSection heading="How Long We Keep Your Data">
        <p>
          We will retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
        </p>
        <p>Typical retention periods:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Successful Referrals:</strong> 6 years after referral (FCA requirement)</li>
          <li><strong>Unsuccessful Applications:</strong> 2 years</li>
          <li><strong>Marketing Data:</strong> Until you withdraw consent or 3 years of inactivity</li>
        </ul>
        <p className="mt-3 text-sm">
          <strong>Note:</strong> Once referred, your solicitor will retain your data in accordance with their own retention policies and legal obligations.
        </p>
      </LegalSection>

      <LegalSection heading="Your Rights">
        <p>Under UK data protection law, you have the following rights:</p>

        <div className="space-y-3">
          <div>
            <h4 className="font-semibold">1. Right to Access</h4>
            <p>Request a copy of the personal data we hold about you.</p>
          </div>

          <div>
            <h4 className="font-semibold">2. Right to Rectification</h4>
            <p>Request correction of inaccurate or incomplete data.</p>
          </div>

          <div>
            <h4 className="font-semibold">3. Right to Erasure</h4>
            <p>Request deletion of your data in certain circumstances.</p>
          </div>

          <div>
            <h4 className="font-semibold">4. Right to Restrict Processing</h4>
            <p>Request that we limit how we use your data.</p>
          </div>

          <div>
            <h4 className="font-semibold">5. Right to Data Portability</h4>
            <p>Receive your data in a structured, machine-readable format.</p>
          </div>

          <div>
            <h4 className="font-semibold">6. Right to Object</h4>
            <p>Object to processing based on legitimate interests or for marketing purposes.</p>
          </div>

          <div>
            <h4 className="font-semibold">7. Right to Withdraw Consent</h4>
            <p>Withdraw consent where we rely on it, without affecting lawful processing beforehand.</p>
          </div>
        </div>

        <p className="mt-4">
          To exercise any of these rights, please contact us using the details below. We will respond within one month of your request.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          Our website uses cookies to distinguish you from other users and improve your experience. Cookies are small text files stored on your device that help us:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Remember your preferences</li>
          <li>Understand how you use our website</li>
          <li>Improve website performance</li>
          <li>Provide relevant content</li>
        </ul>
        <p>
          You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We recommend reviewing their privacy policies before providing any personal information.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website with a new "Last Updated" date.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>
          If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mt-4">
          <p className="mb-2"><strong>My Claims Centre</strong></p>
          <p className="mb-1"><strong>Data Controller:</strong> SOLVO SOLUTIONS LTD (Company No. 14760023)</p>
          <p className="mb-1"><strong>Address:</strong> Office 116 Regents Pavilion, Moulton Park Industrial Estate, Northampton, England, NN3 6BJ</p>
          <p>Email: <a href="mailto:info@myclaimscentre.co.uk" className="text-[#4f46e5] hover:underline">info@myclaimscentre.co.uk</a></p>
        </div>
      </LegalSection>

      <LegalSection heading="Complaints">
        <p>
          If you believe we have not handled your personal data properly, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mt-4">
          <p className="mb-2"><strong>Information Commissioner's Office</strong></p>
          <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#4f46e5] hover:underline">www.ico.org.uk</a></p>
          <p>Telephone: 0303 123 1113</p>
        </div>
      </LegalSection>
    </LegalPageLayout>
  )
}


