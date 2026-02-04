'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  ShoppingCart,
  Play,
  Shield,
  Code2,
  Zap,
  CheckCircle2,
  Star,
  Download,
  Clock,
  Users,
  Globe,
  Lock,
  Cpu,
  Database,
  Cloud,
  Layers,
  TrendingUp,
  Wallet,
  Gamepad2,
  Building2,
  Fingerprint
} from 'lucide-react'
import Button from '@frontend/components/ui/Button'
import { useCart } from '@frontend/hooks/useCart'
import { formatPriceRange } from '@frontend/lib/utils'

interface Product {
  slug: string
  name: string
  icon: string
  tagline: string
  category: string
  priceMin: number
  priceMax: number
  features: string[]
  techStack: string[]
  specs?: Record<string, string | undefined>
  featured: boolean
  flagship?: boolean
  linesOfCode?: number
}

interface ProductDetailProps {
  product: Product
}

// Category-based icon mapping
const categoryIcons: Record<string, React.ReactNode> = {
  'DeFi': <TrendingUp className="w-8 h-8" />,
  'Trading': <TrendingUp className="w-8 h-8" />,
  'Gaming': <Gamepad2 className="w-8 h-8" />,
  'Metaverse': <Globe className="w-8 h-8" />,
  'Infrastructure': <Cpu className="w-8 h-8" />,
  'Identity': <Fingerprint className="w-8 h-8" />,
  'Enterprise': <Building2 className="w-8 h-8" />,
  'Compliance': <Shield className="w-8 h-8" />,
  'Payments': <Wallet className="w-8 h-8" />,
}

// Product-specific gradient colors
const productGradients: Record<string, { from: string; to: string; accent: string }> = {
  'bitboots': { from: 'from-orange-500', to: 'to-red-600', accent: 'orange' },
  'nardium-dex': { from: 'from-blue-600', to: 'to-cyan-500', accent: 'blue' },
  'argentum-bridge': { from: 'from-slate-600', to: 'to-zinc-500', accent: 'slate' },
  'aureum-vault': { from: 'from-amber-500', to: 'to-yellow-500', accent: 'amber' },
  'trade-mad': { from: 'from-green-600', to: 'to-emerald-500', accent: 'green' },
  'templum-dao': { from: 'from-purple-600', to: 'to-indigo-600', accent: 'purple' },
  'sseum-games': { from: 'from-pink-600', to: 'to-rose-500', accent: 'pink' },
  'bb-nft': { from: 'from-violet-600', to: 'to-purple-500', accent: 'violet' },
  'gladius-hub': { from: 'from-red-600', to: 'to-orange-500', accent: 'red' },
  'veritas-id': { from: 'from-teal-600', to: 'to-cyan-500', accent: 'teal' },
  'vigil-ai': { from: 'from-indigo-600', to: 'to-blue-500', accent: 'indigo' },
  'oraculum': { from: 'from-fuchsia-600', to: 'to-pink-500', accent: 'fuchsia' },
  'ferrum-pay': { from: 'from-emerald-600', to: 'to-green-500', accent: 'emerald' },
  'nexus-grid': { from: 'from-sky-600', to: 'to-blue-500', accent: 'sky' },
  'susinik': { from: 'from-lime-600', to: 'to-green-500', accent: 'lime' },
  'tributum': { from: 'from-stone-600', to: 'to-neutral-500', accent: 'stone' },
  'aether-hub': { from: 'from-cyan-600', to: 'to-teal-500', accent: 'cyan' },
  'agora-social': { from: 'from-rose-600', to: 'to-pink-500', accent: 'rose' },
  'astrid': { from: 'from-blue-700', to: 'to-indigo-600', accent: 'blue' },
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart, isInCart } = useCart()
  const [activeTab, setActiveTab] = useState<'features' | 'tech' | 'specs'>('features')
  const inCart = isInCart(product.slug)

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

  const gradient = productGradients[product.slug] || { from: 'from-blue-600', to: 'to-purple-600', accent: 'blue' }
  const categoryIcon = categoryIcons[product.category] || <Layers className="w-8 h-8" />

  const tabs = [
    { id: 'features' as const, label: 'Características', icon: <Zap className="w-4 h-4" /> },
    { id: 'tech' as const, label: 'Tecnología', icon: <Code2 className="w-4 h-4" /> },
    { id: 'specs' as const, label: 'Especificaciones', icon: <Database className="w-4 h-4" /> },
  ]

  const highlights = [
    { icon: <Shield className="w-5 h-5" />, label: 'Código Auditado', value: 'SOC 2 Type II' },
    { icon: <Clock className="w-5 h-5" />, label: 'Despliegue', value: '7-8 Semanas' },
    { icon: <Code2 className="w-5 h-5" />, label: 'Líneas de Código', value: product.linesOfCode ? `${(product.linesOfCode / 1000).toFixed(0)}K+` : '25K+' },
    { icon: <Users className="w-5 h-5" />, label: 'Soporte', value: '24/7 Enterprise' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient */}
      <section className={`relative bg-gradient-to-br ${gradient.from} ${gradient.to} pt-24 pb-32 overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a Productos</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category & Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                  {categoryIcon}
                  {product.category}
                </span>
                {product.flagship && (
                  <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-amber-400/90 text-amber-900 text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    Flagship
                  </span>
                )}
                {product.featured && !product.flagship && (
                  <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white/30 text-white text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Destacado
                  </span>
                )}
              </div>

              {/* Product Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {product.name}
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-xl">
                {product.tagline}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                  Valoración del Producto
                </span>
                <p className="text-4xl md:text-5xl font-bold text-white mt-2">
                  {formatPriceRange(product.priceMin, product.priceMax)}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={inCart}
                  className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {inCart ? 'Añadido al Carrito' : 'Añadir al Carrito'}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo
                </Button>
              </div>
            </motion.div>

            {/* Right - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl transform scale-90" />

                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 flex items-center justify-center">
                  <span className="text-[10rem] md:text-[12rem] filter drop-shadow-2xl">
                    {product.icon}
                  </span>
                </div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center`}>
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#71717a]">Seguridad</p>
                      <p className="font-bold text-[#1a1a2e]">Enterprise Grade</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center`}>
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#71717a]">Despliegue</p>
                      <p className="font-bold text-[#1a1a2e]">7-8 Semanas</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center text-white`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-[#71717a]">{item.label}</p>
                  <p className="font-bold text-[#1a1a2e]">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Tab Headers */}
            <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-gray-100 rounded-2xl w-fit">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${gradient.from} ${gradient.to} text-white shadow-lg`
                      : 'text-[#4a4a68] hover:text-[#1a1a2e] hover:bg-white'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
              {activeTab === 'features' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-8">
                    Características Principales
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center`}>
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[#1a1a2e] font-medium pt-2">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'tech' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-8">
                    Stack Tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.techStack.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * index }}
                        className={`px-5 py-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 text-[#1a1a2e] font-medium hover:border-gray-300 hover:shadow-md transition-all cursor-default`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'specs' && product.specs && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-8">
                    Especificaciones Técnicas
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value], index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
                      >
                        <span className="text-[#71717a] capitalize">{key}</span>
                        <span className="text-[#1a1a2e] font-semibold">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className={`bg-gradient-to-r ${gradient.from} ${gradient.to} rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  ¿Listo para comenzar con {product.name}?
                </h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Adquiere hoy y obtén acceso completo al código fuente, documentación y soporte enterprise.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={handleAddToCart}
                    disabled={inCart}
                    className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {inCart ? 'Añadido al Carrito' : 'Adquirir Ahora'}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar Ficha Técnica
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
