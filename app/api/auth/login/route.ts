import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { signToken } from '@/lib/auth'
import { checkRateLimit, resetRateLimit } from '@/lib/rate-limit'

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

function cleanEnvValue(val?: string): string | undefined {
  if (!val) return undefined
  return val.trim().replace(/^['"]|['"]$/g, '')
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const ip = getClientIp(request)
    const normalizedEmail = email.trim().toLowerCase()
    const cleanPassword = password.trim().replace(/^['"]|['"]$/g, '')

    const ipLimit = checkRateLimit(`login:ip:${ip}`, 20, 15 * 60 * 1000)
    const accountLimit = checkRateLimit(`login:acct:${ip}:${normalizedEmail}`, 10, 15 * 60 * 1000)

    if (!ipLimit.allowed || !accountLimit.allowed) {
      const retryAfterSeconds = !ipLimit.allowed
        ? (ipLimit as { retryAfterSeconds: number }).retryAfterSeconds
        : (accountLimit as { retryAfterSeconds: number }).retryAfterSeconds
      return NextResponse.json(
        { error: 'Too many login attempts. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } }
      )
    }

    let authenticatedUser: {
      id: string
      email: string
      name: string
      role: string
    } | null = null

    // 1. Try SQLite database lookup first (works on local dev & Docker server)
    try {
      const { prisma, ensureSchemaInitialized } = await import('@/lib/db')
      await ensureSchemaInitialized()

      const dbUser = await prisma.user.findUnique({
        where: { email: normalizedEmail },
      })

      if (dbUser) {
        const matchesRaw = await bcrypt.compare(password, dbUser.password)
        const matchesClean = !matchesRaw && cleanPassword !== password
          ? await bcrypt.compare(cleanPassword, dbUser.password)
          : false

        if (matchesRaw || matchesClean) {
          authenticatedUser = {
            id: dbUser.id,
            email: dbUser.email,
            name: dbUser.name,
            role: dbUser.role,
          }
        }
      }
    } catch (dbErr) {
      console.warn('Database lookup skipped or unavailable, falling back to env credentials:', dbErr)
    }

    // 2. Fallback to INITIAL_ADMIN_PASSWORD / INITIAL_HR_PASSWORD environment variables
    // (Handles Netlify serverless where dev.db is not committed, or when .env.local is updated)
    if (!authenticatedUser) {
      const envAdminPass = cleanEnvValue(process.env.INITIAL_ADMIN_PASSWORD)
      const envHrPass = cleanEnvValue(process.env.INITIAL_HR_PASSWORD)

      if (
        normalizedEmail === 'admin@esc.com' &&
        envAdminPass &&
        (password === envAdminPass || cleanPassword === envAdminPass)
      ) {
        authenticatedUser = {
          id: 'admin-account',
          email: 'admin@esc.com',
          name: 'System Admin',
          role: 'ADMIN',
        }
        // Best-effort sync to SQLite if available
        try {
          const { prisma } = await import('@/lib/db')
          const hashedPassword = await bcrypt.hash(envAdminPass, 10)
          const synced = await prisma.user.upsert({
            where: { email: 'admin@esc.com' },
            update: { password: hashedPassword },
            create: {
              email: 'admin@esc.com',
              password: hashedPassword,
              name: 'System Admin',
              role: 'ADMIN',
            },
          })
          authenticatedUser.id = synced.id
        } catch {
          // ignore on read-only serverless
        }
      } else if (
        normalizedEmail === 'hr@esc.com' &&
        envHrPass &&
        (password === envHrPass || cleanPassword === envHrPass)
      ) {
        authenticatedUser = {
          id: 'hr-account',
          email: 'hr@esc.com',
          name: 'ESC HR Manager',
          role: 'HR',
        }
        try {
          const { prisma } = await import('@/lib/db')
          const hashedPassword = await bcrypt.hash(envHrPass, 10)
          const synced = await prisma.user.upsert({
            where: { email: 'hr@esc.com' },
            update: { password: hashedPassword },
            create: {
              email: 'hr@esc.com',
              password: hashedPassword,
              name: 'ESC HR Manager',
              role: 'HR',
            },
          })
          authenticatedUser.id = synced.id
        } catch {
          // ignore on read-only serverless
        }
      }
    }

    if (!authenticatedUser) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Successful login — clear the attempt counters for this account/IP.
    resetRateLimit(`login:acct:${ip}:${normalizedEmail}`)

    const token = signToken({
      userId: authenticatedUser.id,
      email: authenticatedUser.email,
      name: authenticatedUser.name,
      role: authenticatedUser.role,
    })

    const response = NextResponse.json({
      success: true,
      user: authenticatedUser,
    })

    const forwardedProto = request.headers.get('x-forwarded-proto')
    const isHttps = forwardedProto
      ? forwardedProto.split(',')[0].trim() === 'https'
      : request.url.startsWith('https://')

    response.cookies.set({
      name: 'cms_session',
      value: token,
      httpOnly: true,
      path: '/',
      secure: isHttps,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: 'lax',
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
