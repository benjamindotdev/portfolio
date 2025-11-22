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

### Development Workflow
This project follows a structured Git workflow. See [WORKFLOW.md](./WORKFLOW.md) for detailed guidelines.

**Quick Summary:**
- Create feature branches from `dev` for all new work
- Run tests (`npm test`) before merging
- Build locally (`npm run build`) to verify
- Merge to `dev` when ready
- Merge to `main` only after manual approval

### Available Scripts

```bash
# Development
npm run dev                  # Start Vite dev server (http://localhost:5173)
npm start                    # Alias for npm run dev

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

## 🎯 Optimization Guide

### Image Optimization

#### Recommended Formats
- **WebP**: Modern format with superior compression (use for hero images, logos)
- **AVIF**: Even better compression but check browser support
- **PNG**: Use for images requiring transparency
- **JPEG**: Use for photos without transparency

#### Optimization Tools
```bash
# Convert to WebP
cwebp -q 80 input.jpg -o output.webp

# Bulk optimization with Squoosh CLI
npm install -g @squoosh/cli
squoosh-cli --webp auto public/images/*.jpg

# Or use online tools:
# - https://squoosh.app/
# - https://tinypng.com/
```

#### Best Practices
- Use WebP format for all images (current implementation)
- Implement lazy loading (already done via react-lazy-load-image-component)
- Preload critical images (hero.webp already preloaded)
- Optimize image sizes: hero ~200KB, logos ~20KB, thumbnails ~50KB

### Bundle Size Optimization

Check your bundle size:
```bash
npm run build

# Analyze bundle
npm install -g source-map-explorer
source-map-explorer 'build/static/js/*.js'
```

Current optimizations:
- Code splitting via React.lazy (can be implemented for routes)
- Tree shaking (automatic with Create React App)
- Minification in production build

### Performance Checklist
- [ ] All images converted to WebP format
- [x] Critical resources preloaded
- [x] Lazy loading for images
- [x] Web Vitals monitoring active
- [ ] Service Worker for offline support (future enhancement)
- [x] Resource hints (dns-prefetch, preconnect)
- [x] CSP headers configured

### Monitoring

Track performance in production:
```bash
# Web Vitals are automatically reported to Google Analytics
# Check console in development for detailed metrics

# Lighthouse CI (optional)
npm install -g @lhci/cli
lhci autorun
```
