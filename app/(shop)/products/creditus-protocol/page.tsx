'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import DemoCarouselModal from '@frontend/components/products/DemoCarouselModal'
import { getFirstPlatformImage, platformsWithImages } from '@frontend/lib/platformImages'

export default function CreditusProtocolPage() {
  const [showDemoModal, setShowDemoModal] = useState(false)
  const hasImages = platformsWithImages.includes('creditus-protocol')
  const firstImageUrl = getFirstPlatformImage('creditus-protocol')
  const product = { name: 'CREDITUS PROTOCOL' }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-pink-500 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/products" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-4xl">🖥️</span>
              <span className="text-white font-medium">DeFi & Trading</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              CREDITUS PROTOCOL
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8">
              DeFi Yield Aggregator. Auto-Compounding Strategies.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <div className="text-white/80 text-sm mb-1">Price Range</div>
                <div className="text-white text-2xl font-bold">€230K - €280K</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2>About CREDITUS PROTOCOL</h2>
            <p>
              Advanced DeFi yield aggregator with auto-compounding strategies,
              GPU network capabilities, and competitive pricing for AI/ML workloads.
            </p>

            <h3>Key Features</h3>
            <ul>
              <li>Decentralized GPU network</li>
              <li>Competitive pricing</li>
              <li>AI/ML workload support</li>
              <li>Auto-scaling capabilities</li>
              <li>Pay-per-compute model</li>
            </ul>

            <h3>Technical Specifications</h3>
            <ul>
              <li><strong>Lines of Code:</strong> 65,000</li>
              <li><strong>Tech Stack:</strong> Rust, Go, TypeScript, Kubernetes, IPFS</li>
              <li><strong>Workloads:</strong> AI, ML, rendering</li>
              <li><strong>Billing:</strong> Per-second</li>
            </ul>
          </div>
        </div>
      </section>

      {hasImages && (
        <DemoCarouselModal
          isOpen={showDemoModal}
          onClose={() => setShowDemoModal(false)}
          productSlug="creditus-protocol"
          productName={product.name}
        />
      )}
    </div>
  )
}
