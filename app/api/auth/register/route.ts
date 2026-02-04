import { NextRequest, NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import { getSupabaseAdmin } from '@backend/lib/supabase'

// Force Node.js runtime for bcryptjs compatibility
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  // Get supabase client lazily at runtime
  const supabase = getSupabaseAdmin()
  try {
    const body = await request.json()
    const { name, email, password, company } = body

// Validate input
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

    // Check if user already exists
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

    // Create user in Supabase
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

      // Handle specific Supabase errors
      if (error.code === '42501') {
        // RLS policy violation - need service role key
        return NextResponse.json(
          { message: 'Database permission error. Please configure SUPABASE_SERVICE_ROLE_KEY in .env' },
          { status: 500 }
        )
      }

      if (error.code === '23505') {
        // Unique constraint violation
        return NextResponse.json(
          { message: 'An account with this email already exists' },
          { status: 400 }
        )
      }

      return NextResponse.json(
        { message: `Failed to create account: ${error.message}` },
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
