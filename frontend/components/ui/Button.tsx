'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@frontend/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      relative inline-flex items-center justify-center font-medium
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white
      disabled:opacity-50 disabled:cursor-not-allowed
      overflow-hidden
    `

    const variants = {
      primary: `
        bg-gradient-to-r from-blue-600 to-purple-600
        text-white
        hover:shadow-lg hover:shadow-blue-500/30
        focus:ring-blue-500
        before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%]
        hover:before:translate-x-[100%] before:transition-transform before:duration-500
      `,
      secondary: `
        bg-white
        text-[#1a1a2e]
        border-2 border-gray-200
        hover:bg-gray-50 hover:border-blue-300
        focus:ring-blue-500
      `,
      outline: `
        bg-transparent
        text-blue-600
        border-2 border-blue-600
        hover:bg-blue-50
        focus:ring-blue-500
      `,
      ghost: `
        bg-transparent
        text-[#4a4a68]
        hover:text-[#1a1a2e] hover:bg-gray-100
        focus:ring-blue-500
      `,
      danger: `
        bg-red-600
        text-white
        hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30
        focus:ring-red-500
      `,
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-lg gap-1.5',
      md: 'px-5 py-2.5 text-base rounded-xl gap-2',
      lg: 'px-8 py-3.5 text-lg rounded-xl gap-2.5',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

// Motion button for animated interactions
export const MotionButton = forwardRef<
  HTMLButtonElement,
  ButtonProps & Omit<HTMLMotionProps<'button'>, keyof ButtonProps>
>(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...(props as any)}
    />
  )
})

MotionButton.displayName = 'MotionButton'

export default Button
