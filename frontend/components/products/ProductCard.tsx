'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  BarChart3,
  Gamepad2,
  Shield,
  Building2,
  Code2,
  Layers,
  Cpu,
  Wallet,
  Network,
  Lock,
  Globe,
  Zap,
  Database,
  Cloud,
  Bot,
  Coins,
} from 'lucide-react'

interface ProductCardProps {
  slug: string
  name: string
  tagline: string
  category: string
  priceMin: number
  priceMax: number
  icon: string
  featured?: boolean
  flagship?: boolean
  linesOfCode?: number
  techStack?: string[]
}

// Mapeo de iconos profesionales por producto
const productIcons: Record<string, React.ElementType> = {
  'bitboots': Wallet,
  'nardium-dex': BarChart3,
  'argentum-bridge': Network,
  'aureum-vault': Lock,
  'trade-mad': TrendingUp,
  'templum-dao': Building2,
  'sseum-games': Gamepad2,
  'bb-nft': Sparkles,
  'gladius-hub': Zap,
  'veritas-id': Shield,
  'vigil-ai': Bot,
  'oraculum': Database,
  'ferrum-pay': Coins,
  'nexus-grid': Cpu,
  'susinik': Cloud,
  'tributum': Building2,
  'aether-hub': Globe,
  'agora-social': Network,
  'astrid': Sparkles,
}

const categoryConfig: Record<string, {
  label: string
  gradient: string
  iconGradient: string
  iconColor: string
  badgeBg: string
  badgeText: string
}> = {
  DEFI_TRADING: {
    label: 'DeFi & Trading',
    gradient: 'from-blue-500 to-cyan-500',
    iconGradient: 'from-blue-100 to-cyan-100',
    iconColor: 'text-blue-600',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
  },
  GAMING_METAVERSE: {
    label: 'Gaming & Metaverse',
    gradient: 'from-purple-500 to-pink-500',
    iconGradient: 'from-purple-100 to-pink-100',
    iconColor: 'text-purple-600',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700',
  },
  INFRASTRUCTURE_IDENTITY: {
    label: 'Infrastructure',
    gradient: 'from-emerald-500 to-teal-500',
    iconGradient: 'from-emerald-100 to-teal-100',
    iconColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
  },
  ENTERPRISE_COMPLIANCE: {
    label: 'Enterprise',
    gradient: 'from-amber-500 to-orange-500',
    iconGradient: 'from-amber-100 to-orange-100',
    iconColor: 'text-amber-600',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700',
  },
}

function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(0)}M`
  }
  return `$${(price / 1000).toFixed(0)}K`
}

export default function ProductCard({
  slug,
  name,
  tagline,
  category,
  priceMin,
  priceMax,
  featured = false,
  flagship = false,
  linesOfCode,
  techStack = [],
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const config = categoryConfig[category] || categoryConfig.DEFI_TRADING
  const IconComponent = productIcons[slug] || Cpu

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="group relative h-full"
    >
      <Link href={`/products/${slug}`} className="block h-full">
        {/* Glass Card */}
        <div className="relative h-full min-h-[420px] flex flex-col card-glass p-0 overflow-hidden">
          {/* Top Gradient Accent */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${config.gradient}`} />

          {/* Flagship/Featured Badge */}
          {(flagship || featured) && (
            <div className="absolute top-5 right-5 z-10">
              <span className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide
                ${flagship
                  ? `bg-gradient-to-r ${config.gradient} text-white shadow-lg`
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200/50'}
              `}>
                {flagship ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    Flagship
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-3.5 h-3.5" />
                    Featured
                  </>
                )}
              </span>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 flex flex-col p-7">
            {/* Category Badge */}
            <span className={`
              self-start px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide
              ${config.badgeBg} ${config.badgeText}
            `}>
              {config.label}
            </span>

            {/* Icon & Title Section */}
            <div className="mt-6 mb-4">
              {/* Professional Icon */}
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-5
                bg-gradient-to-br ${config.iconGradient}
                border border-white/50 shadow-sm
                group-hover:scale-110 group-hover:shadow-lg
                transition-all duration-500
              `}>
                <IconComponent className={`w-8 h-8 ${config.iconColor}`} />
              </div>

              {/* Product Name */}
              <h3 className="text-xl font-display font-bold text-[#1a1a2e] group-hover:text-blue-600 transition-colors duration-300 mb-2">
                {name}
              </h3>

              {/* Tagline */}
              <p className="text-sm text-[#4a4a68] leading-relaxed line-clamp-3">
                {tagline}
              </p>
            </div>

            {/* Stats Section */}
            <div className="flex items-center gap-5 py-4 border-t border-gray-100/80">
              {linesOfCode && (
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#71717a]" />
                  <span className="text-sm font-semibold text-[#1a1a2e]">
                    {(linesOfCode / 1000).toFixed(0)}K
                  </span>
                  <span className="text-xs text-[#71717a]">LOC</span>
                </div>
              )}
              {techStack.length > 0 && (
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#71717a]" />
                  <span className="text-sm font-semibold text-[#1a1a2e]">
                    {techStack.length}
                  </span>
                  <span className="text-xs text-[#71717a]">Tech</span>
                </div>
              )}
            </div>

            {/* Price & CTA Section */}
            <div className="mt-auto pt-5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-[#71717a] uppercase tracking-wider font-semibold mb-1.5">
                    Valuation
                  </p>
                  <p className="text-2xl font-mono font-bold text-gradient">
                    {formatPrice(priceMin)} - {formatPrice(priceMax)}
                  </p>
                </div>

                {/* CTA Button */}
                <motion.div
                  animate={{ x: isHovered ? 4 : 0 }}
                  className={`
                    flex items-center justify-center w-12 h-12 rounded-xl
                    bg-gradient-to-r ${config.gradient}
                    shadow-lg shadow-blue-500/20
                    group-hover:shadow-xl group-hover:shadow-blue-500/30
                    transition-all duration-300
                  `}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div
            className={`
              absolute inset-0 rounded-3xl pointer-events-none
              bg-gradient-to-r ${config.gradient}
              opacity-0 group-hover:opacity-[0.03]
              transition-opacity duration-500
            `}
          />
        </div>
      </Link>
    </motion.div>
  )
}
