'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft, Play, Shield, Code2, Zap, CheckCircle2, Star,
  Users, Lock, TrendingUp, FileText, CreditCard, Rocket, Target, Award, Copy, Check
} from 'lucide-react'
import Button from '@frontend/components/ui/Button'
import { useAuth } from '@frontend/hooks/useAuth'
import { bankDetails, sepaDetails, swiftDetails } from '@frontend/data/bankDetails'
import Image from 'next/image'
import DemoCarouselModal from '@frontend/components/products/DemoCarouselModal'
import { getFirstPlatformImage, platformsWithImages } from '@frontend/lib/platformImages'

export default function InfraGlobalInsurancePage() {
  const { isAuthenticated } = useAuth()
  const [copiedIban, setCopiedIban] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [isOutsideEU, setIsOutsideEU] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)
  const hasImages = platformsWithImages.includes('guard')
  const firstImageUrl = getFirstPlatformImage('guard')

  const copyIban = () => {
    navigator.clipboard.writeText(bankDetails.iban.replace(/\s/g, ''))
    setCopiedIban(true)
    setTimeout(() => setCopiedIban(false), 2000)
  }

  const product = {
    name: 'GUARD',
    icon: '🛡️',
    tagline: 'InsurTech Platform. Parametric & Traditional.',
    category: 'INFRA Holdings',
    priceMin: 55000000,
    priceMax: 60000000,
    projectedValue2Years: 4500000,
    flagship: true,
    gradient: { from: 'from-emerald-500', to: 'to-teal-600' }
  }

  const formatPrice = (price: number) => {
    const priceInEuros = price / 100
    if (priceInEuros >= 1000000) return `€${(priceInEuros / 1000000).toFixed(2)}M`
    if (priceInEuros >= 1000) return `€${(priceInEuros / 1000).toFixed(0)}K`
    return `€${priceInEuros.toFixed(0)}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} pt-24 pb-32 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link href="/products" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Products</span>
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
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">{product.tagline}</p>

              <p className="text-white/80 mb-8 leading-relaxed max-w-xl">
                Complete InsurTech platform supporting both parametric and traditional insurance products.
                Automated claims processing, reinsurance module, actuarial modeling tools, and full Solvency II compliance.
                Launch your insurance business in weeks, not years.
              </p>

              <div className="mb-8">
                <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Valuation</span>
                <p className="text-4xl md:text-5xl font-bold text-white mt-2">
                  {formatPrice(product.priceMin)}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {isAuthenticated ? (
                  <Button size="lg" onClick={() => setShowPayment(true)} className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                    <CreditCard className="w-5 h-5 mr-2" /> Buy Now
                  </Button>
                ) : (
                  <Link href="/login?callbackUrl=/products/infra-global-insurance">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                      <Lock className="w-5 h-5 mr-2" /> Login to Purchase
                    </Button>
                  </Link>
                )}
                {hasImages && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10"
                    onClick={() => setShowDemoModal(true)}
                  >
                    <Play className="w-5 h-5 mr-2" /> Request Demo
                  </Button>
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
                {hasImages && firstImageUrl ? (
                  <div className="relative aspect-video max-w-2xl mx-auto">
                    <div className="absolute inset-0 bg-white/30 rounded-3xl blur-3xl transform scale-95" />
                    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 backdrop-blur-sm">
                      <div className="relative w-full aspect-video">
                        <Image
                          src={firstImageUrl}
                          alt={`${product.name} preview`}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-square max-w-lg mx-auto">
                    <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl transform scale-90" />
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 flex items-center justify-center">
                      <span className="text-[10rem] md:text-[12rem] filter drop-shadow-2xl">{product.icon}</span>
                    </div>
                  </div>
                )}
              </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Brand Name Disclaimer */}
      <section className="py-8 bg-red-50 border-y border-red-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-2 border-red-300 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-900 mb-2">Product Name Disclaimer</h3>
                <p className="text-red-800 leading-relaxed text-sm mb-3">
                  Due to trademark considerations and to avoid potential brand conflicts, this platform has been assigned a representative name for marketplace display purposes. <strong>ffollowme oü</strong> holds complete copyright and intellectual property rights for this platform, which was originally developed for the INFRA group.
                </p>
                <p className="text-red-800 leading-relaxed text-sm">
                  This is a <strong>unique, production-ready platform</strong> with no clones or similar solutions in the market. The platform can be rebranded with any name of your choice upon acquisition, with full legal rights and no trademark restrictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Parametric', description: 'Event-triggered automatic payouts' },
              { title: 'Traditional', description: 'Full policy lifecycle management' },
              { title: 'Solvency II', description: 'EU regulatory compliance built-in' },
              { title: 'Reinsurance', description: 'Automated treaty management' }
            ].map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }} className="text-center">
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center text-white mb-4`}>
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#4a4a68]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">About GUARD</h2>
            <p className="text-lg text-[#4a4a68] leading-relaxed mb-8">
              GUARD is a comprehensive InsurTech platform that enables you to launch both innovative parametric insurance products and traditional policy management. Built by a team with deep insurance industry experience, this platform handles everything from product design and underwriting to claims processing and regulatory reporting. Whether you're launching a new MGA, building embedded insurance products, or modernizing an existing carrier's technology stack, GUARD provides the foundation you need.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">Market Overview</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-8">
              The global InsurTech market is projected to reach $158 billion by 2028, growing at 32% CAGR. Parametric insurance alone is expected to grow from $11.7 billion to $29.3 billion by 2031. Traditional insurers are struggling to modernize their legacy systems, creating massive opportunities for technology-first entrants. GUARD positions you to capture this growth with a platform that combines modern technology with deep insurance domain expertise.
            </p>

            <div className={`bg-gradient-to-r ${product.gradient.from} ${product.gradient.to} rounded-2xl p-8 text-white mb-8`}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Market Opportunity
              </h3>
              <p className="leading-relaxed opacity-95">
                MGAs (Managing General Agents) typically earn 15-25% commission on premiums. With a parametric product targeting $50M GWP in Year 2, that's $7.5-12.5M in commission revenue. The platform's API-first architecture also enables embedded insurance partnerships with fintechs, e-commerce platforms, and mobility companies—each potentially worth $1-5M annually in premium volume.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">Competitive Advantage</h3>
            <p className="text-[#4a4a68] leading-relaxed">
              GUARD is unique in supporting both parametric and traditional insurance within a single platform. Most competitors focus on one or the other. Our parametric engine connects to 50+ data sources (weather, flight, IoT sensors) for automatic trigger verification and instant payouts. The traditional module handles the full policy lifecycle with configurable workflows, document generation, and multi-currency support. Solvency II reporting is built-in, not bolted-on, saving months of compliance work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Buy Section */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Why Invest in GUARD?</h2>
            <p className="text-lg text-[#4a4a68]">
              Key reasons why this platform represents an exceptional opportunity for entering the InsurTech market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'InsurTech market growing 32% CAGR to $158B by 2028',
              '105,000+ lines of production-ready code',
              'Solvency II compliance built-in, saving 6+ months'
            ].map((reason, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center flex-shrink-0`}>
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

      {/* Use Case / ROI */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Real Use Case</h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              We analyze a real scenario to demonstrate the transformative impact of GUARD on business results.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6 text-center">
              📊 MGA Launching Parametric Flight Delay Insurance
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                  <span className="text-2xl">❌</span> Building from Scratch
                </h4>
                <ul className="space-y-3">
                  <li className="text-red-800 flex items-start gap-2">
                    <span className="text-red-500 mt-1 font-bold">•</span>
                    <span className="font-medium">18-24 months development time</span>
                  </li>
                  <li className="text-red-800 flex items-start gap-2">
                    <span className="text-red-500 mt-1 font-bold">•</span>
                    <span className="font-medium">$2-4M development cost</span>
                  </li>
                  <li className="text-red-800 flex items-start gap-2">
                    <span className="text-red-500 mt-1 font-bold">•</span>
                    <span className="font-medium">6+ months for Solvency II compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h4 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span> With GUARD
                </h4>
                <ul className="space-y-3">
                  <li className="text-green-800 flex items-start gap-2">
                    <span className="text-green-500 mt-1 font-bold">•</span>
                    <span className="font-medium">5-8 weeks to launch</span>
                  </li>
                  <li className="text-green-800 flex items-start gap-2">
                    <span className="text-green-500 mt-1 font-bold">•</span>
                    <span className="font-medium">€1M total cost</span>
                  </li>
                  <li className="text-green-800 flex items-start gap-2">
                    <span className="text-green-500 mt-1 font-bold">•</span>
                    <span className="font-medium">Compliance ready from day one</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-r ${product.gradient.from} ${product.gradient.to} rounded-2xl p-8 text-center text-white`}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <Rocket className="w-8 h-8" />
              <span className="text-2xl font-bold">Time to Market</span>
            </div>
            <p className="text-3xl font-bold mb-2">85% faster launch vs building from scratch</p>
            <p className="text-white/80 text-sm">
              Plus significant cost savings and reduced regulatory risk
            </p>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Who is GUARD For?</h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              This platform has been designed for organizations that can maximize its value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {['MGAs & InsurTech Startups', 'Traditional Insurers Modernizing', 'Embedded Insurance Providers', 'Reinsurance Companies'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center flex-shrink-0`}>
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-[#1a1a2e] font-semibold text-lg block">{item}</span>
                  <span className="text-[#71717a] text-sm">Ideal buyer profile</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">What's Included in Your Purchase?</h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              When you acquire GUARD, you receive a complete package designed for immediate deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center`}>
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Complete Source Code</h3>
              </div>
              <p className="text-[#4a4a68]">
                105,000+ lines of TypeScript, React, Node.js, and Python actuarial tools. Full parametric engine, policy admin system, claims module, and reporting suite.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center`}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Regulatory Documentation</h3>
              </div>
              <p className="text-[#4a4a68]">
                Solvency II report templates, ORSA framework, actuarial models, and compliance checklists. Months of regulatory work already done.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Integration Support</h3>
              </div>
              <p className="text-[#4a4a68]">
                30 days of technical support included. Deployment takes 5-8 weeks with your DevOps + Backend team.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Full IP Transfer</h3>
              </div>
              <p className="text-[#4a4a68]">
                100% ownership. Rebrand, modify, white-label. No royalties, no restrictions, no ongoing fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#1a1a2e]">Payment Details</h2>
              <button onClick={() => setShowPayment(false)} className="p-2 rounded-lg hover:bg-gray-100">
                <span className="text-2xl">×</span>
              </button>
            </div>

            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setIsOutsideEU(false)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                  !isOutsideEU ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                SEPA (EU)
              </button>
              <button
                onClick={() => setIsOutsideEU(true)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                  isOutsideEU ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                SWIFT (International)
              </button>
            </div>

            {!isOutsideEU && (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-bold text-blue-800">SEPA Bank Transfer</h3>
                  <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full">{sepaDetails.transferTime}</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Beneficiary:</span>
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
                </div>
              </div>
            )}

            {isOutsideEU && (
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-bold text-purple-800">International SWIFT Transfer</h3>
                  <span className="text-xs bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full">{swiftDetails.transferTime}</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-purple-700">Beneficiary:</span>
                    <span className="font-medium text-purple-900">{bankDetails.beneficiary}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-700">IBAN:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-medium text-purple-900">{bankDetails.iban}</span>
                      <button onClick={copyIban} className="p-1 rounded hover:bg-purple-100">
                        {copiedIban ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-purple-600" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">BIC:</span>
                    <span className="font-medium text-purple-900">{bankDetails.bic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">Intermediary BIC:</span>
                    <span className="font-medium text-purple-900">{swiftDetails.intermediaryBic}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-[#4a4a68]">Product:</span>
                <span className="font-bold text-[#1a1a2e]">{product.name}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[#4a4a68]">Amount:</span>
                <span className="font-bold text-[#1a1a2e]">{formatPrice(product.priceMin)}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={() => setShowPayment(false)} variant="outline" className="flex-1">
                Close
              </Button>
              <Link href="/contact" className="flex-1">
                <Button className="w-full">Contact Sales</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className={`bg-gradient-to-r ${product.gradient.from} ${product.gradient.to} rounded-3xl p-8 md:p-12 text-white overflow-hidden relative`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            <div className="relative z-10 text-center">
              <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                Flagship Product
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your InsurTech Platform?</h2>
              <p className="text-white/90 mb-4 max-w-2xl mx-auto text-lg">
                Join the InsurTech revolution with a platform that combines parametric innovation with traditional insurance expertise.
              </p>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Valuation: <span className="font-bold text-white">{formatPrice(product.priceMin)}</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {isAuthenticated ? (
                  <Button size="lg" onClick={() => setShowPayment(true)} className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                    <CreditCard className="w-5 h-5 mr-2" /> View Payment Details
                  </Button>
                ) : (
                  <Link href="/login?callbackUrl=/products/infra-global-insurance">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                      <Lock className="w-5 h-5 mr-2" /> Login to Purchase
                    </Button>
                  </Link>
                )}
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {hasImages && (
        <DemoCarouselModal
          isOpen={showDemoModal}
          onClose={() => setShowDemoModal(false)}
          productSlug="guard"
          productName={product.name}
        />
      )}
    </div>
  )
}
