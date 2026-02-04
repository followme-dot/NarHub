# Backend Architecture Guide

> **Narhub - Enterprise Software Marketplace**
>
> Technical documentation for backend engineers

---

## Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Architecture](#architecture)
4. [Database Schema](#database-schema)
5. [API Routes](#api-routes)
6. [Authentication](#authentication)
7. [Supabase Integration](#supabase-integration)
8. [Security](#security)
9. [Error Handling](#error-handling)
10. [Best Practices](#best-practices)

---

## Overview

Narhub's backend is built using Next.js API Routes with a serverless architecture. The backend handles authentication, cart management, order processing, and user management. All data is stored in PostgreSQL via Supabase.

### Key Principles

- **Serverless First**: Leveraging Vercel Edge Functions
- **Type Safety**: Full TypeScript coverage
- **Security**: Authentication via NextAuth.js, encrypted passwords
- **RESTful**: Standard REST API conventions
- **Database Abstraction**: Supabase client for PostgreSQL

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js API Routes | 15.1.7 | Serverless API endpoints |
| TypeScript | 5.0+ | Type-safe development |
| Supabase | Latest | PostgreSQL database & client |
| NextAuth.js | 5.0 | Authentication & sessions |
| bcryptjs | Latest | Password hashing |
| Zod | Latest | Schema validation (optional) |

---

## Architecture

### Directory Structure

```
backend/
└── lib/
    └── supabase.ts         # Supabase client configuration

app/api/
├── auth/
│   ├── register/
│   │   └── route.ts        # POST /api/auth/register
│   └── [...nextauth]/
│       └── route.ts        # NextAuth handlers
│
├── cart/
│   └── route.ts            # GET, POST, PUT, DELETE /api/cart
│
├── orders/
│   └── route.ts            # GET, POST /api/orders
│
└── user/
    ├── profile/
    │   └── route.ts        # GET, PUT /api/user/profile
    └── password/
        └── route.ts        # PUT /api/user/password
```

### Request Flow

```
Client Request
     │
     ▼
┌─────────────────┐
│   Middleware    │  ← Authentication check
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   API Route     │  ← Business logic
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Supabase     │  ← Database operations
└────────┬────────┘
         │
         ▼
    JSON Response
```

---

## Database Schema

### Entity Relationship Diagram

```
┌──────────────┐       ┌──────────────┐
│    users     │       │    carts     │
├──────────────┤       ├──────────────┤
│ id (PK)      │──────<│ user_id (FK) │
│ email        │       │ id (PK)      │
│ password_hash│       │ created_at   │
│ name         │       │ updated_at   │
│ company      │       └──────┬───────┘
│ role         │              │
│ created_at   │              │
└──────┬───────┘              │
       │                      │
       │         ┌────────────┴───────────┐
       │         │      cart_items        │
       │         ├────────────────────────┤
       │         │ id (PK)                │
       │         │ cart_id (FK)           │
       │         │ product_slug           │
       │         │ product_name           │
       │         │ price_min              │
       │         │ price_max              │
       │         │ quantity               │
       │         └────────────────────────┘
       │
       │         ┌────────────────────────┐
       └────────>│       orders           │
                 ├────────────────────────┤
                 │ id (PK)                │
                 │ user_id (FK)           │
                 │ status                 │
                 │ total_amount           │
                 │ currency               │
                 │ payment_method         │
                 │ payment_reference      │
                 │ billing_*              │
                 │ created_at             │
                 └──────────┬─────────────┘
                            │
                 ┌──────────┴─────────────┐
                 │     order_items        │
                 ├────────────────────────┤
                 │ id (PK)                │
                 │ order_id (FK)          │
                 │ product_slug           │
                 │ product_name           │
                 │ final_price            │
                 │ quantity               │
                 └────────────────────────┘
```

### Table Definitions

#### Users Table

```sql
CREATE TABLE users (
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

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
```

#### Orders Table

```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  status VARCHAR(50) DEFAULT 'pending',
  total_amount DECIMAL(12,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'EUR',
  payment_method VARCHAR(100),
  payment_reference VARCHAR(100) UNIQUE,
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

-- Order Status Enum Values:
-- 'pending', 'processing', 'completed', 'cancelled', 'refunded'
```

---

## API Routes

### Authentication

#### POST /api/auth/register

Creates a new user account.

```typescript
// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import { supabase } from '@backend/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, company } = await request.json()

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Name, email and password are required' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    // Check existing user
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email.toLowerCase())
      .single()

    if (existingUser) {
      return NextResponse.json(
        { message: 'An account with this email already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    // Create user
    const { data: user, error } = await supabase
      .from('users')
      .insert({
        name,
        email: email.toLowerCase(),
        password_hash: hashedPassword,
        company: company || null,
        provider: 'email',
        role: 'user',
        email_verified: false,
      })
      .select('id, name, email, created_at')
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { message: 'Failed to create account' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Account created successfully', user },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Error creating account' },
      { status: 500 }
    )
  }
}
```

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "company": "Acme Inc"
}
```

**Response (201):**
```json
{
  "message": "Account created successfully",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2024-02-01T12:00:00Z"
  }
}
```

### Cart Operations

#### GET /api/cart

Retrieves the current user's cart.

```typescript
// app/api/cart/route.ts
export async function GET() {
  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  // Get user's cart
  const { data: cart } = await supabase
    .from('carts')
    .select('id')
    .eq('user_id', session.user.id)
    .single()

  if (!cart) {
    return NextResponse.json({ items: [] })
  }

  // Get cart items
  const { data: items } = await supabase
    .from('cart_items')
    .select('*')
    .eq('cart_id', cart.id)

  return NextResponse.json({ items: items || [] })
}
```

#### POST /api/cart

Adds an item to the cart.

**Request:**
```json
{
  "productId": "vigil-ai",
  "slug": "vigil-ai",
  "name": "VIGIL AI",
  "icon": "🛡️",
  "priceMin": 3000000,
  "priceMax": 5000000
}
```

#### DELETE /api/cart?productId=vigil-ai

Removes an item from the cart.

### Orders

#### GET /api/orders

Retrieves the user's order history.

```typescript
export async function GET() {
  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const { data: orders, error } = await supabase
    .from('orders')
    .select(`
      id,
      status,
      total_amount,
      currency,
      payment_method,
      payment_reference,
      created_at,
      order_items (
        id,
        product_slug,
        product_name,
        product_icon,
        final_price,
        quantity
      )
    `)
    .eq('user_id', session.user.id)
    .order('created_at', { ascending: false })

  return NextResponse.json({ orders: orders || [] })
}
```

#### POST /api/orders

Creates a new order.

**Request:**
```json
{
  "items": [
    {
      "product_slug": "vigil-ai",
      "product_name": "VIGIL AI",
      "product_icon": "🛡️",
      "price_min": 3000000,
      "price_max": 5000000,
      "final_price": 4000000,
      "quantity": 1
    }
  ],
  "total_amount": 4000000,
  "currency": "EUR",
  "payment_method": "SEPA",
  "billing_name": "John Doe",
  "billing_company": "Acme Inc",
  "billing_address": "123 Main St, City",
  "billing_country": "Germany",
  "billing_vat": "DE123456789"
}
```

**Response (201):**
```json
{
  "message": "Order created successfully",
  "order": {
    "id": "uuid",
    "payment_reference": "NH-ABC123-XYZ"
  }
}
```

---

## Authentication

### NextAuth.js Configuration

```typescript
// auth.ts
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'
import { supabase } from '@backend/lib/supabase'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const { data: user } = await supabase
          .from('users')
          .select('id, email, name, password_hash, role')
          .eq('email', credentials.email.toLowerCase())
          .single()

        if (!user || !user.password_hash) {
          return null
        }

        const isValid = await compare(credentials.password, user.password_hash)

        if (!isValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
})
```

### Protecting API Routes

```typescript
import { auth } from '@/auth'

export async function GET() {
  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.json(
      { message: 'Unauthorized' },
      { status: 401 }
    )
  }

  // User is authenticated
  const userId = session.user.id

  // ... rest of the handler
}
```

### Role-Based Access Control

```typescript
export async function DELETE(request: NextRequest) {
  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  // Admin-only endpoint
  if (session.user.role !== 'admin') {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }

  // ... admin operation
}
```

---

## Supabase Integration

### Client Configuration

```typescript
// backend/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Client-side (with RLS)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// Server-side (bypasses RLS)
export const supabase = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : supabaseClient

export default supabase
```

### Query Patterns

```typescript
// Select with joins
const { data, error } = await supabase
  .from('orders')
  .select(`
    *,
    order_items (*)
  `)
  .eq('user_id', userId)
  .order('created_at', { ascending: false })

// Insert with return
const { data: user, error } = await supabase
  .from('users')
  .insert({ name, email, password_hash })
  .select()
  .single()

// Update
const { error } = await supabase
  .from('users')
  .update({ name: 'New Name' })
  .eq('id', userId)

// Delete
const { error } = await supabase
  .from('cart_items')
  .delete()
  .eq('cart_id', cartId)
  .eq('product_slug', productSlug)

// Upsert
const { data, error } = await supabase
  .from('carts')
  .upsert({ user_id: userId })
  .select()
  .single()
```

---

## Security

### Password Hashing

```typescript
import { hash, compare } from 'bcryptjs'

// Hashing (on registration)
const hashedPassword = await hash(password, 12) // 12 salt rounds

// Verification (on login)
const isValid = await compare(inputPassword, storedHash)
```

### Input Validation

```typescript
// Using Zod for validation
import { z } from 'zod'

const registerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(100),
  company: z.string().max(200).optional(),
})

export async function POST(request: NextRequest) {
  const body = await request.json()

  const result = registerSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { message: 'Validation error', errors: result.error.flatten() },
      { status: 400 }
    )
  }

  const { name, email, password, company } = result.data
  // ... continue with validated data
}
```

### Rate Limiting

```typescript
// Implement rate limiting for sensitive endpoints
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests per minute
})

export async function POST(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  const { success } = await ratelimit.limit(ip)

  if (!success) {
    return NextResponse.json(
      { message: 'Too many requests' },
      { status: 429 }
    )
  }

  // ... continue with request
}
```

---

## Error Handling

### Consistent Error Responses

```typescript
// Standard error response format
interface ErrorResponse {
  message: string
  code?: string
  errors?: Record<string, string[]>
}

// Helper function
function errorResponse(message: string, status: number, code?: string) {
  return NextResponse.json({ message, code }, { status })
}

// Usage
export async function POST(request: NextRequest) {
  try {
    // ... operation

    if (error.code === '23505') {
      return errorResponse('Email already exists', 400, 'DUPLICATE_EMAIL')
    }

    return errorResponse('Internal server error', 500)
  } catch (error) {
    console.error('API Error:', error)
    return errorResponse('Internal server error', 500)
  }
}
```

### HTTP Status Codes

| Code | Meaning | When to Use |
|------|---------|-------------|
| 200 | OK | Successful GET, PUT, DELETE |
| 201 | Created | Successful POST (resource created) |
| 400 | Bad Request | Invalid input, validation error |
| 401 | Unauthorized | Missing or invalid authentication |
| 403 | Forbidden | Valid auth but insufficient permissions |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Resource already exists (duplicate) |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Unexpected server error |

---

## Best Practices

### 1. Always Validate Input

```typescript
// Validate at the start of every handler
if (!email || !password) {
  return errorResponse('Email and password are required', 400)
}

if (password.length < 8) {
  return errorResponse('Password must be at least 8 characters', 400)
}
```

### 2. Use Transactions for Multi-Step Operations

```typescript
// When creating order with items
const { data: order, error: orderError } = await supabase
  .from('orders')
  .insert(orderData)
  .select()
  .single()

if (orderError) {
  return errorResponse('Failed to create order', 500)
}

const { error: itemsError } = await supabase
  .from('order_items')
  .insert(orderItems)

if (itemsError) {
  // Rollback: delete the order
  await supabase.from('orders').delete().eq('id', order.id)
  return errorResponse('Failed to create order items', 500)
}
```

### 3. Log Errors for Debugging

```typescript
try {
  // ... operation
} catch (error) {
  console.error('API Error:', {
    endpoint: '/api/orders',
    method: 'POST',
    userId: session?.user?.id,
    error: error instanceof Error ? error.message : error,
    stack: error instanceof Error ? error.stack : undefined,
  })

  return errorResponse('Internal server error', 500)
}
```

### 4. Type Everything

```typescript
interface CreateOrderRequest {
  items: OrderItem[]
  total_amount: number
  currency: string
  payment_method: string
  billing_name?: string
  billing_company?: string
  billing_address?: string
  billing_country?: string
  billing_vat?: string
}

interface OrderItem {
  product_slug: string
  product_name: string
  product_icon: string
  price_min: number
  price_max: number
  final_price?: number
  quantity: number
}
```

---

## Resources

- [Next.js API Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Supabase Documentation](https://supabase.com/docs)
- [NextAuth.js Documentation](https://authjs.dev)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

*Document Version: 1.0.0*
*Last Updated: February 2024*
*Copyright © 2024 ffollowme oü*
