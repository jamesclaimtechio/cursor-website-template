# Content Wizard

<aside>
📋

**Agent Doc:** This file tells Cursor how to plan content with users. Copy to `/docs/agents/content-wizard.md`

</aside>

# Content Wizard

## Purpose

Help users plan page content before building. Ensure content fits the template structure. Get explicit approval before assembling pages.

---

## Trigger

Activated when:

- User types `add page`
- OR user describes content they want to add
- AND `projectState.mode === "build"`

---

## Flow

### Step 1: Identify Page Type

```
What kind of page do you want to create?

A) Landing Page — Your homepage or a marketing page
B) About Page — Tell your story, show your team
C) Services Page — Detail what you offer
D) Blog Post — Article or content piece  
E) Contact Page — How to reach you

Or describe what you need and I'll suggest the best template.
```

**Map selection to template:**

- A → Landing template
- B → About template
- C → Services template
- D → Blog template
- E → Contact template

### Step 2: Content Collection

Based on template, ask for required content. Show what sections are available.

### For Landing Page:

```
Great! A landing page uses these sections:

**Required:**
- Hero (headline, subheadline, CTA button)
- Features (3-6 key benefits/features)
- CTA (call-to-action to convert visitors)

**Optional:**
- Testimonials
- Process (how it works)
- FAQ

Let's start with the Hero section.

Q1: What's your main headline? (max 60 characters)
    This is the first thing visitors see. Make it clear and compelling.
    
    Example: "Build Websites Without Writing Code"
```

Continue for each required section...

```
Q2: What's your supporting subheadline? (max 160 characters)
    Expand on your headline. What's the key benefit?

Q3: What should your main CTA button say?
    Example: "Get Started", "Book a Demo", "Learn More"

Q4: Where should the CTA link to?
    Example: /contact, /services, https://calendly.com/you
```

### For Features:

```
Now let's add your key features or benefits.

For each feature, I need:
- A short title (2-4 words)
- A description (1-2 sentences)
- An optional icon (I'll suggest one based on the content)

Feature 1:
Q5: Title?
Q6: Description?

[Repeat for 3-6 features]
```

### For About Page:

```
Your About page tells your story. I need:

Q1: Your origin story headline
    Example: "Why We Started [Company Name]"

Q2: Your story (2-3 paragraphs)
    How did you get here? What drives you?

Q3: Team members to feature (optional)
    For each: Name, Role, Short bio, Photo URL (optional)
```

### Step 3: SEO Info

```
Let's make sure this page is SEO-friendly.

Q: Page title for search results (50-60 chars)
   Format: "[Page Topic] | [Your Business Name]"
   Example: "Professional Web Design Services | Acme Corp"

Q: Meta description (150-160 chars)
   Summarize the page. Include a reason to click.
   Example: "Discover how our web design services help small businesses grow online. Fast, affordable, and SEO-optimized. Get a free quote today."
```

### Step 4: Content Review

Show the complete content plan:

```
📄 **Page Plan: [Page Type]**

**SEO:**
- Title: [title]
- Description: [description]
- URL: /[slug]

**Sections:**

1. **Hero**
   - Headline: "[headline]"
   - Subheadline: "[subheadline]"
   - CTA: [label] → [href]

2. **Features**
   - [Feature 1 title]: [description]
   - [Feature 2 title]: [description]
   - [Feature 3 title]: [description]

3. **CTA**
   - Headline: "[headline]"
   - Button: [label] → [href]

---

Does this look right? 
- Type 'yes' to build this page
- Tell me what to change
- Type 'cancel' to discard
```

### Step 5: Approval Gate

**CRITICAL:** Do not proceed to Page Builder without explicit approval.

On "yes":

```
✅ Content approved! Building your page now...

[Hand off to Page Builder agent]
```

On changes requested:

- Return to relevant question
- Update the plan
- Show updated review

On "cancel":

```
No problem! The page plan has been discarded. 

What would you like to do instead?
```

---

## Alternative: User Provides Content

If user pastes existing content:

```
I see you have content ready. Let me structure it for you.

[Analyze content]
[Map to appropriate template]
[Suggest section breakdown]

Here's how I'd structure this content:
[Show structure]

Should I adjust anything before we build?
```

---

## Alternative: Generate Content

If user asks for content suggestions:

```
I can help draft content! To write something relevant, I need to know:

Q1: What specific product/service is this page for?
Q2: Who is your target audience?
Q3: What action do you want visitors to take?

[Generate content based on answers]
[Show for approval]
[Iterate until approved]
```

---

## Constraints

- Always show content plan before building
- Never assume — ask if unclear
- Content must fit section component props (check BUILD_STATE.md)
- Enforce character limits for SEO fields