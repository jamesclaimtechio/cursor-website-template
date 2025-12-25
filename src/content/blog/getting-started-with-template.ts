import { BlogPost } from "@/types/blog"

export const gettingStartedWithTemplate: BlogPost = {
  slug: "getting-started-with-template",
  title: "Getting Started with the Website Builder Template",
  excerpt: "Learn how to set up and customize this Next.js template for your business. From installation to deployment in under an hour.",
  content: `
Welcome to the Website Builder template! This guide will walk you through everything you need to know to get your website up and running.

## What is This Template?

This is a production-ready Next.js template designed for rapid website deployment. Whether you're building a claims management site, professional services website, or any business site, this template provides everything you need out of the box.

### What's Included

**Components:** 20+ pre-built sections including Hero, Features, CTA, FAQ, Blog, and more. All fully responsive and customizable.

**SEO System:** Built-in keyword research framework, content validation, and topic cluster planning to help you rank in search engines.

**Compliance:** Validation system for regulated industries (FCA, legal services, etc.) to ensure your content meets requirements.

**Blog System:** Complete blog with auto-generated table of contents, SEO optimization, and compliance tracking.

## Quick Setup (15 Minutes)

### Step 1: Clone the Repository

\`\`\`bash
git clone https://github.com/jamesclaimtechio/cursor-website-template.git my-website
cd my-website
npm install
\`\`\`

### Step 2: Run the Setup Script

\`\`\`bash
npm run setup
\`\`\`

The script will prompt you for:
- Brand name
- Tagline
- Company details
- Primary colors
- Contact information

### Step 3: Upload Your Logo

Place your logo files in \`/public/images/\`:
- \`logo-light.png\` - For dark backgrounds
- \`logo-dark.png\` - For light backgrounds

Update the paths in \`src/config/site.config.ts\`.

### Step 4: Start Development

\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000 to see your site!

## Customization Options

### Theme Colors

Edit \`src/config/theme.config.ts\` to change:
- Primary color (buttons, CTAs)
- Secondary color (accents, brand elements)
- Background colors
- Text colors

### Navigation

Update \`src/config/site.config.ts\` to add/remove pages from your navigation menu.

### Content

Use the templates in \`src/content/\`:
- \`blog/_TEMPLATE.ts\` - For blog posts
- \`pages/_TEMPLATE.ts\` - For page content
- \`legal/_TEMPLATE.ts\` - For legal documents

## Next Steps

1. Create your first blog post
2. Customize the homepage
3. Add your team photos (optional)
4. Deploy to Vercel or Railway

See the complete documentation in \`docs/🚀 START_HERE.md\` for detailed guidance.
`,
  author: {
    name: "Website Builder",
    role: "Template Documentation",
  },
  publishedAt: "2025-12-24",
  category: "guides",
  tags: ["getting started", "setup", "tutorial"],
  featured: true,
  image: {
    src: "/images/blog/getting-started.jpg",
    alt: "Getting started with Website Builder template - setup guide",
    width: 1200,
    height: 630,
  },
  seo: {
    title: "Getting Started with Website Builder Template | Complete Guide",
    description: "Learn how to set up and customize the Website Builder Next.js template. From installation to deployment in under an hour with our step-by-step guide.",
    keywords: ["website template", "nextjs setup", "getting started", "website builder"],
  },
  compliance: {
    verified: true,
    verifiedBy: "Template Team",
    verifiedDate: "2025-12-24",
    sources: [
      "Template documentation",
      "Setup guide",
    ],
  },
  faqs: [
    {
      question: "How long does setup take?",
      answer: "Basic setup takes 10-15 minutes. Full customization with content takes 2-4 hours."
    },
    {
      question: "Do I need coding knowledge?",
      answer: "No! The template is designed for non-technical users with Cursor AI guidance throughout."
    }
  ],
}

