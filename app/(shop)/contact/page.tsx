'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, MessageSquare, Phone, Globe } from 'lucide-react'
import Button from '@frontend/components/ui/Button'
import Input from '@frontend/components/ui/Input'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'For general inquiries and support',
    value: 'info@ffollowme.com',
    href: 'mailto:info@ffollowme.com',
  },
  {
    icon: MessageSquare,
    title: 'Sales Inquiries',
    description: 'For platform purchases and demos',
    value: 'sales@ffollowme.com',
    href: 'mailto:sales@ffollowme.com',
  },
  {
    icon: Globe,
    title: 'Legal Department',
    description: 'For legal and compliance matters',
    value: 'legal@ffollowme.com',
    href: 'mailto:legal@ffollowme.com',
  },
]

const offices = [
  {
    city: 'Tallinn',
    country: 'Estonia',
    type: 'Headquarters',
    address: 'Tallinn, Estonia',
    timezone: 'EET (UTC+2)',
    flag: '🇪🇪',
  },
  {
    city: 'Panama City',
    country: 'Panama',
    type: 'Operations',
    address: 'Panama City, Panama',
    timezone: 'EST (UTC-5)',
    flag: '🇵🇦',
  },
  {
    city: 'Delaware',
    country: 'USA',
    type: 'Legal Entity',
    address: 'Delaware, USA',
    timezone: 'EST (UTC-5)',
    flag: '🇺🇸',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    type: 'general',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
              Get in Touch
            </h1>
            <p className="text-xl text-[#4a4a68] max-w-3xl mx-auto leading-relaxed">
              Have questions about our platforms? Want to schedule a demo? We're here to help.
              Reach out and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 block"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">{method.title}</h3>
                <p className="text-sm text-[#71717a] mb-2">{method.description}</p>
                <p className="text-blue-600 font-medium">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Send us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-[#4a4a68] mb-2">
                      Type of Inquiry
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'general', label: 'General' },
                        { id: 'sales', label: 'Sales' },
                        { id: 'support', label: 'Support' },
                        { id: 'partnership', label: 'Partnership' },
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, type: type.id }))}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                            formData.type === type.id
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-[#4a4a68] hover:bg-gray-200'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  <Input
                    label="Company (Optional)"
                    type="text"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  />

                  <Input
                    label="Subject"
                    type="text"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-[#4a4a68] mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                      className="w-full px-4 py-3 text-[#1a1a2e] placeholder:text-gray-400 rounded-xl transition-all duration-300 focus:outline-none bg-white border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>

                  <p className="text-sm text-[#71717a] text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Our Offices</h2>

              <div className="space-y-4">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{office.flag}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-[#1a1a2e]">{office.city}</h3>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                            {office.type}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-[#4a4a68]">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#71717a]" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#71717a]" />
                            <span>{office.timezone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-[#4a4a68]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EET</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="font-medium text-[#71717a]">Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#71717a]">
                  Response time: Within 24 business hours
                </p>
              </div>

              {/* Emergency Contact */}
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-2">Urgent Support</h3>
                <p className="text-amber-700 text-sm">
                  For urgent matters regarding active deployments or critical issues,
                  please email <strong>info@ffollowme.com</strong> with "URGENT" in the subject line.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#4a4a68]">
            Looking for quick answers? Check our{' '}
            <a href="/#faq" className="text-blue-600 hover:underline font-medium">
              Frequently Asked Questions
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
