'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '@frontend/components/ui/Button'
import Input from '@frontend/components/ui/Input'
import { useCart } from '@frontend/hooks/useCart'
import { useAuth } from '@frontend/hooks/useAuth'
import { formatPriceRange } from '@frontend/lib/utils'
import { printOrderPDF, downloadOrderHTML } from '@frontend/lib/generatePDF'
import { bankDetails, sepaDetails, paymentInstructions } from '@frontend/data/bankDetails'
import {
  ShieldCheck,
  FileText,
  Download,
  CheckCircle2,
  AlertTriangle,
  Lock,
  CreditCard,
  Building2,
  User,
  Mail,
  Phone,
  Briefcase,
  ArrowLeft,
  LogIn,
  UserPlus,
  Loader2,
  Copy,
  Check,
  Banknote
} from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, itemCount, subtotal, formattedSubtotal, clearCart } = useCart()
  const { isAuthenticated, isLoadingAuth, user } = useAuth()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [orderId, setOrderId] = useState<string>('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [completedItems, setCompletedItems] = useState<typeof items>([])
  const [copiedIban, setCopiedIban] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    phone: '',
    taxId: '',
    address: '',
    city: '',
    country: '',
  })

  const copyIban = () => {
    navigator.clipboard.writeText(bankDetails.iban.replace(/\s/g, ''))
    setCopiedIban(true)
    setTimeout(() => setCopiedIban(false), 2000)
  }

  // Auto-fill user data when authenticated
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email || '',
        name: user.name || '',
      }))
    }
  }, [user])

  const generateOrderId = () => {
    const timestamp = Date.now().toString(36).toUpperCase()
    const random = Math.random().toString(36).substring(2, 8).toUpperCase()
    return `NRH-${timestamp}-${random}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!acceptTerms) {
      alert('Debes aceptar los términos y condiciones para continuar.')
      return
    }

    setIsProcessing(true)

    // Generate order ID
    const newOrderId = generateOrderId()
    setOrderId(newOrderId)

    // Save items before clearing cart
    setCompletedItems([...items])

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear cart and show success
    clearCart()
    setIsComplete(true)
    setIsProcessing(false)
  }

  const handleDownloadPDF = () => {
    const orderData = {
      orderId,
      date: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      companyName: formData.company,
      taxId: formData.taxId,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      items: completedItems.map(item => ({
        name: item.name,
        icon: item.icon,
        priceMin: item.priceMin,
        priceMax: item.priceMax,
        quantity: item.quantity,
      })),
      totalMin: completedItems.reduce((sum, item) => sum + item.priceMin * item.quantity, 0),
      totalMax: completedItems.reduce((sum, item) => sum + item.priceMax * item.quantity, 0),
    }

    printOrderPDF(orderData)
  }

  // Loading auth state
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-[#4a4a68]">Verificando sesión...</p>
        </div>
      </div>
    )
  }

  // Not authenticated - show login prompt
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16 px-4">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-amber-100 flex items-center justify-center">
              <Lock className="w-10 h-10 text-amber-600" />
            </div>

            <h1 className="text-3xl font-bold text-[#1a1a2e] mb-4">
              Acceso Requerido
            </h1>

            <p className="text-[#4a4a68] mb-8 max-w-md mx-auto">
              Para completar tu compra y generar la documentación legal correspondiente,
              necesitas iniciar sesión o crear una cuenta.
            </p>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-[#1a1a2e] mb-4">
                Al registrarte obtienes:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4a4a68]">
                    Factura digital y documentación fiscal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4a4a68]">
                    Comprobante de compra en PDF descargable
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4a4a68]">
                    Acceso a soporte técnico prioritario
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4a4a68]">
                    Historial de pedidos y licencias
                  </span>
                </li>
              </ul>
            </div>

            {/* Auth Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login?callbackUrl=/checkout">
                <Button size="lg" className="w-full sm:w-auto">
                  <LogIn className="w-5 h-5 mr-2" />
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href="/register?callbackUrl=/checkout">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <UserPlus className="w-5 h-5 mr-2" />
                  Crear Cuenta
                </Button>
              </Link>
            </div>

            {/* Back to cart */}
            <Link
              href="/cart"
              className="inline-flex items-center gap-2 text-[#71717a] hover:text-blue-600 mt-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al carrito
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  // Order complete - show success with PDF download
  if (isComplete) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto"
        >
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#1a1a2e] mb-4">
              ¡Pedido Completado!
            </h1>
            <p className="text-[#4a4a68]">
              Tu solicitud de compra ha sido procesada correctamente.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
              <div>
                <p className="text-sm text-[#71717a]">Número de Pedido</p>
                <p className="text-xl font-bold text-[#1a1a2e]">{orderId}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#71717a]">Fecha</p>
                <p className="font-medium text-[#1a1a2e]">
                  {new Date().toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">
                    Documentación de Compra
                  </h3>
                  <p className="text-sm text-[#4a4a68] mb-4">
                    Descarga tu comprobante de compra. Este documento sirve como prueba
                    legal de tu transacción y contiene todos los detalles del pedido.
                  </p>
                  <Button
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                    onClick={handleDownloadPDF}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar / Imprimir PDF
                  </Button>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-800 mb-1">Importante</p>
                  <p className="text-sm text-amber-700">
                    Nuestro equipo de ventas se pondrá en contacto contigo en las
                    próximas 24-48 horas para coordinar la entrega del software y
                    finalizar los detalles de pago. Guarda este número de pedido.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button variant="outline" className="w-full sm:w-auto">
                Seguir Explorando
              </Button>
            </Link>
            <Link href="/account/orders">
              <Button className="w-full sm:w-auto">
                Ver Mis Pedidos
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  // Empty cart
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <CreditCard className="w-10 h-10 text-[#71717a]" />
          </div>
          <h1 className="text-2xl font-bold text-[#1a1a2e] mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-[#4a4a68] mb-6">
            Añade productos a tu carrito para continuar con el checkout.
          </p>
          <Link href="/products">
            <Button>Ver Productos</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Checkout form (authenticated)
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-[#71717a] hover:text-blue-600 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al carrito
          </Link>
          <h1 className="text-3xl font-bold text-[#1a1a2e]">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* User Info Section */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-[#1a1a2e]">
                    Información Personal
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Nombre completo"
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                    disabled={!!user?.email}
                  />
                  <Input
                    label="Teléfono"
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    required
                  />
                </div>
              </div>

              {/* Company Info Section */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-[#1a1a2e]">
                    Información Empresarial
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Nombre de la Empresa"
                    type="text"
                    placeholder="Tu empresa"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, company: e.target.value }))
                    }
                  />
                  <Input
                    label="CIF/NIF/VAT"
                    type="text"
                    placeholder="Número fiscal"
                    value={formData.taxId}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, taxId: e.target.value }))
                    }
                  />
                  <Input
                    label="Dirección"
                    type="text"
                    placeholder="Dirección de facturación"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, address: e.target.value }))
                    }
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Ciudad"
                      type="text"
                      placeholder="Ciudad"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, city: e.target.value }))
                      }
                    />
                    <Input
                      label="País"
                      type="text"
                      placeholder="País"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, country: e.target.value }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Bank Transfer Details */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                    <Banknote className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-[#1a1a2e]">
                    Datos para Transferencia Bancaria
                  </h2>
                </div>

                <div className="bg-white rounded-xl p-4 mb-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#71717a]">Beneficiario:</span>
                      <span className="font-semibold text-[#1a1a2e]">{bankDetails.beneficiary}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#71717a]">IBAN:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-semibold text-[#1a1a2e]">{bankDetails.iban}</span>
                        <button onClick={copyIban} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                          {copiedIban ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-blue-600" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#71717a]">BIC/SWIFT:</span>
                      <span className="font-semibold text-[#1a1a2e]">{bankDetails.bic}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#71717a]">BIC Intermediario:</span>
                      <span className="font-semibold text-[#1a1a2e]">{bankDetails.intermediaryBic}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#71717a]">Dirección:</span>
                      <span className="font-semibold text-[#1a1a2e] text-right">{bankDetails.address}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#71717a]">Banco:</span>
                      <span className="font-semibold text-[#1a1a2e]">{bankDetails.bank}</span>
                    </div>
                    <div className="flex justify-between items-start py-2">
                      <span className="text-[#71717a]">Dir. Banco:</span>
                      <span className="font-semibold text-[#1a1a2e] text-right max-w-[60%]">{bankDetails.bankAddress}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Instrucciones de Pago</h4>
                  <ul className="space-y-2">
                    {paymentInstructions.map((instruction, i) => (
                      <li key={i} className="text-sm text-amber-700 flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span> {instruction}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-amber-600 mt-3">
                    Tipo: {sepaDetails.transferType} • Tiempo: {sepaDetails.transferTime}
                  </p>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e] mb-2">
                      Proceso de Compra Empresarial
                    </h3>
                    <p className="text-sm text-[#4a4a68] mb-4">
                      Al confirmar tu pedido, recibirás un PDF con los detalles completos
                      de tu solicitud incluyendo los datos de pago. Una vez verificada la
                      transferencia bancaria, recibirás la factura oficial y comenzará el
                      proceso de entrega del software.
                    </p>
                    <p className="text-sm text-[#4a4a68]">
                      <strong>Importante:</strong> Todas las ventas son finales según nuestros{' '}
                      <Link href="/terms" className="text-blue-600 hover:underline">
                        términos de servicio
                      </Link>
                      . Se generará documentación legal vinculante al realizar la transferencia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms Acceptance */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-[#4a4a68]">
                    He leído y acepto los{' '}
                    <Link href="/terms" className="text-blue-600 hover:underline" target="_blank">
                      Términos de Servicio
                    </Link>
                    , la{' '}
                    <Link href="/privacy" className="text-blue-600 hover:underline" target="_blank">
                      Política de Privacidad
                    </Link>
                    {' '}y entiendo que todas las ventas son finales. Acepto recibir
                    documentación fiscal y comunicaciones relacionadas con mi pedido.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isProcessing || !acceptTerms}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Confirmar Pedido
                  </>
                )}
              </Button>
            </motion.form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-[#1a1a2e] mb-6">
                Resumen del Pedido
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-[#1a1a2e] truncate">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#71717a]">
                        Cantidad: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-blue-600">
                      {formatPriceRange(item.priceMin, item.priceMax)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-[#71717a]">Productos</span>
                  <span className="text-[#1a1a2e]">{itemCount}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-[#1a1a2e]">Total Estimado</span>
                  <span className="text-blue-600">{formattedSubtotal}</span>
                </div>
              </div>

              <p className="text-xs text-[#71717a] mt-4">
                * El precio final se determinará tras la configuración específica
                de cada producto.
              </p>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-[#1a1a2e]">
                      Compra Segura
                    </p>
                    <p className="text-xs text-[#71717a]">
                      SOC 2 Type II Certified
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
