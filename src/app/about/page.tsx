import { Metadata } from "next"
import { LegalPageLayout, LegalSection } from "@/components/layout/legal-page-layout"

export const metadata: Metadata = {
  title: "About Us | Claims Centre",
  description: "Learn about Claims Centre - your trusted partner for car finance claims. We're a Claims Management Company authorised by the FCA.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <LegalPageLayout
      title="About Claims Centre"
      lastUpdated="December 18, 2024"
    >
      <LegalSection heading="Who We Are">
        <p>
          My Claims Centre is a trading style of <strong>SOLVO SOLUTIONS LTD</strong> (Company No. 14760023). We are dedicated to helping consumers recover compensation they are entitled to by connecting them with expert solicitors who specialize in car finance claims.
        </p>
        <p>
          We are <strong>authorised and regulated by the Financial Conduct Authority (FCA)</strong> for claims management referrals (FRN: 1013195). This means we operate under strict regulatory standards designed to protect consumers and ensure they are referred to qualified legal professionals.
        </p>
        <p>
          Our registered office is located at: Office 116 Regents Pavilion, Moulton Park Industrial Estate, Northampton, England, NN3 6BJ.
        </p>
      </LegalSection>

      <LegalSection heading="What We Do">
        <p>
          We make the claims process simple and stress-free by connecting you with the right legal experts. Our referral services include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Eligibility Checks:</strong> We assess whether you have a valid claim at no cost</li>
          <li><strong>Solicitor Matching:</strong> We refer you to specialist solicitors who are best suited to handle your claim</li>
          <li><strong>Initial Assessment:</strong> We gather basic information to ensure your case is well-presented to our legal partners</li>
          <li><strong>Ongoing Support:</strong> We stay in touch to ensure you're receiving excellent service from your solicitor</li>
          <li><strong>Quality Assurance:</strong> We only work with experienced, FCA-regulated solicitors who specialize in car finance claims</li>
        </ul>
        <p className="mt-4 font-semibold">
          Once referred, your solicitor will handle all aspects of your claim, including communication with lenders, gathering evidence, and pursuing compensation on your behalf.
        </p>
      </LegalSection>

      <LegalSection heading="Why Choose Us?">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">✅ No Win, No Fee</h4>
            <p>You only pay if your claim is successful. There are no upfront costs or hidden charges.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">🛡️ Transparent Service</h4>
            <p>We're clear about what we do and don't do. Our referral service is free - you only pay the solicitor if your claim succeeds.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">👥 Expert Team</h4>
            <p>Our team has extensive experience in claims management and works with specialist solicitors.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">🤝 Transparent Process</h4>
            <p>We keep you informed every step of the way and explain everything in plain English.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">💼 Professional Service</h4>
            <p>We handle your claim with care and professionalism, treating every case individually.</p>
          </div>
        </div>
      </LegalSection>

      <LegalSection heading="We Are NOT a Law Firm">
        <p>
          It's important to understand that My Claims Centre is <strong>not a law firm</strong> and we do not provide legal services or advice. We are a referral service authorised by the FCA to introduce clients to our panel of specialist solicitors.
        </p>
        <p>
          <strong>How it works:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>We assess your eligibility for a car finance claim</li>
          <li>We refer you to one of our carefully selected solicitor partners</li>
          <li>The solicitor provides all legal services and handles your claim</li>
          <li>The solicitor charges their fees (on a no win, no fee basis)</li>
          <li>We receive a referral fee from the solicitor (not from you)</li>
        </ul>
        <p className="mt-4">
          This referral model ensures you get expert legal representation while we handle the initial assessment and matching process.
        </p>
      </LegalSection>

      <LegalSection heading="Our Commitment to You">
        <p>
          We are committed to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Acting in your best interests at all times</li>
          <li>Being clear and transparent about our fees and process</li>
          <li>Keeping you regularly informed about your claim's progress</li>
          <li>Handling your personal information securely and in accordance with data protection laws</li>
          <li>Treating you fairly and with respect</li>
          <li>Resolving any complaints quickly and fairly</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Regulatory Information">
        <div className="bg-gray-50 p-6 rounded-lg space-y-2">
          <p>
            <strong>Trading Name:</strong> My Claims Centre
          </p>
          <p>
            <strong>Legal Entity:</strong> SOLVO SOLUTIONS LTD
          </p>
          <p>
            <strong>Company Number:</strong> 14760023
          </p>
          <p>
            <strong>Registered Address:</strong> Office 116 Regents Pavilion, Moulton Park Industrial Estate, Northampton, England, NN3 6BJ
          </p>
          <p>
            <strong>Regulated By:</strong> Financial Conduct Authority (FCA)
          </p>
          <p>
            <strong>FCA Firm Reference Number:</strong> 1013195
          </p>
          <p>
            <strong>Authorisation:</strong> Claims Management Referrals
          </p>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          You can verify our FCA authorisation on the FCA Register at{" "}
          <a href="https://register.fca.org.uk/s/firm?id=0014G00002gfqUoQAI" target="_blank" rel="noopener noreferrer" className="text-[#4f46e5] hover:underline">
            register.fca.org.uk
          </a>
        </p>
      </LegalSection>

      {/* Contact Section */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold text-[#2d2d2d] mb-2">
          Get in Touch
        </h3>
        <p className="text-gray-700 mb-4">
          Have questions about who we are or what we do? We're here to help.
        </p>
        <p className="text-gray-700">
          Email: <a href="mailto:info@myclaimscentre.co.uk" className="text-[#4f46e5] hover:underline">info@myclaimscentre.co.uk</a>
        </p>
      </div>
    </LegalPageLayout>
  )
}


