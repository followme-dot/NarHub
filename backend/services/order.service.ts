import { prisma } from '@backend/lib/db'
import type { OrderStatus } from '@prisma/client'

interface CreateOrderData {
  userId: string
  cartId: string
  billingAddress?: any
  companyName?: string
  vatNumber?: string
  notes?: string
}

export const orderService = {
  // Create order from cart
  async createFromCart(data: CreateOrderData) {
    const cart = await prisma.cart.findUnique({
      where: { id: data.cartId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    if (!cart || cart.items.length === 0) {
      throw new Error('Cart is empty')
    }

    // Calculate totals
    const subtotal = cart.items.reduce((total, item) => {
      return total + Number(item.product.price) * item.quantity
    }, 0)

    const tax = 0 // Can implement tax calculation
    const discount = 0 // Can implement discount codes
    const total = subtotal + tax - discount

    // Create order with items
    const order = await prisma.order.create({
      data: {
        userId: data.userId,
        subtotal,
        tax,
        discount,
        total,
        billingAddress: data.billingAddress,
        companyName: data.companyName,
        vatNumber: data.vatNumber,
        notes: data.notes,
        items: {
          create: cart.items.map((item) => ({
            productId: item.productId,
            price: item.product.price,
            name: item.product.name,
          })),
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    // Clear cart after order creation
    await prisma.cartItem.deleteMany({
      where: { cartId: cart.id },
    })

    return order
  },

  // Get user orders
  async getUserOrders(userId: string) {
    return prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
  },

  // Get single order
  async getById(orderId: string, userId?: string) {
    const where: any = { id: orderId }
    if (userId) {
      where.userId = userId
    }

    return prisma.order.findFirst({
      where,
      include: {
        items: {
          include: {
            product: true,
          },
        },
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    })
  },

  // Update order status
  async updateStatus(orderId: string, status: OrderStatus) {
    const updateData: any = { status }

    if (status === 'PAID') {
      updateData.paidAt = new Date()
    }

    return prisma.order.update({
      where: { id: orderId },
      data: updateData,
    })
  },

  // Mark order as paid (simulated)
  async markAsPaid(orderId: string) {
    return this.updateStatus(orderId, 'PAID')
  },

  // Cancel order
  async cancel(orderId: string) {
    return this.updateStatus(orderId, 'CANCELLED')
  },
}
