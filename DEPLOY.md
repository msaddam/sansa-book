# Deployment Guide for Vercel

## Step 1: Install Dependencies

```bash
yarn install
```

## Step 2: Test Locally

```bash
yarn dev
```

Visit http://localhost:3000 to verify everything works.

## Step 3: Push to GitHub

1. **Initialize Git (if not already done):**
```bash
git init
git add .
git commit -m "Initial commit: Sansa Book Next.js app"
```

2. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name it: `sansa-book` (or your preferred name)
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/sansa-book.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 4: Deploy to Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your `sansa-book` repository
   - Vercel will auto-detect Next.js settings

3. **Configure (optional):**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `yarn build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `yarn install` (default)

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your app will be live at: `https://sansa-book.vercel.app` (or your custom domain)

## Step 5: Automatic Deployments

- Every push to `main` branch = automatic deployment
- Pull requests = preview deployments
- No manual deployment needed!

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure TypeScript compiles without errors: `yarn build`
- Check Vercel build logs for specific errors

### Images Not Loading
- Ensure images are in `public/` folder or use external URLs
- Check image paths are correct

### Fonts Not Loading
- Google Fonts should work automatically
- Check network tab in browser dev tools

## Environment Variables (if needed)

If you add environment variables later:
1. Go to Vercel project settings
2. Add variables in "Environment Variables" section
3. Redeploy

## Custom Domain (Optional)

1. Go to project settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## That's It! 🎉

Your app is now live on Vercel with automatic deployments from GitHub!

