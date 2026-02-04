'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Book,
  Code,
  Server,
  Shield,
  Rocket,
  Settings,
  HelpCircle,
  Search,
  ExternalLink,
  ChevronRight
} from 'lucide-react'

const docCategories = [
  {
    icon: Rocket,
    title: 'Getting Started',
    description: 'Quick start guides and platform overviews',
    articles: [
      { title: 'Welcome to Narhub', slug: 'welcome' },
      { title: 'Platform Requirements', slug: 'requirements' },
      { title: 'First Deployment Guide', slug: 'first-deployment' },
      { title: 'Understanding License Types', slug: 'licenses' },
    ],
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Technical documentation for developers',
    articles: [
      { title: 'Code Architecture Overview', slug: 'architecture' },
      { title: 'API Reference', slug: 'api-reference' },
      { title: 'Database Schemas', slug: 'database' },
      { title: 'Environment Configuration', slug: 'environment' },
    ],
  },
  {
    icon: Server,
    title: 'Deployment',
    description: 'Infrastructure and deployment guides',
    articles: [
      { title: 'AWS Deployment', slug: 'aws' },
      { title: 'Google Cloud Platform', slug: 'gcp' },
      { title: 'Azure Deployment', slug: 'azure' },
      { title: 'Docker Configuration', slug: 'docker' },
    ],
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Security best practices and compliance',
    articles: [
      { title: 'Security Overview', slug: 'security-overview' },
      { title: 'Authentication Setup', slug: 'authentication' },
      { title: 'Data Encryption', slug: 'encryption' },
      { title: 'Audit Logging', slug: 'audit-logs' },
    ],
  },
  {
    icon: Settings,
    title: 'Configuration',
    description: 'Customization and configuration options',
    articles: [
      { title: 'White-labeling Guide', slug: 'white-label' },
      { title: 'Feature Flags', slug: 'feature-flags' },
      { title: 'Localization', slug: 'localization' },
      { title: 'Custom Branding', slug: 'branding' },
    ],
  },
  {
    icon: HelpCircle,
    title: 'Support',
    description: 'Troubleshooting and FAQs',
    articles: [
      { title: 'Common Issues', slug: 'common-issues' },
      { title: 'Error Reference', slug: 'errors' },
      { title: 'Contact Support', slug: 'support' },
      { title: 'SLA Information', slug: 'sla' },
    ],
  },
]

const popularArticles = [
  { title: 'First Deployment Guide', category: 'Getting Started', views: '2.4k' },
  { title: 'API Reference', category: 'Development', views: '1.8k' },
  { title: 'AWS Deployment', category: 'Deployment', views: '1.5k' },
  { title: 'Security Overview', category: 'Security', views: '1.2k' },
]

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 py-16 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-6">
              <Book className="w-4 h-4" />
              Documentation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a2e] mb-6">
              Documentation
            </h1>
            <p className="text-xl text-[#4a4a68] max-w-3xl mx-auto leading-relaxed mb-8">
              Everything you need to deploy, configure, and maintain your Narhub platforms.
              Comprehensive guides for every step of your journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#71717a]" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-[#1a1a2e] placeholder:text-gray-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-4 py-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm text-[#71717a]">Quick links:</span>
            {['Getting Started', 'API Reference', 'Deployment', 'Security'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-[#4a4a68] hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Popular Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularArticles.map((article, index) => (
              <motion.a
                key={article.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <span className="text-xs text-blue-600 font-medium">{article.category}</span>
                <h3 className="font-semibold text-[#1a1a2e] mt-1 mb-2">{article.title}</h3>
                <span className="text-xs text-[#71717a]">{article.views} views</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="px-4 py-12 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.title}
                id={category.title.toLowerCase().replace(' ', '-')}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e]">{category.title}</h3>
                    <p className="text-xs text-[#71717a]">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article.slug}>
                      <a
                        href={`#${article.slug}`}
                        className="flex items-center justify-between py-2 text-sm text-[#4a4a68] hover:text-blue-600 transition-colors group"
                      >
                        <span>{article.title}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform-Specific Docs */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2">Platform-Specific Documentation</h2>
            <p className="text-[#4a4a68]">
              Each platform includes comprehensive documentation tailored to its features.
            </p>
          </motion.div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
            <p className="text-[#4a4a68] mb-4">
              Platform documentation is available after purchase and includes:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Setup Guide', 'API Docs', 'Admin Guide', 'User Manual', 'Deployment Script'].map((doc) => (
                <span
                  key={doc}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-[#4a4a68]"
                >
                  {doc}
                </span>
              ))}
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 mt-6 text-blue-600 font-medium hover:underline"
            >
              Browse Platforms
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="px-4 py-12 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Need Help?</h2>
            <p className="text-[#4a4a68] mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </Link>
              <a
                href="mailto:support@narhub.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-[#4a4a68] font-medium rounded-xl hover:border-blue-300 transition-colors"
              >
                support@narhub.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
