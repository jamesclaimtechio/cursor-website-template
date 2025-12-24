# 🚀 Brand Setup Guide (For Cursor AI)

**Welcome to the Multi-Brand Website Template!**

This template is designed for **Cursor AI-guided setup**, making it easy to spin up new brand websites quickly while maintaining quality, compliance, and SEO best practices.

---

## ⚡ Quick Setup (Tell Cursor)

Open Cursor and say:

> **"Set up a new brand called [Your Brand Name]"**

Cursor will then:
1. Read this guide and understand the template structure
2. Prompt you for brand information
3. Update all config files with your details
4. Guide you through content setup
5. Help you deploy

---

## 📋 Information You'll Need

Have these ready before starting:

### Brand Identity
- [ ] Brand name
- [ ] Tagline/value proposition
- [ ] Company legal name
- [ ] Company registration number
- [ ] Business address

### Regulatory (if applicable)
- [ ] FCA authorization number (UK) or equivalent
- [ ] Industry/niche (e.g., claims management, legal services, etc.)

### Contact Information
- [ ] Primary email address
- [ ] Phone number (optional)
- [ ] Social media URLs (optional)

### Visual Identity
- [ ] Logo files (light and dark versions)
- [ ] Primary brand color (hex code)
- [ ] Secondary brand color (hex code)
- [ ] Font preferences (or use defaults)

### Content Strategy
- [ ] Target keywords/topics
- [ ] Main service/offering description
- [ ] Desired navigation structure

---

## 🎯 Setup Process

### Phase 1: Configuration (10 minutes)

Cursor will update these files with your brand information:

**Core Config:**
- `src/config/site.config.ts` - Brand identity, contact info, navigation
- `src/config/theme.config.ts` - Colors, fonts, design tokens
- `src/config/seo.config.ts` - Default SEO settings
- `src/config/images.config.ts` - Image asset paths

**Validation:**
- `src/config/content-rules.config.ts` - Add your verified statistics

### Phase 2: Visual Assets (15 minutes)

Upload your brand images:

1. **Logos** → `/public/images/`
   - `logo-light.png` (for dark backgrounds)
   - `logo-dark.png` (for light backgrounds)

2. **OG Image** → `/public/images/og/og-default.jpg`
   - Social sharing image (1200x630px)

3. **Optional mascot/character** → `/public/images/mascot/`

See `/public/images/README.md` for detailed specifications.

### Phase 3: Content Creation (Ongoing)

Use the template system:

**Blog Posts:**
- Copy `src/content/blog/_TEMPLATE.ts`
- Follow `docs/CONTENT_WRITING_STYLE_GUIDE.md`
- Register in `src/lib/blog.ts`

**Pages:**
- Copy `src/content/pages/_TEMPLATE.ts`
- Use components from `docs/Section_Library.md`

**Legal Pages:**
- Copy `src/content/legal/_TEMPLATE.ts`
- Have reviewed by legal counsel

### Phase 4: SEO Setup (30 minutes)

**Keywords:**
- Replace `src/seo/data/keywords.ts` with your keyword research
- Update `src/seo/data/topic-clusters.ts` with your content plan

**Resources:**
- `docs/SEO_CONTENT_ENGINE.md` - Complete SEO system guide
- `docs/SEO_QUICK_REFERENCE.md` - Quick tips

### Phase 5: Deploy (Variable)

Options:
- Vercel (recommended for Next.js)
- Railway
- Your preferred hosting

---

## 📚 Documentation Index

### Essential Reading
- **[Content Writing Style Guide](CONTENT_WRITING_STYLE_GUIDE.md)** - How to write engaging content
- **[Compliance System](COMPLIANCE_SYSTEM.md)** - FCA/regulatory compliance rules
- **[Section Library](Section_Library.md)** - All available page components

### SEO & Content
- **[SEO Content Engine](SEO_CONTENT_ENGINE.md)** - Complete SEO system
- **[SEO Writer Persona](SEO_CONTENT_WRITER_PERSONA.md)** - Content writing guidelines
- **[How to Add Blog Posts](HOW_TO_ADD_BLOG_POSTS.md)** - Blog publishing workflow

### Technical
- **[Design System](DESIGN_SYSTEM.md)** - Theme tokens and patterns
- **[Compliance Guidelines](# Website Compliance Guidelines (For Cursor))** - Legal requirements

### Agent Workflows
- **[Content Wizard](agents/content-wizard.md)** - Content planning agent
- **[Page Builder](agents/page-builder.md)** - Page assembly agent
- **[Setup Agent](agents/setup-agent.md)** - Initial setup workflow

---

## 🔧 Files Cursor Will Customize

### 🟢 Will Be Updated (Your Brand Data)

| File | What It Contains |
|------|------------------|
| `src/config/site.config.ts` | Brand name, contact info, navigation |
| `src/config/theme.config.ts` | Colors, fonts, spacing |
| `src/config/seo.config.ts` | Default SEO metadata |
| `src/config/images.config.ts` | Image asset paths |
| `src/config/content-rules.config.ts` | Verified statistics |
| `tailwind.config.ts` | Theme integration |

### 🔵 Will Be Created (Your Content)

| Location | What You'll Create |
|----------|-------------------|
| `src/content/blog/` | Your blog posts |
| `src/content/pages/` | Your page content |
| `src/content/legal/` | Your legal documents |
| `src/seo/data/keywords.ts` | Your keyword research |
| `/public/images/` | Your brand images |

### 🟡 Stay Unchanged (Reusable Infrastructure)

| What | Status |
|------|--------|
| All components (`src/components/`) | ✅ 100% reusable |
| Type definitions (`src/types/`) | ✅ 100% reusable |
| Utilities (`src/lib/`) | ✅ 100% reusable |
| SEO validation system | ✅ 100% reusable |
| Blog system | ✅ 100% reusable |
| Documentation | ✅ Mostly reusable |

---

## 🎨 Design Customization

The template uses a token-based design system. Customize in `src/config/theme.config.ts`:

**Colors:**
- Primary (CTAs, buttons)
- Secondary (accents, brand elements)
- Background variations
- Text colors

**Typography:**
- Font families
- Font sizes (pre-tested scale)
- Font weights

**Spacing & Layout:**
- Spacing scale
- Border radius
- Shadows

See `docs/DESIGN_SYSTEM.md` for complete design token reference.

---

## ✅ Pre-Launch Checklist

Before going live:

### Configuration
- [ ] All {{PLACEHOLDERS}} replaced in config files
- [ ] Logo files uploaded and paths updated
- [ ] Navigation structure finalized
- [ ] Contact information accurate

### Content
- [ ] At least 3-5 blog posts published
- [ ] Homepage content customized
- [ ] Legal pages completed and reviewed
- [ ] All images optimized and uploaded

### SEO
- [ ] Keyword research added to system
- [ ] Meta titles/descriptions set for all pages
- [ ] OG image created and uploaded
- [ ] Internal linking structure established

### Compliance
- [ ] All statistics have sources
- [ ] No prohibited CTAs used
- [ ] Legal pages reviewed by counsel
- [ ] Regulatory numbers displayed correctly

### Technical
- [ ] Site builds without errors
- [ ] All links working
- [ ] Mobile responsive
- [ ] Page load times < 3 seconds

---

## 🚨 Common Issues & Solutions

### "Config files have TypeScript errors"
- Check that all {{PLACEHOLDERS}} are replaced with actual values
- Ensure strings are properly quoted
- Run `npm run lint` to identify issues

### "Blog posts not showing"
- Verify `compliance.verified` is `true`
- Check post is registered in `src/lib/blog.ts`
- Ensure slug matches filename

### "Images not loading"
- Check paths in `src/config/images.config.ts`
- Verify files exist in `/public/images/`
- Use forward slashes in paths (not backslashes)

### "Site won't build"
- Run `npm install` to ensure dependencies are installed
- Check for TypeScript errors: `npm run lint`
- Review build output for specific errors

---

## 💡 Next Steps After Setup

1. **Content Creation**
   - Write your first blog post using the template
   - Create content for homepage, about, services pages
   - Follow the style guide for consistency

2. **SEO Optimization**
   - Add keyword research
   - Build topic clusters
   - Implement internal linking strategy

3. **Testing**
   - Test on mobile devices
   - Check all forms and CTAs
   - Verify compliance rules

4. **Launch**
   - Deploy to production
   - Set up analytics
   - Submit sitemap to search engines

5. **Ongoing**
   - Publish blog posts regularly (weekly/bi-weekly)
   - Monitor SEO performance
   - Update content based on results

---

## 🆘 Need Help?

### For Cursor AI

If you're Cursor reading this for setup:
1. Start by asking user for brand information (see "Information You'll Need" above)
2. Update config files one by one
3. Guide user through image upload
4. Help create first blog post from template
5. Validate setup using checklists

### For Developers

- Check the relevant docs in `/docs/` folder
- Review component examples in `/src/components/`
- See template files in `/src/content/`
- Read style guides for content/design patterns

### For Content Writers

- Start with `docs/CONTENT_WRITING_STYLE_GUIDE.md`
- Use templates in `src/content/blog/_TEMPLATE.ts`
- Follow `docs/HOW_TO_ADD_BLOG_POSTS.md`

---

## 🎉 You're Ready!

This template includes everything you need:
- ✅ Production-ready components
- ✅ SEO optimization system
- ✅ Compliance validation
- ✅ Content management
- ✅ Blog system with TOC
- ✅ Responsive design
- ✅ Type-safe TypeScript
- ✅ Comprehensive documentation

**Time to build something amazing!** 🚀

---

*Last updated: December 2025*
*Template version: 1.0*

