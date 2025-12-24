/**
 * Legal Page Block Components
 * ===========================
 * Reusable design blocks for legal/compliance pages
 * Used by the markdown parser to render custom syntax
 */

import { ReactNode } from "react"
import { BlockVariant } from "@/types/legal"

// ============================================
// INFOBOX - Colored information box
// ============================================
// Usage: :::infobox[blue] or :::infobox[green]

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
// Usage: :::warning

interface WarningBoxProps {
  children: ReactNode
  title?: string
}

export function WarningBox({ children, title = "Important" }: WarningBoxProps) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
      <h4 className="font-semibold text-amber-900 mb-2">⚠️ {title}</h4>
      <div className="text-amber-800 text-sm space-y-2">{children}</div>
    </div>
  )
}

// ============================================
// INDENT SECTION - Blue left-border section
// ============================================
// Usage: :::indent
// This mimics the LegalSection heading style

interface IndentSectionProps {
  children: ReactNode
}

export function IndentSection({ children }: IndentSectionProps) {
  return (
    <div className="border-l-4 border-[#4f46e5] pl-6 py-2 my-6">
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
// address: 123 Street
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
            <a href={`mailto:${email}`} className="text-[#4f46e5] hover:underline">
              {email}
            </a>
          </p>
        )}
        {phone && (
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-[#4f46e5] hover:underline">
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
// Usage: :::highlight[green] or :::highlight[blue]

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
// Usage: :::example

interface ExampleBoxProps {
  children: ReactNode
  title?: string
}

export function ExampleBox({ children, title = "Example" }: ExampleBoxProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
      <h4 className="font-bold text-lg mb-3">{title}</h4>
      <div className="space-y-2 text-sm">{children}</div>
    </div>
  )
}

// ============================================
// STEPS LIST - Numbered process steps
// ============================================
// Usage: :::steps
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
            <div className="flex-shrink-0 w-8 h-8 bg-[#4f46e5] text-white rounded-full flex items-center justify-center font-bold text-sm">
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

interface CTABoxProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
}

export function CTABox({ title, description, buttonText = "Learn More", buttonHref = "/car-finance-claims" }: CTABoxProps) {
  return (
    <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="mb-6 text-blue-100">{description}</p>
      <a 
        href={buttonHref}
        className="inline-block bg-white text-[#4f46e5] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
// Usage: :::timeline

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


