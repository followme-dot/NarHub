'use client'

import Header from '@frontend/components/layout/Header'
import Footer from '@frontend/components/layout/Footer'
import CartDrawer from '@frontend/components/cart/CartDrawer'

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
