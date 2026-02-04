# API Reference

> **Narhub - Enterprise Software Marketplace**
>
> Complete REST API documentation

---

## Table of Contents

1. [Overview](#overview)
2. [Authentication](#authentication)
3. [Error Handling](#error-handling)
4. [Endpoints](#endpoints)
   - [Auth](#auth-endpoints)
   - [User](#user-endpoints)
   - [Cart](#cart-endpoints)
   - [Orders](#orders-endpoints)
5. [Data Types](#data-types)
6. [Rate Limiting](#rate-limiting)

---

## Overview

### Base URL

```
Production: https://narhub.com/api
Development: http://localhost:3000/api
```

### Request Format

All requests must include:

```http
Content-Type: application/json
```

For authenticated endpoints:

```http
Cookie: next-auth.session-token=<session_token>
```

### Response Format

All responses follow this structure:

```json
{
  "data": { },
  "message": "Success message",
  "error": null
}
```

Error responses:

```json
{
  "data": null,
  "message": "Error description",
  "error": "ERROR_CODE"
}
```

---

## Authentication

Narhub uses session-based authentication via NextAuth.js.

### Login Flow

1. User submits credentials to `/api/auth/signin`
2. Server validates and creates session
3. Session token stored in HTTP-only cookie
4. Subsequent requests include cookie automatically

### Session Cookie

```
Name: next-auth.session-token
HttpOnly: true
Secure: true (production)
SameSite: Lax
MaxAge: 30 days
```

---

## Error Handling

### HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource doesn't exist |
| 409 | Conflict - Resource already exists |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |

### Error Response Structure

```json
{
  "message": "Human-readable error message",
  "code": "ERROR_CODE",
  "errors": {
    "field": ["Validation error message"]
  }
}
```

### Common Error Codes

| Code | Description |
|------|-------------|
| `UNAUTHORIZED` | No valid session |
| `FORBIDDEN` | Valid session but insufficient permissions |
| `VALIDATION_ERROR` | Input validation failed |
| `DUPLICATE_EMAIL` | Email already registered |
| `INVALID_CREDENTIALS` | Wrong email or password |
| `NOT_FOUND` | Requested resource not found |
| `RATE_LIMITED` | Too many requests |

---

## Endpoints

---

## Auth Endpoints

### POST /api/auth/register

Create a new user account.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "company": "Acme Inc"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Full name (2-100 chars) |
| email | string | Yes | Valid email address |
| password | string | Yes | Min 8 characters |
| company | string | No | Company name |

**Response (201 Created):**

```json
{
  "message": "Account created successfully",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2024-02-01T12:00:00.000Z"
  }
}
```

**Errors:**

| Status | Code | Message |
|--------|------|---------|
| 400 | VALIDATION_ERROR | Name, email and password are required |
| 400 | VALIDATION_ERROR | Password must be at least 8 characters |
| 400 | DUPLICATE_EMAIL | An account with this email already exists |

---

### POST /api/auth/signin

Sign in with credentials. This is handled by NextAuth.js.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (200 OK):**

Sets session cookie and returns user info.

```json
{
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Errors:**

| Status | Code | Message |
|--------|------|---------|
| 401 | INVALID_CREDENTIALS | Invalid email or password |

---

### POST /api/auth/signout

Sign out and invalidate session.

**Response (200 OK):**

```json
{
  "message": "Signed out successfully"
}
```

---

### GET /api/auth/session

Get current session info.

**Response (200 OK):**

```json
{
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  },
  "expires": "2024-03-01T12:00:00.000Z"
}
```

If not authenticated:

```json
{
  "user": null
}
```

---

## User Endpoints

### GET /api/user/profile

Get the current user's profile.

**Authentication:** Required

**Response (200 OK):**

```json
{
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "john@example.com",
    "name": "John Doe",
    "company": "Acme Inc",
    "role": "user",
    "email_verified": true,
    "created_at": "2024-01-15T10:30:00.000Z"
  }
}
```

**Errors:**

| Status | Code | Message |
|--------|------|---------|
| 401 | UNAUTHORIZED | No autenticado |

---

### PUT /api/user/profile

Update the current user's profile.

**Authentication:** Required

**Request Body:**

```json
{
  "name": "John Smith",
  "company": "New Company Inc"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | No | Full name |
| company | string | No | Company name |

**Response (200 OK):**

```json
{
  "message": "Profile updated successfully",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "john@example.com",
    "name": "John Smith",
    "company": "New Company Inc"
  }
}
```

---

### PUT /api/user/password

Change the current user's password.

**Authentication:** Required

**Request Body:**

```json
{
  "currentPassword": "oldpassword123",
  "newPassword": "newsecurepassword456"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| currentPassword | string | Yes | Current password |
| newPassword | string | Yes | New password (min 8 chars) |

**Response (200 OK):**

```json
{
  "message": "Password updated successfully"
}
```

**Errors:**

| Status | Code | Message |
|--------|------|---------|
| 400 | VALIDATION_ERROR | Current password and new password are required |
| 400 | VALIDATION_ERROR | New password must be at least 8 characters |
| 401 | INVALID_CREDENTIALS | Current password is incorrect |

---

## Cart Endpoints

### GET /api/cart

Get the current user's cart.

**Authentication:** Required

**Response (200 OK):**

```json
{
  "items": [
    {
      "id": "cart-item-uuid",
      "productId": "vigil-ai",
      "slug": "vigil-ai",
      "name": "VIGIL AI",
      "icon": "🛡️",
      "priceMin": 3000000,
      "priceMax": 5000000,
      "quantity": 1
    }
  ]
}
```

Empty cart:

```json
{
  "items": []
}
```

---

### POST /api/cart

Add an item to the cart.

**Authentication:** Required

**Request Body:**

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

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | Yes | Unique product identifier |
| slug | string | Yes | URL-friendly product slug |
| name | string | Yes | Product display name |
| icon | string | No | Product emoji/icon |
| priceMin | number | Yes | Minimum price in cents |
| priceMax | number | Yes | Maximum price in cents |

**Response (200 OK):**

```json
{
  "message": "Producto agregado al carrito"
}
```

**Notes:**
- If product already in cart, quantity is incremented
- Cart is created automatically if user doesn't have one

---

### PUT /api/cart

Update item quantity in cart.

**Authentication:** Required

**Request Body:**

```json
{
  "productId": "vigil-ai",
  "quantity": 2
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | Yes | Product to update |
| quantity | number | Yes | New quantity (0 = remove) |

**Response (200 OK):**

```json
{
  "message": "Cantidad actualizada"
}
```

---

### DELETE /api/cart

Remove item from cart or clear entire cart.

**Authentication:** Required

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| productId | string | No | Product to remove. If omitted, clears entire cart |

**Examples:**

```
DELETE /api/cart?productId=vigil-ai  # Remove specific item
DELETE /api/cart                      # Clear entire cart
```

**Response (200 OK):**

```json
{
  "message": "Producto eliminado del carrito"
}
```

or

```json
{
  "message": "Carrito vaciado"
}
```

---

## Orders Endpoints

### GET /api/orders

Get the current user's order history.

**Authentication:** Required

**Response (200 OK):**

```json
{
  "orders": [
    {
      "id": "order-uuid",
      "status": "pending",
      "total_amount": 4000000,
      "currency": "EUR",
      "payment_method": "SEPA",
      "payment_reference": "NH-ABC123-XYZ",
      "created_at": "2024-02-01T14:30:00.000Z",
      "updated_at": "2024-02-01T14:30:00.000Z",
      "billing_name": "John Doe",
      "billing_company": "Acme Inc",
      "items": [
        {
          "id": "item-uuid",
          "product_slug": "vigil-ai",
          "product_name": "VIGIL AI",
          "product_icon": "🛡️",
          "price_min": 3000000,
          "price_max": 5000000,
          "final_price": 4000000,
          "quantity": 1
        }
      ]
    }
  ]
}
```

**Order Status Values:**

| Status | Description |
|--------|-------------|
| pending | Order created, awaiting payment |
| processing | Payment received, processing delivery |
| completed | Order fulfilled |
| cancelled | Order cancelled |
| refunded | Payment refunded |

---

### POST /api/orders

Create a new order.

**Authentication:** Required

**Request Body:**

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
  "billing_address": "123 Main St, Berlin, Germany",
  "billing_country": "Germany",
  "billing_vat": "DE123456789",
  "notes": "Please contact before delivery"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| items | array | Yes | Order items (min 1) |
| total_amount | number | Yes | Total in cents |
| currency | string | No | ISO currency code (default: EUR) |
| payment_method | string | No | SEPA or SWIFT |
| billing_name | string | No | Billing name |
| billing_company | string | No | Company name |
| billing_address | string | No | Full address |
| billing_country | string | No | Country |
| billing_vat | string | No | VAT number |
| notes | string | No | Special instructions |

**Response (201 Created):**

```json
{
  "message": "Order created successfully",
  "order": {
    "id": "order-uuid",
    "payment_reference": "NH-ABC123-XYZ",
    "status": "pending",
    "total_amount": 4000000,
    "currency": "EUR",
    "created_at": "2024-02-01T14:30:00.000Z"
  }
}
```

**Notes:**
- User's cart is automatically cleared after successful order creation
- Payment reference is auto-generated for bank transfers

**Errors:**

| Status | Code | Message |
|--------|------|---------|
| 400 | VALIDATION_ERROR | Order must have at least one item |
| 400 | VALIDATION_ERROR | Total amount is required |

---

## Data Types

### User

```typescript
interface User {
  id: string           // UUID
  email: string        // Unique email address
  name: string | null  // Display name
  company: string | null
  role: 'user' | 'admin'
  email_verified: boolean
  created_at: string   // ISO 8601 datetime
  updated_at: string   // ISO 8601 datetime
}
```

### CartItem

```typescript
interface CartItem {
  id: string           // UUID
  productId: string    // Product slug
  slug: string         // URL-friendly slug
  name: string         // Display name
  icon: string         // Emoji icon
  priceMin: number     // Price in cents
  priceMax: number     // Price in cents
  quantity: number     // Quantity (usually 1 for software)
}
```

### Order

```typescript
interface Order {
  id: string
  user_id: string
  status: 'pending' | 'processing' | 'completed' | 'cancelled' | 'refunded'
  total_amount: number        // In cents
  currency: string           // ISO currency code
  payment_method: string | null
  payment_reference: string | null
  payment_confirmed_at: string | null
  billing_name: string | null
  billing_company: string | null
  billing_address: string | null
  billing_country: string | null
  billing_vat: string | null
  notes: string | null
  created_at: string
  updated_at: string
  items: OrderItem[]
}
```

### OrderItem

```typescript
interface OrderItem {
  id: string
  order_id: string
  product_slug: string
  product_name: string
  product_icon: string | null
  price_min: number
  price_max: number
  final_price: number | null
  quantity: number
  created_at: string
}
```

---

## Rate Limiting

### Limits

| Endpoint | Limit | Window |
|----------|-------|--------|
| POST /api/auth/register | 5 requests | 1 minute |
| POST /api/auth/signin | 10 requests | 1 minute |
| All other endpoints | 100 requests | 1 minute |

### Rate Limit Response

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 60
```

```json
{
  "message": "Too many requests, please try again later",
  "code": "RATE_LIMITED",
  "retryAfter": 60
}
```

---

## Examples

### cURL Examples

#### Register

```bash
curl -X POST https://narhub.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword123"
  }'
```

#### Get Cart

```bash
curl https://narhub.com/api/cart \
  -H "Cookie: next-auth.session-token=YOUR_SESSION_TOKEN"
```

#### Create Order

```bash
curl -X POST https://narhub.com/api/orders \
  -H "Content-Type: application/json" \
  -H "Cookie: next-auth.session-token=YOUR_SESSION_TOKEN" \
  -d '{
    "items": [
      {
        "product_slug": "vigil-ai",
        "product_name": "VIGIL AI",
        "price_min": 3000000,
        "price_max": 5000000,
        "quantity": 1
      }
    ],
    "total_amount": 4000000,
    "payment_method": "SEPA"
  }'
```

### JavaScript/TypeScript Examples

```typescript
// Register
const response = await fetch('/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'securepassword123'
  })
})

const data = await response.json()

// Add to cart
await fetch('/api/cart', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    productId: 'vigil-ai',
    slug: 'vigil-ai',
    name: 'VIGIL AI',
    priceMin: 3000000,
    priceMax: 5000000
  })
})

// Get orders
const orders = await fetch('/api/orders')
  .then(res => res.json())
  .then(data => data.orders)
```

---

*Document Version: 1.0.0*
*Last Updated: February 2024*
*Copyright © 2024 ffollowme oü*
