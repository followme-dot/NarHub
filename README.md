# Narhub - Enterprise Software Marketplace

<div align="center">

![Narhub](https://img.shields.io/badge/Narhub-Enterprise%20Software-0066ff?style=for-the-badge)

**The Premier B2B Marketplace for Production-Ready Enterprise Software**

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

[Live Demo](https://narhub.com) | [Documentation](docs/) | [API Reference](docs/API.md) | [Whitepaper](docs/WHITEPAPER.md)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Key Metrics](#key-metrics)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Company Information](#company-information)
- [License](#license)

---

## Overview

**Narhub** is a B2B enterprise software marketplace developed by **ffollowme oü**, a technology company headquartered in Tallinn, Estonia. The platform showcases and facilitates the sale of 19 production-ready software platforms across four strategic categories:

### Platform Categories

| Category | Platforms | Focus |
|----------|-----------|-------|
| **DeFi & Trading** | 6 | Cryptocurrency exchanges, DEX, trading bots, DeFi protocols |
| **Gaming & Metaverse** | 5 | Gaming platforms, metaverse infrastructure, NFT marketplaces |
| **Infrastructure & Identity** | 4 | Blockchain nodes, identity solutions, security tools |
| **Enterprise & Compliance** | 4 | KYC/AML, regulatory compliance, enterprise tools |

### Flagship Products

1. **VIGIL AI** - GNN-powered blockchain security ($3M - $5M)
2. **NEXUS GRID** - Multi-chain DeFi aggregator ($15M - $25M)
3. **AURORA DEX** - High-frequency DEX ($8M - $15M)
4. **GENESIS REALMS** - AAA metaverse engine ($25M - $45M)
5. **QUANTUM VAULT** - Institutional custody ($12M - $20M)

---

## Key Metrics

| Metric | Value |
|--------|-------|
| Total Platforms | 19 |
| Combined Valuation | **$375M+** |
| Lines of Code | **400,000+** |
| Deployment Time | 7-8 weeks |
| Security Audits | Triple-audited |
| Compliance | SOC 2, GDPR, ISO 27001 |

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.1.7 | React framework with App Router |
| TypeScript | 5.0+ | Type-safe JavaScript |
| Tailwind CSS | 3.4 | Utility-first CSS |
| Framer Motion | 11+ | Animations |
| Zustand | 4.5+ | State management |
| Lucide React | Latest | Icon library |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20+ | Runtime |
| Next.js API Routes | 15.1.7 | RESTful API |
| Supabase | Latest | PostgreSQL database |
| NextAuth.js | 5.0 | Authentication |
| bcryptjs | Latest | Password hashing |

### Infrastructure

| Service | Purpose |
|---------|---------|
| Vercel | Hosting & CDN |
| Supabase | Database & Auth |
| Cloudflare | DNS & Security |
| GitHub | Version control |

---

## Project Structure

```
NARDIHA-PORTFOLIO/
│
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── login/               # Login page
│   │   ├── register/            # Registration page
│   │   └── forgot-password/     # Password recovery
│   │
│   ├── (shop)/                   # Main application routes
│   │   ├── products/            # Product catalog
│   │   │   ├── page.tsx         # Products listing
│   │   │   └── [slug]/          # Individual product pages
│   │   │       └── page.tsx     # 19 product detail pages
│   │   ├── checkout/            # Checkout flow
│   │   ├── account/             # User account management
│   │   ├── orders/              # Order history
│   │   ├── about/               # About page
│   │   └── contact/             # Contact page
│   │
│   ├── api/                      # API Routes
│   │   ├── auth/                # Authentication endpoints
│   │   │   ├── register/        # POST /api/auth/register
│   │   │   └── [...nextauth]/   # NextAuth handlers
│   │   ├── cart/                # Cart operations
│   │   ├── orders/              # Order management
│   │   └── user/                # User profile
│   │       ├── profile/         # GET/PUT profile
│   │       └── password/        # PUT password change
│   │
│   ├── globals.css               # Global styles & CSS variables
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
│
├── frontend/                     # Frontend modules
│   ├── components/               # React components
│   │   ├── auth/                # Authentication components
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── products/            # Product components
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductGrid.tsx
│   │   ├── providers/           # Context providers
│   │   │   └── SessionProvider.tsx
│   │   └── ui/                  # UI primitives
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       └── Modal.tsx
│   │
│   ├── hooks/                    # Custom React hooks
│   │   └── useAuth.ts           # Authentication hook
│   │
│   ├── store/                    # Zustand stores
│   │   └── cartStore.ts         # Shopping cart state
│   │
│   └── data/                     # Static data
│       ├── products.ts          # Product catalog
│       └── bankDetails.ts       # Payment information
│
├── backend/                      # Backend modules
│   └── lib/                     # Backend utilities
│       └── supabase.ts          # Supabase client configuration
│
├── prisma/                       # Database schema (reference)
│   └── schema.prisma            # Prisma schema definition
│
├── public/                       # Static assets
│   ├── products/                # Product images
│   ├── narhub-logo.svg          # Main logo
│   ├── Rafael baena Alvarez.jpg # Team photo
│   └── Edwards J. Rico.jpg      # Team photo
│
├── docs/                         # Documentation
│   ├── FRONTEND.md              # Frontend architecture guide
│   ├── BACKEND.md               # Backend & API guide
│   ├── DEVOPS.md                # DevOps & deployment guide
│   ├── API.md                   # API reference
│   └── WHITEPAPER.md            # Business whitepaper
│
├── types/                        # TypeScript declarations
│   └── next-auth.d.ts           # NextAuth type extensions
│
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── auth.ts                       # NextAuth configuration
├── middleware.ts                 # Next.js middleware
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies & scripts
├── LICENSE                       # Proprietary license
└── README.md                     # This file
```

---

## Quick Start

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or higher
- **Supabase** account (free tier works)
- **Git** for version control

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ffollowme/narhub.git
cd narhub

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env

# 4. Configure your .env file (see Environment Variables section)

# 5. Run development server
npm run dev

# 6. Open http://localhost:3000
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
# ============================================
# SUPABASE CONFIGURATION
# ============================================
# Get these from: https://supabase.com/dashboard/project/[PROJECT]/settings/api

NEXT_PUBLIC_SUPABASE_URL="https://[PROJECT_ID].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5..."
SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5..."

# ============================================
# NEXTAUTH CONFIGURATION
# ============================================
# Generate secret: openssl rand -base64 32

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-min-32-chars"

# ============================================
# APPLICATION CONFIGURATION
# ============================================

NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Narhub"

# ============================================
# DATABASE (Optional - if using Prisma directly)
# ============================================

DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres"
```

### Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anonymous key (public) |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service role key (server-side only) |
| `NEXTAUTH_URL` | Yes | Application URL |
| `NEXTAUTH_SECRET` | Yes | Secret for JWT signing |
| `NEXT_PUBLIC_APP_URL` | No | Public app URL |
| `NEXT_PUBLIC_APP_NAME` | No | Application name |

---

## Database Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy API credentials to `.env`

### 2. Run Database Migrations

Execute in Supabase SQL Editor:

```sql
-- =============================================
-- USERS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  name VARCHAR(255),
  company VARCHAR(255),
  provider VARCHAR(50) DEFAULT 'email',
  role VARCHAR(50) DEFAULT 'user',
  email_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);

-- =============================================
-- CARTS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS carts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

CREATE INDEX idx_carts_user_id ON carts(user_id);

-- =============================================
-- CART ITEMS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cart_id UUID REFERENCES carts(id) ON DELETE CASCADE NOT NULL,
  product_slug VARCHAR(255) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  product_icon VARCHAR(500),
  price_min DECIMAL(12,2) DEFAULT 0,
  price_max DECIMAL(12,2) DEFAULT 0,
  quantity INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(cart_id, product_slug)
);

CREATE INDEX idx_cart_items_cart_id ON cart_items(cart_id);

-- =============================================
-- ORDERS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  status VARCHAR(50) DEFAULT 'pending',
  total_amount DECIMAL(12,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'EUR',
  payment_method VARCHAR(100),
  payment_reference VARCHAR(100),
  payment_confirmed_at TIMESTAMPTZ,
  billing_name VARCHAR(255),
  billing_company VARCHAR(255),
  billing_address TEXT,
  billing_country VARCHAR(100),
  billing_vat VARCHAR(100),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);

-- =============================================
-- ORDER ITEMS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  product_slug VARCHAR(255) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  product_icon VARCHAR(500),
  price_min DECIMAL(12,2) DEFAULT 0,
  price_max DECIMAL(12,2) DEFAULT 0,
  final_price DECIMAL(12,2),
  quantity INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_order_items_order_id ON order_items(order_id);
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run type-check` | Run TypeScript compiler check |

---

## Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import project from GitHub to Vercel
   - Configure environment variables

2. **Deploy**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

### Docker

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## Documentation

| Document | Description |
|----------|-------------|
| [FRONTEND.md](docs/FRONTEND.md) | Component architecture, styling system, state management |
| [BACKEND.md](docs/BACKEND.md) | API routes, database schema, authentication flow |
| [DEVOPS.md](docs/DEVOPS.md) | Deployment, CI/CD pipelines, monitoring, scaling |
| [API.md](docs/API.md) | Complete REST API reference with examples |
| [WHITEPAPER.md](docs/WHITEPAPER.md) | Business model, market analysis, investment thesis |

---

## Company Information

### ffollowme oü

| Field | Value |
|-------|-------|
| **Legal Name** | ffollowme oü |
| **Commercial Name** | Narhub |
| **Jurisdiction** | Republic of Estonia, European Union |
| **Industry** | Enterprise Software / SaaS |
| **Founded** | 2020 |
| **Headquarters** | Tallinn, Estonia |

### Leadership

- **Rafael Baena Alvarez** - Chief Executive Officer
- **Edwards J. Rico** - Chief Sales Officer (LATAM & USA)

### Contact

- **General**: info@ffollowme.com
- **Sales**: sales@ffollowme.com
- **Legal**: legal@ffollowme.com

### Locations

| City | Country | Role |
|------|---------|------|
| Tallinn | Estonia 🇪🇪 | Headquarters |
| Panama City | Panama 🇵🇦 | Operations |
| Delaware | USA 🇺🇸 | Legal Entity |

---

## License

Copyright © 2024 ffollowme oü. All rights reserved.

This software is proprietary and confidential. See [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with precision by ffollowme oü**

Estonia 🇪🇪 | Panama 🇵🇦 | USA 🇺🇸

---

[Website](https://narhub.com) · [Contact](mailto:info@ffollowme.com) · [LinkedIn](https://linkedin.com/company/ffollowme)

</div>
