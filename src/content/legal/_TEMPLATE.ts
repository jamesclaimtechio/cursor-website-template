/**
 * LEGAL PAGE TEMPLATE
 * ===================
 * Template for legal documents (Terms, Privacy, etc.)
 * 
 * CURSOR AI: When user says "create [legal page]":
 * 1. Copy this template
 * 2. Replace {{PLACEHOLDERS}} with brand information
 * 3. Customize sections based on legal requirements
 * 4. Have reviewed by legal counsel before publishing
 * 
 * IMPORTANT: This is a TEMPLATE ONLY
 * Consult with a qualified legal professional before deploying any legal documents
 */

export const legalTemplate = {
  // Page Metadata
  slug: "{{LEGAL_PAGE_SLUG}}", // e.g., "terms", "privacy", "fees"
  title: "{{LEGAL_PAGE_TITLE}}", // e.g., "Terms & Conditions"
  lastUpdated: "{{YYYY-MM-DD}}",
  
  // Content
  content: `
# {{LEGAL_PAGE_TITLE}}

**Last Updated:** {{DATE}}

## 1. Introduction

Welcome to {{BRAND_NAME}} ("we," "our," or "us"). These terms govern your use of our services.

**Company Details:**
- **Legal Entity:** {{COMPANY_LEGAL_NAME}}
- **Company Number:** {{COMPANY_NUMBER}}
- **Address:** {{BUSINESS_ADDRESS}}
- **Regulatory Authorization:** {{FCA_NUMBER}} (if applicable)

## 2. Services

We provide {{SERVICE_DESCRIPTION}}.

{{DETAILED_SERVICE_DESCRIPTION}}

## 3. Eligibility

To use our services, you must:
- Be at least 18 years old
- Be a resident of {{TARGET_REGION}}
- {{ADDITIONAL_REQUIREMENTS}}

## 4. Fees and Charges

### 4.1 Fee Structure

{{FEE_DETAILS}}

Example:
- Our standard fee is {{FEE_PERCENTAGE}}% of any compensation recovered
- You only pay if your claim is successful (No Win, No Fee)
- VAT is charged at the prevailing rate

### 4.2 Payment Terms

{{PAYMENT_TERMS}}

## 5. Your Rights

You have the right to:
- Make a claim yourself directly to the lender (free of charge)
- Cancel our service within {{COOLING_OFF_PERIOD}} days
- Complain if you're unhappy with our service

## 6. Our Obligations

We will:
- {{OBLIGATION_1}}
- {{OBLIGATION_2}}
- {{OBLIGATION_3}}

## 7. Data Protection

We process your personal data in accordance with:
- UK GDPR
- Data Protection Act 2018
- Our Privacy Policy (see {{PRIVACY_POLICY_LINK}})

## 8. Complaints

If you're unhappy with our service:

**Step 1:** Contact us at {{COMPLAINTS_EMAIL}}

**Step 2:** If unresolved, you can escalate to:
{{REGULATORY_OMBUDSMAN_DETAILS}}

## 9. Limitation of Liability

{{LIMITATION_OF_LIABILITY_CLAUSE}}

**Important:** This should be reviewed by legal counsel

## 10. Changes to Terms

We may update these terms. We'll notify you of significant changes via:
- Email to your registered address
- Notice on our website

## 11. Governing Law

These terms are governed by {{JURISDICTION}} law.

## 12. Contact Information

**{{BRAND_NAME}}**
{{BUSINESS_ADDRESS}}

**Email:** {{CONTACT_EMAIL}}
**Phone:** {{CONTACT_PHONE}}

**Regulatory Authorization:** {{FCA_NUMBER}}

---

**CURSOR AI NOTE:**
- Replace all {{PLACEHOLDERS}} with actual brand information
- Have this reviewed by qualified legal counsel
- Update lastUpdated date whenever changes are made
- Ensure compliance with local regulations
`,
}

/**
 * COMMON LEGAL PAGES NEEDED:
 * ===========================
 * 
 * 1. terms.ts - Terms & Conditions
 * 2. privacy.ts - Privacy Policy
 * 3. fees.ts - Fee Structure & Transparency
 * 4. no-win-no-fee.ts - No Win No Fee Policy
 * 5. complaints.ts - Complaints Procedure
 * 6. cookies.ts - Cookie Policy (if applicable)
 * 
 * COMPLIANCE REQUIREMENTS:
 * ========================
 * 
 * For UK Claims Management Companies (FCA regulated):
 * - Fee transparency (max 30% + VAT for most claims)
 * - Clear complaints procedure
 * - Disclosure that clients can claim directly for free
 * - Regulatory authorization number displayed
 * - Cooling-off period rights
 * 
 * See docs/# Website Compliance Guidelines (For Cursor) for full requirements
 * 
 * ⚠️ LEGAL DISCLAIMER:
 * This template is for structural guidance only.
 * All legal documents MUST be reviewed by qualified legal professionals
 * before publication.
 */

