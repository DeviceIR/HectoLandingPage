# Vercel Deployment Guide

## Current Status
The project is configured for Vercel deployment, but there's a build error that needs to be resolved.

## View Build Logs
To see the actual build error:
1. Go to: https://vercel.com/erfanbastani1201-1703s-projects/landing-page-vercel
2. Click on the failed deployment
3. Check the "Build Logs" tab to see the exact error

## Common Issues & Solutions

### 1. Check Build Logs in Vercel Dashboard
The Vercel dashboard will show the exact error message that's causing the build to fail.

### 2. Local Build Test
Make sure the build works locally:
```bash
npm install
npm run build
```

### 3. Potential Issues to Check

#### Case Sensitivity
Linux (Vercel) is case-sensitive, Windows is not. Check:
- Import paths match exact file names
- File extensions are correct (.jsx vs .js)

#### Missing Dependencies
Ensure all dependencies are in `package.json`:
```bash
npm install --save <missing-package>
```

#### Environment Variables
If you need environment variables, add them in Vercel dashboard:
- Settings → Environment Variables

## Deployment Methods

### Method 1: Vercel CLI (Current)
```bash
vercel --prod
```

### Method 2: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Deploy!

### Method 3: Vercel Dashboard
1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Connect your GitHub account
4. Select the repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Deploy

## Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### package.json
- Node version specified: `>=18.0.0`
- Build script: `vite build`

## Next Steps
1. Check the build logs in Vercel dashboard to identify the exact error
2. Fix the error
3. Redeploy

## Support
If the build error persists, check:
- Vercel build logs for detailed error messages
- Compare local vs Vercel environment differences
- Ensure all file paths are correct (case-sensitive)

