'use client'

import { useCallback, useMemo } from 'react'
import { useCartStore } from '@frontend/store/cartStore'
import { formatPriceRange } from '@frontend/lib/utils'

interface ProductToAdd {
  productId: string
  slug: string
  name: string
  icon: string
  priceMin: number
  priceMax: number
}

export function useCart() {
  const {
    items,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    getItemCount,
    getSubtotal,
    isInCart,
  } = useCartStore()

  const itemCount = getItemCount()
  const subtotal = getSubtotal()

  const formattedSubtotal = useMemo(
    () => formatPriceRange(subtotal.min, subtotal.max),
    [subtotal]
  )

  const addToCart = useCallback(
    (product: ProductToAdd) => {
      addItem(product)
      openCart()
    },
    [addItem, openCart]
  )

  const removeFromCart = useCallback(
    (productId: string) => {
      removeItem(productId)
    },
    [removeItem]
  )

  const updateItemQuantity = useCallback(
    (productId: string, quantity: number) => {
      updateQuantity(productId, quantity)
    },
    [updateQuantity]
  )

  const checkIsInCart = useCallback(
    (productId: string) => {
      return isInCart(productId)
    },
    [isInCart]
  )

  return {
    items,
    isOpen,
    itemCount,
    subtotal,
    formattedSubtotal,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    isInCart: checkIsInCart,
  }
}
