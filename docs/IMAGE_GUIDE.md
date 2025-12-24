# Image Assets Guide

**Last Updated:** 2025-12-17  
**Total Images:** 23 (1 logo + 22 mascot variations)

---

## 📍 Directory Structure

```
public/
└── images/
    ├── logo.png                    # Claims Centre logo
    └── mascot/                     # Fox mascot images (22 files)
        ├── fox-hero-*.jpeg/png     # Main hero images (4)
        ├── fox-cta-*.png           # Call-to-action images
        ├── fox-success-*.png       # Success/celebration images
        ├── fox-driving.png         # Contextual activity
        ├── fox-pose-*.png          # Additional poses (8)
        └── Untitled-design-*.png   # Design variations (6)
```

---

## 🎯 Primary Images (Recommended Usage)

### Homepage Hero
**Best Choice:** `fox-hero-refund-check.jpeg`
- Fox in suit holding a refund check
- Perfect for main hero section
- Conveys success and professionalism

```tsx
import { images } from '@/config/images.config'

<Image 
  src={images.mascot.hero.refundCheck.src}
  alt={images.mascot.hero.refundCheck.alt}
  width={1024}
  height={1024}
/>
```

### How It Works Section
**Best Choice:** `fox-hero-calculator.jpeg`
- Fox with calculator (calculating refunds)
- Great for process/explanation sections
- Shows the "calculation" aspect

### Car Finance Claims
**Best Choice:** `fox-hero-dealership.jpeg`
- Fox at Vauxhall dealership with car
- Perfect for automotive-related claims
- Real-world context

### About/Professional Sections
**Best Choice:** `fox-hero-showroom.png`
- Fox in modern car showroom
- Clean, professional setting
- Good for credibility sections

### Call-to-Action Sections
**Best Choice:** `fox-cta-refund-sign.png`
- Fox holding "REFUND!" sign
- High energy, excited expression
- Perfect for conversion points

### Success/Results Pages
**Best Choice:** `fox-success-money.png`
- Fox celebrating with money in both hands
- Shows the end result/success
- Great for testimonials, case studies

### Driving/Car Context
**Best Choice:** `fox-driving.png`
- Fox driving/in driver's seat
- Use for car-ownership context
- Good for "take control" messaging

---

## 🎨 Image Selection Strategy

### By Page Type

| Page | Primary Image | Secondary Image |
|------|--------------|-----------------|
| Homepage (/) | `fox-hero-refund-check` | `fox-cta-refund-sign` |
| How It Works | `fox-hero-calculator` | `fox-success-money` |
| Car Finance Claims | `fox-hero-dealership` | `fox-driving` |
| About | `fox-hero-showroom` | `fox-hero-calculator` |
| Contact | `fox-cta-refund-sign` | `fox-hero-showroom` |
| Success/Thank You | `fox-success-money` | `fox-cta-refund-sign` |

### By Section Type

| Section | Image Choice | Reason |
|---------|-------------|--------|
| Hero | `fox-hero-refund-check` | Shows end benefit |
| Features | `fox-hero-calculator` | Shows process |
| Process/Steps | `fox-hero-calculator` | Analytical context |
| Testimonials | `fox-success-money` | Celebrates results |
| CTA | `fox-cta-refund-sign` | High energy, action-oriented |
| Team/About | `fox-hero-showroom` | Professional, credible |
| Car-specific | `fox-hero-dealership` | Relevant context |

---

## 💻 Usage in Code

### Option 1: Using images.config.ts (Recommended)

```tsx
import { images, commonImages } from '@/config/images.config'
import Image from 'next/image'

// Using specific image
<Image 
  src={images.mascot.hero.refundCheck.src}
  alt={images.mascot.hero.refundCheck.alt}
  width={images.mascot.hero.refundCheck.width}
  height={images.mascot.hero.refundCheck.height}
  priority
/>

// Using common shortcuts
<Image 
  src={commonImages.defaultHero.src}
  alt={commonImages.defaultHero.alt}
  width={commonImages.defaultHero.width}
  height={commonImages.defaultHero.height}
/>
```

### Option 2: Direct Path (Not Recommended)

```tsx
<Image 
  src="/images/mascot/fox-hero-refund-check.jpeg"
  alt="Fox mascot with refund check"
  width={1024}
  height={1024}
/>
```

### Option 3: Using Helper Function

```tsx
import { images, getImageProps } from '@/config/images.config'

<Image {...getImageProps(images.mascot.hero.refundCheck)} />
```

---

## 🎭 Character Personality Guide

Your fox mascot represents:

### Visual Traits
- **Eyes:** Bright blue, large, expressive
- **Expression:** Friendly, warm smile
- **Outfit:** Professional business suit (navy/dark)
- **Style:** Pixar-quality 3D render
- **Fur:** Orange with white chest/face
- **Overall Vibe:** Trustworthy, approachable, professional yet friendly

### Emotional Context by Image

| Image | Emotion/Message | When to Use |
|-------|----------------|-------------|
| `fox-hero-refund-check` | Satisfaction, success | "We got your money!" |
| `fox-hero-calculator` | Focused, analytical | "We calculate carefully" |
| `fox-hero-dealership` | Confident, professional | "We understand cars" |
| `fox-cta-refund-sign` | Excited, enthusiastic | "Start your claim now!" |
| `fox-success-money` | Celebration, joy | "Look what we achieved!" |
| `fox-driving` | Control, ownership | "Take charge of your claim" |

---

## 📐 Image Specifications

### Logo
- **Format:** PNG with transparency
- **Dimensions:** 640×240px
- **Colors:** Purple (#5D2C89) + Orange (#FFAB4A)
- **Usage:** Navigation header, footer

### Mascot Images
- **Format:** JPEG or PNG
- **Dimensions:** 1024×1024px (square)
- **Background:** Most have gradient backgrounds (blue/teal)
- **File Sizes:** ~100-300KB each
- **Optimization:** Should be optimized for web (use Next.js Image component)

---

## ♿ Accessibility Requirements

### Alt Text Guidelines

All images MUST have descriptive alt text:

```tsx
// ✅ GOOD
alt="Friendly fox mascot holding a refund check, smiling"

// ❌ BAD
alt="Fox"
alt="Image"
alt=""
```

### Alt Text by Image Category

- **Hero images:** "Friendly fox mascot [doing action], [context]"
- **CTA images:** "Fox mascot [emotion] with [object]"
- **Success images:** "Fox celebrating [specific achievement]"
- **Logo:** "Claims Centre Logo"

---

## 🎨 Design Integration Tips

### Background Pairing

The fox images have blue/teal gradient backgrounds. Pair with:

- **White or Peach (#FFF8F4)** sections for contrast
- Avoid placing on purple backgrounds (clashes)
- Use soft shadows to lift images off the page

### Sizing Recommendations

| Location | Recommended Size | CSS |
|----------|-----------------|-----|
| Hero Section | 400-600px wide | `w-full max-w-lg` |
| Feature Cards | 200-300px wide | `w-64 md:w-80` |
| Testimonial Icons | 80-120px wide | `w-20 md:w-24` |
| CTA Sections | 300-500px wide | `w-full max-w-md` |

### Positioning

- **Hero:** Right side on desktop, above text on mobile
- **Features:** Above or beside text
- **CTA:** Centered or right-aligned
- **Process Steps:** Inline with step indicators

---

## 🚀 Performance Best Practices

### Next.js Image Component

Always use Next.js `<Image>` component:

```tsx
import Image from 'next/image'

<Image
  src="/images/mascot/fox-hero-refund-check.jpeg"
  alt="Fox mascot with refund check"
  width={1024}
  height={1024}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Loading Strategy

- **Above the fold:** Use `priority` prop
- **Below the fold:** Lazy load (default)
- **Large images:** Use `placeholder="blur"`

### Responsive Images

```tsx
<Image
  src="/images/mascot/fox-hero-refund-check.jpeg"
  alt="Fox mascot"
  width={1024}
  height={1024}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## 📝 Content Checklist

When adding a new page/section:

- [ ] Choose appropriate mascot image from guide
- [ ] Use `images.config.ts` for image reference
- [ ] Write descriptive alt text
- [ ] Set proper width/height attributes
- [ ] Use `priority` for above-fold images
- [ ] Test on mobile and desktop
- [ ] Verify image aligns with brand personality

---

## 🔄 Additional Images Available

You have 14 additional mascot variations in:
- `fox-pose-[number].png` (8 files)
- `Untitled-design-[number].png` (6 files)

These are available in `/public/images/mascot/` and cataloged in `images.config.ts` under `mascot.poses` and `mascot.designs`.

**When to use:** If you need variety or specific poses not covered by the primary images.

---

## 💡 Quick Reference

### Import Statement
```tsx
import { images, commonImages } from '@/config/images.config'
```

### Common Shortcuts
```tsx
commonImages.defaultHero      // fox-hero-refund-check
commonImages.ctaImage         // fox-cta-refund-sign  
commonImages.successImage     // fox-success-money
commonImages.professionalImage // fox-hero-showroom
commonImages.carImage         // fox-hero-dealership
```

### Logo Usage
```tsx
import { images } from '@/config/images.config'

<Image
  src={images.logo.src}
  alt={images.logo.alt}
  width={200}  // Scaled down from 640
  height={75}  // Scaled down from 240
/>
```

---

## 🎯 Summary

You have a complete set of professional, friendly mascot images that:
- ✅ Match your brand aesthetic (friendly, trustworthy, approachable)
- ✅ Cover all major use cases (hero, CTA, success, car-related)
- ✅ Are properly organized and cataloged
- ✅ Have TypeScript definitions for easy use
- ✅ Follow accessibility best practices

**Next Steps:**
1. Use these images when building section components
2. Reference this guide when choosing images for new pages
3. Always use the `images.config.ts` import for consistency


