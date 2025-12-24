# Design System — Claims Centre

**Source:** myclaimscentre.co.uk  
**Extracted:** 2025-12-17  
**Status:** Active Design Reference

---

## Overview

**Aesthetic:** Friendly, Trustworthy, Soft, Approachable  
**Energy:** Calm but action-oriented  
**Mode:** Light  
**Voice:** Reassuring, clear, benefit-led ("stress free")

---

## Colors — Backgrounds

| **Token** | **Value** | **Usage** |
|-----------|-----------|-----------|
| `--color-bg-primary` | #FFFFFF | Main page background |
| `--color-bg-secondary` | #FFF8F4 | Subtle accent background (blobs, hero shapes) |
| `--color-bg-tertiary` | #F3F4F6 | Inputs, recessed areas |
| `--color-bg-notification` | #5D2C89 | Top notification bar |

---

## Colors — Text

| **Token** | **Value** | **Usage** |
|-----------|-----------|-----------|
| `--color-text-primary` | #2D2D2D | Headings, main content |
| `--color-text-secondary` | #555555 | Body text, subheaders |
| `--color-text-brand` | #5D2C89 | Navigation links, brand text |
| `--color-text-inverse` | #FFFFFF | Text on buttons/notification bar |

---

## Colors — Brand and Accents

| **Token** | **Value** | **Usage** |
|-----------|-----------|-----------|
| `--color-primary` | #FFAB4A | Primary CTA (Solid fallback) |
| `--color-primary-gradient-start` | #FFBF66 | Button Gradient Top |
| `--color-primary-gradient-end` | #FF9E36 | Button Gradient Bottom |
| `--color-secondary` | #5D2C89 | Login button, Checkmarks, Brand elements |
| `--color-secondary-hover` | #451E66 | Secondary hover state |

---

## Colors — Semantic

| **Token** | **Value** | **Usage** |
|-----------|-----------|-----------|
| `--color-success` | #00B67A | Trustpilot star, success states |
| `--color-info` | #5D2C89 | Brand information |

---

## Colors — Borders

| **Token** | **Value** | **Usage** |
|-----------|-----------|-----------|
| `--color-border-subtle` | #E5E7EB | Input borders, dividers |
| `--color-border-brand` | #5D2C89 | Active states or brand highlights |

---

## Typography

### Fonts

| **Token** | **Value** |
|-----------|-----------|
| `--font-family-sans` | 'Nunito', 'Varela Round', system-ui, sans-serif |
| `--font-family-display` | 'Nunito', 'Varela Round', system-ui, sans-serif |

*The typeface is rounded and geometric (Nunito or Varela Round)*

### Sizes

| **Token** | **Value** | **Px** |
|-----------|-----------|--------|
| `--text-xs` | 0.75rem | 12px |
| `--text-sm` | 0.875rem | 14px |
| `--text-base` | 1rem | 16px |
| `--text-lg` | 1.125rem | 18px |
| `--text-xl` | 1.25rem | 20px |
| `--text-2xl` | 1.5rem | 24px |
| `--text-3xl` | 2rem | 32px |
| `--text-4xl` | 2.5rem | 40px |
| `--text-5xl` | 3.25rem | 52px |

### Weights

| **Token** | **Value** | **Usage** |
|-----------|-----------|-----------|
| `--font-weight-normal` | 400 | Body text |
| `--font-weight-medium` | 500 | Navigation |
| `--font-weight-bold` | 700 | Headings, emphasis |

### Line Heights

| **Token** | **Value** | **Usage** |
|-----------|-----------|-----------|
| `--leading-tight` | 1.1 | Headings |
| `--leading-normal` | 1.5 | Body text |

---

## Spacing

| **Token** | **Value** | **Px** | **Usage** |
|-----------|-----------|--------|-----------|
| `--space-2` | 0.5rem | 8px | Button padding Y |
| `--space-3` | 0.75rem | 12px | Compact gaps |
| `--space-4` | 1rem | 16px | Icon gaps |
| `--space-6` | 1.5rem | 24px | Button padding X |
| `--space-8` | 2rem | 32px | Nav item spacing |
| `--space-12` | 3rem | 48px | Section gaps |
| `--space-20` | 5rem | 80px | Hero spacing |

---

## Borders

### Radius

| **Token** | **Value** | **Usage** |
|-----------|-----------|-----------|
| `--radius-sm` | 0.25rem | 4px |
| `--radius-md` | 0.5rem | 8px |
| `--radius-lg` | 0.75rem | 12px |
| `--radius-xl` | 1rem | 16px |

**Note:** NOT fully pill-shaped, but soft and rounded.

### Width

| **Token** | **Value** |
|-----------|-----------|
| `--border-width-default` | 1px |

---

## Shadows

| **Token** | **Value** | **Usage** |
|-----------|-----------|-----------|
| `--shadow-none` | none | Flat elements |
| `--shadow-sm` | 0 1px 2px rgb(0 0 0 / 0.05) | Minimal depth |
| `--shadow-md` | 0 4px 6px rgb(0 0 0 / 0.1) | Cards |
| `--shadow-button` | 0 4px 14px 0 rgba(255, 171, 74, 0.39) | Orange button glow |

---

## Visual Assets

### Iconography
- **Style:** Solid/Filled shapes
- **Color:** Primary Purple (#5D2C89)
- **Examples:** Checkmark, User Group icon

### Imagery
- **Style:** 3D Rendered Character (Cartoon Fox)
- **Vibe:** Friendly, modern, "Pixar-style"
- **Background Elements:** Soft, large circular gradients (Peach/Orange) behind text

---

## Copy Style Rules

- **Tone:** Reassuring, Friendly, Simplistic
- **Headlines:** Benefit-driven ("We make your refund stress free")
- **Emphasis:** Use bold weight for key value props ("stress free")
- **CTAs:** Action-oriented, short verbs ("Start Refund", "Login")
- **Capitalization:** Sentence case for headlines; Title Case for buttons

---

## Component Patterns

### Primary Button (Hero)

```css
background: linear-gradient(180deg, #FFBF66 0%, #FF9E36 100%);
color: #FFFFFF;
padding: 0.75rem 2rem;
border-radius: 0.75rem;
font-weight: 700;
box-shadow: 0 4px 14px 0 rgba(255, 171, 74, 0.39);
```

### Secondary Button (Header "Login")

```css
background: #5D2C89;
color: #FFFFFF;
padding: 0.5rem 1.5rem;
border-radius: 0.25rem;
font-weight: 500;
```

### Navigation Link

```css
color: #5D2C89;
font-weight: 500;
text-decoration: none;
```

```css
/* Hover */
text-decoration: underline;
```

### Alert Bar

```css
background: #5D2C89;
color: #FFFFFF;
font-size: 0.75rem; /* or 0.875rem */
width: 100%;
```

---

## Design Checklist

Before committing any UI code, verify:

- [ ] Primary buttons use Orange Gradient (#FFBF66 → #FF9E36)
- [ ] Navigation links are Purple (#5D2C89)
- [ ] Font family is set to Nunito/Varela Round
- [ ] Backgrounds include subtle peach accent (#FFF8F4)
- [ ] Button corners have minimum 8px radius (not sharp)
- [ ] Primary buttons have orange glow shadow
- [ ] Text maintains reassuring, benefit-led tone
- [ ] Layout uses generous whitespace (stress-free aesthetic)

---

## Implementation Notes

### CSS Variables Setup

Add to your global CSS:

```css
:root {
  /* Backgrounds */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #FFF8F4;
  --color-bg-tertiary: #F3F4F6;
  --color-bg-notification: #5D2C89;
  
  /* Text */
  --color-text-primary: #2D2D2D;
  --color-text-secondary: #555555;
  --color-text-brand: #5D2C89;
  --color-text-inverse: #FFFFFF;
  
  /* Brand */
  --color-primary: #FFAB4A;
  --color-primary-gradient-start: #FFBF66;
  --color-primary-gradient-end: #FF9E36;
  --color-secondary: #5D2C89;
  --color-secondary-hover: #451E66;
  
  /* Semantic */
  --color-success: #00B67A;
  
  /* Borders */
  --color-border-subtle: #E5E7EB;
  --color-border-brand: #5D2C89;
  
  /* Typography */
  --font-family-sans: 'Nunito', 'Varela Round', system-ui, sans-serif;
  
  /* Shadows */
  --shadow-button: 0 4px 14px 0 rgba(255, 171, 74, 0.39);
}
```

### Tailwind Integration

If using Tailwind CSS, extend your config:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          subtle: '#FFF8F4',
          notification: '#5D2C89',
        },
        primary: {
          DEFAULT: '#FFAB4A',
          gradient: {
            start: '#FFBF66',
            end: '#FF9E36',
          },
        },
        brand: {
          DEFAULT: '#5D2C89',
          dark: '#451E66',
        },
        text: {
          primary: '#2D2D2D',
          secondary: '#555555',
          brand: '#5D2C89',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'Varela Round', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'button': '0 4px 14px 0 rgba(255, 171, 74, 0.39)',
      },
    },
  },
}
```

---

**Last Updated:** 2025-12-17


