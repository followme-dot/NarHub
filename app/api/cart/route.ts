import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { getSupabaseAdmin } from '@backend/lib/supabase'

// Force Node.js runtime
export const runtime = 'nodejs'

// GET /api/cart - Obtener carrito del usuario
export async function GET() {
  try {
    const session = await auth()
    const supabase = getSupabaseAdmin()

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'No autenticado' },
        { status: 401 }
      )
    }

    // Buscar carrito del usuario
    const { data: cart } = await supabase
      .from('carts')
      .select('id')
      .eq('user_id', session.user.id)
      .single()

    if (!cart) {
      return NextResponse.json({ items: [] })
    }

    // Obtener items del carrito
    const { data: items, error } = await supabase
      .from('cart_items')
      .select('*')
      .eq('cart_id', cart.id)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error al obtener carrito:', error)
      return NextResponse.json(
        { message: 'Error al obtener carrito' },
        { status: 500 }
      )
    }

    // Transformar items al formato del frontend
    const formattedItems = (items || []).map(item => ({
      id: item.id,
      productId: item.product_slug,
      slug: item.product_slug,
      name: item.product_name,
      icon: item.product_icon || '',
      priceMin: parseFloat(item.price_min) || 0,
      priceMax: parseFloat(item.price_max) || 0,
      quantity: item.quantity
    }))

    return NextResponse.json({ items: formattedItems })
  } catch (error) {
    console.error('Error en GET /api/cart:', error)
    return NextResponse.json(
      { message: 'Error del servidor' },
      { status: 500 }
    )
  }
}

// POST /api/cart - Agregar item al carrito
export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    const supabase = getSupabaseAdmin()

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'No autenticado' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { productId, slug, name, icon, priceMin, priceMax } = body

    const productSlug = slug || productId
    const productName = name

    if (!productSlug || !productName) {
      return NextResponse.json(
        { message: 'Faltan datos del producto' },
        { status: 400 }
      )
    }

    // Buscar o crear carrito del usuario
    let { data: cart } = await supabase
      .from('carts')
      .select('id')
      .eq('user_id', session.user.id)
      .single()

    if (!cart) {
      const { data: newCart, error: cartError } = await supabase
        .from('carts')
        .insert({ user_id: session.user.id })
        .select('id')
        .single()

      if (cartError) {
        console.error('Error al crear carrito:', cartError)
        return NextResponse.json(
          { message: 'Error al crear carrito' },
          { status: 500 }
        )
      }
      cart = newCart
    }

    // Verificar si el producto ya está en el carrito
    const { data: existingItem } = await supabase
      .from('cart_items')
      .select('id, quantity')
      .eq('cart_id', cart.id)
      .eq('product_slug', productSlug)
      .single()

    if (existingItem) {
      // Actualizar cantidad
      const { error: updateError } = await supabase
        .from('cart_items')
        .update({
          quantity: existingItem.quantity + 1,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingItem.id)

      if (updateError) {
        console.error('Error al actualizar item:', updateError)
        return NextResponse.json(
          { message: 'Error al actualizar carrito' },
          { status: 500 }
        )
      }
    } else {
      // Agregar nuevo item
      const { error: insertError } = await supabase
        .from('cart_items')
        .insert({
          cart_id: cart.id,
          product_slug: productSlug,
          product_name: productName,
          product_icon: icon || '',
          price_min: priceMin || 0,
          price_max: priceMax || 0,
          quantity: 1
        })

      if (insertError) {
        console.error('Error al agregar item:', insertError)
        return NextResponse.json(
          { message: 'Error al agregar al carrito' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json({ message: 'Producto agregado al carrito' })
  } catch (error) {
    console.error('Error en POST /api/cart:', error)
    return NextResponse.json(
      { message: 'Error del servidor' },
      { status: 500 }
    )
  }
}

// PUT /api/cart - Actualizar cantidad de un item
export async function PUT(request: NextRequest) {
  try {
    const session = await auth()
    const supabase = getSupabaseAdmin()

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'No autenticado' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { productId, quantity } = body

    if (!productId || quantity === undefined) {
      return NextResponse.json(
        { message: 'Faltan datos' },
        { status: 400 }
      )
    }

    // Buscar carrito del usuario
    const { data: cart } = await supabase
      .from('carts')
      .select('id')
      .eq('user_id', session.user.id)
      .single()

    if (!cart) {
      return NextResponse.json(
        { message: 'Carrito no encontrado' },
        { status: 404 }
      )
    }

    if (quantity <= 0) {
      // Si cantidad es 0 o menos, eliminar
      await supabase
        .from('cart_items')
        .delete()
        .eq('cart_id', cart.id)
        .eq('product_slug', productId)
    } else {
      // Actualizar cantidad
      const { error } = await supabase
        .from('cart_items')
        .update({
          quantity,
          updated_at: new Date().toISOString()
        })
        .eq('cart_id', cart.id)
        .eq('product_slug', productId)

      if (error) {
        console.error('Error al actualizar cantidad:', error)
        return NextResponse.json(
          { message: 'Error al actualizar cantidad' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json({ message: 'Cantidad actualizada' })
  } catch (error) {
    console.error('Error en PUT /api/cart:', error)
    return NextResponse.json(
      { message: 'Error del servidor' },
      { status: 500 }
    )
  }
}

// DELETE /api/cart - Vaciar carrito o eliminar item específico
export async function DELETE(request: NextRequest) {
  try {
    const session = await auth()
    const supabase = getSupabaseAdmin()

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'No autenticado' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('productId')

    // Buscar carrito del usuario
    const { data: cart } = await supabase
      .from('carts')
      .select('id')
      .eq('user_id', session.user.id)
      .single()

    if (!cart) {
      return NextResponse.json(
        { message: 'Carrito no encontrado' },
        { status: 404 }
      )
    }

    if (productId) {
      // Eliminar item específico
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('cart_id', cart.id)
        .eq('product_slug', productId)

      if (error) {
        console.error('Error al eliminar item:', error)
        return NextResponse.json(
          { message: 'Error al eliminar del carrito' },
          { status: 500 }
        )
      }
      return NextResponse.json({ message: 'Producto eliminado del carrito' })
    } else {
      // Vaciar todo el carrito
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('cart_id', cart.id)

      if (error) {
        console.error('Error al vaciar carrito:', error)
        return NextResponse.json(
          { message: 'Error al vaciar el carrito' },
          { status: 500 }
        )
      }
      return NextResponse.json({ message: 'Carrito vaciado' })
    }
  } catch (error) {
    console.error('Error en DELETE /api/cart:', error)
    return NextResponse.json(
      { message: 'Error del servidor' },
      { status: 500 }
    )
  }
}
