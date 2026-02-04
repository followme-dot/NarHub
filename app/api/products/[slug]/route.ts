import { NextRequest, NextResponse } from 'next/server'
import { products } from '@frontend/data/copy'

// GET /api/products/[slug] - Get a single product by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    const product = products.find(
      (p) => p.slug.toLowerCase() === slug.toLowerCase()
    )

    if (!product) {
      return NextResponse.json(
        { message: 'Producto no encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json({ product })
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { message: 'Error al obtener el producto' },
      { status: 500 }
    )
  }
}
