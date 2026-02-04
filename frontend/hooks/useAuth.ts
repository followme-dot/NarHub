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

/**
 * useAuth Hook
 * Wrapper around NextAuth for authentication with Supabase
 *
 * Note: This hook is SSG-safe - it handles the case when useSession
 * returns undefined during static generation/prerendering
 */
export function useAuth() {
  // useSession can return undefined during SSG/prerendering
  const sessionResult = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Handle SSG case where useSession returns undefined
  const session = sessionResult?.data ?? null
  const status = sessionResult?.status ?? 'loading'

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
    async (name: string, email: string, password: string, company?: string) => {
      setIsLoading(true)
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password, company }),
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
