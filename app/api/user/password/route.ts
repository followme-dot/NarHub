import { NextRequest, NextResponse } from 'next/server'
import { hash, compare } from 'bcryptjs'
import { supabase } from '@backend/lib/supabase'
import { auth } from '@backend/lib/auth'

// PUT /api/user/password - Change user password
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
    const { currentPassword, newPassword } = body

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { message: 'Current password and new password are required' },
        { status: 400 }
      )
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { message: 'New password must be at least 8 characters' },
        { status: 400 }
      )
    }

    // Get current user with password hash
    const { data: user, error: fetchError } = await supabase
      .from('users')
      .select('id, password_hash')
      .eq('id', session.user.id)
      .single()

    if (fetchError || !user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      )
    }

    if (!user.password_hash) {
      return NextResponse.json(
        { message: 'Cannot change password for OAuth accounts' },
        { status: 400 }
      )
    }

    // Verify current password
    const isValid = await compare(currentPassword, user.password_hash)

    if (!isValid) {
      return NextResponse.json(
        { message: 'Current password is incorrect' },
        { status: 400 }
      )
    }

    // Hash new password
    const newPasswordHash = await hash(newPassword, 12)

    // Update password
    const { error: updateError } = await supabase
      .from('users')
      .update({
        password_hash: newPasswordHash,
        updated_at: new Date().toISOString(),
      })
      .eq('id', session.user.id)

    if (updateError) {
      console.error('Supabase error:', updateError)
      return NextResponse.json(
        { message: 'Failed to change password' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Password changed successfully' })
  } catch (error) {
    console.error('Error changing password:', error)
    return NextResponse.json(
      { message: 'Error changing password' },
      { status: 500 }
    )
  }
}
