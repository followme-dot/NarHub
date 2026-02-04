// Re-export Prisma types for convenience
export type {
  User,
  Product,
  ProductCategory,
  ProductStatus,
  Cart,
  CartItem,
  Order,
  OrderItem,
  OrderStatus,
  UserRole,
} from '@prisma/client'

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Auth types
export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name?: string
  company?: string
}

// Cart types
export interface CartWithItems {
  id: string
  userId: string | null
  sessionId: string | null
  items: CartItemWithProduct[]
  createdAt: Date
  updatedAt: Date
}

export interface CartItemWithProduct {
  id: string
  cartId: string
  productId: string
  quantity: number
  product: {
    id: string
    name: string
    slug: string
    price: number
    priceMin: number
    priceMax: number
    icon: string | null
    thumbnail: string | null
  }
  createdAt: Date
  updatedAt: Date
}

export interface CartTotals {
  subtotal: number
  tax: number
  discount: number
  total: number
  itemCount: number
}

// Order types
export interface CreateOrderInput {
  billingAddress?: {
    name: string
    email: string
    company?: string
    address: string
    city: string
    state?: string
    postalCode: string
    country: string
  }
  companyName?: string
  vatNumber?: string
  notes?: string
}
