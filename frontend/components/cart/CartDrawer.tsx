'use client'

import { Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useCartStore } from '@frontend/store/cartStore'
import { useAuth } from '@frontend/hooks/useAuth'
import Button from '@frontend/components/ui/Button'
import CartItem from './CartItem'
import { formatPriceRange } from '@frontend/lib/utils'
import { LogIn, UserPlus, ShieldAlert } from 'lucide-react'

export default function CartDrawer() {
  const { items, isOpen, closeCart, getItemCount, getSubtotal } = useCartStore()
  const { isAuthenticated, isLoadingAuth } = useAuth()
  const itemCount = getItemCount()
  const subtotal = getSubtotal()

  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md
              bg-white border-l border-gray-200
              flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-[#1a1a2e]">
                  Tu Carrito
                </h2>
                <p className="text-sm text-[#71717a]">
                  {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-lg text-[#71717a] hover:text-[#1a1a2e]
                  hover:bg-gray-100 transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-[#71717a]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#1a1a2e] mb-2">
                    Tu carrito está vacío
                  </h3>
                  <p className="text-[#71717a] mb-6">
                    Explora nuestro catálogo y encuentra el software que necesitas
                  </p>
                  <Button onClick={closeCart} variant="outline">
                    Explorar Productos
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                {/* Subtotal */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#71717a]">Subtotal</span>
                  <span className="text-lg font-semibold text-[#1a1a2e]">
                    {formatPriceRange(subtotal.min, subtotal.max)}
                  </span>
                </div>

                {/* Note */}
                <p className="text-xs text-[#71717a] mb-4">
                  El precio final se determinará según la configuración seleccionada
                </p>

                {/* Auth Check & Actions */}
                {!isAuthenticated && !isLoadingAuth ? (
                  <div className="space-y-4">
                    {/* Auth Required Notice */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-amber-800">
                            Registro Requerido
                          </p>
                          <p className="text-xs text-amber-700 mt-1">
                            Para proceder con la compra, necesitas iniciar sesión o crear una cuenta.
                            Esto nos permite generar tu factura y documentación legal.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Auth Actions */}
                    <div className="space-y-3">
                      <Link href="/login?callbackUrl=/checkout" onClick={closeCart}>
                        <Button className="w-full" size="lg">
                          <LogIn className="w-5 h-5 mr-2" />
                          Iniciar Sesión
                        </Button>
                      </Link>
                      <Link href="/register?callbackUrl=/checkout" onClick={closeCart}>
                        <Button className="w-full" variant="outline">
                          <UserPlus className="w-5 h-5 mr-2" />
                          Crear Cuenta
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link href="/checkout" onClick={closeCart}>
                      <Button className="w-full" size="lg">
                        Proceder al Checkout
                      </Button>
                    </Link>
                    <Link href="/cart" onClick={closeCart}>
                      <Button className="w-full" variant="secondary">
                        Ver Carrito Completo
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  )
}
