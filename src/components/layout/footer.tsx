import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { siteConfig } from "@/config/site.config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2d2d2d] text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            {siteConfig.logoLight.src.startsWith('{{') ? (
              <div className="h-12 mb-4 flex items-center text-white font-bold text-xl">
                {siteConfig.name}
              </div>
            ) : (
              <Image
                src={siteConfig.logoLight.src}
                alt={siteConfig.logoLight.alt}
                width={160}
                height={60}
                className="h-12 w-auto mb-4"
              />
            )}
            <p className="text-gray-300 text-sm">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/car-finance-claims/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{siteConfig.email}</li>
              {siteConfig.phone && <li>{siteConfig.phone}</li>}
              <li>Mon-Fri 9am-5pm</li>
            </ul>
          </div>
        </div>

        {/* Important Disclosures */}
        <div className="border-t border-gray-700 py-6">
          <div className="text-xs text-gray-400 leading-relaxed max-w-5xl mx-auto space-y-4">
            <p>
              *If your claim is successful, you will be required to pay our solicitors fees. Our solicitors typically charge around 30%+VAT of any compensation awarded to you. If you cancel your claim before an outcome, you may be required to pay a termination fee for work carried out on your claim. Please see your Solicitors No Win No Fee agreement for more details.
            </p>
            <p>
              You don&apos;t need a claims management company to make a claim. You can contact the organisation directly for free and make use of the Financial Ombudsman Service if dissatisfied with the outcome. If we identify a potential claim, we will refer you to one of our panel Solicitors who will pay us a fee for the referral. This fee is not passed to you. If you decide to use our panel firm they will charge you a success fee agreed with you before you decide whether to go ahead. A customer&apos;s claim may not necessarily be resolved more quickly, or with a better prospect of success if the customer uses the services of a Claims Management Company than if the customer were to make the claim themselves for free.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 space-y-3 text-center text-sm text-gray-400">
          <p className="text-xs leading-relaxed max-w-4xl mx-auto">
            {siteConfig.name} - A production-ready website template for professional businesses. 
            Customize this footer text in src/components/layout/footer.tsx to match your business type and regulatory requirements.
          </p>
          <p className="text-xs text-gray-500">
            Registered office: {siteConfig.address}
          </p>
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}


