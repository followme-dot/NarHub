// Re-export auth utilities from backend
// This file exists at the root for @/auth import compatibility
export { auth, signIn, signOut, handlers, authConfig, authOptions } from '@backend/lib/auth'
