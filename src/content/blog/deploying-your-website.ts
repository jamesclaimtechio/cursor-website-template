import { BlogPost } from "@/types/blog"

export const deployingYourWebsite: BlogPost = {
  slug: "deploying-your-website",
  title: "Deploying Your Website: Vercel, Railway, and More",
  excerpt: "Ready to go live? Learn how to deploy your Website Builder template to production. Step-by-step guides for Vercel, Railway, and other hosting platforms.",
  content: `
You've customized your template and added content. Now it's time to deploy and go live! This guide covers the most popular deployment options.

## Before You Deploy

### Pre-Deployment Checklist

- [ ] All \`{{PLACEHOLDERS}}\` replaced in config files
- [ ] Logo files uploaded and displaying correctly
- [ ] Contact information accurate
- [ ] At least 1-3 blog posts published
- [ ] Legal pages present
- [ ] Site builds without errors (\`npm run build\`)
- [ ] Tested on mobile devices

### Test Your Build

Always test locally before deploying:

\`\`\`bash
npm run build
npm start
\`\`\`

Visit http://localhost:3000 and check everything works in production mode.

## Option 1: Vercel (Recommended)

Vercel is built by the Next.js team and offers the best Next.js hosting experience.

### Why Vercel?

**Pros:**
- Automatic deployments from Git
- Free SSL certificates
- Global CDN included
- Preview deployments for branches
- Generous free tier

**Cons:**
- Can get expensive at scale
- Less control than self-hosting

### Deployment Steps

**Method A: GitHub Integration (Easiest)**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

Done! Your site is live in 2-3 minutes.

**Method B: Vercel CLI**

\`\`\`bash
npm install -g vercel
vercel login
vercel
\`\`\`

Follow the prompts. Your site deploys automatically.

### Custom Domain

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. SSL certificate auto-provisions

## Option 2: Railway

Railway offers simple deployment with great developer experience.

### Why Railway?

**Pros:**
- Simple pricing ($5/month starter)
- Easy database integration
- Great for full-stack apps
- Excellent CLI

**Cons:**
- Smaller CDN than Vercel
- Less Next.js-specific optimization

### Deployment Steps

\`\`\`bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
\`\`\`

Your site is live! Railway provides a URL automatically.

## Option 3: Self-Hosting

Want full control? Self-host on your own server.

### Requirements

- Node.js 18+ installed
- Process manager (PM2 recommended)
- Reverse proxy (Nginx or Caddy)
- SSL certificate (Let's Encrypt)

### Deployment Steps

1. **Build your site:**
\`\`\`bash
npm run build
\`\`\`

2. **Upload to server:**
\`\`\`bash
scp -r .next package.json node_modules user@server:/var/www/mysite
\`\`\`

3. **Start with PM2:**
\`\`\`bash
pm2 start npm --name "mysite" -- start
pm2 save
\`\`\`

4. **Configure Nginx:**
\`\`\`nginx
server {
  listen 80;
  server_name yourdomain.com;
  
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
\`\`\`

5. **Get SSL:**
\`\`\`bash
certbot --nginx -d yourdomain.com
\`\`\`

## Environment Variables

If you have secrets (API keys, etc.), use environment variables:

**Vercel:** Project Settings → Environment Variables  
**Railway:** Settings → Variables  
**Self-hosted:** Create \`.env.local\` file

## Post-Deployment

### 1. Test Everything

- Visit your live URL
- Test all pages and links
- Check mobile responsiveness
- Verify forms work
- Test in multiple browsers

### 2. Set Up Analytics

Add Google Analytics, Plausible, or your preferred analytics tool.

### 3. Submit Sitemap

Submit to Google Search Console:
- Your sitemap is at: \`yourdomain.com/sitemap.xml\`
- Submit in Search Console → Sitemaps

### 4. Monitor Performance

Use tools like:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

Aim for:
- Load time < 3 seconds
- Core Web Vitals in "Good" range
- Lighthouse score 90+

## Continuous Deployment

Set up automatic deployments:

**Vercel:** Automatically deploys on Git push  
**Railway:** Configure GitHub integration  
**Self-hosted:** Set up Git hooks or CI/CD pipeline

## Troubleshooting

### "Build fails on deployment"
- Check build logs for errors
- Ensure all dependencies in package.json
- Verify no TypeScript errors locally

### "Images not loading"
- Check image paths start with \`/images/\`
- Verify files exist in \`/public/images/\`
- Check Next.js Image configuration

### "Styles look different in production"
- Clear cache and rebuild
- Check Tailwind purge settings
- Verify all CSS files imported

## Need Help?

- Check hosting provider documentation
- Review \`docs/🚀 START_HERE.md\`
- Open an issue on GitHub

Your website is ready to go live! 🚀
`,
  author: {
    name: "Website Builder",
    role: "DevOps Team",
  },
  publishedAt: "2025-12-24",
  category: "guides",
  tags: ["deployment", "hosting", "vercel", "production"],
  featured: false,
  image: {
    src: "/images/blog/deployment-guide.jpg",
    alt: "Website deployment guide - Vercel, Railway, and hosting options",
    width: 1200,
    height: 630,
  },
  seo: {
    title: "Deploy Your Website: Complete Guide | Website Builder",
    description: "Learn how to deploy your Website Builder template to production. Step-by-step guides for Vercel, Railway, and self-hosting options.",
    keywords: ["website deployment", "vercel hosting", "railway deployment", "go live"],
  },
  compliance: {
    verified: true,
    verifiedBy: "Template Team",
    verifiedDate: "2025-12-24",
    sources: [
      "Vercel documentation",
      "Railway documentation",
      "Next.js deployment guide",
    ],
  },
}

