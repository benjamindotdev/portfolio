# 🚀 Benjamin Elliott - Full Stack Developer Portfolio

[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)](https://github.com/benjamindotdev/portfolio)
[![Coverage](https://img.shields.io/badge/coverage-72.82%25-green)](https://github.com/benjamindotdev/portfolio)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://react.dev/)

Full-stack developer portfolio showcasing projects, experience, and technical skills. Built with modern web technologies and best practices for performance, accessibility, and SEO.

🌐 **Live Site**: [https://benjamin.dev](https://benjamin.dev)

## 👨‍💻 About Me

- 🙌🏽 Full-stack developer at [Shep](https://www.shephq.com/), creative problem solver & team player
- 🙌🏽 Ironhack alum and former teaching assistant - Hackshow winner with [asozial.dev](https://asozial.dev)
- 🙌🏽 Passionate about building innovative solutions to real problems
- 🎮 Lover of all things tech, including building PCs and mechanical keyboards

## ✅ Certifications

- 📜 Web Development Bootcamp (Ironhack)
- 📜 Meta Front-End Developer Professional Certificate (Coursera)
- 📜 Responsive Web Design & JavaScript Algorithms (freeCodeCamp)

---

## 🎯 Features

### � Performance
- ⚡ **Web Vitals Monitoring** - Real-time tracking of Core Web Vitals (LCP, FID, CLS, TTFB)
- 🖼️ **Image Optimization** - Lazy loading with react-lazy-load-image-component
- 📦 **Resource Hints** - DNS prefetch, preconnect, and preload for critical assets
- 💾 **Caching Strategy** - Aggressive caching for static assets, fresh HTML
- 🎨 **Page Transitions** - Smooth fade animations between routes

### ♿ Accessibility
- 🔍 **Skip to Main Content** - Keyboard navigation shortcut
- 🏷️ **ARIA Landmarks** - Proper semantic HTML and ARIA labels
- ⌨️ **Keyboard Navigation** - Full keyboard support throughout
- 📱 **Responsive Design** - Mobile-first approach with snap-scroll sections
- 🎯 **Focus Management** - Visible focus indicators and proper tab order

### 🔒 Security
- 🛡️ **Content Security Policy** - Strict CSP via meta tag
- 🔐 **Security Headers** - X-Frame-Options, X-Content-Type-Options, XSS protection
- 🚫 **Permissions Policy** - Disabled unnecessary browser features
- 🔒 **Referrer Policy** - Strict origin for privacy

### 🧪 Testing
- ✅ **119 Unit Tests** - Jest + React Testing Library (72.82% coverage)
- 🎭 **135 E2E Tests** - Playwright across Chrome, Firefox, Safari
- 🔄 **Pre-commit Hooks** - Automated testing with Husky
- 📊 **Coverage Reports** - Detailed coverage tracking

### 📈 SEO
- 🔍 **Meta Tags** - Comprehensive Open Graph and Twitter Card tags
- 🗺️ **Sitemap** - XML sitemap for search engines
- 🤖 **Robots.txt** - Optimized crawler instructions
- 📄 **Structured Data** - JSON-LD for Person and WebSite schemas
- 🏷️ **Robots Meta** - Fine-grained indexing control

### 💡 User Experience
- 🔝 **Scroll to Top** - Smooth scroll button on long pages
- 📜 **Snap Scrolling** - Full-page sections with breadcrumb navigation
- 🎨 **Tech Ticker** - Animated showcase of technologies
- 🎯 **CTA Buttons** - Clear calls-to-action with icons
- 🌊 **Smooth Animations** - React Spring for fluid interactions

### 🛠️ Developer Experience
- 📝 **TypeScript** - Full type safety
- 🎨 **TailwindCSS** - Utility-first styling
- 🔧 **ESLint** - Code quality enforcement
- 📦 **Component Library** - Reusable, tested components
- 🔄 **Git Workflow** - Feature branches with dev/main strategy

---

## 🏗️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **TypeScript 5.1.6** - Type safety
- **React Router 6** - Client-side routing
- **TailwindCSS** - Utility-first CSS
- **React Spring** - Animation library
- **Lucide React** - Icon library

### Testing
- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Playwright** - E2E testing
- **@testing-library/jest-dom** - Custom matchers

### Performance
- **web-vitals** - Performance monitoring
- **react-lazy-load-image-component** - Image lazy loading

### DevOps
- **Husky** - Git hooks
- **gh-pages** - Deployment
- **Netlify** - Hosting with edge functions

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/benjamindotdev/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm start              # Start dev server
npm run build          # Production build
npm run deploy         # Deploy to gh-pages

# Testing
npm test               # Run unit tests
npm run test:coverage  # Run with coverage
npm run test:e2e       # Run Playwright E2E tests
npm run test:e2e:ui    # Run E2E with UI
npm run test:e2e:report # View E2E test report

# Git Hooks
npm run prepare        # Setup Husky pre-commit hooks
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── _headers          # Netlify caching/security headers
│   ├── _redirects        # SPA routing redirects
│   ├── index.html        # HTML template with meta tags
│   ├── manifest.json     # PWA manifest
│   ├── robots.txt        # Search engine instructions
│   ├── sitemap.xml       # SEO sitemap
│   ├── icons/            # PWA icons
│   ├── images/           # Static images
│   └── logos/            # Technology logos
├── src/
│   ├── components/       # Reusable components
│   │   ├── shared/       # Shared UI components
│   │   └── ErrorBoundary/ # Error handling
│   ├── routes/           # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Certifications/
│   │   ├── NotFound/     # 404 page
│   │   └── Layout/       # App layout
│   ├── constants/        # App data and constants
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   │   └── reportWebVitals.ts # Performance monitoring
│   ├── App.tsx           # Root component
│   ├── index.tsx         # Entry point
│   └── global.d.ts       # TypeScript declarations
├── tests/                # E2E tests
│   ├── home.spec.ts
│   ├── navigation.spec.ts
│   ├── accessibility.spec.ts
│   └── ...
├── playwright.config.ts  # Playwright configuration
├── jest.config.js        # Jest configuration
└── tailwind.config.js    # TailwindCSS configuration
```

---

## 🧪 Testing Strategy

### Unit Tests (Jest + RTL)
- Component rendering and behavior
- User interactions (clicks, forms, navigation)
- Props and state management
- Custom hooks
- 72.82% code coverage

### E2E Tests (Playwright)
- Multi-browser testing (Chrome, Firefox, Safari)
- Page navigation and routing
- Accessibility compliance (WCAG)
- Responsive design validation
- Performance metrics

### Pre-commit Hooks
- Automated test runs before commits
- Prevents broken code from being committed
- Ensures code quality standards

---

## 🎨 Design System

### Colors
- **Navy** (#0a192f) - Background
- **Green** (#64ffda) - Primary accent
- **Cyan** (#00d9ff) - Secondary accent
- **White** (#ffffff) - Text

### Typography
- **Font Family**: Lunasima (Google Fonts)
- **Weights**: 400 (regular), 700 (bold)

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file based on `.env.example`:

```bash
# Google Analytics
REACT_APP_GA_TRACKING_ID=your_ga_tracking_id

# API Endpoints (if needed)
REACT_APP_API_URL=your_api_url
```

### PWA Icons
The manifest references PWA icons for installability. Replace placeholders:

```bash
# Generate icons (192x192 and 512x512)
# Use tools like:
# - https://realfavicongenerator.net/
# - https://www.pwabuilder.com/imageGenerator

# Place generated icons in:
public/icons/icon-192x192.png
public/icons/icon-512x512.png
```

---

## 🚀 Deployment

### Netlify (Recommended)
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`
4. Headers and redirects auto-configured via `_headers` and `_redirects`

### GitHub Pages
```bash
npm run deploy
```

Deploys to `gh-pages` branch at `https://benjamin.dev`

---

## 📝 Recent Improvements

### v2.0.0 - Complete Overhaul (2025)
- ✅ Added comprehensive E2E testing with Playwright
- ✅ Implemented Web Vitals performance monitoring
- ✅ Enhanced accessibility with skip links and ARIA labels
- ✅ Added Content Security Policy and security headers
- ✅ Implemented scroll-to-top button and page transitions
- ✅ Added test coverage reporting (72.82%)
- ✅ Created custom 404 error page
- ✅ Added global error boundary
- ✅ Optimized caching with _headers file
- ✅ Enhanced SEO with robots meta tag and structured data
- ✅ Added resource preloading for critical assets
- ✅ Documented environment variables

---

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📬 Contact

**Benjamin Elliott**
- 🌐 Website: [benjamin.dev](https://benjamin.dev)
- 💼 LinkedIn: [linkedin.com/in/benjamin-elliott-163280280](https://www.linkedin.com/in/benjamin-elliott-163280280/)
- 🐙 GitHub: [@benjamindotdev](https://github.com/benjamindotdev)
- 📧 Email: hello@benjamin.dev

---

Made with ❤️ and ☕ in Berlin 🇩🇪
