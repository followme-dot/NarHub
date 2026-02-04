import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Autenticación | Narhub',
  description: 'Inicia sesión o regístrate en Narhub',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-narhub-bg flex flex-col">
      {/* Simple Header */}
      <header className="p-6">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="text-2xl font-bold font-outfit bg-gradient-to-r from-narhub-primary to-narhub-secondary bg-clip-text text-transparent">
            Narhub
          </span>
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {children}
      </main>

      {/* Simple Footer */}
      <footer className="p-6 text-center text-sm text-narhub-text-muted">
        <p>© 2024 Narhub. Una empresa de ffollowme oü.</p>
      </footer>
    </div>
  )
}
