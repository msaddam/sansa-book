# Sansa Book - Kids Learning Platform

A Next.js application for kids to learn reading with interactive word books.

## Features

- 📚 4 different word books
- 🎨 Beautiful, colorful design
- 📱 Responsive layout
- 🖨️ Print-friendly pages
- ⚡ Fast and optimized

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment on Vercel

### Step 1: Push to GitHub

1. Initialize git repository (if not already):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub

3. Push to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/sansa-book.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository (`sansa-book`)
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

That's it! Your app will be live in minutes.

## Project Structure

```
sansa-book/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── book1/           # Book 1 pages
│   ├── book2/           # Book 2 pages
│   ├── book3/           # Book 3 pages
│   └── book4/           # Book 4 pages
├── components/
│   └── BookViewer.tsx   # Reusable book component
├── lib/
│   └── bookData.ts      # Book data
└── public/              # Static assets
```

## Books

- **Book 1**: 3-letter words (basic)
- **Book 2**: 3-letter words with phrases
- **Book 3**: 4-letter words with phrases
- **Book 4**: Comic book style (4-letter words)

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Google Fonts (Fredoka, Bubblegum Sans)

## License

MIT

