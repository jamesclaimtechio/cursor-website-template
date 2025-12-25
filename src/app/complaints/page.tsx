import { Metadata } from "next"
import { LegalPageLayout, LegalSection } from "@/components/layout/legal-page-layout"

export const metadata: Metadata = {
  title: "Complaints Procedure | Website Builder",
  description: "How to make a complaint about our services. We are committed to resolving issues quickly and fairly in accordance with FCA requirements.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function ComplaintsPage() {
  return (
    <LegalPageLayout
      title="Complaints Procedure"
      lastUpdated="December 18, 2024"
    >
      <LegalSection heading="Our Commitment">
        <p>
          At My Website Builder, we are committed to providing high-quality referral services to all our clients. However, we recognize that there may be occasions when you feel our service has not met your expectations.
        </p>
        <p>
          We take all complaints seriously and will investigate them thoroughly and fairly. This page explains how to make a complaint about our referral service and what you can expect from our complaints process.
        </p>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="font-semibold mb-2">Complaints About Your Solicitor</p>
          <p className="text-sm">
            If your complaint is about the legal services provided by your solicitor (rather than our referral service), you should direct your complaint to them in the first instance. Solicitors have their own complaints procedures and are regulated by the Solicitors Regulation Authority (SRA).
          </p>
        </div>
      </LegalSection>

      <LegalSection heading="How to Make a Complaint">
        <p>
          If you are unhappy with any aspect of our service, please let us know as soon as possible. You can make a complaint by:
        </p>

        <div className="space-y-4 mt-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">📧 Email</h4>
            <p>Send your complaint to: <a href="mailto:info@myclaimscentre.co.uk" className="text-[#4f46e5] hover:underline font-semibold">info@myclaimscentre.co.uk</a></p>
            <p className="text-sm text-gray-600 mt-1">Please include "COMPLAINT" in the subject line</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">📞 Telephone</h4>
            <p>Call us during business hours (Monday-Friday, 9am-5pm)</p>
            <p className="text-sm text-gray-600 mt-1">Ask to speak to a complaints handler</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">✉️ Post</h4>
            <p>Write to us at our registered office address</p>
            <p className="text-sm text-gray-600 mt-1">Mark your envelope "COMPLAINT - CONFIDENTIAL"</p>
          </div>
        </div>

        <h3 className="font-semibold mt-6 mb-2">What to Include</h3>
        <p>To help us investigate your complaint quickly and effectively, please provide:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your full name and contact details</li>
          <li>Your claim reference number (if applicable)</li>
          <li>A clear description of your complaint</li>
          <li>Details of what happened and when</li>
          <li>Copies of any relevant documents or correspondence</li>
          <li>What you would like us to do to resolve the matter</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Our Complaints Process">
        <h3 className="font-semibold mb-4">Step-by-Step Timeline</h3>

        <div className="space-y-6">
          <div className="border-l-4 border-[#4f46e5] pl-6">
            <h4 className="font-bold text-lg mb-2">Step 1: Acknowledgement</h4>
            <p className="text-sm text-gray-600 mb-2">Within 5 business days</p>
            <p>
              We will acknowledge receipt of your complaint in writing. We will provide you with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>A unique complaint reference number</li>
              <li>The name of the person handling your complaint</li>
              <li>Information about our complaints procedure</li>
              <li>Details of the Financial Ombudsman Service</li>
            </ul>
          </div>

          <div className="border-l-4 border-[#4f46e5] pl-6">
            <h4 className="font-bold text-lg mb-2">Step 2: Investigation</h4>
            <p className="text-sm text-gray-600 mb-2">As soon as possible</p>
            <p>
              We will investigate your complaint thoroughly by:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Reviewing all relevant information and documentation</li>
              <li>Speaking to staff members involved</li>
              <li>Considering your perspective and desired outcome</li>
              <li>Assessing whether our service met required standards</li>
            </ul>
            <p className="mt-2">
              If we need additional information from you, we will contact you promptly.
            </p>
          </div>

          <div className="border-l-4 border-[#4f46e5] pl-6">
            <h4 className="font-bold text-lg mb-2">Step 3: Resolution</h4>
            <p className="text-sm text-gray-600 mb-2">Within 8 weeks (target: much sooner)</p>
            <p>
              We aim to resolve complaints as quickly as possible, ideally within a few days. However, complex complaints may take longer.
            </p>
            <p className="mt-2">
              <strong>Our Final Response will include:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>A summary of the complaint</li>
              <li>Our findings from the investigation</li>
              <li>Our decision and reasons</li>
              <li>Details of any remedial action or compensation offered</li>
              <li>Your right to refer to the Financial Ombudsman Service</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <h4 className="font-semibold mb-2">⏱️ 8-Week Deadline</h4>
          <p>
            We are required by the Financial Conduct Authority (FCA) to issue a Final Response within 8 weeks of receiving your complaint. If we cannot resolve your complaint within this timeframe, we will write to explain the reasons for the delay and provide you with information about referring your complaint to the Financial Ombudsman Service.
          </p>
        </div>
      </LegalSection>

      <LegalSection heading="If You're Not Satisfied">
        <p>
          If you are not satisfied with our Final Response, or if we have not resolved your complaint within 8 weeks, you have the right to refer your complaint to the Financial Ombudsman Service (FOS).
        </p>

        <h3 className="font-semibold mt-4 mb-2">Financial Ombudsman Service (FOS)</h3>
        <p>
          The FOS is an independent body that resolves disputes between consumers and financial services providers. Their service is free to consumers.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-4">
          <h4 className="font-bold text-lg mb-4">FOS Contact Details</h4>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold">Online:</p>
              <p><a href="https://www.financial-ombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#4f46e5] hover:underline">www.financial-ombudsman.org.uk</a></p>
            </div>

            <div>
              <p className="font-semibold">Telephone:</p>
              <p>0800 023 4567 (free for most callers)</p>
              <p>0300 123 9123 (from mobile)</p>
            </div>

            <div>
              <p className="font-semibold">Email:</p>
              <p><a href="mailto:complaint.info@financial-ombudsman.org.uk" className="text-[#4f46e5] hover:underline">complaint.info@financial-ombudsman.org.uk</a></p>
            </div>

            <div>
              <p className="font-semibold">Post:</p>
              <p>Financial Ombudsman Service</p>
              <p>Exchange Tower</p>
              <p>London</p>
              <p>E14 9SR</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
          <h4 className="font-semibold mb-2">⏰ Time Limits</h4>
          <p>
            You must refer your complaint to the FOS within <strong>6 months of the date of our Final Response letter</strong>. If you do not refer your complaint within this timeframe, the FOS may not be able to consider it.
          </p>
        </div>
      </LegalSection>

      <LegalSection heading="Alternative Dispute Resolution">
        <p>
          In addition to the Financial Ombudsman Service, you may also be able to use other alternative dispute resolution (ADR) services. However, the FOS is the designated ADR entity for claims management companies regulated by the FCA.
        </p>
      </LegalSection>

      <LegalSection heading="Regulatory Information">
        <p>
          My Website Builder is a trading style of <strong>SOLVO SOLUTIONS LTD</strong> (Company No. 14760023), authorised and regulated by the Financial Conduct Authority (FCA) for claims management referrals (FRN: 1013195). Our complaints procedure complies with FCA requirements set out in the Dispute Resolution: Complaints (DISP) sourcebook.
        </p>
        <p className="mt-3">
          Our registered office is: Office 116 Regents Pavilion, Moulton Park Industrial Estate, Northampton, England, NN3 6BJ.
        </p>
        <p className="mt-3">
          If you have concerns about how we have handled your complaint, you can contact the FCA:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2">Financial Conduct Authority</p>
          <p>12 Endeavour Square</p>
          <p>London</p>
          <p>E20 1JN</p>
          <p className="mt-2">Telephone: 0800 111 6768</p>
          <p>Website: <a href="https://www.fca.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#4f46e5] hover:underline">www.fca.org.uk</a></p>
        </div>
      </LegalSection>

      <LegalSection heading="Learning from Complaints">
        <p>
          We view complaints as an opportunity to improve our services. We maintain records of all complaints and regularly review them to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Identify patterns or recurring issues</li>
          <li>Improve our processes and procedures</li>
          <li>Provide additional staff training where needed</li>
          <li>Enhance the overall client experience</li>
        </ul>
        <p className="mt-4">
          Your feedback is valuable in helping us deliver better service to all our clients.
        </p>
      </LegalSection>

      <LegalSection heading="Compliments and Feedback">
        <p>
          While this page focuses on complaints, we also welcome positive feedback and compliments. If we've provided excellent service, we'd love to hear about it!
        </p>
        <p>
          You can share your positive experiences by emailing us at{" "}
          <a href="mailto:info@myclaimscentre.co.uk" className="text-[#4f46e5] hover:underline">info@myclaimscentre.co.uk</a>
        </p>
      </LegalSection>

      {/* Quick Reference */}
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h3 className="text-xl font-bold text-[#2d2d2d] mb-4">
          📋 Quick Reference
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-1">Acknowledgement:</p>
            <p className="text-gray-700">Within 5 business days</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Resolution Target:</p>
            <p className="text-gray-700">As soon as possible</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Maximum Time:</p>
            <p className="text-gray-700">8 weeks</p>
          </div>
          <div>
            <p className="font-semibold mb-1">FOS Referral Window:</p>
            <p className="text-gray-700">Within 6 months of Final Response</p>
          </div>
        </div>
      </div>
    </LegalPageLayout>
  )
}


