import { auth } from '@backend/lib/auth'
import { NextResponse } from 'next/server'

// Routes that require authentication
const protectedRoutes = ['/checkout', '/account', '/orders']

// Routes only for non-authenticated users
const authRoutes = ['/login', '/register']

export default auth((req) => {
  const { nextUrl, auth: session } = req
  const isLoggedIn = !!session?.user
  const path = nextUrl.pathname

  // Check if trying to access protected route without auth
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route))
  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL('/login', nextUrl.origin)
    loginUrl.searchParams.set('callbackUrl', path)
    return NextResponse.redirect(loginUrl)
  }

  // Check if trying to access auth routes while logged in
  const isAuthRoute = authRoutes.some((route) => path.startsWith(route))
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL('/', nextUrl.origin))
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    // Match all routes except static files and api
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)',
  ],
}
