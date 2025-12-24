# Setup Agent

<aside>
📋

**Agent Doc:** This file tells Cursor how to run the setup wizard. Copy to `/docs/agents/setup-agent.md`

</aside>

# Setup Agent

## Purpose

Guide the user through initial project configuration. Collect business info, branding, and styling preferences. Write to config files.

---

## Trigger

Activated when:

- User types `start` AND `projectState.mode === "setup"`
- OR `projectState.setupComplete === false`

---

## Flow

### Step 1: Welcome

```
Welcome to the Website Content Framework! 🎉

I'll help you set up your website in a few quick steps. I'll ask about:
1. Your business (name, what you do)
2. Your contact info
3. Your brand colors and style

Ready? Let's start with the basics.
```

### Step 2: Business Info

Ask these questions ONE AT A TIME. Wait for response before next question.

```
Q1: What's the name of your business or project?
Q2: In one sentence, what do you do? (This becomes your tagline)
Q3: Write a 2-3 sentence description of what you offer. (This becomes your default meta description)
```

**Write to:** `src/config/site.config.ts`

```tsx
name: [Q1 answer]
tagline: [Q2 answer]  
description: [Q3 answer]
```

### Step 3: Contact Info

```
Q4: What's your business email?
Q5: Phone number? (optional - type 'skip' to skip)
Q6: Business address? (optional - type 'skip' to skip)
```

**Write to:** `src/config/site.config.ts`

```tsx
email: [Q4 answer]
phone: [Q5 answer or null]
address: [Q6 answer or null]
```

### Step 4: Social Links

```
Q7: Do you have social media profiles to link? 
    Share any that apply (or 'skip'):
    - Twitter/X
    - LinkedIn  
    - Instagram
    - Facebook
```

**Write to:** `src/config/site.config.ts` → `social` object

### Step 5: Brand Colors

```
Now let's set up your brand colors.

Q8: What's your PRIMARY brand color? 
    (This is your main button/accent color. Give me a hex code like #2563eb, or describe it like "bright blue")

Q9: Do you have a SECONDARY color? 
    (For less prominent elements. Hex code or description, or 'skip' for default gray)
```

**If user gives description instead of hex:**

- Convert to appropriate hex code
- Confirm with user: "I'll use [hex] for [description]. Does that look right?"

**Write to:** `src/config/theme.config.ts`

```tsx
colors: {
  primary: [Q8 answer],
  secondary: [Q9 answer or "#64748b"],
  // ... derive other colors from primary
}
```

### Step 6: Typography

```
Q10: What style of typography fits your brand?

A) Modern & Clean (Inter) — Professional, minimal
B) Classic & Trustworthy (Merriweather + Open Sans) — Traditional, readable  
C) Bold & Impactful (Montserrat) — Strong, attention-grabbing
D) Friendly & Approachable (Nunito) — Warm, welcoming
E) Custom — I have specific fonts in mind
```

**If E:** Ask for font names, validate they're available on Google Fonts

**Write to:** `src/config/theme.config.ts` → `fonts` object

### Step 7: Style Preferences

```
Q11: How rounded should corners be?

A) Sharp (0) — Modern, editorial
B) Slightly rounded (0.375rem) — Subtle softness
C) Rounded (0.5rem) — Balanced, friendly
D) Very rounded (1rem) — Soft, approachable
```

```
Q12: How much shadow/depth do you want?

A) None — Flat, minimal
B) Subtle — Light depth
C) Medium — Clear separation
D) Strong — Bold, card-heavy
```

**Write to:** `src/config/theme.config.ts`

### Step 8: Navigation

```
Q13: What pages do you want in your main navigation?

Default suggestion:
- Home
- About
- Services  
- Blog
- Contact

Type 'yes' to use defaults, or list your pages.
```

**Write to:** `src/config/site.config.ts` → `navigation` array

---

## Completion

When all questions answered:

1. Show summary:

```
✅ Setup Complete! Here's your configuration:

**Business:** [name]
**Tagline:** [tagline]
**Primary Color:** [color swatch] [hex]
**Typography:** [font choice]
**Pages:** [navigation list]

Does this look right? Type 'yes' to confirm, or tell me what to change.
```

1. On confirmation, update project state:

```tsx
// src/config/project.state.ts
export const projectState = {
  mode: "build",
  setupComplete: true,
  siteConfigured: true,
  themeConfigured: true,
}
```

1. Transition message:

```
🎉 You're all set! Your website framework is configured.

Now I'm in BUILD mode. You can:
- Type "add page" to plan and create a new page
- Tell me what content you want to add
- Ask me to build out the homepage

What would you like to do first?
```

---

## Error Handling

**If user wants to change an answer:**

- Allow backtracking: "No problem! What would you like to change?"
- Re-ask that specific question
- Update the relevant config file

**If user wants to skip setup:**

- Warn: "Skipping setup will use default values. You can always run 'reset' later to reconfigure."
- Set defaults and mark setupComplete: true