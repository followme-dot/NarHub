# DevOps & Deployment Guide

> **Narhub - Enterprise Software Marketplace**
>
> Technical documentation for DevOps engineers

---

## Table of Contents

1. [Overview](#overview)
2. [Infrastructure](#infrastructure)
3. [Environment Setup](#environment-setup)
4. [Deployment Options](#deployment-options)
5. [CI/CD Pipeline](#cicd-pipeline)
6. [Monitoring & Logging](#monitoring--logging)
7. [Scaling](#scaling)
8. [Security](#security)
9. [Backup & Recovery](#backup--recovery)
10. [Troubleshooting](#troubleshooting)

---

## Overview

Narhub is designed for cloud-native deployment with a serverless architecture. The recommended stack uses Vercel for hosting, Supabase for database, and Cloudflare for DNS and security.

### Production Architecture

```
                    ┌─────────────────┐
                    │   Cloudflare    │
                    │   (DNS + WAF)   │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │     Vercel      │
                    │  (Edge Network) │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
    ┌────▼────┐        ┌─────▼─────┐      ┌─────▼─────┐
    │ Static  │        │  Next.js  │      │   API     │
    │ Assets  │        │   SSR     │      │  Routes   │
    └─────────┘        └───────────┘      └─────┬─────┘
                                                │
                                       ┌────────▼────────┐
                                       │    Supabase     │
                                       │  (PostgreSQL)   │
                                       └─────────────────┘
```

---

## Infrastructure

### Required Services

| Service | Purpose | Tier Recommendation |
|---------|---------|---------------------|
| Vercel | Hosting & CDN | Pro ($20/month) |
| Supabase | Database & Auth | Pro ($25/month) |
| Cloudflare | DNS & Security | Pro ($20/month) |
| GitHub | Version Control | Team ($4/user/month) |

### Domain Configuration

1. **Register domain** with your preferred registrar
2. **Configure Cloudflare**:
   - Add domain to Cloudflare
   - Update nameservers at registrar
   - Enable SSL/TLS (Full Strict mode)
3. **Connect to Vercel**:
   - Add custom domain in Vercel dashboard
   - Configure CNAME records in Cloudflare

```
# Cloudflare DNS Records
Type    Name    Content                 Proxy Status
CNAME   @       cname.vercel-dns.com    Proxied
CNAME   www     cname.vercel-dns.com    Proxied
```

---

## Environment Setup

### Development

```bash
# Clone repository
git clone https://github.com/ffollowme/narhub.git
cd narhub

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your credentials

# Start development server
npm run dev
```

### Environment Variables

#### Required for All Environments

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# NextAuth
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# App
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_APP_NAME=Narhub
```

#### Production-Specific

```env
# Set in Vercel dashboard
NEXTAUTH_URL=https://narhub.com
NEXT_PUBLIC_APP_URL=https://narhub.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SENTRY_DSN=https://xxx@sentry.io/xxx
```

### Environment Variable Security

| Variable | Where to Store | Notes |
|----------|----------------|-------|
| `NEXT_PUBLIC_*` | Vercel Environment Variables | Exposed to client |
| `SUPABASE_SERVICE_ROLE_KEY` | Vercel Environment Variables | Server-only, NEVER expose |
| `NEXTAUTH_SECRET` | Vercel Environment Variables | Generate with `openssl rand -base64 32` |

---

## Deployment Options

### Option 1: Vercel (Recommended)

#### Initial Setup

1. **Connect Repository**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Login
   vercel login

   # Link project
   vercel link
   ```

2. **Configure Project Settings** (Vercel Dashboard):
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Node.js Version: 20.x

3. **Add Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add all required variables for Production, Preview, Development

4. **Deploy**:
   ```bash
   # Production deployment
   vercel --prod

   # Preview deployment (from any branch)
   vercel
   ```

#### Automatic Deployments

- **Production**: Push to `main` branch
- **Preview**: Push to any other branch or create PR

### Option 2: Docker

#### Dockerfile

```dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build application
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

#### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  narhub:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
      - NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
      - SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY}
      - NEXTAUTH_URL=${NEXTAUTH_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
    restart: unless-stopped

  # Optional: nginx reverse proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./certs:/etc/nginx/certs
    depends_on:
      - narhub
```

#### Build & Run

```bash
# Build image
docker build -t narhub:latest .

# Run container
docker run -p 3000:3000 --env-file .env narhub:latest

# Or with Docker Compose
docker-compose up -d
```

### Option 3: Kubernetes

```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: narhub
  labels:
    app: narhub
spec:
  replicas: 3
  selector:
    matchLabels:
      app: narhub
  template:
    metadata:
      labels:
        app: narhub
    spec:
      containers:
        - name: narhub
          image: narhub:latest
          ports:
            - containerPort: 3000
          envFrom:
            - secretRef:
                name: narhub-secrets
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
          livenessProbe:
            httpGet:
              path: /api/health
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /api/health
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: narhub-service
spec:
  selector:
    app: narhub
  ports:
    - port: 80
      targetPort: 3000
  type: LoadBalancer
```

---

## CI/CD Pipeline

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check

  test:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm test

  deploy-preview:
    runs-on: ubuntu-latest
    needs: [lint, test]
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install --global vercel@latest
      - run: vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}
      - run: vercel build --token=${{ secrets.VERCEL_TOKEN }}
      - run: vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }}

  deploy-production:
    runs-on: ubuntu-latest
    needs: [lint, test]
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install --global vercel@latest
      - run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      - run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      - run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

### Required Secrets

Configure in GitHub repository settings:

| Secret | Description |
|--------|-------------|
| `VERCEL_TOKEN` | Vercel API token |
| `VERCEL_ORG_ID` | Vercel organization ID |
| `VERCEL_PROJECT_ID` | Vercel project ID |

---

## Monitoring & Logging

### Vercel Analytics

Enable in `next.config.ts`:

```typescript
const nextConfig = {
  // Enable Vercel Analytics
  analyticsId: process.env.VERCEL_ANALYTICS_ID,
}
```

### Sentry Error Tracking

```bash
# Install Sentry
npm install @sentry/nextjs
```

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
})
```

### Custom Health Check

```typescript
// app/api/health/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@backend/lib/supabase'

export async function GET() {
  try {
    // Check database connection
    const { error } = await supabase.from('users').select('id').limit(1)

    if (error) {
      return NextResponse.json(
        { status: 'unhealthy', database: 'disconnected' },
        { status: 503 }
      )
    }

    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      database: 'connected',
      version: process.env.npm_package_version,
    })
  } catch (error) {
    return NextResponse.json(
      { status: 'unhealthy', error: 'Internal error' },
      { status: 503 }
    )
  }
}
```

### Log Aggregation

Use Vercel's built-in logs or integrate with:
- **Datadog**: Real-time log aggregation
- **LogRocket**: Session replay and error tracking
- **Axiom**: Log management optimized for Vercel

---

## Scaling

### Vercel Auto-Scaling

Vercel automatically scales based on traffic. For enterprise needs:

| Feature | Pro | Enterprise |
|---------|-----|------------|
| Serverless Function Concurrency | 1000 | Unlimited |
| Edge Function Invocations | 1M/month | Unlimited |
| Bandwidth | 1TB/month | Unlimited |

### Database Scaling (Supabase)

```sql
-- Monitor database performance
SELECT * FROM pg_stat_activity;

-- Check table sizes
SELECT
  relname AS table,
  pg_size_pretty(pg_total_relation_size(relid)) AS size
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC;
```

### Caching Strategy

```typescript
// next.config.ts
const nextConfig = {
  // Enable ISR
  experimental: {
    isrFlushToDisk: true,
  },

  // Configure cache headers
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 's-maxage=86400, stale-while-revalidate' },
        ],
      },
    ]
  },
}
```

---

## Security

### Cloudflare WAF Rules

1. **Enable Bot Management**
2. **Configure Rate Limiting**:
   - `/api/auth/*`: 10 requests/minute
   - `/api/*`: 100 requests/minute
3. **Block Suspicious Countries** (if applicable)
4. **Enable DDOS Protection**

### Headers Security

```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

### Environment Variable Audit

```bash
# Never commit these
.env
.env.local
.env.production

# Verify .gitignore includes
cat .gitignore | grep -E "\.env"
```

---

## Backup & Recovery

### Database Backups (Supabase)

Supabase Pro includes:
- **Point-in-time recovery** (up to 7 days)
- **Daily automated backups**

Manual backup:

```bash
# Export database
pg_dump -h db.[PROJECT].supabase.co -U postgres -d postgres > backup.sql

# Import database
psql -h db.[PROJECT].supabase.co -U postgres -d postgres < backup.sql
```

### Code Backup

- All code is stored in GitHub
- Enable branch protection for `main`
- Tag releases: `git tag v1.0.0`

### Disaster Recovery Plan

1. **Database Failure**:
   - Supabase handles automatic failover
   - Use point-in-time recovery if needed

2. **Application Failure**:
   - Rollback to previous Vercel deployment
   - `vercel rollback [deployment-url]`

3. **Complete Outage**:
   - DNS failover to maintenance page
   - Communicate via status page

---

## Troubleshooting

### Common Issues

#### Build Failures

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

#### Database Connection Issues

```bash
# Test Supabase connection
curl -X GET "https://[PROJECT].supabase.co/rest/v1/" \
  -H "apikey: [ANON_KEY]"
```

#### Environment Variables Not Loading

```bash
# Verify in Vercel
vercel env ls

# Pull latest env
vercel env pull
```

### Debug Mode

```typescript
// Enable verbose logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', { /* ... */ })
}
```

### Performance Issues

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

---

## Runbooks

### Deploy Hotfix

```bash
# 1. Create hotfix branch
git checkout -b hotfix/issue-123 main

# 2. Make fix
# ... edit files ...

# 3. Test locally
npm run build && npm start

# 4. Deploy to preview
vercel

# 5. Merge to main
git checkout main
git merge hotfix/issue-123
git push origin main

# 6. Production deploy happens automatically
```

### Rollback Production

```bash
# List recent deployments
vercel ls

# Rollback to previous deployment
vercel rollback [DEPLOYMENT_URL]
```

### Scale Database

1. Go to Supabase Dashboard
2. Project Settings → Database
3. Upgrade compute size

---

*Document Version: 1.0.0*
*Last Updated: February 2024*
*Copyright © 2024 ffollowme oü*
