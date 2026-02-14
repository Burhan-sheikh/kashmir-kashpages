# Contributing to Kashpages

Thank you for your interest in contributing to Kashpages! This document provides guidelines and standards for contributions.

## Code of Conduct

Be professional, respectful, and constructive. This is production software trusted by businesses.

## Development Workflow

### 1. Setup

```bash
git clone https://github.com/Burhan-sheikh/kashmir-kashpages.git
cd kashmir-kashpages
npm install
cp .env.example .env.local
# Configure your .env.local
npm run dev
```

### 2. Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation updates

### 3. Commit Messages

Follow Conventional Commits:

```
feat: add custom domain verification
fix: resolve builder autosave race condition
docs: update Firebase setup instructions
style: format code with Prettier
refactor: extract page schema validation
test: add tests for subscription logic
chore: update dependencies
```

## Code Standards

### TypeScript

- Strict mode enabled
- No `any` types without justification
- Explicit return types for functions
- Use interfaces for object shapes

### React

- Functional components with hooks
- Client components marked with `'use client'`
- Server components by default
- Custom hooks in `/src/lib/hooks/`

### Styling

- Tailwind CSS utility classes
- Design system tokens only
- No arbitrary values without reason
- Mobile-first responsive design

### Files

- One component per file
- Co-locate related files
- Index exports for clean imports
- Clear naming conventions

## Testing

```bash
npm run test          # Run tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

Test requirements:
- Unit tests for utilities
- Integration tests for critical paths
- E2E tests for user flows

## Pull Request Process

### Before Submitting

1. **Code quality**
```bash
npm run lint
npm run type-check
npm run format
```

2. **Testing**
```bash
npm run test
```

3. **Build verification**
```bash
npm run build
```

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] No console errors

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings
```

## Design Principles

### Non-Negotiable Rules

1. **Strong hierarchy** - Primary actions dominate
2. **Respect whitespace** - Air = premium
3. **Typography discipline** - Clear scale, never random
4. **Minimal color** - Neutrals + brand accent only
5. **Remove noise** - If unnecessary → delete
6. **Professional density** - Never cramped, never chaotic

### Forbidden

❌ Gradient madness
❌ Excessive borders
❌ Tiny padding
❌ Oversized icons
❌ Marketing fluff
❌ Multiple competing CTAs

## Component Guidelines

### Creating New Components

```typescript
// src/components/ui/example.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ExampleProps {
  variant?: 'default' | 'secondary';
  children: React.ReactNode;
}

export const Example = React.forwardRef<
  HTMLDivElement,
  ExampleProps
>(({ variant = 'default', children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'base-classes',
        variant === 'secondary' && 'secondary-classes'
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Example.displayName = 'Example';
```

### Component Checklist

- [ ] TypeScript interfaces defined
- [ ] Variants for flexibility
- [ ] Accessibility attributes
- [ ] Keyboard navigation support
- [ ] Mobile responsive
- [ ] Dark mode compatible
- [ ] Loading states
- [ ] Error states
- [ ] Empty states

## Firebase Guidelines

### Security Rules

- Test rules locally before deploying
- No open read/write access
- Validate data structure
- Rate limit sensitive operations

### Functions

- Keep functions small and focused
- Use TypeScript
- Handle errors gracefully
- Log important events
- Set timeouts appropriately

## Documentation

- Update README for feature changes
- Add JSDoc comments for complex functions
- Create `/docs/*.md` for major features
- Include code examples
- Keep API documentation current

## Questions?

Open a GitHub issue with the `question` label or email dev@kashpages.com

## License

By contributing, you agree that your contributions will be licensed under the project's license.