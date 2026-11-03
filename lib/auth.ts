import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

function getSecret(): string {
  const secret = process.env.JWT_SECRET?.trim().replace(/^['"]|['"]$/g, '')
  if (secret) {
    return secret
  }
  const fallbackSeed =
    process.env.INITIAL_ADMIN_PASSWORD?.trim() ||
    process.env.INITIAL_HR_PASSWORD?.trim() ||
    'esc-cms-fallback-jwt-secret-key-2026'
  return `esc-jwt-${fallbackSeed}`
}

export interface JWTPayload {
  userId: string
  email: string
  name: string
  role: string
}

export function signToken(payload: JWTPayload): string {
  return jwt.sign(payload, getSecret(), { expiresIn: '7d' })
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, getSecret()) as JWTPayload
  } catch {
    return null
  }
}

export async function getCurrentUser(): Promise<JWTPayload | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('cms_session')?.value
  if (!token) return null
  return verifyToken(token)
}

export type Role = 'ADMIN' | 'HR' | 'MANAGER'

export async function requireUser(): Promise<JWTPayload | { error: string; status: number }> {
  const user = await getCurrentUser()
  if (!user) {
    return { error: 'Unauthorized', status: 401 }
  }
  return user
}

export async function requireRole(
  allowedRoles: Role[]
): Promise<JWTPayload | { error: string; status: number }> {
  const user = await getCurrentUser()
  if (!user) {
    return { error: 'Unauthorized', status: 401 }
  }
  if (!allowedRoles.includes(user.role as Role)) {
    return { error: 'Forbidden — insufficient permissions', status: 403 }
  }
  return user
}

export function isAuthResult(
  result: JWTPayload | { error: string; status: number }
): result is { error: string; status: number } {
  return 'error' in result
}
