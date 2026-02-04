import { supabase } from './supabase'
import bcrypt from 'bcryptjs'

export interface AuthUser {
  id: string
  email: string
  name: string | null
  avatar_url: string | null
  company: string | null
  role: string
}

export interface SignUpData {
  email: string
  password: string
  name: string
  company?: string
}

export interface SignInData {
  email: string
  password: string
}

// Hash password
const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(12)
  return bcrypt.hash(password, salt)
}

// Verify password
const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash)
}

// Sign up new user
export const signUp = async (data: SignUpData): Promise<{ user: AuthUser | null; error: string | null }> => {
  try {
    // Check if user already exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', data.email.toLowerCase())
      .single()

    if (existingUser) {
      return { user: null, error: 'An account with this email already exists' }
    }

    // Hash password
    const passwordHash = await hashPassword(data.password)

    // Create user
    const { data: newUser, error } = await supabase
      .from('users')
      .insert({
        email: data.email.toLowerCase(),
        password_hash: passwordHash,
        name: data.name,
        company: data.company || null,
        provider: 'email',
        email_verified: false,
        role: 'user'
      })
      .select('id, email, name, avatar_url, company, role')
      .single()

    if (error) {
      console.error('Sign up error:', error)
      return { user: null, error: 'Failed to create account. Please try again.' }
    }

    return { user: newUser as AuthUser, error: null }
  } catch (err) {
    console.error('Sign up error:', err)
    return { user: null, error: 'An unexpected error occurred' }
  }
}

// Sign in user
export const signIn = async (data: SignInData): Promise<{ user: AuthUser | null; error: string | null }> => {
  try {
    // Find user by email
    const { data: user, error } = await supabase
      .from('users')
      .select('id, email, name, avatar_url, company, role, password_hash')
      .eq('email', data.email.toLowerCase())
      .single()

    if (error || !user) {
      return { user: null, error: 'Invalid email or password' }
    }

    // Verify password
    if (!user.password_hash) {
      return { user: null, error: 'This account uses social login. Please sign in with Google or GitHub.' }
    }

    const isValidPassword = await verifyPassword(data.password, user.password_hash)
    if (!isValidPassword) {
      return { user: null, error: 'Invalid email or password' }
    }

    // Return user without password hash
    const { password_hash, ...userWithoutPassword } = user
    return { user: userWithoutPassword as AuthUser, error: null }
  } catch (err) {
    console.error('Sign in error:', err)
    return { user: null, error: 'An unexpected error occurred' }
  }
}

// Get user by ID
export const getUserById = async (id: string): Promise<AuthUser | null> => {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('id, email, name, avatar_url, company, role')
      .eq('id', id)
      .single()

    if (error || !user) {
      return null
    }

    return user as AuthUser
  } catch (err) {
    console.error('Get user error:', err)
    return null
  }
}

// Update user profile
export const updateUserProfile = async (
  userId: string,
  data: { name?: string; company?: string; phone?: string; country?: string; avatar_url?: string }
): Promise<{ success: boolean; error: string | null }> => {
  try {
    const { error } = await supabase
      .from('users')
      .update(data)
      .eq('id', userId)

    if (error) {
      return { success: false, error: 'Failed to update profile' }
    }

    return { success: true, error: null }
  } catch (err) {
    console.error('Update profile error:', err)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// Change password
export const changePassword = async (
  userId: string,
  currentPassword: string,
  newPassword: string
): Promise<{ success: boolean; error: string | null }> => {
  try {
    // Get current password hash
    const { data: user, error: fetchError } = await supabase
      .from('users')
      .select('password_hash')
      .eq('id', userId)
      .single()

    if (fetchError || !user || !user.password_hash) {
      return { success: false, error: 'Unable to verify current password' }
    }

    // Verify current password
    const isValidPassword = await verifyPassword(currentPassword, user.password_hash)
    if (!isValidPassword) {
      return { success: false, error: 'Current password is incorrect' }
    }

    // Hash new password
    const newPasswordHash = await hashPassword(newPassword)

    // Update password
    const { error: updateError } = await supabase
      .from('users')
      .update({ password_hash: newPasswordHash })
      .eq('id', userId)

    if (updateError) {
      return { success: false, error: 'Failed to update password' }
    }

    return { success: true, error: null }
  } catch (err) {
    console.error('Change password error:', err)
    return { success: false, error: 'An unexpected error occurred' }
  }
}
