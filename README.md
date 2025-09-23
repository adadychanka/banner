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
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm test         # Run tests
pnpm test:watch   # Run tests in watch mode
pnpm test:coverage # Run tests with coverage report
pnpm deploy       # Build and deploy to GitHub Pages
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

## 🧪 Testing

This project includes comprehensive testing with Jest and React Testing Library.

### Test Configuration

- **Test Runner:** Jest with TypeScript support
- **Testing Library:** React Testing Library with user-event
- **Environment:** jsdom for DOM simulation
- **Coverage:** Full coverage reporting with HTML output

### Testing Standards

- Tests are co-located with components (`Component.test.tsx`)
- Use `screen` object for all queries (following RTL best practices)
- Prefer `userEvent` over `fireEvent` for interactions
- Follow semantic query priority: role → label → text → testId
- Structure tests with descriptive names and AAA pattern (Arrange, Act, Assert)

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode during development
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

Coverage reports are generated in the `coverage/` directory with detailed HTML reports.

## 🎯 Features

### ✨ Banner Functionality

- **Dismissible:** Click X to remove from DOM
- **External Link:** "More Information" opens external link
- **Responsive Actions:** Button goes full-width on mobile
- **Background Image:** Responsive coin imagery

### 🔧 Technical Features

- **React 19:** Latest React features and patterns
- **TypeScript:** Full type safety with strict configuration
- **CSS Modules:** Scoped styling with utility-first approach
- **Custom Hooks:** Mobile detection, keyboard handling, and focus management
- **Memoization:** Optimized re-renders with React.memo and useMemo
- **Accessibility:** Full keyboard navigation and screen reader support
- **Testing:** Comprehensive test suite with Jest and React Testing Library

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

## 📊 Performance

- **Bundle Size:** Optimized with Vite tree-shaking
- **Images:** Responsive loading with multiple formats
- **Fonts:** Preloaded Google Fonts (Poppins)
- **CSS:** Modular and scoped styles

## 🔍 Code Quality

### Development Tools

- **ESLint:** TypeScript and React rules with Prettier integration
- **Prettier:** Consistent code formatting (4 spaces, single quotes)
- **TypeScript:** Strict configuration with comprehensive type coverage
- **Jest:** Test runner with TypeScript support and coverage reporting
- **Cursor Rules:** Automated coding standards enforcement

### Testing Standards

- **Test Coverage:** 9 test files covering core components and utilities
- **RTL Best Practices:** Screen object usage, semantic queries, userEvent interactions
- **Test Structure:** Descriptive naming, AAA pattern, organized describe blocks
- **Accessibility Testing:** Focus management, ARIA attributes, keyboard navigation

### Code Standards

- **Component Architecture:** Memoized, composable, and reusable components
- **Type Safety:** Full TypeScript coverage with strict configuration
- **Accessibility:** WCAG 2.1 AA compliance with proper ARIA labeling
- **Performance:** Optimized re-renders with useMemo and memo
- **CSS Architecture:** CSS Modules with utility-first class naming

### Cursor AI Integration

This project includes Cursor-specific rules in `.cursor/rules/` for:

- **React Testing Library:** Best practices and anti-patterns
- **Test Structure:** Organization and naming conventions
- **Code Consistency:** Automated enforcement of project standards

## 📦 Dependencies

### Core Dependencies

- **React 19.1.1:** Latest React with modern features
- **clsx 2.1.1:** Utility for conditional className construction

### Development Dependencies

- **Vite 7.1.7:** Fast build tool and dev server
- **TypeScript 5.8.3:** Type safety and development experience
- **ESLint 9.36.0:** Code linting with TypeScript and React rules
- **Prettier 3.6.2:** Code formatting
- **Jest 30.1.3:** Testing framework
- **React Testing Library 16.3.0:** Component testing utilities
- **user-event 14.6.1:** User interaction simulation
- **gh-pages 6.3.0:** GitHub Pages deployment

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Banner/         # Main banner component
│   ├── Button/         # Button with variants
│   ├── CloseButton/    # Accessible close button
│   ├── Dialog/         # Modal wrapper
│   ├── Link/           # External link component
│   └── Typography/     # Typography system
├── features/           # Feature-specific components
│   ├── BusinessFundingBanner/
│   └── BusinessFundingDialog/
├── utilities/          # Custom hooks and utilities
│   ├── cn.ts          # Class name utility
│   ├── useEscapeKey.ts
│   ├── useFocusFirstInteractiveElement.ts
│   └── useIsMobile.ts
├── theme/             # Design tokens
└── assets/            # Static assets
```

### Potential Improvements

- [ ] Implement animation library (Framer Motion)
- [ ] Add bundle analyzer for size optimization
- [ ] Consider micro-animations for enhanced UX
- [ ] Add Storybook for component documentation
- [ ] Implement visual regression testing

---
