import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string
  productId: string
  slug: string
  name: string
  icon: string
  priceMin: number
  priceMax: number
  quantity: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  isSyncing: boolean

  // Actions
  addItem: (product: Omit<CartItem, 'id' | 'quantity'>) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void

  // Sync con servidor
  syncWithServer: () => Promise<void>
  loadFromServer: () => Promise<void>
  setItems: (items: CartItem[]) => void

  // Computed
  getItemCount: () => number
  getSubtotal: () => { min: number; max: number }
  isInCart: (productId: string) => boolean
}

// Helper para llamar a la API
const cartApi = {
  async get() {
    const res = await fetch('/api/cart')
    if (!res.ok) return null
    return res.json()
  },
  async add(item: Omit<CartItem, 'id' | 'quantity'>) {
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
    return res.ok
  },
  async remove(productId: string) {
    const res = await fetch(`/api/cart?productId=${productId}`, {
      method: 'DELETE'
    })
    return res.ok
  },
  async updateQuantity(productId: string, quantity: number) {
    const res = await fetch('/api/cart', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity })
    })
    return res.ok
  },
  async clear() {
    const res = await fetch('/api/cart', { method: 'DELETE' })
    return res.ok
  }
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      isSyncing: false,

      setItems: (items) => {
        set({ items })
      },

      loadFromServer: async () => {
        try {
          set({ isSyncing: true })
          const data = await cartApi.get()
          if (data?.items) {
            set({ items: data.items })
          }
        } catch (error) {
          console.error('Error cargando carrito:', error)
        } finally {
          set({ isSyncing: false })
        }
      },

      syncWithServer: async () => {
        // Sincronizar items locales con el servidor
        const items = get().items
        try {
          set({ isSyncing: true })
          for (const item of items) {
            await cartApi.add({
              productId: item.productId,
              slug: item.slug,
              name: item.name,
              icon: item.icon,
              priceMin: item.priceMin,
              priceMax: item.priceMax
            })
          }
        } catch (error) {
          console.error('Error sincronizando carrito:', error)
        } finally {
          set({ isSyncing: false })
        }
      },

      addItem: (product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.productId === product.productId)

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.productId === product.productId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }

          return {
            items: [
              ...state.items,
              {
                ...product,
                id: crypto.randomUUID(),
                quantity: 1,
              },
            ],
          }
        })

        // Sincronizar con servidor en background
        cartApi.add(product).catch(console.error)
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        }))

        // Sincronizar con servidor en background
        cartApi.remove(productId).catch(console.error)
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          ),
        }))

        // Sincronizar con servidor en background
        cartApi.updateQuantity(productId, quantity).catch(console.error)
      },

      clearCart: () => {
        set({ items: [] })

        // Sincronizar con servidor en background
        cartApi.clear().catch(console.error)
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }))
      },

      openCart: () => {
        set({ isOpen: true })
      },

      closeCart: () => {
        set({ isOpen: false })
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },

      getSubtotal: () => {
        const items = get().items
        return {
          min: items.reduce((total, item) => total + item.priceMin * item.quantity, 0),
          max: items.reduce((total, item) => total + item.priceMax * item.quantity, 0),
        }
      },

      isInCart: (productId) => {
        return get().items.some((item) => item.productId === productId)
      },
    }),
    {
      name: 'narhub-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
)
