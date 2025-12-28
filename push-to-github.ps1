# PowerShell script to push landing-page-vercel to GitHub
# Usage: .\push-to-github.ps1 -GitHubUsername "your-username" -RepoName "hecto-landing-page"

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername,
    
    [Parameter(Mandatory=$false)]
    [string]$RepoName = "hecto-landing-page"
)

Write-Host "🚀 Setting up GitHub repository..." -ForegroundColor Green

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "⚠️  Remote 'origin' already exists: $remoteExists" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to update it? (y/n)"
    if ($overwrite -eq "y") {
        git remote remove origin
    } else {
        Write-Host "❌ Aborted. Please remove the existing remote manually." -ForegroundColor Red
        exit 1
    }
}

# Add remote
$repoUrl = "https://github.com/$GitHubUsername/$RepoName.git"
Write-Host "📦 Adding remote: $repoUrl" -ForegroundColor Cyan
git remote add origin $repoUrl

# Rename branch to main if needed
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    Write-Host "🔄 Renaming branch from '$currentBranch' to 'main'..." -ForegroundColor Cyan
    git branch -M main
}

# Push to GitHub
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "⚠️  You may be prompted for credentials." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 Repository URL: https://github.com/$GitHubUsername/$RepoName" -ForegroundColor Cyan
} else {
    Write-Host "❌ Push failed. Please check your credentials and try again." -ForegroundColor Red
    Write-Host "💡 Tip: You may need to use a Personal Access Token instead of a password." -ForegroundColor Yellow
}

