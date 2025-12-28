# GitHub Repository Setup Guide

Your `landing-page-vercel` directory is now ready to be pushed to GitHub!

## Step 1: Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the repository details:
   - **Repository name**: `hecto-landing-page` (or any name you prefer)
   - **Description**: "Hecto LMS Landing Page - Standalone Vite + React app"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Navigate to the landing-page-vercel directory
cd T:\Hecto\frontend-app\landing-page-vercel

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/hecto-landing-page.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using SSH

If you prefer SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/hecto-landing-page.git
git branch -M main
git push -u origin main
```

## What's Included

✅ All source files (React components, styles, assets)
✅ Configuration files (package.json, vite.config.js, etc.)
✅ .gitignore (excludes node_modules, dist, .env files)
✅ README.md with setup instructions

## Next Steps After Pushing

1. **Deploy to Vercel**:
   - Import the repository in Vercel
   - Framework: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`

2. **Set up environment variables** (if needed for contact form API)

3. **Enable GitHub Actions** (optional) for CI/CD

## Troubleshooting

If you get authentication errors:
- Use GitHub CLI: `gh auth login`
- Or use a Personal Access Token instead of password
- Or set up SSH keys for GitHub

