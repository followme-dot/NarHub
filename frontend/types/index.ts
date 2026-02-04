// Product types for frontend
export interface Product {
  slug: string
  name: string
  tagline: string
  description?: string
  category: ProductCategory
  priceMin: number
  priceMax: number
  icon: string
  featured?: boolean
  flagship?: boolean
  linesOfCode?: number
  techStack?: string[]
  features?: string[]
  specs?: Record<string, string>
  valuation?: string
  devCost?: string
  comparable?: string
  demoUrl?: string
  images?: string[]
}

export type ProductCategory =
  | 'DEFI_TRADING'
  | 'GAMING_METAVERSE'
  | 'INFRASTRUCTURE_IDENTITY'
  | 'ENTERPRISE_COMPLIANCE'

// Cart types for frontend
export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  itemCount: number
}

// User types
export interface User {
  id: string
  email: string
  name?: string | null
  image?: string | null
  company?: string | null
}

// Form types
export interface LoginFormData {
  email: string
  password: string
  remember?: boolean
}

export interface RegisterFormData {
  email: string
  password: string
  confirmPassword: string
  name?: string
  company?: string
  acceptTerms: boolean
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  budget?: string
  message: string
  platforms?: string[]
}

// Navigation types
export interface NavItem {
  name: string
  href: string
  children?: NavItem[]
}

// UI types
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ToastOptions {
  title: string
  description?: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}
