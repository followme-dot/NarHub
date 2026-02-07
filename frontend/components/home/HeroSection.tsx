'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Shield, Zap, Award, CheckCircle2 } from 'lucide-react'

const trustBadges = [
  { icon: Shield, text: 'Triple Audited', description: 'Security verified' },
  { icon: Award, text: 'SOC 2 Certified', description: 'Enterprise ready' },
  { icon: Zap, text: '$2B+ Volume', description: 'Battle tested' },
]

const stats = [
  { value: '36', label: 'Enterprise Platforms' },
  { value: '750K+', label: 'Lines of Code' },
  { value: '€15.99M', label: 'Portfolio Value' },
  { value: '5-8', label: 'Weeks to Deploy' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient Orbs - Very Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              3 platforms sold this quarter. 16 remaining.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-[#1a1a2e]"
          >
            Enterprise Software
            <br />
            <span className="text-gradient">That Prints Money.</span>
            <br />
            <span className="text-[#4a4a68]">Yours in 7 Weeks.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-xl md:text-2xl text-[#4a4a68] max-w-3xl mx-auto leading-relaxed"
          >
            Production-ready platforms generating{' '}
            <span className="text-[#1a1a2e] font-semibold">€40M ARR Year 1</span>.
            <br className="hidden md:block" />
            750K+ lines of production code. Zero technical debt.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {['Deploy Today', 'Full Source Code', '24/7 Support', 'Custom Branding'].map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-white text-[#1a1a2e] border border-gray-200 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {feature}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/products" className="btn-primary text-lg px-10 py-5 group">
              Browse Platforms
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <button className="btn-secondary text-lg px-10 py-5 group">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-gray-200 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <badge.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#1a1a2e]">{badge.text}</p>
                  <p className="text-xs text-[#71717a]">{badge.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-mono font-bold text-gradient">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[#4a4a68] font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-blue-500"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
