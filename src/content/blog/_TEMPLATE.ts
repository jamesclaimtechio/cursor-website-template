import { BlogPost } from "@/types/blog"

/**
 * BLOG POST TEMPLATE
 * ==================
 * Copy this file and rename to your-post-slug.ts
 * 
 * CURSOR AI: When user says "create blog post about X":
 * 1. Copy this template to a new file
 * 2. Use SEO keyword research from src/seo/data/keywords.ts (if available)
 * 3. Follow writing style from docs/CONTENT_WRITING_STYLE_GUIDE.md
 * 4. Follow compliance rules from docs/# Website Compliance Guidelines
 * 5. Validate with content-rules.config.ts before finalizing
 * 6. Register the new post in src/lib/blog.ts
 * 
 * INSTRUCTIONS:
 * 1. Replace all {{PLACEHOLDERS}} with actual content
 * 2. Delete this comment block before publishing
 * 3. Ensure compliance.verified is true before deploying
 * 4. Add post to src/lib/blog.ts imports and allPosts array
 */

export const templatePost: BlogPost = {
  slug: "{{POST_SLUG}}", // e.g., "how-to-claim-refund" (URL-friendly, lowercase, hyphens)
  
  title: "{{POST_TITLE}}", // 50-60 characters optimal for SEO
  // Example: "How to Claim Your Refund: Complete Guide 2025"
  
  excerpt: "{{POST_EXCERPT}}", // 150-160 characters - compelling summary for listings
  // Example: "Learn how to claim your refund with our step-by-step guide. Find out if you're eligible, what documents you need, and how long it takes."
  
  content: `
{{MAIN_CONTENT}}

Write your content here using markdown-style formatting.

Start with an engaging hook - a question, story, or relatable scenario.
Follow the structure from docs/CONTENT_WRITING_STYLE_GUIDE.md:
- 40% narrative paragraphs
- 20% strategic lists (with explanations)
- 20% examples and scenarios
- 10% visual elements
- 10% transitions

## Main Section Heading (H2)

Write conversational, story-driven content. Use "you" language throughout.
Explain WHY things matter, not just WHAT they are.

### Subsection (H3)

Continue with valuable content. Include real examples:

"Take Sarah's case: She discovered in 2023 that she was overcharged £850 
over her 4-year agreement. Here's how she successfully claimed..."

**Key points to remember:**

**Bold subheading** - 2-3 sentences explaining this point in detail. Use 
specific numbers and examples. Make it personal and actionable.

**Another bold subheading** - More explanation. Show cause and effect. 
Connect to reader's experience.

## Another Major Section (H2)

Continue building value. Mix formats - paragraphs, strategic lists, 
examples, and transitions.

:::keytakeaway Important Note
Use custom components sparingly and only when they add real value.
:::

Remember: Quality > Quantity. Better to have 1,500 words of engaging, 
helpful content than 3,000 words of filler.
`,

  author: {
    name: "{{BRAND_NAME}}", // From site.config.ts
    role: "{{AUTHOR_ROLE}}", // e.g., "Claims Specialists", "Legal Team"
  },
  
  publishedAt: "{{YYYY-MM-DD}}", // e.g., "2025-12-24"
  updatedAt: "{{YYYY-MM-DD}}", // Optional - only if content updated after publishing
  
  category: "{{CATEGORY}}", // Must be one of: "car-finance-claims", "dca-claims", "irresponsible-lending", "fca-news", "consumer-rights", "guides"
  // See src/types/blog.ts for full list
  
  tags: ["{{TAG1}}", "{{TAG2}}", "{{TAG3}}"], // 3-5 relevant tags for filtering
  // Examples: ["refund claims", "eligibility", "how-to"]
  
  featured: false, // Set to true to show on homepage
  
  // Featured Image - REQUIRED for SEO and social sharing
  image: {
    src: "/images/blog/{{POST_SLUG}}.jpg", // Upload image to public/images/blog/ first
    alt: "{{SEO_OPTIMIZED_ALT_TEXT}}", // Include target keyword naturally
    // Example: "Step-by-step guide to claiming your refund with required documents"
    width: 1200, // Recommended: 1200x630px for optimal social sharing
    height: 630,
  },
  
  // SEO Metadata - Critical for search visibility
  seo: {
    title: "{{SEO_TITLE}}", // 50-60 characters, include target keyword
    // Example: "How to Claim Your Refund: Complete Guide | Brand Name"
    
    description: "{{SEO_DESCRIPTION}}", // 150-160 characters, include keyword + CTA
    // Example: "Learn how to claim your refund with our step-by-step guide. Find out eligibility requirements, needed documents, and typical timelines. Start your claim today."
    
    keywords: ["{{PRIMARY_KEYWORD}}", "{{SECONDARY_KEYWORD}}", "{{RELATED_TERM}}"],
    // Optional but helpful for content planning
  },
  
  // Compliance Tracking - REQUIRED
  compliance: {
    verified: false, // MUST be true before deploying - change after compliance review
    verifiedBy: "{{REVIEWER_NAME}}", // Who verified compliance
    verifiedDate: "{{YYYY-MM-DD}}", // When verified
    sources: [
      "{{SOURCE_1}}", // e.g., "Industry Report 2024, page 26"
      "{{SOURCE_2}}", // e.g., "Regulatory Guidance Document, section 5"
      // List all sources for factual claims made in content
    ],
  },
  
  // FAQ Schema (Optional but recommended for SEO)
  faqs: [
    {
      question: "{{COMMON_QUESTION_1}}",
      answer: "{{CLEAR_CONCISE_ANSWER}}"
      // Aim for 2-3 sentences per answer
    },
    {
      question: "{{COMMON_QUESTION_2}}",
      answer: "{{CLEAR_CONCISE_ANSWER}}"
    },
    // Add 3-5 relevant FAQs
  ],
}

/**
 * CHECKLIST BEFORE PUBLISHING:
 * ============================
 * 
 * Content Quality:
 * [ ] Follows CONTENT_WRITING_STYLE_GUIDE.md (less than 50% lists)
 * [ ] Uses "you" language (90%+ of content)
 * [ ] Includes 2+ real examples or scenarios
 * [ ] Has smooth transitions between sections
 * [ ] Feels conversational, not robotic
 * 
 * SEO:
 * [ ] Primary keyword in first 50 words
 * [ ] Keyword in H1 + 2-3 H2 headings
 * [ ] 3-5 internal links with keyword-rich anchors
 * [ ] Featured image uploaded and optimized
 * [ ] Meta title 50-60 characters
 * [ ] Meta description 150-160 characters
 * 
 * Compliance:
 * [ ] No prohibited CTAs (check content-rules.config.ts)
 * [ ] All statistics have sources
 * [ ] No guaranteed outcomes
 * [ ] compliance.verified = true
 * 
 * Technical:
 * [ ] File registered in src/lib/blog.ts
 * [ ] Slug matches filename
 * [ ] Category is valid
 * [ ] Image exists at specified path
 * 
 * See docs/HOW_TO_ADD_BLOG_POSTS.md for complete guide
 */

