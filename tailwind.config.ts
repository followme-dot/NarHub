import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './frontend/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Narhub Light Theme - Professional
        'narhub': {
          'white': '#ffffff',
          'light': '#fafbfc',
          'gray-50': '#f8fafc',
          'gray-100': '#f1f5f9',
          'gray-200': '#e2e8f0',
          'gray-300': '#cbd5e1',
          'gray-400': '#94a3b8',
          'gray-500': '#64748b',
          'gray-600': '#475569',
          'gray-700': '#334155',
          'gray-800': '#1e293b',
          'gray-900': '#0f172a',
          'primary': '#0066ff',
          'primary-dark': '#0052cc',
          'primary-light': '#3385ff',
          'secondary': '#7c3aed',
          'border': '#e2e8f0',
          // Text Colors - HIGH LEGIBILITY
          'text': '#1a1a2e',
          'text-secondary': '#4a4a68',
          'text-muted': '#71717a',
          // Legacy compatibility
          'black': '#0f172a',
          'darker': '#1e293b',
          'dark': '#334155',
          'gray': '#475569',
        },
        // Brand Colors
        'brand': {
          'blue': '#0066ff',
          'purple': '#7c3aed',
          'cyan': '#06b6d4',
          'green': '#10b981',
          'amber': '#f59e0b',
          'red': '#ef4444',
        },
        // Accent Colors (legacy support)
        'accent': {
          'lime': '#10b981',
          'cyan': '#06b6d4',
          'purple': '#7c3aed',
          'amber': '#f59e0b',
          'pink': '#ec4899',
        },
      },
      fontFamily: {
        'display': ['var(--font-outfit)', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-outfit)', 'Inter', 'sans-serif'],
        'mono': ['var(--font-jetbrains)', 'JetBrains Mono', 'Courier New', 'monospace'],
        'body': ['var(--font-inter)', 'Inter', '-apple-system', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fade-in 0.5s ease forwards',
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
        'scale-in': 'scale-in 0.3s ease forwards',
        'slide-in-right': 'slide-in-right 0.4s ease forwards',
        'slide-in-left': 'slide-in-left 0.4s ease forwards',
        'slide-up': 'slide-up 0.4s ease forwards',
        'loading-bar': 'loading-bar 10s ease-in-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 102, 255, 0.2), 0 0 40px rgba(0, 102, 255, 0.1)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(0, 102, 255, 0.3), 0 0 60px rgba(0, 102, 255, 0.15)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'loading-bar': {
          '0%': { width: '0%' },
          '10%': { width: '15%' },
          '30%': { width: '40%' },
          '50%': { width: '60%' },
          '70%': { width: '75%' },
          '90%': { width: '90%' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse 80% 50% at 50% -20%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0066ff 0%, #7c3aed 100%)',
        'gradient-success': 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'intense': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.12)',
        'button': '0 4px 14px rgba(0, 102, 255, 0.4)',
        'button-hover': '0 8px 25px rgba(0, 102, 255, 0.5)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
