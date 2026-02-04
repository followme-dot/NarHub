'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    slug: 'enterprise-software-2026',
    title: 'The State of Enterprise Software in 2026',
    excerpt: 'An analysis of current trends, challenges, and opportunities in the enterprise software market.',
    category: 'Industry',
    date: '2026-01-28',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'defi-platforms-guide',
    title: 'Building DeFi Platforms: A Complete Guide',
    excerpt: 'Everything you need to know about launching a successful DeFi platform in today\'s market.',
    category: 'DeFi',
    date: '2026-01-20',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'security-audit-importance',
    title: 'Why Security Audits Matter for Enterprise Software',
    excerpt: 'Understanding the critical role of security audits in protecting your business and users.',
    category: 'Security',
    date: '2026-01-15',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'fast-deployment-strategies',
    title: '7-Week Deployment: How We Do It',
    excerpt: 'Inside look at our deployment process that gets enterprise platforms live in weeks, not years.',
    category: 'Engineering',
    date: '2026-01-10',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'saas-acquisition-tips',
    title: 'Acquiring SaaS Platforms: What to Look For',
    excerpt: 'Key considerations when evaluating software platforms for acquisition or licensing.',
    category: 'Business',
    date: '2026-01-05',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'gdpr-compliance-guide',
    title: 'GDPR Compliance for SaaS Platforms',
    excerpt: 'A practical guide to ensuring your software platform meets GDPR requirements.',
    category: 'Compliance',
    date: '2025-12-28',
    readTime: '9 min read',
    featured: false,
  },
]

const categories = ['All', 'Industry', 'DeFi', 'Security', 'Engineering', 'Business', 'Compliance']

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a2e] mb-6">
              Narhub Blog
            </h1>
            <p className="text-xl text-[#4a4a68] max-w-3xl mx-auto leading-relaxed">
              Insights, guides, and updates from the Narhub team.
              Learn about enterprise software, DeFi, security, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-[#4a4a68] hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#71717a]">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#4a4a68] mb-6 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-[#71717a]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="px-4 py-12 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-600">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#4a4a68] mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-[#71717a]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-white border border-gray-200 text-[#4a4a68] font-medium rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get the latest insights on enterprise software, DeFi, and technology trends
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-[#1a1a2e] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-white/60 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
