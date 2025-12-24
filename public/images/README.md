# Image Assets Guide

This folder contains all brand visual assets for the website.

## 📁 Folder Structure

```
/images/
  /logos/          - Brand logo variations
  /mascot/         - Character/mascot images (optional)
  /blog/           - Blog post featured images  
  /team/           - Team member photos (optional)
  /og/             - Open Graph social sharing images
  README.md        - This file
```

## 🎨 Required Images

### 1. Logos (Required)

Upload to `/images/` root:

- **logo-light.png** - Light/white logo for dark backgrounds (footer, dark mode)
  - Recommended: 640x240px or your logo's aspect ratio
  - Format: PNG with transparency
  
- **logo-dark.png** - Dark logo for light backgrounds (header, main content)
  - Recommended: 640x240px or your logo's aspect ratio
  - Format: PNG with transparency

**After uploading**, update paths in:
- `src/config/site.config.ts` → logo.src and logoLight.src
- `src/config/images.config.ts` → images.logo

### 2. Open Graph Image (Required)

Upload to `/images/og/`:

- **og-default.jpg** - Default social sharing image
  - Required size: 1200x630px
  - Shows when pages are shared on Facebook, Twitter, LinkedIn
  - Include your logo and minimal text
  - High contrast, clear visuals

### 3. Blog Images (As Needed)

Upload to `/images/blog/`:

- **{post-slug}.jpg** - Match the blog post slug
  - Recommended: 1200x630px (optimal for social sharing)
  - Example: If post slug is "how-to-claim", name image "how-to-claim.jpg"
  - Fallback: `default.jpg` if no specific image

## 🎭 Optional Images

### Mascot/Character (Optional)

If your brand has a mascot, upload to `/images/mascot/`:

Organize by usage:
- **hero-primary.png** - Main hero image
- **cta-primary.png** - Call-to-action sections
- **success-primary.png** - Success/confirmation pages

Update `src/config/images.config.ts` with paths.

### Team Photos (Optional)

Upload to `/images/team/`:

- Use descriptive names: `john-smith.jpg`
- Recommended: 400x400px square
- Professional headshots

## 📐 Image Specifications

### Formats

- **Logos:** SVG (preferred) or PNG with transparency
- **Photos:** JPG or WebP
- **Graphics:** PNG for transparency, JPG for photos

### Sizes

| Type | Recommended Size | Max File Size |
|------|------------------|---------------|
| Logo | 640x240px (or aspect) | 50KB |
| Hero Image | 1920x1080px | 200KB |
| Blog Featured | 1200x630px | 150KB |
| OG Image | 1200x630px | 200KB |
| Team Photo | 400x400px | 100KB |

### Optimization

- Compress images before uploading
- Use WebP format where possible (better compression)
- Provide 2x versions for retina displays (optional)
- Keep total page weight under 2MB

## 🔧 Tools for Optimization

- **TinyPNG** - https://tinypng.com (compress PNG/JPG)
- **Squoosh** - https://squoosh.app (advanced compression)
- **SVGOMG** - https://jakearchibald.github.io/svgomg/ (optimize SVG)

## ✅ Setup Checklist

Before launching:

- [ ] Logo (light version) uploaded
- [ ] Logo (dark version) uploaded
- [ ] Logos updated in config files
- [ ] Default OG image created (1200x630px)
- [ ] Blog default image created
- [ ] All images compressed/optimized
- [ ] Config files updated with correct paths

## 🎯 Naming Conventions

- Use **kebab-case**: `my-image-name.jpg`
- Be descriptive: `hero-homepage-2025.jpg` not `img1.jpg`
- Include size for variants: `logo-640x240.png`
- Match blog slugs: `post-slug-name.jpg`

## 🚀 Quick Start

1. **Upload logos first** (most important!)
2. Create and upload default OG image
3. Update `src/config/site.config.ts` with logo paths
4. Update `src/config/images.config.ts` if using mascot/character
5. Add blog images as you create posts

## 💡 Tips

- **Alt text matters:** Always provide descriptive alt text in code
- **Social sharing:** Test OG images at https://www.opengraph.xyz/
- **Accessibility:** Ensure logos have good contrast
- **Brand consistency:** Use the same logo style across all variations
- **Legal:** Ensure you have rights to use all images

---

**Need help?** See `docs/IMAGE_GUIDE.md` for detailed guidelines (if available)

