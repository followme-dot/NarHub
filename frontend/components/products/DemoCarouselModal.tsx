'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

interface DemoCarouselModalProps {
  isOpen: boolean
  onClose: () => void
  productSlug: string
  productName: string
}

export default function DemoCarouselModal({
  isOpen,
  onClose,
  productSlug,
  productName
}: DemoCarouselModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [images, setImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      // Cargar imágenes disponibles para este producto
      const loadImages = async () => {
        try {
          setIsLoading(true)
          // Intentar cargar hasta 10 imágenes
          const imagePromises = []
          for (let i = 1; i <= 10; i++) {
            const paddedNum = i.toString().padStart(2, '0')
            imagePromises.push(
              fetch(`/images/platforms/${productSlug}/${paddedNum}-*.png`)
                .then(res => res.ok ? `/images/platforms/${productSlug}/${paddedNum}` : null)
                .catch(() => null)
            )
          }

          // Cargar todas las imágenes disponibles en la carpeta
          const availableImages: string[] = []

          // Intentar cargar las imágenes comunes primero
          const imagePatterns = [
            '01-home-hero.png', '01-landing-hero.png', '01-Home-Swap.png', '01-homepage.png',
            '01_Home.png', '01-home.png', '01-splash-screen.png', '01-Landing-Page.png',
            '02-home-features.png', '02-landing-features.png', '02-Swap-TokenSelector.png',
            '02-marketplace.png', '02_Browse.png', '02-about.png', '02-login.png', '02-Login-Screen.png',
            '03-home-how-it-works.png', '03-landing-howitworks.png', '03-Swap-Settings.png',
            '03-tournaments.png', '03_Marketplace.png', '03-dashboard.png', '03-Dashboard-Overview.png',
            '04-home-chains.png', '04-landing-pricing.png',
            '05-home-footer.png', '05-home-products.png'
          ]

          for (const pattern of imagePatterns) {
            availableImages.push(`/images/platforms/${productSlug}/${pattern}`)
          }

          setImages(availableImages.slice(0, 6)) // Máximo 6 imágenes
          setIsLoading(false)
        } catch (error) {
          console.error('Error loading images:', error)
          setIsLoading(false)
        }
      }

      loadImages()
      setCurrentIndex(0)
    }
  }, [isOpen, productSlug])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl p-4 md:p-8"
        onClick={onClose}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative w-full max-w-7xl bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Elegant Header */}
          <div className="relative z-10 px-8 py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {productName}
                  </h2>
                  <p className="text-gray-400 text-sm font-medium">
                    Live Platform Demo
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Close demo"
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* Premium Carousel Content */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {isLoading ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="relative">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500/30 border-t-blue-500"></div>
                  <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-blue-500/20"></div>
                </div>
                <p className="text-gray-400 font-medium">Loading demo...</p>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -100 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1] // Custom easing for smooth, professional feel
                  }}
                  className="absolute inset-0 p-6"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                    <Image
                      src={images[currentIndex]}
                      alt={`${productName} screenshot ${currentIndex + 1}`}
                      fill
                      className="object-contain bg-white"
                      priority={currentIndex === 0}
                      onError={(e) => {
                        // Fallback si la imagen no se carga
                        console.error('Error loading image:', images[currentIndex])
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

            {/* Navigation Arrows */}
            {!isLoading && images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </>
            )}
          </div>

          {/* Footer with Indicators */}
          {!isLoading && (
            <div className="p-6 bg-gradient-to-t from-gray-50 to-white">
              <div className="flex items-center justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-blue-600'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
