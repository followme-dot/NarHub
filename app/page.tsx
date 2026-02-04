// Root page - Re-export the shop home page
// Next.js 15 requires a page.tsx at root level
// The actual content is in app/(shop)/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Frontend Components
import LoadingScreen from '@frontend/components/layout/LoadingScreen'
import Header from '@frontend/components/layout/Header'
import Footer from '@frontend/components/layout/Footer'
import HeroSection from '@frontend/components/home/HeroSection'
import ProductGrid from '@frontend/components/products/ProductGrid'
import CartDrawer from '@frontend/components/cart/CartDrawer'

// Data
import { stats, usps, faq, finalCTA } from '@frontend/data/copy'

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    // Check if user has seen loading screen in this session
    const hasSeenLoading = sessionStorage.getItem('narhub-loading-seen')
    if (hasSeenLoading) {
      setShowLoading(false)
      return
    }

    // Hide loading screen after 10 seconds
    const timer = setTimeout(() => {
      setShowLoading(false)
      sessionStorage.setItem('narhub-loading-seen', 'true')
    }, 10500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Loading Screen - Shows for 10 seconds on first visit */}
      {showLoading && <LoadingScreen />}

      {/* Main Content */}
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 overflow-x-hidden">
          <HeroSection />

          {/* Products Section */}
          <section className="section-padding bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a2e]">
                  Five Verticals. 36 Platforms.
                  <br />
                  <span className="text-gradient">Infinite Scale Potential.</span>
                </h2>
                <p className="mt-6 text-lg md:text-xl text-[#4a4a68] max-w-2xl mx-auto leading-relaxed">
                  From DeFi to Enterprise: Every revenue stream covered.
                  Not just software. Entire business lines in a box.
                </p>
              </motion.div>

              <ProductGrid showFilters={true} />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <Link href="/products" className="btn-secondary inline-flex items-center gap-2">
                  View All Platforms
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a2e]">By The Numbers</h2>
                <p className="mt-4 text-lg md:text-xl text-[#4a4a68] max-w-2xl mx-auto leading-relaxed">
                  Every number tells a story of years of dedicated development.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {stats.slice(0, 5).map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                  >
                    <p className="text-3xl md:text-4xl font-mono font-bold text-gradient">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-[#4a4a68]">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us Section - Production-Grade Software */}
          <section className="section-padding bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a2e]">
                  Not Vaporware. Not MVPs.
                  <br />
                  <span className="text-gradient">Production-Grade Software.</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usps.slice(0, 6).map((usp, index) => (
                  <motion.div
                    key={usp.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                  >
                    <span className="text-3xl mb-4 block">{usp.icon}</span>
                    <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{usp.title}</h3>
                    <p className="text-sm text-[#4a4a68] mb-4">{usp.description}</p>
                    <p className="text-sm text-blue-600 font-medium">{usp.benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="section-padding bg-white">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a2e]">Common Questions</h2>
              </motion.div>

              <div className="space-y-0">
                {faq.slice(0, 5).map((item, index) => (
                  <FAQItem key={index} question={item.question} answer={item.answer} index={index} />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <Link href="/#faq" className="text-blue-600 hover:underline text-sm font-medium">
                  View all 10 questions →
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white"
              >
                The Only Question Left:
                <br />
                <span className="text-white/90">Which Platforms Do You Want?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
              >
                {finalCTA.subheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 font-semibold text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  {finalCTA.primaryCTA}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/catalog.pdf" className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 text-white font-semibold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                  {finalCTA.secondaryCTA}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 text-sm text-white/60"
              >
                {finalCTA.trustNote}
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </>
  )
}

// FAQ Item Component
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-5 flex items-center justify-between gap-4"
      >
        <span className="text-[#1a1a2e] font-medium">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-blue-600 text-xl font-bold flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-[#4a4a68] leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  )
}
