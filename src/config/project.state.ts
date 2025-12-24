/**
 * Project State Configuration
 * 
 * This file tracks the current setup progress and controls which AI agent is active.
 * 
 * IMPORTANT: The AI reads this file to determine its behavior mode.
 */

export const projectState = {
  version: "1.0.0",
  mode: "build" as "setup" | "build",
  setupComplete: true,
  siteConfigured: true,
  themeConfigured: true,
  lastUpdated: "2025-12-17T12:00:00Z",
}

/**
 * Mode Descriptions:
 * 
 * - "setup": Initial configuration mode
 *   → AI will run Setup Agent to collect business info, branding, etc.
 *   → Writes to site.config.ts and theme.config.ts
 *   → Changes to "build" mode when complete
 * 
 * - "build": Content creation mode
 *   → AI can run Content Wizard (plan pages) or Page Builder (create pages)
 *   → Assumes all configuration files are ready
 *   → Enforces template and design locks
 */



