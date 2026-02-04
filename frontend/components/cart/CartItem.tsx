'use client'

import { motion } from 'framer-motion'
import { useCartStore } from '@frontend/store/cartStore'
import { formatPriceRange } from '@frontend/lib/utils'

interface CartItemProps {
  item: {
    id: string
    productId: string
    slug: string
    name: string
    icon: string
    priceMin: number
    priceMax: number
    quantity: number
  }
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCartStore()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.2 }}
      className="flex gap-4 p-4 rounded-xl bg-white border border-gray-200"
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-100
        flex items-center justify-center text-2xl">
        {item.icon}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-[#1a1a2e] truncate">
          {item.name}
        </h3>
        <p className="text-sm text-blue-600 font-medium">
          {formatPriceRange(item.priceMin, item.priceMax)}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
            className="w-7 h-7 rounded-lg bg-gray-100
              flex items-center justify-center text-[#71717a]
              hover:text-[#1a1a2e] hover:bg-gray-200 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <span className="w-8 text-center text-sm font-medium text-[#1a1a2e]">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
            className="w-7 h-7 rounded-lg bg-gray-100
              flex items-center justify-center text-[#71717a]
              hover:text-[#1a1a2e] hover:bg-gray-200 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeItem(item.productId)}
        className="flex-shrink-0 p-2 rounded-lg text-[#71717a]
          hover:text-red-500 hover:bg-red-50 transition-all"
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
    </motion.div>
  )
}
