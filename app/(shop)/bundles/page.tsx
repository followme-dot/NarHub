'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Package, Zap, TrendingUp, Shield, Check, Sparkles } from 'lucide-react'
import { bundles, megaBundles, products } from '@frontend/data/copy'
import Button from '@frontend/components/ui/Button'

const formatPrice = (price: number) => {
  // Convertir de centavos a euros
  const priceInEuros = price / 100
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(priceInEuros)
}

const bundleColors: Record<string, { from: string; to: string; bg: string; border: string }> = {
  blue: { from: 'from-blue-500', to: 'to-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  purple: { from: 'from-purple-500', to: 'to-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
  amber: { from: 'from-amber-500', to: 'to-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
  emerald: { from: 'from-emerald-500', to: 'to-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  pink: { from: 'from-pink-500', to: 'to-pink-600', bg: 'bg-pink-50', border: 'border-pink-200' },
  cyan: { from: 'from-cyan-500', to: 'to-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
}

export default function BundlesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <Link href="/products" className="inline-flex items-center gap-2 text-[#4a4a68] hover:text-[#1a1a2e] mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Strategic Bundle Deals
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
              Save Up to 20% with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Strategic Bundles
              </span>
            </h1>
            <p className="text-xl text-[#4a4a68] max-w-2xl mx-auto">
              Acquire complete technology stacks at significant discounts. Each bundle is designed for specific use cases and market opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mega Bundles Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Complete Portfolio Acquisitions</h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              For serious buyers looking to acquire an entire software empire. Maximum discount on complete portfolio deals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {megaBundles.map((bundle, index) => (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden ${
                  bundle.featured ? 'lg:scale-105 shadow-2xl' : 'shadow-lg'
                }`}
              >
                {bundle.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-center py-2 text-sm font-bold">
                    BEST VALUE - SAVE {formatPrice(bundle.individualPrice - bundle.bundlePrice)}
                  </div>
                )}
                <div className={`p-8 ${bundle.featured ? 'pt-14' : ''} bg-gradient-to-br ${
                  bundle.id === 'total-portfolio'
                    ? 'from-amber-500 via-orange-500 to-red-500'
                    : bundle.id === 'nardiha-complete'
                    ? 'from-blue-500 to-purple-600'
                    : 'from-emerald-500 to-cyan-500'
                } text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Package className="w-8 h-8" />
                    <div>
                      <h3 className="text-2xl font-bold">{bundle.name}</h3>
                      <p className="text-white/80 text-sm">{bundle.platformCount} platforms</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-6">{bundle.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Individual Total:</span>
                      <span className="line-through text-white/50">{formatPrice(bundle.individualPrice)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Bundle Price:</span>
                      <span className="text-3xl font-bold">{formatPrice(bundle.bundlePrice)}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/20">
                      <span className="text-white/70">You Save:</span>
                      <span className="text-xl font-bold text-green-300">
                        {formatPrice(bundle.individualPrice - bundle.bundlePrice)} ({bundle.discount}%)
                      </span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                      Request Portfolio Deal
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Bundles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Strategic Bundles</h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              Curated platform combinations designed for specific business verticals and use cases.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bundles.map((bundle, index) => {
              const colors = bundleColors[bundle.color] || bundleColors.blue
              const bundleProducts = bundle.products.map(slug =>
                products.find(p => p.slug === slug)
              ).filter(Boolean)

              return (
                <motion.div
                  key={bundle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl border ${colors.border} ${colors.bg} overflow-hidden hover:shadow-lg transition-shadow`}
                >
                  <div className={`p-6 bg-gradient-to-r ${colors.from} ${colors.to}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{bundle.name}</h3>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                        -{bundle.discount}%
                      </span>
                    </div>
                    <p className="text-white/90 text-sm">{bundle.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#4a4a68] mb-2">Included Platforms:</h4>
                      <div className="space-y-2">
                        {bundleProducts.map((product) => (
                          <div key={product?.slug} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-[#1a1a2e]">{product?.name}</span>
                            <span className="text-[#71717a] ml-auto">{formatPrice(product?.priceMin || 0)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[#4a4a68]">Individual Total:</span>
                        <span className="line-through text-[#71717a]">{formatPrice(bundle.individualPrice)}</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-[#1a1a2e]">Bundle Price:</span>
                        <span className="text-2xl font-bold text-[#1a1a2e]">{formatPrice(bundle.bundlePrice)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
                        <TrendingUp className="w-4 h-4" />
                        <span>Save {formatPrice(bundle.individualPrice - bundle.bundlePrice)}</span>
                      </div>
                      <Link href="/contact">
                        <Button variant="outline" className="w-full">
                          Inquire About This Bundle
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Why Buy Bundles?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Significant Savings',
                description: 'Save 13-20% compared to purchasing platforms individually. The more you buy, the more you save.'
              },
              {
                icon: Zap,
                title: 'Integrated Stack',
                description: 'Bundles are designed to work together. Pre-integrated APIs, shared authentication, unified architecture.'
              },
              {
                icon: Shield,
                title: 'Complete Solution',
                description: 'Each bundle covers an entire market vertical. Launch a complete business, not just a single product.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{benefit.title}</h3>
                <p className="text-[#4a4a68]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1a1a2e] to-[#2d2d4a] rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Acquire Your Bundle?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a private consultation to discuss your strategic objectives and find the perfect bundle for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  Schedule Strategy Call
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Browse Individual Platforms
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
