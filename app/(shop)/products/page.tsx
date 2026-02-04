import { Metadata } from 'next'
import ProductGrid from '@frontend/components/products/ProductGrid'

export const metadata: Metadata = {
  title: 'Productos | Narhub',
  description: 'Explora nuestro catálogo de 19 soluciones de software empresarial valoradas en $375M',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-24 bg-white">
      {/* Hero */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">
            Nuestros Productos
          </h1>
          <p className="text-xl text-[#4a4a68] max-w-3xl mx-auto leading-relaxed">
            19 soluciones de software empresarial desarrolladas con tecnología
            de vanguardia. Cada producto ha sido diseñado para transformar
            industrias específicas.
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
