# Deployment Instructions

## React + Vite Resume Web App

This project is a modern React web application that displays your resume by parsing the README.md file. It's configured to deploy automatically to Cloudflare Pages via GitHub Actions.

## Project Overview

- **Frontend**: React 18.3 + TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4 with dark theme
- **Routing**: React Router 6
- **Deployment**: Cloudflare Pages (automated via GitHub Actions)

## Local Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Visit http://localhost:5173 to view your resume.

### Build for Production
```bash
npm run build
```
Output will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## Cloudflare Pages Deployment Setup

### Prerequisites
1. A Cloudflare account
2. GitHub repository connected to Cloudflare

### Step 1: Create Cloudflare Pages Project
1. Log into Cloudflare Dashboard
2. Navigate to **Pages** → **Create a project**
3. Connect your GitHub repository
4. Set project name: `matthewdelgado`
5. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`

### Step 2: Get Cloudflare Credentials
1. In Cloudflare Dashboard, go to **My Profile** → **API Tokens**
2. Create a new API token with **Cloudflare Pages:Edit** permissions
3. Copy the token (you'll only see it once)
4. Find your **Account ID** in any Cloudflare Pages project settings

### Step 3: Add GitHub Secrets
1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following repository secrets:
   - `CLOUDFLARE_API_TOKEN`: Your API token from step 2
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
   - Note: `GITHUB_TOKEN` is automatically provided by GitHub Actions

### Step 4: Deploy
1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add React resume web app with Cloudflare deployment"
   git push origin main
   ```

2. GitHub Actions will automatically:
   - Install dependencies
   - Run TypeScript compilation
   - Build the production bundle
   - Deploy to Cloudflare Pages

3. Monitor the deployment:
   - Check **Actions** tab in your GitHub repository
   - View deployment status in Cloudflare Pages dashboard

### Step 5: Access Your Site
- Your site will be available at: `https://matthewdelgado.pages.dev`
- You can configure a custom domain in Cloudflare Pages settings

## Updating Your Resume

1. Edit `README.md` at the repository root
2. Commit and push changes to GitHub
3. GitHub Actions will automatically rebuild and redeploy
4. Changes will be live in ~2-3 minutes

The web app parses README.md at build time, so any updates to the README will automatically appear on your deployed site.

## Project Structure

```
/home/matt/dev/repos/matthewdelgado/
├── README.md                          # Source of truth for resume content
├── .github/workflows/deploy.yml       # Cloudflare deployment automation
├── package.json                       # Dependencies and scripts
├── vite.config.ts                     # Vite build configuration
├── tailwind.config.js                 # Dark theme configuration
├── index.html                         # Entry HTML
└── src/
    ├── main.tsx                       # React entry point
    ├── App.tsx                        # Root component with routing
    ├── index.css                      # Global styles + Tailwind
    ├── types/resume.ts                # TypeScript interfaces
    ├── utils/markdownParser.ts        # README.md parser
    ├── components/
    │   ├── Layout/Layout.tsx          # App layout wrapper
    │   └── Resume/                    # Resume section components
    ├── pages/ResumePage.tsx           # Resume page wrapper
    └── data/projects.json             # Future: extended projects
```

## Troubleshooting

### Build Fails
- Check that all dependencies are installed: `npm install`
- Verify TypeScript has no errors: `npx tsc --noEmit`
- Check Vite build logs: `npm run build`

### Deployment Fails
- Verify GitHub secrets are set correctly
- Check GitHub Actions logs for detailed error messages
- Ensure Cloudflare Pages project name matches `deploy.yml`

### Resume Content Not Updating
- Verify README.md is at repository root
- Check markdown parser in `src/utils/markdownParser.ts`
- Clear build cache: `rm -rf dist node_modules && npm install && npm run build`

## Future Enhancements

See the plan for potential additions:
- Portfolio projects page with detailed project information
- PDF export functionality
- Light/dark theme toggle
- Blog section
- Contact form using Cloudflare Pages Functions

## Build Information

- **Bundle Size**: ~386KB total (~128KB gzipped)
- **Node Version**: 20+
- **TypeScript**: Strict mode enabled
- **Themes**: Dark and Light modes with system preference detection
- **Animations**: Framer Motion for smooth scroll animations
- **Icons**: React Icons for technology logos
- **SEO**: Comprehensive meta tags and Schema.org markup

## New Features Added

### Visual Enhancements
- ✅ Scroll animations on all sections
- ✅ Technology icons for all skills
- ✅ Timeline view for professional experience
- ✅ Stats dashboard (auto-calculated metrics)
- ✅ Project filtering by technology
- ✅ Gradient accents throughout

### Functionality
- ✅ Dark/Light theme toggle
- ✅ Auto-populated navigation from README
- ✅ Error boundary for graceful error handling
- ✅ SEO optimization (meta tags, Open Graph, Schema.org)
- ✅ Print-optimized stylesheet
- ✅ Accessibility features (keyboard nav, reduced motion)

See `IMPROVEMENTS.md` for complete feature list and usage instructions.

## Optional: Add Analytics

To add Cloudflare Web Analytics:

1. In Cloudflare Dashboard, go to **Web Analytics**
2. Add your site and get the beacon token
3. Add to `index.html` before `</body>`:
   ```html
   <script defer src='https://static.cloudflareinsights.com/beacon.min.js'
           data-cf-beacon='{"token": "YOUR_TOKEN_HERE"}'></script>
   ```

## Optional: Custom Domain

1. In Cloudflare Pages project settings, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `matthewdelgado.com`)
4. Follow DNS configuration instructions
5. SSL certificate automatically provisioned
