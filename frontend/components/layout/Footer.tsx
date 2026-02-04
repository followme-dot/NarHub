'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Mail,
  Linkedin,
  Twitter,
  Github,
  MapPin,
  ArrowUpRight,
  Shield,
  Lock,
  Globe,
} from 'lucide-react'

const footerLinks = {
  products: {
    title: 'Products',
    links: [
      { name: 'DeFi & Trading', href: '/products?category=DEFI_TRADING' },
      { name: 'Gaming & Metaverse', href: '/products?category=GAMING_METAVERSE' },
      { name: 'Infrastructure', href: '/products?category=INFRASTRUCTURE_IDENTITY' },
      { name: 'Enterprise', href: '/products?category=ENTERPRISE_COMPLIANCE' },
      { name: 'All Platforms', href: '/products' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Platform Catalog', href: '/catalog.pdf' },
      { name: 'FAQ', href: '/#faq' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
  },
}

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ffollowme', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ffollowme', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/ffollowme', icon: Github },
]

const trustBadges = [
  { icon: Shield, label: 'SOC 2 Certified', color: 'text-blue-500' },
  { icon: Lock, label: 'GDPR Compliant', color: 'text-green-500' },
  { icon: Globe, label: '$250M Insured', color: 'text-purple-500' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#fcfcfd] border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/nardihub-logo.png"
                alt="NarHub Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-3xl font-display font-bold text-gradient">
                Narhub
              </span>
            </Link>
            <p className="mt-4 text-[#4a4a68] text-sm leading-relaxed max-w-xs">
              Enterprise software marketplace. 19 production-ready platforms.
              Deploy in 7 weeks. Profit tomorrow.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@ffollowme.com"
                className="flex items-center gap-2 text-sm text-[#4a4a68] hover:text-blue-600 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                info@ffollowme.com
              </a>
              <div className="flex items-center gap-2 text-sm text-[#71717a]">
                <MapPin className="w-4 h-4" />
                Tallinn • Panama • Delaware
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-gray-200/60 text-[#4a4a68] hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-[#1a1a2e] uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#4a4a68] hover:text-[#1a1a2e] transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      {link.href.startsWith('http') && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges Section */}
        <div className="mt-12 pt-8 border-t border-gray-200/60">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-100"
              >
                <badge.icon className={`w-4 h-4 ${badge.color}`} />
                <span className="text-sm font-medium text-[#4a4a68]">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-[#71717a]">
              © {new Date().getFullYear()} ffollowme oü. All rights reserved.
            </p>

            {/* Payment Methods / Additional Info */}
            <div className="flex items-center gap-6 text-sm text-[#71717a]">
              <span>Enterprise Grade Security</span>
              <span>•</span>
              <span>24/7 Support</span>
              <span>•</span>
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
