'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Globe, Users, Code, Zap, Building2, MapPin } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Every platform undergoes triple auditing before release. Your data and your clients\' data are protected by enterprise-grade security.',
  },
  {
    icon: Code,
    title: 'Code Excellence',
    description: 'Over 400,000 lines of clean, documented, maintainable code. Zero technical debt. Built to scale.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'From purchase to production in 7-8 weeks. Our deployment pipeline is battle-tested and proven.',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'We measure our success by your success. Dedicated support and consultation throughout your journey.',
  },
]

const stats = [
  { value: '19', label: 'Enterprise Platforms' },
  { value: '$375M+', label: 'Total Valuation' },
  { value: '400K+', label: 'Lines of Code' },
  { value: '7-8', label: 'Weeks to Deploy' },
]

const locations = [
  { city: 'Tallinn', country: 'Estonia', type: 'Headquarters', flag: '🇪🇪' },
  { city: 'Panama City', country: 'Panama', type: 'Operations', flag: '🇵🇦' },
  { city: 'Delaware', country: 'USA', type: 'Legal Entity', flag: '🇺🇸' },
]

export default function AboutPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-6">
              <Building2 className="w-4 h-4" />
              About Narhub
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a2e] mb-6">
              Building the Future of
              <br />
              <span className="text-gradient">Enterprise Software</span>
            </h1>
            <p className="text-xl text-[#4a4a68] max-w-3xl mx-auto leading-relaxed">
              We are ffollowme oü, a technology company headquartered in Estonia. We build, curate,
              and deliver production-ready enterprise software platforms that generate real revenue
              from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
              >
                <p className="text-3xl md:text-4xl font-mono font-bold text-gradient">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[#4a4a68]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[#4a4a68] leading-relaxed mb-4">
                We believe that world-class software shouldn't require years of development and
                millions in investment. Our mission is to democratize access to enterprise-grade
                technology by providing fully developed, production-ready platforms that can be
                deployed in weeks, not years.
              </p>
              <p className="text-lg text-[#4a4a68] leading-relaxed">
                Every platform in our portfolio has been meticulously developed, rigorously tested,
                and designed for immediate deployment. We don't sell dreams or prototypes—we deliver
                complete, working solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <Globe className="w-24 h-24 mx-auto text-blue-600 mb-6" />
                  <p className="text-2xl font-display font-bold text-[#1a1a2e] mb-2">
                    Global Reach
                  </p>
                  <p className="text-[#4a4a68]">
                    Operating across 3 continents
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
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
              Leadership Team
            </h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              The visionaries behind Narhub and our enterprise software ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Rafael Baena Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 text-center group"
            >
              {/* Photo Circle */}
              <div className="relative mx-auto mb-6 w-40 h-40">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src="/Rafael baena Alvarez.jpg"
                      alt="Rafael Baena Alvarez"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">
                Rafael Baena Alvarez
              </h3>
              <p className="text-blue-600 font-semibold mb-4">
                Chief Executive Officer
              </p>

              {/* Roles */}
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
                  <Building2 className="w-4 h-4" />
                  CEO - ffollowme oü
                </span>
                <br />
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-purple-50 text-purple-700 border border-purple-100 mt-2">
                  CEO - Nardiha Genesis Realms
                </span>
              </div>

              <p className="text-[#4a4a68] mt-6 text-sm leading-relaxed">
                Founder and visionary leader driving the development of enterprise-grade software platforms across DeFi, Gaming, and Enterprise solutions.
              </p>
            </motion.div>

            {/* Edwards J. Rico Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-500 text-center group"
            >
              {/* Photo Circle */}
              <div className="relative mx-auto mb-6 w-40 h-40">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src="/Edwards J. Rico.jpg"
                      alt="Edwards J. Rico"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-green-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">
                Edwards J. Rico
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                Chief Sales Officer
              </p>

              {/* Roles */}
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-100">
                  <Globe className="w-4 h-4" />
                  Sales Director - LATAM & USA
                </span>
              </div>

              <p className="text-[#4a4a68] mt-6 text-sm leading-relaxed">
                Exclusive sales representative for all Narhub software platforms in Latin America and the United States. Your trusted partner for enterprise acquisitions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              The principles that guide everything we build and deliver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{value.title}</h3>
                <p className="text-[#4a4a68]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
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
              Trust & Compliance
            </h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              Industry certifications and compliance standards we maintain
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'SOC 2 Type II', description: 'Certified' },
              { icon: Award, label: 'GDPR', description: 'Compliant' },
              { icon: Globe, label: 'ISO 27001', description: 'Certified' },
              { icon: Shield, label: '$250M', description: 'Insured' },
            ].map((cert, index) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <cert.icon className="w-6 h-6 text-green-600" />
                </div>
                <p className="font-bold text-[#1a1a2e]">{cert.label}</p>
                <p className="text-sm text-[#71717a]">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
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
              Our Locations
            </h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              Strategic presence across the globe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center"
              >
                <span className="text-4xl mb-4 block">{location.flag}</span>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-1">{location.city}</h3>
                <p className="text-[#4a4a68] mb-2">{location.country}</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  <MapPin className="w-3 h-3" />
                  {location.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Company Information</h2>
            <div className="grid md:grid-cols-2 gap-6 text-[#4a4a68]">
              <div>
                <p className="font-semibold text-[#1a1a2e] mb-1">Legal Name</p>
                <p>ffollowme oü</p>
              </div>
              <div>
                <p className="font-semibold text-[#1a1a2e] mb-1">Commercial Name</p>
                <p>Narhub</p>
              </div>
              <div>
                <p className="font-semibold text-[#1a1a2e] mb-1">Jurisdiction</p>
                <p>Republic of Estonia, European Union</p>
              </div>
              <div>
                <p className="font-semibold text-[#1a1a2e] mb-1">Industry</p>
                <p>Enterprise Software / SaaS</p>
              </div>
              <div>
                <p className="font-semibold text-[#1a1a2e] mb-1">Founded</p>
                <p>2020</p>
              </div>
              <div>
                <p className="font-semibold text-[#1a1a2e] mb-1">Website</p>
                <p>narhub.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
