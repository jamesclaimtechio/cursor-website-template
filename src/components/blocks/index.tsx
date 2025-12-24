/**
 * Shared Content Block Components
 * ================================
 * Reusable design blocks for legal pages, blog posts, and other content
 * Used by the unified content parser to render custom :::block syntax
 * 
 * Available blocks:
 * - InfoBox: Colored information boxes (blue, green, amber, gray, purple)
 * - WarningBox: Amber warning/alert boxes
 * - IndentSection: Blue left-border indented sections
 * - ContactCard: Contact information display
 * - HighlightBox: Gradient highlight callouts
 * - ExampleBox: Example/calculation boxes
 * - StepsList: Numbered step-by-step processes
 * - CTABox: Call-to-action sections
 * - CompanyInfoBox: Regulatory/company details
 * - Timeline: Process timeline with dates
 * - KeyTakeaway: Summary box for key points (NEW - blog)
 * - Quote: Styled quotations (NEW - blog)
 * - StatCard: Big number statistics (NEW - blog)
 * - Definition: Term definitions (NEW - blog)
 * - Checklist: Checkmark lists (NEW - blog)
 * - ProsCons: Comparison boxes (NEW - blog)
 */

import { ReactNode } from "react"
import { CheckCircle2, XCircle, Quote as QuoteIcon, Lightbulb, AlertTriangle } from "lucide-react"

// ============================================
// TYPES
// ============================================

export type BlockVariant = "blue" | "green" | "amber" | "gray" | "purple"

// ============================================
// INFOBOX - Colored information box
// ============================================
// Usage: :::infobox[blue] Title
// content
// :::

interface InfoBoxProps {
  children: ReactNode
  variant?: BlockVariant
  title?: string
}

const infoBoxStyles: Record<BlockVariant, string> = {
  blue: "bg-blue-50 border-blue-200 text-blue-900",
  green: "bg-green-50 border-green-200 text-green-900",
  amber: "bg-amber-50 border-amber-200 text-amber-900",
  gray: "bg-gray-50 border-gray-200 text-gray-900",
  purple: "bg-purple-50 border-purple-200 text-purple-900",
}

export function InfoBox({ children, variant = "blue", title }: InfoBoxProps) {
  return (
    <div className={`rounded-lg p-6 border ${infoBoxStyles[variant]} my-6`}>
      {title && (
        <h4 className="font-bold text-lg mb-2">{title}</h4>
      )}
      <div className="space-y-2">{children}</div>
    </div>
  )
}

// ============================================
// WARNING BOX - Amber warning/notice box
// ============================================
// Usage: :::warning Title

interface WarningBoxProps {
  children: ReactNode
  title?: string
}

export function WarningBox({ children, title = "Important" }: WarningBoxProps) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-amber-900 mb-2">{title}</h4>
          <div className="text-amber-800 text-sm space-y-2">{children}</div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// INDENT SECTION - Blue left-border section
// ============================================
// Usage: :::indent

interface IndentSectionProps {
  children: ReactNode
}

export function IndentSection({ children }: IndentSectionProps) {
  return (
    <div className="border-l-4 border-[#5d2c89] pl-6 py-2 my-6">
      <div className="text-gray-700 space-y-3">{children}</div>
    </div>
  )
}

// ============================================
// CONTACT CARD - Email/phone contact info
// ============================================
// Usage: :::contact
// email: info@example.com
// phone: 0800 123 456
// :::

interface ContactCardProps {
  email?: string
  phone?: string
  address?: string
  title?: string
}

export function ContactCard({ email, phone, address, title }: ContactCardProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
      {title && (
        <h4 className="font-bold text-lg text-[#2d2d2d] mb-4">{title}</h4>
      )}
      <div className="space-y-2">
        {email && (
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${email}`} className="text-[#5d2c89] hover:underline">
              {email}
            </a>
          </p>
        )}
        {phone && (
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-[#5d2c89] hover:underline">
              {phone}
            </a>
          </p>
        )}
        {address && (
          <p>
            <strong>Address:</strong> {address}
          </p>
        )}
      </div>
    </div>
  )
}

// ============================================
// HIGHLIGHT BOX - Gradient highlight callout
// ============================================
// Usage: :::highlight[green] Title

interface HighlightBoxProps {
  children: ReactNode
  variant?: BlockVariant
  title?: string
}

const highlightStyles: Record<BlockVariant, string> = {
  blue: "from-blue-50 to-indigo-50 border-blue-200",
  green: "from-green-50 to-emerald-50 border-green-200",
  amber: "from-amber-50 to-yellow-50 border-amber-200",
  gray: "from-gray-50 to-slate-50 border-gray-200",
  purple: "from-purple-50 to-violet-50 border-purple-200",
}

export function HighlightBox({ children, variant = "blue", title }: HighlightBoxProps) {
  return (
    <div className={`bg-gradient-to-r ${highlightStyles[variant]} rounded-lg p-6 border my-6`}>
      {title && (
        <h4 className="text-xl font-bold text-[#2d2d2d] mb-4">{title}</h4>
      )}
      <div className="space-y-2">{children}</div>
    </div>
  )
}

// ============================================
// EXAMPLE BOX - Fee calculation examples
// ============================================
// Usage: :::example Title

interface ExampleBoxProps {
  children: ReactNode
  title?: string
}

export function ExampleBox({ children, title = "Example" }: ExampleBoxProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
      <h4 className="font-bold text-lg mb-3 text-blue-900">{title}</h4>
      <div className="space-y-2 text-sm text-blue-800">{children}</div>
    </div>
  )
}

// ============================================
// STEPS LIST - Numbered process steps
// ============================================
// Usage: :::steps Title
// 1. First step
// 2. Second step
// :::

interface StepsListProps {
  steps: string[]
  title?: string
}

export function StepsList({ steps, title }: StepsListProps) {
  return (
    <div className="my-6">
      {title && (
        <h4 className="font-bold text-lg mb-4">{title}</h4>
      )}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#5d2c89] text-white rounded-full flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>
            <div className="flex-1 pt-1 text-gray-700">{step}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// CTA BOX - Call to action section
// ============================================
// Usage: :::cta
// title: Ready to Get Started?
// description: Check your eligibility today.
// buttonText: Check Now
// buttonHref: /car-finance-claims
// :::

interface CTABoxProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
}

export function CTABox({ title, description, buttonText = "Check My Eligibility", buttonHref = "/car-finance-claims" }: CTABoxProps) {
  return (
    <div className="mt-8 mb-6 p-8 bg-gradient-to-r from-[#5d2c89] to-[#7c3aed] text-white rounded-xl">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="mb-6 text-white/90">{description}</p>
      <a 
        href={buttonHref}
        className="inline-block bg-white text-[#5d2c89] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        {buttonText}
      </a>
    </div>
  )
}

// ============================================
// COMPANY INFO BOX - Regulatory details
// ============================================
// Usage: :::company

interface CompanyInfoProps {
  tradingName?: string
  legalEntity?: string
  companyNumber?: string
  fcaNumber?: string
  address?: string
}

export function CompanyInfoBox({ 
  tradingName = "My Claims Centre",
  legalEntity = "SOLVO SOLUTIONS LTD",
  companyNumber = "14760023",
  fcaNumber = "1013195",
  address = "Office 116 Regents Pavilion, Moulton Park Industrial Estate, Northampton, England, NN3 6BJ"
}: CompanyInfoProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 my-6 space-y-2">
      <p><strong>Trading Name:</strong> {tradingName}</p>
      <p><strong>Legal Entity:</strong> {legalEntity}</p>
      <p><strong>Company Number:</strong> {companyNumber}</p>
      <p><strong>Registered Address:</strong> {address}</p>
      <p><strong>FCA Authorization:</strong> Claims Management Referrals (FRN: {fcaNumber})</p>
    </div>
  )
}

// ============================================
// TIMELINE - Process timeline with dates
// ============================================
// Usage: :::timeline Title
// Step 1: Description
// Step 2: Description
// :::

interface TimelineItem {
  label: string
  value: string
}

interface TimelineProps {
  items: TimelineItem[]
  title?: string
}

export function Timeline({ items, title }: TimelineProps) {
  return (
    <div className="my-6">
      {title && (
        <h4 className="font-bold text-lg mb-4">{title}</h4>
      )}
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between border-b border-gray-200 pb-2">
            <span className="font-semibold">{item.label}:</span>
            <span className="text-gray-700">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// KEY TAKEAWAY - Summary box for key points
// ============================================
// Usage: :::keytakeaway Title
// Key point content here
// :::

interface KeyTakeawayProps {
  children: ReactNode
  title?: string
}

export function KeyTakeaway({ children, title = "Key Takeaway" }: KeyTakeawayProps) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-[#5d2c89] rounded-r-lg p-6 my-6">
      <div className="flex items-start gap-3">
        <Lightbulb className="w-6 h-6 text-[#5d2c89] flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-lg text-[#5d2c89] mb-2">{title}</h4>
          <div className="text-gray-700 space-y-2">{children}</div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// QUOTE - Styled quotations
// ============================================
// Usage: :::quote Author Name
// Quote text here
// :::

interface QuoteProps {
  children: ReactNode
  author?: string
  source?: string
}

export function Quote({ children, author, source }: QuoteProps) {
  return (
    <blockquote className="relative bg-gray-50 rounded-xl p-6 my-6 border-l-4 border-[#5d2c89]">
      <QuoteIcon className="absolute top-4 right-4 w-8 h-8 text-gray-200" />
      <div className="text-lg text-gray-700 italic mb-4 relative z-10">
        {children}
      </div>
      {(author || source) && (
        <footer className="text-sm text-gray-500">
          {author && <span className="font-semibold">— {author}</span>}
          {source && <span className="ml-2 text-gray-400">({source})</span>}
        </footer>
      )}
    </blockquote>
  )
}

// ============================================
// STAT CARD - Big number statistics
// ============================================
// Usage: :::stat
// value: £1.2 Billion
// label: Estimated compensation owed
// :::

interface StatCardProps {
  value: string
  label: string
  variant?: BlockVariant
}

const statStyles: Record<BlockVariant, string> = {
  blue: "from-blue-500 to-indigo-600",
  green: "from-green-500 to-emerald-600",
  amber: "from-amber-500 to-orange-600",
  gray: "from-gray-500 to-slate-600",
  purple: "from-[#5d2c89] to-[#7c3aed]",
}

export function StatCard({ value, label, variant = "purple" }: StatCardProps) {
  return (
    <div className={`bg-gradient-to-r ${statStyles[variant]} text-white rounded-xl p-8 my-6 text-center`}>
      <div className="text-4xl md:text-5xl font-bold mb-2">{value}</div>
      <div className="text-white/80 text-lg">{label}</div>
    </div>
  )
}

// ============================================
// DEFINITION - Term definitions
// ============================================
// Usage: :::definition Term Name
// Definition content here
// :::

interface DefinitionProps {
  term: string
  children: ReactNode
}

export function Definition({ term, children }: DefinitionProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 my-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-[#5d2c89] text-white text-xs font-bold px-2 py-1 rounded">DEFINITION</span>
        <h4 className="font-bold text-lg text-gray-900">{term}</h4>
      </div>
      <div className="text-gray-700 space-y-2">{children}</div>
    </div>
  )
}

// ============================================
// CHECKLIST - Checkmark lists
// ============================================
// Usage: :::checklist Title
// - Item 1
// - Item 2
// :::

interface ChecklistProps {
  items: string[]
  title?: string
  variant?: "check" | "eligible"
}

export function Checklist({ items, title, variant = "check" }: ChecklistProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
      {title && (
        <h4 className="font-bold text-lg text-green-900 mb-4">{title}</h4>
      )}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-green-800">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ============================================
// PROS/CONS - Comparison boxes
// ============================================
// Usage: :::proscons Title
// pros:
// - Pro item 1
// - Pro item 2
// cons:
// - Con item 1
// :::

interface ProsConsProps {
  pros: string[]
  cons: string[]
  title?: string
}

export function ProsCons({ pros, cons, title }: ProsConsProps) {
  return (
    <div className="my-6">
      {title && (
        <h4 className="font-bold text-lg mb-4">{title}</h4>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Pros */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <h5 className="font-bold text-green-800 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Pros
          </h5>
          <ul className="space-y-2">
            {pros.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-green-700 text-sm">
                <span className="text-green-500 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Cons */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <h5 className="font-bold text-red-800 mb-3 flex items-center gap-2">
            <XCircle className="w-5 h-5" />
            Cons
          </h5>
          <ul className="space-y-2">
            {cons.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-red-700 text-sm">
                <span className="text-red-500 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


