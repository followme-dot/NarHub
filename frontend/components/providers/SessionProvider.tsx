'use client'

import { ReactNode } from 'react'
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'

interface Props {
  children: ReactNode
}

/**
 * Session Provider
 * Uses NextAuth SessionProvider for authentication with Supabase
 */
export default function SessionProvider({ children }: Props) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}
