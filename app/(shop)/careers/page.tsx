'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Briefcase, MapPin, Clock, ArrowRight, Globe, Users, Zap, Heart } from 'lucide-react'

const benefits = [
  {
    icon: Globe,
    title: 'Remote First',
    description: 'Work from anywhere in the world. We believe talent has no borders.',
  },
  {
    icon: Zap,
    title: 'Latest Tech Stack',
    description: 'Work with cutting-edge technologies and modern development practices.',
  },
  {
    icon: Users,
    title: 'Small Team Impact',
    description: 'Your work directly impacts the product. No bureaucracy, just building.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible hours, unlimited PTO, and respect for your personal time.',
  },
]

const positions = [
  {
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote (EU)',
    type: 'Full-time',
    description: 'Build and maintain enterprise-grade platforms using React, Node.js, and modern cloud infrastructure.',
  },
  {
    title: 'Blockchain Developer',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Develop DeFi protocols and smart contracts for our financial platforms.',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote (EU/US)',
    type: 'Full-time',
    description: 'Drive product strategy and roadmap for our enterprise software portfolio.',
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Manage cloud infrastructure, CI/CD pipelines, and ensure platform reliability.',
  },
  {
    title: 'Sales Representative',
    department: 'Sales',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Connect with enterprise clients and help them find the right platform solutions.',
  },
]

export default function CareersPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-50 text-purple-700 border border-purple-100 mb-6">
              <Briefcase className="w-4 h-4" />
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a2e] mb-6">
              Build the Future of
              <br />
              <span className="text-gradient">Enterprise Software</span>
            </h1>
            <p className="text-xl text-[#4a4a68] max-w-3xl mx-auto leading-relaxed">
              We're looking for exceptional people to help us build world-class software platforms.
              Join a team where your work has real impact from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Join Narhub?
            </h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              We offer more than just a job—we offer an opportunity to make a real difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#4a4a68]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              Find your next opportunity and grow with us.
            </p>
          </motion.div>

          <div className="space-y-4">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#1a1a2e]">{position.title}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                        {position.department}
                      </span>
                    </div>
                    <p className="text-[#4a4a68] mb-3">{position.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#71717a]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`mailto:careers@narhub.com?subject=Application: ${position.title}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white font-medium rounded-xl hover:bg-[#2a2a3e] transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* No Position Found */}
      <section className="px-4 py-16 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1a1a2e] mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-[#4a4a68] mb-6">
              We're always looking for talented people. Send us your resume and tell us how you can contribute.
            </p>
            <Link
              href="mailto:careers@narhub.com?subject=General Application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Our Hiring Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-[#1a1a2e]">Application Review</h3>
                  <p className="text-[#4a4a68]">We review your application and respond within 5 business days.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-[#1a1a2e]">Initial Call</h3>
                  <p className="text-[#4a4a68]">30-minute video call to discuss your background and interests.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-[#1a1a2e]">Technical Assessment</h3>
                  <p className="text-[#4a4a68]">Role-specific assessment to evaluate your skills.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-[#1a1a2e]">Final Interview</h3>
                  <p className="text-[#4a4a68]">Meet the team and discuss the role in detail.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                <div>
                  <h3 className="font-semibold text-[#1a1a2e]">Offer</h3>
                  <p className="text-[#4a4a68]">If it's a mutual fit, we'll extend an offer within 48 hours.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
