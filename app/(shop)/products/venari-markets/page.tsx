'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function VenariMarketsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-500 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/products" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-4xl">📱</span>
              <span className="text-white font-medium">DeFi & Trading</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              VENARI MARKETS
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Prediction Markets Platform. Decentralized Betting.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <div className="text-white/80 text-sm mb-1">Price Range</div>
                <div className="text-white text-2xl font-bold">€280K - €330K</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2>About VENARI MARKETS</h2>
            <p>
              Decentralized prediction markets platform with creator monetization,
              token incentives, and censorship-resistant architecture.
            </p>

            <h3>Key Features</h3>
            <ul>
              <li>Decentralized content distribution</li>
              <li>Creator monetization (90% share)</li>
              <li>Token incentives system</li>
              <li>Censorship resistant</li>
              <li>Cross-platform apps (iOS, Android, Web)</li>
            </ul>

            <h3>Technical Specifications</h3>
            <ul>
              <li><strong>Lines of Code:</strong> 85,000</li>
              <li><strong>Tech Stack:</strong> TypeScript, React Native, Node.js, PostgreSQL, IPFS</li>
              <li><strong>Creator Share:</strong> 90%</li>
              <li><strong>Storage:</strong> IPFS + Arweave</li>
              <li><strong>Moderation:</strong> Community-driven</li>
            </ul>
          </div>
        </div>
      </section>

      {hasImages && (
        <DemoCarouselModal
          isOpen={showDemoModal}
          onClose={() => setShowDemoModal(false)}
          productSlug="venari-markets"
          productName={product.name}
        />
      )}
    </div>
  )
}
