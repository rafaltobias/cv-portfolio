# 🚀 GitHub Pages Deployment Guide

This guide explains how to deploy your React portfolio to GitHub Pages.

## 📋 Prerequisites

1. **GitHub Account** - Make sure you have a GitHub account
2. **Git Repository** - Your project should be in a GitHub repository
3. **Node.js** - Node.js installed locally for building

## 🔧 Setup (Already Completed)

The following setup has been completed for this project:

### 1. Dependencies Installed
```bash
npm install --save-dev gh-pages
```

### 2. Package.json Updated
- Added `homepage` field pointing to your GitHub Pages URL
- Added deployment scripts (`predeploy` and `deploy`)

### 3. Vite Configuration Updated
- Set `base` to `/cv-portfolio/` for proper asset paths
- Configured build output directory

## 🚀 Deployment Steps

### Method 1: Command Line Deployment

1. **Make sure your code is committed to GitHub:**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy to GitHub Pages:**
```bash
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Create/update the `gh-pages` branch
- Push the built files to GitHub Pages

### Method 2: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml` for automatic deployment on every push:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## ⚙️ GitHub Repository Settings

1. **Go to your repository on GitHub**
2. **Navigate to Settings → Pages**
3. **Source:** Select "Deploy from a branch"
4. **Branch:** Select `gh-pages` and `/ (root)`
5. **Save the settings**

## 🌐 Access Your Site

After deployment, your site will be available at:
```
https://rafaltobias.github.io/cv-portfolio/
```

## 🔧 Troubleshooting

### Common Issues:

1. **404 Error on GitHub Pages:**
   - Check if the `base` path in `vite.config.ts` matches your repository name
   - Ensure the `homepage` in `package.json` is correct

2. **Assets Not Loading:**
   - Verify the `base` configuration in Vite
   - Check browser developer tools for 404 errors

3. **Deployment Fails:**
   - Make sure you have push permissions to the repository
   - Check if the `gh-pages` branch exists and has content

### Manual Verification:

```bash
# Check if build works locally
npm run build

# Preview the built site locally
npm run preview
```

## 📝 Deployment Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build the project for production |
| `npm run predeploy` | Automatically runs before deploy |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run preview` | Preview built site locally |

## 🔄 Updates

To update your live site:
1. Make your changes
2. Commit and push to main branch
3. Run `npm run deploy` again

The process is automatic and will update your live site in a few minutes!
