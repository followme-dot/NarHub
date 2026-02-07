'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ShoppingCart,
  User,
  Search,
  ChevronDown,
  LogIn,
  LogOut,
  Package,
  Sparkles,
} from 'lucide-react'
import { useCartStore } from '@frontend/store/cartStore'
import { useAuth } from '@frontend/hooks/useAuth'

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Bundles', href: '/bundles', highlight: true },
  {
    name: 'Categories',
    href: '#',
    children: [
      { name: 'DeFi & Trading', href: '/products?category=DEFI_TRADING' },
      { name: 'Gaming & Metaverse', href: '/products?category=GAMING_METAVERSE' },
      { name: 'Infrastructure & Identity', href: '/products?category=INFRASTRUCTURE_IDENTITY' },
      { name: 'Enterprise & Compliance', href: '/products?category=ENTERPRISE_COMPLIANCE' },
      { name: 'Enterprise FinTech', href: '/products?category=FINTECH_CORE' },
    ],
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { openCart, getItemCount } = useCartStore()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cartItemCount = getItemCount()

  const handleLogout = async () => {
    await logout('/')
    setUserMenuOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-soft border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/nardihub-logo.png"
              alt="NarHub Logo"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <span className="text-2xl font-display font-bold text-gradient">
              Narhub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[#4a4a68] hover:text-[#1a1a2e] rounded-xl hover:bg-gray-100 transition-all duration-200"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                      item.highlight
                        ? 'text-amber-600 hover:text-amber-700 hover:bg-amber-50'
                        : 'text-[#4a4a68] hover:text-[#1a1a2e] hover:bg-gray-100'
                    }`}
                  >
                    {item.highlight && <Sparkles className="w-4 h-4" />}
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white rounded-xl shadow-strong border border-gray-100 p-2 min-w-[220px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-[#4a4a68] hover:text-[#1a1a2e] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-100 transition-all duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative flex items-center justify-center w-10 h-10 rounded-xl text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-100 transition-all duration-200"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User Menu / Login Button */}
            {isAuthenticated ? (
              <div className="relative hidden md:block">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  onBlur={() => setTimeout(() => setUserMenuOpen(false), 150)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#4a4a68] hover:text-[#1a1a2e] rounded-xl hover:bg-gray-100 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="max-w-[100px] truncate">{user?.name || 'My Account'}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-strong border border-gray-100 p-2"
                    >
                      <Link
                        href="/account"
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#4a4a68] hover:text-[#1a1a2e] hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <User className="w-4 h-4" />
                        My Account
                      </Link>
                      <Link
                        href="/orders"
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#4a4a68] hover:text-[#1a1a2e] hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Package className="w-4 h-4" />
                        My Orders
                      </Link>
                      <hr className="my-2 border-gray-100" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#4a4a68] hover:text-[#1a1a2e] rounded-xl hover:bg-gray-100 transition-all duration-200"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}

            {/* CTA Button */}
            <Link
              href="/products"
              className="hidden md:flex btn-primary text-sm px-6 py-2.5"
            >
              Browse Platforms
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-100 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {item.name}
                      </p>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-[#4a4a68] hover:text-[#1a1a2e] transition-colors duration-200"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-lg font-medium text-[#1a1a2e] hover:text-[#1a1a2e] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <hr className="border-gray-100" />

              <div className="space-y-3">
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/account"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 py-2 text-[#4a4a68] hover:text-[#1a1a2e] transition-colors duration-200"
                    >
                      <User className="w-5 h-5" />
                      <span>My Account</span>
                    </Link>
                    <Link
                      href="/orders"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 py-2 text-[#4a4a68] hover:text-[#1a1a2e] transition-colors duration-200"
                    >
                      <Package className="w-5 h-5" />
                      <span>My Orders</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 py-2 text-red-600 hover:text-red-700 transition-colors duration-200"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 py-2 text-[#4a4a68] hover:text-[#1a1a2e] transition-colors duration-200"
                  >
                    <LogIn className="w-5 h-5" />
                    <span>Login / Register</span>
                  </Link>
                )}
                <Link
                  href="/products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Browse Platforms
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
