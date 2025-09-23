## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd banner

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
pnpm lint     # Run ESLint
pnpm format   # Format code with Prettier
```

## 📱 Responsive Design

The banner adapts to different screen sizes:

- **Desktop (601px+):** Full banner with background image
- **Mobile (320px - 600px):** Stacked layout, subtle background

### Breakpoints

```typescript
export const BREAKPOINTS = {
    sm: 600,
} as const
```

## 🎨 Design Features

### Interactive Elements

- **Hover Effects:** Smooth transitions on buttons and links
- **Focus States:** Keyboard navigation support
- **Animation:** Subtle entrance/exit animations

### Accessibility

- **ARIA Labels:** Proper labeling for screen readers
- **Keyboard Support:** Tab navigation and Escape key

## 🧩 Key Components

### Banner Component

The main banner layout with title, content, actions, and close functionality.

```typescript
<Banner
  title="Get the Business Funding You Need"
  content={<BusinessFundingBannerContent />}
  actions={[primaryButton, moreInfoLink]}
  onClose={() => setOpen(false)}
/>
```

### BusinessFundingBanner

Feature-specific banner with funding-related content and benefits list.

### Dialog Component

Modal wrapper with backdrop and escape key handling.

## 🎯 Features

### ✨ Banner Functionality

- **Dismissible:** Click X to remove from DOM
- **External Link:** "More Information" opens external link
- **Responsive Actions:** Button goes full-width on mobile
- **Background Image:** Responsive coin imagery

### 🔧 Technical Features

- **TypeScript:** Full type safety
- **CSS Modules:** Scoped styling
- **Custom Hooks:** Mobile detection and keyboard handling
- **Memoization:** Optimized re-renders
- **Modern React:** React 19 with latest patterns

## 📦 Deployment

### GitHub Pages

```bash
# Add to package.json:
"homepage": "https://yourusername.github.io/banner"

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script
"deploy": "gh-pages -d dist"

# Deploy
pnpm deploy
```

## 🧪 Browser Support

- **Modern Browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile:** iOS Safari 14+, Chrome Mobile 90+
- **Features Used:** CSS Grid, Flexbox, CSS Custom Properties, ES2022

## 📊 Performance

- **Bundle Size:** Optimized with Vite tree-shaking
- **Images:** Responsive loading with multiple formats
- **Fonts:** Preloaded Google Fonts (Poppins)
- **CSS:** Modular and scoped styles

## 🔍 Code Quality

### Linting & Formatting

- **ESLint:** TypeScript and React rules
- **Prettier:** Consistent code formatting
- **Strict Mode:** TypeScript strict configuration

### Best Practices

- **Component Composition:** Reusable and testable components
- **Type Safety:** Comprehensive TypeScript coverage
- **Accessibility:** WCAG 2.1 AA compliance
- **Performance:** Memoized components and optimized renders

### Potential Improvements

- [ ] Implement animation library (Framer Motion)
- [ ] Add bundle analyzer for size optimization
- [ ] Consider micro-animations for enhanced UX

---
