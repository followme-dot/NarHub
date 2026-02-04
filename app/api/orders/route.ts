import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@backend/lib/supabase'
import { auth } from '@/auth'

// Force Node.js runtime
export const runtime = 'nodejs'

// GET /api/orders - Get user orders
export async function GET() {
  try {
    const session = await auth()
    const supabase = getSupabaseAdmin()

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get orders with items
    const { data: orders, error } = await supabase
      .from('orders')
      .select(`
        id,
        status,
        total_amount,
        currency,
        payment_method,
        payment_reference,
        payment_confirmed_at,
        notes,
        created_at,
        updated_at,
        billing_name,
        billing_company,
        billing_address,
        billing_country,
        billing_vat,
        order_items (
          id,
          product_slug,
          product_name,
          product_icon,
          price_min,
          price_max,
          final_price,
          quantity
        )
      `)
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { message: 'Failed to fetch orders' },
        { status: 500 }
      )
    }

    // Transform the data to match the expected format
    const transformedOrders = orders?.map((order) => ({
      ...order,
      items: order.order_items,
    }))

    return NextResponse.json({ orders: transformedOrders || [] })
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { message: 'Error fetching orders' },
      { status: 500 }
    )
  }
}

// POST /api/orders - Create a new order
export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    const supabase = getSupabaseAdmin()

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const {
      items,
      total_amount,
      currency = 'EUR',
      payment_method,
      billing_name,
      billing_company,
      billing_address,
      billing_country,
      billing_vat,
      notes,
    } = body

    if (!items || items.length === 0) {
      return NextResponse.json(
        { message: 'Order must have at least one item' },
        { status: 400 }
      )
    }

    if (!total_amount) {
      return NextResponse.json(
        { message: 'Total amount is required' },
        { status: 400 }
      )
    }

    // Generate payment reference
    const paymentReference = `NH-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`

    // Create order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: session.user.id,
        status: 'pending',
        total_amount,
        currency,
        payment_method,
        payment_reference: paymentReference,
        billing_name,
        billing_company,
        billing_address,
        billing_country,
        billing_vat,
        notes,
      })
      .select()
      .single()

    if (orderError || !order) {
      console.error('Supabase error creating order:', orderError)
      return NextResponse.json(
        { message: 'Failed to create order' },
        { status: 500 }
      )
    }

    // Create order items
    const orderItems = items.map((item: {
      product_slug: string
      product_name: string
      product_icon: string
      price_min: number
      price_max: number
      final_price?: number
      quantity?: number
    }) => ({
      order_id: order.id,
      product_slug: item.product_slug,
      product_name: item.product_name,
      product_icon: item.product_icon,
      price_min: item.price_min,
      price_max: item.price_max,
      final_price: item.final_price,
      quantity: item.quantity || 1,
    }))

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems)

    if (itemsError) {
      console.error('Supabase error creating order items:', itemsError)
      // Rollback order if items fail
      await supabase.from('orders').delete().eq('id', order.id)
      return NextResponse.json(
        { message: 'Failed to create order items' },
        { status: 500 }
      )
    }

    // Clear user's cart
    const { data: cart } = await supabase
      .from('carts')
      .select('id')
      .eq('user_id', session.user.id)
      .single()

    if (cart) {
      await supabase
        .from('cart_items')
        .delete()
        .eq('cart_id', cart.id)
    }

    return NextResponse.json(
      {
        message: 'Order created successfully',
        order: {
          ...order,
          payment_reference: paymentReference,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { message: 'Error creating order' },
      { status: 500 }
    )
  }
}
