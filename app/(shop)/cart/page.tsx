'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@frontend/components/ui/Button'
import { useCart } from '@frontend/hooks/useCart'
import { formatPriceRange } from '@frontend/lib/utils'

export default function CartPage() {
  const {
    items,
    itemCount,
    formattedSubtotal,
    removeFromCart,
    updateItemQuantity,
    clearCart,
  } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-narhub-surface flex items-center justify-center">
            <svg
              className="w-10 h-10 text-narhub-text-muted"
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
          <h1 className="text-2xl font-bold text-narhub-text mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-narhub-text-muted mb-6">
            Explora nuestro catálogo y encuentra el software que necesitas.
          </p>
          <Link href="/products">
            <Button>Ver Productos</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-narhub-text">
            Tu Carrito ({itemCount})
          </h1>
          <Button
            variant="ghost"
            onClick={clearCart}
            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
          >
            Vaciar Carrito
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-narhub-surface border border-narhub-border rounded-2xl p-6"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <Link href={`/products/${item.slug}`}>
                    <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-narhub-surface-light
                      flex items-center justify-center text-4xl hover:bg-narhub-border transition-colors">
                      {item.icon}
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.slug}`}>
                      <h3 className="text-lg font-semibold text-narhub-text hover:text-narhub-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-narhub-primary font-medium mt-1">
                      {formatPriceRange(item.priceMin, item.priceMax)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-sm text-narhub-text-muted">Cantidad:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.productId, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-lg bg-narhub-surface-light
                            flex items-center justify-center text-narhub-text-muted
                            hover:text-narhub-text hover:bg-narhub-border transition-all"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-10 text-center font-medium text-narhub-text">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.productId, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-lg bg-narhub-surface-light
                            flex items-center justify-center text-narhub-text-muted
                            hover:text-narhub-text hover:bg-narhub-border transition-all"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="flex-shrink-0 p-2 rounded-lg text-narhub-text-muted
                      hover:text-red-400 hover:bg-red-500/10 transition-all h-fit"
                    aria-label="Eliminar producto"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-narhub-surface border border-narhub-border rounded-2xl p-6 sticky top-24"
            >
              <h2 className="text-xl font-semibold text-narhub-text mb-6">
                Resumen
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-narhub-text-muted">Productos</span>
                  <span className="text-narhub-text">{itemCount}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-narhub-text">Total Estimado</span>
                  <span className="text-narhub-primary">{formattedSubtotal}</span>
                </div>
              </div>

              <p className="text-xs text-narhub-text-muted mb-6">
                * El precio final dependerá de la configuración específica de cada producto.
              </p>

              <Link href="/checkout">
                <Button className="w-full" size="lg">
                  Proceder al Checkout
                </Button>
              </Link>

              <Link href="/products">
                <Button className="w-full mt-3" variant="secondary">
                  Seguir Comprando
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
