import { BlogPost } from "@/types/blog"

export const customizingYourDesign: BlogPost = {
  slug: "customizing-your-design",
  title: "Customizing Your Website Design: Colors, Fonts, and More",
  excerpt: "Complete guide to customizing the Website Builder template design. Learn how to change colors, fonts, spacing, and make it match your brand perfectly.",
  content: `
Your website should look uniquely yours. This guide shows you how to customize every aspect of the Website Builder template design.

## Understanding the Design System

The template uses a token-based design system. Instead of hardcoding colors and styles everywhere, we use design tokens that you can change in one place.

**Benefits of this approach:**
- Change your entire color scheme in seconds
- Maintain consistency across all pages
- Easy to experiment with different looks
- No need to hunt through files

## Changing Colors

### Primary Color (Buttons and CTAs)

Edit \`src/config/theme.config.ts\`:

\`\`\`typescript
colors: {
  primary: "#3B82F6", // Change to your brand color
  primaryGradient: {
    start: "#60A5FA", // Lighter shade
    end: "#2563EB",   // Darker shade
  },
}
\`\`\`

**Pro tip:** Use a color tool like [Coolors](https://coolors.co) to generate harmonious color schemes.

### Secondary Color (Accents and Brand Elements)

\`\`\`typescript
secondary: "#10B981", // Your accent color
secondaryHover: "#059669", // Darker for hover states
\`\`\`

### Background Colors

\`\`\`typescript
background: {
  primary: "#FFFFFF",   // Main background
  secondary: "#F9FAFB", // Accent sections
  tertiary: "#F3F4F6",  // Inputs, cards
}
\`\`\`

## Changing Fonts

### Using Google Fonts

1. Choose fonts at [Google Fonts](https://fonts.google.com)
2. Update \`src/config/theme.config.ts\`:

\`\`\`typescript
fonts: {
  heading: "'Montserrat', sans-serif",
  body: "'Inter', system-ui, sans-serif",
}
\`\`\`

3. Import in \`src/app/layout.tsx\` if using custom fonts

### Font Sizes

The template includes a pre-tested scale:

\`\`\`typescript
fontSizes: {
  xs: "0.75rem",    // 12px
  sm: "0.875rem",   // 14px
  base: "1rem",     // 16px - body text
  lg: "1.125rem",   // 18px
  xl: "1.25rem",    // 20px
  "2xl": "1.5rem",  // 24px - H3
  "3xl": "2rem",    // 32px - H2
  "4xl": "2.5rem",  // 40px - H1
  "5xl": "3.25rem", // 52px - Hero
}
\`\`\`

## Adjusting Spacing

Need tighter or looser spacing?

\`\`\`typescript
spacing: {
  2: "0.5rem",   // 8px
  4: "1rem",     // 16px
  6: "1.5rem",   // 24px
  8: "2rem",     // 32px
  12: "3rem",    // 48px
  20: "5rem",    // 80px
}
\`\`\`

## Border Radius

Control how rounded your elements are:

\`\`\`typescript
borderRadius: {
  sm: "0.25rem",  // 4px - Subtle
  md: "0.5rem",   // 8px - Moderate
  lg: "0.75rem",  // 12px - Soft
  xl: "1rem",     // 16px - Pronounced
}
\`\`\`

## Advanced Customization

### Component-Specific Styles

Each component can be customized individually. For example, to change button styles, edit \`src/components/ui/button.tsx\`.

### Tailwind Configuration

For deeper customization, edit \`tailwind.config.ts\` to add custom utilities, plugins, or extend the theme.

### Dark Mode

Want to add dark mode? The template structure supports it - you'll need to:
1. Add dark mode variants to theme.config.ts
2. Update components with dark: classes
3. Add a theme toggle component

## Testing Your Changes

After making design changes:

1. Check on mobile (responsive design)
2. Test all interactive elements (buttons, links)
3. Verify contrast ratios (accessibility)
4. Test in different browsers

## Common Design Patterns

### Professional/Corporate
- Primary: Navy blue (#1E40AF)
- Secondary: Gold (#F59E0B)
- Fonts: Montserrat + Inter

### Modern/Tech
- Primary: Purple (#8B5CF6)
- Secondary: Cyan (#06B6D4)
- Fonts: Space Grotesk + Inter

### Friendly/Approachable
- Primary: Orange (#F97316)
- Secondary: Teal (#14B8A6)
- Fonts: Nunito + Open Sans

## Need Help?

Check \`docs/DESIGN_SYSTEM.md\` for complete design token reference and component patterns.
`,
  author: {
    name: "Website Builder",
    role: "Template Documentation",
  },
  publishedAt: "2025-12-24",
  category: "guides",
  tags: ["customization", "design", "theming", "tutorial"],
  featured: true,
  image: {
    src: "/images/blog/customizing-design.jpg",
    alt: "Customizing website design - colors, fonts, and branding guide",
    width: 1200,
    height: 630,
  },
  seo: {
    title: "Customize Your Website Design: Complete Guide | Website Builder",
    description: "Learn how to customize colors, fonts, spacing, and make the Website Builder template match your brand perfectly. Step-by-step design customization guide.",
    keywords: ["website customization", "design system", "brand colors", "custom fonts"],
  },
  compliance: {
    verified: true,
    verifiedBy: "Template Team",
    verifiedDate: "2025-12-24",
    sources: [
      "Design system documentation",
      "Theme configuration guide",
    ],
  },
}

