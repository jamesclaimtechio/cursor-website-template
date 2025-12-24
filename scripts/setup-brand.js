#!/usr/bin/env node

/**
 * BRAND SETUP AUTOMATION SCRIPT
 * ==============================
 * 
 * CURSOR AI: Run this script after gathering brand information from user.
 * 
 * Usage:
 *   node scripts/setup-brand.js
 * 
 * Or add to package.json:
 *   "setup": "node scripts/setup-brand.js"
 *   
 * Then run:
 *   npm run setup
 * 
 * This script will:
 * 1. Prompt for brand information
 * 2. Replace {{PLACEHOLDERS}} in config files
 * 3. Update package.json with brand name
 * 4. Create a setup completion summary
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promisify question
function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

// Main setup function
async function setupBrand() {
  console.log('\n🚀 BRAND SETUP WIZARD\n');
  console.log('This will configure your website with your brand information.\n');
  
  // Gather brand information
  const brandInfo = {
    BRAND_NAME: await question('1. Brand Name: '),
    COMPANY_LEGAL_NAME: await question('2. Company Legal Name: '),
    COMPANY_NUMBER: await question('3. Company Registration Number: '),
    BRAND_TAGLINE: await question('4. Brand Tagline: '),
    BRAND_DESCRIPTION: await question('5. Brand Description (1-2 sentences): '),
    FCA_NUMBER: await question('6. FCA Number (or press Enter if not applicable): '),
    CONTACT_EMAIL: await question('7. Contact Email: '),
    CONTACT_PHONE: await question('8. Contact Phone (or press Enter to skip): '),
    BUSINESS_ADDRESS: await question('9. Business Address: '),
    PRIMARY_COLOR: await question('10. Primary Brand Color (hex, e.g., #FFAB4A): '),
    SECONDARY_COLOR: await question('11. Secondary Brand Color (hex): '),
    LOCALE: await question('12. Locale (e.g., en_GB, en_US): ') || 'en_GB',
  };
  
  // Generate derivative values
  brandInfo.VALUE_PROPOSITION = brandInfo.BRAND_TAGLINE;
  brandInfo.BG_ACCENT = lightenColor(brandInfo.PRIMARY_COLOR, 0.95);
  brandInfo.PRIMARY_LIGHT = lightenColor(brandInfo.PRIMARY_COLOR, 0.15);
  brandInfo.PRIMARY_DARK = darkenColor(brandInfo.PRIMARY_COLOR, 0.15);
  brandInfo.SECONDARY_DARK = darkenColor(brandInfo.SECONDARY_COLOR, 0.15);
  brandInfo.PRIMARY_SHADOW = hexToRgba(brandInfo.PRIMARY_COLOR, 0.39);
  
  console.log('\n✅ Information gathered! Updating config files...\n');
  
  // Files to update
  const configFiles = [
    'src/config/site.config.ts',
    'src/config/theme.config.ts',
    'src/config/seo.config.ts',
    'src/config/images.config.ts',
  ];
  
  // Replace placeholders in each file
  for (const file of configFiles) {
    const filePath = path.join(process.cwd(), file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Skipping ${file} (not found)`);
      continue;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all placeholders
    for (const [key, value] of Object.entries(brandInfo)) {
      const placeholder = `{{${key}}}`;
      content = content.replace(new RegExp(placeholder, 'g'), value);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${file}`);
  }
  
  // Update package.json
  const packagePath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  packageJson.name = brandInfo.BRAND_NAME.toLowerCase().replace(/\s+/g, '-') + '-website';
  packageJson.description = brandInfo.BRAND_DESCRIPTION;
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');
  console.log(`✅ Updated package.json`);
  
  // Create setup completion summary
  const summary = `
╔════════════════════════════════════════════════════════════╗
║                    SETUP COMPLETE! 🎉                      ║
╚════════════════════════════════════════════════════════════╝

Brand: ${brandInfo.BRAND_NAME}
Tagline: ${brandInfo.BRAND_TAGLINE}

✅ Configuration files updated
✅ Brand colors configured
✅ SEO defaults set
✅ Package.json updated

📋 NEXT STEPS:

1. Upload Images
   - Logo (light): /public/images/logo-light.png
   - Logo (dark): /public/images/logo-dark.png
   - Update paths in src/config/site.config.ts

2. Update Remaining Placeholders
   - Check config files for any remaining {{PLACEHOLDERS}}
   - Update navigation structure if needed

3. Add Content
   - Create your first blog post
   - Customize homepage content
   - Update legal pages

4. Deploy
   - Run: npm run build
   - Deploy to Vercel/Railway/etc.

📚 Documentation: docs/🚀 START_HERE.md

🚀 Ready to build! Run: npm run dev
  `;
  
  console.log(summary);
  
  // Save summary to file
  fs.writeFileSync('SETUP_COMPLETE.txt', summary, 'utf8');
  console.log('\n💾 Summary saved to SETUP_COMPLETE.txt\n');
  
  rl.close();
}

// Utility: Lighten a hex color
function lightenColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent * 100);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1).toUpperCase();
}

// Utility: Darken a hex color
function darkenColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent * 100);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;
  return '#' + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1).toUpperCase();
}

// Utility: Convert hex to rgba
function hexToRgba(hex, alpha) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Error handling
process.on('SIGINT', () => {
  console.log('\n\n❌ Setup cancelled by user.');
  rl.close();
  process.exit(0);
});

// Run setup
setupBrand().catch((err) => {
  console.error('\n❌ Error during setup:', err.message);
  rl.close();
  process.exit(1);
});

