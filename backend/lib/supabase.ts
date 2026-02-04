import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Lazy initialization - clients are created on first use, not at module import
// This prevents build-time errors when env vars are not available (e.g., Netlify/Vercel builds)

let _supabaseClient: SupabaseClient | null = null
let _supabaseAdmin: SupabaseClient | null = null

// Get environment variables safely
function getEnvVars() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  return { supabaseUrl, supabaseAnonKey, supabaseServiceKey }
}

// Client-side Supabase client (with RLS)
export function getSupabaseClient(): SupabaseClient {
  if (_supabaseClient) return _supabaseClient

  const { supabaseUrl, supabaseAnonKey } = getEnvVars()

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase environment variables are not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.')
  }

  _supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  return _supabaseClient
}

// Server-side Supabase client (bypasses RLS for admin operations)
export function getSupabaseAdmin(): SupabaseClient {
  if (_supabaseAdmin) return _supabaseAdmin

  const { supabaseUrl, supabaseAnonKey, supabaseServiceKey } = getEnvVars()

  if (!supabaseUrl) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL is not configured.')
  }

  // Use service key if available, otherwise fall back to anon key
  const key = supabaseServiceKey || supabaseAnonKey

  if (!key) {
    throw new Error('Supabase key is not configured. Please set SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY.')
  }

  _supabaseAdmin = createClient(supabaseUrl, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })

  return _supabaseAdmin
}

// Legacy exports for backward compatibility - these are now getters that create clients on demand
// WARNING: These will throw at runtime if env vars are missing, but won't break the build
export const supabaseClient = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    return (getSupabaseClient() as unknown as Record<string | symbol, unknown>)[prop]
  }
})

export const supabase = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    return (getSupabaseAdmin() as unknown as Record<string | symbol, unknown>)[prop]
  }
})

export default supabase
