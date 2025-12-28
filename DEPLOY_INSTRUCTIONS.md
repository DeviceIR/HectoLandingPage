# Vercel Deployment Instructions

## Current Issue
The build is failing on Vercel but works locally. We need to check the build logs to identify the exact error.

## Step 1: Check Build Logs
1. Go to: https://vercel.com/erfanbastani1201-1703s-projects/landing-page-vercel
2. Click on the latest failed deployment
3. Open the "Build Logs" tab
4. Look for the error message (usually in red)

## Step 2: Deploy via GitHub (Recommended)

This method is more reliable and provides better error visibility:

### Option A: If you've already pushed to GitHub
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your `landing-page-vercel` repository
4. Vercel will auto-detect:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

### Option B: Push to GitHub first
```bash
# If you haven't pushed yet, use the push-to-github.ps1 script
cd T:\Hecto\frontend-app\landing-page-vercel
.\push-to-github.ps1 -GitHubUsername "your-username" -RepoName "hecto-landing-page"
```

Then follow Option A above.

## Step 3: Alternative - Fix and Redeploy via CLI

Once you identify the error from the build logs:

1. Fix the issue locally
2. Test the build: `npm run build`
3. Commit changes: `git add . && git commit -m "Fix build issue"`
4. Deploy: `vercel --prod`

## Common Build Errors & Fixes

### Missing Dependencies
```bash
npm install --save <package-name>
```

### Case Sensitivity Issues
- Check all import paths match exact file names
- Linux (Vercel) is case-sensitive

### Path Alias Issues
The `@` alias is configured in both `vite.config.js` and `jsconfig.json`. If there's an issue:
- Verify `vite.config.js` has the alias configured
- Check that all `@/` imports point to files in `src/`

## Current Configuration

✅ `vercel.json` - Configured for Vite
✅ `package.json` - Node version specified
✅ `.nvmrc` - Node 20 specified
✅ `vite.config.js` - Alias configured
✅ Build works locally

## Next Steps
1. **Check Vercel dashboard** for the exact error
2. **Fix the error** based on the logs
3. **Redeploy** via GitHub integration (recommended) or CLI

## Support
- Vercel Docs: https://vercel.com/docs
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html#vercel

