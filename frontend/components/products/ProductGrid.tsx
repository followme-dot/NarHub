'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard'
import { products } from '@frontend/data/copy'
import { Grid3X3, LayoutGrid } from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Platforms', count: 36 },
  { id: 'DEFI_TRADING', name: 'DeFi & Trading', count: 7 },
  { id: 'GAMING_METAVERSE', name: 'Gaming & Metaverse', count: 4 },
  { id: 'INFRASTRUCTURE_IDENTITY', name: 'Infrastructure', count: 4 },
  { id: 'ENTERPRISE_COMPLIANCE', name: 'Enterprise', count: 4 },
  { id: 'INFRA_HOLDINGS', name: 'Enterprise FinTech', count: 17 },
]

interface ProductGridProps {
  showFilters?: boolean
  limit?: number
  category?: string
}

export default function ProductGrid({
  showFilters = true,
  limit,
  category: initialCategory,
}: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all')
  const [gridSize, setGridSize] = useState<'compact' | 'comfortable'>('comfortable')

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'all') return true
    return product.category === selectedCategory
  })

  // Apply limit if specified
  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts

  return (
    <div>
      {/* Filters */}
      {showFilters && (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-200
                  ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-[#4a4a68] border border-gray-200 hover:border-blue-300 hover:text-[#1a1a2e]'
                  }
                `}
              >
                {cat.name}
                <span className="ml-2 opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setGridSize('compact')}
              className={`
                p-2 rounded-lg transition-colors duration-200
                ${gridSize === 'compact' ? 'bg-blue-100 text-blue-600' : 'text-[#71717a] hover:text-[#1a1a2e]'}
              `}
              aria-label="Compact view"
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setGridSize('comfortable')}
              className={`
                p-2 rounded-lg transition-colors duration-200
                ${gridSize === 'comfortable' ? 'bg-blue-100 text-blue-600' : 'text-[#71717a] hover:text-[#1a1a2e]'}
              `}
              aria-label="Comfortable view"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <motion.div
        layout
        className={`
          grid gap-6
          ${
            gridSize === 'compact'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }
        `}
      >
        <AnimatePresence mode="popLayout">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProductCard
                slug={product.slug}
                name={product.name}
                tagline={product.tagline}
                category={product.category}
                priceMin={product.priceMin}
                priceMax={product.priceMax}
                icon={product.icon}
                featured={product.featured}
                flagship={product.flagship}
                linesOfCode={product.linesOfCode}
                techStack={product.techStack}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {displayProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[#71717a]">No platforms found in this category.</p>
        </div>
      )}

      {/* Results Count */}
      <div className="mt-8 text-center text-sm text-[#71717a]">
        Showing {displayProducts.length} of {filteredProducts.length} platforms
      </div>
    </div>
  )
}
