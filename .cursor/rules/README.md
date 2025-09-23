---
description: Documentation index for all project coding rules and guidelines
globs: ['**/*']
alwaysApply: false
---

# Cursor Rules Documentation

This directory contains coding standards and best practices for the project using the MDC format (Markdown with front matter).

## 📋 Available Rules

### Testing Rules

- **[react-testing-library.md](./react-testing-library.md)** - React Testing Library best practices and patterns
- **[react-testing-library-act.md](./react-testing-library-act.md)** - Use act from RTL instead of react-dom/test-utils
- **[test-structure.md](./test-structure.md)** - Test organization and structure guidelines

## 🚀 Rule Configuration

Each rule file includes front matter configuration:

- `description`: Brief overview of the rule's purpose
- `globs`: File patterns to which the rule applies
- `alwaysApply`: Whether the rule is always included in model context

### Example Rule Structure

```md
---
description: Rule description here
globs: ['**/*.test.tsx']
alwaysApply: true
---

# Rule Content

Your rule guidelines and examples go here...
```

## 📖 Quick Reference

### Testing Quick Start

1. Always use `screen` object for queries
2. Prefer `userEvent` over `fireEvent`
3. Follow semantic query priority (role > label > text > testId)
4. Structure tests with clear describe blocks
5. Use descriptive test names

### Code Style

- Use 4 spaces for indentation
- Follow AAA pattern (Arrange, Act, Assert)
- One behavior per test
- Extract common setup to helper functions

## 🔄 Contributing

When adding new rules:

1. Create a new `.md` file in this directory
2. Include proper front matter configuration
3. Follow the established format with examples
4. Update this README with the new rule
5. Include both ✅ preferred and ❌ anti-patterns

## 🏗️ Project Structure

```
.cursor/
  rules/
    README.md              # This file
    react-testing-library.md
    test-structure.md
```
