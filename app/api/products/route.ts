import { NextRequest, NextResponse } from 'next/server'
import { products } from '@frontend/data/copy'

// GET /api/products - Get all products with optional filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const featured = searchParams.get('featured')

    let filteredProducts = [...products]

    // Filter by category
    if (category && category !== 'all') {
      filteredProducts = filteredProducts.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    }

    // Filter by search query
    if (search) {
      const searchLower = search.toLowerCase()
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.tagline.toLowerCase().includes(searchLower) ||
          p.category.toLowerCase().includes(searchLower)
      )
    }

    // Filter featured products
    if (featured === 'true') {
      filteredProducts = filteredProducts.filter((p) => p.featured)
    }

    return NextResponse.json({
      products: filteredProducts,
      total: filteredProducts.length,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { message: 'Error al obtener productos' },
      { status: 500 }
    )
  }
}
