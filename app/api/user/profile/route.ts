import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@backend/lib/supabase'
import { auth } from '@backend/lib/auth'

// GET /api/user/profile - Get current user profile
export async function GET() {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { data: user, error } = await supabase
      .from('users')
      .select('id, email, name, company, phone, country, bio, website, linkedin, twitter, avatar_url, email_verified, created_at, updated_at')
      .eq('id', session.user.id)
      .single()

    if (error || !user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ user })
  } catch (error) {
    console.error('Error fetching profile:', error)
    return NextResponse.json(
      { message: 'Error fetching profile' },
      { status: 500 }
    )
  }
}

// PUT /api/user/profile - Update user profile
export async function PUT(request: NextRequest) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { name, company, phone, country, bio, website, linkedin, twitter } = body

    const { data: user, error } = await supabase
      .from('users')
      .update({
        name,
        company,
        phone,
        country,
        bio,
        website,
        linkedin,
        twitter,
        updated_at: new Date().toISOString(),
      })
      .eq('id', session.user.id)
      .select('id, email, name, company, phone, country, bio, website, linkedin, twitter, avatar_url, email_verified, created_at, updated_at')
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { message: 'Failed to update profile' },
        { status: 500 }
      )
    }

    return NextResponse.json({ user, message: 'Profile updated successfully' })
  } catch (error) {
    console.error('Error updating profile:', error)
    return NextResponse.json(
      { message: 'Error updating profile' },
      { status: 500 }
    )
  }
}
