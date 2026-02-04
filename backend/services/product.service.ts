import { prisma } from '@backend/lib/db'
import type { ProductCategory, ProductStatus } from '@prisma/client'

export interface ProductFilters {
  category?: ProductCategory
  featured?: boolean
  flagship?: boolean
  status?: ProductStatus
  search?: string
}

export const productService = {
  // Get all products with optional filters
  async getAll(filters?: ProductFilters) {
    const where: any = {}

    if (filters?.category) {
      where.category = filters.category
    }

    if (filters?.featured !== undefined) {
      where.featured = filters.featured
    }

    if (filters?.flagship !== undefined) {
      where.flagship = filters.flagship
    }

    if (filters?.status) {
      where.status = filters.status
    } else {
      where.status = 'ACTIVE'
    }

    if (filters?.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { tagline: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } },
      ]
    }

    return prisma.product.findMany({
      where,
      orderBy: [
        { flagship: 'desc' },
        { featured: 'desc' },
        { createdAt: 'desc' },
      ],
    })
  },

  // Get single product by slug
  async getBySlug(slug: string) {
    return prisma.product.findUnique({
      where: { slug },
    })
  },

  // Get featured products
  async getFeatured(limit: number = 5) {
    return prisma.product.findMany({
      where: {
        featured: true,
        status: 'ACTIVE',
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    })
  },

  // Get flagship products
  async getFlagship() {
    return prisma.product.findMany({
      where: {
        flagship: true,
        status: 'ACTIVE',
      },
      orderBy: { price: 'desc' },
    })
  },

  // Get products by category
  async getByCategory(category: ProductCategory) {
    return prisma.product.findMany({
      where: {
        category,
        status: 'ACTIVE',
      },
      orderBy: [
        { flagship: 'desc' },
        { featured: 'desc' },
        { price: 'desc' },
      ],
    })
  },

  // Get related products (same category, exclude current)
  async getRelated(productId: string, category: ProductCategory, limit: number = 4) {
    return prisma.product.findMany({
      where: {
        category,
        id: { not: productId },
        status: 'ACTIVE',
      },
      take: limit,
      orderBy: { createdAt: 'desc' },
    })
  },
}
