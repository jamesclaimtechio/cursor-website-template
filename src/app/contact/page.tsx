import { Metadata } from "next"
import { LegalPageLayout, LegalSection } from "@/components/layout/legal-page-layout"
import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us | Website Builder",
  description: "Get in touch with Website Builder. Questions about the template? We're here to help. Contact our support team.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <LegalPageLayout
      title="Contact Us"
      lastUpdated="December 18, 2024"
    >
      <div className="mb-8">
        <p className="text-lg text-gray-700">
          Have questions about the template or need help getting started? We're here to help. Get in touch with our support team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Email */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#4f46e5] text-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-700 mb-3">
                Send us an email and we'll get back to you within 24 hours during business days.
              </p>
              <a 
                href={`mailto:${siteConfig.email}`}
                className="text-[#4f46e5] hover:underline font-semibold"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#4f46e5] text-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-gray-700 mb-3">
                Speak to our team directly during business hours.
              </p>
              {siteConfig.phone ? (
                <a 
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="text-[#4f46e5] hover:underline font-semibold text-lg"
                >
                  {siteConfig.phone}
                </a>
              ) : (
                <p className="text-gray-600 italic">Phone number coming soon</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <LegalSection heading="Opening Hours">
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Office Hours</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00am - 5:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Bank Holidays:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Response Times</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="font-semibold">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span className="font-semibold">Immediate</span>
                </div>
                <div className="flex justify-between">
                  <span>Complaints:</span>
                  <span className="font-semibold">Within 5 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection heading="What Can We Help With?">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">General Enquiries</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Questions about eligibility</li>
              <li>Information about our services</li>
              <li>Understanding the claims process</li>
              <li>Fee structure queries</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Existing Clients</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Updates on your claim</li>
              <li>Document submissions</li>
              <li>Changes to your details</li>
              <li>General case queries</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Complaints</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Service concerns</li>
              <li>Formal complaints</li>
              <li>Escalation requests</li>
            </ul>
            <p className="text-sm mt-2">
              Please see our <Link href="/complaints" className="text-[#4f46e5] hover:underline">Complaints Procedure</Link> for full details.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Media & Press</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Press enquiries</li>
              <li>Interview requests</li>
              <li>Partnership opportunities</li>
            </ul>
            <p className="text-sm mt-2">
              Please email with "PRESS" in the subject line.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection heading="Before You Contact Us">
        <p className="mb-4">
          You might find the answer to your question in our resources:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            href="/how-it-works"
            className="p-4 border border-gray-200 rounded-lg hover:border-[#4f46e5] hover:bg-blue-50 transition-colors"
          >
            <h4 className="font-semibold mb-2">📋 How It Works</h4>
            <p className="text-sm text-gray-700">Learn about our 5-step claims process</p>
          </Link>

          <Link 
            href="/fees"
            className="p-4 border border-gray-200 rounded-lg hover:border-[#4f46e5] hover:bg-blue-50 transition-colors"
          >
            <h4 className="font-semibold mb-2">💰 Fee Structure</h4>
            <p className="text-sm text-gray-700">Understand our transparent pricing</p>
          </Link>

          <Link 
            href="/no-win-no-fee"
            className="p-4 border border-gray-200 rounded-lg hover:border-[#4f46e5] hover:bg-blue-50 transition-colors"
          >
            <h4 className="font-semibold mb-2">✅ No Win No Fee</h4>
            <p className="text-sm text-gray-700">How our no win no fee policy works</p>
          </Link>

          <Link 
            href="/car-finance-claims/blog"
            className="p-4 border border-gray-200 rounded-lg hover:border-[#4f46e5] hover:bg-blue-50 transition-colors"
          >
            <h4 className="font-semibold mb-2">📰 Blog & Resources</h4>
            <p className="text-sm text-gray-700">Articles about car finance claims</p>
          </Link>
        </div>
      </LegalSection>

      <LegalSection heading="Data Protection">
        <p>
          When you contact us, we will process your personal information in accordance with UK data protection laws. 
          For full details, please see our <Link href="/privacy" className="text-[#4f46e5] hover:underline">Privacy Policy</Link>.
        </p>
        <p className="mt-3">
          We will only use your information to:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
          <li>Respond to your enquiry</li>
          <li>Assess your eligibility for a claim (if applicable)</li>
          <li>Provide you with information about our services</li>
        </ul>
      </LegalSection>

      {/* CTA Section */}
      <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
        <h3 className="text-2xl font-bold mb-3">
          Ready to Start Your Claim?
        </h3>
        <p className="mb-6 text-blue-100">
          Check if you're eligible for car finance compensation. It's quick, free, and there's no obligation.
        </p>
        <Link 
          href="/car-finance-claims"
          className="inline-block bg-white text-[#4f46e5] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Check Eligibility
        </Link>
      </div>

      {/* Alternative Contact Methods */}
      <LegalSection heading="Company Information">
        <div className="bg-gray-50 rounded-lg p-6 space-y-2">
          <p><strong>Trading Name:</strong> My Claims Centre</p>
          <p><strong>Legal Entity:</strong> SOLVO SOLUTIONS LTD</p>
          <p><strong>Company Number:</strong> 14760023</p>
          <p><strong>Registered Address:</strong> Office 116 Regents Pavilion, Moulton Park Industrial Estate, Northampton, England, NN3 6BJ</p>
          <p><strong>FCA Authorization:</strong> Claims Management Referrals (FRN: 1013195)</p>
        </div>
      </LegalSection>

      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold mb-2">ℹ️ About Our Service</h4>
        <p className="text-gray-700 text-sm">
          We are a referral service authorised by the FCA to connect clients with specialist solicitors. We are not a law firm and do not provide legal services or advice. 
          If you need legal advice, we can refer you to one of our panel solicitors who will be happy to assist.
        </p>
      </div>
    </LegalPageLayout>
  )
}


