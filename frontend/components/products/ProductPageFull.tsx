'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft, ShoppingCart, Play, Shield, Code2, Zap, CheckCircle2, Star,
  Download, Clock, Users, Globe, Lock, Cpu, Database, Cloud, Layers,
  TrendingUp, Wallet, Gamepad2, Building2, Fingerprint, Copy, Check,
  FileText, CreditCard, BadgeCheck, Rocket, Target, Award
} from 'lucide-react'
import Button from '@frontend/components/ui/Button'
import { useCart } from '@frontend/hooks/useCart'
import { useAuth } from '@frontend/hooks/useAuth'
import { formatPriceRange } from '@frontend/lib/utils'
import { bankDetails, paymentInstructions } from '@frontend/data/bankDetails'

interface ProductPageFullProps {
  product: {
    slug: string
    name: string
    icon: string
    tagline: string
    elevatorPitch?: string
    description?: string
    overview?: string
    marketOpportunity?: string
    competitiveAdvantage?: string
    category: string
    priceMin: number
    priceMax: number
    featured: boolean
    flagship?: boolean
    linesOfCode?: number
    techStack: string[]
    features: string[]
    keyFeatures?: { title: string; description: string }[]
    specs?: Record<string, string>
    whyBuy?: string[]
    useCase?: { title: string; before: string[]; after: string[]; roi: string }
    deliverables?: string[]
    idealFor?: string[]
    status?: { ready: boolean; description: string }
    gradientFrom?: string
    gradientTo?: string
  }
}

export default function ProductPageFull({ product }: ProductPageFullProps) {
  const { addToCart, isInCart } = useCart()
  const { isAuthenticated } = useAuth()
  const [activeTab, setActiveTab] = useState<'features' | 'tech' | 'specs' | 'deliverables'>('features')
  const [copiedIban, setCopiedIban] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const inCart = isInCart(product.slug)

  const gradient = {
    from: product.gradientFrom || 'from-blue-600',
    to: product.gradientTo || 'to-purple-600'
  }

  const handleAddToCart = () => {
    addToCart({
      productId: product.slug,
      slug: product.slug,
      name: product.name,
      icon: product.icon,
      priceMin: product.priceMin,
      priceMax: product.priceMax,
    })
  }

  const copyIban = () => {
    navigator.clipboard.writeText(bankDetails.iban.replace(/\s/g, ''))
    setCopiedIban(true)
    setTimeout(() => setCopiedIban(false), 2000)
  }

  const tabs = [
    { id: 'features' as const, label: 'Características', icon: <Zap className="w-4 h-4" /> },
    { id: 'tech' as const, label: 'Tecnología', icon: <Code2 className="w-4 h-4" /> },
    { id: 'specs' as const, label: 'Especificaciones', icon: <Database className="w-4 h-4" /> },
    { id: 'deliverables' as const, label: 'Entregables', icon: <FileText className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${gradient.from} ${gradient.to} pt-24 pb-32 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link href="/products" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a Productos</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                  {product.category}
                </span>
                {product.flagship && (
                  <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-amber-400/90 text-amber-900 text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" /> Flagship
                  </span>
                )}
                {product.status?.ready && (
                  <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-green-400/90 text-green-900 text-sm font-semibold">
                    <BadgeCheck className="w-4 h-4" /> Production Ready
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">{product.tagline}</p>

              {product.elevatorPitch && (
                <p className="text-white/80 mb-8 leading-relaxed max-w-xl">{product.elevatorPitch}</p>
              )}

              <div className="mb-8">
                <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Valoración</span>
                <p className="text-4xl md:text-5xl font-bold text-white mt-2">
                  {formatPriceRange(product.priceMin, product.priceMax)}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {isAuthenticated ? (
                  <Button size="lg" onClick={() => setShowPayment(true)} className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                    <CreditCard className="w-5 h-5 mr-2" /> Comprar Ahora
                  </Button>
                ) : (
                  <Link href={`/login?callbackUrl=/products/${product.slug}`}>
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                      <Lock className="w-5 h-5 mr-2" /> Iniciar Sesión para Comprar
                    </Button>
                  </Link>
                )}
                <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
                  <Play className="w-5 h-5 mr-2" /> Solicitar Demo
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl transform scale-90" />
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 flex items-center justify-center">
                  <span className="text-[10rem] md:text-[12rem] filter drop-shadow-2xl">{product.icon}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Key Features */}
      {product.keyFeatures && (
        <section className="py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {product.keyFeatures.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }} className="text-center">
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center text-white mb-4`}>
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-[#1a1a2e] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#4a4a68]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Description Section */}
      {product.description && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Sobre {product.name}</h2>
              <p className="text-lg text-[#4a4a68] leading-relaxed mb-8">
                {product.description}
              </p>

              {product.overview && (
                <>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">Panorama del Mercado</h3>
                  <p className="text-[#4a4a68] leading-relaxed mb-8">
                    {product.overview}
                  </p>
                </>
              )}

              {product.marketOpportunity && (
                <div className={`bg-gradient-to-r ${gradient.from} ${gradient.to} rounded-2xl p-8 text-white mb-8`}>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    Oportunidad de Mercado
                  </h3>
                  <p className="leading-relaxed opacity-95">
                    {product.marketOpportunity}
                  </p>
                </div>
              )}

              {product.competitiveAdvantage && (
                <>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">Ventaja Competitiva</h3>
                  <p className="text-[#4a4a68] leading-relaxed">
                    {product.competitiveAdvantage}
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Why Buy Section */}
      {product.whyBuy && (
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">¿Por Qué Invertir en {product.name}?</h2>
              <p className="text-lg text-[#4a4a68]">
                Descubre las razones clave por las que {product.name} representa una oportunidad excepcional
                para inversores y empresas que buscan entrar en el mercado con una solución probada y lista para escalar.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.whyBuy.map((reason, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center flex-shrink-0`}>
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[#1a1a2e] font-medium leading-relaxed">{reason}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Case / ROI */}
      {product.useCase && (
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Caso de Uso Real</h2>
              <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
                Analizamos un escenario real para demostrar el impacto transformador de {product.name} en los resultados de negocio.
                Este caso de estudio ilustra el ROI potencial que nuestros clientes pueden esperar.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6 text-center">
                📊 {product.useCase.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">❌</span> Situación Actual (Sin {product.name})
                  </h4>
                  <p className="text-red-800 text-sm mb-4">
                    Los desafíos típicos que enfrentan las empresas antes de implementar nuestra solución:
                  </p>
                  <ul className="space-y-3">
                    {product.useCase.before.map((item, i) => (
                      <li key={i} className="text-red-800 flex items-start gap-2">
                        <span className="text-red-500 mt-1 font-bold">•</span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h4 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✅</span> Después (Con {product.name})
                  </h4>
                  <p className="text-green-800 text-sm mb-4">
                    Los resultados que obtienen nuestros clientes tras la implementación:
                  </p>
                  <ul className="space-y-3">
                    {product.useCase.after.map((item, i) => (
                      <li key={i} className="text-green-800 flex items-start gap-2">
                        <span className="text-green-500 mt-1 font-bold">•</span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className={`bg-gradient-to-r ${gradient.from} ${gradient.to} rounded-2xl p-8 text-center text-white`}>
              <div className="flex items-center justify-center gap-3 mb-2">
                <Rocket className="w-8 h-8" />
                <span className="text-2xl font-bold">Retorno de Inversión</span>
              </div>
              <p className="text-3xl font-bold mb-2">{product.useCase.roi}</p>
              <p className="text-white/80 text-sm">
                Basado en análisis de clientes actuales y proyecciones conservadoras de mercado
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Tabs Section */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-white rounded-2xl w-fit mx-auto shadow-sm">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id ? `bg-gradient-to-r ${gradient.from} ${gradient.to} text-white shadow-lg` : 'text-[#4a4a68] hover:text-[#1a1a2e] hover:bg-gray-50'
                }`}>
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            {activeTab === 'features' && (
              <div className="grid md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center flex-shrink-0`}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#1a1a2e]">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="flex flex-wrap gap-3">
                {product.techStack.map((tech, index) => (
                  <span key={index} className="px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1a1a2e] font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {activeTab === 'specs' && product.specs && (
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value], index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-[#71717a]">{key}</span>
                    <span className="text-[#1a1a2e] font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'deliverables' && product.deliverables && (
              <div className="grid md:grid-cols-2 gap-4">
                {product.deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center flex-shrink-0`}>
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#1a1a2e]">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      {product.idealFor && (
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">¿Para Quién es {product.name}?</h2>
              <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
                {product.name} ha sido diseñado pensando en organizaciones específicas que pueden
                maximizar el valor de esta plataforma. Si tu empresa encaja en alguno de estos perfiles,
                {product.name} puede ser exactamente lo que necesitas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {product.idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center flex-shrink-0`}>
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-[#1a1a2e] font-semibold text-lg block">{item}</span>
                    <span className="text-[#71717a] text-sm">Perfil ideal de comprador</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#1a1a2e]">Datos de Pago</h2>
              <button onClick={() => setShowPayment(false)} className="p-2 rounded-lg hover:bg-gray-100">
                <span className="text-2xl">×</span>
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-blue-800 mb-4">Transferencia Bancaria SEPA</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700">Beneficiario:</span>
                  <span className="font-medium text-blue-900">{bankDetails.beneficiary}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700">IBAN:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-medium text-blue-900">{bankDetails.iban}</span>
                    <button onClick={copyIban} className="p-1 rounded hover:bg-blue-100">
                      {copiedIban ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-blue-600" />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">BIC:</span>
                  <span className="font-medium text-blue-900">{bankDetails.bic}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">BIC Intermediario:</span>
                  <span className="font-medium text-blue-900">{bankDetails.intermediaryBic}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Dirección:</span>
                  <span className="font-medium text-blue-900 text-right">{bankDetails.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Banco:</span>
                  <span className="font-medium text-blue-900">{bankDetails.bank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Dirección Banco:</span>
                  <span className="font-medium text-blue-900 text-right">{bankDetails.bankAddress}</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-amber-800 mb-3">Instrucciones</h3>
              <ul className="space-y-2">
                {paymentInstructions.map((instruction, i) => (
                  <li key={i} className="text-amber-700 text-sm flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span> {instruction}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-[#4a4a68]">Producto:</span>
                <span className="font-bold text-[#1a1a2e]">{product.name}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[#4a4a68]">Importe:</span>
                <span className="font-bold text-[#1a1a2e]">{formatPriceRange(product.priceMin, product.priceMax)}</span>
              </div>
              <p className="text-xs text-[#71717a] mt-4">
                El importe final se acordará tras la negociación con nuestro equipo de ventas.
              </p>
            </div>

            <div className="flex gap-4">
              <Button onClick={() => setShowPayment(false)} variant="outline" className="flex-1">
                Cerrar
              </Button>
              <Link href="/contact" className="flex-1">
                <Button className="w-full">
                  Contactar Ventas
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      {/* What You Get Section */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">¿Qué Incluye tu Compra?</h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              Al adquirir {product.name}, recibes un paquete completo diseñado para que puedas lanzar y escalar
              tu negocio inmediatamente, sin costos ocultos ni dependencias de terceros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center`}>
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Código Fuente Completo</h3>
              </div>
              <p className="text-[#4a4a68]">
                Recibes acceso total al código fuente, incluyendo backend, frontend, smart contracts (si aplica),
                y toda la infraestructura. Sin código ofuscado, sin dependencias propietarias. Tú eres el dueño.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center`}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Documentación Exhaustiva</h3>
              </div>
              <p className="text-[#4a4a68]">
                Documentación técnica completa: arquitectura del sistema, APIs, guías de deployment,
                configuración de entornos, y playbooks operativos. Todo lo necesario para operar de forma autónoma.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Soporte Enterprise</h3>
              </div>
              <p className="text-[#4a4a68]">
                90 días de soporte técnico incluido con nuestro equipo de ingenieros. Resolución de dudas,
                asistencia en deployment, y consultoría para customizaciones específicas de tu caso de uso.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Licencia Perpetua</h3>
              </div>
              <p className="text-[#4a4a68]">
                Una vez comprado, {product.name} es tuyo para siempre. Sin pagos mensuales, sin royalties,
                sin límites de usuarios o transacciones. Despliega en tantos servidores como necesites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className={`bg-gradient-to-r ${gradient.from} ${gradient.to} rounded-3xl p-8 md:p-12 text-white overflow-hidden relative`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            <div className="relative z-10 text-center">
              <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                Inversión Estratégica
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Transformar tu Negocio con {product.name}?</h2>
              <p className="text-white/90 mb-4 max-w-2xl mx-auto text-lg">
                Únete a las empresas líderes que ya están utilizando {product.name} para acelerar su crecimiento
                y establecer ventajas competitivas duraderas en el mercado.
              </p>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Valoración: <span className="font-bold text-white">{formatPriceRange(product.priceMin, product.priceMax)}</span>
                <br />
                <span className="text-sm">El precio final se negocia según configuración y soporte requerido</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {isAuthenticated ? (
                  <Button size="lg" onClick={() => setShowPayment(true)} className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                    <CreditCard className="w-5 h-5 mr-2" /> Ver Datos de Pago
                  </Button>
                ) : (
                  <Link href={`/login?callbackUrl=/products/${product.slug}`}>
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                      <Lock className="w-5 h-5 mr-2" /> Iniciar Sesión para Comprar
                    </Button>
                  </Link>
                )}
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
                    Hablar con Ventas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
