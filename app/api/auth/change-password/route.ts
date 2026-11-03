import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { getCurrentUser } from '@/lib/auth'

export async function POST(request: Request) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { currentPassword, newPassword } = await request.json()

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'Current password and new password are required' }, { status: 400 })
    }

    if (newPassword.length < 10) {
      return NextResponse.json({ error: 'New password must be at least 10 characters long' }, { status: 400 })
    }

    if (newPassword === currentPassword) {
      return NextResponse.json({ error: 'New password must be different from the current password' }, { status: 400 })
    }

    let user = await prisma.user.findUnique({
      where: { id: currentUser.userId },
    })
    if (!user && currentUser.email) {
      user = await prisma.user.findUnique({
        where: { email: currentUser.email },
      })
    }

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const isValid = await bcrypt.compare(currentPassword, user.password)
    if (!isValid) {
      return NextResponse.json({ error: 'Incorrect current password' }, { status: 400 })
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10)
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedNewPassword },
    })

    return NextResponse.json({ success: true, message: 'Password updated successfully' })
  } catch (error) {
    console.error('Password change error:', error)
    return NextResponse.json({ error: 'Failed to update password' }, { status: 500 })
  }
}
