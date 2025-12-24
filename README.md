# Multi-Brand Website Template

A production-ready Next.js template for **claims management companies**, **professional services**, and similar businesses. Designed for rapid deployment with Cursor AI-guided setup.

## ✨ Features

✅ **Complete Component Library** - Hero, Features, FAQ, CTA, Process, and more  
✅ **Blog System** - SEO-optimized with auto-generated table of contents  
✅ **Compliance Validation** - FCA/regulatory rules enforcement  
✅ **SEO Engine** - Keyword research, content validation, topic clusters  
✅ **Cursor AI-Guided Setup** - Smart prompts for brand configuration  
✅ **TypeScript Throughout** - Full type safety  
✅ **Tailwind CSS** - Utility-first styling with design tokens  
✅ **Responsive Design** - Mobile-first, works everywhere  

---

## 🚀 Quick Start

### 1. Clone This Template

```bash
git clone https://github.com/jamesclaimtechio/mcd-website.git my-brand-website
cd my-brand-website
npm install
```

### 2. Setup Your Brand (with Cursor AI)

Open in Cursor and say:

> **"Set up a new brand called [Your Brand Name]"**

Cursor will guide you through:
- ✅ Brand identity configuration
- ✅ Theme customization (colors, fonts)
- ✅ SEO defaults setup
- ✅ Image asset organization
- ✅ First blog post creation

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 4. Deploy

```bash
npm run build
# Deploy to Vercel, Railway, or your preferred host
```

---

## 📚 Documentation

### 🎯 Start Here
**[docs/🚀 START_HERE.md](docs/🚀 START_HERE.md)** - Complete setup guide for Cursor AI

### Essential Guides
- **[Content Writing Style Guide](docs/CONTENT_WRITING_STYLE_GUIDE.md)** - Write engaging, SEO-friendly content
- **[Compliance System](docs/COMPLIANCE_SYSTEM.md)** - FCA/regulatory enforcement
- **[SEO Content Engine](docs/SEO_CONTENT_ENGINE.md)** - Complete SEO system
- **[Section Library](docs/Section_Library.md)** - All available page components

### Technical Reference
- **[Design System](docs/DESIGN_SYSTEM.md)** - Theme tokens and patterns
- **[How to Add Blog Posts](docs/HOW_TO_ADD_BLOG_POSTS.md)** - Blog publishing workflow
- **[Image Guide](docs/IMAGE_GUIDE.md)** - Image specifications and optimization

### Agent Workflows
- **[Content Wizard](docs/agents/content-wizard.md)** - Content planning agent
- **[Page Builder](docs/agents/page-builder.md)** - Page assembly agent
- **[Setup Agent](docs/agents/setup-agent.md)** - Brand setup workflow

---

## 🎨 What's Included

### Components (100% Reusable)

**Layout Components:**
- Header (responsive navigation)
- Footer (links, social, legal info)

**Section Components:**
- Hero (primary page header)
- Features (grid of benefits/services)
- Process (step-by-step how-it-works)
- CTA (call-to-action blocks)
- FAQ (accordion with schema)
- Testimonials (customer quotes)
- Trust Bar (stats and trust indicators)

**Blog Components:**
- Blog listing page
- Blog post renderer (markdown support)
- Table of contents (auto-generated, sticky)
- Blog card (preview component)

**Legal Components:**
- Legal page template
- Disclaimer component

### Systems

**SEO System:**
- Keyword research database structure
- Topic cluster planning
- Content validation (scores content before publishing)
- Internal linking suggestions
- Metadata generation

**Compliance System:**
- Content rules validation
- CTA approval/prohibition lists
- Statistics verification
- Audit functions for compliance checking

**Blog System:**
- Type-safe blog post interface
- Compliance tracking per post
- Automatic TOC generation
- Category and tag filtering
- SEO metadata integration

### Configuration

**Brand Config:**
- `src/config/site.config.ts` - Brand identity, contact, navigation
- `src/config/theme.config.ts` - Colors, fonts, spacing, shadows
- `src/config/seo.config.ts` - Default SEO settings
- `src/config/images.config.ts` - Image asset catalog
- `src/config/content-rules.config.ts` - Content validation rules

**Content Templates:**
- `src/content/blog/_TEMPLATE.ts` - Blog post template
- `src/content/pages/_TEMPLATE.ts` - Page content template
- `src/content/legal/_TEMPLATE.ts` - Legal document template

---

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5+
- **Styling:** Tailwind CSS 3.4
- **UI Icons:** Lucide React
- **Image Optimization:** Next.js Image
- **Font Loading:** Next.js Font Optimization

---

## 📂 Project Structure

```
/
├── docs/                     # Comprehensive documentation
│   ├── 🚀 START_HERE.md     # Main setup guide
│   ├── agents/              # AI agent workflows
│   ├── COMPLIANCE_SYSTEM.md # Compliance enforcement
│   ├── CONTENT_WRITING_STYLE_GUIDE.md
│   ├── SEO_CONTENT_ENGINE.md
│   └── Section_Library.md
│
├── public/
│   └── images/              # Brand assets (logos, mascot, blog images)
│       └── README.md        # Image guide
│
├── src/
│   ├── app/                 # Next.js pages
│   ├── components/          # React components
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Page sections (Hero, CTA, FAQ, etc.)
│   │   ├── blog/           # Blog components
│   │   ├── legal/          # Legal page components
│   │   └── ui/             # Base UI components
│   │
│   ├── config/             # Configuration files (YOUR BRAND DATA)
│   │   ├── site.config.ts  # {{REPLACE WITH YOUR INFO}}
│   │   ├── theme.config.ts # {{REPLACE WITH YOUR COLORS}}
│   │   └── ...
│   │
│   ├── content/            # Content files (YOUR CONTENT)
│   │   ├── blog/          # {{ADD YOUR BLOG POSTS}}
│   │   ├── pages/         # {{ADD YOUR PAGE CONTENT}}
│   │   └── legal/         # {{ADD YOUR LEGAL DOCS}}
│   │
│   ├── seo/               # SEO system
│   │   ├── data/          # {{ADD YOUR KEYWORDS}}
│   │   ├── utils/         # Validation functions (generic)
│   │   └── types/         # Type definitions (generic)
│   │
│   ├── lib/               # Utilities (generic, reusable)
│   ├── types/             # TypeScript interfaces (generic)
│   └── styles/            # Global CSS
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## ⚡ Setup Workflow

### Initial Setup (10-15 minutes)

1. **Clone and Install**
   ```bash
   git clone [this-repo] my-brand
   cd my-brand
   npm install
   ```

2. **Configure Brand** (Cursor AI-guided)
   - Tell Cursor: *"Set up a new brand called [Brand Name]"*
   - Provide brand information when prompted
   - Upload logo files
   - Choose colors

3. **Upload Images**
   - Logos → `/public/images/`
   - See `/public/images/README.md` for specs

4. **Test Locally**
   ```bash
   npm run dev
   ```

### Content Creation (Ongoing)

1. **Add Keyword Research**
   - Update `src/seo/data/keywords.ts`
   - Plan topic clusters in `src/seo/data/topic-clusters.ts`

2. **Create Blog Posts**
   - Copy `src/content/blog/_TEMPLATE.ts`
   - Follow `docs/CONTENT_WRITING_STYLE_GUIDE.md`
   - Register in `src/lib/blog.ts`

3. **Customize Pages**
   - Homepage: Update `src/app/page.tsx`
   - Other pages: Use section components

4. **Legal Pages**
   - Copy `src/content/legal/_TEMPLATE.ts`
   - Have reviewed by legal counsel

---

## 🎯 For Different Industries

This template works for:

**Claims Management:**
- Car finance claims
- PPI claims
- General compensation claims

**Legal Services:**
- Family law
- Employment law
- Personal injury

**Professional Services:**
- Consulting
- Financial advisory
- Business services

**Customize by:**
- Updating navigation structure
- Choosing relevant blog categories
- Adapting compliance rules to your industry
- Adding industry-specific components

---

## 📋 Pre-Launch Checklist

### Configuration
- [ ] All `{{PLACEHOLDERS}}` replaced in config files
- [ ] Logo files uploaded and paths updated
- [ ] Colors match brand guidelines
- [ ] Contact information accurate
- [ ] Navigation structure finalized

### Content
- [ ] Homepage content customized
- [ ] At least 3-5 blog posts published
- [ ] Legal pages completed and reviewed
- [ ] All pages have proper SEO metadata

### Images
- [ ] Logos uploaded (light and dark versions)
- [ ] OG image created (1200x630px)
- [ ] Blog featured images added
- [ ] All images optimized (< 200KB each)

### SEO
- [ ] Keyword research added
- [ ] Topic clusters planned
- [ ] Internal linking implemented
- [ ] Meta titles/descriptions set
- [ ] Sitemap configured

### Compliance
- [ ] All statistics have sources
- [ ] No prohibited CTAs used
- [ ] Fee disclosure present
- [ ] Regulatory numbers displayed
- [ ] Legal pages reviewed

### Technical
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] All links working
- [ ] Mobile responsive verified
- [ ] Performance: < 3s load time

---

## 🛠️ Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌟 Key Advantages

### For Developers
- Type-safe with TypeScript
- Component-driven architecture
- Clear separation of content and code
- Comprehensive documentation
- Git-friendly (no generated files tracked)

### For Content Teams
- Easy blog post creation
- Template-based content
- Built-in compliance validation
- SEO guidance integrated
- Cursor AI assistance

### For Businesses
- Rapid deployment (days, not weeks)
- Compliance-ready (FCA/regulatory)
- SEO-optimized out of the box
- Professional design included
- Scalable for multiple brands

---

## 🎓 Learning Resources

### New to Next.js?
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### New to Tailwind?
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Examples](https://tailwindui.com/)

### New to TypeScript?
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript with React](https://react-typescript-cheatsheet.netlify.app/)

---

## 🤝 Contributing

This is a template project. Feel free to:
- Fork for your own use
- Customize for your brand
- Submit improvements via pull requests

---

## 📄 License

[Your License Here]

---

## 🆘 Support

### Issues?
- Check `docs/🚀 START_HERE.md` first
- Review component examples in code
- Read relevant docs in `/docs/` folder

### Questions?
- Open an issue on GitHub
- Check inline code comments
- Review template files for guidance

---

**Built for rapid deployment. Designed for Cursor AI. Ready for your brand.** 🚀

*Template Version: 1.0*  
*Last Updated: December 2025*

