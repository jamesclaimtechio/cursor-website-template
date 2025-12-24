# ⚡ Quick Start Guide

**Get your brand website live in under 4 hours!**

---

## 🎯 The 15-Minute Setup

### Step 1: Clone & Install (2 min)
```bash
git clone https://github.com/jamesclaimtechio/mcd-website.git my-brand
cd my-brand
npm install
```

### Step 2: Run Setup Script (5 min)
```bash
npm run setup
```

Answer the prompts:
- Brand name
- Tagline
- Company details
- Colors
- Contact info

### Step 3: Upload Logos (3 min)
1. Place logos in `/public/images/`
   - `logo-light.png` (for dark backgrounds)
   - `logo-dark.png` (for light backgrounds)

2. Update paths in `src/config/site.config.ts`:
   ```typescript
   logo: {
     src: "/images/logo-dark.png",
     // ...
   }
   ```

### Step 4: Test (5 min)
```bash
npm run dev
```

Visit http://localhost:3000

---

## 📝 The 2-Hour Content Sprint

### Hour 1: Core Pages

**Homepage** (30 min):
- Copy `src/content/pages/_TEMPLATE.ts` → `home-content.ts`
- Fill in hero, features, process sections
- Use your brand voice

**How It Works** (15 min):
- Copy template → `how-it-works-content.ts`
- Explain your 3-step process

**Legal Pages** (15 min):
- Copy `src/content/legal/_TEMPLATE.ts`
- Update company details
- Schedule legal review

### Hour 2: First Blog Posts

**Post 1** (30 min):
- Copy `src/content/blog/_TEMPLATE.ts` → `your-first-post.ts`
- Write 1,000-1,500 words
- Follow `docs/CONTENT_WRITING_STYLE_GUIDE.md`
- Register in `src/lib/blog.ts`

**Post 2** (30 min):
- Repeat for second topic
- Link to first post

---

## 🚀 The 1-Hour Deploy

### Option A: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

Follow prompts. Done! ✅

### Option B: Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Option C: Manual
```bash
npm run build
# Upload .next folder to your host
```

---

## ✅ Launch Checklist

### Pre-Launch (Must-Haves)
- [ ] All {{PLACEHOLDERS}} replaced
- [ ] Logos uploaded and displaying
- [ ] Contact info correct
- [ ] At least 1 blog post published
- [ ] Legal pages present (even if basic)
- [ ] Site builds without errors
- [ ] Mobile responsive verified

### Nice-to-Haves
- [ ] 3-5 blog posts
- [ ] OG image created
- [ ] Team photos added
- [ ] Social links configured
- [ ] Analytics set up

---

## 🎯 First Week Goals

### Day 1: Setup
- ✅ Clone and configure
- ✅ Upload logos
- ✅ Deploy to staging

### Day 2-3: Core Content
- Write 3 blog posts
- Customize homepage
- Complete legal pages

### Day 4-5: SEO
- Add keyword research
- Optimize meta tags
- Set up internal linking

### Day 6-7: Polish
- Add team photos
- Create OG images
- Test everything
- Deploy to production

---

## 💡 Pro Tips

### Content Creation
- Use Cursor: "Create blog post about [topic]"
- Follow the style guide religiously
- Aim for 1,500+ words per post
- Include real examples

### SEO
- Target one keyword per post
- Use keyword in first 50 words
- Add 3-5 internal links
- Optimize images (< 200KB)

### Compliance
- Run `contentRules.auditContent()` before publishing
- Only use approved CTAs
- Document all statistics sources
- Set `compliance.verified = true` only after review

### Performance
- Keep images optimized
- Use WebP format
- Lazy load images
- Monitor Core Web Vitals

---

## 🆘 Common Issues

### "Site won't build"
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### "Images not showing"
- Check paths start with `/images/` not `images/`
- Verify files exist in `/public/images/`
- Check `src/config/images.config.ts` paths

### "Blog posts not appearing"
- Verify `compliance.verified = true`
- Check post registered in `src/lib/blog.ts`
- Ensure slug matches filename

### "TypeScript errors"
- Check all {{PLACEHOLDERS}} are replaced
- Run `npm run lint` for details
- Ensure imports are correct

---

## 📚 Essential Reading

1. **[docs/🚀 START_HERE.md](docs/🚀 START_HERE.md)** - Complete setup guide
2. **[docs/CONTENT_WRITING_STYLE_GUIDE.md](docs/CONTENT_WRITING_STYLE_GUIDE.md)** - How to write
3. **[docs/HOW_TO_ADD_BLOG_POSTS.md](docs/HOW_TO_ADD_BLOG_POSTS.md)** - Blog workflow

---

## 🎉 You're Ready!

**This template includes:**
- ✅ 20+ reusable components
- ✅ Complete SEO system
- ✅ Compliance validation
- ✅ Blog management
- ✅ Responsive design
- ✅ TypeScript safety
- ✅ Comprehensive docs

**Time to launch:** 2-4 hours for basic site, 1-2 days for polished launch

**Go build something amazing!** 🚀

