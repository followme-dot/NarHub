'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, Mail, ExternalLink, Calendar, FileText, Image as ImageIcon } from 'lucide-react'

const pressReleases = [
  {
    date: '2026-01-15',
    title: 'Narhub Announces €15.99M Enterprise Software Portfolio',
    excerpt: 'ffollowme oü launches Narhub marketplace with 36 production-ready enterprise platforms.',
  },
  {
    date: '2025-11-20',
    title: 'Narhub Achieves SOC 2 Type II Certification',
    excerpt: 'Company completes rigorous security audit, reinforcing commitment to enterprise security standards.',
  },
  {
    date: '2025-09-05',
    title: 'Narhub Expands Operations to Panama and Delaware',
    excerpt: 'Strategic expansion enables better service for North and South American clients.',
  },
]

const mediaAssets = [
  {
    title: 'Narhub Logo Pack',
    description: 'High-resolution logos in various formats (PNG, SVG, EPS)',
    type: 'ZIP',
    size: '2.4 MB',
  },
  {
    title: 'Brand Guidelines',
    description: 'Complete brand identity guidelines and usage rules',
    type: 'PDF',
    size: '8.1 MB',
  },
  {
    title: 'Product Screenshots',
    description: 'High-resolution screenshots of our platforms',
    type: 'ZIP',
    size: '45 MB',
  },
  {
    title: 'Executive Headshots',
    description: 'Professional photos of leadership team',
    type: 'ZIP',
    size: '12 MB',
  },
]

const companyFacts = [
  { label: 'Founded', value: '2020' },
  { label: 'Headquarters', value: 'Tallinn, Estonia' },
  { label: 'Platforms', value: '36 Enterprise Solutions' },
  { label: 'Portfolio Value', value: '€15.99M' },
  { label: 'Lines of Code', value: '750K+' },
  { label: 'Deployment Time', value: '5-8 Weeks' },
]

export default function PressPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-50 text-green-700 border border-green-100 mb-6">
              <FileText className="w-4 h-4" />
              Press & Media
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a2e] mb-6">
              Press Kit
            </h1>
            <p className="text-xl text-[#4a4a68] max-w-3xl mx-auto leading-relaxed">
              Everything journalists, analysts, and partners need to write about Narhub.
              For press inquiries, contact our media team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
          >
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-2">Media Inquiries</h2>
            <p className="text-white/80 mb-4">
              For interviews, comments, or additional information
            </p>
            <a
              href="mailto:press@narhub.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              press@narhub.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="px-4 py-16 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e] mb-4">
              Company Facts
            </h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              Key information about Narhub at a glance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companyFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center"
              >
                <p className="text-xl font-bold text-gradient">{fact.value}</p>
                <p className="text-sm text-[#71717a] mt-1">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Narhub (Boilerplate) */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-[#1a1a2e] mb-6">
              About Narhub
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <p className="text-[#4a4a68] leading-relaxed mb-4">
                <strong>Narhub</strong> is the commercial brand of <strong>ffollowme oü</strong>,
                an Estonian technology company specializing in enterprise software development and acquisition.
                Founded in 2020, Narhub operates a marketplace of 36 production-ready enterprise platforms
                spanning DeFi, gaming, infrastructure, and enterprise compliance sectors.
              </p>
              <p className="text-[#4a4a68] leading-relaxed mb-4">
                With over 750,000 lines of audited code and a total portfolio valuation of €15.99 million,
                Narhub enables businesses to deploy sophisticated software solutions in 5-8 weeks rather than
                the typical 2-3 years of development. Each platform comes with full source code, documentation,
                and deployment support.
              </p>
              <p className="text-[#4a4a68] leading-relaxed">
                Narhub is SOC 2 Type II certified, GDPR compliant, and maintains operations in Estonia,
                Panama, and the United States.
              </p>
            </div>
            <p className="text-sm text-[#71717a] mt-4 text-center">
              This boilerplate may be used in articles about Narhub. Please include our website: narhub.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="px-4 py-16 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e] mb-4">
              Press Releases
            </h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              Recent announcements and news from Narhub
            </p>
          </motion.div>

          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#71717a] mb-1">
                      {new Date(release.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{release.title}</h3>
                    <p className="text-[#4a4a68]">{release.excerpt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e] mb-4">
              Media Assets
            </h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              Download official Narhub branding materials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaAssets.map((asset, index) => (
              <motion.div
                key={asset.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      {asset.type === 'ZIP' ? (
                        <ImageIcon className="w-6 h-6 text-[#4a4a68]" />
                      ) : (
                        <FileText className="w-6 h-6 text-[#4a4a68]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a2e] mb-1">{asset.title}</h3>
                      <p className="text-sm text-[#4a4a68] mb-2">{asset.description}</p>
                      <p className="text-xs text-[#71717a]">
                        {asset.type} • {asset.size}
                      </p>
                    </div>
                  </div>
                  <button className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <Download className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#71717a]">
              By downloading these assets, you agree to use them in accordance with our{' '}
              <Link href="/terms" className="text-blue-600 hover:underline">
                brand guidelines
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="px-4 py-16 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6 text-center">Brand Usage Guidelines</h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-green-600 mb-3">✓ Do</h3>
                  <ul className="space-y-2 text-[#4a4a68] text-sm">
                    <li>Use official logos from our press kit</li>
                    <li>Maintain clear space around the logo</li>
                    <li>Use "Narhub" (not "NarHub" or "NARHUB")</li>
                    <li>Link to narhub.com in digital publications</li>
                    <li>Contact us for approval on prominent usage</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-3">✗ Don't</h3>
                  <ul className="space-y-2 text-[#4a4a68] text-sm">
                    <li>Modify or distort the logo</li>
                    <li>Change the logo colors</li>
                    <li>Use the logo to imply endorsement</li>
                    <li>Place the logo on busy backgrounds</li>
                    <li>Recreate or redraw the logo</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
