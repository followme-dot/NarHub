# Frontend Architecture Guide

> **Narhub - Enterprise Software Marketplace**
>
> Technical documentation for frontend engineers

---

## Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Component Architecture](#component-architecture)
5. [Styling System](#styling-system)
6. [State Management](#state-management)
7. [Authentication](#authentication)
8. [Routing](#routing)
9. [Data Fetching](#data-fetching)
10. [Performance Optimization](#performance-optimization)
11. [Testing](#testing)
12. [Best Practices](#best-practices)

---

## Overview

Narhub's frontend is built with Next.js 15 using the App Router architecture. It's a server-first application that leverages React Server Components for optimal performance while maintaining rich interactivity through Client Components where needed.

### Key Principles

- **Server-First**: Default to Server Components for better performance
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Type Safety**: Full TypeScript coverage
- **Component Composition**: Small, reusable, composable components
- **Responsive Design**: Mobile-first approach with Tailwind CSS

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.1.7 | React framework with App Router |
| React | 19.0 | UI library |
| TypeScript | 5.0+ | Type-safe JavaScript |
| Tailwind CSS | 3.4 | Utility-first CSS framework |
| Framer Motion | 11+ | Animation library |
| Zustand | 4.5+ | State management |
| Lucide React | Latest | Icon library |
| next-auth | 5.0 | Authentication |

---

## Project Structure

```
frontend/
├── components/           # React components
│   ├── auth/            # Authentication components
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   │
│   ├── layout/          # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── CartDrawer.tsx
│   │
│   ├── products/        # Product-related components
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductFilters.tsx
│   │
│   ├── providers/       # Context providers
│   │   └── SessionProvider.tsx
│   │
│   └── ui/              # Reusable UI primitives
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── Badge.tsx
│       └── Spinner.tsx
│
├── hooks/               # Custom React hooks
│   ├── useAuth.ts       # Authentication hook
│   ├── useCart.ts       # Cart operations
│   └── useMediaQuery.ts # Responsive utilities
│
├── store/               # Zustand stores
│   └── cartStore.ts     # Shopping cart state
│
├── data/                # Static data
│   ├── products.ts      # Product catalog
│   └── bankDetails.ts   # Payment information
│
└── lib/                 # Utility functions
    ├── utils.ts         # General utilities
    └── formatters.ts    # Data formatters
```

---

## Component Architecture

### Component Types

#### 1. Server Components (Default)

```tsx
// app/(shop)/products/page.tsx
// No 'use client' directive - runs on server
import { ProductGrid } from '@frontend/components/products/ProductGrid'
import { products } from '@frontend/data/products'

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Platforms</h1>
      <ProductGrid products={products} />
    </main>
  )
}
```

#### 2. Client Components

```tsx
// frontend/components/ui/Button.tsx
'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all'

    const variants = {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      outline: 'border-2 border-gray-200 hover:border-blue-500'
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
export default Button
```

### Component Composition Pattern

```tsx
// Compound component pattern example
// frontend/components/ui/Card.tsx
'use client'

import { createContext, useContext, ReactNode } from 'react'

interface CardContextValue {
  variant: 'default' | 'glass' | 'elevated'
}

const CardContext = createContext<CardContextValue>({ variant: 'default' })

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'glass' | 'elevated'
  className?: string
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  const baseStyles = 'rounded-2xl overflow-hidden'

  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    glass: 'bg-white/75 backdrop-blur-xl border border-white/20',
    elevated: 'bg-white shadow-xl'
  }

  return (
    <CardContext.Provider value={{ variant }}>
      <div className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </div>
    </CardContext.Provider>
  )
}

Card.Header = function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 border-b border-gray-100 ${className}`}>{children}</div>
}

Card.Body = function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

Card.Footer = function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}
```

---

## Styling System

### Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './frontend/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        narhub: {
          primary: '#0066ff',
          'primary-dark': '#0052cc',
          secondary: '#7c3aed',
          text: '#1a1a2e',
          'text-secondary': '#4a4a68',
          'text-muted': '#71717a',
        },
        brand: {
          blue: '#0066ff',
          purple: '#7c3aed',
          cyan: '#06b6d4',
          green: '#10b981',
        }
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'Inter', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease forwards',
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      }
    }
  }
}

export default config
```

### CSS Variables

```css
/* app/globals.css */
@layer base {
  :root {
    /* Backgrounds */
    --bg-primary: #ffffff;
    --bg-secondary: #fcfcfd;
    --bg-tertiary: #f8f9fa;

    /* Brand Colors */
    --brand-primary: #0066ff;
    --brand-secondary: #7c3aed;

    /* Text Colors */
    --text-primary: #1a1a2e;
    --text-secondary: #4a4a68;
    --text-muted: #71717a;

    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #0066ff 0%, #7c3aed 100%);
  }
}
```

### Component Styles Pattern

```tsx
// Use Tailwind classes with component variants
const buttonStyles = {
  base: 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300',
  variants: {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-button hover:shadow-button-hover',
    secondary: 'bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-500',
  },
  sizes: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
}

// Usage
<button className={`${buttonStyles.base} ${buttonStyles.variants.primary} ${buttonStyles.sizes.md}`}>
  Click me
</button>
```

---

## State Management

### Zustand Store Pattern

```typescript
// frontend/store/cartStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string
  productId: string
  slug: string
  name: string
  icon: string
  priceMin: number
  priceMax: number
  quantity: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  isSyncing: boolean

  // Actions
  addItem: (product: Omit<CartItem, 'id' | 'quantity'>) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void

  // UI Actions
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void

  // Computed
  getItemCount: () => number
  getSubtotal: () => { min: number; max: number }
  isInCart: (productId: string) => boolean
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      isSyncing: false,

      addItem: (product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.productId === product.productId)

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.productId === product.productId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }

          return {
            items: [
              ...state.items,
              { ...product, id: crypto.randomUUID(), quantity: 1 },
            ],
          }
        })

        // Sync with server
        fetch('/api/cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product)
        }).catch(console.error)
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        }))
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },

      getSubtotal: () => {
        const items = get().items
        return {
          min: items.reduce((total, item) => total + item.priceMin * item.quantity, 0),
          max: items.reduce((total, item) => total + item.priceMax * item.quantity, 0),
        }
      },

      // ... other actions
    }),
    {
      name: 'narhub-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
)
```

### Using the Store

```tsx
'use client'

import { useCartStore } from '@frontend/store/cartStore'

export function CartButton() {
  const { items, toggleCart, getItemCount } = useCartStore()
  const itemCount = getItemCount()

  return (
    <button onClick={toggleCart} className="relative p-2">
      <ShoppingCart className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  )
}
```

---

## Authentication

### useAuth Hook

```typescript
// frontend/hooks/useAuth.ts
'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
}

export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const user: User | null = session?.user
    ? {
        id: session.user.id as string,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      }
    : null

  const login = useCallback(
    async (email: string, password: string, callbackUrl: string = '/') => {
      setIsLoading(true)
      try {
        const result = await signIn('credentials', {
          email,
          password,
          redirect: false,
        })

        if (result?.error) {
          return { success: false, error: 'Invalid email or password' }
        }

        router.push(callbackUrl)
        router.refresh()
        return { success: true }
      } catch (error) {
        return { success: false, error: 'An error occurred during login' }
      } finally {
        setIsLoading(false)
      }
    },
    [router]
  )

  const logout = useCallback(
    async (callbackUrl: string = '/') => {
      setIsLoading(true)
      try {
        await signOut({ redirect: false })
        router.push(callbackUrl)
        router.refresh()
      } finally {
        setIsLoading(false)
      }
    },
    [router]
  )

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      setIsLoading(true)
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        })

        const data = await response.json()

        if (!response.ok) {
          return { success: false, error: data.message || 'Registration failed' }
        }

        return { success: true }
      } catch (error) {
        return { success: false, error: 'An error occurred during registration' }
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  return {
    user,
    session,
    isAuthenticated: status === 'authenticated',
    isLoadingAuth: status === 'loading',
    isLoading,
    login,
    logout,
    register,
  }
}
```

### Protected Routes

```tsx
// app/(shop)/account/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@frontend/hooks/useAuth'

export default function AccountPage() {
  const router = useRouter()
  const { user, isAuthenticated, isLoadingAuth } = useAuth()

  useEffect(() => {
    if (!isLoadingAuth && !isAuthenticated) {
      router.push('/login?callbackUrl=/account')
    }
  }, [isAuthenticated, isLoadingAuth, router])

  if (isLoadingAuth) {
    return <LoadingSpinner />
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      {/* Account content */}
    </div>
  )
}
```

---

## Routing

### App Router Structure

```
app/
├── (auth)/                    # Auth route group (no layout wrapper)
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── forgot-password/page.tsx
│
├── (shop)/                    # Shop route group (with shop layout)
│   ├── layout.tsx             # Shared layout for shop pages
│   ├── products/
│   │   ├── page.tsx           # /products
│   │   └── [slug]/
│   │       └── page.tsx       # /products/vigil-ai, /products/nexus-grid, etc.
│   ├── checkout/page.tsx      # /checkout
│   ├── account/page.tsx       # /account
│   ├── orders/page.tsx        # /orders
│   ├── about/page.tsx         # /about
│   └── contact/page.tsx       # /contact
│
├── api/                       # API routes
│   └── ...
│
├── layout.tsx                 # Root layout
├── page.tsx                   # Homepage
└── not-found.tsx              # 404 page
```

### Dynamic Routes

```tsx
// app/(shop)/products/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { products } from '@frontend/data/products'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: `${product.name} | Narhub`,
    description: product.tagline,
  }
}

export default function ProductPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div>
      {/* Product detail content */}
    </div>
  )
}
```

---

## Data Fetching

### Server Components (Recommended)

```tsx
// app/(shop)/products/page.tsx
// Runs on server - no 'use client'

async function getProducts() {
  // Can fetch from database directly
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <ProductGrid products={products} />
  )
}
```

### Client-Side Fetching

```tsx
// For interactive/real-time data
'use client'

import { useState, useEffect } from 'react'

export function OrdersList() {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch('/api/orders')
        const data = await response.json()
        setOrders(data.orders)
      } catch (error) {
        console.error('Failed to fetch orders:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchOrders()
  }, [])

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}
```

---

## Performance Optimization

### 1. Image Optimization

```tsx
import Image from 'next/image'

<Image
  src="/products/vigil-ai.png"
  alt="Vigil AI"
  width={400}
  height={300}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL={blurDataUrl}
/>
```

### 2. Dynamic Imports

```tsx
import dynamic from 'next/dynamic'

// Heavy component loaded on demand
const ChartComponent = dynamic(() => import('./ChartComponent'), {
  loading: () => <ChartSkeleton />,
  ssr: false, // Disable SSR for client-only components
})
```

### 3. Route Prefetching

```tsx
import Link from 'next/link'

// Automatic prefetching on hover
<Link href="/products/vigil-ai" prefetch>
  View Product
</Link>
```

### 4. Memoization

```tsx
import { memo, useMemo, useCallback } from 'react'

const ProductCard = memo(function ProductCard({ product }) {
  const formattedPrice = useMemo(
    () => formatPrice(product.priceMin, product.priceMax),
    [product.priceMin, product.priceMax]
  )

  const handleAddToCart = useCallback(() => {
    addToCart(product)
  }, [product])

  return (
    // ...
  )
})
```

---

## Testing

### Component Testing with Jest

```tsx
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@frontend/components/ui/Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('shows loading state', () => {
    render(<Button isLoading>Submit</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

---

## Best Practices

### 1. Component Organization

- One component per file
- Co-locate related files (component, styles, tests)
- Use index files for clean imports

### 2. TypeScript

```tsx
// Always define prop interfaces
interface ProductCardProps {
  product: Product
  variant?: 'default' | 'compact'
  onAddToCart?: (product: Product) => void
}

// Use const assertions for static data
const CATEGORIES = ['defi', 'gaming', 'infrastructure', 'enterprise'] as const
type Category = typeof CATEGORIES[number]
```

### 3. Error Handling

```tsx
'use client'

import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-xl font-bold text-red-600">Something went wrong</h2>
      <button onClick={resetErrorBoundary} className="mt-4 btn-primary">
        Try again
      </button>
    </div>
  )
}

export function ProductsSection() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ProductGrid />
    </ErrorBoundary>
  )
}
```

### 4. Accessibility

```tsx
// Always include proper ARIA attributes
<button
  aria-label="Add to cart"
  aria-pressed={isInCart}
  onClick={handleAddToCart}
>
  <ShoppingCart className="w-5 h-5" />
</button>

// Use semantic HTML
<nav aria-label="Main navigation">
  <ul role="list">
    <li><Link href="/products">Products</Link></li>
  </ul>
</nav>
```

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)

---

*Document Version: 1.0.0*
*Last Updated: February 2024*
*Copyright © 2024 ffollowme oü*
