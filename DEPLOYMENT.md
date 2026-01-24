# Vercel Deployment Guide

## Prerequisites
- ✅ Vercel CLI installed (`vercel` command available)
- ✅ Git repository initialized
- ✅ `vercel.json` configuration file created

## Deployment Methods

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Login to Vercel** (if not already logged in):
   ```bash
   vercel login
   ```
   This will open your browser to authenticate with Vercel.

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   - First time: Follow the prompts to link your project
   - Choose your scope (personal or team)
   - Confirm project settings (they should auto-detect from `vercel.json`)
   - Deploy!

3. **Deploy to Production**:
   ```bash
   vercel --prod
   ```
   This deploys to your production domain.

### Method 2: Deploy via Vercel Dashboard (Git Integration)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import Project in Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Automatic Deployments**:
   - Every push to `main` branch = Production deployment
   - Every push to other branches = Preview deployment

## Configuration

The `vercel.json` file is already configured with:
- **Build Command**: `npm run build`
- **Output Directory**: `dist` (Vite's default)
- **Framework**: Vite
- **SPA Routing**: All routes redirect to `index.html` for client-side routing

## Environment Variables

If you need environment variables:
1. Go to your project settings in Vercel Dashboard
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## Custom Domain

To add a custom domain:
1. Go to your project in Vercel Dashboard
2. Navigate to "Settings" → "Domains"
3. Add your domain
4. Follow DNS configuration instructions

## Build Settings (Auto-detected)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: Auto-detected (recommended: 18.x or 20.x)

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (18.x or 20.x)
- Check build logs in Vercel Dashboard

### Routing Issues
- The `vercel.json` already includes SPA routing configuration
- All routes should redirect to `index.html`

### Environment Variables Not Working
- Make sure variables are set in Vercel Dashboard
- Redeploy after adding variables
- Use `process.env.VARIABLE_NAME` in your code

## Quick Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove deployment
vercel remove
```

