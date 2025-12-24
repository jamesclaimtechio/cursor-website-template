# Documentation Guide

## 📁 File Structure

```
docs/
├── README.md                 ← You are here
├── BUILD_STATE.md            ← Complete framework specification
├── Section_Library.md        ← All section component specs
├── overrides.log             ← Log of rule exceptions
└── agents/                   ← AI agent instruction files
    ├── setup-agent.md        ← Initial configuration wizard
    ├── content-wizard.md     ← Content planning assistant
    └── page-builder.md       ← Page assembly assistant
```

---

## 🎯 How the Framework Works

### 1. **Cursor Rules** (Always Active)
**File:** `.cursor/rules/.cursorrules`

This is the main AI behavior controller. It's **always active** when you're working in this project. It:
- Defines 6 global rules (Component Lock, Design Token Lock, etc.)
- Routes to the appropriate agent based on `project.state.ts`
- Enforces consistency across your entire site
- Prevents common mistakes with built-in pitfalls guide

### 2. **Project State** (Mode Controller)
**File:** `src/config/project.state.ts`

Controls which agent is active:
- `mode: "setup"` → Runs Setup Agent
- `mode: "build"` → Runs Content Wizard or Page Builder

The AI checks this file to determine what it should do.

### 3. **Agent Instructions** (Specialized Workflows)
**Folder:** `docs/agents/`

Each agent has specific instructions for its task:

| Agent | Trigger | Purpose |
|-------|---------|---------|
| **Setup Agent** | `mode: "setup"` or user types `start` | Collect business info, configure branding |
| **Content Wizard** | User types `add page` | Plan page content, get approval |
| **Page Builder** | Content approved | Assemble sections into working pages |

---

## 🚀 Using the Framework

### First Time Setup

1. **Start the setup wizard:**
   ```
   Type: start
   ```
   The AI will guide you through 13 questions to configure your site.

2. **After setup completes:**
   - `project.state.ts` changes to `mode: "build"`
   - You can now create pages!

### Creating Pages

1. **Plan your content:**
   ```
   Type: add page
   ```
   Content Wizard helps you organize section content.

2. **Review and approve:**
   - AI shows you a preview
   - Type `yes` to approve

3. **Page is built:**
   - Page Builder creates the file
   - Adds metadata and schema
   - Uses only pre-built section components

---

## 📖 Reference Documentation

### BUILD_STATE.md
- Complete project structure
- All config file schemas
- Section component specifications
- Page template rules
- Enforcement rules (Template Lock, Section Lock)

### Section_Library.md
- Detailed specs for all 8 section components
- Props interfaces for each section
- Usage examples
- Visual structure diagrams
- Instructions for adding new sections

---

## 🔒 The "Lock" System

The framework uses three locks to ensure consistency:

### 1. **Template Lock**
- Each page type has ONE fixed structure
- All blog posts use the same section order
- All service pages use the same layout
- Prevents "snowflake" pages

### 2. **Section Design Lock**
- Each section renders identically everywhere
- No layout variants (no `columns={2}`, no `layout="carousel"`)
- Only CONTENT changes between instances
- Creates predictable, professional feel

### 3. **Component Lock**
- Pages must use pre-built section components
- No custom HTML/JSX at section level
- AI must get permission to create new components
- Prevents design drift

---

## 🛠️ Override System

If you need to break a rule:

1. User types: `override [rule-name]`
2. AI logs it in `docs/overrides.log`
3. AI proceeds with override

**Example override log entry:**
```
[2025-12-17 15:30:00] OVERRIDE: template-lock
Page: /services/custom
Reason: Client requested unique presentation page
Status: Approved by user
```

---

## 💡 Tips

- **Read BUILD_STATE.md first** to understand the complete system
- **Section_Library.md is your component reference** when building
- **Agent files** are what the AI reads during each workflow
- **The .cursorrules file** is always active and controls everything
- **Don't edit project.state.ts manually** unless resetting the framework

---

## 🎓 For Developers

If you're new to this project:

1. Read `BUILD_STATE.md` (20 min) - understand the structure
2. Skim `Section_Library.md` (10 min) - see what components exist
3. Look at `.cursor/rules/.cursorrules` (5 min) - see the rules
4. Type `start` and let the AI guide you!

---

## 📝 Notes

- All documentation was generated from Notion exports, then refined
- The `BUILD_STATE md/` folder contains the original exports (can be deleted)
- This framework is opinionated by design - constraints enable consistency
- Breaking rules is allowed with explicit overrides - just ask!



