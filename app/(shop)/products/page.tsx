import { Metadata } from 'next'
import ProductGrid from '@frontend/components/products/ProductGrid'

export const metadata: Metadata = {
  title: 'Products | Narhub',
  description: 'Browse our catalog of 36 enterprise software platforms. Production-ready solutions for DeFi, Gaming, Infrastructure, Enterprise, and Financial Technology.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-24 bg-white">
      {/* Hero */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">
            Our Products
          </h1>
          <p className="text-xl text-[#4a4a68] max-w-3xl mx-auto leading-relaxed">
            36 enterprise software platforms built with cutting-edge technology.
            Each product has been designed to transform specific industries
            and generate real revenue from day one.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <ProductGrid showFilters />
        </div>
      </section>
    </div>
  )
}
