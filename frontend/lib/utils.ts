import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines class names using clsx and tailwind-merge
 * This allows for conditional classes and proper Tailwind class merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format price for display
 * Price is expected in centavos (e.g., 32000000 = €320,000)
 */
export function formatPrice(price: number): string {
  const priceInEuros = price / 100

  if (priceInEuros >= 1000000) {
    return `€${(priceInEuros / 1000000).toFixed(2)}M`
  }
  if (priceInEuros >= 1000) {
    return `€${(priceInEuros / 1000).toFixed(0)}K`
  }
  return `€${priceInEuros.toFixed(0)}`
}

/**
 * Format price range for display
 */
export function formatPriceRange(min: number, max: number): string {
  if (min === max) {
    return formatPrice(min)
  }
  return `${formatPrice(min)} - ${formatPrice(max)}`
}

/**
 * Generate slug from string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Generate random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

/**
 * Check if we're on the client side
 */
export const isClient = typeof window !== 'undefined'

/**
 * Check if we're on the server side
 */
export const isServer = typeof window === 'undefined'

/**
 * Sleep utility for async operations
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Parse price string to numbers (e.g., "$15M-$18M" -> { min: 15000000, max: 18000000 })
 */
export function parsePriceString(priceStr: string): { min: number; max: number } {
  const matches = priceStr.match(/\$?(\d+(?:\.\d+)?)[MKB]?/gi)
  if (!matches || matches.length === 0) {
    return { min: 0, max: 0 }
  }

  const parseValue = (str: string): number => {
    const num = parseFloat(str.replace(/[$,]/g, ''))
    if (str.toUpperCase().includes('B')) return num * 1_000_000_000
    if (str.toUpperCase().includes('M')) return num * 1_000_000
    if (str.toUpperCase().includes('K')) return num * 1_000
    return num
  }

  if (matches.length === 1) {
    const value = parseValue(matches[0])
    return { min: value, max: value }
  }

  const values = matches.map(parseValue).sort((a, b) => a - b)
  return { min: values[0], max: values[values.length - 1] }
}
