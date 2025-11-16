# GitHub & Vercel Deployment Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Test Locally

```bash
npm run dev
```

Visit http://localhost:3000

### 3. Initialize Git & Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Sansa Book Next.js app"

# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/sansa-book.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username**

### 4. Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your `sansa-book` repository
5. Click "Deploy"

Vercel will automatically:
- Detect Next.js
- Install dependencies
- Build the app
- Deploy it

Your app will be live in 2-3 minutes! 🚀

## Automatic Deployments

- ✅ Every push to `main` = automatic deployment
- ✅ Pull requests = preview deployments
- ✅ No manual steps needed!

## Project Structure

```
sansa-book/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Home page
│   ├── book1/          # Book 1 route
│   ├── book2/          # Book 2 route
│   ├── book3/          # Book 3 route
│   └── book4/          # Book 4 route
├── components/         # React components
├── lib/               # Data and utilities
├── public/            # Static assets
└── package.json      # Dependencies
```

## Need Help?

- Check Vercel build logs if deployment fails
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test build

