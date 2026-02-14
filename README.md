# Kashpages

**Production SaaS platform** - Schema-driven business presence builder for serious businesses.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.12-orange)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## Overview

Kashpages is a schema-driven business presence platform that enables serious businesses to create, customize, and publish professional web pages without coding. Built with enterprise-grade infrastructure principles inspired by Stripe, Notion, Vercel, and Linear.

### Key Features

- **Schema-Driven Architecture** - Strict component whitelist prevents layout destruction
- **50+ Production Templates** - Across 7 categories (Agency, eCommerce, Landing, Non-Profit, Portfolio, SaaS, Services)
- **Page Builder** - Drag-reorder sections, inline editing, autosave, revision history
- **AI Assistant** - Optional per-page AI with custom business training
- **Custom Domains** - Business tier includes full domain management with SSL
- **Subscription Tiers** - Free (1 page), Starter ₹499 (10 pages), Business ₹2,499 (unlimited)
- **SEO & Analytics** - Built-in optimization and tracking
- **Admin Panel** - Complete governance and moderation tools

## Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Radix UI** (accessible primitives)
- **dnd-kit** (drag and drop)

### Backend
- **Firebase Auth** (authentication)
- **Firestore** (database)
- **Realtime Database** (live features)
- **Firebase Storage** (media)
- **Firebase Functions** (serverless)
- **Firebase Data Connect** (PostgreSQL)

### Payments
- **Cashfree**
- **Razorpay**

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- Firebase project with Blaze plan
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Burhan-sheikh/kashmir-kashpages.git
cd kashmir-kashpages
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Firebase credentials:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
# ... see .env.example for complete list
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Firebase Setup

1. **Create Firebase project** at [console.firebase.google.com](https://console.firebase.google.com)

2. **Enable services:**
   - Authentication (Email/Password, Google)
   - Firestore Database
   - Realtime Database
   - Storage
   - Functions

3. **Deploy security rules:**
```bash
firebase deploy --only firestore:rules
firebase deploy --only storage:rules
```

4. **Initialize collections** (see `/docs/firebase-setup.md`)

## Project Structure

```
kashmir-kashpages/
├── src/
│   ├── app/                  # Next.js app router pages
│   │   ├── (auth)/          # Authentication pages
│   │   ├── (dashboard)/     # User dashboard
│   │   ├── (builder)/       # Page builder interface
│   │   ├── (admin)/         # Admin panel
│   │   ├── (public)/        # Published pages
│   │   └── api/             # API routes
│   ├── components/          # React components
│   │   ├── ui/              # Base UI components
│   │   ├── builder/         # Builder-specific
│   │   ├── dashboard/       # Dashboard components
│   │   └── admin/           # Admin components
│   ├── lib/                 # Utilities and helpers
│   │   ├── firebase/        # Firebase configuration
│   │   ├── hooks/           # Custom React hooks
│   │   └── utils/           # Utility functions
│   ├── types/               # TypeScript type definitions
│   ├── config/              # App configuration
│   └── styles/              # Global styles
├── public/                  # Static assets
├── functions/               # Firebase Functions
├── docs/                    # Documentation
└── firestore.rules          # Firestore security rules
```

## Core Concepts

### Schema-Driven Design

Users customize **data**, not **layout**. This ensures:
- No arbitrary HTML injection
- No layout destruction
- Predictable, secure output
- Consistent user experience

### Component System

**Sections Library:**
- Hero, Features, Testimonials, Pricing, FAQ
- Gallery, Contact, Footer, Stats, Team
- Process, CTA Ribbon

**Elements Library:**
- Heading, Paragraph, Button, Image, Video
- Form, Divider, Spacer, Social Links
- Map, Badges, Lists

### User Roles

**Guest** → Browse and explore
**User** → Create and manage pages
**Admin** → Platform governance

### Subscription Plans

| Plan | Price | Pages | Features |
|------|-------|-------|----------|
| Free | ₹0 | 1 | Basic features |
| Starter | ₹499/mo | 10 | SEO, Analytics, History |
| Business | ₹2,499/mo | Unlimited | Custom domain, All templates |

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
```

### Code Standards

- **TypeScript strict mode** enabled
- **ESLint** for code quality
- **Prettier** for consistent formatting
- **Conventional commits** for git messages

### Design System

Built on production-grade design tokens:
- 8px spacing grid
- Semantic color system (light/dark themes)
- Typography scale with clear hierarchy
- Component variants for consistency

## Deployment

### Vercel (Recommended)

1. **Import repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - automatic on git push

### Firebase Hosting

```bash
npm run build
firebase deploy --only hosting
```

### Custom Server

```bash
npm run build
npm run start
```

## Security

- **Server-side validation** for all privileged actions
- **Firebase security rules** enforce data access
- **Input sanitization** prevents injection attacks
- **Rate limiting** on sensitive endpoints
- **No client-side secrets** - API keys managed server-side

## Performance

- **Server-side rendering** for published pages
- **Static generation** for templates
- **Image optimization** with Next.js Image
- **Code splitting** and lazy loading
- **Firebase caching** strategies

## Contributing

This is a production platform. Contributions welcome:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## Roadmap

- [ ] Phase 1: Core platform and authentication ✓
- [ ] Phase 2: Page builder and templates ✓
- [ ] Phase 3: Subscription and payments
- [ ] Phase 4: Custom domains and SSL
- [ ] Phase 5: AI assistant integration
- [ ] Phase 6: Analytics dashboard
- [ ] Phase 7: Admin panel
- [ ] Phase 8: Mobile app (React Native)

## License

Proprietary - © 2026 Kashpages. All rights reserved.

## Support

- **Documentation:** [docs.kashpages.com](https://docs.kashpages.com)
- **Email:** support@kashpages.com
- **Issues:** [GitHub Issues](https://github.com/Burhan-sheikh/kashmir-kashpages/issues)

## Acknowledgments

Design and architecture inspired by:
- [Stripe](https://stripe.com) - Payment UX excellence
- [Notion](https://notion.so) - Content editing patterns
- [Vercel](https://vercel.com) - Developer experience
- [Linear](https://linear.app) - Product design discipline

---

**Built with precision for Kashmir businesses** 🏔️