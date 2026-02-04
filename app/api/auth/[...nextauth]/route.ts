// API Route: /api/auth/[...nextauth]
// This file must be in app/api for Next.js routing
// Logic is imported from backend

import { handlers } from '@backend/lib/auth'

export const { GET, POST } = handlers
