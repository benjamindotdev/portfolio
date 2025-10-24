# 🚀 Full-Stack Developer | TA @ Ironhack | asozial founder

- 🙌🏽 Full-stack developer, creative problem solver & team player who encourages positive vibes only
- 🙌🏽 Ironhacker, known for my passion, kindness and calm demeanor. Hackshow winner with asozial.dev
- 🙌🏽 Lover of all things tech, including building PCs and mechanical keyboards


## ✅ Certifications:

- 📜 Web Development bootcamp (Ironhack)
- 📜 Responsive Web Design & JavaScript Algorithms (freeCodeCamp)
- 📜 Front-End Web Developer Professional Certificate (Meta, Coursera)

I'm excited to connect with like-minded professionals and organizations that share my passion for innovation and continuous learning. Hit me up to learn more about me! 👊🏽

---

## 🛠️ Development

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/benjamindotdev/portfolio.git
cd portfolio

# Install dependencies
npm install

# Create environment file (optional)
cp .env.example .env
```

### Available Scripts

```bash
# Development
npm start                    # Start development server (http://localhost:3000)

# Testing
npm test                     # Run unit tests
npm run test:coverage        # Run tests with coverage report
npm run test:e2e            # Run Playwright E2E tests
npm run test:e2e:ui         # Run E2E tests with UI
npm run test:e2e:headed     # Run E2E tests in headed mode
npm run test:e2e:report     # Show E2E test report

# Production
npm run build               # Build for production
npm run predeploy           # Pre-deployment build
npm run deploy              # Deploy to GitHub Pages
```

### Testing
- **Unit Tests**: Jest + React Testing Library (119 tests)
- **E2E Tests**: Playwright (135 tests across chromium/firefox/webkit)
- **Coverage**: 72.82% overall coverage
- **Pre-commit**: Husky runs tests before commits

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Husky for pre-commit hooks
- Playwright for comprehensive E2E testing

## 🚀 Deployment

### GitHub Pages (Current)
Automatically deployed to `https://benjamin.dev` via GitHub Pages:

```bash
npm run deploy
```

This runs the build and pushes to the `gh-pages` branch.

### Other Deployment Options

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Build command
npm run build

# Publish directory
build
```

#### Custom Server
```bash
# Build the app
npm run build

# Serve the build folder with any static server
npx serve -s build
```

### Environment Variables
See `.env.example` for available environment variables. Currently, all configuration is in the codebase, but you can add:
- `REACT_APP_API_URL` - API endpoint
- `REACT_APP_GA_ID` - Google Analytics ID (currently hardcoded)

## 📊 Performance & SEO

### Features
- ✅ **Web Vitals Monitoring**: CLS, INP, FCP, LCP, TTFB tracking
- ✅ **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards
- ✅ **Security**: Content Security Policy (CSP) headers
- ✅ **Accessibility**: WCAG compliant, skip links, ARIA labels
- ✅ **PWA Ready**: Manifest, service worker ready, offline support
- ✅ **Performance**: Resource hints, lazy loading, optimized images

### Lighthouse Scores
Run Lighthouse audit for current scores:
```bash
npm run build
npx serve -s build
# Then run Lighthouse in Chrome DevTools
```

## 🎨 Customization

### Theme
Colors are defined in `tailwind.config.js`:
```javascript
colors: {
  'portfolio-navy': '#001f3f',
  'portfolio-green': '#39FF14',
  'portfolio-cyan': '#00FFFF',
  // ...
}
```

### Content
All content is centralized in `src/constants/index.ts`:
- Personal information
- Technologies
- Projects
- Experience
- Certifications

## 🛠️ PWA Icons
The manifest currently references `icons/icon-192x192.png` and `icons/icon-512x512.png` for Progressive Web App installability. To create proper icons:

```bash
# Using ImageMagick (if available)
convert your-logo.png -resize 192x192 -background black -gravity center -extent 192x192 public/icons/icon-192x192.png
convert your-logo.png -resize 512x512 -background black -gravity center -extent 512x512 public/icons/icon-512x512.png

# Or use online tools like:
# - https://realfavicongenerator.net/
# - https://www.pwabuilder.com/imageGenerator
```

Current placeholder icons are copies of `favicon.ico` and should be replaced with properly sized PNG images for optimal PWA experience.
