# Claims Centre Website

A modern, conversion-optimized website for Claims Centre built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 3. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header & Footer
│   └── page.tsx             # Homepage
├── components/
│   ├── layout/              # Layout components
│   │   ├── header.tsx       # Navigation header
│   │   └── footer.tsx       # Site footer
│   ├── sections/            # Page sections
│   │   ├── hero.tsx         # Hero section
│   │   ├── trust-bar.tsx    # Trust indicators
│   │   ├── services.tsx     # Services grid
│   │   ├── process.tsx      # How it works (3 steps)
│   │   ├── benefits.tsx     # Why choose us
│   │   ├── testimonials.tsx # Customer testimonials
│   │   ├── cta.tsx          # Call-to-action section
│   │   └── faq.tsx          # FAQ accordion
│   └── ui/                  # Base UI components
│       ├── button.tsx       # Button component
│       └── container.tsx    # Container component
├── config/                  # Configuration files
│   ├── site.config.ts       # Site info, navigation
│   ├── theme.config.ts      # Design tokens
│   ├── seo.config.ts        # SEO defaults
│   ├── images.config.ts     # Image catalog
│   └── project.state.ts     # Project state
├── lib/
│   └── utils.ts             # Utility functions
└── styles/
    └── globals.css          # Global styles + Tailwind
```

---

## 🎨 Design System

### Colors

- **Primary (Orange Gradient):** #FFBF66 → #FF9E36
- **Secondary (Purple):** #5D2C89
- **Text Primary:** #2D2D2D
- **Text Secondary:** #555555
- **Background Accent:** #FFF8F4

### Typography

- **Font:** Nunito (rounded, friendly)
- **Headings:** Bold (700)
- **Body:** Normal (400)

### Components

All components follow the design system defined in:
- `src/config/theme.config.ts`
- `docs/DESIGN_SYSTEM.md`

---

## 📸 Images

All images are organized in `public/images/`:
- **Logo:** `/images/logo.png`
- **Mascot:** `/images/mascot/` (22 fox variations)

Reference images using `src/config/images.config.ts`:

```tsx
import { images } from '@/config/images.config'

<Image {...images.mascot.hero.refundCheck} />
```

See `docs/IMAGE_GUIDE.md` for complete usage guide.

---

## 🏗️ Homepage Sections

1. **Hero** - Main value proposition with CTA
2. **Trust Bar** - Quick stats and trust indicators
3. **Services** - 4 service cards (Car Finance, PPI, etc.)
4. **Process** - 3-step how it works
5. **Benefits** - 6 reasons to choose Claims Centre
6. **Testimonials** - 3 customer success stories
7. **CTA** - Final conversion section
8. **FAQ** - 5 common questions

---

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Nunito)
- **Images:** Next.js Image Optimization

---

## 📚 Documentation

- `docs/BUILD_STATE.md` - Framework specifications
- `docs/DESIGN_SYSTEM.md` - Complete design tokens
- `docs/IMAGE_GUIDE.md` - Image usage guide
- `docs/HOMEPAGE_CONTENT.md` - Content structure

---

## 🎯 Key Features

✅ **Conversion Optimized** - Multiple CTAs, clear value props  
✅ **Mobile Responsive** - Works perfectly on all devices  
✅ **SEO Ready** - Proper meta tags, headings, structure  
✅ **Performance** - Next.js optimization, image lazy loading  
✅ **Accessible** - Semantic HTML, proper alt text  
✅ **Brand Consistent** - Uses design system throughout  

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static files:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

---

## 📞 Support

For questions or issues, refer to the documentation in the `docs/` folder or check the inline comments in the code.

---

**Built with ❤️ for Claims Centre**


