import { createClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side Supabase client (for use in React components)
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)

// Server-side Supabase client (for use in API routes)
export const createServerSupabaseClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Database types
export interface User {
  id: string
  email: string
  name: string | null
  avatar_url: string | null
  company: string | null
  phone: string | null
  country: string | null
  created_at: string
  updated_at: string
  email_verified: boolean
  role: 'user' | 'admin'
}

export interface Order {
  id: string
  user_id: string
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  total_amount: number
  currency: string
  payment_method: 'sepa' | 'swift'
  payment_reference: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_slug: string
  product_name: string
  price_min: number
  price_max: number
  final_price: number | null
  created_at: string
}

export interface ContactInquiry {
  id: string
  user_id: string | null
  name: string
  email: string
  company: string | null
  phone: string | null
  subject: string
  message: string
  status: 'new' | 'read' | 'replied' | 'closed'
  created_at: string
}

// Database type for Supabase client
export type Database = {
  public: {
    Tables: {
      users: {
        Row: User
        Insert: Omit<User, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<User, 'id' | 'created_at'>>
      }
      orders: {
        Row: Order
        Insert: Omit<Order, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Order, 'id' | 'created_at'>>
      }
      order_items: {
        Row: OrderItem
        Insert: Omit<OrderItem, 'id' | 'created_at'>
        Update: Partial<Omit<OrderItem, 'id' | 'created_at'>>
      }
      contact_inquiries: {
        Row: ContactInquiry
        Insert: Omit<ContactInquiry, 'id' | 'created_at'>
        Update: Partial<Omit<ContactInquiry, 'id' | 'created_at'>>
      }
    }
  }
}
