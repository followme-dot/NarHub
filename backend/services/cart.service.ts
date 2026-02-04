import { prisma } from '@backend/lib/db'

export const cartService = {
  // Get or create cart for user/session
  async getOrCreate(userId?: string, sessionId?: string) {
    if (!userId && !sessionId) {
      throw new Error('Either userId or sessionId is required')
    }

    // Try to find existing cart
    let cart = await prisma.cart.findFirst({
      where: userId ? { userId } : { sessionId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    // Create new cart if not found
    if (!cart) {
      cart = await prisma.cart.create({
        data: userId ? { userId } : { sessionId },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      })
    }

    return cart
  },

  // Add item to cart
  async addItem(cartId: string, productId: string, quantity: number = 1) {
    // Check if item already exists in cart
    const existingItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId: { cartId, productId },
      },
    })

    if (existingItem) {
      // Update quantity
      return prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
        include: { product: true },
      })
    }

    // Create new item
    return prisma.cartItem.create({
      data: { cartId, productId, quantity },
      include: { product: true },
    })
  },

  // Update item quantity
  async updateItemQuantity(itemId: string, quantity: number) {
    if (quantity <= 0) {
      return this.removeItem(itemId)
    }

    return prisma.cartItem.update({
      where: { id: itemId },
      data: { quantity },
      include: { product: true },
    })
  },

  // Remove item from cart
  async removeItem(itemId: string) {
    return prisma.cartItem.delete({
      where: { id: itemId },
    })
  },

  // Clear cart
  async clear(cartId: string) {
    return prisma.cartItem.deleteMany({
      where: { cartId },
    })
  },

  // Get cart totals
  async getCartTotals(cartId: string) {
    const cart = await prisma.cart.findUnique({
      where: { id: cartId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    if (!cart) return null

    const subtotal = cart.items.reduce((total, item) => {
      return total + Number(item.product.price) * item.quantity
    }, 0)

    const itemCount = cart.items.reduce((count, item) => count + item.quantity, 0)

    return {
      subtotal,
      itemCount,
      items: cart.items,
    }
  },

  // Merge guest cart to user cart after login
  async mergeGuestCart(sessionId: string, userId: string) {
    const guestCart = await prisma.cart.findUnique({
      where: { sessionId },
      include: { items: true },
    })

    if (!guestCart || guestCart.items.length === 0) return

    // Get or create user cart
    let userCart = await prisma.cart.findUnique({
      where: { userId },
    })

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: { userId },
      })
    }

    // Move items from guest cart to user cart
    for (const item of guestCart.items) {
      const existingItem = await prisma.cartItem.findUnique({
        where: {
          cartId_productId: { cartId: userCart.id, productId: item.productId },
        },
      })

      if (existingItem) {
        await prisma.cartItem.update({
          where: { id: existingItem.id },
          data: { quantity: existingItem.quantity + item.quantity },
        })
      } else {
        await prisma.cartItem.create({
          data: {
            cartId: userCart.id,
            productId: item.productId,
            quantity: item.quantity,
          },
        })
      }
    }

    // Delete guest cart
    await prisma.cart.delete({
      where: { id: guestCart.id },
    })

    return this.getOrCreate(userId)
  },
}
